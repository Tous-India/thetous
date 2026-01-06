"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/black-the-tous.png";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import whatsapp from "../../public/whatsapp.png";
// brand
import copywriter from "../../public/services/brand/meta-ads.webp"; //default
import socialMedia from "../../public/services/brand/social-media-management.webp";
import performanceMarketing from "../../public/services/brand/performance-marketing.webp";
import payPerClick from "../../public/services/brand/google-ads.webp";
import seo from "../../public/services/brand/seo.webp";
// media
import modelShoot from "../../public/services/media/model-shoot.webp";
import productShoot from "../../public/services/media/producctt shooot.webp";
import printMedia from "../../public/services/media/print-media.webp";
import videoEditing from "../../public/services/media/video generation.webp";
import graphicDesign from "../../public/services/media/graphic designing.webp";

// tech
import websiteDesign from "../../public/services/tech/website-design.webp";
import whatsappMarketing from "../../public/services/tech/whatsappmarketing.webp";
import chatBot from "../../public/services/tech/chatbot.webp";
import automation from "../../public/services/tech/automation.webp";
import ecommerce from "../../public/services/tech/ecommerce.webp";
import webAndApp from "../../public/services/tech/webdev.webp";

const Header = () => {
  // Phone Menu
  const [showPhoneMenu, setShowPhoneMenu] = useState(false);
  const handleShowPhoneMenu = () => {
    setShowPhoneMenu(true);
  };
  const handleHidePhoneMenu = () => {
    setShowPhoneMenu(false);
  };
  // Phone Menu

  const pathname = usePathname();
  useEffect(() => {
    setShowPhoneMenu(false); // auto close on route change
  }, [pathname]);
  // showing the list hover on the heading
  const [imageSrc, setImageSrc] = useState(copywriter);

  //

  const [firstList, setFirstList] = useState(true);
  const [secondList, setSecondList] = useState(false);
  const [thirdList, setThirdList] = useState(false);
  const handleShowList = (val) => {
    if (val === "h1") {
      setFirstList(true);
      setSecondList(false);
      setThirdList(false);
    }
    if (val === "h2") {
      setFirstList(false);
      setSecondList(true);
      setThirdList(false);
    }
    if (val === "h3") {
      setFirstList(false);
      setSecondList(false);
      setThirdList(true);
    }
  };

  // const handleMouseLeaveList = () => {
  //   setFirstList(false);
  //   setSecondList(false);
  //   setThirdList(false);
  // };

  // MenuList with Image Change

  const handleMenuItemEnter = (img) => {
    setImageSrc(img);
  };

  // Hover on Heading with opacity

  return (
    <div className="parent-fo-header">
      <div className="para-div">
        <div className="p-tag">
          <p>Building Digital Pathways to Your Success</p>
        </div>
      </div>
      <header>
        <div className="container">
          <div className="flex row-div">
            <div className="logo-div">
              <Link href="/">
                <Image src={Logo} alt="The Tous Logo" />
              </Link>
            </div>
            <div className="menu-div">
              <nav className="desktop-menu">
                <ul className="ul-nav">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li className={`services-item`} id="drop-down-li-item">
                    Services{" "}
                    <span>
                      <i className="ri-arrow-down-s-line"></i>
                    </span>
                    <div className="inner-ul-dropdown">
                      <ul className="main-heading">
                        <li className={`heading-1`}>
                          <h4
                            onMouseEnter={() => handleShowList("h1")}
                            // onMouseLeave={() => handleMouseLeaveList()}
                            className={`

                                ${firstList ? "opacity-100" : ""}
                                ${secondList ? "opacity-30" : ""}
                                ${thirdList ? "opacity-30" : ""}
                               
                              
                              `}
                          >
                            <Link href="/brand-solution">Brand Solutions</Link>
                          </h4>
                        </li>
                        <li
                          className={`heading-2
                         `}
                        >
                          <h4
                            onMouseEnter={() => handleShowList("h2")}
                            // onMouseLeave={() => handleMouseLeaveList()}
                            className={`
                               
                              ${secondList ? "opacity-100" : ""} 
                              ${firstList ? "opacity-30" : ""} 
                              ${thirdList ? "opacity-30" : ""} 
                            `}
                          >
                            <Link href="/tech-solution">Tech Solutions</Link>
                          </h4>
                        </li>
                        <li
                          className={`heading-3
                        `}
                        >
                          <h4
                            onMouseEnter={() => handleShowList("h3")}
                            // onMouseLeave={() => handleMouseLeaveList()}
                            className={`
                              ${thirdList ? "opacity-100" : ""}
                              ${firstList ? "opacity-30" : ""}
                              ${secondList ? "opacity-30" : ""}
                              `}
                          >
                            <Link href="/media-solution">Media Solutions</Link>
                          </h4>
                        </li>
                      </ul>
                      <div className="list-div-main-div">
                        <div
                          className={`sublist-div-1
                          
                          ${firstList ? "showDeskMenuList" : " "}  
                        `}
                          id="first-list-div"
                        >
                          <Link
                            href="/brand-solution"
                            className="sub-list-elem-3"
                            onMouseOver={() => handleMenuItemEnter(socialMedia)}
                          >
                            Media Planning & Media Buying
                          </Link>
                          <Link
                            href="/brand-solution"
                            className="sub-list-elem-4"
                            onMouseOver={() =>
                              handleMenuItemEnter(performanceMarketing)
                            }
                          >
                            Performance Marketing
                          </Link>
                          <Link
                            href="/brand-solution"
                            className="sub-list-elem-5"
                            onMouseOver={() => handleMenuItemEnter(payPerClick)}
                          >
                            Google Ads
                          </Link>
                          <Link
                            href="/brand-solution"
                            className="sub-list-elem-1"
                            onMouseOver={() => handleMenuItemEnter(socialMedia)}
                          >
                            Social Media Management
                          </Link>
                          <Link
                            href="/brand-solution"
                            className="sub-list-elem-6"
                            onMouseOver={() => handleMenuItemEnter(seo)}
                          >
                            SEO
                          </Link>
                        </div>
                        <div
                          className={`sublist-div-2
                          
                           ${secondList ? "showDeskMenuList" : " "}  
                          `}
                          id="second-list-div"
                        >
                          <Link
                            href="/tech-solution/web-development"
                            className="sub-list-elem-d2-1"
                            onMouseOver={() => handleMenuItemEnter(webAndApp)}
                          >
                            Web & App Development
                          </Link>
                          <Link
                            href="/tech-solution/shopify-development"
                            className="sub-list-elem-d2-2"
                            onMouseOver={() => handleMenuItemEnter(ecommerce)}
                          >
                            E-Commerce Development
                          </Link>
                          <Link
                            href="/tech-solution"
                            className="sub-list-elem-d2-3"
                            onMouseOver={() => handleMenuItemEnter(automation)}
                          >
                            Automation
                          </Link>
                          <Link
                            href="/tech-solution"
                            className="sub-list-elem-d2-4"
                            onMouseOver={() =>
                              handleMenuItemEnter(whatsappMarketing)
                            }
                          >
                            Website Designing
                          </Link>
                          <Link
                            href="/tech-solution"
                            className="sub-list-elem-d2-5"
                            onMouseOver={() =>
                              handleMenuItemEnter(websiteDesign)
                            }
                          >
                            Whatsapp Marketing
                          </Link>
                          <Link
                            href="/tech-solution"
                            className="sub-list-elem-d2-6"
                            onMouseOver={() => handleMenuItemEnter(chatBot)}
                          >
                            AI Chatbot
                          </Link>
                        </div>
                        <div
                          className={`sublist-div-3 
                           ${thirdList ? "showDeskMenuList" : " "}  
                          `}
                          id="third-list-div"
                        >
                          <Link
                            href="/media-solution"
                            className="sub-list-elem-d3-1"
                            onMouseOver={() =>
                              handleMenuItemEnter(graphicDesign)
                            }
                          >
                            AI Graphic Designing
                          </Link>
                          <Link
                            href="/media-solution"
                            className="sub-list-elem-d3-1"
                            onMouseOver={() =>
                              handleMenuItemEnter(videoEditing)
                            }
                          >
                            AI Video Editing
                          </Link>
                          <Link
                            href="/media-solution"
                            className="sub-list-elem-d3-1"
                            onMouseOver={() => handleMenuItemEnter(printMedia)}
                          >
                            Print Media
                          </Link>
                          <Link
                            href="/media-solution"
                            className="sub-list-elem-d3-1"
                            onMouseOver={() =>
                              handleMenuItemEnter(productShoot)
                            }
                          >
                            Product Shoot
                          </Link>
                          <Link
                            href="/media-solution"
                            className="sub-list-elem-d3-1"
                            onMouseOver={() => handleMenuItemEnter(modelShoot)}
                          >
                            Model Shoot
                          </Link>
                        </div>
                      </div>
                      <div className="image-div">
                        <div className="bs-image-div">
                          <Image
                            src={imageSrc}
                            width={500}
                            height={400}
                            alt="Service preview"
                            className={`BS1 firstImage bsc`}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link href="/work">Work</Link>
                  </li>
                  <li>
                    <Link
                      href="https://blog.thetous.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="contact-button-header">
                      Contact us
                    </Link>
                  </li>
                </ul>
              </nav>
              <div
                className={`phone-menu-div ${
                  showPhoneMenu ? "showPhoneMenu" : ""
                }`}
              >
                <Image src={Logo} alt="The Tous" width={100} height={40} />
                <div className="cross-div">
                  <i
                    className="cross-icon ri-close-fill"
                    onClick={handleHidePhoneMenu}
                  ></i>
                </div>
                <div className="inner-div">
                  <div className="row bs-row1 flex-column">
                    <div className="col-lg-4 col-md-12 col-sm-12 bs-box px-4 py-2 phone-links">
                      <Link href="/">Home</Link>
                      <Link href="/about">About</Link>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 bs-box px-4 py-2">
                      <div
                        className="accordion"
                        id="accordionPanelsStayOpenExample"
                      >
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
                              <Link href="/brand-solution">
                                Brand Solutions
                              </Link>
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseOne"
                            className="accordion-collapse collapse"
                          >
                            <div className="accordion-body">
                              <ul>
                                <li>
                                  <Link href="/brand-solution">
                                    Media Planning & Media Buying
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/brand-solution">Performance Marketing </Link>
                                </li>
                                <li>
                                  <Link href="/brand-solution">Google Ads </Link>
                                </li>
                                <li>
                                  <Link href="/brand-solution">Social Media Management </Link>
                                </li>
                                <li>
                                  <Link href="/brand-solution">SEO </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12 bs-box px-4 py-2">
                      <div
                        className="accordion"
                        id="accordionPanelsStayOpenExample2"
                      >
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
                              <Link href="/tech-solution">Tech Solutions</Link>
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseTwo"
                            className="accordion-collapse collapse"
                          >
                            <div className="accordion-body">
                              <ul>
                                <li>
                                  <Link href="/tech-solution/web-development">
                                    Web & App Development
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/tech-solution/shopify-development">
                                    E-Commerce Development
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/tech-solution">Automation</Link>
                                </li>
                                <li>
                                  <Link href="/tech-solution">Website Designing</Link>
                                </li>
                                <li>
                                  <Link href="/tech-solution">Whatsapp Marketing</Link>
                                </li>
                                <li>
                                  <Link href="/tech-solution">AI Chatbot </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12 bs-box px-4 py-2">
                      <div
                        className="accordion"
                        id="accordionPanelsStayOpenExample3"
                      >
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
                              <Link href="/media-solution">
                                Media Solutions
                              </Link>
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseThree"
                            className="accordion-collapse collapse"
                          >
                            <div className="accordion-body">
                              <ul>
                                <li>
                                  <Link href="/media-solution">AI Graphic Designing</Link>
                                </li>
                                <li>
                                  <Link href="/media-solution">AI Video Editing</Link>
                                </li>
                                <li>
                                  <Link href="/media-solution">Print Media</Link>
                                </li>
                                <li>
                                  <Link href="/media-solution">Product Shoot</Link>
                                </li>
                                <li>
                                  <Link href="/media-solution">Model Shoot</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 bs-box px-4 py-2 contact-div">
                      <Link href="/contact">Contact Us</Link>
                      <Link href="/work">Work</Link>
                      <Link
                        href="https://blog.thetous.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Blog
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <i
                className="ri-menu-4-line ham-menu-icon"
                onClick={handleShowPhoneMenu}
              ></i>
            </div>
          </div>
        </div>
        {/* Cta floating button whatapp */}

        <a
          href="https://wa.link/vj2khp"
          id="whatsappFloatingButton"
          rel={null}
          // rel="noopener noreferrer"
        >
          <Image src={whatsapp} alt="whatsapp" width={100} height={100} />
        </a>

        <Link href="/quote" id="quoteFloatingButton">
          Get Quote
        </Link>
      </header>
    </div>
  );
};

export default Header;
