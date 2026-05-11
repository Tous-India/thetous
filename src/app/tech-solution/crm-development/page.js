import CrmDevelopmentClient from "./crm-development-client";

export const metadata = {
  title: "Custom CRM & Web App Development | The Tous",
  description:
    "Custom CRM and internal tools built for B2B operations — lead capture, agent assignment, customer portals, mobile apps. Built 5 CRMs in the last 8 months. The Tous specializes in CRMs that fit your workflow, not the other way around.",
  openGraph: {
    title: "Custom CRM & Web App Development | The Tous",
    description:
      "Custom CRMs and internal tools for B2B operations. 5 CRMs delivered in the last 8 months. Built for businesses that outgrew HubSpot or Zoho.",
    url: "https://thetous.com/tech-solution/crm-development",
    siteName: "The Tous",
    images: [
      {
        url: "https://thetous.com/images/og-homepage.jpg",
        width: 1200,
        height: 630,
        alt: "The Tous — CRM & Web App Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom CRM Development | The Tous",
    description: "Custom CRMs and internal tools for B2B operations.",
    images: ["https://thetous.com/images/og-homepage.jpg"],
  },
  alternates: {
    canonical: "https://thetous.com/tech-solution/crm-development",
  },
};

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

const crmServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom CRM & Web Application Development",
  name: "Custom CRM Development by The Tous",
  description:
    "Custom CRMs, internal dashboards, and web applications for B2B operations. Lead capture, agent assignment, customer portals, mobile apps. Built for businesses that outgrew off-the-shelf tools like HubSpot, Zoho, or Salesforce. 5 CRMs delivered in the last 8 months.",
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
    audienceType:
      "B2B operations, mid-market businesses, service companies, healthcare providers",
  },
  offers: {
    "@type": "Offer",
    description:
      "Custom CRM development quoted per project based on workflow complexity and integrations.",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "INR",
      description: "CRM and web app projects quoted per scope.",
    },
  },
  url: "https://thetous.com/tech-solution/crm-development",
};

export default function CrmDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crmFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crmServiceSchema) }}
      />
      <CrmDevelopmentClient />
    </>
  );
}
