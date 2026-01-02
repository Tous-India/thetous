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
import dhison from "../../../public/services/brand/1742808668.webp";
import madhu from "../../../public/services/brand/1742808302.png";

const BrandSolution = () => {
  return (
    <div>
      <div className="brand-page-main">
        <div className="container bs-container mt-4 ">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12 d-flex justif-content-start align-items-start flex-column brand-strategy-div">
              <h1 className="w-100">Brand Solution</h1>
              <p className="">
                <strong>
                  Our marketing strategists and performance specialists craft
                  data-driven campaigns that amplify your brand visibility,
                  convert visitors into customers, and deliver sustainable
                  growth through strategic advertising and search optimization.
                </strong>
              </p>
              <p className="mt-4">
                <span>Does This Sound Like Your Brand?</span>
              </p>
              <ul>
                <li>People visit our page but don’t contact us</li>
                <li>Our brand doesn’t look as premium as our work</li>
                <li>We are posting regularly but nothing is growing</li>
                <li>Our ads bring views, not real customers</li>
                <li>We don’t know what to post or say about our brand</li>
                <li>Our competitors look more professional than us</li>
                <li>We are doing marketing, but results are unclear</li>
                <li>We want growth, but don’t know what’s missing</li>
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
        <div className="container bs-container2 px-0">
          <div className="row bs-row1">
            <div className="col-lg-4 col-md-12 col-sm-12 bs-box py-2 px-0">
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
                        width="128"
                        height="128"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="currentColor"
                          d="M112.709.008a13.35 13.35 0 0 0-9.396 3.433c-4.613 4.16-5.611 10.839-2.715 15.94l-7.776 7.002a32.4 32.4 0 0 0-18.312-6.574a33 33 0 0 0-12.766 2.033C45.761 27.748 36.87 44.689 41.047 60.588l-9.69 3.584c-2.254-3.508-6.105-5.663-10.254-5.83a13.2 13.2 0 0 0-3.302.34l-1.979-5.58c3.314-2.07 4.918-6.184 3.586-9.944l.002-.002c-1.151-3.246-4.174-5.293-7.463-5.437a8.6 8.6 0 0 0-3.318.515c-4.386 1.604-6.742 6.412-5.207 10.743c1.33 3.753 5.161 5.898 9.013 5.359l1.965 5.543c-5.7 2.998-8.565 9.74-6.373 15.855c2.39 6.664 9.893 10.022 16.641 7.528c5.843-2.16 9.321-8.016 8.6-13.873l9.66-3.569c6.355 13.711 21.803 20.877 36.687 17.283l3.998 11.155a18.6 18.6 0 0 0-8.922 10.601L69.414 104a8.206 8.206 0 0 0-6.896-7.797c-4.576-.747-8.992 2.32-9.864 6.861c-.871 4.54 2.185 8.885 6.762 9.631c3.973.649 7.82-1.578 9.336-5.15l5.166.842c-.304 2.62-.05 5.331.892 7.96c3.334 9.304 13.808 13.984 23.231 10.503c9.421-3.481 14.453-13.842 11.117-23.147a17.3 17.3 0 0 0-5.021-7.295l10.59-18.412l-.05-.027c3.783.788 7.795-1.098 9.536-4.725c2.034-4.158.212-9.228-4.002-11.078h-.004a8.4 8.4 0 0 0-3.25-.732h-.002c-2.648-.059-5.227 1.14-6.924 3.244l-6.678-3.207c2.243-6.597 2.403-13.899-.097-20.875A30.9 30.9 0 0 0 96.95 30.14l7.393-6.659c4.856 3.372 11.67 3.015 16.299-1.162c5.34-4.816 5.85-13.017 1.056-18.226c-2.398-2.605-5.661-3.972-8.99-4.086zm-.135 3.455c2.442.08 4.823 1.086 6.569 2.982c3.49 3.793 3.156 9.705-.827 13.297c-3.981 3.593-10.012 3.37-13.504-.422c-3.49-3.793-3.158-9.705.827-13.299a9.86 9.86 0 0 1 6.935-2.556zm-.183 2.926c-.853-.033-1.73.1-2.586.416c-3.428 1.266-5.232 5.008-4.033 8.357c1.2 3.35 4.952 5.039 8.38 3.772v-.002c3.427-1.267 5.233-5.007 4.032-8.354c-.901-2.513-3.237-4.092-5.793-4.19zM74.26 26.553c10.023.362 19.098 6.525 22.612 16.332c4.687 13.076-2.338 27.727-15.857 32.722v.002h-.002c-13.522 4.995-28.092-1.607-32.778-14.681c-4.685-13.075 2.34-27.726 15.86-32.723a26.5 26.5 0 0 1 10.166-1.652zm-1.66 6.506a19.3 19.3 0 0 0-6.506 1.207c-9.84 3.636-15.023 14.377-11.576 23.992c3.445 9.615 14.217 14.461 24.054 10.826c9.841-3.634 15.024-14.378 11.578-23.992c-2.69-7.512-9.853-12.113-17.55-12.033m-60.743 6.9c2.415.093 4.59 1.584 5.428 3.947l-.002.002c1.118 3.152-.583 6.676-3.853 7.871c-3.272 1.198-6.768-.402-7.885-3.554c-1.118-3.153.585-6.677 3.857-7.873h.002a6.4 6.4 0 0 1 2.453-.393m9.12 21.836c3.723.131 7.08 2.42 8.384 6.057c1.739 4.849-.864 10.29-5.898 12.15s-10.428-.59-12.166-5.44c-1.74-4.849.865-10.29 5.898-12.15a9.9 9.9 0 0 1 3.782-.617m95.92 1.89h.001a6.2 6.2 0 0 1 2.393.538l.008.002c3.054 1.335 4.38 4.991 2.89 8.03l-.003.01c-1.487 3.1-5.214 4.481-8.307 3.098l-.008-.004c-3.054-1.335-4.38-4.993-2.89-8.033l.003-.008c1.116-2.325 3.49-3.682 5.912-3.633zM20.743 64.73a6.7 6.7 0 0 0-2.586.416c-3.429 1.267-5.233 5.009-4.033 8.357c1.2 3.35 4.952 5.038 8.379 3.771c3.429-1.267 5.23-5.008 4.031-8.357c-.9-2.511-3.234-4.09-5.79-4.187zm81.193.287l6.446 2.88c-.83 3.22.386 6.663 3.035 8.624l-10.252 17.822a18.2 18.2 0 0 0-8.102-2.28a18 18 0 0 0-1.955.116L86.894 80.42a33.3 33.3 0 0 0 15.043-15.404zm-9.05 31.869c5.197.183 9.89 3.375 11.709 8.453c2.427 6.77-1.206 14.37-8.235 16.967c-7.03 2.597-14.562-.824-16.988-7.594c-2.428-6.772 1.206-14.37 8.236-16.965a13.8 13.8 0 0 1 5.278-.861M60.898 98.35q.622-.026 1.256.076h.002c3.378.553 5.55 3.646 4.908 6.984c-.642 3.341-3.907 5.615-7.287 5.063s-5.552-3.646-4.91-6.985c.562-2.923 3.133-5.026 6.031-5.138m31.653 2.77a9.2 9.2 0 0 0-3.553.571c-4.71 1.74-7.191 6.882-5.543 11.483c1.65 4.603 6.806 6.923 11.514 5.183h.002c4.71-1.74 7.19-6.883 5.54-11.484c-1.237-3.452-4.447-5.62-7.96-5.754z"
                        ></path>
                      </svg>
                      Social Media Management
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      We handle your brand’s social media presence by creating,
                      curating, and scheduling content that engages and grows
                      your audience. Our strategy includes monitoring trends,
                      responding to comments, and optimizing posts for maximum
                      reach. By maintaining an active and relevant social
                      presence, we help you build strong connections and drive
                      consistent brand visibility.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12 bs-box py-2 px-2">
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
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M4 15q-.825 0-1.412-.587T2 13V4q0-.825.588-1.412T4 2h9q.825 0 1.413.588T15 4v9q0 .825-.587 1.413T13 15zm0-2h9V4H4zm4-1.75L6.8 9.6L5 12h7L9.7 9zM17 22q-1.25 0-2.125-.875T14 19t.875-2.125T17 16q.275 0 .513.05t.487.125V11h4v2h-2v6q0 1.25-.875 2.125T17 22M4 13V4z"
                        ></path>
                      </svg>
                      Media Buying & Media Planning
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      We strategically plan and purchase ad placements across
                      various media channels to reach your target audience
                      effectively. Our media planning ensures that your ads
                      appear in the right places at the right times, maximizing
                      visibility and engagement. Through smart media buying, we
                      negotiate the best rates, ensuring your budget delivers
                      optimal results across platforms.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12 bs-box px-0 py-0">
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
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          d="M14.25 2.1a1.25 1.25 0 0 0-1.17-.1L6.91 4.43a1.2 1.2 0 0 1-.46.09H2.5a1.25 1.25 0 0 0-1.25 1.25v.1H0v3h1.25V9a1.25 1.25 0 0 0 1.25 1.22L4 13.4a1.26 1.26 0 0 0 1.13.72h.63A1.25 1.25 0 0 0 7 12.87v-2.53l6.08 2.43a1.3 1.3 0 0 0 .47.09a1.3 1.3 0 0 0 .7-.22a1.25 1.25 0 0 0 .55-1V3.13a1.25 1.25 0 0 0-.55-1.03m-8.5 3.67V9H2.5V5.77zm0 7.1h-.63l-1.23-2.65h1.86zm1.62-3.72A2.3 2.3 0 0 0 7 9V5.7a2.3 2.3 0 0 0 .37-.11l6.18-2.46v8.48zm7.46-3.03v2.5a1.25 1.25 0 0 0 0-2.5"
                        ></path>
                      </svg>
                      Performance Marketing
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFour"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      We focus on data-driven marketing strategies where you pay
                      based on the results, such as clicks, leads, or
                      conversions. Our performance marketing approach optimizes
                      campaigns to ensure maximum ROI by constantly tracking and
                      adjusting for better performance. Whether it’s through
                      PPC, affiliate marketing, or social ads, we help you
                      achieve measurable and scalable growth.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row bs-row2 justify-start">
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
                        width="20"
                        height="20"
                        viewBox="0 0 48 48"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="4"
                        >
                          <path d="M24 4v8"></path>
                          <path
                            d="m22 22l20 4l-6 4l6 6l-6 6l-6-6l-4 6z"
                            clipRule="evenodd"
                          ></path>
                          <path d="m38.142 9.858l-5.657 5.657M9.858 38.142l5.657-5.657M4 24h8M9.858 9.858l5.657 5.657"></path>
                        </g>
                      </svg>
                      Google Ads
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFive"
                    className="accordion-collapse collapse "
                  >
                    <div className="accordion-body">
                      We create and manage PPC campaigns that place your ads in
                      front of the right audience at the right time. By
                      targeting specific keywords and demographics, we drive
                      high-quality traffic to your website. With continuous
                      optimization, we ensure you get the best return on
                      investment by only paying when someone clicks on your ad.
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
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 8H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3m11 0h-4V8h4m-3 4h2m4-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"
                        ></path>
                      </svg>
                      SEO
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseSix"
                    className="accordion-collapse collapse "
                  >
                    <div className="accordion-body">
                      We optimize your website to rank higher on search engines
                      like Google, driving organic traffic to your site. Our SEO
                      strategy includes keyword research, on-page optimization,
                      and improving site structure for better visibility. With
                      enhanced rankings, we help your brand reach more potential
                      customers and grow your online presence naturally.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="about-page-last-section">
          <div className="container bs-container3 mt-5 pt-5 portfolioDiv last-section-of-every-page">
            {/* <!-- Row 1 --> */}
            <div className="row bs-2-row-1 my-3 px-0">
              <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                <Link href="/case-studies/madhu-cookware" className="bs-img-div">
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
                <Link href={"/case-studies/madhu-cookware"}>
                  <h3 className="pt-2 services-card-heading">
                    Madhu Cookware{" "}
                  </h3>
                </Link>
                <h5 className="services-card-para">
                  Shree Enterprises is a family-owned, Indian manufacturer of
                  kitchenware. From it...
                </h5>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                <Link
                  href="/case-studies/dhirsons-jewellery-house"
                  className="bs-img-div"
                >
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
                <Link href={"/case-studies/dhirsons-jewellery-house"}>
                  <h3 className="pt-2 services-card-heading">
                    Dhirsons Jewellery House{" "}
                  </h3>
                </Link>
                <h5 className="services-card-para">
                  The Premium Diamond Jewellery Wholesale store in Karol Bagh,
                  Delhi &amp; Retail Stor...
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
                  <h3 className="pt-2 services-card-heading">
                    The Pet Center{" "}
                  </h3>
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
    </div>
  );
};

export default BrandSolution;
