import React, { useState, useEffect } from "react";
import {
  FaUpload,
  FaSearchDollar,
  FaMoneyBillWave,
  FaCheck,
  FaQuoteLeft,
  FaEnvelope,
  FaUser,
  FaBuilding,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import "./App.css";

const App: React.FC = () => {
  // Theme state
  const [darkMode, setDarkMode] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const scrollToContactForm = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Effect to set initial theme and handle theme changes
  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem("theme");
    // Check if user prefers dark mode at the system level
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Set initial theme based on saved preference or system preference
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  // Handle theme toggle
  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    // Update the data-theme attribute on the document
    document.documentElement.setAttribute(
      "data-theme",
      newDarkMode ? "dark" : "light"
    );

    // Save preference to localStorage
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.licenseType)
      newErrors.licenseType = "Please select a license type";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form data submitted:", formData);
      setSubmitSuccess(true);

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
      });

      // Hide success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <div className="header-container">
          <h1 className="logo">SoftSell</h1>
          <nav className="nav-links"></nav>
        </div>
      </header>

      {/* Theme Toggle Switch */}
      <div className="theme-switch-wrapper">
        <FaSun className="theme-icon" />
        <label className="theme-switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleTheme}
            aria-label="Toggle dark mode"
          />
          <span className="slider"></span>
        </label>
        <FaMoon className="theme-icon" />
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Maximize Your Software License Value</h1>
          <p className="subheading">
            Get the best price for your unused software licenses with our fast,
            secure, and hassle-free selling process.
          </p>
          <div className="cta-buttons">
            <button
              className="cta-button primary"
              onClick={scrollToContactForm}
            >
              Get a Quote
            </button>

            <button
              className="cta-button secondary"
              onClick={scrollToContactForm}
            >
              Sell My Liscence
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-icon">
              <FaUpload className="icon" />
            </div>
            <h3>Upload License</h3>
            <p>
              Provide details about your software licenses through our secure
              portal.
            </p>
          </div>
          <div className="step-card">
            <div className="step-icon">
              <FaSearchDollar className="icon" />
            </div>
            <h3>Get Valuation</h3>
            <p>
              We'll analyze your licenses and provide a competitive valuation
              within 24 hours.
            </p>
          </div>
          <div className="step-card">
            <div className="step-icon">
              <FaMoneyBillWave className="icon" />
            </div>
            <h3>Get Paid</h3>
            <p>
              Accept our offer and receive payment quickly through your
              preferred method.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-choose-us">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">
              <FaCheck className="icon" />
            </div>
            <h3>Best Prices</h3>
            <p>
              We offer the most competitive rates in the market for your unused
              licenses.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <FaCheck className="icon" />
            </div>
            <h3>Fast Transactions</h3>
            <p>
              Complete the entire process in as little as 48 hours from start to
              finish.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <FaCheck className="icon" />
            </div>
            <h3>Secure Process</h3>
            <p>
              Your data and transactions are protected with enterprise-grade
              security.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <FaCheck className="icon" />
            </div>
            <h3>Expert Support</h3>
            <p>
              Our team of licensing experts is available to guide you through
              every step.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="quote-icon">
              <FaQuoteLeft className="icon" />
            </div>
            <p className="testimonial-text">
              "I was amazed at how easy and profitable it was to sell my unused
              licenses through this service. The process was seamless and the
              payment was prompt."
            </p>
            <div className="testimonial-author">
              <h4>Sarah Johnson</h4>
              <p>IT Director, TechCorp Solutions</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="quote-icon">
              <FaQuoteLeft className="icon" />
            </div>
            <p className="testimonial-text">
              "After trying other services, this platform offered me 30% more
              for my licenses. The customer support was exceptional throughout
              the entire process."
            </p>
            <div className="testimonial-author">
              <h4>Michael Chen</h4>
              <p>CTO, InnovateSoft</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="section contact-form">
        <h2 className="section-title">Get Started Today</h2>
        {submitSuccess && (
          <div className="success-message">
            Thank you! Your submission has been received.
          </div>
        )}
        <form onSubmit={handleSubmit} className="form-container" noValidate>
          <div className="form-group">
            <label htmlFor="name">
              <FaUser className="input-icon" /> Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={`form-input ${errors.name ? "error" : ""}`}
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope className="input-icon" /> Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              className={`form-input ${errors.email ? "error" : ""}`}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="company">
              <FaBuilding className="input-icon" /> Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company name"
              className={`form-input ${errors.company ? "error" : ""}`}
            />
            {errors.company && (
              <span className="error-message">{errors.company}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="licenseType">License Type</label>
            <select
              id="licenseType"
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className={`form-input ${errors.licenseType ? "error" : ""}`}
            >
              <option value="">Select license type</option>
              <option value="Microsoft">Microsoft</option>
              <option value="Adobe">Adobe</option>
              <option value="Oracle">Oracle</option>
              <option value="VMware">VMware</option>
              <option value="Other">Other</option>
            </select>
            {errors.licenseType && (
              <span className="error-message">{errors.licenseType}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your licenses"
              rows={4}
              className="form-input"
            />
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default App;
