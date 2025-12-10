import React from "react";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Top slider images
import motherMuskan from "../../../public/home/clients/1729244143.webp";
import hk from "../../../public/home/clients/1729244208.webp";
import corru from "../../../public/home/clients/1729244242.webp";
import dirson from "../../../public/home/clients/1729244173.webp";
import boxica from "../../../public/home/clients/1729244188.webp";
import thirstybull from "../../../public/home/clients/1729834525.webp";
import elise from "../../../public/home/clients/1729244306.webp";
// Bottom slider images
import ohmypet from "../../../public/home/clients/omp.jpg";
import prozvofit from "../../../public/home/clients/luxeliv.jpg";
import knockout from "../../../public/home/clients/t2a.jpg";
import svaa from "../../../public/home/clients/silvish.jpg";
import vedica from "../../../public/home/clients/sansafe.jpg";
import shoolin from "../../../public/home/clients/shoolin.jpg";
import vardhman from "../../../public/home/clients/fnp.jpg";
import jyotish from "../../../public/home/clients/bio.jpg";
import autoboss from "../../../public/home/clients/ewow.jpg";

const Sliders = () => {
  return (
    <div className="sliders-home-page" data-aos="fade-up"  
      data-aos-duration="2000">
      <section id="home-clients" className="homeClients">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <main>
              {/* Top Swiper */}
              <Swiper
                className="swiper-container swiper--top"
                speed={6000}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  //   pauseOnMouseEnter: true,
                }}
                loop={true}
                // slidesPerView={5}
                allowTouchMove={false}
                modules={[Autoplay]}
                effect="slide"
                breakpoints={{
                  0: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                  },
                  480: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                }}
              >
                <SwiperSlide>
                  <Image
                    src={motherMuskan}
                    width={400}
                    height={200}
                    alt="Client Image"
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={hk} width={400} height={200} alt="Client Image" priority />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={elise}
                    width={400}
                    height={200}
                    alt="Client Image"
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={boxica}
                    width={400}
                    height={200}
                    alt="Client Image"
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={dirson}
                    width={400}
                    height={200}
                    alt="Client Image"
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={thirstybull}
                    width={400}
                    height={200}
                    alt="Client Image"
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={corru}
                    width={400}
                    height={200}
                    alt="Client Image"
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={motherMuskan}
                    width={400}
                    height={200}
                    alt="Client Image"
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={motherMuskan}
                    width={400}
                    height={200}
                    alt="Client Image"
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={motherMuskan}
                    width={400}
                    height={200}
                    alt="Client Image"
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={motherMuskan}
                    width={400}
                    height={200}
                    alt="Client Image"
                    priority
                  />
                </SwiperSlide>
              </Swiper>

              {/* Bottom Swiper */}
              <Swiper
                className="swiper-container swiper--bottom"
                speed={6000}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  //   pauseOnMouseEnter: true,
                  reverseDirection: true,
                }}
                loop={true}
                // slidesPerView={5}
                allowTouchMove={false}
                modules={[Autoplay]}
                effect="slide"
                breakpoints={{
                  0: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                  },
                  480: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                }}
              >
                <SwiperSlide>
                  <Image
                    src={ohmypet}
                    width={400}
                    height={200}
                    alt="Client Image"
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={prozvofit}
                    width={400}
                    height={200}
                    alt="Client Image"
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={knockout}
                    width={400}
                    height={200}
                    alt="Client Image"
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={svaa}
                    width={400}
                    height={200}
                    alt="Client Image"
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={vedica}
                    width={400}
                    height={200}
                    alt="Client Image"
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={shoolin}
                    width={400}
                    height={200}
                    alt="Client Image"
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={vardhman}
                    width={400}
                    height={200}
                    alt="Client Image"
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={autoboss}
                    width={400}
                    height={200}
                    alt="Client Image"
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={jyotish}
                    width={400}
                    height={200}
                    alt="Client Image"
                    priority
                  />
                </SwiperSlide>
              </Swiper>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sliders;
