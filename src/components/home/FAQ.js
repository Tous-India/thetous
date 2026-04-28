"use client";
import { useState, useRef } from "react";

const faqs = [
  {
    q: "How much does a website cost?",
    a: "Most of our Shopify and custom website builds range from ₹60,000 to ₹2,50,000 depending on complexity, integrations, and number of pages. Web apps and custom CRMs start at ₹1,50,000. We give a fixed quote after a discovery call — no hidden costs.",
  },
  {
    q: "How long does a project take?",
    a: "Standard websites take 4–6 weeks. Shopify stores take 4–8 weeks depending on customization. Custom web apps take 8–12 weeks. We share a detailed timeline before kickoff.",
  },
  {
    q: "Do you work with brands outside India?",
    a: "Yes. We've worked with clients across India and have delivered projects for brands operating in the US and UAE. Communication happens over Slack, email, and scheduled calls.",
  },
  {
    q: "What happens after the website launches?",
    a: "We offer simple maintenance plans starting at ₹3,500/month covering hosting monitoring, security updates, backups, and small content changes. Larger retainers are available for ongoing dev work.",
  },
  {
    q: "Do you handle design, or only development?",
    a: "Both. Our team includes designers and developers, so you get end-to-end delivery without managing two vendors.",
  },
  {
    q: "Can you work with our existing developer or designer?",
    a: "Yes. We regularly slot into existing teams — picking up an in-progress project, building specific features, or partnering with your designer.",
  },
  {
    q: "Do you offer marketing services like ads or SEO?",
    a: "Web development is our focus. We do offer social media management and ads to existing clients on request, but we don't actively market these services and recommend specialist agencies for marketing-led engagements.",
  },
  {
    q: "Why hire The Tous over a freelancer?",
    a: "We're a team, not one person. That means redundancy, project management, faster turnaround, and post-launch support. We've been delivering projects since 2018, which is longer than most freelance careers last.",
  },
];

const FAQItem = ({ faq, index, isOpen, onToggle }) => {
  const contentRef = useRef(null);

  return (
    <div
      style={{
        position: "relative",
        border: "1px solid #e5e5e5",
        borderRadius: "0px",
        marginBottom: "0.75rem",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      {/* Gradient left accent bar */}
      <span
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "4px",
          background: "linear-gradient(to bottom, #00dbde, #fc00ff)",
          opacity: isOpen ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          background: "none",
          border: "none",
          padding: "1.1rem 1.25rem",
          cursor: "pointer",
          textAlign: "left",
          gap: "1rem",
        }}
      >
        {/* Number */}
        <span
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "1rem",
            fontWeight: 700,
            minWidth: "2rem",
            flexShrink: 0,
            background: isOpen
              ? "linear-gradient(to right, #00dbde, #fc00ff)"
              : "none",
            WebkitBackgroundClip: isOpen ? "text" : "unset",
            WebkitTextFillColor: isOpen ? "transparent" : "#bbb",
            color: isOpen ? "transparent" : "#bbb",
            transition: "color 0.3s ease",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Question */}
        <span
          style={{
            flex: 1,
            fontSize: "15px",
            fontWeight: 600,
            color: "#111",
            lineHeight: "1.5",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {faq.q}
        </span>

        {/* Chevron */}
        <i
          className="ri-arrow-down-s-line"
          style={{
            fontSize: "1.2rem",
            flexShrink: 0,
            color: "#777",
            transition: "transform 0.3s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight + "px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <p
          style={{
            margin: 0,
            padding: "0 1.25rem 1.1rem 4.25rem",
            fontSize: "13px",
            color: "#555",
            lineHeight: "1.8",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {faq.a}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div style={{ margin: "3rem 0", fontFamily: "'Poppins', sans-serif" }}>
      <div className="container">
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <h2
            className="main-section-heading faq-section-heading"
            style={{ marginBottom: "2rem" }}
          >
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              index={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
