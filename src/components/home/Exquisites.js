"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import ig from "../../../public/blog/1724839571.webp";
import one1 from "../../../public/home/brand.webp";
import o1 from "../../../public/home/brand-2.webp";
import two from "../../../public/home/media.webp";
import three from "../../../public/home/tech.webp";
const Exquisites = () => {
  return (
    <div className="exquisites-home-page">
      <div className="container-fluid">
        <div className="heading-div">
          <div id="word-heading" className="work-heading-home row-div">
            <h2>Exquisites</h2>
            <Link href="https://tous.mankindpackers.site/works">
              <button>
                <span className="btn-span-1">View All</span>
                <span className="btn-span-2">
                  <i className="ri-arrow-right-up-long-line"></i>
                </span>
              </button>
            </Link>
          </div>
          <h4>
            Unlock your brand's potential with tailored digital marketing
            strategies. We deliver results that resonate and drive growth.
          </h4>
        </div>
        <div className="row ">
          <div className="col-lg-4 col-sm-12 first">
            <div className="inner-div">
              <ul>
                <li>
                  <h2>
                    <span>Brand Solutions</span>
                  </h2>
                </li>
                <li>
                  <Link href={"/"}>Social Media Management</Link>
                </li>
                <li>
                  <Link href={"/"}>Original Content & Copywriting</Link>
                </li>
                <li>
                  <Link href={"/"}>Video Editing & Animation</Link>
                </li>
                <li>
                  <Link href={"/"}>Model & Product Photography</Link>
                </li>
                <li>
                  <Link href={"/"}> New Brand Launch & Rebranding</Link>
                </li>
              </ul>
               
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 second">
            <div className="inner-div">
              <ul>
                <li>
                  <h2>
                    <span>Tech Solutions</span>
                  </h2>
                </li>
                <li>
                  {" "}
                  <Link href={"/"}>Custom Web Development</Link>
                </li>
                <li>
                  {" "}
                  <Link href={"/"}>Web Personalization</Link>
                </li>
                <li>
                  <Link href={"/"}>E-Commerce</Link>
                </li>
                <li>
                  {" "}
                  <Link href={"/"}>Email Marketing</Link>
                </li>
                <li>
                  <Link href={"/"}>UI/UX</Link>
                </li>
              </ul>
               
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 third">
            <div className="inner-div">
              <ul>
                <li>
                  <h2>
                    <span>Media Solutions</span>
                  </h2>
                </li>
                <li>
                  {" "}
                  <Link href={"/"}>Media Buying</Link>
                </li>
                <li>
                  {" "}
                  <Link href={"/"}>Media Planning</Link>
                </li>
                <li>
                  {" "}
                  <Link href={"/"}>Performance Marketing</Link>
                </li>
                <li>
                  {" "}
                  <Link href={"/"}>Search Engine Optimization</Link>
                </li>
                <li>
                  {" "}
                  <Link href={"/"}>Coversation Rate Optimization</Link>
                </li>
              </ul>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exquisites;
