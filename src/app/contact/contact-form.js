"use client";
import { useState } from "react";

const serviceOptions = [
  "Custom Web Development",
  "Shopify Development",
  "CRM and Web Apps",
  "Website Redesign",
  "Other",
];

const ContactForm = () => {
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

  return (
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
  );
};

export default ContactForm;
