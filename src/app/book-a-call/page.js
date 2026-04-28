"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./style.css";
import usePageTitle from "@/hooks/usePageTitle";

const Quote = () => {
  usePageTitle("Request a Quote – The Tous");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    buildType: "",
    message: "",
    timeline: "",
    budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! We'll get back to you within one business day.",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          buildType: "",
          message: "",
          timeline: "",
          budget: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to submit. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="quote-main-page">
      <div className="container">
        <div className="quote-header">
          <h1>Let&apos;s Talk About Your Project</h1>
          <p className="lg:w-[55%] ms-auto me-auto">
            Tell us a bit about what you&apos;re working on. We&apos;ll get back within one business day to schedule a 30-minute strategy call.
          </p>
        </div>

        {submitStatus && (
          <div
            className={`alert ${
              submitStatus.type === "success" ? "alert-success" : "alert-error"
            }`}
          >
            <i
              className={
                submitStatus.type === "success"
                  ? "ri-checkbox-circle-line"
                  : "ri-error-warning-line"
              }
            ></i>
            <span>{submitStatus.message}</span>
          </div>
        )}

        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            {/* Name + Email */}
            <div className="form-group">
              <label>Your name <span className="required">*</span></label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email <span className="required">*</span></label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                suppressHydrationWarning
              />
            </div>

            {/* Company */}
            <div className="form-group full-width">
              <label>Company / Brand name</label>
              <input
                type="text"
                name="company"
                placeholder="Your business or brand name"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>

            {/* What to build */}
            <div className="form-group full-width">
              <label>What are you looking to build? <span className="required">*</span></label>
              <select
                name="buildType"
                value={formData.buildType}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>Select an option</option>
                <option value="New website (custom development)">New website (custom development)</option>
                <option value="Shopify store (new build)">Shopify store (new build)</option>
                <option value="Shopify migration / redesign">Shopify migration / redesign</option>
                <option value="Custom CRM or web app">Custom CRM or web app</option>
                <option value="Not sure yet — want to discuss">Not sure yet — want to discuss</option>
              </select>
            </div>

            {/* Project details */}
            <div className="form-group full-width">
              <label>Project details</label>
              <textarea
                name="message"
                rows="5"
                placeholder="What you're building, what stage you're at, any specific challenges. The more we know, the better the call."
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>

            {/* Timeline + Budget */}
            <div className="form-group">
              <label>Project timeline <span className="required">*</span></label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>Select timeline</option>
                <option value="ASAP / urgent">ASAP / urgent</option>
                <option value="Within next month">Within next month</option>
                <option value="1–3 months out">1–3 months out</option>
                <option value="Just exploring">Just exploring</option>
              </select>
            </div>

            <div className="form-group">
              <label>Budget range (optional)</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
              >
                <option value="" disabled>Select budget</option>
                <option value="Under ₹1 lakh">Under ₹1 lakh</option>
                <option value="₹1–3 lakhs">₹1–3 lakhs</option>
                <option value="₹3–5 lakhs">₹3–5 lakhs</option>
                <option value="₹5 lakhs+">₹5 lakhs+</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>
          </div>

          <div className="form-navigation">
            <button
              type="submit"
              className="btn-primary ml-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <i className="ri-loader-4-line rotating"></i> Sending...
                </>
              ) : (
                <>
                  Send Message <i className="ri-arrow-right-up-long-line"></i>
                </>
              )}
            </button>
          </div>

          <p style={{ marginTop: "1rem", color: "#777", fontSize: "13px" }}>
            We&apos;ll get back within one business day. Or{" "}
            <Link
              href="https://wa.link/vj2khp"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#000", fontWeight: 600, textDecoration: "underline" }}
            >
              WhatsApp us
            </Link>{" "}
            for a faster response.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Quote;
