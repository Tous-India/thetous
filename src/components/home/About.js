import React, { useRef } from "react";
import dummy from "../../../public/dummy/dummy.avif";
import Image from "next/image";
const About = () => {
  return (
    <div className="homepage-about-section" id="about-section-homepage">
      <div className="container">
        <div id="word-heading" className="work-heading-home">
          <div>
            <h2>About Us</h2>
          </div>
          <h4>
            At The Tous, we craft innovative digital strategies that drive
            growth, engagement, and success. With a passion for creativity and
            focus on results, we help eCommerce brands grow in the digital
            world.
          </h4>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-12 left">
            <div
              className="inner-div-1"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
            >
              <h4>
                57+ E-Commerce Websites Delivered
                <Image
                  src={
                    "https://cdn.prod.website-files.com/66eab063c614790046e87eef/68dd737c5c8c9b1c39ed366b_Stat%20Icon.svg"
                  }
                  width={100}
                  height={100}
                  alt=""
                  priority
                />
              </h4>
              <p>
                Since 2018, we’ve been passionately building successful
                e-commerce websites, helping brands thrive in a digital-first
                world. Each project is a reflection of our commitment to
                delivering top-tier, user-friendly, and conversion-focused
                platforms.
              </p>
            </div>
            <div
              className="inner-div-2"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h4>15+ </h4>
              <span>Team Members</span>
              <p>
                Our small but mighty team of 15 experts is dedicated to
                providing the highest level of service. From strategy to
                execution, we work seamlessly together to make sure your brand
                stands out online.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-12 mid"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            <div className="inner-div">
              <div className="first-div">
                <h5>
                  <span>Our Focus </span>
                </h5>
                <p>E-Commerce Brands</p>
              </div>
              <div className="second-div">
                <p>
                  At TheTous, we specialize in helping e-commerce brands grow
                  through strategic Meta Ads, Google Ads, and Social Media
                  Management. With a data-driven approach, we help brands
                  connect with their audience and maximize ROI through tailored
                  digital strategies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 right">
            <div
              className="inner-div-1"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <Image
                src={dummy}
                alt="about-image"
                width={400}
                height={400}
                priority
              />
            </div>
            <div
              className="inner-div-2"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div>
                <p>
                  <span className="span1">Active Since 2018</span>
                </p>

                <p>
                  The Tous has been proudly delivering exceptional digital
                  marketing and e-commerce solutions for over 5 years. We’ve
                  consistently evolved with the digital landscape, staying ahead
                  of trends and helping our clients succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
