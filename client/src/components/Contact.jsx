import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Full-Stack Web Development Inquiry",
    message: "",
  });

  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ state: "error", message: "Please fill in all required fields." });
      return;
    }

    setStatus({ state: "loading", message: "Sending your message to Danial..." });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "87c9d9f2-cbe4-4b5f-9f76-58671bcf193a",
          name: formData.name,
          email: formData.email,
          subject: `${formData.service} from ${formData.name}`,
          message: formData.message,
          from_name: "Muhammad Danial Portfolio",
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({
          state: "success",
          message: "Thank you! Your message has been sent successfully. Danial will reply to your email within 24 hours.",
        });
        setFormData({ name: "", email: "", service: "Full-Stack Web Development Inquiry", message: "" });
      } else {
        // Fallback to mailto
        const mailtoUrl = `mailto:innocentdanial00@gmail.com?subject=${encodeURIComponent(
          formData.service
        )}&body=${encodeURIComponent(
          `Hi Danial,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
        setStatus({
          state: "success",
          message: "Opening your email app to complete sending directly to Danial...",
        });
      }
    } catch {
      const mailtoUrl = `mailto:innocentdanial00@gmail.com?subject=${encodeURIComponent(
        formData.service
      )}&body=${encodeURIComponent(
        `Hi Danial,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setStatus({
        state: "success",
        message: "Opening your email client to send your message...",
      });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("innocentdanial00@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section-container contact-section" aria-labelledby="contact-heading">
      {/* Contact Section Header */}
      <motion.div
        className="section-header text-center-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-badge">
          <span className="badge-num">07</span>
          <span className="badge-sep">|</span>
          <span className="badge-title">Direct Contact</span>
        </div>
        <h2 id="contact-heading" className="section-main-heading final-cta-heading">
          LET'S CONNECT &amp; <span className="gradient-text">BUILD TOGETHER</span>
        </h2>
        <p className="final-cta-subheading">
          Looking for a dedicated junior full-stack developer, have a project requirement, or want to discuss an open role? My inbox is always open.
        </p>
      </motion.div>

      <div className="contact-grid">
        {/* Left Column: Profile Card, Availability & Contact Channels */}
        <motion.div
          className="contact-info-col"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile Card */}
          <div className="contact-profile-card">
            <div className="profile-avatar-box">
              <picture>
                <source srcSet="/images/danial.webp" type="image/webp" />
                <img
                  src="/images/danial.jpg"
                  alt="Muhammad Danial"
                  className="profile-avatar-img"
                  width="58"
                  height="58"
                  loading="lazy"
                />
              </picture>
              <span className="profile-online-badge" title="Online & Available" aria-hidden="true"></span>
            </div>

            <div className="profile-info-box">
              <div className="profile-name-row">
                <h3 className="profile-name">Muhammad Danial</h3>
                <span className="profile-check-tag">✓ Available</span>
              </div>
              <p className="profile-role-title">Full-Stack &amp; AI Automation Developer</p>
              <div className="profile-meta-pills">
                <span className="profile-pill pill-degree">🎓 Robotics Graduate</span>
                <span className="profile-pill pill-intern">💼 6-Mo ITS Gujrat</span>
                <span className="profile-pill pill-status">Remote Ready</span>
              </div>
            </div>
          </div>

          {/* Availability Card */}
          <div className="availability-card">
            <span className="status-indicator" aria-hidden="true"></span>
            <div className="availability-text">
              <strong>Open for Opportunities</strong>
              <span>Full-Stack Projects, AI Agents, n8n Automations, &amp; Junior Roles</span>
            </div>
          </div>

          {/* Contact Methods Stack */}
          <div className="contact-methods-stack">
            {/* WhatsApp */}
            <div className="contact-method-card featured-method">
              <div className="method-main-row">
                <div className="method-icon-box icon-green" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <div className="method-details">
                  <span className="method-label">Direct WhatsApp</span>
                  <a href="https://wa.me/923137525862" target="_blank" rel="noopener noreferrer" className="method-value">
                    +92 313 7525862
                  </a>
                </div>
              </div>
              <a
                href="https://wa.me/923137525862"
                target="_blank"
                rel="noopener noreferrer"
                className="method-action-btn"
                aria-label="Chat directly on WhatsApp"
              >
                Chat ↗
              </a>
            </div>

            {/* Email */}
            <div className="contact-method-card">
              <div className="method-main-row">
                <div className="method-icon-box icon-cyan" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="method-details">
                  <span className="method-label">Email Address</span>
                  <a href="mailto:innocentdanial00@gmail.com" className="method-value">
                    innocentdanial00@gmail.com
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="method-action-btn"
                aria-label="Copy Danial email address"
              >
                {copiedEmail ? "✓ Copied" : "Copy"}
              </button>
            </div>

            {/* Location */}
            <div className="contact-method-card">
              <div className="method-main-row">
                <div className="method-icon-box icon-purple" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="method-details">
                  <span className="method-label">Current Location</span>
                  <span className="method-value">Gujrat, Punjab, Pakistan</span>
                </div>
              </div>
              <span className="timezone-tag">PKT (UTC+5)</span>
            </div>
          </div>

          {/* Social Profiles Row */}
          <div className="contact-social-wrap">
            <span className="social-wrap-title">Online Profiles &amp; Repositories:</span>
            <div className="contact-social-icons">
              <a
                href="https://github.com/muhammaddanial104"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-soc-btn"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-danial-2584b4432"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-soc-btn"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              <a
                href="https://dev.to/muhammaddanial104"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-soc-btn"
                title="Dev.to Articles"
                aria-label="Dev.to Profile"
              >
                <span style={{ fontSize: "11px", fontWeight: "900" }} aria-hidden="true">DEV</span>
              </a>

              <a
                href="/resume.pdf"
                download="Muhammad_Danial_Resume.pdf"
                className="contact-soc-btn"
                title="Download Resume PDF"
                aria-label="Download Resume"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Glassmorphic Contact Form */}
        <motion.div
          className="contact-form-col"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-glass-form">
            <div className="form-glow-top" aria-hidden="true"></div>

            <h3 className="form-heading">Send a Message</h3>
            <p className="form-subheading">
              Have an opportunity or inquiry? Drop me a message and I'll get back to you promptly.
            </p>

            {status.state !== "idle" && (
              <div
                className={`form-alert ${status.state}`}
                role="alert"
                aria-live="polite"
              >
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name <span className="req">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Johnson"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email <span className="req">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-service" className="form-label">
                  Inquiry Topic
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="AI Agent & n8n Workflow Automation">AI Agent &amp; n8n Workflow Automation</option>
                  <option value="Python Django & Bootstrap Web App">Python Django &amp; Bootstrap Web App</option>
                  <option value="Full-Stack MERN Development">Full-Stack MERN Development</option>
                  <option value="Mini Chatbot Integration">Mini Chatbot Integration</option>
                  <option value="Junior Software Developer Role">Junior Developer Job / Internship</option>
                  <option value="General Discussion / Mentorship">General Discussion / Mentorship</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Your Message <span className="req">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about your requirements, role, or project..."
                  rows={4}
                  className="form-textarea"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status.state === "loading"}
                className="form-submit-btn"
                aria-label="Send Message"
              >
                <span>{status.state === "loading" ? "Sending Message..." : "Send Message"}</span>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
