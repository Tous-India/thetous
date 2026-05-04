"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./style.css";
import Image from "next/image";
import usePageTitle from "@/hooks/usePageTitle";

import painPoints from "../../../../public/pain-point-of-shopify-dev.webp";
import { Swiper, SwiperSlide } from "swiper/react";

const crmFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why build a custom CRM instead of using HubSpot, Zoho, or Salesforce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SaaS CRMs are built for the average business. If your business doesn't fit the average — multi-tier workflows, partial deliveries, custom approval flows — they force you to compromise. Custom CRMs are built around your actual workflow, scale without per-user fees, and you own the code and data.",
      },
    },
    {
      "@type": "Question",
      name: "What's the typical timeline for a custom CRM or web app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom CRMs and web applications typically take 8-16 weeks depending on scope. Simple internal tools can ship in 6-8 weeks. Multi-user systems with mobile apps and complex workflows take 12-20 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build mobile apps for the CRM too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build companion mobile apps that connect to the same backend — for field teams, delivery agents, customer portals, and service providers.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies do you build with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PHP for backend logic. React and Next.js for high-performance frontends and dashboards. Node.js for backend APIs. MySQL or MongoDB for databases. Native mobile apps where required.",
      },
    },
    {
      "@type": "Question",
      name: "Will my team be able to manage the system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide training during launch plus written documentation. For ongoing changes, you can engage us for development support or hire your own developers — you own the code.",
      },
    },
    {
      "@type": "Question",
      name: "What about data security and hosting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your CRM and data are hosted where you choose — your own server, AWS, DigitalOcean, or any cloud provider. We implement encrypted connections, secure authentication, role-based access, and regular backups.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate with our existing tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We integrate CRMs with payment gateways, email platforms, ad accounts, accounting tools, shipping partners, and any system with an API.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if our requirements change after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We expect them to. Most of our CRM clients engage us for ongoing development — adding new features, modules, integrations, and reports as their business grows.",
      },
    },
  ],
};
const ShopifyDevelopment = () => {
  usePageTitle("Custom CRM & Web App Development | The Tous");

  const [activeFaq, setActiveFaq] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const [activeTab, setActiveTab] = useState("customized");
  const [expandedProcesses, setExpandedProcesses] = useState({});
  const [expandedWhyChoose, setExpandedWhyChoose] = useState({});
  const [activeSpotlight, setActiveSpotlight] = useState(0);
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
          services: "CRM & Web App Development",
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
        "Why build a custom CRM instead of using HubSpot, Zoho, or Salesforce?",
      answer:
        "SaaS CRMs are built for the average business. If your business doesn't fit the average — multi-tier workflows, partial deliveries, custom approval flows, industry-specific data — they force you to compromise. Custom CRMs are built around your actual workflow, scale without per-user fees, and you own the code and data forever.",
    },
    {
      question: "What's the typical timeline for a custom CRM or web app?",
      answer:
        "Custom CRMs and web applications typically take 8-16 weeks depending on scope and complexity. Simple internal tools can ship in 6-8 weeks. Multi-user systems with mobile apps and complex workflows take 12-20 weeks. We give you a fixed timeline after a discovery call.",
    },
    {
      question: "Do you build mobile apps for the CRM too?",
      answer:
        "Yes, when your business needs it. Field teams, delivery agents, customer portals, and service providers often need mobile access. We build companion mobile apps that connect to the same backend — like the OMP CRM where groomers use a mobile app and customers have a web portal, all on the same data.",
    },
    {
      question: "What technologies do you build with?",
      answer:
        "PHP for backend logic and content-heavy systems. React and Next.js for high-performance frontends and dashboards. Node.js for backend APIs when needed. MySQL or MongoDB for databases. Native mobile apps where required. We pick the stack based on your project's needs and long-term maintainability.",
    },
    {
      question: "Will my team be able to manage the system?",
      answer:
        "Yes. We provide training during launch, plus written documentation. For ongoing changes, you can either engage us for development support or hire your own developers — since you own the code, there's no vendor lock-in. Most clients prefer to keep us as ongoing partners since we already know the system.",
    },
    {
      question: "What about data security and hosting?",
      answer:
        "Your CRM and data are hosted where you choose — your own server, AWS, DigitalOcean, or any other cloud provider. We implement standard security practices: encrypted connections, secure authentication, role-based access, regular backups. Your data stays under your control.",
    },
    {
      question: "Can you integrate with our existing tools?",
      answer:
        "Yes. We integrate CRMs with payment gateways (Razorpay, Stripe), email platforms, ad accounts (Meta, Google Ads), accounting tools, shipping partners, and any system with an API. If a tool can connect, we can integrate it.",
    },
    {
      question: "What happens if our requirements change after launch?",
      answer:
        "We expect them to. Businesses evolve, and so should your systems. Most of our CRM clients engage us for ongoing development — adding new features, modules, integrations, and reports as their business grows. Since we built the original system, we can extend it without breaking what's already working.",
    },
  ];

  const portfolioTabs = [
    { id: "customized", label: "OMP CRM" },
    { id: "tailored", label: "KB Enterprise" },
    { id: "coaches", label: "Vaqya Analytics" },
    { id: "custom", label: "Ujjwal Dental" },
    { id: "barebub", label: "Real Estate CRM" },
  ];

  const portfolioContent = {
    customized: {
      title: "OMP CRM + Mobile App — Pet Grooming Services",
      subtitle: "Industry: Pet Services, B2C",
      url: null,
      description:
        "OMP runs a pet grooming service business that needed more than a basic CRM. They needed a complete operational system — capturing leads from multiple sources, assigning them to groomers, giving customers self-service access to their booking history, and giving groomers a mobile app to manage their work in the field.",
      deliverables: [
        "Lead capture from website, Meta ads, and Google ads",
        "Groomer assignment and management system",
        "Customer login portal with booking history and payment records",
        "Mobile app for groomers to track leads, manage ratings, and update job status",
        "Multi-user roles with admin, groomer, and customer access levels",
        "Reporting dashboard for business insights",
      ],
      impact:
        "A complete operational system that handles lead generation, service delivery, customer self-service, and field team management — all connected to one backend. Replaced multiple disconnected tools with a single integrated platform.",
    },
    tailored: {
      title: "KB Enterprise CRM — Aviation Spare Parts Management",
      subtitle: "Industry: B2B Aviation Spare Parts Trading",
      url: null,
      description:
        "KB Enterprise trades aviation spare parts internationally — a business where a single order might involve 10 items, with 5 in stock and 5 backordered for months. Quotations, invoices, and POs go through multiple revisions. They were running everything on Excel, and tracking 5-month-old data was a constant problem.",
      deliverables: [
        "Custom CRM tracking quotations, POs, invoices, and revisions",
        "Partial delivery management (track items shipped now vs. items pending)",
        "Client and order history search across years of data",
        "Multi-user access with role-based permissions",
        "Quote-to-invoice workflow with revision history",
      ],
      impact:
        "Replaced their Excel-based workflow with a system that handles the complexity of international spare parts trading — saving hours of admin time per order, eliminating data loss from version-controlled spreadsheets, and making 5-month-old order history searchable in seconds.",
    },
    coaches: {
      title: "Vaqya LLC — Healthcare Analytics Dashboard",
      subtitle: "Industry: Healthcare Analytics (USA)",
      url: null,
      description:
        "Vaqya LLC is a US-based healthcare analytics company that needed a custom dashboard for doctors and healthcare teams. The challenge: deliver meaningful insights through a clean, doctor-friendly interface that handles patient analytics, referral tracking, and treatment data — all in one place.",
      deliverables: [
        "Custom analytics dashboard with patient performance metrics",
        "Referral and treatment tracking system",
        "Visual reports with charts and trend analysis",
        "Doctor-friendly UI with clear data hierarchy",
        "Secure and scalable dashboard architecture",
        "Multi-user access for healthcare teams",
      ],
      impact:
        "Clear visibility into patient data, faster insights for clinical decision-making, and improved reporting accuracy for healthcare teams across the US.",
    },
    custom: {
      title: "Ujjwal Dental — Patient Management System",
      subtitle: "Industry: Healthcare, Dental Practice",
      url: null,
      description:
        "Ujjwal Dental is a busy dental practice that needed to move beyond paper records and basic appointment tools. They needed a complete patient management system that tracks visits, treatments, payments, treatment plans, and automated reminders — all in one place.",
      deliverables: [
        "Patient records with complete visit and treatment history",
        "Treatment plan management with status tracking",
        "Payment tracking linked to treatment plans",
        "Automated appointment reminders for patients",
        "Multi-user access for dentists and front-desk staff",
      ],
      impact:
        "A central system that handles the full patient lifecycle — from first visit to ongoing treatment plans — replacing scattered records and manual reminder calls with an automated, organized system.",
    },
    barebub: {
      title: "Real Estate Lead Management System",
      subtitle: "Industry: Real Estate (In Development)",
      url: null,
      description:
        "A real estate firm needed a CRM purpose-built for their business — managing leads coming in from multiple sources, distributing them to agents, tracking follow-ups, and providing visibility into business performance. Off-the-shelf CRMs didn't fit their workflow, so we're building one that does.",
      deliverables: [
        "Lead distribution system with rule-based assignment to agents",
        "Agent follow-up tracking with reminders and status updates",
        "Business intelligence dashboards for management visibility",
        "Multi-user access with role-based permissions",
        "Custom workflows matching real estate sales cycles",
      ],
      impact:
        "Currently in development. Expected to deliver a CRM that handles the specific complexity of real estate lead management — where speed of follow-up and accurate data drive deal closures.",
    },
  };

  return (
    <React.Fragment>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crmFaqSchema) }}
      />
      <main className=" crm-devlopment-main-page">
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
                    <source src="/new-crm development.mp4" type="video/mp4" />
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
                  Custom CRMs and web apps built around your workflow
                </h1>
                <p className="mb-6">
                  <strong>
                    PHP and React-based CRMs, dashboards, and web applications
                    for businesses that need more than a SaaS template.
                  </strong>
                </p>
                <p className="mb-6">
                  Custom systems delivered for aviation, healthcare, real
                  estate, dental, and pet services across India and the US.
                </p>

                <Link
                  href="/book-a-call"
                  className="inline-block c_button_black"
                >
                  Book a Discovery Call →
                </Link>
                <Link className="portfolio-button" href="#portfolio-tabs">
                  View Our Portfolio
                  <i className="ri-corner-right-down-line"></i>
                </Link>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-24 max-w-7xl mx-auto what-we-offer-web-dev">
            <h3 className="main-section-heading mb-12" id="devHeading">
              Our web app and CRM services
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
                          Custom CRM Development
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
                      CRMs built around your actual workflow — not forced into a
                      SaaS template. Lead capture, customer management,
                      follow-up tracking, role-based access, and reporting that
                      matches how your business operates. We&apos;ve built CRMs
                      for aviation spare parts trading, dental practice
                      management, real estate lead distribution, and pet
                      grooming services.
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
                          Web Applications & Dashboards
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
                      Custom web apps for businesses that need more than a
                      website — internal tools, customer portals, analytics
                      dashboards, and operational platforms. PHP and React-based
                      applications designed to handle real business complexity,
                      scale with your growth, and integrate with your existing
                      systems.
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
                        <h3 className="inner-heading">Companion Mobile Apps</h3>
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
                      When your CRM or web app needs to work in the field, we
                      build companion mobile apps that connect to the same
                      backend. Field teams, delivery agents, service providers,
                      or customers — all using the same data, accessible
                      wherever they are.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <h3 className="main-section-heading mb-5" id="devHeading">
            How we build CRMs and web apps
          </h3>
          <section className="py-24 bg-gray-50 -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8 our-process-web-dev">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-4 gap-12 content-wrapper">
                <div className="content-div">
                  <span className="text-6xl font-bold text-gray-200">01</span>
                  <h3 className="inner-heading">
                    Discovery & Workflow Mapping
                  </h3>
                  <div className="process-text-wrapper">
                    <p
                      className={`process-text ${
                        expandedProcesses[0] ? "expanded" : ""
                      }`}
                    >
                      We start by mapping your actual workflow — not assuming
                      what you need. Who uses the system? What decisions do they
                      make? What data flows through? Where are the bottlenecks
                      today? The system is only as useful as how well it matches
                      reality.
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
                  <h3 className="inner-heading">Architecture & Prototype</h3>
                  <div className="process-text-wrapper">
                    <p
                      className={`process-text ${
                        expandedProcesses[1] ? "expanded" : ""
                      }`}
                    >
                      System architecture, database design, user roles, and
                      clickable prototypes before development starts. You see
                      exactly how the app will work — screens, flows,
                      permissions — and we make changes on prototypes, not on
                      production code.
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
                      Clean PHP or React code with proper testing — across user
                      roles, edge cases, and data scenarios. We build for
                      real-world usage, not just the happy path. Multi-user
                      access, data validation, and security are standard, not
                      extras.
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
                  <h3 className="inner-heading">Launch & Ongoing Support</h3>
                  <div className="process-text-wrapper">
                    <p
                      className={`process-text ${
                        expandedProcesses[3] ? "expanded" : ""
                      }`}
                    >
                      Production deployment, training for your team, and 30 days
                      of post-launch support included. Most CRM clients stay
                      with us for ongoing development as their business evolves
                      and new requirements emerge.
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
                Why businesses choose The Tous for custom CRMs and web apps
              </h3>
              <p className="why-para">
                What makes us different from SaaS CRMs and template platforms
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
                  Built around your workflow, not a template
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  5+ custom CRMs delivered across industries
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[0] ? "expanded" : ""
                    }`}
                  >
                    Most businesses don&apos;t fit the SaaS CRM mold. Aviation
                    spare parts traders need to track 5-month-old partial
                    deliveries. Dental clinics need patient treatment plans
                    linked to payment cycles. Real estate firms need lead
                    distribution to multiple agents. We build systems that match
                    your business — not the other way around.
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
                <h3 className="inner-heading">You own the code and the data</h3>
                <p className="text-sm text-gray-500 mb-3">
                  No subscription lock-in, no vendor dependency
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[1] ? "expanded" : ""
                    }`}
                  >
                    When we build a CRM for you, you own the code and the
                    database. No monthly per-user fees that scale with your
                    team. No risk of a SaaS company changing pricing or shutting
                    down. Your business logic is yours, hosted where you want,
                    accessible only by you.
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
                <h3 className="inner-heading">
                  Real complexity handled cleanly
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Multi-user roles, partial deliveries, complex workflows
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[2] ? "expanded" : ""
                    }`}
                  >
                    Most CRMs break under real business complexity. Multi-tier
                    user roles. Partial order deliveries. Multi-month tracking.
                    Custom approval flows. We&apos;ve handled all of these in
                    production for clients across industries — and the systems
                    still run smoothly.
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
                <h3 className="inner-heading">Ongoing partner, not a vendor</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Multi-year client relationships across our CRM portfolio
                </p>
                <div className="why-text-wrapper">
                  <p
                    className={`why-text ${
                      expandedWhyChoose[3] ? "expanded" : ""
                    }`}
                  >
                    Most of our CRM clients have been with us for years, not
                    weeks. As their business evolves, we evolve the system. New
                    features, new modules, new integrations — handled by the
                    same team that built the original.
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

          {/* Industry Spotlight Section */}
          <section className="re-spotlight-section">
            <div className="re-spotlight-container">
              <div className="re-spotlight-header">
                <span className="re-spotlight-tag">INDUSTRY SPOTLIGHT</span>
                <h2 className="re-spotlight-heading">
                  Custom CRMs for service businesses
                </h2>
                <p className="re-spotlight-subtext">
                  Service businesses — dental practices, pet services, real
                  estate firms, healthcare providers — often run their
                  operations on a patchwork of tools, spreadsheets, and manual
                  processes. We build custom CRMs that bring it all into one
                  system, designed for the specific way each business operates.
                </p>
                <p className="re-spotlight-subtext mt-4">
                  <strong>Recent build:</strong> OMP CRM — pet grooming service
                  with custom CRM, customer self-service portal, and field team
                  mobile app — all connected to one system.
                </p>
              </div>

              <div className="re-spotlight-grid">
                {[
                  {
                    num: "01",
                    title: "Lead capture and distribution",
                    content:
                      "Multi-channel lead capture (website, ads, calls) feeding into a single system, with automatic distribution to the right team members based on rules you define.",
                  },
                  {
                    num: "02",
                    title: "Customer and patient management",
                    content:
                      "Complete history, treatment plans, payment cycles, follow-up reminders — all in one place. Accessible to the people who need it, hidden from those who don't.",
                  },
                  {
                    num: "03",
                    title: "Field team and customer apps",
                    content:
                      "When your team works in the field or your customers need self-service access, we build companion mobile apps that connect to the same backend.",
                  },
                  {
                    num: "04",
                    title: "Reporting and analytics dashboards",
                    content:
                      "Visual dashboards that show what's actually happening in your business — not vanity metrics, but the numbers that drive decisions.",
                  },
                ].map((card, index) => (
                  <div
                    key={index}
                    className={`re-spotlight-card ${
                      activeSpotlight === index ? "active" : ""
                    }`}
                  >
                    <button
                      onClick={() =>
                        setActiveSpotlight(
                          activeSpotlight === index ? null : index,
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
                        className={`re-spotlight-card-icon ${
                          activeSpotlight === index ? "rotate" : ""
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
                      className={`re-spotlight-card-body ${
                        activeSpotlight === index ? "expanded" : ""
                      }`}
                    >
                      <p>{card.content}</p>
                    </div>
                  </div>
                ))}
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
                  Building custom systems since 2018
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Businesses across aviation, healthcare, real estate, dental,
                  and pet services trust us to build the systems that run their
                  operations.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-12 md:gap-16 numbers">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold mb-3">5+</div>
                  <p className="inner-heading">Custom CRMs Delivered</p>
                  <p className="text-sm text-gray-500">
                    Across aviation, healthcare, real estate, dental, and pet
                    services
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold mb-3">
                    Since 2018
                  </div>
                  <p className="inner-heading">Building Web Applications</p>
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

          <section
            className="py-24 max-w-7xl mx-auto mt-5 web-dev-tabs"
            id="portfolio-tabs"
          >
            <h3 className="main-section-heading mb-4">
              Our CRM and web app projects
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
              <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="order-2 md:order-1 overflow-hidden">
                  <div key={activeTab} className="animate-fadeSlideIn">
                    <h2 className="inner-heading !text-xl">
                      {portfolioContent[activeTab].title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-2">
                      {portfolioContent[activeTab].subtitle}
                    </p>

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
                      Build Your CRM →
                    </Link>
                  </div>
                </div>

                {/* Right Content - Video */}
                <div className="order-1 md:order-2">
                  <div className="relative">
                    {/* Video Container */}
                    <div className="relative mx-auto">
                      <div className="rounded-lg overflow-hidden">
                        {/* <video
                          key={activeTab}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                          className="lg:w-75 sm:w-100 object-cover"
                        > */}
                        <Image
                          src={
                            activeTab === "customized"
                              ? "/omp-new.png"
                              : activeTab === "tailored"
                                ? "/kb-new.png"
                                : activeTab === "coaches"
                                  ? "/placeholder.png"
                                  : activeTab === "custom"
                                    ? "/ujjwal-new.png"
                                    : "/transaction-new.png"
                          }
                          width={1000}
                          height={800}
                          alt="Project Image"
                          className="crm-tab-image"
                          // quality={100}
                        />
                        {/* </video> */}
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
                    <h2
                      className="main-section-heading mb-4 mt-5"
                      id="devHeading"
                    >
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
                          Your team is running operations on Excel sheets that
                          should be in a proper system
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
                          You&apos;re paying for a SaaS CRM that doesn&apos;t
                          actually fit how your business works
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
                          Customer or lead data is scattered across multiple
                          disconnected tools
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
                          Your team wastes hours on manual tasks that should be
                          automated
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
                          You can&apos;t see what&apos;s happening in your
                          business in real time
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
                          Adding a new team member means another monthly
                          subscription cost
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
                          Your existing system can&apos;t handle complex
                          workflows or partial transactions
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
                          You need a custom solution but don&apos;t want to
                          manage in-house developers
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
          <h3
            className="main-section-heading mb-4 faq-heading text-center"
            id="devHeading"
          >
            Frequently asked questions
          </h3>
          {/* CRM page heading retained */}
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
                Ready to build a CRM or web app that fits your business?
              </div>
              <Link href="/book-a-call">Book a Discovery Call →</Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ShopifyDevelopment;
