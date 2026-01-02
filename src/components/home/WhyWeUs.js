import Image from "next/image";
import React from "react";

import collaboration from "../../../public/home/collaboration.png";
import creative from "../../../public/home/idea.png";
import result from "../../../public/home/results.png";
import expert from "../../../public/home/self-confidence.png";

const WhyWeUs = () => {
  return (
    <div className="home-page-why-we-us-section">
      <div className="container">
        <div className="heading-section">
          <h2 className="main-section-heading">Why Choose Us ?</h2>
          <p>
            We follow a clear, structured process to deliver impactful results
            for your brand—every single time.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-12">
            <div
              className="innerDiv"
              data-aos="flip-up"
              data-aos-duration="1000"
            >
              <Image src={expert} alt="UYB" width={50} height={50} />
              <div>
                <h5>Expertise Across Industries</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12">
            <div
              className="innerDiv"
              data-aos="flip-down"
              data-aos-duration="1500"
            >
              <Image src={result} alt="UYB" width={50} height={50} />
              <div>
                <h5>
                  Proven
                  <br /> Results
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12">
            <div
              className="innerDiv"
              data-aos="zoom-in"
              data-aos-duration="1800"
            >
              <Image src={creative} alt="UYB" width={50} height={50} />
              <div>
                <h5>Innovative & Creative Solutions</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12">
            <div
              className="innerDiv"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              <Image src={collaboration} alt="UYB" width={50} height={50} />
              <div>
                <h5>Transparent & Collaborative</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWeUs;
