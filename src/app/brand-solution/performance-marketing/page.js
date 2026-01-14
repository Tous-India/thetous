"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import "./style.css";
import Image from "next/image";
import painPoints from "../../../../public/pain-point-of-shopify-dev.webp";
import { Swiper, SwiperSlide } from "swiper/react";

//
//
//
const PerformanceMarketing = () => {
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
          services: "Performance Marketing",
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
      question:
        "What is performance marketing and how does it differ from traditional marketing?",
      answer:
        "Performance marketing is a results-driven digital marketing approach where you only pay for measurable actions like clicks, leads, sales, or conversions. Unlike traditional marketing with fixed costs, performance marketing ensures every rupee spent is tracked, optimized, and directly tied to ROI—making it more cost-effective and accountable.",
    },
    {
      question: "Which performance marketing channels do you specialize in?",
      answer:
        "We specialize in Google Ads (Search, Display, Shopping, Performance Max), Meta Ads (Facebook & Instagram), LinkedIn Ads, YouTube Ads, programmatic advertising, affiliate marketing, and influencer partnerships. We select the right mix of channels based on your target audience, industry, and business goals.",
    },
    {
      question:
        "How do you measure the success of performance marketing campaigns?",
      answer:
        "We track key performance indicators (KPIs) including Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Click-Through Rate (CTR), Conversion Rate, Customer Lifetime Value (CLV), and overall ROI. You'll receive transparent, real-time dashboards showing exactly how your campaigns are performing.",
    },
    {
      question:
        "What's the minimum budget required for performance marketing campaigns?",
      answer:
        "While budgets vary by industry and goals, we recommend a minimum monthly ad spend of ₹50,000-₹1,00,000 to gather meaningful data and optimize effectively. We'll work with your budget to create a strategic plan that maximizes results within your spending capacity.",
    },
    {
      question: "How quickly can I see results from performance marketing?",
      answer:
        "Initial results like traffic and impressions appear within days of launching campaigns. Meaningful conversion data typically emerges within 2-4 weeks, while optimal performance and positive ROI usually develop after 2-3 months of continuous testing, optimization, and refinement based on data insights.",
    },
    {
      question:
        "Do you provide performance marketing services for B2B and B2C businesses?",
      answer:
        "Yes, we serve both B2B and B2C clients across industries including e-commerce, SaaS, healthcare, education, real estate, finance, and professional services. Our strategies are customized to your business model, sales cycle, and target audience—whether you're driving online sales or generating qualified leads.",
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
      <main className=" performance-marketing-main-page">
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
                      src="/Tous-performance-marketing -video.mp4"
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
                <h1 className="main-section-heading" id="noLine">
                  Performance marketing that delivers real results
                </h1>
                <p className="mb-6">
                  <strong>
                    We drive measurable growth through data-driven performance
                    marketing—pay only for real results, not empty promises.
                  </strong>
                </p>

                <Link href="/quote" className="inline-block c_button_black">
                  Get Your Free Marketing Audit
                </Link>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-24 max-w-7xl mx-auto what-we-offer-web-dev">
            <h3 className="main-section-heading mb-12" id="devHeading">
              Our Performance Marketing Services
            </h3>
            <div className="grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 content-wrapper">
              {/* Service 1: Paid Search Advertising (PPC) */}
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
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                        <h3 className="inner-heading">
                          Paid Search Advertising (PPC)
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
                      Dominate search results with high-intent keyword targeting
                      through Google Ads and Bing Ads. We create compelling ad
                      copy, optimize bidding strategies, conduct A/B testing,
                      implement conversion tracking, and continuously refine
                      campaigns to lower your cost-per-acquisition while
                      maximizing qualified traffic and conversions that drive
                      real revenue growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 2: Social Media Advertising */}
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
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                          />
                        </svg>
                        <h3 className="inner-heading">
                          Social Media Advertising
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
                      Reach your ideal customers on Facebook, Instagram,
                      LinkedIn, and YouTube with precision-targeted campaigns.
                      We leverage advanced audience segmentation, retargeting
                      strategies, dynamic product ads, creative testing, and
                      platform-specific best practices to generate high-quality
                      leads, drive e-commerce sales, and build brand awareness
                      that converts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 3: Conversion Rate Optimization (CRO) */}
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
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                        <h3 className="inner-heading">
                          Conversion Rate Optimization (CRO)
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
                      Turn more visitors into customers without increasing ad
                      spend. We analyze user behavior through heatmaps, session
                      recordings, and funnel analysis, then conduct systematic
                      A/B testing on landing pages, CTAs, forms, and checkout
                      flows. Our data-driven optimization increases conversion
                      rates, reduces bounce rates, and maximizes ROI from
                      existing traffic.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 4: Retargeting & Remarketing */}
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
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                        <h3 className="inner-heading">
                          Retargeting & Remarketing
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
                      Re-engage visitors who didn&apos;t convert on their first
                      visit with strategic retargeting campaigns across Google
                      Display Network, Facebook, Instagram, and beyond. We
                      create personalized ad sequences based on user behavior,
                      implement dynamic product remarketing, recover abandoned
                      carts, and nurture prospects through the sales funnel to
                      drive conversions and maximize customer acquisition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <h3 className="main-section-heading mb-5" id="devHeading">
            Our Performance Marketing Process
          </h3>
          <section className="py-24 bg-gray-50 -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8 our-process-web-dev">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-4 gap-12 content-wrapper">
                <div className="content-div">
                  <span className="text-6xl font-bold text-gray-200">01</span>
                  <h3 className="inner-heading">Strategy & Audit</h3>
                  <div className="process-text-wrapper">
                    <p
                      className={`process-text ${
                        expandedProcesses[0] ? "expanded" : ""
                      }`}
                    >
                      We start with a comprehensive marketing audit to
                      understand your business goals, target audience,
                      competitive landscape, and current performance. We analyze
                      your customer journey, identify growth opportunities,
                      define KPIs, and create a data-driven performance
                      marketing strategy tailored to maximize ROI and achieve
                      your specific revenue objectives.
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
                  <h3 className="inner-heading">Campaign Setup & Launch</h3>
                  <div className="process-text-wrapper">
                    <p
                      className={`process-text ${
                        expandedProcesses[1] ? "expanded" : ""
                      }`}
                    >
                      We build high-converting campaigns across selected
                      channels—Google Ads, Meta Ads, LinkedIn, and more. This
                      includes in-depth keyword research, audience targeting,
                      compelling ad creative development, landing page
                      optimization, pixel implementation, conversion tracking
                      setup, and establishing automated bidding strategies that
                      ensure optimal performance from day one.
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
                  <h3 className="inner-heading">Testing & Optimization</h3>
                  <div className="process-text-wrapper">
                    <p
                      className={`process-text ${
                        expandedProcesses[2] ? "expanded" : ""
                      }`}
                    >
                      We continuously test and optimize every campaign
                      element—ad copy, creatives, targeting, bidding, and
                      landing pages. Through rigorous A/B testing, performance
                      analysis, and data-driven insights, we identify what works
                      best, eliminate underperforming elements, scale winning
                      strategies, and progressively lower your
                      cost-per-acquisition while increasing conversion rates and
                      revenue.
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
                  <h3 className="inner-heading">Reporting & Scaling</h3>
                  <div className="process-text-wrapper">
                    <p
                      className={`process-text ${
                        expandedProcesses[3] ? "expanded" : ""
                      }`}
                    >
                      You receive transparent, real-time reporting dashboards
                      tracking all KPIs—ROAS, CPA, conversion rates, and revenue
                      attribution. We provide actionable insights, identify
                      scaling opportunities, recommend budget allocation
                      strategies, and systematically expand successful campaigns
                      to new audiences, keywords, and channels—ensuring
                      sustainable, profitable growth month over month.
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
                Why Choose The Tous for Performance Marketing
              </h3>
              <p className="why-para">
                What makes us your ideal performance marketing partner
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 content-wrapper">
              {/* Card 1: Data-Driven Approach */}
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
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="inner-heading">Data-Driven Marketing Experts</h3>
                <p className="text-sm text-gray-500 mb-3">
                  200+ campaigns optimized with proven ROI
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[0] ? "expanded" : ""
                    }`}
                  >
                    We make decisions based on data, not guesswork. Our
                    certified performance marketers use advanced analytics,
                    attribution modeling, and conversion tracking to identify
                    what drives results. Every campaign is continuously
                    monitored, tested, and optimized using real-time
                    insights—ensuring your marketing budget delivers maximum
                    returns and measurable business growth.
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

              {/* Card 2: ROI-Focused Strategies */}
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="inner-heading">ROI-Focused Strategies</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Average 4.5X ROAS across client campaigns
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[1] ? "expanded" : ""
                    }`}
                  >
                    Your success is measured by results, not vanity metrics. We
                    focus relentlessly on what matters most—cost per
                    acquisition, return on ad spend, and revenue growth. Our
                    performance marketing strategies are engineered to deliver
                    positive ROI, lower customer acquisition costs, and increase
                    lifetime customer value through scientific testing and
                    proven optimization methodologies.
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

              {/* Card 3: Multi-Channel Expertise */}
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
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="inner-heading">Multi-Channel Expertise</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Certified partners across major ad platforms
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[2] ? "expanded" : ""
                    }`}
                  >
                    We master every major performance marketing channel—Google
                    Ads, Meta (Facebook & Instagram), LinkedIn, YouTube,
                    programmatic display, and emerging platforms. Our holistic
                    approach creates synergy across channels, ensuring your
                    brand message reaches the right audience at the right time,
                    driving coordinated campaigns that amplify results and
                    maximize customer touchpoints.
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

              {/* Card 4: Transparent Reporting */}
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
                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="inner-heading">
                  Transparent Reporting & Communication
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Real-time dashboards and dedicated account management
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[3] ? "expanded" : ""
                    }`}
                  >
                    No black boxes or hidden metrics. You get full transparency
                    with real-time access to campaign dashboards showing every
                    click, conversion, and rupee spent. Our detailed monthly
                    reports break down performance, insights, and
                    recommendations. Plus, you have a dedicated account manager
                    who understands your business and is available to answer
                    questions and strategize for growth.
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
                  Proven Results in Performance Marketing
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Since 2018, we&apos;ve helped businesses across industries
                  drive measurable growth through data-driven performance
                  marketing campaigns that consistently deliver positive ROI and
                  sustainable revenue growth.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-12 md:gap-16 numbers">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold mb-3">
                    ₹10Cr+
                  </div>
                  <p className="inner-heading">Ad Spend Managed</p>
                  <p className="text-sm text-gray-500">
                    Across 200+ campaigns since 2018
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold mb-3">
                    5.5X
                  </div>
                  <p className="inner-heading">Average ROAS</p>
                  <p className="text-sm text-gray-500">
                    Return on ad spend across client portfolios
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold mb-3">85%</div>
                  <p className="inner-heading">Client Retention Rate</p>
                  <p className="text-sm text-gray-500">
                    Long-term partnerships built on results
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 max-w-7xl mx-auto mt-5 web-dev-tabs">
            <h3 className="main-section-heading mb-4">
              Our Performance Marketing Portfolio
            </h3>
            <div className="mb-12">
              {/* Tab Navigation */}

              <Swiper
                className="flex items-center justify-start gap-4 flex-wrap transition-all duration-500 mb-5 mySwiper"
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 2.5,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 2.5,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                  },
                }}
              >
                {portfolioTabs.map((tab) => (
                  <SwiperSlide>
                    <button
                      key={tab.id}
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
                          )
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
                      href="/contact"
                      className="inline-block c_button_black mt-4"
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
                          preload="auto"
                          className="lg:w-75 sm:w-100 object-cover"
                        >
                          <source
                            src={
                              activeTab === "customized"
                                ? "/silvago.mp4"
                                : activeTab === "tailored"
                                ? "/luxeliv.mp4"
                                : activeTab === "coaches"
                                ? "/relaxer.mp4"
                                : "/pearlsnpastels.mp4"
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

          {/* call to action */}
          <section className="py-24 bg-white standard-feature pt-5 mb-5 shopify-cta-section">
            <div className="max-w-7xl mx-auto">
              <div className="conatainer">
                <div className="row">
                  {/* Left Column - Pain Points */}
                  <div className="col-md-6 col-lg-6 col-sm-12 cta-left">
                    <h2 className="main-section-heading mb-4" id="devHeading">
                      Is Your Marketing Failing to Deliver Results?
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
                          Your current marketing campaigns have unclear ROI
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
                          High cost per acquisition eating into profit margins
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
                          Difficulty tracking which channels actually drive
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
                          Your ads generate traffic but few actual conversions
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
                          Inconsistent lead quality affecting sales team
                          efficiency
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
                          No clear strategy for scaling successful campaigns
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
                          Wasting budget on underperforming ad creatives and
                          audiences
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
                          Lack of expertise across multiple advertising
                          platforms
                        </span>
                      </li>
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-block c_button_black mt-4"
                    >
                      Book a Marketing Audit
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
                Ready to drive measurable growth with performance marketing?
              </div>
              <Link href="/contact">Get Your Free Marketing Audit</Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PerformanceMarketing;
