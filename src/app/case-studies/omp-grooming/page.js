import Image from "next/image";
import Link from "next/link";
import "./style.css";

export const metadata = {
  title:
    "OhMyPet Case Study — Custom CRM & Mobile App for Multi-City Pet Grooming | The Tous",
  description:
    "How The Tous rebuilt OhMyPet's operational stack — replaced WordPress + 4 disconnected lead sources with a custom CRM, groomer app, and customer portal across 10 cities.",
  openGraph: {
    title:
      "OhMyPet Case Study — Custom CRM & Mobile App for Multi-City Pet Grooming | The Tous",
    description:
      "How The Tous rebuilt OhMyPet's operational stack — replaced WordPress + 4 disconnected lead sources with a custom CRM, groomer app, and customer portal across 10 cities.",
    url: "https://thetous.com/case-studies/omp-grooming",
    siteName: "The Tous",
    images: [
      {
        url: "https://thetous.com/casestudy/omp-grooming/hero.webp",
        width: 1200,
        height: 630,
        alt: "OhMyPet Case Study — How The Tous built a custom CRM and groomer app for multi-city pet grooming operations",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2026-05-13T00:00:00+05:30",
    modifiedTime: "2026-05-13T00:00:00+05:30",
    authors: ["The Tous"],
    section: "Case Studies",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "OhMyPet Case Study — Custom CRM & Mobile App for Multi-City Pet Grooming | The Tous",
    description:
      "How The Tous rebuilt OhMyPet's operational stack — replaced WordPress + 4 disconnected lead sources with a custom CRM, groomer app, and customer portal across 10 cities.",
    images: [
      "https://thetous.com/casestudy/omp-grooming/hero.webp",
    ],
  },
  alternates: {
    canonical: "https://thetous.com/case-studies/omp-grooming",
  },
};

const OhMyPetCaseStudy = () => {
  return (
    <main className="silvago-case-study">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline:
                  "OhMyPet Case Study — Custom CRM & Mobile App for Multi-City Pet Grooming",
                description:
                  "How The Tous rebuilt OhMyPet's operational stack — replaced WordPress + 4 disconnected lead sources with a custom CRM, groomer app, and customer portal across 10 cities.",
                image: [
                  "https://thetous.com/casestudy/omp-grooming/hero.webp",
                ],
                author: {
                  "@type": "Organization",
                  name: "The Tous",
                  url: "https://thetous.com",
                },
                publisher: {
                  "@type": "Organization",
                  name: "The Tous",
                  url: "https://thetous.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://thetous.com/images/logo.png",
                  },
                },
                datePublished: "2026-05-13T00:00:00+05:30",
                dateModified: "2026-05-13T00:00:00+05:30",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": "https://thetous.com/case-studies/omp-grooming",
                },
                keywords:
                  "custom CRM development, multi-city operations, pet grooming software, Next.js development, mobile app development, lead management system",
                about: {
                  "@type": "Service",
                  name: "Custom CRM Development",
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://thetous.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Our Work",
                    item: "https://thetous.com/work",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OhMyPet",
                  },
                ],
              },
            ],
          }),
        }}
      />
      <article>
        {/* ── Section 1: Hero ── */}
        <section className="silvago-hero" aria-labelledby="hero">
          <div className="container">
            <div className="row align-items-center silvago-hero-row">
              <div className="col-12 silvago-hero-text">
                <p className="silvago-hero-eyebrow">
                  Case Study · Custom CRM &amp; Mobile App
                </p>
                <h1 id="hero" className="silvago-hero-heading">
                  Replacing Spreadsheets, Plugins, and WhatsApp with a Custom
                  Lead-to-Groomer CRM
                </h1>
                <p className="silvago-hero-sub">
                  How we rebuilt OhMyPet&apos;s operational stack across 10
                  Indian cities — unifying 4 lead sources, automating groomer
                  assignment, and giving customers a portal for the first time.
                </p>
                <div className="silvago-hero-cta-row">
                  <Link href="/book-a-call" className="silvago-hero-cta-primary">
                    Book a 30-min strategy call
                  </Link>
                </div>

                {/* NOTE: Using string src instead of static imports (Silvago pattern) */}
                {/* because assets are pending. Switch to static imports once placed. */}
                <Image
                  src="/casestudy/omp-grooming/hero.webp"
                  alt="OhMyPet website homepage — custom Next.js build by The Tous"
                  width={1600}
                  height={900}
                  priority
                  className="silvago-hero-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: The client ── */}
        <section className="silvago-section" aria-labelledby="the-client">
          <div className="container">
            <p className="silvago-section-eyebrow">The client</p>
            <h2 id="the-client" className="silvago-section-heading">
              OhMyPet
            </h2>
            <div className="silvago-section-body">
              <p>
                OhMyPet is an at-home pet grooming service operating across 10
                Indian cities — Delhi, Gurgaon, Noida, Faridabad, Ghaziabad,
                Mumbai, Pune, Bangalore, Chennai, and Hyderabad.
              </p>
              <p>
                Groomers travel to customers&apos; homes. Bookings come in from
                a website, paid ads, and WhatsApp inquiries. By late 2025, the
                brand had real volume — 22,000+ customer records and a steady
                flow of new leads.
              </p>
              <p>
                What it didn&apos;t have was a system that could see all of that
                in one place.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 3: The problem ── */}
        <section
          className="silvago-section silvago-section-alt"
          aria-labelledby="the-problem"
        >
          <div className="container">
            <p className="silvago-section-eyebrow">The problem</p>
            <h2 id="the-problem" className="silvago-section-heading">
              Four lead sources. Four different places to look.
            </h2>
            <div className="silvago-section-body">
              <p>
                By late 2025, OhMyPet was running operations on a stack of
                disconnected tools that didn&apos;t talk to each other.
              </p>
              <p>
                Leads were arriving from four sources, going to four different
                places:
              </p>
              <ul className="silvago-list">
                <li>Website popup form → Google Sheet</li>
                <li>LatePoint plugin bookings → stuck inside LatePoint</li>
                <li>Facebook ad leads → HubSpot</li>
                <li>WhatsApp inquiries → just sitting in WhatsApp</li>
              </ul>
              <p>
                No one could see all leads in one place. Pipeline visibility was
                guesswork.
              </p>
              <p>
                Assigning groomers was manual. When a booking came in, someone
                on the team had to spot it in the relevant sheet or tool, decide
                which groomer in that city was free, message them, and confirm.
                The team had to refresh sheets to find out new leads existed. No
                record of who got assigned what until someone wrote it down.
                Leads waited. Some leaked.
              </p>
              <p>
                Customers had no portal. Once a booking was made, they had no
                visibility into payments, service history, or which groomer was
                coming. Reviews were collected ad-hoc, not tied to specific
                groomers.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 4: Our approach ── */}
        <section className="silvago-section" aria-labelledby="our-approach">
          <div className="container">
            <p className="silvago-section-eyebrow">Our approach</p>
            <h2 id="our-approach" className="silvago-section-heading">
              One platform owning the full lead-to-service path.
            </h2>
            <div className="silvago-section-body">
              <p>
                Before writing a single line of code, we mapped every place a
                lead could enter, every hand-off, and every moment a customer or
                groomer needed information. The diagram had four lead sources,
                three manual hand-offs, and zero shared source of truth.
              </p>
              <p>Two principles drove the build:</p>
              <ul className="silvago-list">
                <li>
                  Every lead, regardless of source, lands in one inbox with the
                  same shape.
                </li>
                <li>
                  Groomer assignment runs without a human in the loop — the
                  system picks, the groomers compete, the first to accept wins.
                </li>
              </ul>
              <p>The rest fell out of those two decisions.</p>
            </div>
          </div>
        </section>

        {/* ── Section 5: What we built ── */}
        <section className="silvago-section" aria-labelledby="what-we-built">
          <div className="container">
            <p className="silvago-section-eyebrow">What we built</p>
            <h2 id="what-we-built" className="silvago-section-heading">
              Website, CRM, groomer app, and customer portal.
            </h2>
            <div className="silvago-section-body">
              <ul className="silvago-list">
                <li>
                  <strong>Website rebuild — WordPress to Next.js.</strong> The
                  old site ran on WordPress with a LatePoint plugin handling
                  bookings. We rebuilt the entire site in Next.js — same look
                  and feel, faster, no plugin dependency. The booking flow that
                  used to live inside LatePoint is now a custom-coded wizard
                  owned end-to-end by OhMyPet. Customers pick their city, choose
                  their service, book — three steps, no third-party plugin in
                  the path.
                </li>
                <li>
                  <strong>Custom CRM — every lead in one place.</strong> A
                  single admin platform where every lead from every source
                  lands. Website popup, custom booking wizard, Facebook ads,
                  WhatsApp — all unified. The CRM is the source of truth: every
                  customer record, every booking, every groomer assignment,
                  every payment, every review. Migration brought over 22,000+
                  existing customer records from the legacy stack — no data
                  lost, no duplicates, searchable in seconds.
                </li>
                <li>
                  <strong>Groomer mobile app — instant lead routing.</strong>{" "}
                  The biggest operational shift. When a booking is confirmed in
                  a city, the system identifies eligible groomers in that area
                  and sends them all a push notification at the same moment.
                  First groomer to accept wins the lead. Manual assignment is
                  gone. Lead-to-groomer time is now down to 2–3 minutes,
                  automated. The sales team handles exceptions, not every
                  booking.
                </li>
                <li>
                  <strong>Customer portal — visibility on both sides.</strong>{" "}
                  Customers can log in to see their bookings, payment history,
                  past services, and which groomer is assigned. After a service,
                  they submit a review tied to the groomer — those reviews feed
                  back into the CRM, so OhMyPet can track groomer performance
                  over time.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Section 6: The result ── */}
        <section
          className="silvago-section silvago-section-alt"
          aria-labelledby="the-result"
        >
          <div className="container">
            <p className="silvago-section-eyebrow">The result</p>
            <h2 id="the-result" className="silvago-section-heading">
              Platform live February 2026. Phased migration in progress.
            </h2>

            <div className="silvago-results-table-wrap">
              <table
                className="silvago-results-table"
                suppressHydrationWarning
              >
                <thead>
                  <tr>
                    <th>Area</th>
                    <th>Before (Late 2025)</th>
                    <th>After (May 2026)</th>
                    <th>Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Area">Lead sources</td>
                    <td data-label="Before (Late 2025)">
                      4 disconnected sources
                    </td>
                    <td data-label="After (May 2026)">1 unified inbox</td>
                    <td
                      data-label="Change"
                      className="silvago-change-strong"
                    >
                      Consolidated
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Area">Groomer assignment</td>
                    <td data-label="Before (Late 2025)">Manual</td>
                    <td data-label="After (May 2026)">2–3 min auto-routing</td>
                    <td data-label="Change">Automated</td>
                  </tr>
                  <tr>
                    <td data-label="Area">Customer records</td>
                    <td data-label="Before (Late 2025)">22,000+ across tools</td>
                    <td data-label="After (May 2026)">22,000+ in one CRM</td>
                    <td data-label="Change">Migrated</td>
                  </tr>
                  <tr>
                    <td data-label="Area">Customer portal</td>
                    <td data-label="Before (Late 2025)">None</td>
                    <td data-label="After (May 2026)">Live customer portal</td>
                    <td data-label="Change">Built</td>
                  </tr>
                  <tr>
                    <td data-label="Area">Reviews</td>
                    <td data-label="Before (Late 2025)">Ad-hoc</td>
                    <td data-label="After (May 2026)">Per-groomer in CRM</td>
                    <td data-label="Change">Structured</td>
                  </tr>
                  <tr>
                    <td data-label="Area">Tech stack</td>
                    <td data-label="Before (Late 2025)">
                      WordPress + LatePoint
                    </td>
                    <td data-label="After (May 2026)">
                      Next.js + custom booking
                    </td>
                    <td data-label="Change">Rebuilt</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <blockquote className="silvago-anchor-line">
              The bottleneck was never lead generation. It was the gap between
              getting a lead and acting on it.
            </blockquote>

            <div className="silvago-compare-grid">
              <figure className="silvago-compare-card">
                <Image
                  src="/casestudy/omp-grooming/crm-dashboard.png"
                  alt="OhMyPet admin CRM dashboard — unified lead management built by The Tous"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="silvago-compare-img"
                />
                <figcaption className="silvago-compare-caption">
                  Admin CRM · all leads in one place
                </figcaption>
              </figure>
              <figure className="silvago-compare-card">
                <Image
                  src="/casestudy/omp-grooming/booking-wizard.png"
                  alt="OhMyPet custom booking wizard — plugin-free Next.js flow built by The Tous"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="silvago-compare-img"
                />
                <figcaption className="silvago-compare-caption">
                  Booking wizard · plugin-free customer flow
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ── Section 7: Bottom CTA ── */}
        <section className="silvago-bottom-cta" aria-labelledby="next-steps">
          <div className="silvago-bottom-cta-inner">
            <h2 id="next-steps" className="silvago-bottom-cta-heading">
              Running operations on spreadsheets and WhatsApp?
            </h2>
            <p className="silvago-bottom-cta-body">
              If your business is held together by 4-5 disconnected tools and a
              WhatsApp group, you&apos;re at the same inflection point OhMyPet
              was in late 2025. We&apos;ve built custom CRMs and internal tools
              for service businesses across India — let&apos;s talk about yours.
            </p>
            <Link href="/book-a-call" className="silvago-bottom-cta-button">
              Book a 30-min strategy call
            </Link>
            <p className="silvago-bottom-cta-credibility">
              150+ projects shipped since 2018 · Replies within one business day
            </p>
          </div>
        </section>
      </article>

      {/* Sticky mobile-only CTA */}
      <Link href="/book-a-call" className="silvago-mobile-sticky-cta">
        Book a 30-min strategy call →
      </Link>
    </main>
  );
};

export default OhMyPetCaseStudy;
