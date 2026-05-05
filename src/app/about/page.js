"use client";
import { useState } from "react";
import "./style.css";
import Link from "next/link";
import Image from "next/image";
import aboutImg from "../../../public/about/about-page.webp";
import usePageTitle from "@/hooks/usePageTitle";

import Tarun from "../../../public/team/Tarun-Badhana.webp";
import Sagar from "../../../public/team/Sagar.webp";
import Manawwar from "../../../public/team/Manawwar.webp";
import Yashika from "../../../public/team/Yashika.webp";
import Anjali from "../../../public/team/Anjali.webp";
import Sunny from "../../../public/team/Sunny.webp";

const principles = [
  {
    title: "Fixed quotes, not hourly billing.",
    body: "You know the price before we start. No surprise invoices, no scope creep arguments. If something's outside the scope, we tell you upfront and you decide.",
  },
  {
    title: "We don't take projects we can't deliver well.",
    body: "If your project needs skills outside our core, we'll say so and recommend someone better. We'd rather lose a project than ship something we're not proud of.",
  },
  {
    title: "We build for the long run.",
    body: "Our average client relationship runs multiple years. We optimize for partnerships that last, not contracts that close. Most of our new business comes from past clients and their referrals.",
  },
  {
    title: "Communication is direct.",
    body: "You'll talk to the people building your site, not an account manager relaying messages. Slack, email, scheduled calls — whatever works for you.",
  },
];

const teams = [
  { name: "Sandeep", role: "Founder & Lead Developer", image: Sunny },
  { name: "Tarun Badhana", role: "Full-stack Developer", image: Tarun },
  { name: "Sagar", role: "Project coordinator", image: Sagar },
  { name: "Yashika", role: "Frontend Developer", image: Yashika },
  { name: "Manawwar", role: "Backend Developer", image: Manawwar },
  { name: "Anjali", role: "Designer", image: Anjali },
  { name: "", role: "Designer", image: null },
];

const stats = [
  { stat: "150+", label: "projects delivered" },
  { stat: "40+", label: "Shopify & custom builds in the last 2 years" },
  { stat: "8+ years", label: "building for D2C, B2B, and ecommerce brands" },
];

const About = () => {
  usePageTitle("About – The Tous");

  return (
    <div className="about-page-main">
      {/* ── Original hero row ── */}
      <div className="container aboutRow">
        <div className="row align-items-start">
          <div className="col-md-12 col-lg-8 col-sm-12 d-flex justify-content-start align-items-start flex-column brand-strategy-div content-div">
            <h1 className="w-100">About The Tous</h1>
            <p className="lg:w-50">
              A small, focused team building websites, Shopify stores, and
              custom CRMs for D2C and B2B brands across India.
            </p>
            <p>
              <strong style={{ fontFamily: "Lato" }}>How we got here ?</strong>
              <br />
              The Tous started in 2018 with one goal: to build websites that
              actually work. Not templates. Not shortcuts. Sites that load fast,
              convert visitors, and hold up over time. Since then, we&apos;ve
              delivered 150+ projects — from early-stage business websites to
              custom Shopify stores, B2B web platforms, and internal CRMs for
              businesses that outgrew off-the-shelf tools. <br /> <br />
              Like most agencies, We&apos;ve experimented along the way. We
              tried scaling a marketing arm. We took on social media work. We
              ran ads. What we kept coming back to is what we do best: building
              things. So that&apos;s what we focus on now.
            </p>
            <p
              style={{
                background: "linear-gradient(to left, #00dbde, #fc00ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
                fontSize: "17px",
              }}
            >
              Three things. Done well.
            </p>
            <ul>
              <li>
                <b>Custom web development</b> for D2C and B2B brands
              </li>
              <li>
                <b>Shopify development </b> — new stores, migrations, and
                optimization
              </li>
              <li>
                <b>Custom CRM and web app development </b>for businesses that
                need their own tools
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Original tabs section — Vision / Mission / Values ── */}
      <AboutTest />

      {/* ── New sections ── */}
      <div className="container">
        {/* The team */}
        <div className="about-section the-team-about">
          <h2 className="about-h2">The Team</h2>
          <p className="about-body about-body-wide">
            We&apos;re a team of 7 Developers, designers and a founder who still
            writes code. We&apos;ve stayed small on purpose — the founder is on
            every project, every client gets senior attention, and decisions
            happen fast.
          </p>
          <div className="about-team-grid">
            {teams.map((member, i) => (
              <div key={i} className="about-team-card">
                <div className="about-team-photo">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                    />
                  ) : (
                    <div className="about-team-placeholder">
                      <i className="ri-user-3-line"></i>
                    </div>
                  )}
                </div>
                {member.name && (
                  <p className="about-team-name">{member.name}</p>
                )}
                <p className="about-team-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How we work */}
        <div className="about-section">
          <h2 className="about-h2">How we work</h2>
          <p>Four principles that shape every project:</p>
          <div className="about-principles">
            {principles.map((item, i) => (
              <div key={i} className="about-principle">
                <span className="about-principle-num">0{i + 1}</span>
                <div>
                  <p className="about-principle-title">{item.title}</p>
                  <p className="about-principle-body">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What we don't do */}
        <div className="about-section">
          <h2 className="about-h2">What we don&apos;t do</h2>
          <div className="about-body-wide">
            <p className="about-body">
              We don&apos;t position ourselves as a full-service marketing
              agency. We don&apos;t run ads as a primary service, we don&apos;t
              promise growth we can&apos;t directly control, and we don&apos;t
              take on work outside development.
            </p>
            <p className="about-body">
              If you need a marketing team, we know good people and we&apos;ll
              point you in the right direction. If you need someone to build the
              technical foundation those marketing efforts run on — that&apos;s
              us.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats-section">
          <p className="about-label">Since 2018</p>
          <div className="about-stats-row">
            {stats.map((item, i) => (
              <div key={i}>
                <p className="about-stat-number">{item.stat}</p>
                <p className="about-stat-label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Original CTA — gradient background ── */}
      <section className="aboutCta">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="p">Want to talk about your project?</div>
              <p
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "1rem",
                  marginBottom: "1.5rem",
                  fontFamily: "Poppins",
                }}
              >
                Book a 30-minute call. We&apos;ll review your goals and tell you
                honestly whether we&apos;re a fit.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Link href="/book-a-call">Book a Strategy Call</Link>
                <a
                  href="mailto:grow@thetous.com"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.6)",
                    color: "#fff",
                  }}
                >
                  grow@thetous.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

/* ── Original AboutTest component — UI unchanged, content updated ── */
const AboutTest = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Vision",
      heading: "Built to last",
      description:
        "To be the most trusted web development partner for D2C and B2B brands in India — known for delivery, not just promises. We believe websites should work as hard as the businesses they represent.",
    },
    {
      label: "Mission",
      heading: "Three things. Done well.",
      description:
        "We build custom websites, Shopify stores, and CRMs that are fast, scalable, and designed to convert. Every project gets a fixed quote, a real timeline, and a team that treats it like their own product.",
    },
    {
      label: "Values",
      heading: "How we operate",
      description:
        "Fixed quotes over hourly billing. Honest scoping over overselling. Long-term relationships over quick contracts. Direct communication over account managers. We'd rather lose a project than ship something we're not proud of.",
    },
  ];
};
