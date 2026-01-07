import React from "react";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Top slider images
import bioderma from "../../../public/home/clients/bio.jpg";
import luxeliv from "../../../public/home/clients/luxeliv.jpg";
import fnp from "../../../public/home/clients/fnp.jpg";
import prozvofit from "../../../public/home/clients/prozvofit.webp";
// Bottom slider images
import nestloom from "../../../public/home/clients/nest.webp";
import silvago from "../../../public/home/clients/silvago.webp";
import pearls from "../../../public/home/clients/pearls.webp";
import kb from "../../../public/home/clients/kb.webp";

// Configuration objects
const IMAGE_CONFIG = {
  width: 400,
  height: 200,
  alt: "Client Image",
  priority: true,
};

const SWIPER_CONFIG = {
  speed: 6000,
  loop: true,
  allowTouchMove: false,
  modules: [Autoplay],
  effect: "slide",
  breakpoints: {
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
  },
};

const AUTOPLAY_CONFIG = {
  delay: 0,
  disableOnInteraction: false,
};

// Slider data
const topSliderImages = [
  luxeliv,
  bioderma,
  fnp,
  prozvofit,
  luxeliv,
  bioderma,
  fnp,
  prozvofit,
];

const bottomSliderImages = [
  nestloom,
  silvago,
  pearls,
  kb,
  nestloom,
  silvago,
  pearls,
  kb,
];

const sliderConfigs = [
  {
    className: "swiper-container swiper--top",
    images: topSliderImages,
    autoplay: AUTOPLAY_CONFIG,
  },
  {
    className: "swiper-container swiper--bottom",
    images: bottomSliderImages,
    autoplay: {
      ...AUTOPLAY_CONFIG,
      reverseDirection: true,
    },
  },
];

const Sliders = () => {
  return (
    <div
      className="sliders-home-page"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <section id="home-clients" className="homeClients">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <main>
              {sliderConfigs.map((config, index) => (
                <Swiper
                  key={index}
                  className={config.className}
                  autoplay={config.autoplay}
                  {...SWIPER_CONFIG}
                >
                  {config.images.map((image, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <Image
                        src={image}
                        {...IMAGE_CONFIG}
                        alt=""
                        width={""}
                        height={""}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ))}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sliders;
