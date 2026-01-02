"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./style.css";
import Image from "next/image";
import painPoints from "../../../../public/pain-point-of-shopify-dev.webp";
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
      question: "How long does it take to build a Shopify store?",
      answer:
        "A standard Shopify store typically takes 2-4 weeks to launch. Custom Shopify Plus stores or complex migrations may require 6-8 weeks. We'll provide a detailed timeline during our initial consultation based on your specific requirements.",
    },
    {
      question: "Can you migrate my existing store to Shopify?",
      answer:
        "Yes, we specialize in seamless migrations from platforms like WooCommerce, Magento, BigCommerce, and custom solutions to Shopify. We ensure zero data loss, preserve SEO rankings, and maintain URL structures during the migration process.",
    },
    {
      question: "Do you build custom Shopify themes or use templates?",
      answer:
        "We offer both options. For faster launches, we customize premium themes to match your brand. For unique requirements, we build fully custom Shopify themes from scratch that perfectly align with your brand identity and conversion goals.",
    },
    {
      question: "What Shopify apps and integrations do you work with?",
      answer:
        "We integrate popular apps for email marketing, inventory management, shipping, accounting, and more. We also develop custom Shopify apps when off-the-shelf solutions don't meet your specific business needs.",
    },
    {
      question: "Do you provide ongoing Shopify maintenance and support?",
      answer:
        "Yes, we offer comprehensive maintenance packages including theme updates, app management, performance optimization, security monitoring, and technical support to keep your Shopify store running smoothly 24/7.",
    },
    {
      question: "Can you help with Shopify SEO and conversion optimization?",
      answer:
        "Absolutely. We implement SEO best practices, optimize product pages, improve site speed, and use conversion rate optimization techniques to ensure your Shopify store ranks well and converts visitors into customers.",
    },
  ];

  const portfolioTabs = [
    { id: "customized", label: "Silvago" },
    { id: "tailored", label: "Luxeliv" },
    { id: "coaches", label: "Relaxer" },
    { id: "custom", label: "Pearls & Pastels" },
  ];

  const portfolioContent = {
    customized: {
      title: "Silvago – Minimal Silver Jewellery Brand",
      subtitle: "Shopify Store",
      url: "https://silvago.in/",
      description:
        "Crafted a clean, aesthetic Shopify storefront for Silvago focused on premium minimal jewellery. Emphasis on elegant visuals and fast browsing for product discovery.",
      deliverables: [
        "Custom responsive Shopify design aligned with brand identity",
        "High-impact product imagery, filtering & collection setup",
        "Setup of key KPIs: traffic sources, cart adds, checkouts & conversions",
      ],
      impact:
        "Better user navigation and product discovery led to stronger engagement and improved key ecommerce metrics like conversion and average order value (tracked via Shopify Analytics and reports).",
    },
    tailored: {
      title: "LuxeLiv – Luxury Lifestyle & Fashion Portal",
      subtitle: "Shopify Store",
      url: "https://luxeliv.com/",
      description:
        "Created a premium ecommerce destination for fashion and lifestyle products, optimizing for both brand storytelling and conversion performance.",
      deliverables: [
        "Bespoke Shopify layout with high-impact visuals and seamless browsing",
        "Optimized product pages with cross-sell & upsell features",
        "Integrated conversion tracking to monitor drop-offs & purchase funnels",
      ],
      impact:
        "Enhanced user journey resulting in increased checkout rates and stronger revenue performance — with clear insights for ongoing CRO (Conversion Rate Optimization).",
    },
    coaches: {
      title: "Relaxer – Ergonomic & Comfort Essentials",
      subtitle: "Shopify Store",
      url: "https://relaxerstore.com/",
      description:
        "Built a high-conversion Shopify ecommerce site for Relaxer selling comfort and orthopedic accessories. Designed intuitive product pages, optimized navigation, and a streamlined checkout to reduce bounce and boost conversions.",
      deliverables: [
        "Custom Shopify theme & product catalog setup",
        "Mobile-first UX, fast load experience, and checkout optimization",
        "Integrated analytics & conversion tracking (Add-to-Cart → Purchase)",
      ],
      impact:
        "Improved user engagement, reduced friction in the purchase flow, and measurable uplift in conversion rate and AOV (track via Shopify Analytics) — leading to a direct increase in online sales.",
    },
    custom: {
      title: "Pearls & Pastels – Fashion & Lifestyle Collections",
      subtitle: "Shopify Store",
      url: "https://pearlsandpastels.com/",
      description:
        "Delivered a dynamic ecommerce experience tailored for fashion shoppers, combining rich visuals with smart merchandising to encourage browsing and purchases.",
      deliverables: [
        "Stylish Shopify theme with advanced product filters",
        "Homepage banners, featured collections & seasonal highlights",
        "Enhanced analytics setup to track sessions → purchases and optimize top-performing products",
      ],
      impact:
        "Boosted on-site conversions through improved UX and clear CTAs, with measurable increases in add-to-cart and checkout completions (via Shopify & GA4 data).",
    },
  };

  return (
    <React.Fragment>
      <main className="min-h-screen bg-white shopify-devlopment-main-page">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="py-24 hero-web-dev">
            <div className="row">
              {/* Left Column - Video */}
              <div className="col-md-6 col-lg-9 col-sm-12">
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

              {/* Right Column - Content */}
              <div className="col-md-6 col-lg-3 col-sm-12 right-banner">
                <h1 className="main-section-heading">
                  Need a website that brings you business ?
                </h1>
                <p className="mb-6">
                  <strong>
                    We make fast, SEO friendly, mobile responsive, website that
                    turn vision into real business.
                  </strong>
                </p>

                <Link href="/contact" className="inline-block c_button_black">
                  Start Your Shopify Store
                </Link>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-24 max-w-7xl mx-auto what-we-offer-web-dev">
            <h3 className="main-section-heading mb-12">
              Our Shopify Development Services
            </h3>
            <div className="grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 content-wrapper">
              {/* Service 1: Custom Shopify Store Development */}
              <div className="content-div">
                <div className="border-div border-2 border-gray-200 rounded-0 overflow-hidden">
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
                          Custom Shopify Store Development
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
                      Build your brand-new Shopify store from scratch with
                      custom themes, optimized product pages, and seamless
                      checkout flows. We create conversion-focused designs that
                      reflect your brand identity, integrate with payment
                      gateways, implement abandoned cart recovery, and set up
                      analytics tracking to maximize your revenue from day one.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 2: Shopify Theme Customization */}
              <div className="content-div ">
                <div className="border-div border-2 border-gray-200 rounded-0 overflow-hidden">
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
                          Shopify Theme Customization
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
                      Transform existing Shopify themes to perfectly match your
                      brand with custom Liquid coding, advanced features, and
                      unique design elements. We modify templates, add custom
                      sections, implement interactive elements, optimize mobile
                      responsiveness, and ensure your store stands out from
                      competitors while maintaining fast load times and
                      conversion optimization.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 3: Shopify Plus Development */}
              <div className="content-div">
                <div className="border-div border-2 border-gray-200 rounded-0 overflow-hidden">
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
                        <h3 className="inner-heading">
                          Shopify Plus Development
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
                      Enterprise-level Shopify Plus solutions for high-volume
                      businesses with advanced automation, wholesale channels,
                      and B2B capabilities. We implement Shopify Scripts for
                      custom discounts, build headless commerce architectures,
                      create multi-storefront experiences, integrate with ERP
                      systems, and leverage Shopify Flow for complex automation
                      workflows that scale with your growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 4: Shopify Migration Services */}
              <div className="content-div">
                <div className="border-div border-2 border-gray-200 rounded-0 overflow-hidden">
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
                            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                          />
                        </svg>
                        <h3 className="inner-heading">
                          Platform Migration to Shopify
                        </h3>
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
                      Seamlessly migrate from WooCommerce, Magento, BigCommerce,
                      or custom platforms to Shopify without losing data or SEO
                      rankings. We handle complete product transfers, customer
                      data migration, URL redirects, order history preservation,
                      review imports, and ensure zero downtime during the
                      switch. Your store launches on Shopify with everything
                      intact and improved performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <h3 className="main-section-heading">
            Our Shopify Development Process
          </h3>
          <section className="py-24 bg-gray-50 -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8 our-process-web-dev">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-4 gap-12 content-wrapper">
                <div className="content-div">
                  <span className="text-6xl font-bold text-gray-200">01</span>
                  <h3 className="inner-heading">Discovery & Planning</h3>
                  <div className="process-text-wrapper">
                    <p
                      className={`process-text ${
                        expandedProcesses[0] ? "expanded" : ""
                      }`}
                    >
                      We analyze your business goals, target audience, and
                      product catalog to create a Shopify strategy that drives
                      conversions. We define your store structure, choose the
                      right apps, plan integrations, and establish design
                      requirements that align with your brand vision and sales
                      objectives.
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
                  <h3 className="inner-heading">Design & Setup</h3>
                  <div className="process-text-wrapper">
                    <p
                      className={`process-text ${
                        expandedProcesses[1] ? "expanded" : ""
                      }`}
                    >
                      Our designers create stunning, mobile-responsive
                      storefronts that reflect your brand and optimize for
                      conversions. We design custom product pages, collections,
                      checkout flows, and landing pages, then set up your
                      Shopify store with the theme, essential apps, and initial
                      configurations for a seamless launch.
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
                      With 6+ years of Shopify expertise and 57+ successful
                      launches, we build your store with custom features,
                      integrate payment gateways, configure shipping, and set up
                      automation. We rigorously test across devices, browsers,
                      and payment scenarios to ensure flawless functionality
                      before your store goes live.
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
                  <h3 className="inner-heading">Launch & Optimization</h3>
                  <div className="process-text-wrapper">
                    <p
                      className={`process-text ${
                        expandedProcesses[3] ? "expanded" : ""
                      }`}
                    >
                      We launch your Shopify store, configure analytics
                      tracking, and implement SEO best practices. Post-launch,
                      we monitor performance, optimize conversion rates,
                      fine-tune app configurations, and provide ongoing support
                      to ensure your store continues generating sales and
                      growing with your business needs.
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
              <h3 className="main-section-heading">
                Why Choose The Tous for Shopify Development
              </h3>
              <p className="why-para">
                What makes us the best Shopify development partner
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
                <h3 className="inner-heading">Certified Shopify Experts</h3>
                <p className="text-sm text-gray-500 mb-3">
                  57+ Shopify stores launched since 2018
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[0] ? "expanded" : ""
                    }`}
                  >
                    Our team includes certified Shopify developers with deep
                    expertise in Liquid, theme customization, app integration,
                    and conversion optimization. We stay updated with the latest
                    Shopify features and best practices to deliver stores that
                    leverage the platform&apos;s full potential for your
                    business growth.
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
                <h3 className="inner-heading">Conversion-Optimized Design</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Average 3.2% conversion rate across our stores
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[1] ? "expanded" : ""
                    }`}
                  >
                    We design every element with conversion in mind—from
                    persuasive product pages and trust badges to streamlined
                    checkouts and cart recovery systems. Our Shopify stores are
                    built using proven e-commerce psychology principles that
                    turn browsers into buyers and maximize your average order
                    value.
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
                <h3 className="inner-heading">Lightning-Fast Performance</h3>
                <p className="text-sm text-gray-500 mb-3">
                  90+ PageSpeed scores on all stores
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[2] ? "expanded" : ""
                    }`}
                  >
                    Speed directly impacts sales. We optimize images, minify
                    code, leverage lazy loading, and implement best practices to
                    ensure your Shopify store loads in under 2 seconds. Fast
                    stores rank higher in Google, reduce bounce rates, and
                    convert more visitors into paying customers.
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

              {/* Card 4: End-to-End Support */}
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
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="inner-heading">Complete Shopify Solutions</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Design, development, and ongoing optimization
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[3] ? "expanded" : ""
                    }`}
                  >
                    From initial strategy to post-launch support, we handle
                    everything—theme design, app integration, product setup, SEO
                    optimization, marketing automation, and continuous
                    performance monitoring. You get a dedicated partner who
                    understands your business and helps your Shopify store grow
                    month after month.
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
                <h2 className="main-section-heading">
                  Proven Results in Shopify Development
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Since 2018, we&apos;ve helped e-commerce brands launch and
                  grow successful Shopify stores that generate consistent
                  revenue and scale effortlessly.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-12 md:gap-16 numbers">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold mb-3">57+</div>
                  <p className="inner-heading">Shopify Stores Launched</p>
                  <p className="text-sm text-gray-500">
                    Custom and Plus stores delivered since 2018
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold mb-3">
                    3.2%
                  </div>
                  <p className="inner-heading">Average Conversion Rate</p>
                  <p className="text-sm text-gray-500">
                    Above industry standard of 2.5-3%
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold mb-3">5+</div>
                  <p className="inner-heading">Shopify Specialists</p>
                  <p className="text-sm text-gray-500">
                    Certified developers, designers, and strategists
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 max-w-7xl mx-auto mt-5 mb-5 web-dev-tabs">
            <h3 className="main-section-heading">Our Shopify Portfolio</h3>
            <div className="mb-12">
              {/* Tab Navigation */}
              <div className="flex items-center justify-start gap-4 flex-wrap transition-all duration-500 mb-5">
                {portfolioTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
                      activeTab === tab.id
                        ? "bg-black text-white duration-500 px-3"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200 duration-500 px-3"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Content Area */}
              <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="order-2 md:order-1 overflow-hidden">
                  <div key={activeTab} className="animate-fadeSlideIn">
                    <h2 className="inner-heading">
                      {portfolioContent[activeTab].title}
                    </h2>

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
                      <h4 className="inner-heading">
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
                          )
                        )}
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h4 className="inner-heading mb-2">Impact:</h4>
                      <p className="text-gray-700">
                        {portfolioContent[activeTab].impact}
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-block c_button_black"
                    >
                      Build Your Store
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
                          className="w-full h-[80vh]"
                        >
                          <source
                            src={
                              activeTab === "customized"
                                ? "/silvago.MP4"
                                : activeTab === "tailored"
                                ? "/luxeliv.MP4"
                                : activeTab === "coaches"
                                ? "/relaxer.MP4"
                                : "/pearlsnpastels.MP4"
                            }
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
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
                    <h2 className="main-section-heading">
                      Is Your E-Commerce Store Struggling?
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
                          Your current platform limits growth and customization
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
                          High cart abandonment rates due to slow checkout
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
                          Difficulty managing inventory across multiple channels
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
                          Your store design doesn&apos;t reflect your brand
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
                          Poor mobile experience hurting sales conversion
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
                          Limited marketing automation and recovery tools
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
                          Need to expand internationally with multi-currency
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
                          Struggling with platform technical issues and downtime
                        </span>
                      </li>
                    </ul>
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
          <h3 className="main-section-heading ">Frequently Asked Questions</h3>
          <section className="py-24 bg-gray-50 -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8 faq-web-dev">
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
              <Link href="/contact">Get Your Free Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ShopifyDevelopment;
