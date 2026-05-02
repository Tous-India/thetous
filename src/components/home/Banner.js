"use client";
import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="home-banner-main-section">
      <div className="container">
        <div className="row-div">
          <div
            className="inner-div"
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{ fontFamily: "'Poppins', sans-serif", marginTop: "5rem" }}
            >
              High-converting websites and Shopify stores for D2C and B2B
              brands.
            </h1>

            <p
              className="banner-sub"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "1.1rem",
                fontWeight: 400,
                color: "#555",
                maxWidth: "600px",
                margin: "1.2rem auto 2rem auto",
              }}
            >
              Custom web development, Shopify builds, and CRM solutions —
              designed to load fast, convert visitors, and scale with your
              business.
            </p>

            <div
              className="banner-ctas"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                width: "100%",
                maxWidth: "360px",
              }}
            >
              <Link
                href="/book-a-call"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  background: "#000",
                  color: "#fff",
                  padding: "14px 28px",
                  borderRadius: "6px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  position: "static",
                  top: "auto",
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                  width: "100%",
                  position: "static",
                  top: "auto",
                }}
              >
                See Our Work <i className="ri-arrow-right-line"></i>
              </Link>
            </div>

            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.82rem",
                color: "rgb(81 81 81)",
                marginTop: "0rem",
                letterSpacing: "0.01em",
              }}
            >
              150+ websites delivered since 2018 <br />· D2C · B2B · Ecommerce
            </p>
          </div>
        </div>
      </div>

      {/* <Link href="#about-section-homepage" className="cta-link">
        <span>
          The Tous <i className="ri-corner-right-down-fill"></i>
        </span>
      </Link> */}
    </section>
  );
};

export default Banner;
