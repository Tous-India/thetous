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
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Marquee from "@/components/home/Marquee";
import WhyWeUs from "@/components/home/WhyWeUs";
import "swiper/css";
import "swiper/css/navigation";
export default function Index() {
  usePageTitle("Best Digital Marketing Agency");
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
      <Sliders />
      <Exquisites />
      <Work />
      <WhyWeUs />
      <About />
      <Marquee speed={15}>
        <div className="flex items-center gap-8 px-4">
          <h4 className="text-black text-2xl font-semibold whitespace-nowrap">
            Your ecommerce Success Starts Here
          </h4>
          <h4 className="text-black">
            <i className="ri-asterisk"></i>
          </h4>
          <h4 className="text-black text-2xl font-semibold whitespace-nowrap">
            Reach Out for a Custom Strategy
          </h4>
          <h4 className="text-black">
            <i className="ri-asterisk"></i>
          </h4>
        </div>
      </Marquee>
      

      
      <Testimonials />
      <FAQ />
      <CTA />
      <Blogs />
      {/* </main> */}
    </div>
  );
}
