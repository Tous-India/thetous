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
            Unlock your brand&apos;s potential with tailored digital marketing
            strategies. We deliver results that resonate and drive growth.
          </h4>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-12 first">
            <Link href={"#"} className="inner-div">
              <ul>
                <li>
                  <Image src={bs} alt="Service1" width={70} height={70} />
                </li>
                <li>
                  <h2>
                    <span>Brand Solutions</span>
                  </h2>
                </li>
                <li>Social Media Management</li>
                <li>Original Content & Copywriting</li>
                <li>Video Editing & Animation</li>
                <li>Model & Product Photography</li>
                <li>New Brand Launch & Rebranding</li>
              </ul>
            </Link>
          </div>
          <div className="col-lg-4 col-sm-12 second">
            <Link href={"#"} className="inner-div">
              <ul>
                <li>
                  <Image src={ts} alt="Service1" width={70} height={70} />
                </li>
                <li>
                  <h2>
                    <span>Tech Solutions</span>
                  </h2>
                </li>
                <li>Custom Web Development</li>
                <li>Web Personalization</li>
                <li>E-Commerce</li>
                <li>Email Marketing</li>
                <li>UI/UX</li>
              </ul>
            </Link>
          </div>
          <div className="col-lg-4 col-sm-12 third">
            <Link href={"#"} className="inner-div">
              <ul>
                <li>
                  <Image src={ms} alt="Service1" width={70} height={70} />
                </li>
                <li>
                  <h2>
                    <span>Media Solutions</span>
                  </h2>
                </li>
                <li>Media Buying</li>
                <li>Media Planning</li>
                <li>Performance Marketing</li>
                <li>Search Engine Optimization</li>
                <li>Coversation Rate Optimization</li>
              </ul>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exquisites;
