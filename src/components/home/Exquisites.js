"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import ts from "../../../public/ts.png";
import ms from "../../../public/ms.png";
import bs from "../../../public/bs.png";
const Exquisites = () => {
  return (
    <div className="exquisites-home-page">
      <div className="container">
        <div className="heading-div">
          <div id="word-heading" className="work-heading-home row-div">
            <h2 className="main-section-heading">Exquisites</h2>
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
            Unlock your brand&apos;s potential with tailored digital marketing
            strategies. We deliver results that resonate and drive growth.
          </h4>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-12 first">
            <div className="inner-div">
              <ul>
                <li>
                  <Image src={bs} alt="Service1" width={70} height={70} />
                </li>
                <li>
                  <h2 className="inner-heading">
                    Brand Solutions
                  </h2>
                </li>
                <li>
                  <Link href={"/brand-solution"}>Social Media Management</Link>
                </li>
                <li>
                  <Link href={"/brand-solution"}>
                    Original Content & Copywriting
                  </Link>
                </li>
                <li>
                  <Link href={"/brand-solution"}>
                    Video Editing & Animation
                  </Link>
                </li>
                <li>
                  <Link href={"/brand-solution"}>
                    Model & Product Photography
                  </Link>
                </li>
                <li>
                  <Link href={"/brand-solution"}>
                    New Brand Launch & Rebranding
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 second">
            <div className="inner-div">
              <ul>
                <li>
                  <Image src={ts} alt="Service1" width={70} height={70} />
                </li>
                <li>
                  <h2 className="inner-heading">
                    Tech Solutions 
                  </h2>
                </li>
                <li>
                  <Link href={"/tech-solution"}>Custom Web Development</Link>
                </li>
                <li>
                  <Link href={"/tech-solution"}>Web Personalization</Link>
                </li>
                <li>
                  <Link href={"/tech-solution"}>E-Commerce</Link>
                </li>
                <li>
                  <Link href={"/tech-solution"}>Email Marketing</Link>
                </li>
                <li>
                  <Link href={"/tech-solution"}>UI/UX</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 third">
            <div className="inner-div">
              <ul>
                <li>
                  <Image src={ms} alt="Service1" width={70} height={70} />
                </li>
                <li>
                  <h2 className="inner-heading">
                     Media Solutions 
                  </h2>
                </li>
                <li>
                  <Link href={"/media-solution"}>Media Buying</Link>
                </li>
                <li>
                  <Link href={"/media-solution"}>Media Planning</Link>
                </li>
                <li>
                  <Link href={"/media-solution"}>Performance Marketing</Link>
                </li>
                <li>
                  <Link href={"/media-solution"}>
                    Search Engine Optimization
                  </Link>
                </li>
                <li>
                  <Link href={"/media-solution"}>
                    Conversation Rate Optimization
                  </Link>
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
