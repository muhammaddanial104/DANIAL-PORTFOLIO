import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "AI Agent & Business Automation",
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

    setStatus({ state: "loading", message: "Preparing your message..." });

    // Open WhatsApp with pre-filled message as direct communication guarantee
    const waText = encodeURIComponent(
      `*New Project / Automation Inquiry*\nName: ${formData.name}\nEmail: ${formData.email}\nScope: ${formData.service}\nProblem Details: ${formData.message}`
    );
    const waUrl = `https://wa.me/923137525862?text=${waText}`;

    setTimeout(() => {
      setStatus({
        state: "success",
        message: "Thank you! Redirecting to WhatsApp for instant discussion...",
      });
      window.open(waUrl, "_blank");
      setFormData({ name: "", email: "", service: "AI Agent & Business Automation", message: "" });
    }, 1200);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("innocentdanial00@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section-container contact-section">
      {/* 12 — FINAL CTA HEADER (EXACT COPY FROM UPGRADE PLAN) */}
      <div className="section-header text-center-header">
        <div className="section-badge">
          <span className="badge-num">11 & 12</span>
          <span className="badge-sep">|</span>
          <span className="badge-title">Final Call to Action</span>
        </div>
        <h2 className="section-main-heading final-cta-heading">
          YOUR NEXT AI SYSTEM <span className="gradient-text">COULD START HERE.</span>
        </h2>
        <p className="final-cta-subheading">
          Have a repetitive process, AI idea, or business problem?
        </p>
        <p className="final-cta-punchline">
          <strong>Show me the problem. I’ll show you what can be automated.</strong>
        </p>
      </div>

      <div className="contact-grid">
        {/* Left Column: 11 — Truthful Availability & Direct Channels */}
        <div className="contact-info-col">
          {/* Truthful Availability Badge from Upgrade Plan */}
          <div className="availability-card">
            <span className="status-indicator"></span>
            <div className="availability-text">
              <strong>Truthful Availability</strong>
              <span>Open for: Freelance • Contract • Remote • Full-Time</span>
            </div>
          </div>

          <div className="contact-methods-stack">
            {/* WhatsApp Card (High Conversion Direct Route) */}
            <div className="contact-method-card featured-method">
              <div className="method-icon-box icon-green">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <div className="method-details">
                <span className="method-label">Direct WhatsApp (Fastest)</span>
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
                {copiedEmail ? "✓ Copied" : "Copy"}
              </button>
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
                <span className="method-label">Location & Timezone</span>
                <span className="method-value">Gujrat, Pakistan (PKT / UTC+5)</span>
              </div>
              <span className="timezone-tag">Flexible across US/EU</span>
            </div>
          </div>

          {/* Social Row */}
          <div className="contact-social-wrap">
            <span className="social-wrap-title">Connect with Danial:</span>
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
            </div>
          </div>
        </div>

        {/* Right Column: 10/10 Action Form */}
        <div className="contact-form-col">
          <form className="contact-glass-form" onSubmit={handleSubmit}>
            <div className="form-glow-top"></div>

            <h3 className="form-heading">Start a Conversation</h3>
            <p className="form-subheading">Tell me about your workflow or business bottleneck.</p>

            {status.message && (
              <div className={`form-alert ${status.state}`}>
                <span>{status.message}</span>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Your Name / Company <span className="req">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Henderson (Founding Team)"
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
                What Can We Automate?
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="form-select"
              >
                <option value="AI Customer Support Agent">AI Customer Support (WhatsApp / Email)</option>
                <option value="Autonomous AI Multi-Agent">Custom Autonomous AI Multi-Agent</option>
                <option value="Business Process Automation">Business Process Automation / Web Scraper</option>
                <option value="Full-Stack MERN / Next.js">Full-Stack MERN or Next.js Platform</option>
                <option value="Full-Time / Contract Hiring">Full-Time / Contract Engineering Role</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Show Me The Problem <span className="req">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="What repetitive task, manual step, or AI idea do you want to solve?"
                className="form-textarea"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status.state === "loading"}
              className="form-submit-btn"
            >
              <span>{status.state === "loading" ? "Submitting..." : "Start a Conversation"}</span>
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
