"use client";
import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="home-banner-main-section">
      <div className="container">
        <div className="row-div">
          <div className="inner-div">
            <h1 style={{ fontFamily: "'Poppins', sans-serif" }}>
              High-converting websites and Shopify stores for D2C and B2B brands.
            </h1>

            <p className="banner-sub" style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 400,
              color: "#555",
              maxWidth: "600px",
              lineHeight: "1.7",
              margin: "1.2rem 0 2rem 0",
            }}>
              Custom web development, Shopify builds, and CRM solutions — designed to load fast, convert visitors, and scale with your business.
            </p>

            <div className="banner-ctas" style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  background: "#000",
                  color: "#fff",
                  padding: "14px 28px",
                  borderRadius: "6px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textDecoration: "none",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                }}
              >
                Book a Free Strategy Call
              </Link>

              <Link
                href="/work"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#000",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  borderBottom: "1px solid #000",
                  paddingBottom: "2px",
                }}
              >
                See Our Work <i className="ri-arrow-right-line"></i>
              </Link>
            </div>

            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.82rem",
              color: "#999",
              marginTop: "1.5rem",
              letterSpacing: "0.01em",
            }}>
              60+ websites delivered since 2018 · D2C · B2B · Ecommerce
            </p>
          </div>
        </div>
      </div>

      <Link href="#about-section-homepage" className="cta-link">
        <span>
          The Tous <i className="ri-corner-right-down-fill"></i>
        </span>
      </Link>
    </section>
  );
};

export default Banner;
