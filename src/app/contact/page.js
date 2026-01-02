"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./style.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, value]
        : prev.services.filter((service) => service !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          services: [],
          message: "",
        });
        // Uncheck all checkboxes
        document.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
          cb.checked = false;
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page-main">
      <div className="container-fluid">
        <div className="row row-two-contact my-5 justify-content-center">
          <div className="col-sm-12 col-md-5 col-lg-5 contact-cols-4 left">
            <div id="output"></div>
            {submitStatus && (
              <div
                className={`alert rounded-0 py-2 ${
                  submitStatus.type === "success"
                    ? "alert-success"
                    : "alert-danger"
                } mb-3`}
                role="alert"
              >
                {submitStatus.message}
              </div>
            )}
            <form className="d-flex flex-column p-4 rounded-2" onSubmit={handleSubmit}>
              <h3 className="text-start p-2">Get In Touch</h3>

              <div className="row first-form-row">
                <div className="col-lg-6 col-sm-12">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name goes here"
                    className=""
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="text-danger" id="name_error"></div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <input
                    type="email"
                    name="email"
                    placeholder="Drop your email here"
                    className=""
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="text-danger" id="email_error"></div>
                </div>
              </div>

              <label htmlFor="label" className="my-3">
                What brings you here?
              </label>
              <div className="select-contact align-items-center checkbox-div-contactPage">
                {[
                  "Web Development",
                  "Social Media Management",
                  "Social Media Ads",
                  "Google Ads",
                  "SEO",
                  "Shoot & Influencers",
                  "Others",
                ].map((value, index) => (
                  <div key={index} className={`divOne-${index + 1}`}>
                    <div className="checkboxes__item">
                      <label className="checkbox style-f">
                        <input
                          type="checkbox"
                          value={value}
                          id={`checkbox-${index}`}
                          onChange={handleCheckboxChange}
                        />
                        <div className="checkbox__checkmark"></div>
                        <div className="checkbox__body">{value}</div>
                      </label>
                    </div>
                  </div>
                ))}
              </div>

              <input
                type="number"
                name="phone"
                placeholder="Share your digits"
                className="mt-0 type-number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <div className="text-danger" id="phone_error"></div>

              <textarea
                name="message"
                rows="5"
                cols="30"
                placeholder="Type away, we're listening!"
                className="p-2 mt-4"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <div className="text-danger" id="message_error"></div>

              <div className="buttonDiv">
                <button type="submit" className="" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit"}{" "}
                  <i className="ri-arrow-right-up-long-line"></i>
                </button>
              </div>
            </form>
          </div>

          <div className="col-sm-12 col-md-5 col-lg-5 contact-cols-3 d-flex flex-column justify-content-center right">
            <div>
              <h3>Connect with us</h3>
              <p>
                Phone:
                <Link href="tel:+91-8901440322"> +91-8901440322</Link>{","}
                <Link href="tel:+91-9996639777"> +91-9996639777</Link>
                <br />
                Email:{" "}
                <Link href="mailto:grow@thetous.com">grow@thetous.com</Link>
              </p>
              <p className="d-flex gap-5 fs-2">
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-instagram-line"></i>
                </Link>
                <Link
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-linkedin-fill"></i>
                </Link>
              </p>
            </div>
            <div>
              <h3>Address</h3>
              <p className="w-75">
                C-116, 1st Floor, Sector-2, Noida, UP 201301
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14007.332766375888!2d77.2194014!3d28.6347611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdbd20f0f0eb%3A0xb84891262d7483e!2sOffice%20On!5e0!3m2!1sen!2sin!4v1719305295633!5m2!1sen!2sin"
              width="100%"
              height="210"
              // style="border: 0"
              allowFullScreen=""
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
