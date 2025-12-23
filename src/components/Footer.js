"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
gsap.registerPlugin(ScrollTrigger);

import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Footer = () => {
  const footerRef = useRef(null);
  const pathname = usePathname();
  useGSAP(() => {

    // Reset footer position initially
    gsap.set("#footerSecond", { yPercent: -70 });

    // Define the timeline for uncover animation
    const uncover = gsap.timeline({ paused: true });
    uncover.to("#footerSecond", { yPercent: 0, ease: "none" });

    // Create ScrollTrigger instance
    const trigger = ScrollTrigger.create({
      trigger: ".last-section-of-every-page",
      start: "bottom bottom",
      end: "+=75%",
      animation: uncover,
      scrub: true,
    });

    // Cleanup to prevent duplicate triggers when route changes
    return () => {
      trigger.kill();
      uncover.kill();
    };
  }, [pathname]);

  return (
    <footer id="footer" ref={footerRef}>
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
                  <Link href="/blogs">Blogs</Link>
                </li>

                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>

              <ul className="footer-ul-2">
                <li>C-119,Ground Floor, Sec-2, Noida</li>
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
                  <Link href={"/"}>Privacy Policy</Link>
                </span>
                <span>
                  {" | "} <Link href={"/"}>Term & Conditions</Link>
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
