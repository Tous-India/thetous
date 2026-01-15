"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./style.css";
import painPoints from "../../../../public/pain-point-of-shopify-dev.webp";
import { Swiper, SwiperSlide } from "swiper/react";
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
      question: "What's the typical timeline for a project?",
      answer:
        "Project timelines vary based on complexity and scope. A standard website typically takes 4-6 weeks, while complex web applications may require 8-12 weeks or more. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "We offer flexible pricing based on project scope and requirements. This includes fixed-price projects for defined scopes, hourly rates for ongoing work, and retainer packages for long-term partnerships. Contact us for a custom quote.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer:
        "Yes, we offer comprehensive post-launch support including maintenance, updates, security patches, and technical assistance. Support packages can be customized based on your needs.",
    },
    {
      question: "Can you work with our existing tech stack?",
      answer:
        "Absolutely. We're experienced with a wide range of technologies and can integrate with your existing systems, or recommend the best solutions for your specific requirements.",
    },
    {
      question: "What's included in your development process?",
      answer:
        "Our process includes discovery and planning, UI/UX design, development, testing and QA, deployment, and post-launch support. You'll have regular check-ins and full transparency throughout.",
    },
    {
      question: "Do you offer revisions during development?",
      answer:
        "Yes, we include revision rounds at key milestones to ensure the final product meets your expectations. The number of revisions depends on your project package.",
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
                      src="/The-Tous-Web-&-App-development.mp4"
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
                  Build Your E-Commerce Store Now
                </h1>
                <p className="mb-6">• CRM • Web Apps</p>
                <p>• Mobile Apps • Enterprise Portals</p>

                <Link href="/quote" className="inline-block c_button_black">
                  Start a Project
                </Link>
              </div>
            </div>
          </section>
          {/* Services Overview - 6 Item Accordion */}
          <section className="py-24 max-w-7xl mx-auto what-we-offer-web-dev">
            <h3 className="main-section-heading mb-12" id="devHeading">
              Our Web Development Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 content-wrapper">
              {/* Service 1: Web Application Development */}
              <div className="content-div border-2 border-gray-200 rounded-0 overflow-hidden">
                <button
                  onClick={() =>
                    setActiveService(activeService === 2 ? null : 2)
                  }
                  className="w-full text-left p-6  transition-colors"
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
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                      <h3 className="inner-heading">
                        Custom Web App Development
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
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeService === 2 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p>
                      Complex web applications and SaaS platforms built with
                      React, Next.js, Node.js, and modern frameworks. We develop
                      custom dashboards, booking systems, CRM tools, project
                      management platforms, and member portals that handle
                      thousands of concurrent users. Your web app will feature
                      real-time data synchronization, role-based access control,
                      API integrations, automated workflows, and responsive
                      interfaces that work flawlessly across devices while
                      maintaining enterprise-grade security and performance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 2: Mobile App Development */}
              <div className="content-div border-2 border-gray-200 rounded-0 overflow-hidden">
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
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      <h3 className="inner-heading">Mobile App Development</h3>
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
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeService === 3 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p>
                      Native iOS and Android applications built with React
                      Native, Flutter, or native technologies. We create mobile
                      experiences that seamlessly integrate with your web
                      platform, featuring offline functionality, push
                      notifications, GPS location services, and device-native
                      features. From consumer apps to enterprise solutions, our
                      mobile development ensures smooth performance, intuitive
                      interfaces, and consistent brand experience across all
                      devices while meeting App Store and Play Store guidelines.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 3: Custom E-Commerce Development */}
              <div className="content-div border-2 border-gray-200 rounded-0 overflow-hidden">
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
                        Custom E-Commerce Development
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
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeService === 0 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="">
                      Build high-converting online stores with Shopify,
                      WooCommerce, or custom platforms. We integrate secure
                      payment gateways (Razorpay, Stripe, PayPal), automated
                      inventory management, cart recovery systems, and
                      multi-channel selling capabilities. Your e-commerce site
                      will handle transactions smoothly, scale with growth, and
                      provide customers with seamless shopping experiences that
                      drive repeat purchases and reduce cart abandonment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 4: Corporate Website Development */}
              <div className="content-div border-2 border-gray-200 rounded-0 overflow-hidden">
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
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <h3 className="inner-heading">
                        Business Website Development
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
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeService === 1 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p>
                      Professional B2B and corporate websites designed to
                      establish credibility and generate qualified leads. We
                      create polished digital presences with intuitive
                      navigation, compelling service presentations, integrated
                      contact forms, and strategic CTAs. Perfect for consulting
                      firms, manufacturers, service providers, and professional
                      organizations looking to attract enterprise clients,
                      showcase expertise, and convert website visitors into
                      business opportunities through thoughtful design and
                      persuasive content architecture.
                    </p>
                  </div>
                </div>
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
                  <h3 className="inner-heading">Discover & Strategy</h3>
                  <div className="process-text-wrapper">
                    <p
                      className={`process-text ${
                        expandedProcesses[0] ? "expanded" : ""
                      }`}
                    >
                      Our strategists analyze your market position, competitor
                      landscape, and customer journey to identify conversion
                      opportunities. We define technical requirements, map user
                      flows, and establish clear project milestones that align
                      development with your business objectives.
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
                  <h3 className="inner-heading">Design & Prototype</h3>
                  <div className="process-text-wrapper">
                    <p
                      className={`process-text ${
                        expandedProcesses[1] ? "expanded" : ""
                      }`}
                    >
                      Our 15+ design specialists craft user-centered experiences
                      through wireframes, interactive prototypes, and visual
                      mockups. We validate designs with usability testing,
                      ensuring every element serves both aesthetic and
                      conversion goals before a single line of code is written.
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
                  <h3 className="inner-heading">Develop & Test</h3>
                  <div className="process-text-wrapper">
                    <p
                      className={`process-text ${
                        expandedProcesses[2] ? "expanded" : ""
                      }`}
                    >
                      With 7+ years of development expertise and 42+ successful
                      launches, our team builds robust, scalable solutions using
                      modern frameworks. We conduct rigorous QA testing across
                      devices, browsers, and real-world scenarios to ensure
                      flawless performance before launch.
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
                  <h3 className="inner-heading">Launch & Support</h3>
                  <div className="process-text-wrapper">
                    <p
                      className={`process-text ${
                        expandedProcesses[3] ? "expanded" : ""
                      }`}
                    >
                      We manage seamless deployment, configure analytics
                      tracking, and monitor performance metrics closely
                      post-launch. Our dedicated support team remains available
                      to address issues, implement optimizations, and ensure
                      your website continues delivering results as your business
                      grows.
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

          {/* Build with  */}

          <section className="build-with-section py-5">
            <h3 className="main-section-heading text-center " id="devHeading">
              Build With{" "}
            </h3>
            <div className="flex justify-center gap-5">
              <div className="wordpress">
                <Link
                  href="/tech-solution/shopify-development"
                  className="inline-block c_button_black"
                >
                  Wordpress
                </Link>
              </div>
              <div className="shopify">
                <Link
                  href="/tech-solution/shopify-development"
                  className="inline-block c_button_black"
                >
                  Shopify
                </Link>
              </div>
              <div className="custom">
                <Link
                  href="/tech-solution/shopify-development"
                  className="inline-block c_button_black"
                >
                  Custom
                </Link>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-24 max-w-7xl mx-auto why-choose-us-web-dev">
            <div className="mb-12">
              <h3 className="main-section-heading" id="devHeading">
                Why Choose The Tous for Web Development
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
                <h3 className="inner-heading">Web App–Focused Development</h3>
                <p className="text-sm text-gray-500 mb-3">
                  42+ high-performance web applications delivered since 2018
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[0] ? "expanded" : ""
                    }`}
                  >
                    We specialize in building high-performance web applications
                    designed to streamline operations, enhance user experience,
                    and support long-term scalability. Our web apps are
                    engineered with secure authentication, real-time data
                    handling, API integrations, and cloud-ready architectures to
                    meet modern business demands. From custom dashboards and
                    SaaS platforms to enterprise web portals, our solutions are
                    built to perform under real-world usage. Businesses using
                    our web applications have achieved 120–180% improvements in
                    workflow efficiency and user engagement within months of
                    deployment.
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
                <h3 className="inner-heading">Built for Speed & Performance</h3>
                <p className="text-sm text-gray-500 mb-3">
                  90+ PageSpeed scores consistently
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[1] ? "expanded" : ""
                    }`}
                  >
                    Speed is revenue. We build lightning-fast websites using
                    Next.js, optimized images, and efficient code that loads in
                    under 2 seconds. Every millisecond counts—faster sites rank
                    higher in Google, reduce bounce rates, and convert more
                    visitors into customers.
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
                <h3 className="inner-heading">Grows With Your Business</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Technologies major brands trust
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[2] ? "expanded" : ""
                    }`}
                  >
                    Your business won&apos;t stay the same size forever. We
                    build scalable solutions using React, Node.js, and cloud
                    infrastructure that handle traffic spikes effortlessly.
                    Whether you&apos;re adding 100 products or 10,000 customers,
                    your website architecture won&apos;t break under pressure.
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
                <h3 className="inner-heading">
                  End-to-End Development Partner
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  15+ specialists across design, dev, and marketing
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[3] ? "expanded" : ""
                    }`}
                  >
                    You get a complete team, not just developers. Our integrated
                    approach combines strategy, design, development, SEO, and
                    ongoing support under one roof. No coordination headaches,
                    no vendor juggling—just a single partnership that delivers
                    measurable results.
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
                  Proven Track Record in Web Development
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Since 2018, we&apos;ve partnered with businesses across India
                  and internationally to deliver high-performance websites that
                  drive real results.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-12 md:gap-16 numbers">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold mb-3">42+</div>
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
                      href="/contact"
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
                    Does This Sound Like Your Business?
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
                        Your web application looks fine, but users aren’t
                        completing key actions
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
                        Users drop off midway due to poor app flow or confusing
                        UX
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
                        Your web app is slow, affecting performance, SEO, and
                        user retention
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
                        Managing data, users, or workflows feels manual and
                        inefficient
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
                        Mobile users struggle with navigation and responsiveness
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
                        Your application can’t scale with increasing users or
                        traffic
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
                        API or payment integrations are unreliable or insecure
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
                        You lack automation for notifications, workflows, or
                        user engagement
                      </span>
                    </li>
                  </ul>
                  <Link
                    href="/contact"
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
                      alt="Web Development Challenges"
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
