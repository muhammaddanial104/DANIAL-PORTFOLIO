import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web App Development",
    message: "",
  });

  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ state: "error", message: "Please fill in all required fields." });
      return;
    }

    setStatus({ state: "loading", message: "Sending your message..." });

    // Open WhatsApp with pre-filled message as direct communication guarantee
    const waText = encodeURIComponent(
      `*New Portfolio Inquiry*\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`
    );
    const waUrl = `https://wa.me/923137525862?text=${waText}`;

    setTimeout(() => {
      setStatus({
        state: "success",
        message: "Thank you! Redirecting to WhatsApp for instant response...",
      });
      window.open(waUrl, "_blank");
      setFormData({ name: "", email: "", service: "Web App Development", message: "" });
    }, 1200);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("innocentdanial00@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section-container contact-section">
      {/* Section Header */}
      <div className="section-header">
        <div className="section-badge">
          <span className="badge-num">07</span>
          <span className="badge-sep">|</span>
          <span className="badge-title">Contact</span>
        </div>
        <h2 className="section-main-heading">
          Let's <span className="gradient-text">Work Together</span>
        </h2>
        <p className="section-subtitle">
          Have an AI agent project, full-stack application, or want to discuss full-time opportunities?
        </p>
      </div>

      <div className="contact-grid">
        {/* Left Column: Direct Reach Out */}
        <div className="contact-info-col">
          <div className="availability-card">
            <span className="status-indicator"></span>
            <div className="availability-text">
              <strong>Available for Opportunities</strong>
              <span>Full-time roles, contracts & freelance projects</span>
            </div>
          </div>

          <div className="contact-methods-stack">
            {/* Email Card */}
            <div className="contact-method-card">
              <div className="method-icon-box icon-cyan">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="method-details">
                <span className="method-label">Direct Email</span>
                <a href="mailto:innocentdanial00@gmail.com" className="method-value">
                  innocentdanial00@gmail.com
                </a>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="method-action-btn"
                title="Copy Email Address"
              >
                {copiedEmail ? "✓" : "Copy"}
              </button>
            </div>

            {/* WhatsApp Card */}
            <div className="contact-method-card">
              <div className="method-icon-box icon-green">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <div className="method-details">
                <span className="method-label">WhatsApp (Direct)</span>
                <a
                  href="https://wa.me/923137525862"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="method-value"
                >
                  +92 313 7525862
                </a>
              </div>
              <a
                href="https://wa.me/923137525862"
                target="_blank"
                rel="noopener noreferrer"
                className="method-action-btn"
              >
                Chat ↗
              </a>
            </div>

            {/* Location Card */}
            <div className="contact-method-card">
              <div className="method-icon-box icon-purple">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="method-details">
                <span className="method-label">Location</span>
                <span className="method-value">Gujrat, Punjab, Pakistan</span>
              </div>
              <span className="timezone-tag">PKT (UTC+5)</span>
            </div>
          </div>

          {/* Social Row */}
          <div className="contact-social-wrap">
            <span className="social-wrap-title">Connect on Socials:</span>
            <div className="contact-social-icons">
              <a
                href="https://github.com/muhammaddanial104"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-soc-btn"
                title="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-danial-2584b4432"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-soc-btn"
                title="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              <a
                href="https://wa.me/923137525862"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-soc-btn"
                title="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>

              <a
                href="https://www.facebook.com/share/1EPnhc4Zon/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-soc-btn"
                title="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/d4_danial"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-soc-btn"
                title="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Dark Glass Message Form */}
        <div className="contact-form-col">
          <form className="contact-glass-form" onSubmit={handleSubmit}>
            <div className="form-glow-top"></div>

            <h3 className="form-heading">Send a Message</h3>
            <p className="form-subheading">I typically respond within 24 hours.</p>

            {status.message && (
              <div className={`form-alert ${status.state}`}>
                <span>{status.message}</span>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Your Name <span className="req">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Henderson"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address <span className="req">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@company.com"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="service" className="form-label">
                Project Category
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Web App Development">Web App Development (MERN / Next.js)</option>
                <option value="Autonomous AI Agents">Autonomous AI Multi-Agents</option>
                <option value="Automation & Web Scraping">Automation & Web Scraping</option>
                <option value="E-Commerce Platform">E-Commerce Store Solution</option>
                <option value="Full-Time Hiring">Full-Time / Contract Role</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message <span className="req">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Briefly describe your requirements or ideas..."
                className="form-textarea"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status.state === "loading"}
              className="form-submit-btn"
            >
              <span>{status.state === "loading" ? "Sending..." : "Send Message"}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
