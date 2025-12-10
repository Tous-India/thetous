import React, { useRef } from "react";
import dummy from "../../../public/dummy/dummy.avif";
import Image from "next/image";
const About = () => {
  return (
    <div className="homepage-about-section">
      <div className="container-fluid">
        <div className="heading-div">
          <p>
            <span>About Us</span>
          </p>
          <h4>
            We built a simple talent management platform to help smaller HR
            teams have a greater impact on the growth of their organization.
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
                100K+
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
              <span>Leapers</span>
              <p>
                Every day, we enable more people to work better. We can’t help
                but be impressed by this number, and it's only the beginning.
              </p>
            </div>
            <div
              className="inner-div-2"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h4>20,000+</h4>
              <span>Customers</span>
              <p>
                We take great pride in our clients' trust. Helping them get
                ready for this new era of work never gets old.
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
                <p>250+</p>
                <span>Employees</span>
              </div>
              <div className="second-div">
                <p>
                  {" "}
                  That’s how many of us are dedicated to making work really work
                  every day.
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
                  <span className="span1">110</span>
                  <br />
                  <span className="span2">countries</span>
                </p>

                <p>
                  We have the chance to build relationships worldwide, giving us
                  unique insights into talent management and its future.
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
