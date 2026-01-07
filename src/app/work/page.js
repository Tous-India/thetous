"use client";

import React from "react";
import "./style.css";
import WorkCard from "@/components/WorkCard";
import caseStudiesData from "@/data/caseStudies.json";

/* ================= IMAGES ================= */

import prozvofit from "../../../public/home/work/1726132161.webp";
import silvago from "../../../public/home/work/1731492367.webp";
import luxeliv from "../../../public/home/work/1731492385.webp";
import executive from "../../../public/work/executive.webp";
import ohmypet from "../../../public/work/ohmypet.webp";
import dhirsons from "../../../public/work/dhirsons.webp";
import crossraod from "../../../public/home/work/1731492317.webp";
import silvagoNew from "../../../public/home/work/silvago.png";

/* ================= IMAGE MAP ================= */

const imageMap = {
  "/home/work/1726132161.webp": prozvofit,
  "/home/work/1731492385.webp": luxeliv,
  "/work/executive.webp": executive,
  "/work/ohmypet.webp": ohmypet,
  "/work/dhirsons.webp": dhirsons,
  "/home/work/1731492317.webp": crossraod,
  "/home/work/silvago.png": silvagoNew,
};

/* ================= DATA ================= */

export const workData = {
  brandSolution: caseStudiesData.caseStudies.map((study) => ({
    id: study.id,
    image: imageMap[study.image],
    title: study.title,
    desc: study.description,
    tags: study.tags,
  })),
};

/* ================= MAIN COMPONENT ================= */

const Work = () => {
  return (
    <div className="work-main-page">
      <section>
        {/* Heading */}
        <div className="container bs-container my-5">
          <div className="row">
            <div className="col-md-6 d-flex flex-column brand-strategy-div">
              <h1>Our Work</h1>
              <p>
                Our strategists, designers, video editors and animators provide
                holistic solutions to grow your digital presence and achieve
                your business goals through integrated campaigns.
              </p>
            </div>
          </div>
        </div>

        {/* Work Cards */}
        <div className="container container-2">
          <div className="row">
            {workData.brandSolution.map((item) => (
              <WorkCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
