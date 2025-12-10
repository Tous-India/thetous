"use client";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner from "@/components/home/Banner";
import Work from "@/components/home/Work";
import Exquisites from "@/components/home/Exquisites";
import Blogs from "@/components/home/Blogs";
import Sliders from "@/components/home/Sliders";
import About from "@/components/home/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "lenis";
import Footer from "@/components/Footer";
import Testimonials from "@/components/home/Testimonials";

export default function Index() {
  // gsap
  useEffect(() => {
    gsap.set(".flair", { xPercent: -50, yPercent: -50 });

    let xTo = gsap.quickTo(".flair", "x", { duration: 0.6, ease: "power3" }),
      yTo = gsap.quickTo(".flair", "y", { duration: 0.6, ease: "power3" });

    window.addEventListener("mousemove", (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="home-page-main">
      {/* <main> */}
      <Banner />
      <About />
      <Work />
      <Exquisites />
      <Sliders />
      <Blogs />
      <Testimonials/>
      {/* </main> */}
    </div>
  );
}
