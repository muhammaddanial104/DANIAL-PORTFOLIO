import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    service: "Full-Stack Web App & AI Automation",
    message: "",
  });

  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contactInfo || !formData.message) {
      setStatus({ state: "error", message: "Please fill in all required fields." });
      return;
    }

    setStatus({ state: "loading", message: "Preparing your message..." });

    // Open WhatsApp with pre-filled message
    const waText = encodeURIComponent(
      `*New Inquiry / Project Discussion*\nName: ${formData.name}\nContact: ${formData.contactInfo}\nScope: ${formData.service}\nDetails: ${formData.message}`
    );
    const waUrl = `https://wa.me/923137525862?text=${waText}`;

    setTimeout(() => {
      setStatus({
        state: "success",
        message: "Thank you! Opening WhatsApp for instant direct discussion...",
      });
      window.open(waUrl, "_blank");
      setFormData({ name: "", contactInfo: "", service: "Full-Stack Web App & AI Automation", message: "" });
    }, 900);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("innocentdanial00@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section-container contact-section">
      {/* Contact Section Header (Section 6 from Report) */}
      <div className="section-header text-center-header">
        <div className="section-badge">
          <span className="badge-num">07</span>
          <span className="badge-sep">|</span>
          <span className="badge-title">Contact &amp; Collaboration</span>
        </div>
        <h2 className="section-main-heading final-cta-heading">
          LET'S WORK <span className="gradient-text">TOGETHER</span>
        </h2>
        <p className="final-cta-subheading">
          Have a project in mind, an automation bottleneck, or an open engineering role?
        </p>
        <p className="final-cta-punchline">
          <strong>Show me the problem. I’ll show you what can be automated and built.</strong>
        </p>
      </div>

      <div className="contact-grid">
        {/* Left Column: Direct Channels & Social Proof */}
        <div className="contact-info-col">
          {/* Availability Card */}
          <div className="availability-card">
            <span className="status-indicator"></span>
            <div className="availability-text">
              <strong>Truthful Availability</strong>
              <span>Open for: Client Projects • Contract Work • Remote Roles</span>
            </div>
          </div>

          <div className="contact-methods-stack">
            {/* WhatsApp Card */}
            <div className="contact-method-card featured-method">
              <div className="method-main-row">
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
              </div>
              <a
                href="https://wa.me/923137525862"
                target="_blank"
                rel="noopener noreferrer"
                className="method-action-btn"
              >
                Chat on WhatsApp ↗
              </a>
            </div>

            {/* Email Card */}
            <div className="contact-method-card">
              <div className="method-main-row">
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
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="method-action-btn"
                title="Copy Email Address"
              >
                {copiedEmail ? "✓ Copied to Clipboard" : "Copy Email"}
              </button>
            </div>

            {/* Request Resume / CV Card */}
            <div className="contact-method-card">
              <div className="method-main-row">
                <div className="method-icon-box icon-purple">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div className="method-details">
                  <span className="method-label">Recruiter &amp; Hiring</span>
                  <span className="method-value">Resume / CV Available</span>
                </div>
              </div>
              <a
                href="https://wa.me/923137525862?text=Hello%20Danial,%20please%20share%20your%20updated%20Resume/CV."
                target="_blank"
                rel="noopener noreferrer"
                className="method-action-btn"
              >
                Request CV ↗
              </a>
            </div>

            {/* Location Card */}
            <div className="contact-method-card">
              <div className="method-main-row">
                <div className="method-icon-box icon-cyan">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="method-details">
                  <span className="method-label">Location &amp; Timezone</span>
                  <span className="method-value">Gujrat, Pakistan (PKT / UTC+5)</span>
                </div>
              </div>
              <span className="timezone-tag">Flexible overlap US/EU</span>
            </div>
          </div>

          {/* Social Proof Row */}
          <div className="contact-social-wrap">
            <span className="social-wrap-title">Verified Profiles:</span>
            <div className="contact-social-icons">
              <a
                href="https://github.com/muhammaddanial104"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-soc-btn"
                title="GitHub"
                aria-label="GitHub"
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
                aria-label="LinkedIn"
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
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Low Friction Form */}
        <div className="contact-form-col">
          <form className="contact-glass-form" onSubmit={handleSubmit}>
            <div className="form-glow-top"></div>

            <h3 className="form-heading">Start a Project / Inquiry</h3>
            <p className="form-subheading">Tell me about your goal or project requirement.</p>

            {status.message && (
              <div className={`form-alert ${status.state}`}>
                <span>{status.message}</span>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name <span className="req">*</span>
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
              <label htmlFor="contactInfo" className="form-label">
                Email / WhatsApp <span className="req">*</span>
              </label>
              <input
                id="contactInfo"
                name="contactInfo"
                type="text"
                value={formData.contactInfo}
                onChange={handleChange}
                placeholder="email@company.com or +1 234 567 8900"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="service" className="form-label">
                What Can We Build?
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Full-Stack Web App & AI Automation">Full-Stack Web Application (React / MERN)</option>
                <option value="Autonomous AI Agent & Tool Calling">Autonomous AI Multi-Agent System</option>
                <option value="Business Workflow & Process Automation">Business Process &amp; API Automation</option>
                <option value="Full-Time / Contract Engineering Hire">Engineering Role / Freelance Contract</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                How Can I Help? <span className="req">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your project, timeline, or workflow bottleneck..."
                className="form-textarea"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status.state === "loading"}
              className="form-submit-btn"
            >
              <span>{status.state === "loading" ? "Preparing..." : "Let's Work Together"}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
