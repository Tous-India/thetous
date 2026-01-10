"use client";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const MousePointer = () => {
  const [isHovered, setIsHovered] = useState(false); // state to track hover effect for text
  const pathname = usePathname(); // Track route changes

  useEffect(() => {
    // Reset cursor to default state on route change
    gsap.set(".flair", {
      xPercent: -50,
      yPercent: -50,
      scale: 1,
      width: "20px",
      height: "20px",
      borderRadius: "50px",
      mixBlendMode: "difference",
      backgroundColor: "",
      color: "",
      boxShadow: ""
    });
    setIsHovered(false);

    let xTo = gsap.quickTo(".flair", "x", { duration: 0.6, ease: "power3" }),
      yTo = gsap.quickTo(".flair", "y", { duration: 0.6, ease: "power3" });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Select all 'a' tags inside footer
    const footerLinks = document.querySelectorAll("a");

    const footerHandlers = [];
    footerLinks.forEach((link) => {
      const mouseEnter = () => {
        // Increase size of cursor when entering a footer link
        gsap.to(".flair", {
          duration: 0.3,
          scale: 0.5,
        });
      };

      const mouseLeave = () => {
        // Reset the cursor size when leaving the link
        gsap.to(".flair", {
          duration: 0.3,
          scale: 1,
        });
      };

      link.addEventListener("mouseenter", mouseEnter);
      link.addEventListener("mouseleave", mouseLeave);

      footerHandlers.push({ link, mouseEnter, mouseLeave });
    });

    // work mouse movement
    // const sectionLinks = document.querySelectorAll(
    //   ".work-home-section .swiper-main-div a"
    // );

    // const sectionHandlers = [];
    // sectionLinks.forEach((link) => {
    //   const mouseEnter = () => {
    //     // Scale the cursor on hover and show the text
    //     gsap.to(".flair", {
    //       duration: 0.3,
    //       scale: 1.2,
    //       width: "70px",
    //       height: "70px",
    //       borderRadius: "50px",
    //       mixBlendMode: "unset",
    //       backgroundColor: "black",
    //       color: "white",
    //       boxShadow: "0px 0px 20px -5px gray",
    //     });
    //     setIsHovered(true);
    //   };

    //   const mouseLeave = () => {
    //     // Reset cursor size and hide the text when leaving
    //     gsap.to(".flair", {
    //       duration: 0.3,
    //       scale: 1,
    //       width: "20px",
    //       height: "20px",
    //       borderRadius: "50px",
    //       mixBlendMode: "difference",
    //       backgroundColor: "",
    //       color: "",
    //     });
    //     setIsHovered(false);
    //   };

    //   link.addEventListener("mouseenter", mouseEnter);
    //   link.addEventListener("mouseleave", mouseLeave);
    //   link.addEventListener("onclick", mouseLeave);

    //   sectionHandlers.push({ link, mouseEnter, mouseLeave });
    // });

    return () => {
      // Cleanup event listeners on unmount
      window.removeEventListener("mousemove", handleMouseMove);

      footerHandlers.forEach(({ link, mouseEnter, mouseLeave }) => {
        link.removeEventListener("mouseenter", mouseEnter);
        link.removeEventListener("mouseleave", mouseLeave);
      });

      // sectionHandlers.forEach(({ link, mouseEnter, mouseLeave }) => {
      //   link.removeEventListener("mouseenter", mouseEnter);
      //   link.removeEventListener("mouseleave", mouseLeave);
      // });
    };
  }, [pathname]); // Re-run effect when route changes

  return <div className="flair flair--3">{isHovered ? "View" : ""}</div>;
};

export default MousePointer;
