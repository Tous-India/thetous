// Recipients for the internal notification sent when a form is submitted
// (Contact Us → /api/contact, Book a Call → /api/quote). The primary inbox is
// derived from the authenticated mailbox (EMAIL_FROM, falling back to EMAIL_USER)
// so it stays in sync with the SMTP credentials; tannu4uonly@gmail.com is added
// as a second recipient. Defined once here and imported by both API routes so the
// list is never duplicated.
export function getFormRecipients() {
  const primary = process.env.EMAIL_FROM || process.env.EMAIL_USER;
  // Dedupe so a primary of grow@thetous.com isn't listed twice if it ever
  // matches one of the explicit recipients below.
  return [...new Set([primary, "tannu4uonly@gmail.com"].filter(Boolean))];
}
