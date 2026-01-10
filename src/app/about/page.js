"use client";
import { useState } from "react";
import "./style.css";
import Link from "next/link";
// import AboutTest from "@/components/AboutTest";
import Image from "next/image";

const page = () => {
  return (
    <div className="about-page-main">
      <div className="container aboutRow">
        <div className="row align-items-start">
          <div className="col-md-12 col-lg-6 col-sm-12 d-flex justify-content-centent align-items-start flex-column brand-strategy-div content-div">
            <h1 className="w-100">About Us</h1>
            <p className="w-100">
              The Tous is a performance-driven creative marketing agency, built
              exclusively for E-Commerce growth. Since 2018, we’ve helped
              ambitious online brands scale with precision, creativity, and
              measurable impact.
            </p>
            <p>
              <strong>Why brands trust The Tous</strong>
            </p>
            <ul>
              <li>
                E-Commerce first agency with deep platform and consumer insight
              </li>
              <li>15+ specialists across strategy, design, media & tech</li>
              <li>57+ E-Commerce websites delivered</li>
              <li>
                Data-led performance marketing focused on ROI, not vanity
                metrics active since 2018
              </li>
              <li>Custom growth strategies—no templates, no shortcuts</li>
              <li>
                High-impact creative & UX built to convert, not just look good
              </li>
            </ul>
            <p>
              <span>
                At The Tous, we don’t run campaigns—we build scalable E-Commerce
                businesses.
              </span>
            </p>
          </div>
          <div className="col-md-12 col-lg-6 col-sm-12 d-flex justify-content-centent align-items-start flex-column brand-strategy-div about-Page-right">
            <iframe src="https://lottie.host/embed/2ac5f84d-2e64-4c29-bbb8-c6d7843c3558/LLOzV1kglb.json"></iframe>
            <p></p>
          </div>
        </div>
      </div>

      <AboutTest />
      {/* <OurTeam /> */}
      <section className="aboutCta">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="p">
                Together, let's have a quantifiable effect on your company.
              </div>
              <Link href="/quote">Design A Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;

const AboutTest = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Vision",
      heading: "",
      description:
        "Empowering brands with innovative, human-centric marketing strategies that drive real results. Our vision is to be the most trusted partner for business growth and success.",
      image:
        "/about/vision.webp",
    },
    {
      label: "Mission",
      heading: " ",
      description:
        "We empower E-Commerce brands with human-centric, data-driven marketing strategies that drive measurable growth, maximize ROI, and build lasting brand value—becoming a trusted partner in their long-term success.",
      image:
        "/about/mission.webp",
    },
    {
      label: "Values",
      heading: " ",
      description:
        "Results-Driven Approach, Customer-Centric Strategy, Innovation & Creativity, Transparency & Integrity, Data-Backed Decisions, Agility & Adaptability, Customer Loyalty & Retention.",
      image:
        "/about/values.webp",
    },
  ];
  return (
    <div className="About-page-tabs">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 left-col">
            <div className="inner-div">
              {/* Left Column - Content */}
              <div className="space-y-6 height-[150px ]">
                <h3 className="heading">
                  Explore the Layers of Abstract Design and Depth
                </h3>

                {/* Tab Buttons */}
                <div className="flex gap-2 flex-wrap tabs-button-div">
                  {tabs.map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`relative py-2 px-3 rounded-full font-medium transition-all duration-300 overflow-hidden border-2 border-solid border-black ${
                        activeTab === index
                          ? "text-white"
                          : "hover:text-black hover:bg-[#eaeaea]"
                      }`}
                    >
                      <span className="relative z-10">{tab.label}</span>
                      {activeTab === index && (
                        <div className="absolute inset-0 bg-black"></div>
                      )}
                      {activeTab !== index && (
                        <div className="absolute inset-0"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="tab-contentd-div">
                {tabs.map((tab, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-600  absolute left-[10px] top-[10px] ${
                      activeTab === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0  translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="headings">{tab.heading}</div>
                    <p className="">{tab.description}</p>
                  </div>
                ))}

                {/* <Link href="#" className="become-member-button">
                  Become a member
                </Link> */}
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12 righ-col">
            <div className="inner-div">
              {/* Right Column - Images */}
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-600 img-div ${
                    activeTab === index
                      ? "opacity-100 scale-100 rotate-0"
                      : "opacity-0 scale-95 rotate-3"
                  }`}
                >
                  <img
                    src={tab.image}
                    alt={tab.heading}
                    className=""
                  />
                 
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OurTeam = () => {
  return (
    <section className="ourTeam">
      <div className="container">
        <h2>Our Team</h2>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
            <div className="innerDivAbout text-center">
              <Image
                src="https://tous.mankindpackers.site/upload/ourteam/1735382266.jpg"
                alt="Team Member"
                width={100}
                height={100}
              />
              <h4>Akash Chauhan</h4>
              <h6 className="aboutTeamDes">IT Team Leader</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
