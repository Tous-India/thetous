"use client";
import React from "react";
import Link from "next/link";

const cards = [
  {
    icon: "ri-code-s-slash-line",
    title: "Custom Web Development",
    points: [
      "Conversion-focused websites for D2C and B2B brands",
      "Built on modern stacks — Next.js, React, Node.js",
      "Fast, SEO-ready, and mobile-first",
      "Custom design — no templates, no shortcuts",
    ],
    href: "/tech-solution/web-development",
    col: "first",
  },
  {
    icon: "ri-store-3-line",
    title: "Shopify Development",
    points: [
      "Full Shopify store builds and migrations",
      "Custom themes and app integrations",
      "Checkout optimization for higher conversions",
      "Headless Shopify for brands that need full control",
    ],
    href: "/tech-solution/shopify-development",
    col: "second",
  },
  {
    icon: "ri-dashboard-line",
    title: "Custom CRM & Web Apps",
    points: [
      "Internal tools and dashboards built for your workflow",
      "CRMs tailored to your sales and ops process",
      "Scalable web apps that grow with your business",
      "For teams that have outgrown off-the-shelf tools",
    ],
    href: "/tech-solution/web-development",
    col: "third",
  },
];

const Exquisites = () => {
  return (
    <div className="exquisites-home-page">
      <div className="container">
        <div className="heading-div">
          <div id="word-heading" className="work-heading-home row-div">
            <h2 className="main-section-heading">What We Build</h2>
            <Link href="/contact">
              <button>
                <span className="btn-span-1">Contact Us</span>
                <span className="btn-span-2">
                  <i className="ri-arrow-right-up-long-line"></i>
                </span>
              </button>
            </Link>
          </div>
          <h4>
            We build websites, Shopify stores, and custom web apps that are fast, scalable, and designed to convert.
          </h4>
        </div>

        <div className="row justify-content-center">
          {cards.map((card) => (
            <div key={card.col} className={`col-lg-4 col-sm-12 ${card.col}`}>
              <div className="inner-div">
                <ul>
                  <li style={{ fontSize: "3rem", lineHeight: 1 }}>
                    <i className={card.icon}></i>
                  </li>
                  <li>
                    <h2 className="inner-heading">{card.title}</h2>
                  </li>
                  {card.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                  <li style={{ marginTop: "1.5rem" }}>
                    <Link
                      href={card.href}
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        color: "#000",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        borderBottom: "1px solid #000",
                        paddingBottom: "2px",
                      }}
                    >
                      Learn more <i className="ri-arrow-right-line"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exquisites;
