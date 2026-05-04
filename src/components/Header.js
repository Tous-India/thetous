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

  // Phone menu services

  const [open, setOpen] = useState(false);

  const menuServiceClick = () => {
    setOpen(!open);
  };

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
                    <Link
                      href="/"
                      className={pathname === "/" ? "active-nav" : ""}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className={
                        pathname.startsWith("/about") ? "active-nav" : ""
                      }
                    >
                      About
                    </Link>
                  </li>
                  <li className={`services-item`} id="drop-down-li-item">
                    Services <i className="ri-arrow-down-s-line"></i>
                    <div className="inner-ul-dropdown">
                      <ul>
                        <li>
                          <Link
                            href="/tech-solution/web-development"
                            className={
                              pathname === "/tech-solution/web-development"
                                ? "active-nav"
                                : ""
                            }
                          >
                            Website Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/tech-solution/shopify-development"
                            className={
                              pathname === "/tech-solution/shopify-development"
                                ? "active-nav"
                                : ""
                            }
                          >
                            Shopify Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/tech-solution/crm-development"
                            className={
                              pathname === "/tech-solution/crm-development"
                                ? "active-nav"
                                : ""
                            }
                          >
                            CRM & Web Apps
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link
                      href="/work"
                      className={
                        pathname.startsWith("/work") ? "active-nav" : ""
                      }
                    >
                      Work
                    </Link>
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
                    <div className="col-lg-4 col-md-12 col-sm-12 bs-box px-4">
                      <p
                        className={`${open ? "border-b-2 border-gray-300" : "border-0"}`}
                        onClick={menuServiceClick}
                      >
                        {" "}
                        Services{" "}
                        <i
                          className={`ri-arrow-down-s-line ${open ? "rotate-180" : "rotate-0"}`}
                        ></i>
                      </p>
                      <div
                        className={`phone-services-box ${open ? "openclass" : "closeclass"}`}
                      >
                        <Link
                          href="/tech-solution/web-development"
                          className={
                            pathname === "/tech-solution/web-development"
                              ? "active-nav"
                              : ""
                          }
                        >
                           Website Development
                        </Link>
                        <Link
                          href="/tech-solution/shopify-development"
                          className={
                            pathname === "/tech-solution/shopify-development"
                              ? "active-nav"
                              : ""
                          }
                        >
                          Shopify Development
                        </Link>
                        <Link
                          href="/tech-solution/crm-development"
                          className={
                            pathname === "/tech-solution/crm-development"
                              ? "active-nav"
                              : ""
                          }
                        >
                           CRM & Web Apps
                        </Link>
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
