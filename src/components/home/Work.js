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

const Work = () => {
  return (
    <div
      className="work-home-section"
      data-aos="fade-up"
      // data-aos-anchor-placement="bottom-bottom"
      data-aos-offset="300"
      data-aos-duration="2500"
    >
      <div className="container-fluid">
        <div id="word-heading" className="work-heading-home row-div">
          <h2>Work</h2>
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
          convert, and elevate your brand’s presence online. Luxeliv Project-1
          Website ADS SEO Google Slivish.
        </h4>
        <div className="row">
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
                <SwiperSlide>
                  <h4>Geetika Vidya Ohlyan</h4>
                  <div className="inner-div">
                    <Link href="/">
                      <Image
                        src={Img1}
                        alt="Profile Picture"
                        width={"100%"}
                        height={"100%"}
                        priority
                      />
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <h4>The Pet Center</h4>
                  <div className="inner-div">
                    <Link href="/">
                      <Image
                        src={Img2}
                        alt="Profile Picture"
                        width={"100%"}
                        height={"100%"}
                        priority
                      />
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <h4>Dhirsons Jewellery House </h4>
                  <div className="inner-div">
                    <Link href="/">
                      <Image
                        src={Img3}
                        alt="Profile Picture"
                        width={"100%"}
                        height={"100%"}
                        priority
                      />
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <h4>Luxeliv</h4>
                  <div className="inner-div">
                    <Link href="/">
                      <Image
                        src={Img4}
                        alt="Profile Picture"
                        width={"100%"}
                        height={"100%"}
                        priority
                      />
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <h4>Slivish</h4>
                  <div className="inner-div">
                    <Link href="/">
                      <Image
                        src={Img5}
                        alt="Profile Picture"
                        width={"100%"}
                        height={"100%"}
                        priority
                      />
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <h4>Prozvofit</h4>
                  <div className="inner-div">
                    <Link href="/">
                      <Image
                        src={Img6}
                        alt="Profile Picture"
                        width={"100%"}
                        priority
                        height={"100%"}
                      />
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <h4>Crossroad Hospital</h4>
                  <div className="inner-div">
                    <Link href="/">
                      <Image
                        src={Img7}
                        alt="Profile Picture"
                        width={"100%"}
                        height={"100%"}
                        priority
                      />
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <h4>Drym Foods</h4>
                  <div className="inner-div">
                    <Link href="/">
                      <Image
                        src={Img8}
                        alt="Profile Picture"
                        width={"100%"}
                        height={"100%"}
                        priority
                      />
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <h4>Geetika Vidya Ohlyan</h4>
                  <div className="inner-div">
                    <Link href="/">
                      <Image
                        src={Img9}
                        alt="Profile Picture"
                        width={"100%"}
                        height={"100%"}
                        priority
                      />
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <h4> 3 YELLOW AIRPORT CABS </h4>
                  <div className="inner-div">
                    <Link href="/">
                      <Image
                        src={Img10}
                        alt="Profile Picture"
                        width={"100%"}
                        height={"100%"}
                        priority
                      />
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <h4>EXECUTIVE CARS</h4>
                  <div className="inner-div">
                    <Link href="/">
                      <Image
                        src={Img11}
                        alt="Profile Picture"
                        width={"100%"}
                        height={"100%"}
                        priority
                      />
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <h4>Oh My Pet Grooming</h4>
                  <div className="inner-div">
                    <Link href="/">
                      <Image
                        src={Img12}
                        alt="Profile Picture"
                        width={"100%"}
                        height={"100%"}
                        priority
                      />
                    </Link>
                  </div>
                </SwiperSlide>
                {/* <SwiperSlide className="last-slide-of-all">
                  <h4>Geetika Vidya</h4>
                  <div className="inner-div">
                    <Link href="/">View All</Link>
                  </div>
                </SwiperSlide> */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
