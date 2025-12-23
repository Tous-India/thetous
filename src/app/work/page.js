import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./style.css";
import WorkCard from "@/components/WorkCard";
/* ================= IMAGES ================= */

import prozvofit from "../../../public/home/work/1726132161.webp";
import madhu from "../../../public/work/madhu.png";
import silvago from "../../../public/home/work/1731492367.webp";
import luxeliv from "../../../public/home/work/1731492385.webp";
import executive from "../../../public/work/executive.webp";
import ohmypet from "../../../public/work/ohmypet.webp";
import dhirsons from "../../../public/work/dhirsons.webp";
import crossraod from "../../../public/home/work/1731492317.webp";

/* ================= DATA ================= */

const workData = {
  brandSolution: [
    {
      image: luxeliv,
      title: "Luxeliv",
      desc: "Shree Enterprises is a family-owned, Indian manufacturer of kitchenware. From it...",
      tags: ["Website", "SEO"],
    },
    {
      image: dhirsons,
      title: "Dhirsons Jewellery House",
      desc: "The Premium Diamond Jewellery Wholesale store in Karol Bagh, Delhi & Retail Stor...",
      tags: ["Website", "SEO"],
    },

    {
      image: ohmypet,
      title: "Oh My Pet Grooming",
      desc: "At Oh My Pet Grooming, we bring professional pet care services right to your doo...",
      tags: ["Website", "SEO"],
    },
    {
      image: executive,
      title: "EXECUTIVE CARS",
      desc: "Welcome to our first-class chauffeur car service in Melbourne, the best choice ...",
      tags: ["Website", "SEO", "Ads"],
    },
      {
      image: silvago,
      title: "Silvago",
      desc: "Welcome to our first-class chauffeur car service in Melbourne, the best choice ...",
      tags: ["Website", "SEO", "Ads"],
    },
      {
      image: executive,
      title: "Nestloom",
      desc: "Welcome to our first-class chauffeur car service in Melbourne, the best choice ...",
      tags: ["Website", "SEO", "Ads"],
    },
      {
      image: executive,
      title: "KB Enterprises",
      desc: "Welcome to our first-class chauffeur car service in Melbourne, the best choice ...",
      tags: ["Website", "SEO", "Ads"],
    },
      {
      image: prozvofit,
      title: "Prozvofit",
      desc: "Welcome to our first-class chauffeur car service in Melbourne, the best choice ...",
      tags: ["Website", "SEO", "Ads"],
    },
      {
      image: crossraod,
      title: "Crossroads Hospital ",
      desc: "Welcome to our first-class chauffeur car service in Melbourne, the best choice ...",
      tags: ["Website", "SEO", "Ads"],
    },
  ],
};

/* ================= MAIN COMPONENT ================= */

const Work = () => {
  return (
    <div className="work-main-page">
      {/* Heading */}
      <div className="container bs-container mb-5 mt-5">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12 d-flex justify-content-centent align-items-center flex-column brand-strategy-div">
            <h1 className="w-100">Our Work.</h1>
            <p className="w-100">
              Our strategists, designers, video editors and animators provide
              you with holistic solutions to grow your digital presence and
              achieve your business goals through both day-to-day content and
              integrated flagship campaigns.
            </p>
          </div>
        </div>
      </div>

      {/* Work Sections */}
      <section className=" last-section-of-every-page">
        <div className="container">
          {/* Brand */}
          <div className="row brand-row">
            <div className="col-lg-12">
              <div className="inner-div row">
                {workData.brandSolution.map((item, index) => (
                  <WorkCard key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
