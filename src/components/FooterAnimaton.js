  // "use client";
  // import React, { useRef, useEffect } from "react";
  // import { gsap } from "gsap";
  // import { ScrollTrigger } from "gsap/ScrollTrigger";
  // import { usePathname } from "next/navigation";
  // gsap.registerPlugin(ScrollTrigger);
  // const FooterAnimaton = () => {
  //   const footerRef = useRef(null);
  //   const pathname = usePathname();
  //   useEffect(() => {
  //     console.log("Route changed:", pathname);

  //     // gsap.set("#footerSecond", { yPercent: -70,duration:2 });
  //     gsap.set("#footerSecond", { yPercent: -10,duration:2 });

  //     const uncover = gsap.timeline({ paused: true });

  //     uncover.to("#footerSecond", { yPercent: 0, ease: "none" });

  //     ScrollTrigger.create({
  //       trigger: ".last-section-of-every-page",
  //       start: "bottom bottom",
  //       end: "+=75%",
  //       animation: uncover,
  //       scrub: true,
  //     });
  //   }, [pathname]);
  //   return <div>FooterAnimaton</div>;
  // };

  // export default FooterAnimaton;
