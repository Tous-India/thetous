"use client";
import React, { useState } from "react";
import "./style.css";

const Quote = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

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

    // Step 3: Conditional Fields - Website/App
    projectType: "",
    approxPages: "",
    referenceWebsites: [""],
    contentReady: "",

    // Step 3: Conditional Fields - Marketing
    marketingPlatforms: [],
    monthlyAdBudget: "",
    brandStage: "",

    // Step 4: Budget & Expectations
    budget: "",
    expectations: "",

    // Step 5: Qualification & Consent
    agreeToContact: false,
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

  // Marketing platforms
  const marketingPlatforms = [
    "Meta Ads",
    "Google Ads",
    "SEO",
    "Influencer Marketing",
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

  // Handle reference website URLs
  const handleReferenceUrlChange = (index, value) => {
    const newUrls = [...formData.referenceWebsites];
    newUrls[index] = value;
    setFormData((prev) => ({
      ...prev,
      referenceWebsites: newUrls,
    }));
  };

  const addReferenceUrl = () => {
    setFormData((prev) => ({
      ...prev,
      referenceWebsites: [...prev.referenceWebsites, ""],
    }));
  };

  const removeReferenceUrl = (index) => {
    setFormData((prev) => ({
      ...prev,
      referenceWebsites: prev.referenceWebsites.filter((_, i) => i !== index),
    }));
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
        break;

      case 3:
        // Validation for conditional fields
        const hasWebsiteService =
          formData.services.some(
            (s) =>
              s.includes("Website") ||
              s.includes("Shopify") ||
              s.includes("Web App")
          ) || formData.services.includes("Custom Web App / Dashboard");

        const hasMarketingService =
          formData.services.some(
            (s) => s.includes("Marketing") || s === "SEO"
          ) ||
          formData.services.includes("Digital Marketing (Meta / Google Ads)");

        if (hasWebsiteService) {
          if (!formData.projectType)
            newErrors.projectType = "Project type is required";
          if (!formData.approxPages)
            newErrors.approxPages = "Please select number of pages";
          if (!formData.contentReady)
            newErrors.contentReady = "Please select content status";
        }

        if (hasMarketingService) {
          if (formData.marketingPlatforms.length === 0)
            newErrors.marketingPlatforms =
              "Please select at least one platform";
          if (!formData.monthlyAdBudget)
            newErrors.monthlyAdBudget = "Please select ad budget range";
          if (!formData.brandStage)
            newErrors.brandStage = "Please select brand stage";
        }
        break;

      case 4:
        if (!formData.budget) newErrors.budget = "Budget selection is required";
        if (!formData.expectations.trim())
          newErrors.expectations = "Please describe your expectations";
        break;

      case 5:
        if (!formData.agreeToContact)
          newErrors.agreeToContact =
            "You must agree to be contacted to proceed";
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

    if (!validateStep(5)) {
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

  // Check if service requires conditional fields
  const showWebsiteFields = formData.services.some(
    (s) =>
      s.includes("Website") ||
      s.includes("Shopify") ||
      s.includes("Web App") ||
      s === "Custom Web App / Dashboard"
  );

  const showMarketingFields =
    formData.services.some((s) => s.includes("Marketing") || s === "SEO") ||
    formData.services.includes("Digital Marketing (Meta / Google Ads)");

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
            <h2 className="step-title">Services Required</h2>
            <p className="step-description">
              {"Select all services you're interested in"}
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
          </div>
        );

      case 3:
        return (
          <div className="step-content">
            <h2 className="step-title">Project Details</h2>
            <p className="step-description">
              {"Tell us more about your project requirements"}
            </p>

            {showWebsiteFields && (
              <div className="conditional-section">
                <h3 className="section-subtitle">
                  <i className="ri-code-box-line"></i> Website / App Details
                </h3>

                <div className="form-grid">
                  <div className="form-group full-width">
                    <label>
                      Project Type <span className="required">*</span>
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className={errors.projectType ? "error" : ""}
                    >
                      <option value="">Select project type</option>
                      <option value="Business Website">Business Website</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Portfolio">Portfolio</option>
                      <option value="Web App / SaaS">Web App / SaaS</option>
                    </select>
                    {errors.projectType && (
                      <span className="error-message">
                        {errors.projectType}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label>
                      Approximate Pages <span className="required">*</span>
                    </label>
                    <select
                      name="approxPages"
                      value={formData.approxPages}
                      onChange={handleInputChange}
                      className={errors.approxPages ? "error" : ""}
                    >
                      <option value="">Select range</option>
                      <option value="1-5">1-5 pages</option>
                      <option value="6-10">6-10 pages</option>
                      <option value="10+">10+ pages</option>
                    </select>
                    {errors.approxPages && (
                      <span className="error-message">
                        {errors.approxPages}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label>
                      Do You Have Content Ready?{" "}
                      <span className="required">*</span>
                    </label>
                    <select
                      name="contentReady"
                      value={formData.contentReady}
                      onChange={handleInputChange}
                      className={errors.contentReady ? "error" : ""}
                    >
                      <option value="">Select status</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Partial">Partial</option>
                    </select>
                    {errors.contentReady && (
                      <span className="error-message">
                        {errors.contentReady}
                      </span>
                    )}
                  </div>

                  <div className="form-group full-width">
                    <label>Reference Websites (Optional)</label>
                    {formData.referenceWebsites.map((url, index) => (
                      <div key={index} className="reference-url-input">
                        <input
                          type="url"
                          value={url}
                          onChange={(e) =>
                            handleReferenceUrlChange(index, e.target.value)
                          }
                          placeholder="https://example.com"
                        />
                        {formData.referenceWebsites.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeReferenceUrl(index)}
                            className="remove-url-btn"
                          >
                            <i className="ri-close-line"></i>
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addReferenceUrl}
                      className="add-url-btn"
                    >
                      <i className="ri-add-line"></i> Add another reference
                    </button>
                  </div>
                </div>
              </div>
            )}

            {showMarketingFields && (
              <div className="conditional-section mt-4">
                <h3 className="section-subtitle">
                  <i className="ri-megaphone-line"></i> Marketing Details
                </h3>

                <div className="form-grid">
                  <div className="form-group full-width">
                    <label>
                      Platforms Required <span className="required">*</span>
                    </label>
                    <div className="checkbox-grid">
                      {marketingPlatforms.map((platform) => (
                        <label key={platform} className="checkbox-label">
                          <input
                            type="checkbox"
                            checked={formData.marketingPlatforms.includes(
                              platform
                            )}
                            onChange={() =>
                              handleMultiSelect("marketingPlatforms", platform)
                            }
                          />
                          <span>{platform}</span>
                        </label>
                      ))}
                    </div>
                    {errors.marketingPlatforms && (
                      <span className="error-message">
                        {errors.marketingPlatforms}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label>
                      Monthly Ad Budget Range{" "}
                      <span className="required">*</span>
                    </label>
                    <select
                      name="monthlyAdBudget"
                      value={formData.monthlyAdBudget}
                      onChange={handleInputChange}
                      className={errors.monthlyAdBudget ? "error" : ""}
                    >
                      <option value="">Select budget range</option>
                      <option value="₹10k - ₹25k">₹10k - ₹25k</option>
                      <option value="₹25k - ₹50k">₹25k - ₹50k</option>
                      <option value="₹50k - ₹1L">₹50k - ₹1L</option>
                      <option value="₹1L - ₹2.5L">₹1L - ₹2.5L</option>
                      <option value="₹2.5L+">₹2.5L+</option>
                    </select>
                    {errors.monthlyAdBudget && (
                      <span className="error-message">
                        {errors.monthlyAdBudget}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label>
                      Brand Stage <span className="required">*</span>
                    </label>
                    <select
                      name="brandStage"
                      value={formData.brandStage}
                      onChange={handleInputChange}
                      className={errors.brandStage ? "error" : ""}
                    >
                      <option value="">Select brand stage</option>
                      <option value="New Brand">New Brand</option>
                      <option value="Running but not profitable">
                        Running but not profitable
                      </option>
                      <option value="Scaling">Scaling</option>
                    </select>
                    {errors.brandStage && (
                      <span className="error-message">{errors.brandStage}</span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {!showWebsiteFields && !showMarketingFields && (
              <div className="info-message">
                <i className="ri-information-line"></i>
                <p>
                  {
                    "No additional details required for the selected services. Click Next to continue."
                  }
                </p>
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="step-content">
            <h2 className="step-title">Budget Expectation</h2>
            <p className="step-description">
             {" Select your budget range for this project"}
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
        );

      case 5:
        return (
          <div className="step-content">
            <h2 className="step-title">Final Step</h2>
            <p className="step-description">
              {"Review and confirm your submission"}
            </p>

            <div className="summary-section">
              <h3>
                <i className="ri-file-list-3-line"></i> Quick Summary
              </h3>
              <div className="summary-grid">
                <div className="summary-item">
                  <strong>Name:</strong> {formData.fullName}
                </div>
                <div className="summary-item">
                  <strong>Email:</strong> {formData.email}
                </div>
                <div className="summary-item">
                  <strong>Services:</strong> {formData.services.join(", ")}
                </div>
                <div className="summary-item">
                  <strong>Budget:</strong> {formData.budget}
                </div>
              </div>
            </div>

            <div className="consent-section">
              <label className="checkbox-label consent-label">
                <input
                  type="checkbox"
                  name="agreeToContact"
                  checked={formData.agreeToContact}
                  onChange={handleInputChange}
                />
                <span>
                  I agree to be contacted by The Tous{" "}
                  <span className="required">*</span>
                </span>
              </label>
              {errors.agreeToContact && (
                <span className="error-message">{errors.agreeToContact}</span>
              )}
            </div>

            {submitStatus && (
              <div
                className={`alert ${
                  submitStatus.type === "success"
                    ? "alert-success"
                    : "alert-error"
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
            {"Fill out this form and we'll create a tailored proposal for your project"}
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

            {currentStep < totalSteps ? (
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
