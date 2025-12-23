"use client";
import React from "react";
import Link from "next/link";
import Robot from "./Robot";

const Banner = () => {
  return (
    <section className="home-banner-main-section">
      <div className="container">
        <div
          className="row-div"
          // data-aos="fade-right"
          // data-aos-duration="1000"
          // data-aos-easing="ease-in-out"
        >
          {/* LEFT TEXT SECTION */}
          <div className="inner-div">
            <h1>
              <span className="mx-3 trans desk-trans">Transforming</span>{" "}
              <span className="robo-span">
                <Robot
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                />
              </span>
              <span className="mx-3 trans phone-trans">Transforming</span>{" "}
              <span className="brand">Brands </span>{" "}
              <span className="with">With &nbsp;</span>
              <span className="ai">
                {" "}
                <div className="strong"> AI-Driven</div>
                &nbsp;
              </span>
              <span className="digi">Digital</span>
              <span className="sol">&nbsp;Solutions</span>
            </h1>
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

{
  /* RIGHT VIDEO SECTION */
}
{
  /* <div className="col-div"> */
}
{
  /* <video className="banner-video" autoPlay muted loop playsInline>
              <source src="/home/pvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */
}

{
  /* <Robot
    data-aos="fade-left"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
  />
</div>;

<Link href="/about" className="cta-link">
  The Tous <i className="ri-corner-right-down-fill"></i>
</Link>;

<div className="inner-div">
  <h1>
    <span>Transforming</span>
    <br />
    <span>Brands With</span>
    <br />
    <span>AI driven Digital</span>
    <br />
    <span>Solutions</span>
  </h1>
</div>; */
}
