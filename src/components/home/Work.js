import React from "react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import luxeliv from "../../../public/work/luxeliv_website_2.webp";
import prozvofit from "../../../public/work/prozvofit_resized.png";
import omp from "../../../public/work/omp_website.webp";
import silvago from "../../../public/work/silvago_website copy.webp";

const projects = [
  {
    title: "Silvago",
    slug: "silvago",
    description:
      "Premium silver jewelry D2C brand. Custom Shopify store with 200+ SKUs &  mobile-optimized checkout.",
    image: silvago,
  },
  {
    title: "Luxeliv",
    slug: "luxeliv",
    description:
      "Luxury lifestyle brand. High-converting editorial-style product page.",
    image: luxeliv,
  },
  {
    title: "Prozvofit",
    slug: "prozvofit",
    description:
      "B2B fitness equipment platform built on Laravel with integrated CRM.",
    image: prozvofit,
  },
  {
    title: "Oh My Pet Grooming",
    slug: "oh-my-pet-grooming",
    description:
      "Pet grooming brand. Built booking system, local SEO, and Google Ads pages.",
    image: omp,
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
                Websites, Shopify stores, and web apps we&apos;ve shipped for
                real brands — with results to show for it.
              </h4>
              {/* <Link href="/quote" className="add-your-project">
                Add Your Project <i className="ri-arrow-right-up-line"></i>
              </Link> */}
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
                    <Link
                      href={`/case-studies/${project.slug}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <h4
                        className="work-project-heading"
                        style={{ textAlign: "center" }}
                      >
                        {project.title}
                      </h4>
                      <div className="inner-div">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          priority
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <p
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "12px",
                          color: "#555",
                          lineHeight: "1.6",
                          marginTop: "0.6rem",
                          padding: "0 4px",
                          textAlign: "center",
                          lineHeight: "20px",
                        }}
                      >
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
