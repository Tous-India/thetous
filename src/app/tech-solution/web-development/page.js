import WebDevelopmentClient from "./web-development-client";

export const metadata = {
  title: "Custom Web Development for B2B Businesses",
  description:
    "Custom-coded websites built with Next.js, React, and Node.js. The Tous builds high-performing B2B and SaaS websites that load fast and convert. 150+ projects since 2018.",
  openGraph: {
    title: "Custom Web Development for B2B Businesses | The Tous",
    description:
      "Custom-coded websites for B2B and SaaS brands. Next.js, React, Node.js. 150+ projects shipped since 2018.",
    url: "https://thetous.com/tech-solution/web-development",
    siteName: "The Tous",
    images: [
      {
        url: "https://thetous.com/images/og-homepage.jpg",
        width: 1200,
        height: 630,
        alt: "The Tous — Custom Web Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Development | The Tous",
    description:
      "Custom-coded websites for B2B and SaaS brands. 150+ projects shipped since 2018.",
    images: ["https://thetous.com/images/og-homepage.jpg"],
  },
  alternates: {
    canonical: "https://thetous.com/tech-solution/web-development",
  },
};

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

const webDevServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom Web Development",
  name: "Custom Web Development by The Tous",
  description:
    "Custom-coded websites built with Next.js, React, and Node.js for B2B businesses, SaaS startups, and service companies. Designed to load fast, convert visitors, and scale.",
  provider: {
    "@type": "Organization",
    name: "The Tous",
    url: "https://thetous.com",
    logo: "https://thetous.com/images/logo.png",
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
  ],
  audience: {
    "@type": "BusinessAudience",
    audienceType: "B2B businesses, SaaS startups, service companies",
  },
  offers: {
    "@type": "Offer",
    description: "Custom website development quoted per project based on scope.",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "INR",
      description:
        "Custom websites quoted per project. Most projects ranging ₹2L-₹15L+",
    },
  },
  url: "https://thetous.com/tech-solution/web-development",
};

export default function WebDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webDevFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webDevServiceSchema) }}
      />
      <WebDevelopmentClient />
    </>
  );
}
