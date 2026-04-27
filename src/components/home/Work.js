import React from "react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Img3 from "../../../public/home/work/1742808668.webp";
import Img4 from "../../../public/home/work/1731492385.webp";
import Img6 from "../../../public/home/work/1726133585.webp";
import Img11 from "../../../public/home/work/1742644830.webp";
import Img12 from "../../../public/home/work/1742807329.webp";
import Img13 from "../../../public/home/work/silvago.png";

const projects = [
  {
    title: "Silvago",
    slug: "silvago",
    description: "Premium silver jewelry D2C brand. Built custom Shopify store with 200+ SKUs and mobile-optimized checkout.",
    image: Img13,
  },
  {
    title: "Dhirsons Jewellery House",
    slug: "dhirsons-jewellery-house",
    description: "Legacy jewellery brand moving online. Full e-commerce build with product configurator and WhatsApp checkout integration.",
    image: Img3,
  },
  {
    title: "Luxeliv",
    slug: "luxeliv",
    description: "Luxury lifestyle brand. Designed and developed a high-converting product landing page with editorial-style layout.",
    image: Img4,
  },
  {
    title: "Prozvofit",
    slug: "prozvofit",
    description: "D2C fitness supplement brand. Built Shopify store with subscription model, upsell flows, and performance tracking.",
    image: Img6,
  },
  {
    title: "Executive Cars",
    slug: "executive-cars",
    description: "Premium car rental service. Built a booking-focused website with real-time availability and CRM integration.",
    image: Img11,
  },
  {
    title: "Oh My Pet Grooming",
    slug: "oh-my-pet-grooming",
    description: "Pet grooming service brand. Built appointment booking system, local SEO setup, and Google Ads landing pages.",
    image: Img12,
  },
];

const Work = () => {
  return (
    <div
      className="work-home-section"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-duration="2000"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div id="word-heading" className="work-heading-home">
              <div>
                <h2 className="main-section-heading">Work</h2>
                <Link href="/work">
                  <button>
                    <span className="btn-span-1">View All</span>
                    <span className="btn-span-2">
                      <i className="ri-arrow-right-up-long-line"></i>
                    </span>
                  </button>
                </Link>
              </div>
              <h4>
                Websites, Shopify stores, and web apps we&apos;ve shipped for real brands — with results to show for it.
              </h4>
              <Link href="/quote" className="add-your-project">
                Add Your Project <i className="ri-arrow-right-up-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-12">
            <div className="swiper-main-div">
              <Swiper
                className="mySwiper"
                speed={1500}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                freeMode={true}
                pagination={{ clickable: true }}
                loop={true}
                navigation={true}
                breakpoints={{
                  0: { slidesPerView: 1.25, spaceBetween: 10 },
                  720: { slidesPerView: 2, spaceBetween: 10 },
                  1024: { slidesPerView: 3.25, spaceBetween: 10 },
                }}
                modules={[Autoplay]}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <Link href={`/work/${project.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                      <h4 style={{ textAlign: "center" }}>{project.title}</h4>
                      <div className="inner-div">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={400}
                          priority
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                      <p style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "12px",
                        color: "#555",
                        lineHeight: "1.6",
                        marginTop: "0.6rem",
                        padding: "0 4px",
                        textAlign: "center",
                      }}>
                        {project.description}
                      </p>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
