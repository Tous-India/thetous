"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import usePageTitle from "@/hooks/usePageTitle";
import "./style.css";

import silvagoMockup from "../../../../public/casestudy/Silvago After (1).png";
import silvagoBefore from "../../../../public/casestudy/silvago before.webp";

const SilvagoCaseStudy = () => {
  usePageTitle(
    "Silvago Case Study: 0.7% → 2.4% Shopify Conversion Rate in 4 Weeks | The Tous",
  );

  return (
    <main className="silvago-case-study">
      {/* ── Section 1: Hero ── */}
      <section className="silvago-hero">
        <div className="container">
          <div className="row align-items-center silvago-hero-row">
            <div className="col-12 silvago-hero-text">
              <p className="silvago-hero-eyebrow">CASE STUDY · SILVAGO</p>
              <h1 className="silvago-hero-heading">
                We didn&apos;t grow Silvago&apos;s traffic. We tripled the
                revenue they got from it.
              </h1>
              <p className="silvago-hero-sub">
                0.7% → 2.4% conversion rate in 4 weeks. Sessions stayed flat.
                Orders went 3.4×.
              </p>
              <div className="silvago-hero-cta-row">
                <Link href="/book-a-call" className="silvago-hero-cta-primary">
                  Get a free Shopify audit
                </Link>
                <Link href="/work" className="silvago-hero-cta-secondary">
                  See more work →
                </Link>
              </div>

              <Image
                src={silvagoMockup}
                alt="Silvago — rebuilt Shopify product page on mobile"
                priority
                className="silvago-hero-img"
              />
            </div>
            {/*  */}
          </div>
        </div>
      </section>

      {/* ── Section 2: The client ── */}
      <section className="silvago-section">
        <div className="container">
          <p className="silvago-section-eyebrow">The client</p>
          <h2 className="silvago-section-heading">Silvago</h2>
          <div className="silvago-section-body">
            <p>
              Silvago is a D2C jewelry brand on Shopify, founded by Mansi
              Adlakha. Sells handcrafted silver jewelry.
            </p>
            <p>
              Based in India, ships pan-India. Mansi runs the brand hands-on —
              managing inventory, photography, marketing, and the storefront
              herself.
            </p>
            <p>
              By early 2026, the brand had a working catalog, organic momentum,
              and steady traffic. What it didn&apos;t have was orders coming in
              at the rate that traffic should have produced.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 3: The problem ── */}
      <section className="silvago-section silvago-section-alt">
        <div className="container">
          <p className="silvago-section-eyebrow">The problem</p>
          <h2 className="silvago-section-heading">
            Decent traffic. Almost no conversions.
          </h2>
          <div className="silvago-section-body">
            <p>
              Silvago had a working Shopify store and decent traffic. What they
              didn&apos;t have was conversions — only{" "}
              <strong>0.7% of visitors were checking out</strong>, roughly a
              third of what&apos;s typical for D2C jewelry.
            </p>
            <p>
              Mansi had already tried the obvious things — swapping product
              images, tweaking the theme, running price tests. Nothing moved the
              needle. Before scaling ad spend on a site that wasn&apos;t
              converting, she wanted to understand <em>why</em> people were
              leaving.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 4: Our approach ── */}
      <section className="silvago-section">
        <div className="container">
          <p className="silvago-section-eyebrow">Our approach</p>
          <h2 className="silvago-section-heading">
            We didn&apos;t pitch a redesign.
          </h2>
          <div className="silvago-section-body">
            <p>
              We started by figuring out where, exactly, visitors were dropping
              off — and what they were trying to do when they left.
            </p>
            <p>
              Installed <strong>Microsoft Clarity</strong> and spent a week
              watching session recordings. Patterns showed up fast:
            </p>
            <ul className="silvago-list">
              <li>
                On mobile, product images stacked awkwardly. Users scrolled past{" "}
                <em>Add to Cart</em> without seeing it.
              </li>
              <li>
                Specs (chain length, weight, material) were buried below 4
                sections of marketing copy. People wanted basics; they had to
                dig.
              </li>
              <li>
                Cart-to-checkout took 3 taps. Most users abandoned at tap 2.
              </li>
              <li>
                Trust signals — returns, shipping, COD — lived on a separate
                policies page. Nothing on the PDP told a first-time buyer they
                were safe to order.
              </li>
            </ul>
            <p>Once we had the recordings, the fixes wrote themselves.</p>
          </div>
        </div>
      </section>

      {/* ── Section 5: What we built ── */}
      <section className="silvago-section">
        <div className="container">
          <p className="silvago-section-eyebrow">What we built</p>
          <h2 className="silvago-section-heading">
            Specific deliverables. No fluff.
          </h2>
          <div className="silvago-section-body">
            <ul className="silvago-list">
              <li>
                Rebuilt PDP mobile-first — image gallery sized to one viewport,{" "}
                <em>Add to Cart</em> pinned to bottom of screen, key specs above
                the fold
              </li>
              <li>
                Inline trust signals on every PDP — 7-day returns, free shipping
                above ₹999, COD available
              </li>
              <li>Compressed cart-to-checkout to a single tap</li>
              <li>
                Cleaned up navigation — removed 3 menu items with near-zero
                clicks, sped up category page loads
              </li>
              <li>
                Set up persistent Microsoft Clarity tracking so Mansi has
                post-handoff visibility into user behavior
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Section 6: The result ── */}
      <section className="silvago-section silvago-section-alt">
        <div className="container">
          <p className="silvago-section-eyebrow">The result</p>
          <h2 className="silvago-section-heading">
            Sessions stayed flat. Revenue tripled.
          </h2>

          <div className="silvago-results-table-wrap">
            <table
              className="silvago-results-table"
              suppressHydrationWarning
            >
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Before (Jan 2026)</th>
                  <th>After (Mar 2026)</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Metric">Conversion rate</td>
                  <td data-label="Before (Jan 2026)">0.7%</td>
                  <td data-label="After (Mar 2026)">2.4%</td>
                  <td data-label="Change" className="silvago-change-strong">
                    3.4× lift
                  </td>
                </tr>
                <tr>
                  <td data-label="Metric">Orders</td>
                  <td data-label="Before (Jan 2026)">69</td>
                  <td data-label="After (Mar 2026)">232</td>
                  <td data-label="Change">+236%</td>
                </tr>
                <tr>
                  <td data-label="Metric">Revenue</td>
                  <td data-label="Before (Jan 2026)">₹183.3K</td>
                  <td data-label="After (Mar 2026)">₹532.2K</td>
                  <td data-label="Change">+190%</td>
                </tr>
                <tr>
                  <td data-label="Metric">Add-to-cart rate</td>
                  <td data-label="Before (Jan 2026)">baseline</td>
                  <td data-label="After (Mar 2026)">+78%</td>
                  <td data-label="Change">—</td>
                </tr>
                <tr>
                  <td data-label="Metric">Checkout completion</td>
                  <td data-label="Before (Jan 2026)">baseline</td>
                  <td data-label="After (Mar 2026)">~2×</td>
                  <td data-label="Change">—</td>
                </tr>
                <tr>
                  <td data-label="Metric">Bounce rate</td>
                  <td data-label="Before (Jan 2026)">71.4%</td>
                  <td data-label="After (Mar 2026)">42.9%</td>
                  <td data-label="Change">-28.5pp</td>
                </tr>
                <tr>
                  <td data-label="Metric">Sessions</td>
                  <td data-label="Before (Jan 2026)">9,834</td>
                  <td data-label="After (Mar 2026)">9,647</td>
                  <td data-label="Change">flat (-1.9%)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <blockquote className="silvago-anchor-line">
            Sessions stayed flat. Everything else moved. The site didn&apos;t
            need more traffic — it needed to convert the traffic it already had.
          </blockquote>

          <div className="silvago-compare-grid">
            <figure className="silvago-compare-card">
              <Image
                src={silvagoBefore}
                alt="Silvago Shopify product page — January 2026 (before rebuild)"
                loading="lazy"
                className="silvago-compare-img"
              />
              <figcaption className="silvago-compare-caption">
                Before · January 2026
              </figcaption>
            </figure>
            <figure className="silvago-compare-card">
              <Image
                src={silvagoMockup}
                alt="Silvago Shopify product page — March 2026 (after rebuild)"
                loading="lazy"
                className="silvago-compare-img"
              />
              <figcaption className="silvago-compare-caption">
                After · March 2026
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SilvagoCaseStudy;
