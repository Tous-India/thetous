"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer">
      <div id="footerSecond">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12">
              <div id="footerFisrt" className="row-div">
                <h2>Let&apos;s Talk</h2>
                <Link href="/contact">
                  <button>
                    <span className="btn-span-1">Contact Us</span>
                    <span className="btn-span-2">
                      <i className="ri-arrow-right-up-long-line"></i>
                    </span>
                  </button>
                </Link>
              </div>
              <ul className="footer-ul">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/work">Work</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/brand-solution">Brand Solution</Link>
                </li>
                <li>
                  <Link href="/media-solution">Media Solution</Link>
                </li>
                <li>
                  <Link href="/tech-solution">Tech Solution</Link>
                </li>

                <li>
                  <Link href="https://blog.thetous.com/">Blogs</Link>
                </li>

                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>

              <ul className="footer-ul-2">
                <li>C-116, 1st Floor, Sector-2, Noida, UP 201301</li>
                <li>
                  <Link href={"mailto:grow@thetous.com"}>
                    {" "}
                    grow@thetous.com{" "}
                  </Link>
                </li>
                <li>
                  <Link href={"tel:8901440322"}>+91-8901440322 </Link>
                </li>
              </ul>

              <div className="my-2 pe-2 footer-social-icon">
                <h5>Connect with us</h5>
                <p>
                  <span className="">
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/thetousmedia/"
                    >
                      <i className="ri-instagram-line"></i>
                    </Link>
                  </span>

                  <span className="mx-2">
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/company/the-tous/"
                    >
                      <i className="ri-linkedin-fill"></i>
                    </Link>
                  </span>
                </p>
              </div>
              <h6 className="mb-0">
                <span className="footer-copyright-spanDiv">
                  Copyright © The Tous <span className="year">2025</span>. All
                  Rights Reserved.
                </span>
                <span>
                  {" | "}
                  <Link href={"/privacy-policy"}>Privacy Policy</Link>
                </span>
                <span>
                  {" | "} <Link href={"/terms-conditions"}>Term & Conditions</Link>
                </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
