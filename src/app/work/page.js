"use client";

import { useState } from "react";
import "./style.css";
import WorkCard from "@/components/WorkCard";
import usePageTitle from "@/hooks/usePageTitle";

import silvago from "../../../public/work/silvago_website copy.webp";
import luxeliv from "../../../public/work/luxeliv_website_2.webp";
import omp from "../../../public/work/oh-my-pet-crm.jpg";
import kb from "../../../public/work/kb_website copy (2).webp";
import nestloom from "../../../public/work/nestloom_website.webp";
import barebub from "../../../public/work/barebub_website copy.webp";
import boxika from "../../../public/work/boxika_website.webp";
import smartrays from "../../../public/work/smartrayssolutions_website.webp";
import ujjwal from "../../../public/work/ujjwal_dental_planet.webp";
import caselulu from "../../../public/work/caselulu_website.webp";
import svaa from "../../../public/work/svaa_website (1).webp";
import engine from "../../../public/work/used engine_website.webp";
import ssr from "../../../public/work/ssr_website.webp";
import transaction from "../../../public/work/transection point_website.webp";
import vaqya from "../../../public/work/vaqya.jpg";

const TABS = [
  { key: "all", label: "All Projects", count: 15 },
  { key: "crm", label: "CRM & Web Apps", count: 5 },
  { key: "shopify", label: "Shopify", count: 5 },
  { key: "web", label: "Custom Web", count: 5 },
];

const workProjects = [
  {
    id: "omp-grooming",
    category: "crm",
    title: "OhMyPet",
    projectType: "Custom CRM & Mobile App",
    desc: "Replaced WordPress + 4 disconnected lead sources with a custom CRM, groomer app, and customer portal across 10 cities.",
    image: omp,
  },
  {
    id: "kb-crm",
    category: "crm",
    title: "KB Enterprise CRM",
    projectType: "B2B · CRM",
    desc: "Custom CRM for an aviation spare parts trading business — quotations, invoices, partial deliveries, and multi-month order tracking in one system.",
    image: kb,
  },
  {
    id: "ujjwal-dental",
    category: "crm",
    title: "Ujjwal Dental Patient Management System",
    projectType: "Healthcare · CRM",
    desc: "Patient records, treatment plans, payment tracking, and automated appointment reminders for a busy dental practice.",
    image: ujjwal,
  },
  {
    id: "real-estate-crm",
    category: "crm",
    title: "Real Estate Lead Management System",
    projectType: "Real Estate · CRM",
    desc: "Custom CRM for a real estate firm — lead distribution, agent follow-up tracking, and business intelligence dashboards.",
    image: transaction,
    badge: "In Development",
  },
  {
    id: "vaqya",
    category: "crm",
    title: "Vaqya",
    projectType: "Healthcare · CRM · USA",
    desc: "Healthcare practice management CRM for US clinics. Patient scheduling, billing, and care coordination workflows.",
    image: vaqya,
  },
  {
    id: "silvago",
    category: "shopify",
    title: "Silvago",
    projectType: "D2C · Shopify · Premium Jewelry",
    desc: "Custom Shopify build for a silver jewelry brand. Conversion lifted from 0.7% to 2.4% through targeted UX optimization — no redesign needed.",
    image: silvago,
  },
  {
    id: "caselulu",
    category: "shopify",
    title: "Caselulu",
    projectType: "D2C · Shopify · Mobile Accessories",
    desc: "Complete Shopify rebuild for a phone case brand — fixed broken variant logic, removed 12+ apps, and dropped page load from 2.2s to 1.4s.",
    image: caselulu,
  },
  {
    id: "luxeliv",
    category: "shopify",
    title: "Luxeliv",
    projectType: "D2C · Shopify · Loungewear",
    desc: "Premium Shopify store for a luxe loungewear brand — editorial product layouts and high-AOV checkout designed for Instagram traffic.",
    image: luxeliv,
  },
  {
    id: "nestloom",
    category: "shopify",
    title: "Nestloom",
    projectType: "D2C · Shopify · Home Decor",
    desc: "Custom Shopify store for a Panipat-based home decor brand — flagship-quality design that stands out in their regional market.",
    image: nestloom,
  },
  {
    id: "barebub",
    category: "shopify",
    title: "Barebub",
    projectType: "D2C · Shopify · Baby Care",
    desc: "End-to-end Shopify build for a baby wipes, skincare, and hygiene brand — payment gateway, logistics integration, and ready to launch.",
    image: barebub,
  },
  {
    id: "smartrays",
    category: "web",
    title: "Smartrays",
    projectType: "B2B · WordPress · Solar",
    desc: "Custom WordPress site for a commercial solar panel company — clean lead generation site that's been driving steady inbound business.",
    image: smartrays,
  },
  {
    id: "usedengines4cars",
    category: "web",
    title: "UsedEngines4Cars",
    projectType: "B2C · WordPress · Automotive · USA",
    desc: "Lead-capture WordPress site for a US-based used engines marketplace — detailed enquiry forms, on-page SEO driving organic leads month-on-month.",
    image: engine,
  },
  {
    id: "ssr-dies",
    category: "web",
    title: "SSR Dies and Moulds",
    projectType: "B2B · Custom Code · Manufacturing",
    desc: "Custom-coded website for a plastic OEM manufacturer producing casings for geysers, coolers, and consumer appliances.",
    image: ssr,
  },
  {
    id: "boxika",
    category: "web",
    title: "Boxika",
    projectType: "B2B · WordPress · Manufacturing",
    desc: "WordPress site for a corrugated packaging manufacturer — visually rich design that's helped them stand out in a commodity industry.",
    image: boxika,
  },
  {
    id: "svaa",
    category: "web",
    title: "Svaa",
    projectType: "B2B · Custom Code · Water Purification",
    desc: "Custom website for a water purification brand. Built on Next.js with product catalog and inquiry workflow.",
    image: svaa,
  },
];

