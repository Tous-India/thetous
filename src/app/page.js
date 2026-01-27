"use client";
import usePageTitle from "@/hooks/usePageTitle";
import { useEffect } from "react";
import Banner from "@/components/home/Banner";
import Work from "@/components/home/Work";
import Exquisites from "@/components/home/Exquisites";
import Blogs from "@/components/home/Blogs";
import Sliders from "@/components/home/Sliders";
import About from "@/components/home/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "lenis";
import Testimonials from "@/components/home/Testimonials";
import Marquee from "@/components/home/Marquee";
import WhyWeUs from "@/components/home/WhyWeUs";
import "swiper/css";
import "swiper/css/navigation";
export default function Index() {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    const lenis = new Lenis();
    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);
      usePageTitle("Best Digital Marketing Agency");
    
    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      lenis.destroy();
    };
  }, []);

  return (
    <div className="home-page-main">
      {/* <main> */}
      <Banner />
      <About />
      <Marquee speed={15}>
        <div className="flex items-center gap-8 px-4">
          <span className="text-black text-2xl font-semibold whitespace-nowrap">
            Your ecommerce Success Starts Here
          </span>
          <span className="text-black">
            <i className="ri-asterisk"></i>
          </span>
          <span className="text-black text-2xl font-semibold whitespace-nowrap">
            Reach Out for a Custom Strategy
          </span>
          <span className="text-black">
            <i className="ri-asterisk"></i>
          </span>
        </div>
      </Marquee>
      <Work />

      <Exquisites />
      <WhyWeUs />
      <Sliders />
      <Testimonials />
      <Blogs />
      {/* </main> */}
    </div>
  );
}
