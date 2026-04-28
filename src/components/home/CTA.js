import Link from "next/link";

const CTA = () => {
  return (
    <div
      style={{
        margin: "3rem 0 5rem 0",
        fontFamily: "'Poppins', sans-serif",
        textAlign: "center",
        backgroundImage: "linear-gradient(120deg, #a6c0fe, #f68084)",
        padding: "3rem",
        borderRadius: "0px 0px 30px 30px",
      }}
    >
      <div className="container">
        <h2
          style={{
            color: "white",
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            fontWeight: 700,
            lineHeight: "1.3",
            margin: "0 0 1.25rem 0",
            fontFamily: "'Lato', sans-serif",
            maxWidth: "680px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Ready to build a site that actually converts?
        </h2>
        <p
          style={{
            color: "white",
            fontSize: "1rem",
            lineHeight: "1.8",
            margin: "0 0 2.5rem 0",
            maxWidth: "540px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Book a 30-minute strategy call. We&apos;ll review your current site,
          discuss your goals, and tell you honestly whether we&apos;re the right
          fit.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              background: "white",
              color: "black",
              padding: "0.85rem 2rem",
              borderRadius: "4px",
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Book a Strategy Call
          </Link>
          <a
            href="mailto:grow@thetous.com"
            style={{
              display: "inline-block",
              background: "transparent",
              color: "white",
              padding: "0.85rem 2rem",
              borderRadius: "4px",
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
              border: "1px solid white",
              whiteSpace: "nowrap",
            }}
          >
            Email grow@thetous.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
