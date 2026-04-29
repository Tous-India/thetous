"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/black-the-tous-new.png";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import whatsapp from "../../public/whatsapp.png";
import phone from "../../public/phone-call.png";
// brand
// import copywriter from "../../public/services/brand/meta-ads.webp"; //default
// import socialMedia from "../../public/services/brand/social-media-management.webp";
// import performanceMarketing from "../../public/services/brand/performance-marketing.webp";
// import payPerClick from "../../public/services/brand/google-ads.webp";
// import seo from "../../public/services/brand/seo.webp";
// // media
// import modelShoot from "../../public/services/media/model-shoot.webp";
// import productShoot from "../../public/services/media/producctt shooot.webp";
// import printMedia from "../../public/services/media/print-media.webp";
// import videoEditing from "../../public/services/media/video generation.webp";
// import graphicDesign from "../../public/services/media/graphic designing.webp";

// // tech
// import websiteDesign from "../../public/services/tech/website-design.webp";
// import whatsappMarketing from "../../public/services/tech/whatsappmarketing.webp";
// import chatBot from "../../public/services/tech/chatbot.webp";
// import automation from "../../public/services/tech/automation.webp";
// import ecommerce from "../../public/services/tech/ecommerce.webp";
// import webAndApp from "../../public/services/tech/webdev.webp";

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

  //

  // MenuList with Image Change

 

  // Hover on Heading with opacity

  return (
    <div className="parent-fo-header">
      <div className="para-div">
        <div className="p-tag">
          <p>
            <a href="/quote">
              <span>Currently booking development projects for June 2026.</span>{" "}
              Book a call →
            </a>
          </p>
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
                    <Link href="/" className={pathname === "/" ? "active-nav" : ""}>Home</Link>
                  </li>
                  <li>
                    <Link href="/about" className={pathname.startsWith("/about") ? "active-nav" : ""}>About</Link>
                  </li>
                  <li className={`services-item`} id="drop-down-li-item">
                    Services{" "}
                    <span>
                      <i className="ri-arrow-down-s-line"></i>
                    </span>
                    <div className="inner-ul-dropdown">
                      <ul>
                        <li>
                          <Link href="/tech-solution/web-development">Custom Web Development</Link>
                        </li>
                        <li>
                          <Link href="/tech-solution/shopify-development">Shopify Development</Link>
                        </li>
                        <li>
                          <Link href="/tech-solution/web-development">Custom CRM & Web Apps</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link href="/work" className={pathname.startsWith("/work") ? "active-nav" : ""}>Work</Link>
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
                              <Link href="/brand-solution">Services</Link>
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseOne"
                            className="accordion-collapse collapse"
                          >
                            <div className="accordion-body">
                              <ul>
                                <li>
                                  <Link href="/tech-solution/web-development">
                                    Custom Web Development
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/tech-solution/shopify-development">
                                    Shopify Development
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/tech-solution/web-development">
                                    Custom CRM & Web Apps
                                  </Link>
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
          href="https://wa.link/wfv5k1"
          id="whatsappFloatingButton"
          rel={null}
          // rel="noopener noreferrer"
        >
          <Image src={whatsapp} alt="whatsapp" width={100} height={100} />
        </a>

        <Link href="/book-a-call" id="quoteFloatingButton">
          Book a Call
        </Link>

        {/* <a href="tel:8901440322" id="phoneFloatingButton" rel={null}>
          <Image
            src={phone}
            alt="The Tous - Phone Number"
            width={100}
            height={100}
          />
        </a> */}

          

      </header>
    </div>
  );
};

export default Header;
