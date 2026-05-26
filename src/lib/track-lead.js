// Pushes a 'lead_submitted' event to the GTM dataLayer with the server-
// generated event_id, so a GTM-side Meta Pixel tag can use the same ID for
// deduplication with the CAPI event fired from the API route.

export function pushLeadEvent({ eventId, formType }) {
  if (typeof window === "undefined") return;
  if (!eventId) return;
  if (!Array.isArray(window.dataLayer)) window.dataLayer = [];
  window.dataLayer.push({
    event: "lead_submitted",
    event_id: eventId,
    form_type: formType,
  });
}
