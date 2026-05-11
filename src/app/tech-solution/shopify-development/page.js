import ShopifyDevelopmentClient from "./shopify-development-client";

export const metadata = {
  title: "Shopify Development for D2C Brands | The Tous",
  description:
    "Shopify store development for D2C brands. Custom themes, migrations, and conversion optimization. The Tous shipped Silvago (0.7% to 2.4% conversion lift), Caselulu, Luxeliv, and more. ₹50K-₹2L typical range.",
  openGraph: {
    title: "Shopify Development for D2C Brands | The Tous",
    description:
      "Custom Shopify themes, migrations, and conversion optimization for D2C brands. Silvago: 0.7% to 2.4% conversion lift. 150+ projects since 2018.",
    url: "https://thetous.com/tech-solution/shopify-development",
    siteName: "The Tous",
    images: [
      {
        url: "https://thetous.com/images/og-homepage.jpg",
        width: 1200,
        height: 630,
        alt: "The Tous — Shopify Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development | The Tous",
    description:
      "Custom Shopify themes and conversion optimization for D2C brands.",
    images: ["https://thetous.com/images/og-homepage.jpg"],
  },
  alternates: {
    canonical: "https://thetous.com/tech-solution/shopify-development",
  },
};

const shopifyFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a Shopify store cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our typical Shopify builds range ₹50,000 to ₹2,00,000 depending on scope, custom features, and migration complexity. We provide a fixed quote after a 30-minute discovery call. No hourly billing surprises.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a Shopify build take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most builds ship in 3-5 weeks from kickoff. Migrations take 4-6 weeks. Conversion-only optimization projects (no rebuild) ship in 1-2 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build with custom code or use templates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We start from a clean Shopify theme (Dawn or a premium base) and customize heavily — sections, layouts, product page logic. We don't use generic ready-made templates. Every store gets custom design and code where it matters.",
      },
    },
    {
      "@type": "Question",
      name: "What apps do you typically use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As few as possible. Apps slow stores down. We build features in code where it's cleaner — for example, custom upsells, product bundling, or filtering — and only use apps where they're genuinely better than custom (Klaviyo for email, Judge.me for reviews, Shipway for logistics).",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle SEO and ads after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO yes — every store ships with on-page SEO, schema markup, and a content plan. For paid ads, we focus on conversion optimization within Shopify. If you need full ad management, we partner with specialist agencies.",
      },
    },
    {
      "@type": "Question",
      name: "What if my store needs work after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every Shopify build comes with 30 days of post-launch support included. Beyond that, you can engage us for ongoing optimization on a monthly retainer or project basis.",
      },
    },
    {
      "@type": "Question",
      name: "Can you migrate my existing Shopify or non-Shopify store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We handle migrations from WooCommerce, Magento, Wix, Squarespace, and custom-built sites. Includes products, customers, orders, content, and SEO redirects to preserve search rankings.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with international brands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We've delivered for clients across India and the US. Multi-currency, multi-language, and international shipping setup is part of our standard scope when needed.",
      },
    },
  ],
};

const shopifyServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Shopify Development",
  name: "Shopify Development by The Tous",
  description:
    "Custom Shopify theme development, store migrations from WooCommerce/Magento, and conversion optimization for D2C brands. Silvago conversion lifted from 0.7% to 2.4%. 150+ projects shipped since 2018.",
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
    audienceType: "D2C brands, ecommerce founders, retail businesses",
  },
  offers: {
    "@type": "Offer",
    description:
      "Shopify store development from ₹50,000 to ₹2,00,000+ depending on scope.",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "INR",
      minPrice: "50000",
      maxPrice: "200000",
      description: "Most Shopify projects range ₹1L-₹2L.",
    },
  },
  url: "https://thetous.com/tech-solution/shopify-development",
};

export default function ShopifyDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shopifyFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shopifyServiceSchema) }}
      />
      <ShopifyDevelopmentClient />
    </>
  );
}
