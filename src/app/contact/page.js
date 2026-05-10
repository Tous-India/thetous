import Link from "next/link";
import "./style.css";
import ContactForm from "./contact-form";

export const metadata = {
  title: "Contact The Tous | Web, Shopify & CRM Development",
  description:
    "Get in touch with The Tous. We build custom websites, Shopify stores, and CRMs for D2C and B2B brands. Office in Noida. Email grow@thetous.com or call +91-8901440322.",
  openGraph: {
    title: "Contact The Tous | Web, Shopify & CRM Development",
    description:
      "Get in touch — custom web, Shopify, and CRM development for D2C and B2B brands. Based in Noida, working with brands across India and the US.",
    url: "https://thetous.com/contact",
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
    title: "Contact The Tous",
    description: "Web, Shopify, and CRM development for D2C and B2B brands.",
    images: ["https://thetous.com/images/og-homepage.jpg"],
  },
  alternates: {
    canonical: "https://thetous.com/contact",
  },
};

const Contact = () => {
  return (
    <div className="contact-page-main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact The Tous",
            description:
              "Get in touch with The Tous for web, Shopify, and CRM development projects.",
            url: "https://thetous.com/contact",
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
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:30",
                closes: "17:30",
              },
              sameAs: [
                "https://www.instagram.com/thetousmedia",
                "https://www.linkedin.com/company/the-tous",
              ],
            },
          }),
        }}
      />
      <div className="container-fluid">
        <div className="row row-two-contact my-5 justify-content-center">
          <ContactForm />

          <div className="col-sm-12 col-md-5 col-lg-5 contact-cols-3 d-flex flex-column justify-content-center right">
            <div>
              <h3>Connect with us</h3>
              <div className="contact-info-section">
                <p className="contact-phones">
                  <Link href="tel:+91-8901440322">+91-8901440322</Link>{","}&nbsp;
                  <Link href="tel:+91-9996639777">+91-9996639777</Link>
                </p>
                <p className="contact-email">
                  <Link href="mailto:grow@thetous.com">grow@thetous.com</Link>
                </p>
                <p className="contact-address">
                  C-116, 1st Floor, Sector-2, Noida, UP 201301
                </p>
                <p style={{ marginTop: "0.5rem", fontSize: "14px", color: "#555" }}>
                  Office hours: Monday – Friday, 9:30 AM – 5:30 PM IST
                </p>
              </div>
              <p className="d-flex gap-2 fs-2">
                <Link href="https://www.instagram.com/thetousmedia" target="_blank" rel="noopener noreferrer">
                  <i className="ri-instagram-line"></i>
                </Link>
                <Link href="https://www.linkedin.com/company/the-tous" target="_blank" rel="noopener noreferrer">
                  <i className="ri-linkedin-fill"></i>
                </Link>
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5266628342315!2d77.31511669999999!3d28.583973099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5004045d0ab%3A0x783d74db012b0922!2sThe%20Tous!5e0!3m2!1sen!2sin!4v1767699289826!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
