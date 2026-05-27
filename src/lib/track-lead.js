// Fires both Meta Pixel and Google Analytics 4 Lead events from a single
// form-success code path. Meta Pixel uses the server-generated event_id for
// CAPI deduplication; GA4 fires independently (no eventId required).

export function pushLeadEvent({ eventId, formType }) {
  if (typeof window === "undefined") return;

  // Meta Pixel — requires eventId for CAPI dedup
  if (!eventId) {
    console.warn(
      "[track-lead] eventId missing — Pixel Lead event skipped"
    );
  } else if (typeof window.fbq !== "function") {
    console.warn(
      "[track-lead] window.fbq not available — Pixel Lead event skipped"
    );
  } else {
    window.fbq(
      "track",
      "Lead",
      { form_type: formType },
      { eventID: eventId }
    );
  }

  // Google Analytics 4 — fires regardless of eventId presence
  if (typeof window.gtag !== "function") {
    console.warn(
      "[track-lead] window.gtag not available — GA4 lead event skipped"
    );
  } else {
    window.gtag("event", "generate_lead", { form_type: formType });
  }
}
