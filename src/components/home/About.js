import React from "react";
import dummy from "../../../public/Aboout us sq.webp";
import Image from "next/image";

// Data configuration object
const ABOUT_DATA = {
  heading: {
    title: "About Us",
    description:
      "At The Tous, we craft innovative digital strategies that drive growth, engagement, and success. With a passion for creativity and focus on results, we help E-Commerce brands grow in the digital world.",
  },
  leftSection: {
    card1: {
      title: "57+ E-Commerce Websites Delivered",
      iconUrl:
        "https://cdn.prod.website-files.com/66eab063c614790046e87eef/68dd737c5c8c9b1c39ed366b_Stat%20Icon.svg",
      description:
        "Since 2018, we’ve been creating conversion-focused E-Commerce websites that help brands scale digitally.",
      aos: {
        animation: "fade-right",
        offset: "200",
        easing: "ease-in-sine",
      },
    },
    card2: {
      title: "15+",
      subtitle: "Team Members",
      description:
        "Our team of 15 digital experts works seamlessly from strategy to execution to help your brand stand out online.",
      aos: {
        animation: "fade-right",
        offset: "100",
        easing: "ease-in-sine",
      },
    },
  },
  middleSection: {
    title: "Our Focus",
    subtitle: "E-Commerce Brands",
    description:
      "Data-driven ads and social strategies that help E-Commerce brands grow and maximize ROI.",
    aos: {
      animation: "flip-up",
      duration: "1000",
    },
  },
  rightSection: {
    image: {
      src: dummy,
      alt: "about-image",
      width: 400,
      height: 400,
    },
    card: {
      title: "Active Since 2018",
      description:
        "With 5+ years of expertise, The Tous delivers future-ready digital marketing and E-Commerce solutions that keep brands ahead.",
    },
    aos: {
      animation: "fade-left",
      offset: "100",
      easing: "ease-in-sine",
    },
  },
};

const About = () => {
  const { heading, leftSection, middleSection, rightSection } = ABOUT_DATA;

  return (
    <div className="homepage-about-section" id="about-section-homepage">
      <div className="container">
        <div id="word-heading" className="work-heading-home">
          <div>
            <h2 className="main-section-heading">{heading.title}</h2>
          </div>
          <h4>{heading.description}</h4>
        </div>

        <div className="row justify-content-center">
          {/* Left Section */}
          <div className="col-lg-4 col-sm-12 left">
            <div
              className="inner-div-1"
              data-aos={leftSection.card1.aos.animation}
              data-aos-offset={leftSection.card1.aos.offset}
              data-aos-easing={leftSection.card1.aos.easing}
            >
              <h4>
                {leftSection.card1.title}
                <Image
                  src={leftSection.card1.iconUrl}
                  width={100}
                  height={100}
                  alt=""
                  priority
                />
              </h4>
              <p>{leftSection.card1.description}</p>
            </div>
            <div
              className="inner-div-2"
              data-aos={leftSection.card2.aos.animation}
              data-aos-offset={leftSection.card2.aos.offset}
              data-aos-easing={leftSection.card2.aos.easing}
            >
              <h4>{leftSection.card2.title}</h4>
              <span>{leftSection.card2.subtitle}</span>
              <p>{leftSection.card2.description}</p>
            </div>
          </div>

          {/* Middle Section */}
          <div
            className="col-lg-4 col-sm-12 mid"
            data-aos={middleSection.aos.animation}
            data-aos-duration={middleSection.aos.duration}
          >
            <div className="inner-div">
              <div className="first-div">
                <h5 className="inner-heading mb-3">
                  <span>{middleSection.title}</span>
                </h5>
                <p>{middleSection.subtitle}</p>
              </div>
              <div className="second-div">
                <p>{middleSection.description}</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-4 col-sm-12 right">
            <div
              className="inner-div-1"
              data-aos={rightSection.aos.animation}
              data-aos-offset={rightSection.aos.offset}
              data-aos-easing={rightSection.aos.easing}
            >
              <Image
                src={rightSection.image.src}
                alt={rightSection.image.alt}
                width={rightSection.image.width}
                height={rightSection.image.height}
                priority
              />
            </div>
            <div
              className="inner-div-2"
              data-aos={rightSection.aos.animation}
              data-aos-offset={rightSection.aos.offset}
              data-aos-easing={rightSection.aos.easing}
            >
              <div>
                <p>
                  <span className="span1">{rightSection.card.title}</span>
                </p>
                <p>{rightSection.card.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
