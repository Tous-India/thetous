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

const FAQItem = ({ faq, isOpen, onToggle }) => {
  const contentRef = useRef(null);

  return (
    <div style={{ borderBottom: "1px solid #e5e5e5", padding: "1rem 0" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          textAlign: "left",
          gap: "1rem",
        }}
      >
        <span style={{ fontSize: "15px", fontWeight: 600, color: "#000", lineHeight: "1.5" }}>
          {faq.q}
        </span>
        <i
          className="ri-add-line"
          style={{
            fontSize: "1.2rem",
            flexShrink: 0,
            color: "#000",
            transition: "transform 0.3s ease",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        ></i>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight + "px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <p style={{
          margin: "0.75rem 0 0 0",
          fontSize: "13px",
          color: "#555",
          lineHeight: "1.8",
          paddingRight: "2rem",
        }}>
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
    <div style={{ padding: "4rem 0", fontFamily: "'Poppins', sans-serif" }}>
      <div className="container">
        <h2 className="main-section-heading" style={{ marginBottom: "2rem", textAlign: "center" }}>
          Frequently Asked Questions
        </h2>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
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
