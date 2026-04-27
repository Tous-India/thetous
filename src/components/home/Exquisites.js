"use client";
import React from "react";
import Link from "next/link";

const cards = [
  {
    icon: "ri-code-s-slash-line",
    title: "Custom Web Development",
    oneliner: "For brands that need more than a template.",
    points: [
      "Built on Next.js, React, and Node",
      "Mobile-first, SEO-ready, fast loading",
      "CMS integration (Sanity, Strapi, WordPress)",
      "Lead forms, analytics, and tracking setup",
    ],
    href: "/tech-solution/web-development",
    col: "first",
  },
  {
    icon: "ri-shopping-bag-line",
    title: "Shopify Development",
    oneliner: "From new stores to full migrations.",
    points: [
      "Custom themes built from scratch",
      "Migration from WooCommerce, Magento, or other platforms",
      "Checkout, app, and payment gateway integrations",
      "Speed and conversion optimization",
    ],
    href: "/tech-solution/shopify-development",
    col: "second",
  },
  {
    icon: "ri-dashboard-line",
    title: "Custom CRM & Web Apps",
    oneliner: "Built for your team's exact workflow.",
    points: [
      "Internal dashboards and admin panels",
      "Sales, inventory, and operations CRMs",
      "Role-based access and reporting",
      "Integrates with tools you already use",
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
                  <li style={{ fontSize: "13px", color: "#777", fontStyle: "italic", marginBottom: "0.25rem" }}>
                    {card.oneliner}
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <div style={{ margin: "0.5rem 0 0 0" }}>
                      {card.points.map((point, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "6px", fontSize: "12px", lineHeight: "1.8", opacity: 0.7 }}>
                          <span style={{ flexShrink: 0, marginTop: "1px" }}>•</span>
                          <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{point}</span>
                        </div>
                      ))}
                    </div>
                  </li>
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
