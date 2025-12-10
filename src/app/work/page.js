import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./style.css";

//

import vardhaman from "../../../public/work/vardhaman.png";
import madhu from "../../../public/work/madhu.png";
import geetika from "../../../public/work/geetika.webp";
import yellowcab from "../../../public/work/13yellow.webp";
import executive from "../../../public/work/executive.webp";
import ohmypet from "../../../public/work/ohmypet.webp";
import dhirsons from "../../../public/work/dhirsons.webp";
import petcenter from "../../../public/work/petcenter.webp";

const Work = () => {
  return (
    <div className="work-main-page">
      <div className="container-fluid bs-container mb-5">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12 d-flex justify-content-centent align-items-center flex-column brand-strategy-div">
            <h1 className="w-100">Our Work.</h1>
            <p className="w-100">
              Our strategists, designers, video editors and animators provide
              you with holistic solutions to grow your digital presence and
              achieve your business goals through both day-to-day content and
              integrated flagship campaigns.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid work-accordian-section last-section-of-every-page">
        <div className="row">
          <div className="col-12">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingFour"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    Brand Solution
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFour"
                >
                  <div className="accordion-body firstBodyDiv">
                    <div className="container-fluid bs-container3 mt-5 pt-5">
                      {/* <!-- Row 1 --> */}
                      <div className="row bs-2-row-1 my-3">
                        {/* <!-- // use this for the back and loop this div  --> */}

                        <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                          <Link href="/" className="bs-img-div">
                             <Image width={400} height={400} src={madhu} alt="" className="rounded-4" />
                          </Link>
                          <div className="buttonBox mt-2">
                            <button className="first">Website</button>
                            <button className="first">SEO</button>
                          </div>
                          <h3 className="pt-2">Madhu Cookware </h3>
                          <h5>
                            Shree Enterprises is a family-owned, Indian
                            manufacturer of kitchenware. From it...
                          </h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                          <Link href="/" className="bs-img-div">
                             <Image width={400} height={400} src={dhirsons} alt="" className="rounded-4" />
                          </Link>
                          <div className="buttonBox mt-2">
                            <button className="first">Website</button>
                            <button className="first">SEO</button>
                          </div>
                          <h3 className="pt-2">Dhirsons Jewellery House </h3>
                          <h5>
                            The Premium Diamond Jewellery Wholesale store in
                            Karol Bagh, Delhi &amp; Retail Stor...
                          </h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                          <Link href="/" className="bs-img-div">
                             <Image width={400} height={400} src={petcenter} alt="" className="rounded-4" />
                          </Link>
                          <div className="buttonBox mt-2">
                            <button className="first">Website</button>
                            <button className="first">ADS</button>
                            <button className="first">SEO</button>
                          </div>
                          <h3 className="pt-2">The Pet Center </h3>
                          <h5>
                            Pet grooming services at home. Wash, dry and brush
                            your fuzzy friend in the comf...
                          </h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                          <Link href="/" className="bs-img-div">
                             <Image width={400} height={400} src={ohmypet} alt="" className="rounded-4" />
                          </Link>
                          <div className="buttonBox mt-2">
                            <button className="first">Website</button>
                            <button className="first">SEO</button>
                          </div>
                          <h3 className="pt-2">Oh My Pet Grooming </h3>
                          <h5>
                            At Oh My Pet Grooming, we bring professional pet
                            care services right to your doo...
                          </h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                          <Link href="/" className="bs-img-div">
                             <Image width={400} height={400} src={executive} alt="" className="rounded-4" />
                          </Link>
                          <div className="buttonBox mt-2">
                            <button className="first">Website</button>
                            <button className="first">SEO</button>
                            <button className="first">Ads</button>
                          </div>
                          <h3 className="pt-2">EXECUTIVE CARS </h3>
                          <h5>
                            Welcome to our first-className chauffeur car service
                            in Melbourne, the best choice ...
                          </h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                          <Link href="/" className="bs-img-div">
                             <Image width={400} height={400} src={geetika} alt="" className="rounded-4" />
                          </Link>
                          <div className="buttonBox mt-2">
                            <button className="first">website</button>
                            <button className="first">ADS</button>
                            <button className="first">SEO</button>
                          </div>
                          <h3 className="pt-2">Geetika Vidya Ohlyan </h3>
                          <h5>
                            She is into self teaching ; gardening - plant
                            propagation ; explorer of yogic b...
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Media Solution
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body secondBodyDiv">
                    <div className="container-fluid bs-container3 mt-5 pt-5">
                      {/* <!-- Row 1 --> */}
                      <div className="row bs-2-row-1 my-3">
                        {/* <!-- // use this for the back and loop this div  --> */}

                        <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                          <Link href="/" className="bs-img-div">
                             <Image width={400} height={400} src={petcenter} alt="" className="rounded-4" />
                          </Link>
                          <div className="buttonBox mt-2">
                            <button className="first">Website</button>
                            <button className="first">ADS</button>
                            <button className="first">SEO</button>
                          </div>
                          <h3 className="pt-2">The Pet Center </h3>
                          <h5>
                            Pet grooming services at home. Wash, dry and brush
                            your fuzzy friend in the comf...
                          </h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                          <Link href="/" className="bs-img-div">
                             <Image width={400} height={400} src={ohmypet} alt="" className="rounded-4" />
                          </Link>
                          <div className="buttonBox mt-2">
                            <button className="first">Website</button>
                            <button className="first">SEO</button>
                          </div>
                          <h3 className="pt-2">Oh My Pet Grooming </h3>
                          <h5>
                            At Oh My Pet Grooming, we bring professional pet
                            care services right to your doo...
                          </h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                          <Link href="/" className="bs-img-div">
                             <Image width={400} height={400} src={executive} alt="" className="rounded-4" />
                          </Link>
                          <div className="buttonBox mt-2">
                            <button className="first">Website</button>
                            <button className="first">SEO</button>
                            <button className="first">Ads</button>
                          </div>
                          <h3 className="pt-2">EXECUTIVE CARS </h3>
                          <h5>
                            Welcome to our first-className chauffeur car service
                            in Melbourne, the best choice ...
                          </h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                          <Link href="/" className="bs-img-div">
                             <Image width={400} height={400} src={yellowcab} alt="" className="rounded-4" />
                          </Link>
                          <div className="buttonBox mt-2">
                            <button className="first">Website</button>
                            <button className="first">SEO</button>
                          </div>
                          <h3 className="pt-2">13 YELLOW AIRPORT CABS </h3>
                          <h5>
                            The professionals at 13Yellow Airport Cabs are
                            driven by their passion for helpi...
                          </h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                          <Link href="/" className="bs-img-div">
                             <Image width={400} height={400} src={geetika} alt="" className="rounded-4" />
                          </Link>
                          <div className="buttonBox mt-2">
                            <button className="first">website</button>
                            <button className="first">ADS</button>
                            <button className="first">SEO</button>
                          </div>
                          <h3 className="pt-2">Geetika Vidya Ohlyan </h3>
                          <h5>
                            She is into self teaching ; gardening - plant
                            propagation ; explorer of yogic b...
                          </h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                          <Link href="/" className="bs-img-div">
                             <Image width={400} height={400} src={vardhaman} alt="" className="rounded-4" />
                          </Link>
                          <div className="buttonBox mt-2">
                            <button className="first">Website</button>
                            <button className="first">ADS</button>
                            <button className="first">SEO</button>
                          </div>
                          <h3 className="pt-2">Vardhman TexoFab </h3>
                          <h5>
                            Vardhman Texo Fab is a distinguished online platform
                            showcasing excellence in th...
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingThree"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    Tech Solution
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body thirdBodyDiv">
                    <div className="container-fluid bs-container3 mt-5 pt-5">
                      {/* <!-- Row 1 --> */}
                      <div className="row bs-2-row-1 my-3">
                        {/* <!-- // use this for the back and loop this div  --> */}

                        <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                          <Link href="/" className="bs-img-div">
                             <Image width={400} height={400} src={madhu} alt="" className="rounded-4" />
                          </Link>
                          <div className="buttonBox mt-2">
                            <button className="first">Website</button>
                            <button className="first">SEO</button>
                          </div>
                          <h3 className="pt-2">Madhu Cookware </h3>
                          <h5>
                            Shree Enterprises is a family-owned, Indian
                            manufacturer of kitchenware. From it...
                          </h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                          <Link href="/" className="bs-img-div">
                             <Image width={400} height={400} src={dhirsons} alt="" className="rounded-4" />
                          </Link>
                          <div className="buttonBox mt-2">
                            <button className="first">Website</button>
                            <button className="first">SEO</button>
                          </div>
                          <h3 className="pt-2">Dhirsons Jewellery House </h3>
                          <h5>
                            The Premium Diamond Jewellery Wholesale store in
                            Karol Bagh, Delhi &amp; Retail Stor...
                          </h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                          <Link href="/" className="bs-img-div">
                             <Image width={400} height={400} src={petcenter} alt="" className="rounded-4" />
                          </Link>
                          <div className="buttonBox mt-2">
                            <button className="first">Website</button>
                            <button className="first">ADS</button>
                            <button className="first">SEO</button>
                          </div>
                          <h3 className="pt-2">The Pet Center </h3>
                          <h5>
                            Pet grooming services at home. Wash, dry and brush
                            your fuzzy friend in the comf...
                          </h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                          <Link href="/" className="bs-img-div">
                             <Image width={400} height={400} src={ohmypet} alt="" className="rounded-4" />
                          </Link>
                          <div className="buttonBox mt-2">
                            <button className="first">Website</button>
                            <button className="first">SEO</button>
                          </div>
                          <h3 className="pt-2">Oh My Pet Grooming </h3>
                          <h5>
                            At Oh My Pet Grooming, we bring professional pet
                            care services right to your doo...
                          </h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                          <Link href="/" className="bs-img-div">
                             <Image width={400} height={400} src={executive} alt="" className="rounded-4" />
                          </Link>
                          <div className="buttonBox mt-2">
                            <button className="first">Website</button>
                            <button className="first">SEO</button>
                            <button className="first">Ads</button>
                          </div>
                          <h3 className="pt-2">EXECUTIVE CARS </h3>
                          <h5>
                            Welcome to our first-className chauffeur car service
                            in Melbourne, the best choice ...
                          </h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                          <Link href="/" className="bs-img-div">
                             <Image width={400} height={400} src={yellowcab} alt="" className="rounded-4" />
                          </Link>
                          <div className="buttonBox mt-2">
                            <button className="first">Website</button>
                            <button className="first">SEO</button>
                          </div>
                          <h3 className="pt-2">13 YELLOW AIRPORT CABS </h3>
                          <h5>
                            The professionals at 13Yellow Airport Cabs are
                            driven by their passion for helpi...
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
