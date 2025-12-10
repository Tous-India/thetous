import React from "react";
import "./style.css";
import Image from "next/image";
import Link from "next/link";
import svaa from "../../../public/home/clients/1729835040.webp";
import vedica from "../../../public/home/clients/1729835073.webp";
import shoolin from "../../../public/home/clients/1734673478.png";
import vardhman from "../../../public/home/clients/1734673342.png";
import jyotish from "../../../public/home/clients/1734673248.png";
import autoboss from "../../../public/home/clients/1729835027.webp";

// last sec image
import petcenter from "../../../public/services/brand/1742808682.webp";
import dhison from "../../../public/services/brand/1742808668.webp";
import madhu from "../../../public/services/brand/1742808302.png";

const TechSolution = () => {
  return (
    <div className="about-page-main">
      <div className="container-fluid bs-container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12 d-flex justif -content-centent align-items-center flex-column brand-strategy-div">
            <h1 className="w-100">Tech Solution.</h1>
            <p className="w-100">
              Our strategists, designers, video editors and animators provide
              you with holistic solutions to grow your digital presence and
              achieve your business goals through both day-to-day content and
              integrated flagship campaigns.
            </p>
          </div>

          <div className="col-md-6 col-lg-6 col-sm-12 bs-container-clients">
            <h4 className="text-center">Proud to work with</h4>

            <div className="row client-row-1">
              <div className="col-lg-4   col-md-4  col-sm-4 boxes-1">
                <div className="client-img-div">
                  <Image
                    src={autoboss}
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
                    src={vardhman}
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
                    src={jyotish}
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
                    src={svaa}
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
                    src={vedica}
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
                    src={shoolin}
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
      <div className="container-fluid bs-container2">
        <div className="row bs-row1">
          <div className="col-lg-4 col-md-12 col-sm-12 bs-box px-4 py-2">
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
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M19.5 7A9 9 0 0 0 12 3a8.99 8.99 0 0 0-7.484 4"></path>
                        <path d="M11.5 3a17 17 0 0 0-1.826 4M12.5 3a17 17 0 0 1 1.828 4M19.5 17a9 9 0 0 1-7.5 4a8.99 8.99 0 0 1-7.484-4"></path>
                        <path d="M11.5 21a17 17 0 0 1-1.826-4m2.826 4a17 17 0 0 0 1.828-4M2 10l1 4l1.5-4L6 14l1-4m10 0l1 4l1.5-4l1.5 4l1-4M9.5 10l1 4l1.5-4l1.5 4l1-4"></path>
                      </g>
                    </svg>
                    Web Developement
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    We design and develop user-friendly e-commerce platforms
                    that make shopping easy and enjoyable for your customers.
                    Our solutions are built to enhance sales, streamline
                    processes, and provide a seamless online shopping
                    experience.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 bs-box px-4 py-2">
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
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="currentColor"
                        d="M9.5 7v3h-3V7zm0 7v-3h-3v3zm4-7v3h-3V7zm0 7v-3h-3v3zM7 4V2.5A1.5 1.5 0 0 1 8.5 1h3A1.5 1.5 0 0 1 13 2.5V4h4.5a.5.5 0 0 1 .5.5v10a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5v-10a.5.5 0 0 1 .5-.5zm1-1.5V4h4V2.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5m-5 12A1.5 1.5 0 0 0 4.5 16h11a1.5 1.5 0 0 0 1.5-1.5V5H3z"
                      ></path>
                    </svg>{" "}
                    E-Commerce
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    We design and develop user-friendly e-commerce platforms
                    that make shopping easy and enjoyable for your customers.
                    Our solutions are built to enhance sales, streamline
                    processes, and provide a seamless online shopping
                    experience.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 bs-box px-4 py-2">
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
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065"></path>
                        <path d="M10 9v6l5-3z"></path>
                      </g>
                    </svg>{" "}
                    Automation
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    We implement automated systems to streamline repetitive
                    tasks, improve efficiency, and reduce human error. Our
                    automation solutions save time and resources, allowing your
                    business to focus on growth and innovation.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row bs-row2">
          <div className="col-lg-4 col-md-12 col-sm-12 bs-box px-4 py-2">
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
                      width="24"
                      height="24"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="M187.3 159.06A36.09 36.09 0 0 1 152 188a84.09 84.09 0 0 1-84-84a36.09 36.09 0 0 1 28.94-35.3A12 12 0 0 1 110 75.1l11.48 23a12 12 0 0 1-.75 12l-8.52 12.78a44.56 44.56 0 0 0 20.91 20.91l12.78-8.52a12 12 0 0 1 12-.75l23 11.48a12 12 0 0 1 6.4 13.06M236 128a108 108 0 0 1-157.23 96.15L46.34 235A20 20 0 0 1 21 209.66l10.81-32.43A108 108 0 1 1 236 128m-24 0a84 84 0 1 0-156.73 42.06a12 12 0 0 1 1 9.81l-9.93 29.79l29.79-9.93a12.1 12.1 0 0 1 3.8-.62a12 12 0 0 1 6 1.62A84 84 0 0 0 212 128"
                      ></path>
                    </svg>{" "}
                    Whatsapp Marketing
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    We create targeted WhatsApp campaigns that deliver
                    personalized messages directly to your audience. Our
                    strategy helps you engage customers, promote products, and
                    drive conversions through an interactive and widely-used
                    platform.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 bs-box px-4 py-2">
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
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="currentColor"
                        d="M14.608 12.172c0 .84.239 1.175.864 1.175c1.393 0 2.28-1.775 2.28-4.727c0-4.512-3.288-6.672-7.393-6.672c-4.223 0-8.064 2.832-8.064 8.184c0 5.112 3.36 7.896 8.52 7.896c1.752 0 2.928-.192 4.727-.792l.386 1.607c-1.776.577-3.674.744-5.137.744c-6.768 0-10.393-3.72-10.393-9.456c0-5.784 4.201-9.72 9.985-9.72c6.024 0 9.215 3.6 9.215 8.016c0 3.744-1.175 6.6-4.871 6.6c-1.681 0-2.784-.672-2.928-2.161c-.432 1.656-1.584 2.161-3.145 2.161c-2.088 0-3.84-1.609-3.84-4.848c0-3.264 1.537-5.28 4.297-5.28c1.464 0 2.376.576 2.782 1.488l.697-1.272h2.016v7.057zm-2.951-3.168c0-1.319-.985-1.872-1.801-1.872c-.888 0-1.871.719-1.871 2.832c0 1.68.744 2.616 1.871 2.616c.792 0 1.801-.504 1.801-1.896z"
                      ></path>
                    </svg>
                    Email Marketing
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFive"
                  className="accordion-collapse collapse "
                >
                  <div className="accordion-body">
                    We craft personalized email campaigns that engage your
                    audience and drive conversions. Our strategy focuses on
                    creating compelling content and optimizing delivery to
                    ensure maximum open rates and click-throughs, boosting your
                    brand’s reach.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 bs-box px-4 py-2">
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
                        d="M18.5 10.255q0 .067-.003.133A1.54 1.54 0 0 0 17.473 10q-.243 0-.473.074V5.75a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.75.75v4.505c0 .414.336.75.75.75h8.276l-.01.025l-.003.012l-.45 1.384l-.01.026l-.019.053H7.75a2.25 2.25 0 0 1-2.25-2.25V5.75A2.25 2.25 0 0 1 7.75 3.5h3.5v-.75a.75.75 0 0 1 .649-.743L12 2a.75.75 0 0 1 .743.649l.007.101l-.001.75h3.5a2.25 2.25 0 0 1 2.25 2.25zm-5.457 3.781l.112-.036H6.254a2.25 2.25 0 0 0-2.25 2.25v.907a3.75 3.75 0 0 0 1.305 2.844c1.563 1.343 3.802 2 6.691 2c2.076 0 3.817-.339 5.213-1.028a1.55 1.55 0 0 1-1.169-1.003l-.004-.012l-.03-.093c-1.086.422-2.42.636-4.01.636c-2.559 0-4.455-.556-5.713-1.638a2.25 2.25 0 0 1-.783-1.706v-.907a.75.75 0 0 1 .75-.75H12v-.003a1.54 1.54 0 0 1 1.031-1.456zM10.999 7.75a1.25 1.25 0 1 0-2.499 0a1.25 1.25 0 0 0 2.499 0m3.243-1.25a1.25 1.25 0 1 1 0 2.499a1.25 1.25 0 0 1 0-2.499m1.847 10.912a2.83 2.83 0 0 0-1.348-.955l-1.377-.448a.544.544 0 0 1 0-1.025l1.377-.448a2.84 2.84 0 0 0 1.76-1.762l.01-.034l.449-1.377a.544.544 0 0 1 1.026 0l.448 1.377a2.84 2.84 0 0 0 1.798 1.796l1.378.448l.027.007a.544.544 0 0 1 0 1.025l-1.378.448a2.84 2.84 0 0 0-1.798 1.796l-.447 1.377a.55.55 0 0 1-.2.263a.544.544 0 0 1-.827-.263l-.448-1.377a2.8 2.8 0 0 0-.45-.848m7.694 3.801l-.765-.248a1.58 1.58 0 0 1-.999-.998l-.249-.765a.302.302 0 0 0-.57 0l-.249.764a1.58 1.58 0 0 1-.983.999l-.766.248a.302.302 0 0 0 0 .57l.766.249a1.58 1.58 0 0 1 .999 1.002l.248.764a.303.303 0 0 0 .57 0l.25-.764a1.58 1.58 0 0 1 .998-.999l.766-.248a.302.302 0 0 0 0-.57z"
                      ></path>
                    </svg>{" "}
                    Chatbot
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseSix"
                  className="accordion-collapse collapse "
                >
                  <div className="accordion-body">
                    We design smart chatbots that offer 24/7 customer support,
                    answering queries and guiding users in real-time. They
                    enhance user experience by providing instant, personalized
                    responses and streamlining communication. With automated
                    assistance, your business can engage customers efficiently
                    and boost satisfaction.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bs-container3 mt-5 pt-5 portfolioDiv last-section-of-every-page">
        {/* <!-- Row 1 --> */}
        <div className="row bs-2-row-1 my-3">
          <div className="col-lg-4 col-md-4 col-sm-12 my-3">
            <Link href="/" className="bs-img-div">
              <Image
                src={madhu}
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
            <Link href={"/"}>
              <h3 className="pt-2">Madhu Cookware </h3>
            </Link>
            <h5>
              Shree Enterprises is a family-owned, Indian manufacturer of
              kitchenware. From it...
            </h5>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 my-3">
            <Link href="/" className="bs-img-div">
              <Image
                src={dhison}
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
            <Link href={"/"}>
              <h3 className="pt-2">Dhirsons Jewellery House </h3>
            </Link>
            <h5>
              The Premium Diamond Jewellery Wholesale store in Karol Bagh, Delhi
              &amp; Retail Stor...
            </h5>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 my-3">
            <Link href={"/"}>
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
            <Link href={"/"}>
              <h3 className="pt-2">The Pet Center </h3>
            </Link>
            <h5>
              Pet grooming services at home. Wash, dry and brush your fuzzy
              friend in the comf...
            </h5>
          </div>

          <Link href="/works" className="servicesArrowButton">
            <i className="fa-solid fa-chevron-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TechSolution;