export default function Work() {
  usePageTitle(
    "Our Work — Shopify, CRM & Custom Web Projects | The Tous"
  );

  const [activeTab, setActiveTab] = useState("all");
  const filtered =
    activeTab === "all"
      ? workProjects
      : workProjects.filter((p) => p.category === activeTab);

  return (
    <div className="work-main-page">
      {/* Meta description + canonical + OG/Twitter — React 19 hoists to <head> */}
      <meta
        name="description"
        content="Real projects we've shipped for D2C and B2B brands across India and the US. Shopify stores, custom CRMs, and custom-coded websites since 2018."
      />
      <link rel="canonical" href="https://www.thetous.com/work" />

      <meta
        property="og:title"
        content="Our Work — Shopify, CRM & Custom Web Projects | The Tous"
      />
      <meta
        property="og:description"
        content="Real projects we've shipped for D2C and B2B brands across India and the US. Shopify stores, custom CRMs, and custom-coded websites since 2018."
      />
      <meta property="og:url" content="https://www.thetous.com/work" />
      <meta property="og:site_name" content="The Tous" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://www.thetous.com/og-work.jpg"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Our Work — Shopify, CRM & Custom Web Projects | The Tous"
      />
      <meta
        name="twitter:description"
        content="Real projects we've shipped for D2C and B2B brands across India and the US. Shopify stores, custom CRMs, and custom-coded websites since 2018."
      />
      <meta
        name="twitter:image"
        content="https://www.thetous.com/og-work.jpg"
      />

      <div className="container">
        <div className="work-hero">
          <h1>Selected Work</h1>
          <p className="work-hero-sub">
            Real projects we&apos;ve shipped for D2C, B2B, and ecommerce brands
            across India and the US.
          </p>
          <p className="work-hero-trust">
            150+ projects delivered since 2018 &middot; Selected work, featured below
          </p>
        </div>
      </div>

      <div className="work-tabs-bar container">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`work-tab-btn${activeTab === tab.key ? " active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label} <span className="work-tab-count">({tab.count})</span>
          </button>
        ))}
      </div>

      <div className="container container-2">
        <div className="row">
          {filtered.map((project) => (
            <WorkCard key={project.id} item={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
