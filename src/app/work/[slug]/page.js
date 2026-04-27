import Link from "next/link";

const caseStudies = {
  "silvago": {
    title: "Silvago",
    sector: "D2C Jewelry",
    description: "Premium silver jewelry D2C brand. Built custom Shopify store with 200+ SKUs and mobile-optimized checkout.",
  },
  "dhirsons-jewellery-house": {
    title: "Dhirsons Jewellery House",
    sector: "E-commerce Jewelry",
    description: "Legacy jewellery brand moving online. Full e-commerce build with product configurator and WhatsApp checkout integration.",
  },
  "luxeliv": {
    title: "Luxeliv",
    sector: "Luxury Lifestyle",
    description: "Luxury lifestyle brand. Designed and developed a high-converting product landing page with editorial-style layout.",
  },
  "prozvofit": {
    title: "Prozvofit",
    sector: "D2C Fitness",
    description: "D2C fitness supplement brand. Built Shopify store with subscription model, upsell flows, and performance tracking.",
  },
  "executive-cars": {
    title: "Executive Cars",
    sector: "Service / Booking",
    description: "Premium car rental service. Built a booking-focused website with real-time availability and CRM integration.",
  },
  "oh-my-pet-grooming": {
    title: "Oh My Pet Grooming",
    sector: "Local Service",
    description: "Pet grooming service brand. Built appointment booking system, local SEO setup, and Google Ads landing pages.",
  },
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default function CaseStudyPage({ params }) {
  const study = caseStudies[params.slug];

  if (!study) {
    return (
      <div style={{ padding: "6rem 2rem", textAlign: "center", fontFamily: "'Poppins', sans-serif" }}>
        <h1>Case study not found</h1>
        <Link href="/work" style={{ color: "#000", fontWeight: 600 }}>← Back to Work</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "6rem 2rem", maxWidth: "800px", margin: "0 auto", fontFamily: "'Poppins', sans-serif" }}>
      <Link href="/work" style={{ fontSize: "14px", color: "#555", textDecoration: "none" }}>← Back to Work</Link>
      <p style={{ fontSize: "12px", color: "#999", marginTop: "2rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>{study.sector}</p>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, margin: "0.5rem 0 1.5rem" }}>{study.title}</h1>
      <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.8" }}>{study.description}</p>
      <div style={{ marginTop: "3rem", padding: "2rem", background: "#f5f5f5", borderRadius: "8px", textAlign: "center", color: "#999" }}>
        Full case study coming soon.
      </div>
      <div style={{ marginTop: "3rem" }}>
        <Link
          href="/contact"
          style={{ background: "#000", color: "#fff", padding: "14px 28px", borderRadius: "6px", fontWeight: 600, fontSize: "1rem", textDecoration: "none" }}
        >
          Start a similar project →
        </Link>
      </div>
    </div>
  );
}
