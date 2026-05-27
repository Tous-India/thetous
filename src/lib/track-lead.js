// Calls Meta Pixel's fbq directly with the same event_id used by CAPI,
// so the server-side (CAPI) and client-side (Pixel) Lead events are
// deduplicated by Meta. Replaces the previous dataLayer push approach.

export function pushLeadEvent({ eventId, formType }) {
  if (typeof window === "undefined") return;
  if (!eventId) return;
  if (typeof window.fbq !== "function") {
    console.warn(
      "[track-lead] window.fbq not available — Pixel Lead event skipped"
    );
    return;
  }
  window.fbq(
    "track",
    "Lead",
    { form_type: formType },
    { eventID: eventId }
  );
}
