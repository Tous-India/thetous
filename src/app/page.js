"use client";
import usePageTitle from "@/hooks/usePageTitle";
import { useEffect } from "react";
import Banner from "@/components/home/Banner";
import Work from "@/components/home/Work";
import Exquisites from "@/components/home/Exquisites";
import Blogs from "@/components/home/Blogs";
import Sliders from "@/components/home/Sliders";
import About from "@/components/home/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "lenis";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Marquee from "@/components/home/Marquee";
import WhyWeUs from "@/components/home/WhyWeUs";
import "swiper/css";
import "swiper/css/navigation";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Tous",
  alternateName: "The Tous Media",
  url: "https://thetous.com",
  logo: "https://www.thetous.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblack-the-tous-new.266d68ba.png&w=2048&q=75",
  description:
    "Web. Shopify. CRM. The Tous builds custom websites, Shopify stores, and CRMs for D2C and B2B brands. 150+ projects shipped since 2018.",
  foundingDate: "2018",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C-116, 1st Floor, Sector-2",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201301",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "grow@thetous.com",
      telephone: "+91-8901440322",
      contactType: "Sales",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: [
    "https://www.instagram.com/thetousmedia",
    "https://www.linkedin.com/company/the-tous",
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "Grid IT Solutions",
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "The Tous",
  url: "https://thetous.com",
  description:
    "Web development, Shopify, and CRM agency for D2C and B2B brands.",
  publisher: {
    "@type": "Organization",
    name: "The Tous",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://thetous.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "The Tous",
  image: "https://thetous.com/images/og-homepage.jpg",
  "@id": "https://thetous.com",
  url: "https://thetous.com",
  telephone: "+91-8901440322",
  priceRange: "₹50,000 - ₹2,00,000+",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C-116, 1st Floor, Sector-2",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201301",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5355,
    longitude: 77.391,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:30",
    closes: "17:30",
  },
  sameAs: [
    "https://www.instagram.com/thetousmedia",
    "https://www.linkedin.com/company/the-tous",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our typical website builds range ₹50,000 to ₹2,00,000 depending on scope. Custom CRM and web app projects range ₹1,50,000 to ₹6,00,000+. Shopify stores range ₹50,000 to ₹2,00,000. We provide a fixed quote after a 30-minute discovery call.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Business websites typically ship in 4-8 weeks. Shopify stores in 3-5 weeks. Custom CRMs and web applications take 8-16 weeks depending on scope. We give you a fixed timeline after the discovery call.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with brands outside India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our work spans India and the US. We've delivered for clients across healthcare, used auto parts, and other markets internationally.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after the website launches?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every project includes 30 days of post-launch support. Beyond that, you can engage us for ongoing maintenance and feature additions on a monthly retainer or per-project basis.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle design, or only development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We handle both. Our team includes designers and developers who work together on every project. You get a complete team — not just code.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work with our existing developer or designer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can integrate with your in-house team or existing freelancers — handling specific parts of the project while they handle others. We collaborate cleanly without ego.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer marketing services like ads or SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On-page SEO is built into every project. For paid ads and ongoing SEO content, we partner with specialist agencies — we focus on what we do best (web development, Shopify, CRM) and refer you to experts for the rest.",
      },
    },
    {
      "@type": "Question",
      name: "Why hire The Tous over a freelancer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Freelancers can be great for small fixes. For real builds — multi-week projects, multi-disciplinary teams, ongoing support — you need a team. We have 7 specialists working together, with a project coordinator managing communication, so you don't deal with a freelancer disappearing mid-project.",
      },
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://thetous.com",
  name: "The Tous",
  image: "https://thetous.com/images/og-homepage.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "16",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "Mansi Adlakha" },
      reviewBody:
        "We needed a website that matched the premium feel of our jewellery. The Tous nailed it — clean design, fast load times, and a checkout experience our customers actually compliment.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "Rahul Arora" },
      reviewBody:
        "Our social media engagement and organic website traffic increased significantly after partnering with The Tous. Their SEO and strategies are practical and result-driven.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "Nitin Khedar" },
      reviewBody:
        "Working with The Tous feels like having an in-house digital team. Their design and content strategy are excellent.",
    },
  ],
};

export default function Index() {
  usePageTitle("The Tous | Web Development, Shopify & CRM for D2C Brands");
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    const lenis = new Lenis();
    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      lenis.destroy();
    };
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Tous",
    alternateName: "The Tous - A Brand of Grid IT Solutions",
    url: "https://www.thetous.com",
    logo: "https://www.thetous.com/black-the-tous-new.png",
    description:
      "Web, Shopify, and CRM development for D2C and B2B brands. 150+ projects shipped since 2018.",
    foundingDate: "2018",
    email: "grow@thetous.com",
    telephone: "+91-8901440322",
    address: {
      "@type": "PostalAddress",
      streetAddress: "C-116, 1st Floor, Sector-2",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201301",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/company/the-tous",
      "https://www.instagram.com/thetousmedia/",
    ],
  };

  return (
    <div className="home-page-main">
      {/* Meta description + OG/Twitter — React 19 hoists these to <head> */}
      <meta
        name="description"
        content="We build high-converting websites, Shopify stores, and custom CRMs for D2C and B2B brands. 150+ projects delivered since 2018. Book 30-min strategy call."
      />

      <meta
        property="og:title"
        content="The Tous | Web, Shopify & CRM Development for D2C and B2B"
      />
      <meta
        property="og:description"
        content="High-converting websites, Shopify stores, and custom CRMs for D2C and B2B brands. 150+ projects delivered since 2018."
      />
      <meta
        property="og:image"
        content="https://thetous.com/images/og-homepage.jpg"
      />
      <meta property="og:url" content="https://thetous.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="The Tous" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="The Tous | Web, Shopify & CRM Development"
      />
      <meta
        name="twitter:description"
        content="High-converting websites, Shopify stores, and custom CRMs for D2C and B2B brands."
      />
      <meta
        name="twitter:image"
        content="https://thetous.com/images/og-homepage.jpg"
      />

      {/* 5 JSON-LD schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* <main> */}
      <Banner />
      <Sliders />
      <Exquisites />
      <Work />
      <WhyWeUs />
      <About />
      <Marquee speed={15}>
        <div className="flex items-center gap-8 px-4">
          <h4 className="text-black text-2xl font-semibold whitespace-nowrap">
            Web. Shopify. CRM.
          </h4>
          <h4 className="text-black">
            <i className="ri-asterisk"></i>
          </h4>
          <h4 className="text-black text-2xl font-semibold whitespace-nowrap">
            150+ projects shipped since 2018
          </h4>
          <h4 className="text-black">
            <i className="ri-asterisk"></i>
          </h4>
          <h4 className="text-black text-2xl font-semibold whitespace-nowrap">
            Built for D2C and B2B brands
          </h4>
          <h4 className="text-black">
            <i className="ri-asterisk"></i>
          </h4>
        </div>
      </Marquee>

      <Testimonials />
      <FAQ />
      <CTA />
      <Blogs />
      {/* </main> */}
    </div>
  );
}
