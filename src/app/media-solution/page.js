import React from "react";
import "./style.css";
import Image from "next/image";
import Link from "next/link";
import biodreama from "../../../public/client/biodreama.png";
import cozzet from "../../../public/client/cozzet.png";
import fnp from "../../../public/client/fnp.png";
import luxeliv from "../../../public/client/luxeliv.png";
import naarya from "../../../public/client/naarya.png";
import ohmypet from "../../../public/client/ohmypet.png";

// last sec image
import petcenter from "../../../public/services/brand/1742808682.webp";
import ohmypety from "../../../public/services/brand/1742807329.webp";
import executive from "../../../public/services/brand/1742644830.webp";

const MediaSolution = () => {
  return (
    <div className="media-page-main">
      <div className="container bs-container mt-5">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12 d-flex justif-content-start align-items-start flex-column brand-strategy-div">
            <h1 className="w-100">Media Solution</h1>
            <p className="w-100">
              <strong>
                Our creative team of designers, video editors, photographers, and
                content strategists craft compelling visual stories that capture
                attention, engage audiences, and elevate your brand across all
                digital and print platforms.
              </strong>
            </p>
            <p className="mt-4">
              <span>Does This Sound Like Your Brand?</span>
            </p>
            <ul>
              <li>Our content doesn’t grab attention</li>
              <li>Posts look average compared to competitors</li>
              <li>We don’t have quality visuals for marketing</li>
              <li>Our videos don’t look professional</li>
              <li>We struggle to maintain content consistency</li>
              <li>We don’t know what type of content works</li>
              <li>Product images don’t reflect real quality</li>
              <li>We lack creative ideas for regular posting</li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12 bs-container-clients">
            {/* <h4 className="text-center">Proud to work with</h4> */}

            <div className="row client-row-1">
              <div className="col-lg-4   col-md-4  col-sm-4 boxes-1">
                <div className="client-img-div">
                  <Image
                    src={biodreama}
                    className="w-50"
                    alt=""
                    width={400}
                    height={400}
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 boxes-1">
                <div className="client-img-div">
                  <Image
                    src={cozzet}
                    className="w-50"
                    alt=""
                    width={400}
                    height={400}
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 boxes-1">
                <div className="client-img-div">
                  <Image
                    src={fnp}
                    className="w-50"
                    alt=""
                    width={400}
                    height={400}
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 boxes-1">
                <div className="client-img-div">
                  <Image
                    src={luxeliv}
                    className="w-50"
                    alt=""
                    width={400}
                    height={400}
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 boxes-1">
                <div className="client-img-div">
                  <Image
                    src={naarya}
                    className="w-50"
                    alt=""
                    width={400}
                    height={400}
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 boxes-1">
                <div className="client-img-div">
                  <Image
                    src={ohmypet}
                    className="w-50"
                    alt=""
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container bs-container2 px-0  ">
        <div className="row bs-row1">
          <div className="col-lg-4 col-md-12 col-sm-12 bs-box px-0 py-2">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0"
                      ></path>
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m2.212-6.712a.983.983 0 0 1 0 1.39l-.058.058a.24.24 0 0 1-.211.067a1.6 1.6 0 0 1-.81-.436a1.6 1.6 0 0 1-.436-.81a.24.24 0 0 1 .067-.211l.058-.058a.983.983 0 0 1 1.39 0M17.35 8.04a3 3 0 0 1-.296.279a1.6 1.6 0 0 1-.303.187c-.09.043-.188.076-.381.14l-1.021.34a.265.265 0 0 1-.335-.335l.34-1.02c.064-.194.097-.291.14-.382q.077-.163.187-.303c.062-.08.134-.152.279-.296l1.799-1.799c.043-.043.118-.023.138.035a1.98 1.98 0 0 0 1.217 1.217c.058.02.078.095.035.138z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    AI Graphic Designing
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    We create visually stunning and impactful designs that
                    communicate your brand’s message effectively. From logos and
                    brochures to social media posts and web visuals, our designs
                    are tailored to engage your audience. Every piece is crafted
                    to ensure brand consistency and leave a lasting impression.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 bs-box px-2 py-2">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="4"
                      >
                        <path d="M4 10a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path>
                        <path
                          strokeLinecap="round"
                          d="M36 8v32M12 8v32m26-22h6m-6 12h6M4 18h6m-6-2v4M9 8h6M9 40h6M33 8h6m-6 32h6M4 30h6m-6-2v4m40-4v4m0-16v4"
                        ></path>
                        <path d="m21 19l8 5l-8 5z"></path>
                      </g>
                    </svg>
                   AI Video Editing
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    We create polished and dynamic videos with seamless cuts,
                    effects, and transitions to enhance your brand’s
                    storytelling. Our editing brings your vision to life,
                    ensuring each video captures attention and engages your
                    audience effectively.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 bs-box px-0 py-2">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="512"
                      height="512"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M384 362.7H128V384h256zM106.7 21.3h192V128h106.7v42.7h21.3v-64L320 0H85.3v170.7h21.3V21.3zM448 192H64c-42.7 0-64 21.3-64 64v128h85.3v128h341.3V384H512V256c0-42.7-21.3-64-64-64M85.3 277.3H42.7v-42.7h42.7v42.7zm320 213.4H106.7V341.3h298.7v149.4zM384 405.3H128v21.3h256zm0 42.7H128v21.3h256z"
                      ></path>
                    </svg>
                    Print Media
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    We design professional, eye-catching materials like
                    brochures, flyers, and posters that effectively communicate
                    your brand’s message. Our print designs ensure high impact
                    and leave a lasting impression on your audience.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row bs-row2">
          <div className="col-lg-4 col-md-12 col-sm-12 bs-box px-0 py-2">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                    >
                      <path
                        fill="currentColor"
                        d="M47.617 21.402c1.242 0 1.899-.68 1.899-1.922v-5.742c0-4.828-2.438-7.242-7.36-7.242h-5.719c-1.242 0-1.921.68-1.921 1.875c0 1.219.68 1.899 1.921 1.899h5.672c2.297 0 3.633 1.242 3.633 3.68v5.53c0 1.243.68 1.922 1.875 1.922m-39.234 0c1.219 0 1.875-.68 1.875-1.922v-5.53c0-2.438 1.312-3.68 3.656-3.68h5.672c1.219 0 1.898-.68 1.898-1.899c0-1.195-.68-1.875-1.898-1.875h-5.742c-4.875 0-7.36 2.414-7.36 7.242v5.743c0 1.242.68 1.921 1.899 1.921m9.445 15.985h19.828c1.547 0 2.672-1.078 2.672-2.578V22.902c0-1.5-1.125-2.578-2.672-2.578h-3.562c-.586 0-.891-.164-1.383-.75l-.492-.61c-.54-.679-1.196-.983-1.992-.983h-4.922c-.844 0-1.5.304-2.04.984l-.492.61c-.492.585-.773.75-1.312.75h-3.633c-1.547 0-2.625 1.077-2.625 2.577V34.81c0 1.5 1.078 2.578 2.625 2.578m9.938-3.446c-3.118 0-5.649-2.554-5.649-5.671c0-3.165 2.531-5.696 5.648-5.696c3.165 0 5.672 2.531 5.672 5.696a5.66 5.66 0 0 1-5.671 5.671m0-1.664a4.01 4.01 0 0 0 4.03-4.007a4.02 4.02 0 0 0-4.03-4.055c-2.227 0-4.008 1.781-4.008 4.055a3.99 3.99 0 0 0 4.008 4.007M13.843 49.504h5.742c1.219 0 1.898-.68 1.898-1.875c0-1.219-.68-1.898-1.898-1.898h-5.672c-2.344 0-3.656-1.243-3.656-3.68V36.52c0-1.243-.68-1.922-1.875-1.922c-1.242 0-1.899.68-1.899 1.922v5.718c0 4.852 2.485 7.266 7.36 7.266m22.593 0h5.72c4.921 0 7.359-2.438 7.359-7.266V36.52c0-1.243-.68-1.922-1.899-1.922s-1.875.68-1.875 1.922v5.53c0 2.438-1.336 3.68-3.633 3.68h-5.672c-1.242 0-1.921.68-1.921 1.899c0 1.195.68 1.875 1.921 1.875"
                      ></path>
                    </svg>
                    Product Shoot
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    We capture high-quality images that highlight your product&apos;s
                    best features and details. Our shoots are designed to
                    showcase your brand&apos;s uniqueness and attract more customers.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 bs-box px-2 py-2">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFive"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFive"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M18 10.48V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.48l4 3.98v-11zm-2-.79V18H4V6h12z"
                      ></path>
                      <circle
                        cx="10"
                        cy="10"
                        r="2"
                        fill="currentColor"
                      ></circle>
                      <path
                        fill="currentColor"
                        d="M14 15.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 6 15.43V16h8z"
                      ></path>
                    </svg>
                    Model Shoot
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFive"
                  className="accordion-collapse collapse "
                >
                  <div className="accordion-body">
                    We organize professional model shoots that bring your
                    products or services to life through captivating visuals.
                    Our focus is on showcasing your brand with authentic and
                    engaging imagery that resonates with your target audience.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 bs-box px-0 py-2">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSix"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseSix"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m12 13.5l6-4l-6-4zm.7 5.5h5.6q-.175.65-.6 1.05t-1.1.5L5.7 21.875q-.825.125-1.488-.387T3.45 20.15L2.125 9.225q-.1-.825.4-1.475T3.85 7L5 6.85v2l-.9.125L5.45 19.9zM9 17q-.825 0-1.412-.587T7 15V4q0-.825.588-1.412T9 2h11q.825 0 1.413.588T22 4v11q0 .825-.587 1.413T20 17zm0-2h11V4H9zm-3.55 4.9"
                      ></path>
                    </svg>
                    Animation (Adding Soon)
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseSix"
                  className="accordion-collapse collapse "
                >
                  <div className="accordion-body">
                    We’ll soon offer dynamic animation services to bring your
                    ideas to life with engaging visuals and motion graphics.
                    From explainer videos to product animations, we’ll help you
                    tell your brand’s story in a creative and captivating way.
                    Stay tuned for exciting animations that will elevate your
                    brand!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="last-section-of-every-page">
        <div className="container bs-container3 mt-5 pt-5 portfolioDiv ">
          {/* <!-- Row 1 --> */}
          <div className="row bs-2-row-1 my-3">
            <div className="col-lg-4 col-md-4 col-sm-12 my-3">
              <Link href="/case-studies/executive-cars" className="bs-img-div">
                <Image
                  src={executive}
                  alt=""
                  className="rounded-4"
                  width={400}
                  height={400}
                />
              </Link>
              <div className="buttonBox mt-2">
                <button className="first">Website</button>
                <button className="first">SEO</button>
                <button className="first">Ads</button>
              </div>
              <Link href={"/case-studies/executive-cars"}>
                <h3 className="pt-2 services-card-heading">EXECUTIVE CARS</h3>
              </Link>
              <h5 className="services-card-para">
                Welcome to our first-class chauffeur car service in Melbourne,
                the best choice ...
              </h5>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 my-3">
              <Link href="/case-studies/oh-my-pet-grooming" className="bs-img-div">
                <Image
                  src={ohmypety}
                  alt=""
                  className="rounded-4"
                  width={400}
                  height={400}
                />
              </Link>
              <div className="buttonBox mt-2">
                <button className="first">Website</button>
                <button className="first">SEO</button>
              </div>
              <Link href={"/case-studies/oh-my-pet-grooming"}>
                <h3 className="pt-2 services-card-heading">Oh My Pet Grooming</h3>
              </Link>
              <h5 className="services-card-para">
                At Oh My Pet Grooming, we bring professional pet care services
                right to your doo...
              </h5>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 my-3">
              <Link href={"/case-studies/the-pet-center"}>
                <Image
                  src={petcenter}
                  alt=""
                  className="rounded-4"
                  width={400}
                  height={400}
                />
              </Link>
              <div className="buttonBox mt-2">
                <button className="first">Website</button>
                <button className="first">ADS</button>
                <button className="first">SEO</button>
              </div>
              <Link href={"/case-studies/the-pet-center"}>
                <h3 className="pt-2 services-card-heading">The Pet Center </h3>
              </Link>
              <h5 className="services-card-para">
                Pet grooming services at home. Wash, dry and brush your fuzzy
                friend in the comf...
              </h5>
            </div>

            <Link href="/work" className="servicesArrowButton">
              <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaSolution;
