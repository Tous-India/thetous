"use client";

import React from "react";
import "./style.css";
import WorkCard from "@/components/WorkCard";
import caseStudiesData from "@/data/caseStudies.json";

/* ================= IMAGES ================= */

import prozvofit from "../../../public/home/work/1726132161.webp";
import silvago from "../../../public/home/work/silvago.png";
import luxeliv from "../../../public/home/work/1731492385.webp";
import executive from "../../../public/work/executive.webp";
import ohmypet from "../../../public/work/ohmypet.webp";
import dhirsons from "../../../public/work/dhirsons.webp";
import crossraod from "../../../public/home/work/1731492317.webp";
import godrej from "../../../public/home/work/godrej.jpg";
import m3mPanipat from "../../../public/home/work/m3m-panipat.webp";
import sbp from "../../../public/home/work/sbp.png";
import skaOrion from "../../../public/home/work/SKA orion.jpg";
import tarc from "../../../public/home/work/TARC.jpg";

/* ================= IMAGE MAP ================= */

const imageMap = {
  "/home/work/1726132161.webp": prozvofit,
  "/home/work/1731492385.webp": luxeliv,
  "/work/executive.webp": executive,
  "/work/ohmypet.webp": ohmypet,
  "/work/dhirsons.webp": dhirsons,
  "/home/work/1731492317.webp": crossraod,
  "/home/work/silvago.png": silvago,
  "/home/work/godrej.jpg": godrej,
  "/home/work/m3m-panipat.webp": m3mPanipat,
  "/home/work/sbp.png": sbp,
  "/home/work/SKA orion.jpg": skaOrion,
  "/home/work/TARC.jpg": tarc,
};

/* ================= DATA ================= */

export const workData = {
  brandSolution: caseStudiesData.caseStudies.map((study) => ({
    id: study.id,
    image: imageMap[study.image],
    title: study.title,
    desc: study.description,
    tags: study.tags,
    disabled: study.id === 'ska-orion' || study.id === 'tarc',
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