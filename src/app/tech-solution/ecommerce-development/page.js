"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./style.css";
import painPoints from "../../../../public/pain-point-of-shopify-dev.webp";
import { Swiper, SwiperSlide } from "swiper/react";

import wodpressicon from "../../../../public/services/wordpress.png";
import shopfiyicon from "../../../../public/services/shopify.png";
import customicon from "../../../../public/services/settings.png";

const WebDevelopment = () => {
  const videoRef = React.useRef(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const [activeTab, setActiveTab] = useState("customized");
  const [expandedProcesses, setExpandedProcesses] = useState({});
  const [expandedWhyChoose, setExpandedWhyChoose] = useState({});
  const [isMuted, setIsMuted] = useState(true);
  const faqs = [
    {
      question:
        "What’s the Typical Timeline for an E-Commerce Development Project?",
      answer:
        "The timeline depends on your store’s size and complexity. A standard eCommerce website usually takes 4–8 weeks, while more advanced or custom eCommerce solutions may take 8–12 weeks, including design, development, testing, and launch.",
    },
    {
      question: "What Is Your Pricing Model for E-Commerce Development?",
      answer:
        "Our pricing is project-based and transparent, tailored to your requirements, platform (Shopify, WooCommerce, or custom), features, and integrations. We provide a clear cost breakdown before starting—no hidden charges.",
    },
    {
      question: "Do You Provide Ongoing Support After Store Launch?",
      answer:
        "Yes. We offer ongoing eCommerce support and maintenance, including performance optimization, security updates, feature enhancements, and technical support to ensure your store runs smoothly post-launch.",
    },
    {
      question:
        "Can You Work With Our Existing E-Commerce Platform or Tech Stack?",
      answer:
        "Absolutely. We can enhance, migrate, or optimize existing eCommerce websites built on Shopify, WooCommerce, or custom platforms while ensuring minimal downtime and data security.",
    },
    {
      question: "What’s Included in Your E-Commerce Development Process?",
      answer:
        "Our eCommerce development process includes strategy planning, UI/UX design, store development, payment and shipping integration, SEO setup, testing, and deployment, ensuring a complete, ready-to-sell online store.",
    },
    {
      question: "Do You Offer Revisions During E-Commerce Development?",
      answer:
        "Yes. We include multiple revision rounds during design and development to ensure the final store aligns perfectly with your business goals and brand expectations.",
    },
  ];

  const portfolioTabs = [
    { id: "customized", label: "Silvago" },
    { id: "tailored", label: "KB Group" },
    { id: "coaches", label: "Vaqya" },
    { id: "custom", label: "Shoolin" },
  ];

  const portfolioContent = {
    customized: {
      title: "Silvago – Mobile App Development",
      subtitle: "Silver Jewellery & Lifestyle",
      description:
        "We designed and developed a high-performance mobile shopping app for Silvago, focused on delivering a smooth, premium jewellery-buying experience.",
      features: [
        "Custom product browsing with clean UI",
        "Secure checkout flow with offer logic",
        "Buy 1 Get 1 & promotional rules integration",
        "Wishlist and order tracking",
        "Optimized performance for faster load times",
      ],
      impact: [
        "Improved mobile conversion rate",
        "Faster browsing and checkout experience",
        "Better engagement from repeat customers",
      ],
      platform: "Android & iOS (Custom Mobile App)",
    },
    tailored: {
      title: "KB – Web Application Development",
      subtitle: "Business Operations / Internal Management",
      description:
        "We developed a scalable web application for KB, tailored to manage internal workflows and operational data efficiently.",
      features: [
        "Role-based access system",
        "Centralized data management",
        "Workflow automation for daily operations",
        "Clean, responsive interface for desktop use",
        "Secure authentication and data handling",
      ],
      impact: [
        "Reduced manual work and errors",
        "Faster decision-making through organized data",
        "Improved internal productivity",
      ],
      platform: "Custom Web Application",
    },
    coaches: {
      title: "Vaqya LLC – Analytics Dashboard",
      subtitle: "Healthcare Analytics (USA)",
      description:
        "We designed and developed an analytics dashboard for Vaqya LLC, focused on delivering meaningful insights for doctors and healthcare teams in the USA.",
      features: [
        "Patient analytics and performance metrics",
        "Referral and treatment tracking",
        "Visual reports with charts and trends",
        "Doctor-friendly UI with clear data hierarchy",
        "Secure and scalable dashboard architecture",
      ],
      impact: [
        "Clear visibility into patient data",
        "Faster insights for decision-making",
        "Improved reporting accuracy and usability",
      ],
      platform: "Advanced Analytics Web Dashboard",
    },
    custom: {
      title: "Shoolin – CRM System Development",
      subtitle: "Commercial Kitchen Equipment",
      description:
        "For Shoolin, we built a fully customized CRM to manage leads, customers, and sales operations for a B2B environment.",
      features: [
        "Lead and customer management dashboard",
        "Sales pipeline tracking",
        "Follow-ups, reminders, and status updates",
        "Analytics for orders and customer activity",
        "Clean UI designed for daily operational use",
      ],
      impact: [
        "Better lead tracking and follow-ups",
        "Improved sales team efficiency",
        "Centralized customer data for faster actions",
      ],
      platform: "Custom CRM Web Application",
    },
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <React.Fragment>
      <main className="e-commerce-devlopment-main-page">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="py-24 hero-web-dev">
            <div className="row">
              {/* Right Column - Client Logos */}
              <div className="col-md-6 col-lg-9 col-sm-12 video-div">
                <div className="video-container">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-100 h-auto rounded-lg"
                  >
                    <source
                      src="/Tous-Web-shopify -video.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>

                  {/* Sound Toggle Button */}
                  <button
                    onClick={toggleMute}
                    className="video-sound-toggle"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              {/* Left Column - Content */}
              <div className="col-md-6 col-lg-3 col-sm-12 left-banner ">
                <h1 className="main-section-heading mt-5! mb-3!" id="noLine">
                  Build High-Converting E-Commerce Stores That Scale
                </h1>
                <p className="mb-6">
                  We build secure, high-performance eCommerce websites that
                  convert, scale effortlessly, and drive measurable business
                  growth.
                </p>

                <Link href="/quote" className="inline-block c_button_black">
                  Start a Project
                </Link>
              </div>
            </div>
          </section>

          {/* Build with  */}

          <section className="build-with-section pb-5">
            <h3 className="main-section-heading text-center " id="devHeading">
              Platforms{" "}
            </h3>
            <p>
              <span>
                {" "}
                We develop high-performing eCommerce websites using proven
                platforms and custom technologies—chosen based on your business
                goals, scalability needs, and budget.
              </span>
              <br />
              <strong>
                Click on any platform below to learn more about our development
                approach and use cases.
              </strong>
            </p>
            <div className="image-content">
              <div className="wordpress">
                <Link
                  href="/tech-solution/shopify-development"
                  className="inline-block "
                >
                  <Image
                    src={wodpressicon}
                    width={100}
                    height={100}
                    alt="Shopify Development"
                  />
                  Wordpress
                </Link>
              </div>
              <div className="shopify">
                <Link
                  href="/tech-solution/shopify-development"
                  className="inline-block"
                >
                  <Image
                    src={shopfiyicon}
                    width={100}
                    height={100}
                    alt="Shopify Development"
                  />
                  Shopify
                </Link>
              </div>
              <div className="custom">
                <Link
                  href="/tech-solution/web-development"
                  className="inline-block "
                >
                  {" "}
                  <Image
                    src={customicon}
                    width={100}
                    height={100}
                    alt="Shopify Development"
                  />
                  Custom
                </Link>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <h3 className="main-section-heading" id="devHeading">
            Our Development Process
          </h3>
          <section className="py-24 bg-gray-50 -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8 our-process-web-dev">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-4 gap-12 content-wrapper">
                <div className="content-div">
                  <span className="text-6xl font-bold text-gray-200">01</span>
                  <h3 className="inner-heading">01. Strategy & Planning</h3>
                  <div className="process-text-wrapper">
                    <p
                      className={`process-text ${
                        expandedProcesses[0] ? "expanded" : ""
                      }`}
                    >
                      We begin with an in-depth analysis of your business goals,
                      target audience, product catalog, and competitive
                      landscape. Based on this, we prepare a strategy that
                      drives maximum conversions and ROI.
                    </p>
                    <button
                      onClick={() =>
                        setExpandedProcesses((prev) => ({
                          ...prev,
                          0: !prev[0],
                        }))
                      }
                      className="read-more-btn"
                    >
                      {expandedProcesses[0] ? "Show Less" : "Read More"}
                    </button>
                  </div>
                </div>
                <div className="content-div">
                  <span className="text-6xl font-bold text-gray-200">02</span>
                  <h3 className="inner-heading">02. Design & UX</h3>
                  <div className="process-text-wrapper">
                    <p
                      className={`process-text ${
                        expandedProcesses[1] ? "expanded" : ""
                      }`}
                    >
                      Our designers create responsive, SEO-optimized eCommerce
                      UI tailored to your brand, with intuitive navigation,
                      persuasive product pages, and strategic calls-to-action.
                    </p>
                    <button
                      onClick={() =>
                        setExpandedProcesses((prev) => ({
                          ...prev,
                          1: !prev[1],
                        }))
                      }
                      className="read-more-btn"
                    >
                      {expandedProcesses[1] ? "Show Less" : "Read More"}
                    </button>
                  </div>
                </div>
                <div className="content-div">
                  <span className="text-6xl font-bold text-gray-200">03</span>
                  <h3 className="inner-heading">
                    03. Development & Integration
                  </h3>
                  <div className="process-text-wrapper">
                    <p
                      className={`process-text ${
                        expandedProcesses[2] ? "expanded" : ""
                      }`}
                    >
                      We develop your store with clean, scalable code, integrate
                      payment systems, connect analytics tools, and ensure
                      seamless workflow automation across systems.
                    </p>
                    <button
                      onClick={() =>
                        setExpandedProcesses((prev) => ({
                          ...prev,
                          2: !prev[2],
                        }))
                      }
                      className="read-more-btn"
                    >
                      {expandedProcesses[2] ? "Show Less" : "Read More"}
                    </button>
                  </div>
                </div>
                <div className="content-div">
                  <span className="text-6xl font-bold text-gray-200">04</span>
                  <h3 className="inner-heading">04. Testing & Launch</h3>
                  <div className="process-text-wrapper">
                    <p
                      className={`process-text ${
                        expandedProcesses[3] ? "expanded" : ""
                      }`}
                    >
                      Every store is rigorously tested — including performance,
                      security, cross-device responsiveness, and checkout flows
                      — before launch. Post-launch monitoring ensures continuous
                      growth.
                    </p>
                    <button
                      onClick={() =>
                        setExpandedProcesses((prev) => ({
                          ...prev,
                          3: !prev[3],
                        }))
                      }
                      className="read-more-btn"
                    >
                      {expandedProcesses[3] ? "Show Less" : "Read More"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-24 max-w-7xl mx-auto what-we-offer-web-dev">
            <h3 className="main-section-heading mb-12" id="devHeading">
              Our E-Commerce Development Services
            </h3>
            <div className="grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 content-wrapper">
              {/* Service 1: Custom Shopify Store Development */}
              <div className="content-div">
                <div
                  className={`border-div lg:h-[10rem] border-2 border-gray-200 rounded-0 overflow-hidden ${
                    activeService === 0 ? "!border-b-0 active-gradient" : ""
                  }`}
                >
                  <button
                    onClick={() =>
                      setActiveService(activeService === 0 ? null : 0)
                    }
                    className="w-full text-left p-6 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <svg
                          className="svg mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <h3 className="inner-heading">
                          Custom E-Commerce Store Development
                        </h3>
                      </div>
                      <svg
                        className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform ${
                          activeService === 0 ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300   ${
                    activeService === 0 ? "max-h-96 para-div" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p>
                      We build custom eCommerce websites designed around your business model, products, and customers. From intuitive UI/UX to secure checkout and scalable architecture, our stores are optimized for performance, conversions, and long-term growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 2: Shopify Theme Customization */}
              <div className="content-div ">
                <div
                  id="boxHeight"
                  className={`border-div lg:h-[10rem] border-2 border-gray-200 rounded-0 overflow-hidden ${
                    activeService === 1 ? "!border-b-0 active-gradient" : ""
                  }`}
                >
                  <button
                    onClick={() =>
                      setActiveService(activeService === 1 ? null : 1)
                    }
                    className="w-full text-left p-6 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <svg
                          className="svg mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                          />
                        </svg>
                        <h3 className="inner-heading">
                          E-Commerce Store Migration
                        </h3>
                      </div>
                      <svg
                        className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform ${
                          activeService === 1 ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeService === 1 ? "max-h-96 para-div" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p>
                     We ensure smooth and secure eCommerce migrations from any platform without data loss. Products, customers, orders, SEO URLs, and integrations are transferred seamlessly with minimal downtime and zero impact on sales.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 3: Shopify Plus Development */}
              <div className="content-div">
                <div
                  className={`border-div lg:h-[10rem] border-2 border-gray-200 rounded-0 overflow-hidden ${
                    activeService === 2 ? "!border-b-0 active-gradient" : ""
                  }`}
                >
                  <button
                    onClick={() =>
                      setActiveService(activeService === 2 ? null : 2)
                    }
                    className="w-full text-left p-6 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <svg
                          className="svg mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                          />
                        </svg>
                        <h3 className="inner-heading">
                          Payment Integrations
                        </h3>
                      </div>
                      <svg
                        className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform ${
                          activeService === 2 ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeService === 2 ? "max-h-96 para-div" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p>
                      We integrate secure and reliable payment gateways to enable smooth transactions across multiple payment methods. Our payment solutions ensure fast checkout, data security, and compliance, improving customer trust and conversion rates.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 4: Shopify Migration Services */}
              <div className="content-div">
                <div
                  className={`border-div lg:h-[10rem] border-2 border-gray-200 rounded-0 overflow-hidden ${
                    activeService === 3 ? "!border-b-0 active-gradient" : ""
                  }`}
                >
                  <button
                    onClick={() =>
                      setActiveService(activeService === 3 ? null : 3)
                    }
                    className="w-full text-left p-6 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <svg
                          className="svg mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                          />
                        </svg>
                        <h3 className="inner-heading">Third-Party Integrations</h3>
                      </div>
                      <svg
                        className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform ${
                          activeService === 3 ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300  ${
                    activeService === 3 ? "max-h-96 para-div" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p>
                     We connect your eCommerce store with CRM, ERP, marketing tools, analytics, and automation platforms to streamline operations, improve customer engagement, and support data-driven decision-making.
                    </p>
                  </div>
                </div>
              </div>
              {/* Service 5: Shopify Migration Services */}
              <div className="content-div">
                <div
                  className={`border-div lg:h-[10rem] border-2 border-gray-200 rounded-0 overflow-hidden ${
                    activeService === 4 ? "!border-b-0 active-gradient" : ""
                  }`}
                >
                  <button
                    onClick={() =>
                      setActiveService(activeService === 4 ? null : 4)
                    }
                    className="w-full text-left p-6 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <svg
                          className="svg mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M8 7h10M8 11h8m-8 4h6M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm17 6l3-3m0 0l-3-3m3 3H17"
                          />
                        </svg>
                        <h3 className="inner-heading">Logistics & Shipping Integration</h3>
                      </div>
                      <svg
                        className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform ${
                          activeService === 4 ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300  ${
                    activeService === 4 ? "max-h-96 para-div" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p>
                      We integrate shipping, logistics, and order fulfillment systems to automate shipping rates, tracking, and order updates. This helps reduce manual effort and deliver a seamless post-purchase experience for customers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 6: Shopify Migration Services */}
              <div className="content-div">
                <div
                  className={`border-div lg:h-[10rem] border-2 border-gray-200 rounded-0 overflow-hidden ${
                    activeService === 5 ? "!border-b-0 active-gradient" : ""
                  }`}
                >
                  <button
                    onClick={() =>
                      setActiveService(activeService === 5 ? null : 5)
                    }
                    className="w-full text-left p-6 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <svg
                          className="svg mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        <h3 className="inner-heading">E-Commerce Support & Optimization</h3>
                      </div>
                      <svg
                        className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform ${
                          activeService === 5 ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300  ${
                    activeService === 5 ? "max-h-96 para-div" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p>
                      We provide ongoing support, performance optimization, and feature enhancements to keep your eCommerce store fast, secure, and conversion-ready as your business scales.
                    </p>
                  </div>
                </div>
              </div>

              {/*  */}
            </div>
          </section>
          {/* Why Choose Us */}
          <section className="py-24 max-w-7xl mx-auto why-choose-us-web-dev">
            <div className="mb-12">
              <h3 className="main-section-heading" id="devHeading">
                Why Choose Us for Your E-Commerce Website Development?
              </h3>
              <p className="why-para">
                What sets us apart from other development agencies
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 content-wrapper">
              {/* Card 1: E-Commerce Expertise */}
              <div className="bg-gray-100 rounded-0 p-8 hover:bg-gray-100 transition-colors inner-div">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-black rounded-0 flex items-center justify-center mb-2">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="inner-heading">Results-Driven Architecture</h3>
                <p className="text-sm text-gray-500 mb-3">
                  142+ high-performance web applications delivered since 2018
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[0] ? "expanded" : ""
                    }`}
                  >
                    We focus on fast load times, search engine visibility, and
                    high conversion rates, ensuring your store ranks and
                    performs well
                  </p>
                  <button
                    onClick={() =>
                      setExpandedWhyChoose((prev) => ({ ...prev, 0: !prev[0] }))
                    }
                    className="read-more-btn"
                  >
                    {expandedWhyChoose[0] ? "Show Less" : "Read More"}
                  </button>
                </div>
              </div>

              {/* Card 2: Performance & Speed */}
              <div className="bg-gray-100 rounded-0 p-8 hover:bg-gray-100 transition-colors inner-div">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-black rounded-0 flex items-center justify-center mb-2">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="inner-heading">
                  SEO & Mobile-First Optimization
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  90+ PageSpeed scores consistently
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[1] ? "expanded" : ""
                    }`}
                  >
                    Every store follows the latest eCommerce SEO best practices,
                    with keyword-rich URLs, metadata, structured data, and
                    mobile readiness for improved rankings.
                  </p>
                  <button
                    onClick={() =>
                      setExpandedWhyChoose((prev) => ({ ...prev, 1: !prev[1] }))
                    }
                    className="read-more-btn"
                  >
                    {expandedWhyChoose[1] ? "Show Less" : "Read More"}
                  </button>
                </div>
              </div>

              {/* Card 3: Scalable Architecture */}
              <div className="bg-gray-100 rounded-0 p-8 hover:bg-gray-100 transition-colors inner-div">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-black rounded-0 flex items-center justify-center mb-2">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="inner-heading">Continuous Support & Growth</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Technologies major brands trust
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[2] ? "expanded" : ""
                    }`}
                  >
                    We don’t just build your store — we support you with
                    performance tuning, feature enhancements, and analytics
                    insights to sustain long-term revenue growth.
                  </p>
                  <button
                    onClick={() =>
                      setExpandedWhyChoose((prev) => ({ ...prev, 2: !prev[2] }))
                    }
                    className="read-more-btn"
                  >
                    {expandedWhyChoose[2] ? "Show Less" : "Read More"}
                  </button>
                </div>
              </div>

              {/* Card 4: Full-Service Partnership */}
              <div className="bg-gray-100 rounded-0 p-8 hover:bg-gray-100 transition-colors inner-div">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-black rounded-0 flex items-center justify-center mb-2">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="inner-heading">Scalable & Secure Development</h3>
                <p className="text-sm text-gray-500 mb-3">
                  15+ specialists across design, dev, and marketing
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[3] ? "expanded" : ""
                    }`}
                  >
                    Our eCommerce websites are built with scalable architecture
                    and enterprise-grade security, ensuring smooth performance
                    during high traffic, secure transactions, and the
                    flexibility to grow as your business expands.
                  </p>
                  <button
                    onClick={() =>
                      setExpandedWhyChoose((prev) => ({ ...prev, 3: !prev[3] }))
                    }
                    className="read-more-btn"
                  >
                    {expandedWhyChoose[3] ? "Show Less" : "Read More"}
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* Stats Section */}
          <section className="py-24 -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8 stats-web-dev mb-5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 content">
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                  Our Track Record
                </p>
                <h2 className="main-section-heading" id="devHeading">
                  Proven Track Record in E-Commerce Development
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Since 2018, we&apos;ve partnered with businesses across India
                  and internationally to deliver high-performance websites that
                  drive real results.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-12 md:gap-16 numbers">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold mb-3">142+</div>
                  <p className="inner-heading">Web/Mobile Apps Delivered</p>
                  <p className="text-sm text-gray-500">
                    E-commerce & corporate sites launched since 2018
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold mb-3">7+</div>
                  <p className="inner-heading">Years of Excellence</p>
                  <p className="text-sm text-gray-500">
                    Trusted development partner for growing brands
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold mb-3">15+</div>
                  <p className="inner-heading">Development Specialists</p>
                  <p className="text-sm text-gray-500">
                    Designers, developers, strategists & support team
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-24 max-w-7xl mx-auto mt-5 mb-5 web-dev-tabs">
            <h3 className="main-section-heading">Our Projects</h3>
            <div className="mb-12">
              {/* Tab Navigation */}

              <Swiper
                className="flex items-center justify-start! gap-4 flex-wrap transition-all duration-500 mb-5 mySwiper"
                breakpoints={{
                  0: {
                    slidesPerView: 2.5,
                    spaceBetween: 15,
                  },
                  640: {
                    slidesPerView: 2.5,
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 6,
                    spaceBetween: 15,
                  },
                }}
              >
                {portfolioTabs.map((tab) => (
                  <SwiperSlide key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-2 py-2 rounded-full text-sm font-medium transition-all duration-500 w-full ${
                        activeTab === tab.id
                          ? "bg-black text-white duration-500 px-3"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200 duration-500 px-3"
                      }`}
                    >
                      {tab.label}
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Content Area */}
              <div className="grid md:grid-cols-2 gap-13 items-center">
                {/* Left Content */}
                <div className="order-2 md:order-1 overflow-hidden">
                  <div key={activeTab} className="animate-fadeSlideIn">
                    <h2 className="inner-heading !text-xl">
                      {portfolioContent[activeTab].title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-2">
                      Industry: {portfolioContent[activeTab].subtitle}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      Platform: {portfolioContent[activeTab].platform}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      {portfolioContent[activeTab].description}
                    </p>

                    <div className="mb-6">
                      <h4 className="inner-heading leading-[auto]">
                        What We Delivered:
                      </h4>
                      <ul className="space-y-2">
                        {portfolioContent[activeTab].features.map(
                          (feature, index) => (
                            <li key={index} className="flex items-start">
                              <svg
                                className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-green-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-6 pt-0">
                      <h4 className="inner-heading mb-2">Impact:</h4>
                      <div className="space-y-1">
                        {portfolioContent[activeTab].impact.map(
                          (item, index) => (
                            <p key={index} className="text-gray-700">
                              • {item}
                            </p>
                          )
                        )}
                      </div>
                    </div>

                    <Link
                      href="/quote"
                      className="inline-block c_button_black mt-4"
                    >
                      Start Your Project
                    </Link>
                  </div>
                </div>

                {/* Right Content - Projects */}
                <div className="order-1 md:order-2">
                  <div className="relative">
                    {/* Phone Mockup Container */}
                    <div className="relative mx-auto max-w-sm">
                      {/* Phone Frame */}
                      <div className=" ">
                        <div className="relative mx-auto">
                          <div className="rounded-lg overflow-hidden">
                            <video
                              key={activeTab}
                              autoPlay
                              loop
                              muted
                              playsInline
                              preload="auto"
                              className="shadow"
                            >
                              <source
                                src={
                                  activeTab === "customized"
                                    ? "/silvago.mp4"
                                    : activeTab === "tailored"
                                    ? "/KB Crm.mp4"
                                    : activeTab === "coaches"
                                    ? "/Vaqya.mp4"
                                    : "/vis.mp4"
                                }
                                type="video/mp4"
                              />
                            </video>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Feature Inclusions */}
          <section className="py-24 bg-white standard-feature pt-2 mb-5">
            <div className="container">
              <div className="row">
                {/* Right Column - Client Logos */}
                <div className="col-md-6 col-lg-6 col-sm-12 left-div">
                  <h2 className="main-section-heading mb-4" id="devHeading">
                    Does This Sound Like Your E-Commerce Business?
                  </h2>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mt-1 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Your online store looks good, but visitors aren’t
                        converting into buyers
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mt-1 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Customers abandon carts due to confusing navigation or
                        checkout flow
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mt-1 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Your eCommerce website is slow, hurting SEO rankings and
                        sales
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mt-1 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Managing products, inventory, and orders feels manual
                        and time-consuming
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mt-1 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Mobile shoppers struggle with usability and checkout
                        experience
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mt-1 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Your store can’t handle growth in traffic, products, or
                        orders
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mt-1 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Payment gateways or shipping integrations are unreliable
                        or insecure
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mt-1 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        You lack automation for order updates, cart recovery,
                        and customer engagement
                      </span>
                    </li>
                  </ul>
                  <Link
                    href="/quote"
                    className="inline-block c_button_black mt-4"
                  >
                    Get Started
                  </Link>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12 right-div">
                  <div className="img-div">
                    <Image
                      src={painPoints}
                      width={500}
                      height={500}
                      alt="E-Commerce Development Challenges"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* FAQs */}
          <h3 className="main-section-heading " id="devHeading">
            Frequently Asked Questions
          </h3>
          <section className="py-24 bg-gray-50 -mx-4 md:-mx-6 lg:-mx-8 md:px-6 lg:px-8 faq-web-dev">
            <div className="max-w-7xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-0">
                    <button
                      onClick={() =>
                        setActiveFaq(activeFaq === index ? null : index)
                      }
                      className="w-full flex items-center justify-between text-left py-2 transition-opacity"
                    >
                      <span className="text-xl md:text-2xl font-light pr-8 inner-heading">
                        {faq.question}
                      </span>
                      <svg
                        className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                          activeFaq === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        activeFaq === index
                          ? "max-h-96 opacity-100 pb-4"
                          : "max-h-0 opacity-0.75"
                      }`}
                    >
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      {/* Final CTA */}
      <section className="webDevCta last-section-of-every-page">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="p">
                Together, let&apos;s have a quantifiable effect on your company.
              </div>
              <Link href="/quote">Design A Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default WebDevelopment;
