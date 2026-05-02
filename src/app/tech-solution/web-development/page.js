"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import usePageTitle from "@/hooks/usePageTitle";

import "./style.css";
import painPoints from "../../../../public/pain-point-of-shopify-dev.webp";
import { Swiper, SwiperSlide } from "swiper/react";

const webDevFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the typical timeline for a website project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Business websites typically ship in 4-8 weeks from kickoff, depending on scope and content readiness. Custom-coded PHP or React builds take longer than WordPress, but the performance and scalability gains are worth it.",
      },
    },
    {
      "@type": "Question",
      name: "Why custom code instead of WordPress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WordPress comes with trade-offs: plugin dependencies, security updates, performance overhead, and template lock-in. For businesses that need real performance, control, and scalability, custom-coded sites in PHP or React are a better investment.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer revisions during development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Two rounds of major design revisions and unlimited minor revisions during the design phase are included. We use clickable prototypes before development starts.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies do you build with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PHP for content-driven sites. React and Next.js for high-performance frontends. Node.js for backend APIs. MySQL for databases. WordPress as a headless CMS when content management is critical.",
      },
    },
    {
      "@type": "Question",
      name: "What about ongoing support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "30 days of post-launch support is included. Beyond that, you can engage us for ongoing maintenance and feature additions on a monthly retainer or per-project basis.",
      },
    },
    {
      "@type": "Question",
      name: "Can you migrate my existing website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We've migrated sites across platforms — WordPress, Wix, Squarespace, custom builds — preserving content, products, customer data, and SEO redirects.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle SEO and content too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On-page SEO, schema markup, and structured data are standard with every build. For ongoing content creation, we partner with specialists, but the technical SEO foundation is always built in.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with international clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our work spans India and the US, with clients across used auto parts, healthcare, manufacturing, and other markets.",
      },
    },
  ],
};

