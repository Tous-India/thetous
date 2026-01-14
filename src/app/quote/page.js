"use client";
import React, { useState } from "react";
import "./style.css";

const Quote = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 2;

  const [formData, setFormData] = useState({
    // Step 1: Contact Details
    fullName: "",
    brandName: "",
    email: "",
    phone: "",
    websiteUrl: "",

    // Step 2: Services Required
    services: [],
    otherService: "",

    // Step 4: Budget & Expectations
    budget: "",
    expectations: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // Service options
  const serviceOptions = [
    {
      value: "Website Design & Development",
      icon: "ri-window-line",
      label: "Website Design & Development",
    },
    {
      value: "Shopify / E-commerce",
      icon: "ri-shopping-cart-line",
      label: "Shopify / E-commerce",
    },
    {
      value: "Website Redesign / Optimization",
      icon: "ri-refresh-line",
      label: "Website Redesign",
    },
    { value: "SEO", icon: "ri-search-line", label: "SEO" },
    {
      value: "Digital Marketing (Meta / Google Ads)",
      icon: "ri-megaphone-line",
      label: "Digital Marketing",
    },
    {
      value: "Branding & Identity",
      icon: "ri-palette-line",
      label: "Branding & Identity",
    },
    {
      value: "Social Media Management",
      icon: "ri-share-line",
      label: "Social Media",
    },
    {
      value: "Custom Web App / Dashboard",
      icon: "ri-dashboard-line",
      label: "Web App / Dashboard",
    },
    { value: "Other", icon: "ri-more-line", label: "Other" },
  ];

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Handle multi-select (services, platforms, goals)
  const handleMultiSelect = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  // Validation for each step
  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!formData.fullName.trim())
          newErrors.fullName = "Full name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
          newErrors.email = "Email is invalid";
        if (!formData.phone.trim())
          newErrors.phone = "Phone number is required";
        break;

      case 2:
        if (formData.services.length === 0)
          newErrors.services = "Please select at least one service";
        if (
          formData.services.includes("Other") &&
          !formData.otherService.trim()
        )
          newErrors.otherService = "Please specify the service";
        if (!formData.budget) newErrors.budget = "Budget selection is required";
        if (!formData.expectations.trim())
          newErrors.expectations = "Please describe your expectations";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Navigation
  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep(currentStep)) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          leadSource: "Website Quote Form",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your quote request has been submitted successfully. We'll get back to you shortly.",
        });
        // Reset form
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      } else {
        setSubmitStatus({
          type: "error",
          message:
            data.error || "Failed to submit quote request. Please try again.",
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

  // Render step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-content">
            <h2 className="step-title">Contact Details</h2>
            <p className="step-description">
              {" Let's start with your basic information"}
            </p>

            <div className="form-grid">
              <div className="form-group">
                <label>
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={errors.fullName ? "error" : ""}
                />
                {errors.fullName && (
                  <span className="error-message">{errors.fullName}</span>
                )}
              </div>

              <div className="form-group">
                <label>Business / Brand Name</label>
                <input
                  type="text"
                  name="brandName"
                  value={formData.brandName}
                  onChange={handleInputChange}
                  placeholder="Your business or brand name"
                />
              </div>

              <div className="form-group">
                <label>
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className={errors.email ? "error" : ""}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label>
                  Phone / WhatsApp Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 XXXXX XXXXX"
                  className={errors.phone ? "error" : ""}
                />
                {errors.phone && (
                  <span className="error-message">{errors.phone}</span>
                )}
              </div>

              <div className="form-group full-width">
                <label>Website URL (Optional)</label>
                <input
                  type="url"
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleInputChange}
                  placeholder="https://yourwebsite.com"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="step-content">
            <h2 className="step-title">Services & Budget</h2>
            <p className="step-description">
              {"Select all services you're interested in and your budget range"}
            </p>

            <div className="services-grid">
              {serviceOptions.map((service) => (
                <div
                  key={service.value}
                  className={`service-card ${
                    formData.services.includes(service.value) ? "selected" : ""
                  }`}
                  onClick={() => handleMultiSelect("services", service.value)}
                >
                  <i className={service.icon}></i>
                  <span>{service.label}</span>
                  {formData.services.includes(service.value) && (
                    <i className="ri-check-line check-icon"></i>
                  )}
                </div>
              ))}
            </div>

            {errors.services && (
              <span className="error-message">{errors.services}</span>
            )}

            {formData.services.includes("Other") && (
              <div className="form-group mt-4">
                <label>
                  Please specify <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="otherService"
                  value={formData.otherService}
                  onChange={handleInputChange}
                  placeholder="Describe the service you need"
                  className={errors.otherService ? "error" : ""}
                />
                {errors.otherService && (
                  <span className="error-message">{errors.otherService}</span>
                )}
              </div>
            )}

            <div className="budget-section mt-5">
              <h3 className="section-subtitle">Budget Expectation</h3>
              <p className="step-description">
                {"Select your budget range for this project"}
              </p>

              <div className="budget-options">
                {[
                  { value: "₹10k - ₹25k", label: "₹10,000 - ₹25,000" },
                  { value: "₹25k - ₹50k", label: "₹25,000 - ₹50,000" },
                  { value: "₹50k - ₹1L", label: "₹50,000 - ₹1,00,000" },
                  { value: "₹1L+", label: "₹1,00,000+" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`budget-card ${
                      formData.budget === option.value ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="budget"
                      value={option.value}
                      checked={formData.budget === option.value}
                      onChange={handleInputChange}
                    />
                    <div className="budget-content">
                      <i className="ri-money-rupee-circle-line"></i>
                      <span>{option.label}</span>
                      {formData.budget === option.value && (
                        <i className="ri-check-line check-icon"></i>
                      )}
                    </div>
                  </label>
                ))}
              </div>

              {errors.budget && (
                <span className="error-message">{errors.budget}</span>
              )}

              <div className="form-group full-width mt-4">
                <label>
                  Describe Your Expectations <span className="required">*</span>
                </label>
                <textarea
                  name="expectations"
                  value={formData.expectations}
                  onChange={handleInputChange}
                  rows="6"
                  placeholder="Tell us about your vision, specific requirements, or any challenges you're facing..."
                  className={errors.expectations ? "error" : ""}
                ></textarea>
                {errors.expectations && (
                  <span className="error-message">{errors.expectations}</span>
                )}
              </div>
            </div>

            {submitStatus && (
              <div
                className={`alert ${
                  submitStatus?.type === "success"
                    ? "alert-success"
                    : "alert-error"
                }`}
              >
                <i
                  className={
                    submitStatus?.type === "success"
                      ? "ri-checkbox-circle-line"
                      : "ri-error-warning-line"
                  }
                ></i>
                <span>{submitStatus?.message}</span>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="quote-main-page">
      <div className="container">
        <div className="quote-header">
          <h1>Get Your Custom Quote</h1>
          <p>
            {
              "Fill out this form and we'll create a tailored proposal for your project"
            }
          </p>
        </div>

        {/* Progress indicator */}
        <div className="progress-indicator">
          <div className="progress-steps">
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
              <div
                key={step}
                className={`progress-step ${
                  step === currentStep
                    ? "active"
                    : step < currentStep
                    ? "completed"
                    : ""
                }`}
              >
                <div className="step-circle">
                  {step < currentStep ? (
                    <i className="ri-check-line"></i>
                  ) : (
                    step
                  )}
                </div>
                <div className="step-label">Step {step}</div>
              </div>
            ))}
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form */}
        <form className="quote-form" onSubmit={handleSubmit}>
          {renderStepContent()}

          {/* Navigation buttons */}
          <div className="form-navigation">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="btn-secondary"
              >
                <i className="ri-arrow-left-line"></i> Previous
              </button>
            )}

            {currentStep === 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className="btn-primary ml-auto"
              >
                Next <i className="ri-arrow-right-line"></i>
              </button>
            ) : (
              <button
                type="submit"
                className="btn-primary ml-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line rotating"></i> Submitting...
                  </>
                ) : (
                  <>
                    Submit Quote Request <i className="ri-send-plane-fill"></i>
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Quote;
