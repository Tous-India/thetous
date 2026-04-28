# Homepage Rewrite — The Tous (thetous.com)

## Context

You are working on the React codebase for "The Tous" — a digital agency website at thetous.com. The current homepage is unfocused, contains inflated numbers, fake client logos, and generic copy. We are rewriting it to honestly position the company as a _web and Shopify development studio for D2C and B2B brands in India_.

The site is built in React (likely Next.js based on \_next/image paths). Component files are probably in /components, /sections, or /app depending on structure. Locate the homepage entry file (likely app/page.jsx, pages/index.jsx, or src/pages/Home.jsx) and trace its imported section components.

## Goal

Rewrite the homepage section by section per the spec below. Do not touch unrelated pages. Preserve existing styling/design system unless explicitly told to change it. Keep the site responsive and accessible.

## Before you start

1. List every component file the homepage imports/renders, in order of appearance.
2. Identify which file controls each section: Hero, About, Work, Services ("Exquisites"), Why Choose Us, Client Logos, Testimonials, Blogs, Footer.
3. Show me this map before making changes so I can confirm.

## Global removals (apply across homepage)

- Remove the robot mascot/illustration from the hero. Find its image import and the JSX that renders it. Delete both.
- Remove all references to "AI-Driven Digital Solutions" from the homepage.
- Remove the tagline "Building Digital Pathways to Your Success" above the nav.
- Remove the inflated stats: change "345+ Projects Delivered" to "60+ Projects Delivered" and "18+ Team Members" to "Team of 5+ specialists". Find these as strings/props and update.
- Remove the line "Our Focus: Real Estate Brands" entirely.
- Remove the floating "Get Quote" sidebar button if present, OR change it to "Book a Call" linking to the contact page.

## Section 1: Hero — rewrite

Replace current hero content with:

Headline (largest text, bold):
"High-converting websites and Shopify stores for D2C and B2B brands."

Sub-headline (smaller, regular weight, max-width ~600px):
"Custom web development, Shopify builds, and CRM solutions — designed to load fast, convert visitors, and scale with your business."

Primary CTA button: "Book a Free Strategy Call" → links to /contact
Secondary CTA (text link with arrow): "See Our Work →" → links to /work

Trust line below CTAs (small, muted text):
"60+ websites delivered since 2018 · D2C · B2B · Ecommerce"

Layout: Centered or left-aligned text. NO mascot, NO floating robot, NO decorative AI imagery. Clean. Use existing brand colors and fonts.

## Section 2: Trust Strip (NEW section, immediately below hero)

Create a thin horizontal section with a single line of grayscale client logos. Logos should desaturate by default and color on hover (CSS filter: grayscale(100%) → grayscale(0)).

Use ONLY these real client logos (I will provide image files separately, use placeholder paths /images/clients/[name].png):
[FILL IN: list of 4–8 real client names, e.g., "luxeliv", "ohmypet", "kbvista", "bulls", "vardhaman", "hk", "5m"]

No section heading needed, OR use a small centered label: "Trusted by brands building online"

## Section 3: What We Do — replace current "Exquisites" section

Delete the entire current 3-card structure (Brand Solutions / Tech Solutions / Media Solutions).

Replace with 3 new cards using same grid layout but new content:

Card 1 — Custom Web Development
"Conversion-focused websites for D2C and B2B brands. Built on modern stacks (Next.js, React, Node). Fast, SEO-ready, mobile-first."
CTA: "Learn more →" → /tech-solution/web-development

Card 2 — Shopify Development
"Full Shopify store builds and migrations. Custom themes, app integrations, checkout optimization, and headless setups for brands that need more than a template."
CTA: "Learn more →" → /tech-solution/shopify-development

Card 3 — Custom CRM & Web Apps
"Internal tools, dashboards, and CRMs built for your team's exact workflow. We've shipped web apps for businesses that outgrew off-the-shelf tools."
CTA: "Learn more →" → /tech-solution/web-development (or new /tech-solution/web-apps route)

Use clean iconography. Remove the existing brand-solutions and media-solutions cards entirely from the homepage. They can stay in the site nav for now but should NOT appear on the homepage.

## Section 4: Selected Work — rewrite captions

Keep the existing work carousel/grid structure. Move this section UP so it appears immediately after Section 3 (What We Do).

For each project displayed, add a 2–3 line description below the project name. Update these projects only (remove any others including any real-estate or fake-client projects):

[FILL IN: 6 real projects you actually delivered. For each: client name, sector, what you built, one outcome metric if available]

Example format:
"Silvago — Premium silver jewelry D2C brand. Built custom Shopify store with 200+ SKUs, AR try-on integration, and mobile-optimized checkout. Page load reduced from 4.2s to 1.6s."

Make each project card clickable, linking to a detailed case study page (/work/[slug]). If case study pages don't exist yet, create routing stubs.

## Section 5: How We Work — replace "Why Choose Us"

Delete the current 4 vague boxes (Expertise Across Industries / Proven Results / Innovative & Creative Solutions / Transparent & Collaborative).

Replace with a 4-step process section. Heading: "How We Work". Sub-heading: "A clear, predictable process from first call to launch."

Step 1 — Discovery (Week 1)
"We understand your business, customers, and goals. You get a written scope and a fixed quote — no surprises."

Step 2 — Design & Approval (Week 2–3)
"We design every key page. You approve before we write a line of code."

Step 3 — Development (Week 3–6)
"We build. You get weekly demos and a staging link from Day 1."

