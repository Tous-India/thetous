import Link from "next/link";
import "./style.css";
import BookACallForm from "./book-a-call-form";

export const metadata = {
  title: "Book a Call — Free Shopify & Web Development Audit",
  description:
    "Book a free 30-minute strategy call with The Tous. We'll review your project — web, Shopify, or CRM — and tell you honestly whether we're the right fit. No obligation.",
  openGraph: {
    title: "Book a Call – The Tous",
    description:
      "Free 30-minute strategy call. We'll review your project and tell you honestly whether we're the right fit. No obligation.",
    url: "https://thetous.com/book-a-call",
    siteName: "The Tous",
    images: [
      {
        url: "https://thetous.com/images/og-homepage.jpg",
        width: 1200,
        height: 630,
        alt: "The Tous — Web, Shopify, and CRM Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Call – The Tous",
    description:
      "Free 30-minute strategy call for web, Shopify, and CRM projects.",
    images: ["https://thetous.com/images/og-homepage.jpg"],
  },
  alternates: {
    canonical: "https://thetous.com/book-a-call",
  },
};

const Quote = () => {
  return (
    <div className="quote-main-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Book a Call with The Tous",
            description:
              "Schedule a free 30-minute strategy call with The Tous to discuss your web, Shopify, or CRM project.",
            url: "https://thetous.com/book-a-call",
            mainEntity: {
              "@type": "Organization",
              name: "The Tous",
              url: "https://thetous.com",
              logo: "https://thetous.com/images/logo.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-8901440322",
                  email: "grow@thetous.com",
                  contactType: "Sales",
                  areaServed: ["IN", "US"],
                  availableLanguage: ["English", "Hindi"],
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "C-116, 1st Floor, Sector-2",
                addressLocality: "Noida",
                addressRegion: "Uttar Pradesh",
                postalCode: "201301",
                addressCountry: "IN",
              },
            },
          }),
        }}
      />
      <div className="container">
        <div className="quote-header">
          <h1>Let&apos;s Talk About Your Project</h1>
          <p className="lg:w-[55%] ms-auto me-auto">
            Tell us a bit about what you&apos;re working on. We&apos;ll get back
            within one business day to schedule a 30-minute strategy call.
          </p>
        </div>

        <BookACallForm />

        <p
          className="lg:w-[55%] mx-auto"
          style={{ marginTop: "1rem", color: "#777", fontSize: "13px" }}
        >
          We&apos;ll get back within one business day. Or{" "}
          <Link
            href="https://wa.link/vj2khp"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#000",
              fontWeight: 600,
              textDecoration: "underline",
            }}
          >
            WhatsApp us
          </Link>{" "}
          for a faster response.
        </p>
      </div>
    </div>
  );
};

export default Quote;
