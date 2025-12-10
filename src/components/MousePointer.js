"use client";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MousePointer = () => {
  useEffect(() => {
    gsap.set(".flair", { xPercent: -50, yPercent: -50 });

    let xTo = gsap.quickTo(".flair", "x", { duration: 0.6, ease: "power3" }),
      yTo = gsap.quickTo(".flair", "y", { duration: 0.6, ease: "power3" });

    window.addEventListener("mousemove", (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
  }, []);

  return <div className="flair flair--3"></div>;
};

export default MousePointer;
