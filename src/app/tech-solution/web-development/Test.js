"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import "./style.css";
import Image from "next/image";

const WebDevelopment = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [tabIndicator, setTabIndicator] = useState({ width: 0, left: 0 });
  const tabRefs = useRef([]);

  useEffect(() => {
    if (tabRefs.current[activeTab]) {
      const tab = tabRefs.current[activeTab];
      setTabIndicator({
        width: tab.offsetWidth,
        left: tab.offsetLeft,
      });
    }
  }, [activeTab]);

  const faqs = [
    {
      question: "What is custom web development?",
      answer:
        "Custom web development is the process of building unique websites and applications tailored specifically to your business needs, rather than using generic templates. Unlike pre-made themes or website builders, custom development gives you complete control over functionality, design, and user experience. This approach allows us to create solutions that perfectly align with your brand identity, integrate with your existing systems, and scale as your business grows. Custom websites typically perform better in search engines, load faster, and convert more visitors into customers because every element is optimized for your specific goals.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "Website development typically takes 4-8 weeks depending on complexity and requirements. A simple 5-page business website usually takes 4-6 weeks from kickoff to launch. Standard e-commerce sites with product catalogs and payment integration take 6-8 weeks. Complex web applications with custom features, dashboards, or integrations may require 8-12+ weeks. The timeline includes discovery, design, development, testing, and deployment phases. We provide a detailed project timeline during our initial consultation, with clear milestones so you know exactly what to expect at each stage.",
    },
    {
      question: "What technologies and platforms do you use?",
      answer:
        "We build websites using modern, industry-leading technologies including React, Next.js, Node.js, WordPress, Shopify, and WooCommerce. For front-end development, we use React and Next.js for fast, SEO-friendly websites. On the backend, we work with Node.js, PHP, and headless CMS solutions like Contentful and Strapi. For e-commerce, we specialize in Shopify and WooCommerce, integrating payment gateways like Razorpay, Stripe, and PayPal. Our technology choices depend on your specific needs—we recommend the stack that best serves your business goals, budget, and long-term scalability requirements rather than forcing a one-size-fits-all solution.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer:
        "Yes, absolutely. We offer comprehensive post-launch support and maintenance to keep your website secure, updated, and performing optimally. Our support packages include regular security updates, plugin and framework updates, database optimization, automated backups, uptime monitoring, performance tuning, and priority technical support. We offer three tiers: Essential (monthly maintenance and security updates), Growth (includes performance optimization and analytics), and Comprehensive (includes all of the above plus priority support and ongoing development). Your dedicated support team proactively monitors your site 24/7, identifies issues before they impact your business, and ensures compatibility with new browser versions.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Absolutely. We specialize in integrating websites with existing business systems and third-party tools. Common integrations we handle include CRM platforms (Salesforce, HubSpot, Zoho), payment gateways (Razorpay, Stripe, PayPal, CCAvenue), email marketing tools (Mailchimp, SendGrid, Klaviyo), inventory management systems, shipping providers (Shiprocket, Delhivery), and accounting software (QuickBooks, Tally). We work with APIs, webhooks, and custom middleware to ensure seamless data flow between your website and existing tools. During discovery, we audit your current tech stack and design an integration strategy that minimizes disruption to your operations.",
    },
    {
      question: "What is your development process?",
      answer:
        "Our development process follows four clear phases designed for transparency and quality. Phase 1: Discovery & Strategy (1 week) - we analyze your market, define requirements, map user flows, and create a detailed project roadmap. Phase 2: Design & Prototype (1-2 weeks) - our design team creates wireframes, interactive prototypes, and visual mockups, validated through usability testing. Phase 3: Development & Testing (2-4 weeks) - we build your website using modern frameworks, conduct rigorous QA testing across devices and browsers, and ensure flawless performance. Phase 4: Launch & Support (ongoing) - we manage deployment, configure analytics, monitor performance, and provide dedicated support. You receive regular updates at each milestone with opportunities to provide feedback and request revisions.",
    },
  ];

  return (
    <React.Fragment>
      <Head>
        <title>
          Web Development Services for E-Commerce | Custom Websites | The Tous
        </title>
        <meta
          name="description"
          content="Professional web development services for e-commerce businesses. Custom websites, online stores, and web applications built for conversions. 57+ websites delivered since 2018. India & International."
        />
        <meta
          name="keywords"
          content="web development services, e-commerce website development, custom website development, online store development, web application development, React development, Next.js development, Shopify development"
        />
        <link
          rel="canonical"
          href="https://thetous.com/tech-solution/web-development"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Web Development Services for E-Commerce | The Tous"
        />
        <meta
          property="og:description"
          content="Custom websites and web applications that convert. 57+ e-commerce websites delivered since 2018."
        />
        <meta
          property="og:image"
          content="https://thetous.com/services/tech/webdev.webp"
        />
        <meta
          property="og:url"
          content="https://thetous.com/tech-solution/web-development"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Web Development Services for E-Commerce | The Tous"
        />
        <meta
          name="twitter:description"
          content="Custom websites and web applications that convert. 57+ e-commerce websites delivered since 2018."
        />
        <meta
          name="twitter:image"
          content="https://thetous.com/services/tech/webdev.webp"
        />

        {/* Schema Markup - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "The Tous",
            url: "https://thetous.com",
            logo: "https://thetous.com/logo.png",
            foundingDate: "2018",
            description:
              "Professional web development and digital marketing agency specializing in e-commerce solutions",
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN",
            },
            sameAs: [
              "https://www.linkedin.com/company/thetous",
              "https://www.instagram.com/thetous",
            ],
          })}
        </script>

        {/* Schema Markup - Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Web Development Services",
            provider: {
              "@type": "Organization",
              name: "The Tous",
            },
            areaServed: {
              "@type": "Place",
              name: "India and International",
            },
            description:
              "Custom web development services including e-commerce websites, corporate websites, web applications, CMS integration, website redesign, and ongoing support and maintenance.",
            offers: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Custom E-Commerce Development",
                  description:
                    "Build high-converting online stores with Shopify, WooCommerce, or custom platforms with secure payment gateway integration.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Corporate Website Development",
                  description:
                    "Professional B2B and corporate websites designed to establish credibility and generate qualified leads.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Web Application Development",
                  description:
                    "Complex web applications and SaaS platforms built with React, Next.js, and Node.js.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "CMS Integration & Management",
                  description:
                    "WordPress, headless CMS solutions, and custom content management systems.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Website Redesign & Optimization",
                  description:
                    "Transform outdated websites into modern, high-performing conversion machines.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Ongoing Support & Maintenance",
                  description:
                    "Comprehensive maintenance packages including security updates, backups, and performance monitoring.",
                },
              },
            ],
          })}
        </script>

        {/* Schema Markup - FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is custom web development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Custom web development is the process of building unique websites and applications tailored specifically to your business needs, rather than using generic templates. Unlike pre-made themes or website builders, custom development gives you complete control over functionality, design, and user experience.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to build a website?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Website development typically takes 4-8 weeks depending on complexity and requirements. A simple 5-page business website usually takes 4-6 weeks from kickoff to launch. Standard e-commerce sites with product catalogs and payment integration take 6-8 weeks. Complex web applications with custom features may require 8-12+ weeks.",
                },
              },
              {
                "@type": "Question",
                name: "What technologies and platforms do you use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We build websites using modern, industry-leading technologies including React, Next.js, Node.js, WordPress, Shopify, and WooCommerce. For e-commerce, we specialize in Shopify and WooCommerce, integrating payment gateways like Razorpay, Stripe, and PayPal.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide ongoing support after launch?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, absolutely. We offer comprehensive post-launch support and maintenance to keep your website secure, updated, and performing optimally. Our support packages include regular security updates, plugin updates, database optimization, automated backups, uptime monitoring, and priority technical support.",
                },
              },
              {
                "@type": "Question",
                name: "Can you integrate with our existing systems?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. We specialize in integrating websites with existing business systems and third-party tools including CRM platforms (Salesforce, HubSpot, Zoho), payment gateways (Razorpay, Stripe, PayPal), email marketing tools, inventory management systems, and shipping providers.",
                },
              },
              {
                "@type": "Question",
                name: "What is your development process?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our development process follows four clear phases: Discovery & Strategy (1 week), Design & Prototype (1-2 weeks), Development & Testing (2-4 weeks), and Launch & Support (ongoing). You receive regular updates at each milestone with opportunities to provide feedback and request revisions.",
                },
              },
            ],
          })}
        </script>

        {/* Schema Markup - BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://thetous.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Tech Solutions",
                item: "https://thetous.com/tech-solution",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Web Development",
                item: "https://thetous.com/tech-solution/web-development",
              },
            ],
          })}
        </script>
      </Head>

      <main className="min-h-screen bg-white web-devlopment-main-page">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="py-24 hero-web-dev">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="col-md-6 col-lg-6 col-sm-12">
                <h1 className="main-section-heading">
                  Web & App Development Services for E-Commerce Businesses
                </h1>
                <p className="mb-6">
                  <strong>
                    Our development team builds custom websites and applications
                    that don&apos;t just look professional—they convert visitors
                    into customers and scale with your business. Since 2018,
                    we&apos;ve delivered 57+ high-performance websites for
                    e-commerce brands across India and internationally.
                  </strong>
                </p>

                <h2 className="text-2xl font-semibold mb-4 mt-8">
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
                      Your website looks fine but orders aren&apos;t coming in
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
                      Customers abandon carts before completing purchase
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
                      Your site is slow, hurting both SEO and conversions
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
                    <span>Managing inventory and orders feels complicated</span>
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
                    <span>Mobile users struggle to navigate and buy</span>
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
                      Your website can&apos;t handle growing traffic or catalog
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
                      Payment gateway integration is unreliable or insecure
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
                      You lack automation for customer follow-ups and recovery
                    </span>
                  </li>
                </ul>

                <Link href="/contact" className="inline-block c_button_black">
                  Start a Project
                </Link>
              </div>

              {/* Right Column - Client Logos */}
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="bs-container-clients">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center client-row-1">
                    <div>
                      <Image
                        src="/clients/biodreama.webp"
                        alt="Biodreama Client"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div>
                      <Image
                        src="/clients/cozzet.webp"
                        alt="Cozzet Client"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div>
                      <Image
                        src="/clients/fnp.webp"
                        alt="Ferns N Petals Client"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div>
                      <Image
                        width={100}
                        height={100}
                        src="/clients/luxeliv.webp"
                        alt="Luxeliv Client"
                      />
                    </div>
                    <div>
                      <Image
                        width={100}
                        height={100}
                        src="/clients/naarya.webp"
                        alt="Naarya Client"
                      />
                    </div>
                    <div>
                      <Image
                        width={100}
                        height={100}
                        src="/clients/ohmypet.webp"
                        alt="Oh My Pet Client"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Overview - 6 Item Accordion */}
          <section className="py-24 max-w-7xl mx-auto what-we-offer-web-dev">
            <h3 className="main-section-heading mb-12">
              Our Web Development Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 content-wrapper">
              {/* Service 1: Custom E-Commerce Development */}
              <div className="content-div border-2 border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() =>
                    setActiveService(activeService === 0 ? null : 0)
                  }
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
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
                    <p>
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

              {/* Service 2: Corporate Website Development */}
              <div className="content-div border-2 border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() =>
                    setActiveService(activeService === 1 ? null : 1)
                  }
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
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
                        Corporate Website Development
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

              {/* Service 3: Web Application Development */}
              <div className="content-div border-2 border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() =>
                    setActiveService(activeService === 2 ? null : 2)
                  }
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
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
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        />
                      </svg>
                      <h3 className="inner-heading">
                        Web Application Development
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

              {/* Service 4: CMS Integration & Management */}
              <div className="content-div border-2 border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() =>
                    setActiveService(activeService === 3 ? null : 3)
                  }
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
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
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      <h3 className="inner-heading">
                        CMS Integration & Management
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
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeService === 3 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p>
                      Take complete control of your website content with
                      WordPress, headless CMS solutions (Contentful, Strapi), or
                      custom content management systems. We set up intuitive
                      admin panels where your team can easily update pages,
                      publish blog posts, manage products, and modify content
                      without technical knowledge. Perfect for marketing teams
                      and businesses that need content flexibility, our CMS
                      implementations include custom post types, advanced user
                      permissions, and SEO-friendly structures.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 5: Website Redesign & Optimization */}
              <div className="content-div border-2 border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() =>
                    setActiveService(activeService === 4 ? null : 4)
                  }
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
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
                        Website Redesign & Optimization
                      </h3>
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
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeService === 4 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p>
                      Transform your outdated website into a modern,
                      high-performing conversion machine. We conduct
                      comprehensive UX audits, identify conversion bottlenecks,
                      improve page load speeds, enhance mobile responsiveness,
                      and redesign user journeys based on analytics data and
                      user behavior. Your redesigned site will feature
                      contemporary design aesthetics, improved navigation
                      architecture, faster loading times, better SEO structure,
                      and strategic placement of CTAs to dramatically increase
                      engagement, reduce bounce rates, and drive more
                      conversions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 6: Ongoing Support & Maintenance */}
              <div className="content-div border-2 border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() =>
                    setActiveService(activeService === 5 ? null : 5)
                  }
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
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
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <h3 className="inner-heading">
                        Ongoing Support & Maintenance
                      </h3>
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
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeService === 5 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p>
                      Keep your website secure, updated, and performing
                      optimally with our comprehensive maintenance packages. We
                      provide regular security patches, plugin and framework
                      updates, database optimization, automated backups, uptime
                      monitoring, performance tuning, and priority technical
                      support. Your dedicated support team proactively
                      identifies and resolves issues before they impact your
                      business, ensures compatibility with new browser versions,
                      and keeps your site running smoothly 24/7 so you can focus
                      on growth without technical worries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <h3 className="main-section-heading">Our Development Process</h3>
          <section className="py-24 bg-gray-50 -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8 our-process-web-dev">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-4 gap-12 content-wrapper">
                <div className="content-div">
                  <span className="text-6xl font-bold text-gray-200">01</span>
                  <h3 className="inner-heading">Discover & Strategy</h3>
                  <p className="">
                    Our strategists analyze your market position, competitor
                    landscape, and customer journey to identify conversion
                    opportunities. We define technical requirements, map user
                    flows, and establish clear project milestones that align
                    development with your business objectives.
                  </p>
                </div>
                <div className="content-div">
                  <span className="text-6xl font-bold text-gray-200">02</span>
                  <h3 className="inner-heading">Design & Prototype</h3>
                  <p className="">
                    Our 15+ design specialists craft user-centered experiences
                    through wireframes, interactive prototypes, and visual
                    mockups. We validate designs with usability testing,
                    ensuring every element serves both aesthetic and conversion
                    goals before a single line of code is written.
                  </p>
                </div>
                <div className="content-div">
                  <span className="text-6xl font-bold text-gray-200">03</span>
                  <h3 className="inner-heading">Develop & Test</h3>
                  <p className="">
                    With 6+ years of development expertise and 57+ successful
                    launches, our team builds robust, scalable solutions using
                    modern frameworks. We conduct rigorous QA testing across
                    devices, browsers, and real-world scenarios to ensure
                    flawless performance before launch.
                  </p>
                </div>
                <div className="content-div">
                  <span className="text-6xl font-bold text-gray-200">04</span>
                  <h3 className="inner-heading">Launch & Support</h3>
                  <p className="">
                    We manage seamless deployment, configure analytics tracking,
                    and monitor performance metrics closely post-launch. Our
                    dedicated support team remains available to address issues,
                    implement optimizations, and ensure your website continues
                    delivering results as your business grows.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-24 max-w-7xl mx-auto why-choose-us-web-dev">
            <div className="mb-12">
              <h3 className="main-section-heading">
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
                <h3 className="inner-heading">
                  E-Commerce Focused Development
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  57+ e-commerce websites delivered since 2018
                </p>
                <p className="">
                  We specialize in building online stores that actually convert.
                  Our e-commerce sites integrate payment gateways, inventory
                  systems, and cart recovery tools that directly impact your
                  bottom line. Real clients have seen order growth from 150-184%
                  within months of launch.
                </p>
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
                <p className="">
                  Speed is revenue. We build lightning-fast websites using
                  Next.js, optimized images, and efficient code that loads in
                  under 2 seconds. Every millisecond counts—faster sites rank
                  higher in Google, reduce bounce rates, and convert more
                  visitors into customers.
                </p>
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
                <p className="">
                  Your business won&apos;t stay the same size forever. We build
                  scalable solutions using React, Node.js, and cloud
                  infrastructure that handle traffic spikes effortlessly.
                  Whether you&apos;re adding 100 products or 10,000 customers,
                  your website architecture won&apos;t break under pressure.
                </p>
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
                <p className="">
                  You get a complete team, not just developers. Our integrated
                  approach combines strategy, design, development, SEO, and
                  ongoing support under one roof. No coordination headaches, no
                  vendor juggling—just a single partnership that delivers
                  measurable results.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-24 -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8 stats-web-dev mb-5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 content">
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                  Our Track Record
                </p>
                <h2 className="main-section-heading">
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
                  <div className="text-6xl md:text-7xl font-bold mb-3">57+</div>
                  <p className="text-gray-600 font-semibold mb-2">
                    Websites Delivered
                  </p>
                  <p className="text-sm text-gray-500">
                    E-commerce & corporate sites launched since 2018
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold mb-3">6+</div>
                  <p className="text-gray-600 font-semibold mb-2">
                    Years of Excellence
                  </p>
                  <p className="text-sm text-gray-500">
                    Trusted development partner for growing brands
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold mb-3">15+</div>
                  <p className="text-gray-600 font-semibold mb-2">
                    Development Specialists
                  </p>
                  <p className="text-sm text-gray-500">
                    Designers, developers, strategists & support team
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Feature Inclusions */}
          <section className="py-24 bg-white standard-feature">
            <div className="max-w-7xl mx-auto">
              <h3 className="main-section-heading">Standard Features</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 pb-6 border-b border-gray-200 py-3 ">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center me-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <span className="inner-heading">
                    Responsive across devices
                  </span>
                </div>

                <div className="flex items-start space-x-4 pb-6 border-b border-gray-200 py-3 ">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center me-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <span className="inner-heading">CMS Integration</span>
                </div>

                <div className="flex items-start space-x-4 pb-6 border-b border-gray-200 py-3 ">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center me-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <span className="inner-heading">SEO Best Practices</span>
                </div>

                <div className="flex items-start space-x-4 pb-6 border-b border-gray-200 py-3 ">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center me-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <span className="inner-heading">
                    Performance Optimization
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Tab Section - Portfolio Showcase */}
          <section className="py-24 bg-gray-50 -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8 web-dev-tabs">
            <div className="max-w-7xl mx-auto">
              {/* Tab Navigation */}
              <div className="flex justify-center mb-12">
                <div className="inline-flex gap-3 bg-white p-2 rounded-full shadow-lg tab-nav-wrapper relative">
                  {/* Sliding Indicator */}
                  <div
                    className="tab-indicator"
                    style={{
                      width: `${tabIndicator.width}px`,
                      transform: `translateX(${tabIndicator.left}px)`,
                    }}
                  />

                  <button
                    ref={(el) => (tabRefs.current[0] = el)}
                    onClick={() => setActiveTab(0)}
                    className={`tab-button px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTab === 0
                        ? "text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Customized Workouts
                  </button>
                  <button
                    ref={(el) => (tabRefs.current[1] = el)}
                    onClick={() => setActiveTab(1)}
                    className={`tab-button px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTab === 1
                        ? "text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Tailored Exercises
                  </button>
                  <button
                    ref={(el) => (tabRefs.current[2] = el)}
                    onClick={() => setActiveTab(2)}
                    className={`tab-button px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTab === 2
                        ? "text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Top Coaches
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="tab-content-wrapper">
                <div
                  className="tab-slide-container"
                  style={{ transform: `translateX(-${activeTab * 100}%)` }}
                >
                  {/* Tab 1: E-Commerce Platform */}
                  <div
                    className={`tab-panel ${activeTab !== 0 ? "inactive" : ""}`}
                  >
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                      {/* Left: Content */}
                      <div className="phone-content">
                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                          Your Goals
                        </p>
                        <h3 className="inner-heading mb-6">
                          Customized Workouts{" "}
                          <span className="text-gray-400">for You</span>
                        </h3>
                        <p className="mb-8">
                          Individualized programs are tailored specifically to
                          your body, lifestyle, and fitness goals, ensuring
                          every workout is optimized for you.
                        </p>
                        <Link href="/work" className="c_button_black">
                          Download App
                        </Link>
                      </div>

                      {/* Right: Phone Mockup */}
                      <div className="flex justify-center phone-mockup">
                        <div className="relative w-80 h-[600px] bg-white rounded-[3rem] border-8 border-black shadow-2xl p-4">
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>

                          <div className="h-full overflow-hidden rounded-[2.5rem] bg-gray-50 p-6">
                            <div className="flex gap-2 mb-6">
                              <button className="px-4 py-2 bg-gray-200 rounded-full text-sm">
                                Plan Setup
                              </button>
                              <button className="px-4 py-2 bg-gray-200 rounded-full text-sm">
                                Challenges
                              </button>
                              <button className="px-4 py-2 bg-gray-200 rounded-full text-sm">
                                Trainers
                              </button>
                              <button className="px-4 py-2 bg-gray-200 rounded-full text-sm">
                                Fitness Plan
                              </button>
                            </div>

                            <div className="bg-white rounded-3xl p-6 shadow-lg">
                              <div className="text-center mb-6">
                                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                                <h4 className="font-semibold text-lg mb-2">
                                  Fitness
                                  <br />
                                  Program
                                  <br />
                                  Plan
                                </h4>
                              </div>

                              <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                  <span className="text-2xl">💪</span>
                                  <div>
                                    <p className="font-semibold text-sm">
                                      5/11, 140 lbs
                                    </p>
                                    <p className="text-xs text-gray-500">
                                      Body Assessment
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-3">
                                  <span className="text-2xl"></span>
                                  <div>
                                    <p className="font-semibold text-sm">
                                      2 658 kcal
                                    </p>
                                    <p className="text-xs text-gray-500">
                                      Calorie Estimate
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-3">
                                  <span className="text-2xl">🏋️</span>
                                  <div>
                                    <p className="font-semibold text-sm">
                                      Full body
                                    </p>
                                    <p className="text-xs text-gray-500">
                                      Workout focus
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-3">
                                  <span className="text-2xl">💪</span>
                                  <div>
                                    <p className="font-semibold text-sm">
                                      Beginner
                                    </p>
                                    <p className="text-xs text-gray-500">
                                      Fitness adjustment
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="mt-6 bg-black text-white text-center py-3 rounded-xl">
                                <p className="text-2xl font-bold">97%</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Icon Card */}
                    <div className="flex justify-end mt-8 icon-card">
                      <div className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-xs">
                        <div className="text-5xl mb-3">😊</div>
                        <p className="font-semibold">
                          Transform Dreams
                          <br />
                          Into Reality
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tab 2: Web Application */}
                  <div
                    className={`tab-panel ${activeTab !== 1 ? "inactive" : ""}`}
                  >
                    <div className="mb-32">
                      <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Left: Phone Mockup */}
                        <div className="flex justify-center">
                          <div className="relative w-80 h-[600px] bg-white rounded-[3rem] border-8 border-black shadow-2xl p-4">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>

                            <div className="h-full overflow-hidden rounded-[2.5rem] bg-gray-50 p-6">
                              <button className="mb-4 text-gray-600">
                                ← Back
                              </button>

                              <h4 className="text-xl mb-4">
                                Pick a{" "}
                                <span className="text-gray-400">Challenge</span>
                              </h4>

                              <div className="bg-gray-800 rounded-3xl p-6 text-white">
                                <div className="w-full h-40 bg-gray-600 rounded-2xl mb-4"></div>

                                <div className="flex items-center gap-2 mb-3">
                                  <span className="text-sm">🏋️ 🏃 💪</span>
                                  <span className="text-xs">• 100k users</span>
                                </div>

                                <h5 className="font-bold mb-2">
                                  Full body workout
                                </h5>
                                <p className="text-xs text-gray-300 mb-6">
                                  Start shaping up your body today with multiple
                                  muscle targeting for a full-body workout.
                                </p>

                                <button className="w-full bg-white text-black py-3 rounded-xl font-semibold">
                                  Continue
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right: Content */}
                        <div className="phone-content">
                          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                            Stronger Together
                          </p>
                          <h3 className="inner-heading mb-6">
                            Tailored Exercises{" "}
                            <span className="text-gray-400">
                              for Every Goal
                            </span>
                          </h3>
                          <p className="mb-8">
                            Personalized workout plans crafted to suit your
                            body, routine, and fitness ambitions. Every session
                            is designed to maximize your results.
                          </p>
                          <Link href="/work" className="c_button_black">
                            Download App
                          </Link>
                        </div>
                      </div>

                      {/* Icon Card */}
                      <div className="flex justify-start mt-8 icon-card">
                        <div className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-xs">
                          <div className="text-5xl mb-3">🥑</div>
                          <p className="font-semibold">
                            Fuel Progress With
                            <br />
                            Smart Nutrition
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab 3: Corporate Website */}
                  <div
                    className={`tab-panel ${activeTab !== 2 ? "inactive" : ""}`}
                  >
                    <div>
                      <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Left: Content */}
                        <div className="phone-content">
                          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                            Expert Guidance
                          </p>
                          <h3 className="inner-heading mb-6">
                            Top Coaches{" "}
                            <span className="text-gray-400">
                              Proven Results
                            </span>
                          </h3>
                          <p className="mb-8">
                            Our app features a diverse team of professional
                            trainers with years of experience. Whether
                            you&apos;re a beginner or advanced.
                          </p>
                          <Link href="/work" className="c_button_black">
                            Download App
                          </Link>
                        </div>

                        {/* Right: Phone Mockup */}
                        <div className="flex justify-center phone-mockup">
                          <div className="relative w-80 h-[600px] bg-white rounded-[3rem] border-8 border-black shadow-2xl p-4">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>

                            <div className="h-full overflow-hidden rounded-[2.5rem] bg-gray-50 p-6">
                              <button className="mb-4 text-gray-600">
                                ← Back
                              </button>

                              <h4 className="text-xl mb-6">
                                Choose a{" "}
                                <span className="text-gray-400">Trainer</span>
                              </h4>

                              <div className="space-y-4">
                                <div className="bg-white rounded-2xl p-4 flex items-center gap-4">
                                  <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                                  <div className="flex-1">
                                    <h5 className="font-bold">John Carter</h5>
                                    <p className="text-xs text-gray-500">
                                      Championship bodybuilding...
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">
                                      10+ years
                                    </p>
                                  </div>
                                </div>

                                <div className="bg-white rounded-2xl p-4 flex items-center gap-4">
                                  <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                                  <div className="flex-1">
                                    <h5 className="font-bold">
                                      Tatiana Kenter
                                    </h5>
                                    <p className="text-xs text-gray-500">
                                      Expert in strength training...
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">
                                      10 years
                                    </p>
                                  </div>
                                </div>

                                <div className="bg-white rounded-2xl p-4 flex items-center gap-4">
                                  <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                                  <div className="flex-1">
                                    <h5 className="font-bold">
                                      Davila Konsgaard
                                    </h5>
                                    <p className="text-xs text-gray-500">
                                      Home fitness expert...
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">
                                      8 years
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Icon Card */}
                      <div className="flex justify-end mt-8 icon-card">
                        <div className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-xs">
                          <div className="text-5xl mb-3">✅</div>
                          <p className="font-semibold">
                            Success Starts
                            <br />
                            With A Plan
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Studies Section */}
          <section className="py-24 max-w-7xl mx-auto">
            <div className="mb-12">
              <h3 className="main-section-heading">
                Real Results from Real Projects
              </h3>
              <p className="text-gray-600 max-w-2xl">
                Explore how we&apos;ve helped businesses transform their online
                presence with high-performance websites
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Case Study 1: Luxeliv */}
              <Link href="/case-studies/luxeliv" className="group block">
                <div className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-black transition-all">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-300">
                      Luxeliv
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                        Website
                      </span>
                      <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                        E-Commerce
                      </span>
                      <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                        SEO
                      </span>
                    </div>
                    <h4 className="inner-heading mb-2 group-hover:text-gray-600 transition-colors">
                      Luxury Lifestyle E-Commerce
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      150-184% order growth, ₹60K to ₹2.41L monthly revenue,
                      2.13% conversion rate
                    </p>
                    <span className="text-sm font-medium group-hover:underline">
                      View Case Study →
                    </span>
                  </div>
                </div>
              </Link>

              {/* Case Study 2: Madhu Cookware */}
              <Link href="/case-studies/madhu-cookware" className="group block">
                <div className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-black transition-all">
                  <div className="aspect-video bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-300">
                      Madhu
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                        Website
                      </span>
                      <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                        SEO
                      </span>
                      <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                        E-Commerce
                      </span>
                    </div>
                    <h4 className="inner-heading mb-2 group-hover:text-gray-600 transition-colors">
                      Kitchenware Manufacturer
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Modern e-commerce platform with SEO optimization driving
                      organic traffic
                    </p>
                    <span className="text-sm font-medium group-hover:underline">
                      View Case Study →
                    </span>
                  </div>
                </div>
              </Link>

              {/* Case Study 3: Dhirsons Jewellery */}
              <Link
                href="/case-studies/dhirsons-jewellery-house"
                className="group block"
              >
                <div className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-black transition-all">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-300">
                      Dhirsons
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                        Website
                      </span>
                      <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                        SEO
                      </span>
                    </div>
                    <h4 className="inner-heading mb-2 group-hover:text-gray-600 transition-colors">
                      Premium Jewellery Boutique
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      120% increase in inquiries, 80% better rankings, 60% boost
                      in engagement
                    </p>
                    <span className="text-sm font-medium group-hover:underline">
                      View Case Study →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="text-center mt-12">
              <Link href="/work" className="inline-block c_button_black">
                View All Projects
              </Link>
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
                Together, let&apos;s have a quantifiable effect on your company.
              </div>
              <Link href="">Design A Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default WebDevelopment;

{
  /* Selected Work with Tabs */
}
<section className="py-24 max-w-7xl mx-auto mt-5 mb-5 web-dev-tabs">
  <h3 className="main-section-heading">Our Projects</h3>
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
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-2 span">
            {activeTab === "customized" && "Your Goals"}
            {activeTab === "tailored" && "Stronger Together"}
            {activeTab === "coaches" && "Expert Guidance"}
            {activeTab === "custom" && "Personalized Plans"}
          </p>
          <h2 className="inner-heading">{portfolioContent[activeTab].title}</h2>
          <h3 className="inner-heading">
            {portfolioContent[activeTab].subtitle}
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {portfolioContent[activeTab].description}
          </p>
          <Link href="/contact" className="inline-block c_button_black">
            Download App
          </Link>
        </div>
      </div>

      {/* Right Content - Projects */}
      <div className="order-1 md:order-2">
        <div className="relative">
          {/* Phone Mockup Container */}
          <div className="relative mx-auto max-w-sm">
            {/* Phone Frame */}
            <div className="bg-black rounded-[3rem] p-4 shadow-2xl">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                {/* Phone Content */}
                <div className="p-6 min-h-[600px] flex flex-col">
                  {/* Tab Navigation Inside Phone */}
                  <div className="flex gap-2 mb-6 bg-gray-100 rounded-full p-1 phone-button">
                    <button className="flex-1 py-2 text-xs font-medium bg-white rounded-full shadow-sm">
                      Plan Setup
                    </button>
                    <button className="flex-1 py-2 text-xs font-medium text-gray-600">
                      Challenges
                    </button>
                    <button className="flex-1 py-2 text-xs font-medium text-gray-600">
                      Trainers
                    </button>
                    <button className="flex-1 py-2 text-xs font-medium text-gray-600">
                      Fitness Plan
                    </button>
                  </div>

                  {/* Dynamic Content */}
                  <div className="flex-1 flex flex-col justify-between overflow-hidden phone-content">
                    <div
                      key={`projects-${activeTab}`}
                      className="animate-fadeSlideIn"
                    >
                      {portfolioContent[activeTab].projects.map(
                        (project, index) => (
                          <div
                            key={index}
                            className="mb-4 p-4 bg-gray-50 rounded-0 border border-gray-200"
                            style={{
                              animationDelay: `${index * 0.1}s`,
                            }}
                          >
                            <h4 className="font-semibold text-sm mb-2 inner-heading">
                              {project.title}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {project.description}
                            </p>
                          </div>
                        )
                      )}
                    </div>

                    {/* Bottom Button */}
                    <button className="w-full bg-black text-white py-4 rounded-2xl font-medium text-sm mt-4">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Element */}
            <div
              key={`floating-${activeTab}`}
              className="absolute -right-4 top-[65%] transform -translate-y-1/2 bg-white rounded-sm p-4  shadow-lg animate-fadeSlideIn"
            >
              <div className="text-4xl mb-2">
                {activeTab === "customized" && "😊"}
                {activeTab === "tailored" && "🥑"}
                {activeTab === "coaches" && "💪"}
                {activeTab === "custom" && "✅"}
              </div>
              <p className="text-xs font-medium text-gray-800 whitespace-nowrap">
                {activeTab === "customized" && "Transform Dreams"}
                {activeTab === "tailored" && "Fuel Progress With"}
                {activeTab === "coaches" && "Proven Results"}
                {activeTab === "custom" && "Success Starts"}
              </p>
              <p className="text-xs text-gray-600 whitespace-nowrap">
                {activeTab === "customized" && "Into Reality"}
                {activeTab === "tailored" && "Smart Nutrition"}
                {activeTab === "coaches" && "Expert Guidance"}
                {activeTab === "custom" && "With A Plan"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>;

const portfolioTabs = [
  { id: "customized", label: "Customized Workouts" },
  { id: "tailored", label: "Tailored Exercises" },
  { id: "coaches", label: "Top Coaches" },
  { id: "custom", label: "Custom Workouts" },
];

const portfolioContent = {
  customized: {
    title: "Customized Workouts",
    subtitle: "for You",
    description:
      "Individual programs are tailored specifically to your body, lifestyle, and fitness goals, ensuring every workout is optimized for you.",
    projects: [
      {
        title: "E-Commerce Platform",
        description: "Custom storefront with advanced inventory management",
      },
      {
        title: "Corporate Website",
        description: "Modern presence with seamless CMS integration",
      },
    ],
  },
  tailored: {
    title: "Tailored Exercises",
    subtitle: "for Every Goal",
    description:
      "Personalized workout plans crafted to suit your body, routine, and fitness ambitions. Every session is designed to maximize your results.",
    projects: [
      {
        title: "SaaS Application",
        description: "Scalable platform serving thousands of users",
      },
      {
        title: "Portfolio Site",
        description: "Minimal design showcasing creative work",
      },
    ],
  },
  coaches: {
    title: "Top Coaches",
    subtitle: "Proven Results",
    description:
      "Our app features a diverse team of professional trainers with years of experience. Whether you're a beginner or advanced.",
    projects: [
      {
        title: "Mobile App",
        description: "Native iOS and Android experience",
      },
      {
        title: "Dashboard Platform",
        description: "Real-time analytics and reporting",
      },
    ],
  },
  custom: {
    title: "Custom Workouts",
    subtitle: "Just For You",
    description:
      "Designed around your unique needs, our smart system generates the ideal workout plan. It's your personal blueprint for achieving your best results.",
    projects: [
      {
        title: "Booking System",
        description: "Automated scheduling and management",
      },
      {
        title: "Payment Gateway",
        description: "Secure transactions and subscriptions",
      },
    ],
  },
};
