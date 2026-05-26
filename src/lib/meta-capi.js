// Server-side Meta Conversions API helper.
// Sends a single event to Meta's Graph API via the official SDK.
// Designed to fail silently — callers should never have their flow broken
// by a Meta outage, missing env vars, or hashing edge cases.

import crypto from "node:crypto";
import bizSdk from "facebook-nodejs-business-sdk";

const { ServerEvent, EventRequest, UserData, CustomData, FacebookAdsApi } =
  bizSdk;

const hashLower = (value) => {
  if (value === undefined || value === null || value === "") return undefined;
  return crypto
    .createHash("sha256")
    .update(String(value).trim().toLowerCase())
    .digest("hex");
};

// Meta expects phone as digits-only (country code included if available), hashed.
const hashPhone = (value) => {
  if (value === undefined || value === null || value === "") return undefined;
  const digits = String(value).replace(/\D/g, "");
  if (!digits) return undefined;
  return crypto.createHash("sha256").update(digits).digest("hex");
};

export async function sendMetaEvent({
  eventName,
  eventId,
  userData = {},
  customData = {},
  eventSourceUrl,
  clientIp,
  clientUserAgent,
} = {}) {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;
  const testEventCode = process.env.META_TEST_EVENT_CODE;

  if (!pixelId || !accessToken) {
    console.warn(
      "[meta-capi] META_PIXEL_ID or META_ACCESS_TOKEN not set — event skipped"
    );
    return { skipped: true };
  }
  if (!eventName) {
    console.warn("[meta-capi] eventName required — event skipped");
    return { skipped: true };
  }

  try {
    FacebookAdsApi.init(accessToken);

    const ud = new UserData();
    if (userData.email) ud.setEmail(hashLower(userData.email));
    if (userData.phone) ud.setPhone(hashPhone(userData.phone));
    if (userData.firstName) ud.setFirstName(hashLower(userData.firstName));
    if (userData.lastName) ud.setLastName(hashLower(userData.lastName));
    if (clientIp) ud.setClientIpAddress(clientIp);
    if (clientUserAgent) ud.setClientUserAgent(clientUserAgent);
    if (userData.fbp) ud.setFbp(userData.fbp);
    if (userData.fbc) ud.setFbc(userData.fbc);

    const cd = new CustomData();
    const customProps = {};
    Object.entries(customData).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== "") {
        customProps[k] = String(v);
      }
    });
    if (Object.keys(customProps).length > 0) {
      cd.setCustomProperties(customProps);
    }

    const event = new ServerEvent()
      .setEventName(eventName)
      .setEventTime(Math.floor(Date.now() / 1000))
      .setActionSource("website")
      .setUserData(ud)
      .setCustomData(cd);

    if (eventId) event.setEventId(eventId);
    if (eventSourceUrl) event.setEventSourceUrl(eventSourceUrl);

    const req = new EventRequest(accessToken, pixelId).setEvents([event]);
    if (testEventCode) req.setTestEventCode(testEventCode);

    const response = await req.execute();
    return { ok: true, response };
  } catch (err) {
    console.warn(
      "[meta-capi] event send failed:",
      err?.message || String(err)
    );
    return { ok: false, error: err?.message || String(err) };
  }
}
