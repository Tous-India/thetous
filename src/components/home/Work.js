import React from "react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Images

import Img1 from "../../../public/home/work/1742640759.webp";
import Img2 from "../../../public/home/work/1742808682.webp";
import Img3 from "../../../public/home/work/1742808668.webp";
import Img4 from "../../../public/home/work/1731492385.webp";
import Img5 from "../../../public/home/work/1731492367.webp";
import Img6 from "../../../public/home/work/1726133585.webp";
import Img7 from "../../../public/home/work/1731492317.webp";
import Img8 from "../../../public/home/work/1731492299.webp";
import Img9 from "../../../public/home/work/1742640759.webp";
import Img10 from "../../../public/home/work/1742642817.webp";
import Img11 from "../../../public/home/work/1742644830.webp";
import Img12 from "../../../public/home/work/1742807329.webp";

// Project data with case study links
const projects = [
  // { title: "Geetika Vidya Ohlyan", image: Img1, link: "/" },
  // { title: "The Pet Center", image: Img2, link: "/" },
  { title: "Dhirsons Jewellery House", image: Img3, link: "/case-studies/dhirsons-jewellery-house" },
  { title: "Luxeliv", image: Img4, link: "/case-studies/luxeliv" },
  { title: "Silvago", image: Img5, link: "/case-studies/silvago" },
  { title: "Prozvofit", image: Img6, link: "/case-studies/prozvofit" },
  { title: "Crossroads Hospital", image: Img7, link: "/case-studies/crossroads-hospital" },
  { title: "Drym Foods", image: Img8, link: "/" },
  // { title: "Geetika Vidya Ohlyan", image: Img9, link: "/" },
  // { title: "13 YELLOW AIRPORT CABS", image: Img10, link: "/" },
  { title: "Executive Cars", image: Img11, link: "/case-studies/executive-cars" },
  { title: "Oh My Pet Grooming", image: Img12, link: "/case-studies/oh-my-pet-grooming" },
];

const Work = () => {
  return (
    <div
      className="work-home-section"
      data-aos="fade-up"
      // data-aos-anchor-placement="bottom-bottom"
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
                The Tous work by combining creativity, data-driven insights, and
                effective strategies, we create digital solutions that engage,
                convert, and elevate your brand’s presence online.
              </h4>
              <Link href={"/"} className="add-your-project">
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
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                navigation={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1.25,
                    spaceBetween: 10,
                  },
                  720: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 3.25,
                    spaceBetween: 10,
                  },
                }}
                modules={[Autoplay]}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <h4>{project.title}</h4>
                    <div className="inner-div">
                      <Link href={project.link}>
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={"100%"}
                          height={"100%"}
                          priority
                        />
                      </Link>
                    </div>
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