Step 4 — Launch & Support (Week 6+)
"We migrate, test, train your team, and stay available for 30 days post-launch."

Layout: Numbered cards in a row on desktop, stacked on mobile. Use existing accent colors.

## Section 6: About — shorten and rewrite

Replace current About section content with:

Heading: "About The Tous"

Body (2 short paragraphs):
"We've been building websites since 2018. Today we're a team of [FILL IN: real number, e.g., 5 or 6] — developers, designers, and a founder who still writes code. We've delivered 60+ projects for D2C, B2B, and ecommerce brands across India."

"We don't do everything. We do web development, Shopify, and custom CRM work — and we do it well."

Replace the stock office image with [FILL IN: real photo of you and your team, OR a real photo of your workspace. If unavailable, omit the image and use a clean text-only block.]  

Remove the colored "345+ Projects Delivered", "18+ Team Members", "Our Focus", and "Active Since 2018" boxes. Replace with one simple inline stat row:
"150+ projects · 5+ years · D2C, B2B, Ecommerce"

## Section 7: Testimonials — rewrite

Delete all current testimonials.

Add 3 new testimonials only (not 7). Each MUST include:

- Real client photo or company logo
- Real name
- Real designation
- Real company name
- Quote with at least one specific number/outcome where possible

[FILL IN: 3 real testimonials from past clients. Get on a call this week with 3 happy past clients and ask them for one specific number that improved.]

Format example:
"Our Shopify checkout completion went from 18% to 31% after the rebuild. The Tous understood ecommerce in a way other agencies didn't."
— [Real Name], [Real Designation], [Real Company]
[Real Company Logo]

If you cannot get 3 real testimonials with company names, show 1 or 2. Do NOT pad with anonymous "Founder" / "Marketing Head" testimonials.

## Section 8: FAQ — NEW section

Add a new FAQ section between Testimonials and the final CTA. Use an accordion component (build one if none exists, or install a simple headless one).

Heading: "Frequently Asked Questions"

Questions and answers:

Q: How much does a website cost?
A: Most of our Shopify and custom website builds range from ₹60,000 to ₹2,50,000 depending on complexity, integrations, and number of pages. Web apps and custom CRMs start at ₹1,50,000. We give a fixed quote after a discovery call — no hidden costs.

Q: How long does a project take?
A: Standard websites take 4–6 weeks. Shopify stores take 4–8 weeks depending on customization. Custom web apps take 8–12 weeks. We share a detailed timeline before kickoff.

Q: Do you work with brands outside India?
A: Yes. We've worked with clients across India and have delivered projects for brands operating in the US and UAE. Communication happens over Slack, email, and scheduled calls.

Q: What happens after the website launches?
A: We offer simple maintenance plans starting at ₹3,500/month covering hosting monitoring, security updates, backups, and small content changes. Larger retainers are available for ongoing dev work.

Q: Do you handle design, or only development?
A: Both. Our team includes designers and developers, so you get end-to-end delivery without managing two vendors.

Q: Can you work with our existing developer or designer?
A: Yes. We regularly slot into existing teams — picking up an in-progress project, building specific features, or partnering with your designer.

Q: Do you offer marketing services like ads or SEO?
A: Web development is our focus. We do offer social media management and ads to existing clients on request, but we don't actively market these services and recommend specialist agencies for marketing-led engagements.

Q: Why hire The Tous over a freelancer?
A: We're a team, not one person. That means redundancy, project management, faster turnaround, and post-launch support. We've been delivering projects since 2018, which is longer than most freelance careers last.

## Section 9: Final CTA — rewrite

Replace the current "Let's Talk / Contact Us" block with:

Heading: "Ready to build a site that actually converts?"

Sub-text: "Book a 30-minute strategy call. We'll review your current site, discuss your goals, and tell you honestly whether we're the right fit."

Two buttons side by side:

- Primary: "Book a Strategy Call" → /contact
- Secondary: "Email grow@thetous.com" → mailto:grow@thetous.com

Remove the "Get Quote" button. We are not selling quotes, we are selling a conversation.

## Section 10: Blogs

Currently shows "Loading blogs..." — either fix the data fetch so blogs load, or hide the section from the homepage entirely until the blog is active. Do not ship a broken section.

## Final order of sections on the homepage

1. Nav (existing, no changes except remove "AI-Driven" tagline)
2. Hero
3. Trust strip (real logos)
4. What We Do (3 dev services)
5. Selected Work
6. How We Work (4-step process)
7. About (short version)
8. Testimonials (real, with company names)
9. FAQ (new)
10. Final CTA
11. Footer (existing)

## Things NOT to touch

- The /work, /about, /tech-solution, /brand-solution, /media-solution, /contact, /quote pages — leave for a separate task
- The blog subdomain
- The footer (we'll handle separately)
- The site nav structure (we'll prune services later)
- Existing fonts, colors, design tokens

## Deliverable

After making changes:

1. List every file you modified.
2. List every file you created.
3. List every file/asset that should be deleted (e.g., the robot mascot image, fake client logos).
4. Flag any [FILL IN] placeholders I haven't filled — do not invent content for these.
5. Run the dev server and confirm the homepage renders without errors.
6. Check responsive behavior at mobile (375px), tablet (768px), and desktop (1280px) widths.[11:23 AM]Ask me before:

- Deleting any image asset (I want to confirm)
- Installing new dependencies
- Changing any global styling, theme, or design token
- Touching any file outside the homepage rendering tree

Begin by mapping the homepage component tree and showing it to me. Do not make any changes until I confirm the map.
