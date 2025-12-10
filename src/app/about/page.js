import React from "react";
import "./style.css";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className="about-page-main">
      <div className="container bs-container mb-5 aboutRow">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-6 col-sm-12 d-flex justify-content-centent align-items-center flex-column brand-strategy-div">
            <h1 className="w-100">About Us.</h1>
            <p className="w-100">
              Our strategists, designers, video editors and animators provide
              you with holistic solutions to grow your digital presence and
              achieve your business goals through both day-to-day content and
              integrated flagship campaigns.
            </p>
          </div>
          <div className="col-md-12 col-lg-6 col-sm-12 d-flex justify-content-centent align-items-center flex-column brand-strategy-div about-Page-right">
            <iframe src="https://lottie.host/embed/2ac5f84d-2e64-4c29-bbb8-c6d7843c3558/LLOzV1kglb.json"></iframe>
            <p></p>
          </div>
        </div>
      </div>
      <section className="aboutVision">
        <div className="container">
          <div className="row justify-content-centent">
            <div className="col-lg-6 col-md-12  vision-btnDiv d-flex flex-column align-items-center justify-content-center">
              <span>Vision</span>
              <section className="careerAbout">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-8 col-sm-10 careerBox">
                      <div className="careerButton">
                        <h2>Career</h2>
                        <Link href="mailto:grow@thetous.com">grow@thetous.com</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-lg-6 col-md-12 d-flex flex-direction-column justify-content-centent align-items-end p-0 m-0">
              <h2>
                <p>
                  Empowering brands with innovative, human-centric marketing
                  strategies that drive real results. Our vision is to be the
                  most trusted partner for business growth and success.
                </p>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="ourTeam">
        <div className="container">
          <h2>Our Team</h2>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
              <div className="innerDivAbout text-center">
                <img
                  src="https://tous.mankindpackers.site/upload/ourteam/1735382266.jpg"
                  alt="Team Member"
                />
                <h4>Akash Chauhan</h4>
                <h6 className="aboutTeamDes">IT Team Leader</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutCta last-section-of-every-page">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>
                Together, let's have a quantifiable effect on your company.
              </h1>
              <Link href="">Design A Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
