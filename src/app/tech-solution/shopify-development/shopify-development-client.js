"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./style.css";
import Image from "next/image";

import painPoints from "../../../../public/pain-point-of-shopify-dev.webp";
import { Swiper, SwiperSlide } from "swiper/react";

const ShopifyDevelopment = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const [activeTab, setActiveTab] = useState("customized");
  const [expandedProcesses, setExpandedProcesses] = useState({});
  const [expandedWhyChoose, setExpandedWhyChoose] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = React.useRef(null);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          services: "Shopify Development",
        }),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setFormStatus(""), 3000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus(""), 3000);
      }
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus(""), 3000);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const faqs = [
    {
      question: "How much does a Shopify store cost?",
      answer:
        "Our typical Shopify builds range ₹50,000 to ₹2,00,000 depending on scope, custom features, and migration complexity. We provide a fixed quote after a 30-minute discovery call. No hourly billing surprises.",
    },
    {
      question: "How long does a Shopify build take?",
      answer:
        "Most builds ship in 3-5 weeks from kickoff. Migrations take 4-6 weeks. Conversion-only optimization projects (no rebuild) ship in 1-2 weeks.",
    },
    {
      question: "Do you build with custom code or use templates?",
      answer:
        "We start from a clean Shopify theme (Dawn or a premium base) and customize heavily — sections, layouts, product page logic. We don't use generic ready-made templates. Every store gets custom design and code where it matters.",
    },
    {
      question: "What apps do you typically use?",
      answer:
        "As few as possible. Apps slow stores down. We build features in code where it's cleaner — for example, custom upsells, product bundling, or filtering — and only use apps where they're genuinely better than custom (Klaviyo for email, Judge.me for reviews, Shipway for logistics).",
    },
    {
      question: "Do you handle SEO and ads after launch?",
      answer:
        "SEO yes — every store ships with on-page SEO, schema markup, and a content plan. For paid ads, we focus on conversion optimization within Shopify. If you need full ad management, we partner with specialist agencies.",
    },
    {
      question: "What if my store needs work after launch?",
      answer:
        "Every Shopify build comes with 30 days of post-launch support included. Beyond that, you can engage us for ongoing optimization on a monthly retainer or project basis.",
    },
    {
      question: "Can you migrate my existing Shopify or non-Shopify store?",
      answer:
        "Yes. We handle migrations from WooCommerce, Magento, Wix, Squarespace, and custom-built sites. Includes products, customers, orders, content, and SEO redirects to preserve search rankings.",
    },
    {
      question: "Do you work with international brands?",
      answer:
        "Yes. We've delivered for clients in the US (UsedEngines4Cars) and across India. Multi-currency, multi-language, and international shipping setup is part of our standard scope when needed.",
    },
  ];

  const portfolioTabs = [
    { id: "customized", label: "Silvago" },
    { id: "tailored", label: "Caselulu" },
    { id: "coaches", label: "Luxeliv" },
    { id: "custom", label: "Nestloom" },
    { id: "barebub", label: "Barebub" },
  ];

  const portfolioContent = {
    customized: {
      title: "Silvago — Minimal Silver Jewellery Brand",
      subtitle: "Industry: Silver Jewellery & Lifestyle, D2C",
      type: "Custom Shopify Store + Conversion Optimization",
      url: "https://silvago.in/",
      description:
        "Crafted a clean, aesthetic Shopify storefront for Silvago focused on premium minimal jewellery. Emphasis on elegant visuals, fast browsing, and conversion-focused product discovery.",
      deliverables: [
        "Custom responsive Shopify design aligned with brand identity",
        "High-impact product imagery, filtering & collection setup",
        "Setup of key KPIs: traffic sources, cart adds, checkouts & conversions",
        "Conversion optimization through Microsoft Clarity session analysis",
      ],
      impact:
        "Conversion lifted from 0.7% to 2.4% in 4 weeks through targeted UX changes — no redesign needed. Better navigation and product discovery led to stronger engagement and improved key ecommerce metrics.",
      cta: "Build Your Store →",
    },
    tailored: {
      title: "Caselulu — Mobile Accessories Brand",
      subtitle: "Industry: Mobile Accessories, D2C",
      type: "Complete Shopify Rebuild",
      url: null,
      description:
        "A phone case brand with a Shopify store killed by app bloat. 12+ apps doing the work of clean code, broken variant logic, and a 2.2 second mobile load time. We rebuilt it from the ground up.",
      deliverables: [
        "Complete Shopify rebuild with custom code replacing 12+ apps",
        "Fixed variant selection logic (was breaking on multiple devices)",
        "Removed fake countdown timers, broken upsells, and conversion-killing widgets",
        "Custom product page architecture for mobile-first browsing",
      ],
      impact:
        "Page load time dropped from 2.2 seconds to 1.4 seconds on mobile. Variant bugs eliminated. Cleaner, faster, more profitable store — no client pushback during the rebuild.",
      cta: "Optimize Your Store →",
    },
    coaches: {
      title: "Luxeliv — Premium Loungewear Brand",
      subtitle: "Industry: Loungewear & Apparel, D2C",
      type: "Custom Shopify Store",
      url: "https://luxeliv.com/",
      description:
        "Premium loungewear brand needed a Shopify store that matched the quality of their product. Editorial-style product layouts, high-AOV checkout flow, and a design built for Instagram traffic — where most premium D2C buyers come from.",
      deliverables: [
        "Editorial product page layouts with lifestyle imagery",
        "Custom Shopify theme aligned with premium positioning",
        "Mobile-optimized checkout for Instagram-sourced traffic",
        "Collection pages designed for category storytelling",
      ],
      impact:
        "A storefront that supports high-AOV positioning and converts premium-intent traffic from Instagram and lifestyle channels.",
      cta: "Build Your Store →",
    },
    custom: {
      title: "Nestloom — Home Decor & Furnishings",
      subtitle: "Industry: Home Decor, D2C",
      type: "Custom Shopify Store",
      url: null,
      description:
        "A Panipat-based home decor and furnishings brand needed a Shopify store that stands out in their regional market. Flagship-quality design, clean product photography display, and a structure built for category-heavy browsing.",
      deliverables: [
        "Custom Shopify design matching premium home decor positioning",
        "Category architecture for multi-product browsing",
        "Product detail pages designed for considered purchases",
        "Mobile-first responsive design",
      ],
      impact:
        "A storefront that elevates Nestloom's brand presence and matches the quality of established home decor brands online.",
      cta: "Build Your Store →",
    },
    barebub: {
      title: "Barebub — Baby Care Products",
      subtitle: "Industry: Baby Wipes, Skincare & Hygiene, D2C",
      type: "End-to-End Shopify Build",
      url: null,
      description:
        "New baby care brand launching with wipes, skincare, and hygiene products needed a complete Shopify setup ready for day-one operations — payment gateway, logistics, content, and SEO.",
      deliverables: [
        "Complete Shopify store build from scratch",
        "Payment gateway integration (Razorpay, COD, UPI)",
        "Logistics integration with shipping partners",
        "On-page SEO and product schema setup",
        "Ready for launch with all backend operations configured",
      ],
      impact:
        "A launch-ready Shopify store with all systems configured for day-one sales operations — not just a storefront, but a complete ecommerce setup.",
      cta: "Build Your Store →",
    },
  };

  return (
    <React.Fragment>
      <main className=" shopify-devlopment-main-page">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="py-24 hero-web-dev">
            <div className="row">
              {/* Left Column - Video */}
              <div className="col-md-6 col-lg-5 col-sm-12">
                <div className="video-container">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-100 h-auto rounded-lg"
                  >
                    <source src="/new-Shopify Page.mp4" type="video/mp4" />
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

              {/* Right Column - Content */}
              <div className="col-md-6 col-lg-6 col-sm-12 right-banner">
                <h1 className="main-section-heading mb-3!" id="noLine">
                  High-converting Shopify stores for D2C brands
                </h1>
                <p className="mb-6">
                  <strong>
                    Custom builds, conversion optimization, and complete
                    migrations. Built for founders who want a store that
                    actually sells, not just looks pretty.
                  </strong>
                </p>
                <p className="mb-6">
                  Shopify stores delivered for jewellery, home decor, baby care,
                  fashion, and mobile accessories brands.
                </p>

                <Link
                  href="/book-a-call"
                  className="inline-block c_button_black"
                >
                  Book a Strategy Call →
                </Link>
                <Link href="#portfolio-tabs" className="portfolio-button">
                  View Our Portfolio
                  <i className="ri-corner-right-down-line"></i>
                </Link>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-24 max-w-7xl mx-auto what-we-offer-web-dev">
            <h3 className="main-section-heading mb-12" id="devHeading">
              Our Shopify development services
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
                          Custom Shopify Store Builds
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
                      End-to-end Shopify development for D2C brands launching or
                      rebuilding. Custom theme, payment integration, logistics
                      setup, on-page SEO, ready to scale.
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
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          />
                        </svg>
                        <h3 className="inner-heading">
                          Shopify Conversion Optimization
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
                      Already on Shopify but conversion is below 2%? We audit,
                      fix the broken pieces (bloated apps, slow load times, weak
                      product pages, leaky checkouts), and ship a faster,
                      cleaner store.
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
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        <h3 className="inner-heading">Shopify Migrations</h3>
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
                      Moving from WooCommerce, Wix, Magento, or a custom-built
                      store? We handle complete migration including products,
                      customers, orders, SEO redirects, and design rebuild.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <h3 className="main-section-heading mb-5" id="devHeading">
            How we build Shopify stores
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
                      We start by understanding your customer, not just your
                      design preferences. What are they searching for? Where do
                      they drop off? What competitors are they comparing you to?
                      Strategy first, design second.
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
                  <h3 className="inner-heading">Build the website</h3>
                  <div className="process-text-wrapper">
                    <p
                      className={`process-text ${
                        expandedProcesses[1] ? "expanded" : ""
                      }`}
                    >
                      Custom theme, fast load times, mobile-first, on-page SEO,
                      payment and logistics integration. We build for
                      performance, not pretty mockups that don&apos;t convert.
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
                  <h3 className="inner-heading">Launch & Track</h3>
                  <div className="process-text-wrapper">
                    <p
                      className={`process-text ${
                        expandedProcesses[2] ? "expanded" : ""
                      }`}
                    >
                      Analytics, heatmaps (Microsoft Clarity), and conversion
                      tracking set up before launch. So we know what&apos;s
                      happening from day one, not three months in.
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
                  <h3 className="inner-heading">Optimize & Support</h3>
                  <div className="process-text-wrapper">
                    <p
                      className={`process-text ${
                        expandedProcesses[3] ? "expanded" : ""
                      }`}
                    >
                      First 30 days post-launch are about watching real behavior
                      and fixing what doesn&apos;t work. Most agencies stop
                      here. We treat this as the most important phase.
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
                Why D2C brands choose The Tous for Shopify
              </h3>
              <p className="why-para">
                What makes us different from other Shopify agencies
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 content-wrapper">
              {/* Card 1: Shopify Expertise */}
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
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="inner-heading">
                  We don&apos;t disappear after launch
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  30 days post-launch optimization included
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[0] ? "expanded" : ""
                    }`}
                  >
                    Most agencies build the store, hand over keys, and move on.
                    We monitor real user behavior, A/B test what&apos;s not
                    working, and keep optimizing — because launch day is the
                    start, not the finish.
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

              {/* Card 2: Conversion Focused */}
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
                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="inner-heading">
                  Performance is built in, not bolted on
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Sub-1.5 second load times on mobile
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[1] ? "expanded" : ""
                    }`}
                  >
                    Page speed, mobile UX, SEO structure, and conversion logic
                    are baked into how we build — not features we add later.
                    Most of our stores load under 1.5 seconds on mobile.
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

              {/* Card 3: Fast & Scalable */}
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
                <h3 className="inner-heading">We say no to bad ideas</h3>
                <p className="text-sm text-gray-500 mb-3">
                  12+ apps removed from Caselulu in our last rebuild
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[2] ? "expanded" : ""
                    }`}
                  >
                    If a feature won&apos;t help conversion or operations,
                    we&apos;ll tell you. We&apos;ve seen Shopify stores killed
                    by 12+ apps doing what 1 line of code can do better. We
                    optimize for what works, not what&apos;s trendy.
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

              {/* Card 4: Real conversion data */}
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
                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="inner-heading">
                  Real conversion data, not vanity metrics
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Silvago: 0.7% → 2.4% in 4 weeks
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[3] ? "expanded" : ""
                    }`}
                  >
                    We don&apos;t chase visual trends. We watch real session
                    recordings, identify drop-off points, and fix what&apos;s
                    actually losing you sales. Numbers above are from a real
                    client, not industry averages.
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

          {/* Portfolio Section (moved to position 5) */}
          <section
            className="py-24 max-w-7xl mx-auto mt-5 web-dev-tabs"
            id="portfolio-tabs"
          >
            <h3 className="main-section-heading mb-4">Our Shopify portfolio</h3>
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
              <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="order-2 md:order-1 overflow-hidden">
                  <div key={activeTab} className="animate-fadeSlideIn">
                    <h2 className="inner-heading !text-xl">
                      {portfolioContent[activeTab].title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-1">
                      {portfolioContent[activeTab].subtitle}
                    </p>
                    {portfolioContent[activeTab].type && (
                      <p className="text-sm text-gray-500 mb-2">
                        Type: {portfolioContent[activeTab].type}
                      </p>
                    )}

                    {portfolioContent[activeTab].url && (
                      <a
                        href={portfolioContent[activeTab].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-[12px] hover:text-blue-800 underline mb-2  inline-block"
                      >
                        Visit Store →
                      </a>
                    )}
                    <p className="text-gray-600 text-lg leading-relaxed mb-3">
                      {portfolioContent[activeTab].description}
                    </p>

                    <div className="mb-6">
                      <h4 className="inner-heading leading-[auto]">
                        What we delivered:
                      </h4>
                      <ul className="space-y-2">
                        {portfolioContent[activeTab].deliverables.map(
                          (item, index) => (
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
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-6 pt-0">
                      <h4 className="inner-heading mb-2">Impact:</h4>
                      <p className="text-gray-700">
                        {portfolioContent[activeTab].impact}
                      </p>
                    </div>

                    <Link
                      href="/book-a-call"
                      className="inline-block c_button_black mt-4"
                    >
                      {portfolioContent[activeTab].cta || "Build Your Store →"}
                    </Link>
                  </div>
                </div>

                {/* Right Content - Video */}
                <div className="order-1 md:order-2">
                  <div className="relative">
                    {/* Video Container */}
                    <div className="relative mx-auto">
                      <div className="rounded-lg overflow-hidden">
                        <video
                          key={activeTab}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                          className="lg:w-75 sm:w-100 object-cover mx-auto"
                        >
                          <source
                            src={
                              activeTab === "customized"
                                ? "/silvago.mp4"
                                : activeTab === "tailored"
                                  ? "/Caselulu-new.mp4"
                                  : activeTab === "coaches"
                                    ? "/luxeliv.mp4"
                                    : activeTab === "custom"
                                      ? "/Nestloom-new.mp4"
                                      : "/Barebub-new.mp4"
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
          </section>

          {/* Stats Section */}
          <section className="py-24 -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8 stats-web-dev mb-5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 content">
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                  Since 2018
                </p>
                <h2 className="main-section-heading mt-0!" id="devHeading">
                  Building Shopify stores since 2018
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  D2C and ecommerce brands across India have trusted us to
                  build, optimize, and scale their stores.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-12 md:gap-16 numbers">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold mb-3">50+</div>
                  <p className="inner-heading">Shopify Stores Delivered</p>
                  <p className="text-sm text-gray-500">
                    Across jewellery, home decor, baby care, fashion, and
                    accessories
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold mb-3">
                    Since 2018
                  </div>
                  <p className="inner-heading">Building Ecommerce</p>
                  <p className="text-sm text-gray-500">
                    8 years of agency experience
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold mb-3">7</div>
                  <p className="inner-heading">Specialist Team Members</p>
                  <p className="text-sm text-gray-500">
                    Design, development, and conversion optimization
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* call to action */}
          <section className="py-24 bg-white standard-feature pt-5 mb-5 shopify-cta-section">
            <div className="max-w-7xl mx-auto">
              <div className="conatainer">
                <div className="row">
                  {/* Left Column - Pain Points */}
                  <div className="col-md-6 col-lg-6 col-sm-12 cta-left">
                    <h2
                      className="main-section-heading mb-4 mt-5"
                      id="devHeading"
                    >
                      Is your D2C store struggling?
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
                          Your conversion rate is stuck below 2% despite traffic
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
                          Mobile load time is over 2 seconds, hurting both SEO
                          and sales
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
                          You&apos;ve installed too many apps trying to fix
                          conversion problems
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
                          Cart abandonment is high but you don&apos;t know why
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
                          Product pages look fine but don&apos;t convert
                          browsers to buyers
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
                          Your checkout flow is confusing customers at the final
                          step
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
                          You&apos;re moving from another platform and worried
                          about losing SEO
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
                          You need a Shopify store that scales beyond just
                          looking good
                        </span>
                      </li>
                    </ul>
                    <Link
                      href="/case-studies/silvago"
                      className="inline-block c_button_black mt-4"
                    >
                     View Full Case Study →
                    </Link>
                  </div>

                  {/* Right Column - Contact Form */}
                  <div className="col-md-6 col-lg-6 col-sm-12 cta-right">
                    <div className="img-div">
                      <Image
                        src={painPoints}
                        width={500}
                        height={500}
                        alt="Branding Problems"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <h3 className="main-section-heading mb-4" id="devHeading">
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
                Ready to launch your high-converting Shopify store?
              </div>
              <Link href="/book-a-call">Get Your Free Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ShopifyDevelopment;
