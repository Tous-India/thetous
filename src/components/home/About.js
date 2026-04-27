import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="homepage-about-section" id="about-section-homepage">
      <div className="container">
        <div id="word-heading" className="work-heading-home">
          <div>
            <h2 className="main-section-heading">About The Tous</h2>
          </div>
        </div>

        <div
          style={{ maxWidth: "720px" }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "1rem",
            color: "#333",
            lineHeight: "1.8",
            margin: "0 0 1.2rem 0",
          }}>
            We&apos;ve been building websites since 2018. Today we&apos;re a team of 6 — developers, designers, and a founder who still writes code. We&apos;ve delivered 60+ projects for D2C, B2B, and ecommerce brands across India.
          </p>
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "1rem",
            color: "#333",
            lineHeight: "1.8",
            margin: "0 0 2.5rem 0",
          }}>
            We don&apos;t do everything. We do web development, Shopify, and custom CRM work — and we do it well.
          </p>

          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "#555",
            borderTop: "1px solid #e5e5e5",
            paddingTop: "1.5rem",
            flexWrap: "wrap",
          }}>
            <span>60+ projects</span>
            <span style={{ color: "#ccc" }}>·</span>
            <span>5+ years</span>
            <span style={{ color: "#ccc" }}>·</span>
            <span>D2C, B2B, Ecommerce</span>
          </div>

          <Link
            href="/about"
            style={{
              fontFamily: "'Poppins', sans-serif",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              marginTop: "1.5rem",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#000",
              textDecoration: "none",
              borderBottom: "1px solid #000",
              paddingBottom: "2px",
            }}
          >
            Meet the team <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
