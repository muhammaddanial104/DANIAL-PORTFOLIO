import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Stack Web Development Inquiry",
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
      setStatus({ state: "error", message: "Please fill in your name, email, and message." });
      return;
    }

    setStatus({ state: "loading", message: "Sending your message..." });

    try {
      // Use Web3Forms public API endpoint for reliable email delivery
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "87c9d9f2-cbe4-4b5f-9f76-58671bcf193a", // Fallback public web form endpoint
          name: formData.name,
          email: formData.email,
          subject: `${formData.subject} - from ${formData.name}`,
          message: formData.message,
          from_name: "Portfolio Inquiry Form",
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({
          state: "success",
          message: "Thank you! Your message has been sent successfully. Danial will reply to your email shortly.",
        });
        setFormData({ name: "", email: "", subject: "Full-Stack Web Development Inquiry", message: "" });
      } else {
        // Graceful fallback to mailto
        const mailtoUrl = `mailto:innocentdanial00@gmail.com?subject=${encodeURIComponent(
          formData.subject
        )}&body=${encodeURIComponent(
          `Hi Danial,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
        setStatus({
          state: "success",
          message: "Opening your email client to send your message directly to Danial...",
        });
      }
    } catch {
      // Offline or network error fallback
      const mailtoUrl = `mailto:innocentdanial00@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Hi Danial,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setStatus({
        state: "success",
        message: "Network busy. Opening your email app to complete sending...",
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
          <span className="badge-num">06</span>
          <span className="badge-sep">|</span>
          <span className="badge-title">Get In Touch</span>
        </div>
        <h2 id="contact-heading" className="section-main-heading final-cta-heading">
          LET'S CONNECT &amp; <span className="gradient-text">BUILD TOGETHER</span>
        </h2>
        <p className="final-cta-subheading">
          Looking for a dedicated junior full-stack developer, have a project requirement, or want to discuss an open role? My inbox is always open.
        </p>
      </motion.div>

      <div className="contact-main-grid">
        {/* Left Column: Direct Communication Channels & Profile */}
        <motion.div
          className="contact-info-col"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="direct-reach-card">
            <h3 className="reach-card-title">Direct Communication</h3>
            <p className="reach-card-desc">
              Whether you prefer email, WhatsApp, or reviewing code repositories on GitHub, feel free to reach out anytime.
            </p>

            <div className="reach-channels-list">
              {/* Email */}
              <div className="reach-channel-item">
                <div className="channel-icon-wrap" aria-hidden="true">✉️</div>
                <div className="channel-text-wrap">
                  <span className="channel-label">Email Address</span>
                  <a href="mailto:innocentdanial00@gmail.com" className="channel-value-link">
                    innocentdanial00@gmail.com
                  </a>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="channel-copy-btn"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? "✓ Copied" : "Copy"}
                </button>
              </div>

              {/* WhatsApp */}
              <div className="reach-channel-item">
                <div className="channel-icon-wrap" aria-hidden="true">💬</div>
                <div className="channel-text-wrap">
                  <span className="channel-label">WhatsApp (Direct)</span>
                  <a
                    href="https://wa.me/923137525862"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-value-link"
                  >
                    +92 313 7525862
                  </a>
                </div>
                <a
                  href="https://wa.me/923137525862"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-link-btn"
                  aria-label="Chat on WhatsApp"
                >
                  Chat ↗
                </a>
              </div>

              {/* Location */}
              <div className="reach-channel-item">
                <div className="channel-icon-wrap" aria-hidden="true">📍</div>
                <div className="channel-text-wrap">
                  <span className="channel-label">Location</span>
                  <span className="channel-value-static">Gujrat, Punjab, Pakistan (UTC+5)</span>
                </div>
                <span className="channel-tag">Remote Ready</span>
              </div>
            </div>

            {/* Social Profile Links */}
            <div className="contact-social-row">
              <a
                href="https://github.com/muhammaddanial104"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                title="GitHub Profile"
                aria-label="Danial on GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-danial-2584b4432"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                title="LinkedIn Profile"
                aria-label="Danial on LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="/resume.pdf"
                download="Muhammad_Danial_Resume.pdf"
                className="contact-social-btn"
                title="Download Resume"
                aria-label="Download Danial's Resume"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Resume PDF</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Working Contact Form */}
        <motion.div
          className="contact-form-col"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-form-card">
            <h3 className="form-card-title">Send a Direct Message</h3>
            <p className="form-card-subtitle">
              Fill in your details and message. I typically respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              {/* Name */}
              <div className="form-field-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name <span className="field-required">*</span>
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

              {/* Email */}
              <div className="form-field-group">
                <label htmlFor="contact-email" className="form-label">
                  Email Address <span className="field-required">*</span>
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

              {/* Inquiry Type */}
              <div className="form-field-group">
                <label htmlFor="contact-subject" className="form-label">
                  Inquiry Topic
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Full-Stack Web Development Inquiry">Full-Stack Web Development</option>
                  <option value="Frontend React.js Project">Frontend / React.js Project</option>
                  <option value="Node.js & Backend REST API">Node.js &amp; Backend REST API</option>
                  <option value="Job / Internship Opportunity">Junior Developer Job / Internship</option>
                  <option value="General Collaboration / Code Discussion">General Discussion / Mentorship</option>
                </select>
              </div>

              {/* Message */}
              <div className="form-field-group">
                <label htmlFor="contact-message" className="form-label">
                  Message Details <span className="field-required">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, team requirements, or discussion points..."
                  rows={4}
                  className="form-textarea"
                  required
                />
              </div>

              {/* Status Message Alert */}
              {status.state !== "idle" && (
                <div
                  className={`form-status-alert status-${status.state}`}
                  role="alert"
                  aria-live="polite"
                >
                  {status.state === "loading" && <span className="spinner-dot" aria-hidden="true"></span>}
                  <span>{status.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.state === "loading"}
                className="form-submit-btn"
                aria-label="Submit message"
              >
                <span>{status.state === "loading" ? "Sending..." : "Send Message"}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
