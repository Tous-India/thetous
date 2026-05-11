import Image from "next/image";
import Link from "next/link";
import "./style.css";

import luxelivJune from "../../../../public/casestudy/luxeliv-june-2024.png";
import luxelivJuly from "../../../../public/casestudy/luxeliv-july-2024.png";

export const metadata = {
  title:
    "Luxeliv Case Study: 0.77% to 1.86% Conversion + 7x ROAS Sustained 21 Months",
  description:
    "How The Tous lifted Luxeliv's Shopify conversion from 0.77% to 1.86% in 30 days — same traffic, 5x revenue. Then ads averaged 7x ROAS for 21 months. Premium men's sleepwear D2C case study.",
  openGraph: {
    title:
      "Luxeliv: 0.77% to 1.86% Conversion in 30 Days, Then 7x ROAS for 21 Months",
    description:
      "Same traffic, 5x revenue from a Shopify audit. Then ads compounded the result for nearly 2 years. The Tous Luxeliv case study.",
    url: "https://thetous.com/case-studies/luxeliv",
    siteName: "The Tous",
    images: [
      {
        url: "https://thetous.com/images/og-homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Luxeliv Shopify Conversion Case Study by The Tous",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Luxeliv: 0.77% to 1.86% Conversion, Then 7x ROAS for 21 Months",
    description:
      "Real Shopify conversion + ads case study. 5x revenue on flat traffic. 7x sustained ROAS.",
    images: ["https://thetous.com/images/og-homepage.jpg"],
  },
  alternates: {
    canonical: "https://thetous.com/case-studies/luxeliv",
  },
};

const LuxelivCaseStudy = () => {
  return (
    <main className="luxeliv-case-study">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Luxeliv Case Study: 0.77% to 1.86% Conversion + 7x ROAS Sustained 21 Months",
            description:
              "How The Tous lifted Luxeliv's Shopify conversion from 0.77% to 1.86% in 30 days through a store audit, then compounded the result with paid ads averaging 7x ROAS for 21 months.",
            image: "https://thetous.com/images/og-homepage.jpg",
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
            datePublished: "2026-05-11T00:00:00+05:30",
            dateModified: "2026-05-11T00:00:00+05:30",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://thetous.com/case-studies/luxeliv",
            },
            about: {
              "@type": "Thing",
              name: "Shopify Conversion Rate Optimization and Paid Advertising",
            },
          }),
        }}
      />

      {/* ── Section 1: Hero ── */}
      <section className="luxeliv-hero">
        <div className="container">
          <div className="row align-items-center luxeliv-hero-row">
            <div className="col-12 luxeliv-hero-text">
              <p className="luxeliv-hero-eyebrow">CASE STUDY · LUXELIV</p>
              <h1 className="luxeliv-hero-heading">
                From 0.77% to 1.86% conversion in 30 days — same traffic, 5×
                revenue
              </h1>
              <p className="luxeliv-hero-sub">
                Premium men&apos;s sleepwear brand. 22-month engagement. Real
                Shopify analytics below — not marketing copy.
              </p>
              <div className="luxeliv-hero-cta-row">
                <Link href="/book-a-call" className="luxeliv-hero-cta-primary">
                  Get a free Shopify audit
                </Link>
              </div>
              <Image
                src={luxelivJune}
                alt="Luxeliv Shopify Analytics June 2024 baseline — 0.77% conversion, ₹40K revenue, 20 orders from 2,568 sessions"
                className="luxeliv-hero-img"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: The client ── */}
      <section className="luxeliv-section">
        <div className="container">
          <p className="luxeliv-section-eyebrow">THE CLIENT</p>
          <h2 className="luxeliv-section-heading">Luxeliv</h2>
          <div className="luxeliv-section-body">
            <p>
              Premium men&apos;s sleepwear and resort wear, sold
              direct-to-consumer through Shopify. Based in Noida, India.
              Sleepwear was the core line when the engagement started in June
              2024. Resort wear launched later as the brand expanded into
              adjacent occasions.
            </p>
            <p>
              D2C only — no wholesale, no marketplaces. Every sale came through
              their Shopify store.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 3: The problem ── */}
      <section className="luxeliv-section luxeliv-section-alt">
        <div className="container">
          <p className="luxeliv-section-eyebrow">THE PROBLEM</p>
          <h2 className="luxeliv-section-heading">
            Step 1 was a store audit — before spending on ads
          </h2>
          <div className="luxeliv-section-body">
            <p>
              The brief was simple: run Facebook and Google ads to drive
              traffic to luxeliv.com.
            </p>
            <p>
              We took the project. But before any ad spend went live, we
              audited the store — same approach we take with any new ads
              engagement. You don&apos;t pour paid traffic into a funnel that
              isn&apos;t ready for it.
            </p>
            <p>The audit surfaced clear gaps:</p>
            <ul className="luxeliv-list">
              <li>A countdown timer popup firing on every page</li>
              <li>
                A &ldquo;people are viewing this product&rdquo; popup that
                looked obviously fake
              </li>
              <li>Slow product pages with a confusing variant selector</li>
              <li>
                No WhatsApp option — losing customers who prefer chat over
                checkout
              </li>
              <li>
                Several apps adding load time without contributing to
                conversion
              </li>
            </ul>
            <p>
              These were costing money on existing traffic. Pouring paid
              traffic on top would have multiplied the leak. So we proposed
              sequencing: store first, ads second.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 4: Our approach ── */}
      <section className="luxeliv-section">
        <div className="container">
          <p className="luxeliv-section-eyebrow">OUR APPROACH</p>
          <h2 className="luxeliv-section-heading">
            Audit first, ads second, both ongoing
          </h2>
          <div className="luxeliv-section-body">
            <p>We proposed a different sequence than the original ask:</p>
            <ul className="luxeliv-list">
              <li>Week 1–2: Store audit, conversion fixes, app cleanup</li>
              <li>
                Week 3: WhatsApp API integration, product page improvements
                finalized
              </li>
              <li>
                Week 4 onwards: Launch paid ads on a properly functioning store
              </li>
            </ul>
            <p>
              The founder agreed. We started in June 2024. The first three
              weeks were store work only — no ad spend until the foundation
              was ready.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 5: What we built ── */}
      <section className="luxeliv-section">
        <div className="container">
          <p className="luxeliv-section-eyebrow">WHAT WE BUILT</p>
          <h2 className="luxeliv-section-heading">What changed in 3 weeks</h2>
          <div className="luxeliv-section-body">
            <p>
              <strong>Removed (the easy wins):</strong>
            </p>
            <ul className="luxeliv-list">
              <li>Countdown timer popups across the site</li>
              <li>Fake &ldquo;people viewing&rdquo; social proof popup</li>
              <li>
                Apps that added load time but no measurable conversion lift
              </li>
            </ul>
            <p>
              <strong>Built (the foundational work):</strong>
            </p>
            <ul className="luxeliv-list">
              <li>
                WhatsApp API integration — so customers could ask sizing or
                shipping questions before buying
              </li>
              <li>
                Product page rebuilt for clarity — cleaner pricing display,
                better variant selector, improved sizing information, lifestyle
                photography brought above the fold
              </li>
              <li>
                Performance fixes — faster page loads, cleaner checkout flow
              </li>
              <li>
                App stack consolidated — only the apps that earned their place
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Section 6: The result ── */}
      <section className="luxeliv-section luxeliv-section-alt">
        <div className="container">
          <p className="luxeliv-section-eyebrow">THE RESULT</p>
          <h2 className="luxeliv-section-heading">Same traffic, 5× revenue</h2>
          <div className="luxeliv-results-table-wrap">
            <table className="luxeliv-results-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>June 2024 (before)</th>
                  <th>July 2024 (after)</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sessions</td>
                  <td>2,568</td>
                  <td>2,470</td>
                  <td>
                    <span className="luxeliv-change-strong">
                      -4% (less traffic)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Conversion rate</td>
                  <td>0.77%</td>
                  <td>1.86%</td>
                  <td>
                    <span className="luxeliv-change-strong">+148%</span>
                  </td>
                </tr>
                <tr>
                  <td>Orders</td>
                  <td>20</td>
                  <td>51</td>
                  <td>
                    <span className="luxeliv-change-strong">+143%</span>
                  </td>
                </tr>
                <tr>
                  <td>Revenue</td>
                  <td>₹40K</td>
                  <td>₹2L</td>
                  <td>
                    <span className="luxeliv-change-strong">+351%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="luxeliv-compare-grid">
            <figure className="luxeliv-compare-card">
              <Image
                src={luxelivJune}
                alt="Luxeliv Shopify Analytics June 2024 — 0.77% conversion, ₹40K revenue, 20 orders from 2,568 sessions"
                className="luxeliv-compare-img"
                loading="lazy"
              />
              <figcaption className="luxeliv-compare-caption">
                June 2024 — before store fixes
              </figcaption>
            </figure>
            <figure className="luxeliv-compare-card">
              <Image
                src={luxelivJuly}
                alt="Luxeliv Shopify Analytics July 2024 — 1.86% conversion, ₹2L revenue, 51 orders from 2,470 sessions"
                className="luxeliv-compare-img"
                loading="lazy"
              />
              <figcaption className="luxeliv-compare-caption">
                July 2024 — after store fixes
              </figcaption>
            </figure>
          </div>

          <div className="luxeliv-section-body">
            <p>
              Same traffic. Same products. Same brand. The only thing that
              changed was the store itself — and revenue grew 5×.
            </p>
            <p>
              This is the part most agencies skip. They start with ads, blame
              the creative when ROAS underperforms, and never look at what
              happens to traffic once it lands on the store. The store is where
              money is made or lost.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 7: Ads on a foundation that worked ── */}
      <section className="luxeliv-section">
        <div className="container">
          <p className="luxeliv-section-eyebrow">WHAT HAPPENED NEXT</p>
          <h2 className="luxeliv-section-heading">
            7× ROAS sustained over 21 months. 9× peak.
          </h2>
          <div className="luxeliv-section-body">
            <p>
              With the store now converting at 2.4× the previous rate, paid
              ads launched in mid-2024. We ran Facebook and Google campaigns
              continuously through March 2026.
            </p>
          </div>
          <div className="luxeliv-results-table-wrap">
            <table className="luxeliv-results-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Average ROAS</td>
                  <td>
                    <span className="luxeliv-change-strong">7×</span>
                  </td>
                </tr>
                <tr>
                  <td>Peak monthly ROAS</td>
                  <td>
                    <span className="luxeliv-change-strong">9×</span>
                  </td>
                </tr>
                <tr>
                  <td>Ad campaign duration</td>
                  <td>21 months sustained</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="luxeliv-section-body">
            <p>
              The ads worked because the store worked. That&apos;s the whole
              story.
            </p>
            <p>
              Luxeliv was a Tous client for 22 months — June 2024 through
              March 2026. Longer than most ads engagements last in this
              industry. Sustained results come from getting the unsexy parts
              right.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 8: Bottom CTA ── */}
      <section className="luxeliv-bottom-cta">
        <div className="luxeliv-bottom-cta-inner">
          <h2 className="luxeliv-bottom-cta-heading">
            Curious what&apos;s hurting your conversion rate?
          </h2>
          <p className="luxeliv-bottom-cta-body">
            Book a free 30-min Shopify audit. We&apos;ll review your store,
            identify the conversion blockers losing you money, and tell you
            honestly whether we can help.
          </p>
          <Link href="/book-a-call" className="luxeliv-bottom-cta-button">
            Book a Free Strategy Call
          </Link>
          <p className="luxeliv-bottom-cta-credibility">
            150+ projects shipped since 2018 · Currently booking development
            projects for June 2026
          </p>
        </div>
      </section>

      {/* Sticky mobile-only CTA */}
      <Link href="/book-a-call" className="luxeliv-mobile-sticky-cta">
        Book a Free Strategy Call →
      </Link>
    </main>
  );
};

export default LuxelivCaseStudy;
