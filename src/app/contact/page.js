"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./style.css";
import usePageTitle from "@/hooks/usePageTitle";

const serviceOptions = [
  "Web Development",
  "Social Media Management",
  "Social Media Ads",
  "Google Ads",
  "SEO",
  "Shoot & Influencers",
  "Others",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [selectedServices, setSelectedServices] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, services: selectedServices }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent! We'll get back to you within one business day.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
        setSelectedServices([]);
        if (typeof window !== "undefined") {
          window.open("/thank-you", "_blank");
        }
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
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

  usePageTitle("Contact – Start Your Digital Growth Journey");

  return (
    <div className="contact-page-main">
      <div className="container-fluid">
        <div className="row row-two-contact my-5 justify-content-center">
          <div className="col-sm-12 col-md-5 col-lg-5 contact-cols-4 left">
            {submitStatus && (
              <div
                className={`alert rounded-0 py-2 ${
                  submitStatus.type === "success" ? "alert-success" : "alert-danger"
                } mb-3`}
                role="alert"
              >
                {submitStatus.message}
              </div>
            )}

            <form className="d-flex flex-column p-4 rounded-2" onSubmit={handleSubmit}>
              <h3 className="text-start">Get In Touch</h3>

              <div className="row first-form-row">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name goes here"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Drop your email here"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    suppressHydrationWarning
                  />
                </div>
              </div>

              <p className="contact-services-label">What brings you here?</p>
              <div className="contact-services-wrap">
                {serviceOptions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`contact-service-btn${selectedServices.includes(s) ? " active" : ""}`}
                    onClick={() => toggleService(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Share your digits"
                value={formData.phone}
                onChange={handleInputChange}
                className="type-number"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Type away, we're listening!"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>

              <div className="buttonDiv">
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit"}{" "}
                  <i className="ri-arrow-right-up-long-line"></i>
                </button>
              </div>
            </form>
          </div>

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
              </div>
              <p className="d-flex gap-2 fs-2">
                <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="ri-instagram-line"></i>
                </Link>
                <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
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
