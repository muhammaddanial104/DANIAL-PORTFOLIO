// ═══════════════════════════════════════════════════
// COMPONENT: Contact.jsx — REDESIGNED TO MATCH REFERENCE IMAGE
// Section 07: Contact ("Let's Work Together")
// Left Column: Direct channels (Email, WhatsApp, Location: Gujrat, Pakistan)
// Right Column: Clean glassmorphic contact form
// ═══════════════════════════════════════════════════
import { useState } from "react";

const MAIL = "innocentdanial00@gmail.com";
const GH_URL = "https://github.com/muhammaddanial104";
const LI_URL = "https://www.linkedin.com/in/muhammad-danial-2584b4432";
const WA_URL = "https://wa.me/923137525862?text=Hi%20Danial,%20I%20have%20a%20process%20or%20project%20I'd%20like%20to%20discuss!";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, setState] = useState("idle"); // idle | sending | success | error
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setState("sending");
    setFeedback("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${MAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          _subject: `New AI Automation Inquiry from ${form.name.trim()}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json();

      if (response.ok || data.success === "true" || data.success === true) {
        setState("success");
        setFeedback(
          "Message transmitted directly to Muhammad Danial! You will receive a response shortly."
        );
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => {
          setState("idle");
          setFeedback("");
        }, 7000);
        return;
      }
      throw new Error(data.message || "Failed to deliver");
    } catch {
      // Fallback: direct mailto
      const mailtoUrl = `mailto:${MAIL}?subject=${encodeURIComponent(
        `AI Automation Inquiry from ${form.name}`
      )}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nWorkflow Problem:\n${form.message}`
      )}`;
      window.location.href = mailtoUrl;
      setState("success");
      setFeedback("Message prepared in your email client for Muhammad Danial.");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => {
        setState("idle");
        setFeedback("");
      }, 5000);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      {/* Reference Category Tag */}
      <div className="section-tag-row">
        <span className="section-num-tag">07 | Contact</span>
      </div>

      <div className="contact-main-header">
        <h2 className="contact-title-text">
          Let&apos;s Work <span className="accent-gradient">Together</span>
        </h2>
        <p className="contact-subhead-text">
          Have a project, collaboration or just want to say hi? I&apos;m always open to new opportunities.
        </p>
      </div>

      <div className="contact-grid-two-col">
        {/* Left Column: Direct Info Cards (Matching Reference Layout) */}
        <div className="contact-info-cards-col">
          <a href={`mailto:${MAIL}`} className="contact-ref-card">
            <div className="crc-icon-box">
              <span>✉️</span>
            </div>
            <div className="crc-text-wrap">
              <span className="crc-label">Email</span>
              <span className="crc-val">{MAIL}</span>
            </div>
          </a>

          <a href={WA_URL} target="_blank" rel="noreferrer" className="contact-ref-card">
            <div className="crc-icon-box crc-wa">
              <span>💬</span>
            </div>
            <div className="crc-text-wrap">
              <span className="crc-label">WhatsApp</span>
              <span className="crc-val">+92 313 7525862</span>
            </div>
          </a>

          <div className="contact-ref-card">
            <div className="crc-icon-box crc-loc">
              <span>📍</span>
            </div>
            <div className="crc-text-wrap">
              <span className="crc-label">Location</span>
              <span className="crc-val">Gujrat, Pakistan</span>
            </div>
          </div>

          {/* Social Pills */}
          <div className="contact-social-pills-row">
            <a href={GH_URL} target="_blank" rel="noreferrer" className="social-pill-btn">
              <span>GitHub</span>
            </a>
            <a href={LI_URL} target="_blank" rel="noreferrer" className="social-pill-btn">
              <span>LinkedIn</span>
            </a>
            <a href="https://www.facebook.com/share/1EPnhc4Zon/" target="_blank" rel="noreferrer" className="social-pill-btn">
              <span>Facebook</span>
            </a>
          </div>
        </div>

        {/* Right Column: Clean Dark Glass Form */}
        <div className="contact-form-glass-card">
          <form className="contact-clean-form" onSubmit={handleSubmit} noValidate>
            <div className="clean-form-group">
              <label htmlFor="ref-name">Your Name</label>
              <input
                id="ref-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Alex Morgan"
                autoComplete="name"
                required
              />
            </div>

            <div className="clean-form-group">
              <label htmlFor="ref-email">Your Email</label>
              <input
                id="ref-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="name@company.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="clean-form-group">
              <label htmlFor="ref-message">Your Message</label>
              <textarea
                id="ref-message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project, process to automate, or idea..."
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary contact-send-btn"
              disabled={state === "sending"}
            >
              <span className="btn-glow" />
              {state === "sending"
                ? "Sending..."
                : state === "success"
                ? "✓ Message Sent!"
                : "Send Message →"}
            </button>

            {feedback && (
              <p className="form-status-msg status-success">
                ✓ {feedback}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