const WebDevelopment = () => {
  usePageTitle("Custom Website Development for B2B Businesses | The Tous");

  const videoRef = React.useRef(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const [activeTab, setActiveTab] = useState("customized");
  const [expandedProcesses, setExpandedProcesses] = useState({});
  const [expandedWhyChoose, setExpandedWhyChoose] = useState({});
  const [isMuted, setIsMuted] = useState(true);
  const [activeRealEstate, setActiveRealEstate] = useState(null);
  const faqs = [
    {
      question: "What's the typical timeline for a website project?",
      answer:
        "Business websites typically ship in 4-8 weeks from kickoff, depending on scope and content readiness. Custom-coded PHP or React builds take longer than WordPress, but the performance and scalability gains are worth it. Migration projects vary based on data volume and SEO complexity.",
    },
    {
      question: "Why custom code instead of WordPress?",
      answer:
        "WordPress is great for some projects, but it comes with trade-offs: plugin dependencies, security updates, performance overhead, and template lock-in. For businesses that need real performance, control, and long-term scalability, custom-coded sites in PHP or React are a better investment. We use WordPress as a CMS layer when content updating matters — but we don't build template-based WordPress sites anymore.",
    },
    {
      question: "Do you offer revisions during development?",
      answer:
        "Yes. Two rounds of major design revisions and unlimited minor revisions during the design phase are included. We use clickable prototypes before development starts, so most clients are happy with the direction before we write a single line of code.",
    },
    {
      question: "What technologies do you build with?",
      answer:
        "PHP for content-driven sites and backend logic. React and Next.js for high-performance frontends. Node.js for backend APIs when needed. MySQL for databases. WordPress as a headless CMS when content management is critical. We pick the stack based on the project's needs, not a one-size-fits-all approach.",
    },
    {
      question: "What about ongoing support after launch?",
      answer:
        "30 days of post-launch support is included with every project. Beyond that, you can engage us for ongoing maintenance, optimization, and feature additions on a monthly retainer or per-project basis. Most of our clients have been with us for years, not weeks.",
    },
    {
      question: "Can you migrate my existing website?",
      answer:
        "Yes. We've migrated sites across platforms — WordPress, Wix, Squarespace, custom builds — preserving content, products, customer data, and SEO redirects. The goal is zero traffic loss during migration.",
    },
    {
      question: "Do you handle SEO and content too?",
      answer:
        "Yes. On-page SEO, schema markup, and structured data are standard with every build — not extras. For ongoing content creation and link building, we partner with specialists, but the technical SEO foundation is always built into the website itself.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes. Our work spans India and the US, with clients across used auto parts, healthcare, manufacturing, and other markets. We handle international payment integrations, multi-region SEO, and timezone-friendly communication.",
    },
  ];

  const portfolioTabs = [
    { id: "customized", label: "SSR Dies & Moulds" },
    { id: "tailored", label: "UsedEngines4Cars" },
    { id: "coaches", label: "Smartrays" },
    { id: "custom", label: "Svaa" },
    { id: "boxika", label: "Boxika" },
  ];

  const portfolioContent = {
    customized: {
      title: "SSR Dies and Moulds —  OEM Manufacturer Website",
      title: "SSR Dies and Moulds —  OEM Manufacturer Website",
      subtitle: "Plastic OEM Manufacturing",
      description:
        "SSR manufactures plastic casings for geysers, coolers, and consumer appliances — supplying major appliance brands across India. Their target buyers are procurement managers and engineering teams who need detailed product information fast, on any device.",
      features: [
        "Custom-coded PHP website (no WordPress)",
        "Product catalog with detailed manufacturing specifications",
        "Clean information architecture for technical buyers",
        "Fast load times across desktop and mobile",
        "On-page SEO and schema markup",
      ],
      impact: [
        "A professional digital presence that matches the credibility their offline sales team has built — making it easier for B2B buyers to evaluate them online before reaching out.",
      ],
      platform: "Custom-Coded Website (PHP)",
    },
    tailored: {
      title: "UsedEngines4Cars — US Used Engine Marketplace",
      subtitle: "Used Engine Marketplace (USA)",
      description:
        "A US-based business serving customers looking for used engines and transmissions. The challenge: capturing detailed inquiry information and ranking organically for high-intent searches in a competitive market across the United States.",
      features: [
        "WordPress site with detailed engine inquiry forms",
        "On-page SEO targeting US-based engine search terms",
        "Mobile-optimized inquiry flow (most traffic is mobile)",
        "Schema markup for product listings",
        "Structured for high search visibility in the US market",
      ],
      impact: [
        "Steady stream of organic leads month-on-month from US-based searches. Demonstrates our work isn't limited to the Indian market — we understand international SEO and US buyer behavior.",
      ],
      platform: "WordPress + SEO Lead Capture",
    },
    coaches: {
      title: "Smartrays — Commercial Solar Lead Generation",
      subtitle: "Commercial Solar Panel Solutions",
      description:
        "Smartrays installs commercial solar panels for businesses across India. They needed a website that would convert site visitors into qualified solar installation inquiries — not just a brochure for an industry where buyers are doing serious research before committing.",
      features: [
        "Mobile-responsive WordPress site with custom design",
        "SEO-optimized service pages targeting commercial solar buyers",
        "Lead capture forms designed for solar inquiry qualification",
        "Case study and project showcase sections",
        "Industry-specific content structure",
      ],
      impact: [
        "Smartrays continues to refer us to other businesses in their network. The site has been driving consistent inbound inquiries since launch.",
      ],
      platform: "WordPress Lead Generation Site",
    },
    custom: {
      title: "Svaa — Water Treatment Solutions",
      subtitle: "Water Treatment & Purification",
      description:
        "Svaa provides water treatment solutions for industrial and commercial clients. They needed a website that builds technical credibility while making it easy for buyers to inquire about specific solutions for their water treatment needs.",
      features: [
        "Custom-coded PHP website built for performance",
        "Solution-specific pages for different water treatment use cases",
        "Inquiry flow designed to capture technical buyer details",
        "Email support integration with the inquiry forms",
        "Clean, professional design matching B2B service positioning",
      ],
      impact: [
        "Svaa continues to send us referral business and ongoing leads from their network. The site has become a reliable lead source for their water treatment business.",
      ],
      platform: "Custom-Coded Website (PHP)",
    },
    boxika: {
      title: "Boxika — Corrugated Packaging Manufacturer",
      subtitle: "Corrugated Packaging Manufacturing",
      description:
        "Boxika manufactures corrugated packaging for businesses across multiple sectors. In a commodity industry where most competitor websites look identical, Boxika needed a site that visually stood out and communicated quality and reliability.",
      features: [
        "Visually rich WordPress design that stands out in the industry",
        "Product showcase pages for different packaging categories",
        "Lead capture forms for bulk packaging inquiries",
        "Mobile-responsive design for buyers on the go",
        "Brand-aligned visual storytelling",
      ],
      impact: [
        "A standout website in a commodity industry that has helped Boxika differentiate from competitors. They continue to send us referral business based on the quality of the build.",
      ],
      platform: "WordPress Business Website",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webDevFaqSchema) }}
      />
      <main className="web-devlopment-main-page">
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
                  Custom-coded websites for businesses that need more than a
                  template
                </h1>
                <p className="mb-6">
                  PHP and React websites built for performance, SEO, and lead
                  generation. WordPress as a CMS layer when content control
                  matters. Designed for B2B businesses, manufacturers, and
                  service companies that need a site that actually works.
                </p>
                <p className="mb-6">
                  Websites delivered for solar, manufacturing, water treatment,
                  used auto parts, and packaging brands across India and the US.
                </p>

                <Link
                  href="/book-a-call"
                  className="inline-block c_button_black"
                >
                  Book a Discovery Call →
                </Link>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-24 max-w-7xl mx-auto what-we-offer-web-dev">
            <h3 className="main-section-heading mb-12" id="devHeading">
              Our web development services
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 content-wrapper">
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
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                        <h3 className="inner-heading">Custom-Coded Websites</h3>
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
                      PHP and React websites built from scratch for performance,
                      control, and scale. No template lock-in, no plugin bloat.
                      We write clean code that loads fast, ranks well, and grows
                      with your business.
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
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        <h3 className="inner-heading">WordPress as CMS</h3>
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
                      For content-heavy businesses that need easy updates, we
                      use WordPress as a headless CMS layer paired with
                      custom-coded frontends. You get the editing flexibility
                      without the performance and security trade-offs of a
                      typical WordPress site.
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
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <h3 className="inner-heading">
                          Website Optimization & Migration
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
                      Already have a website that&apos;s slow, hard to maintain,
                      or built on the wrong platform? We audit, rebuild, and
                      migrate — preserving your data, content, and SEO rankings
                      while fixing the technical debt.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 4: Shopify Development */}
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
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                        <h3 className="inner-heading">Shopify Development</h3>
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
                  className={`overflow-hidden transition-all duration-300 ${
                    activeService === 3 ? "max-h-96 para-div" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p>
                      Custom Shopify store builds, conversion optimization, and
                      complete migrations for D2C brands. Custom themes, payment
                      integration, logistics setup, and on-page SEO — built for
                      stores that actually sell, not just look pretty.{" "}
                      <Link
                        href="/tech-solution/shopify-development"
                        className="underline"
                      >
                        Learn more →
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <h3 className="main-section-heading" id="devHeading">
            How we build
          </h3>
          <section className="py-24 bg-gray-50 -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8 our-process-web-dev">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-4 gap-12 content-wrapper">
                <div className="content-div">
                  <span className="text-6xl font-bold text-gray-200">01</span>
                  <h3 className="inner-heading">Discovery & Strategy</h3>
                  <div className="process-text-wrapper">
                    <p
                      className={`process-text ${
                        expandedProcesses[0] ? "expanded" : ""
                      }`}
                    >
                      We start by understanding your buyer — not your design
                      preferences. Who&apos;s visiting your site? What are they
                      searching for? What action do you want them to take?
                      Strategy first, then design, then code.
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
                      Wireframes, mockups, and clickable prototypes before any
                      code is written. You see exactly what we&apos;re building,
                      give feedback early, and we don&apos;t waste weeks coding
                      the wrong thing.
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
                  <h3 className="inner-heading">Development & Testing</h3>
                  <div className="process-text-wrapper">
                    <p
                      className={`process-text ${
                        expandedProcesses[2] ? "expanded" : ""
                      }`}
                    >
                      Clean PHP or React code, tested across devices, browsers,
                      and edge cases. SEO structure, schema markup, performance
                      optimization — all built in from day one, not bolted on
                      later.
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
                      Production deployment, analytics setup, and 30 days of
                      post-launch support included. We don&apos;t disappear
                      after handover — most of our clients come back for ongoing
                      work.
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
          {/* Why Choose Us */}
          <section className="py-24 max-w-7xl mx-auto why-choose-us-web-dev">
            <div className="mb-12">
              <h3 className="main-section-heading" id="devHeading">
                Why businesses choose The Tous for web development
              </h3>
              <p className="why-para">
                What makes us different from template agencies
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
                <h3 className="inner-heading">
                  We write code, not assemble templates
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  PHP, React, Next.js, Node.js
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[0] ? "expanded" : ""
                    }`}
                  >
                    Most agencies stitch together templates and plugins. We
                    write actual code — which means your site is faster, more
                    secure, easier to scale, and not locked into someone
                    else&apos;s framework. WordPress is used only when content
                    updating matters, and even then as a headless CMS.
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
                <h3 className="inner-heading">Performance is non-negotiable</h3>
                <p className="text-sm text-gray-500 mb-3">
                  90+ PageSpeed scores on our recent builds
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[1] ? "expanded" : ""
                    }`}
                  >
                    Page speed isn&apos;t a nice-to-have — it&apos;s a ranking
                    factor and a conversion factor. Our recent custom-coded
                    sites consistently hit 90+ PageSpeed scores out of the box,
                    without optimization plugins or caching tricks.
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
                <h3 className="inner-heading">
                  SEO is built in, not added later
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  On-page SEO, schema, structured data — all standard
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[2] ? "expanded" : ""
                    }`}
                  >
                    Every site we build ships with on-page SEO, schema markup,
                    structured data, and clean URL architecture. Our clients
                    show up in organic search months after launch, not just
                    because we promised they would.
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
                  Built for B2B and lead generation
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Manufacturing, solar, automotive, water, packaging clients
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[3] ? "expanded" : ""
                    }`}
                  >
                    We build websites that capture qualified inquiries — not
                    just look pretty. Our B2B clients across manufacturing,
                    solar, automotive, and industrial sectors trust us because
                    we understand how technical buyers evaluate vendors online.
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
                  Since 2018
                </p>
                <h2 className="main-section-heading" id="devHeading">
                  Building websites since 2018
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  B2B and service businesses across India and the US trust us to
                  build websites that drive real business.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-12 md:gap-16 numbers">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold mb-3">
                    150+
                  </div>
                  <p className="inner-heading">Websites Delivered</p>
                  <p className="text-sm text-gray-500">
                    Across manufacturing, energy, automotive, and services
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold mb-3">
                    Since 2018
                  </div>
                  <p className="inner-heading">Building Digital Products</p>
                  <p className="text-sm text-gray-500">
                    8 years of agency experience
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold mb-3">7</div>
                  <p className="inner-heading">Specialist Team Members</p>
                  <p className="text-sm text-gray-500">
                    Design, frontend, backend, and project management
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Real Estate Developer Section */}
          <section className="re-spotlight-section">
            <div className="re-spotlight-container">
              <div className="re-spotlight-header">
                <span className="re-spotlight-tag">INDUSTRY SPOTLIGHT</span>
                <h2 className="re-spotlight-heading">
                  Web development for B2B manufacturers
                </h2>
                <p className="re-spotlight-subtext">
                  We build websites for manufacturers, OEM suppliers, and B2B
                  service businesses — designed to convert technical buyers into
                  qualified inquiries. Manufacturing buyers don&apos;t shop on
                  Instagram. They Google specific terms, want clear product
                  specs, expect fast load times, and judge credibility within 5
                  seconds. Our manufacturing sites are built for that buyer.
                </p>
                <br />
                <p className="re-spotlight-subtext mt-4">
                  <strong>Recent build:</strong> SSR Dies and Moulds — plastic
                  OEM manufacturer for geyser and cooler casings. Custom-coded
                  in PHP, fast load times, ready for production-grade catalogs.
                </p>
              </div>

              <div className="re-spotlight-grid">
                {[
                  {
                    num: "01",
                    title: "Industry-specific product catalogs",
                    content:
                      "Detailed product pages with technical specs, capacity tables, and downloadable datasheets — structured for buyers who want answers before filling forms.",
                  },
                  {
                    num: "02",
                    title: "Lead-qualifying inquiry forms",
                    content:
                      "Quote request forms designed to capture the technical details that matter (volumes, specs, timelines, certifications), so your sales team isn't wasting time on tire-kickers.",
                  },
                  {
                    num: "03",
                    title: "SEO built for industrial searches",
                    content:
                      "Keyword research focused on industrial buyer intent, schema markup for products, and clear internal linking. Our manufacturing clients get organic leads months after launch.",
                  },
                  {
                    num: "04",
                    title: "Mobile-first technical browsing",
                    content:
                      "Manufacturing buyers are on mobile too. Our sites work as well on a phone in a factory as they do on a desktop in an office.",
                  },
                ].map((card, index) => (
                  <div
                    key={index}
                    className={`re-spotlight-card ${activeRealEstate === index ? "active" : ""}`}
                  >
                    <button
                      onClick={() =>
                        setActiveRealEstate(
                          activeRealEstate === index ? null : index,
                        )
                      }
                      className="re-spotlight-card-header"
                    >
                      <div className="re-spotlight-card-left">
                        <span className="re-spotlight-card-num">
                          {card.num}
                        </span>
                        <h3 className="re-spotlight-card-title">
                          {card.title}
                        </h3>
                      </div>
                      <svg
                        className={`re-spotlight-card-icon ${activeRealEstate === index ? "rotate" : ""}`}
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
                      className={`re-spotlight-card-body ${activeRealEstate === index ? "expanded" : ""}`}
                    >
                      <p>{card.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 max-w-7xl mx-auto mt-5 mb-5 web-dev-tabs">
            <h3 className="main-section-heading">
              Our web development projects
            </h3>
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
                          ),
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
                          ),
                        )}
                      </div>
                    </div>

                    <Link
                      href="/book-a-call"
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
                                    ? "/new-ssr.mp4"
                                    : activeTab === "tailored"
                                      ? "/new-engine.mp4"
                                      : activeTab === "coaches"
                                        ? "/new-smartrays.mp4"
                                        : "/new-svaa.mp4"
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
                    Does this sound like your business?
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
                        Your current website looks fine but isn&apos;t
                        generating qualified leads
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
                        Your site loads slowly on mobile, hurting both SEO and
                        conversions
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
                        You&apos;re stuck on a template that limits what you can
                        build or change
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
                        Plugin bloat is making your site slow, insecure, or hard
                        to maintain
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
                        Your B2B buyers leave because product information is
                        hard to find
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
                        Adding new content to your site requires a developer
                        every time
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
                        Your site doesn&apos;t reflect the credibility your
                        business has earned offline
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
                        You need a website that scales with your business, not
                        against it
                      </span>
                    </li>
                  </ul>
                  <Link
                    href="/book-a-call"
                    className="inline-block c_button_black mt-4"
                  >
                    Book a Discovery Call →
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
          <h3 className="main-section-heading faq-heading" id="devHeading">
            Frequently asked questions
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
              <Link href="/book-a-call">Book a Strategy Call</Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default WebDevelopment;
