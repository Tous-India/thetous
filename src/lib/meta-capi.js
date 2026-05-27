// Server-side Meta Conversions API helper.
// Posts a single event to Meta Graph API via plain fetch().
// Designed to fail silently — callers should never have their flow broken
// by a Meta outage, missing env vars, or hashing edge cases.

import crypto from "node:crypto";

const GRAPH_API_VERSION = "v19.0";

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

  const userDataPayload = {};
  const hashedEmail = hashLower(userData.email);
  const hashedPhone = hashPhone(userData.phone);
  const hashedFirstName = hashLower(userData.firstName);
  const hashedLastName = hashLower(userData.lastName);
  if (hashedEmail) userDataPayload.em = [hashedEmail];
  if (hashedPhone) userDataPayload.ph = [hashedPhone];
  if (hashedFirstName) userDataPayload.fn = [hashedFirstName];
  if (hashedLastName) userDataPayload.ln = [hashedLastName];
  if (clientIp) userDataPayload.client_ip_address = clientIp;
  if (clientUserAgent) userDataPayload.client_user_agent = clientUserAgent;
  if (userData.fbp) userDataPayload.fbp = userData.fbp;
  if (userData.fbc) userDataPayload.fbc = userData.fbc;

  const customDataPayload = {};
  Object.entries(customData).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== "") {
      customDataPayload[k] = String(v);
    }
  });

  const event = {
    event_name: eventName,
    event_time: Math.floor(Date.now() / 1000),
    action_source: "website",
    user_data: userDataPayload,
  };
  if (eventId) event.event_id = eventId;
  if (eventSourceUrl) event.event_source_url = eventSourceUrl;
  if (Object.keys(customDataPayload).length > 0) {
    event.custom_data = customDataPayload;
  }

  const body = { data: [event], access_token: accessToken };
  if (testEventCode) body.test_event_code = testEventCode;

  const url = `https://graph.facebook.com/${GRAPH_API_VERSION}/${pixelId}/events`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      console.warn(
        `[meta-capi] Meta returned ${response.status}: ${errorText}`
      );
      return { ok: false, status: response.status, error: errorText };
    }

    const json = await response.json().catch(() => ({}));
    return { ok: true, response: json };
  } catch (err) {
    console.warn(
      "[meta-capi] event send failed:",
      err?.message || String(err)
    );
    return { ok: false, error: err?.message || String(err) };
  }
}
