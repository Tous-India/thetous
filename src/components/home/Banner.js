"use client";
import React from "react";
import Link from "next/link";
import Robot from "./Robot";

const Banner = () => {
  return (
    <section className="home-banner-main-section">
      <div className="container-fluid">
        <div className="row-div">
          {/* LEFT TEXT SECTION */}
          <div
            className="col-div text-div"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="inner-div">
              <h1>
                <span>Transforming</span>
                <br />
                <span>Brands With</span>
                <br />
                <span>Strategic Digital</span>
                <br />
                <span>Solutions</span>
              </h1>

              <p>
                Crafting tailored digital strategies for 100+ brands that drive
                sales, growth, and engagement.
              </p>

              <Link href="/about" className="cta-link">
                The Tous <i className="ri-corner-right-down-fill"></i>
              </Link>
            </div>
          </div>

          {/* RIGHT VIDEO SECTION */}
          <div className="col-div">
            {/* <video className="banner-video" autoPlay muted loop playsInline>
              <source src="/home/pvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}

            <Robot
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
