// ═══════════════════════════════════════════════════
// COMPONENT: Contact.jsx — FINAL CONVERSION CTA
// Aligned with PDF Masterplan Section 10 & 12:
// Headline: "YOUR NEXT AI SYSTEM COULD START HERE."
// Subhead: "Have a repetitive process, AI idea, or business problem? Show me the problem. I'll show you what can be automated."
// Primary CTA: "Start a Conversation"
// ═══════════════════════════════════════════════════
import { useState } from "react";

const MAIL = "innocentdanial00@gmail.com";
const GH_URL = "https://github.com/muhammaddanial104";
const LI_URL = "https://www.linkedin.com/in/muhammad-danial-2584b4432";
const WA_URL = "https://wa.me/923137525862?text=Hi%20Danial,%20I%20have%20a%20process%20I'd%20like%20to%20automate!";

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
      <div className="section-header">
        <span className="section-num">06</span>
        <h2 className="section-title">
          START A <span className="accent">CONVERSATION</span>
        </h2>
        <div className="section-line" />
      </div>

      <div className="contact-container">
        {/* PDF Section 10 & 12: EXACT MASTERPLAN CTA COPY */}
        <div className="final-cta-banner">
          <span className="cta-highlight-badge">⚡ LET&apos;S AUTOMATE YOUR WORKFLOW</span>
          <h3 className="contact-main-heading">
            YOUR NEXT AI SYSTEM <span className="accent">COULD START HERE.</span>
          </h3>
          <p className="contact-lead-text">
            Have a repetitive process, AI idea, or business problem?
            <br />
            <strong className="text-white">
              Show me the problem. I’ll show you what can be automated.
            </strong>
          </p>
        </div>

        {/* 4 Direct Channel Quick Buttons */}
        <div className="contact-channels-grid">
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="channel-btn channel-wa"
          >
            <span className="channel-icon">💬</span>
            <div className="channel-text-wrap">
              <span className="channel-name">WhatsApp</span>
              <span className="channel-sub">+92 313 7525862</span>
            </div>
          </a>

          <a href={`mailto:${MAIL}`} className="channel-btn channel-email">
            <span className="channel-icon">✉️</span>
            <div className="channel-text-wrap">
              <span className="channel-name">Email Directly</span>
              <span className="channel-sub">{MAIL}</span>
            </div>
          </a>

          <a
            href={GH_URL}
            target="_blank"
            rel="noreferrer"
            className="channel-btn channel-gh"
          >
            <span className="channel-icon">🐙</span>
            <div className="channel-text-wrap">
              <span className="channel-name">GitHub</span>
              <span className="channel-sub">muhammaddanial104</span>
            </div>
          </a>

          <a
            href={LI_URL}
            target="_blank"
            rel="noreferrer"
            className="channel-btn channel-li"
          >
            <span className="channel-icon">💼</span>
            <div className="channel-text-wrap">
              <span className="channel-name">LinkedIn</span>
              <span className="channel-sub">muhammad-danial</span>
            </div>
          </a>
        </div>

        {/* Contact Form with Direct Gmail Delivery */}
        <div className="contact-form-wrap">
          <div className="form-card-badge">
            <span className="badge-pulse" />
            DIRECT AUTOMATION INQUIRY
          </div>

          <form
            className="contact-simple-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-simple-row">
              <div className="form-simple-group">
                <label htmlFor="simple-name">
                  <span className="term-num">01 //</span> YOUR NAME OR COMPANY
                </label>
                <input
                  id="simple-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Morgan / Fintech Labs"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-simple-group">
                <label htmlFor="simple-email">
                  <span className="term-num">02 //</span> WORK EMAIL ADDRESS
                </label>
                <input
                  id="simple-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="form-simple-group">
              <label htmlFor="simple-message">
                <span className="term-num">03 //</span> WHAT PROCESS WOULD YOU LIKE TO AUTOMATE?
              </label>
              <textarea
                id="simple-message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Describe your repetitive process, current bottlenecks, or AI agent concept..."
                required
              />
            </div>

            {/* Primary CTA button as required by PDF Section 10 */}
            <button
              type="submit"
              className="btn btn-primary contact-submit-btn"
              disabled={state === "sending"}
            >
              <span className="btn-glow" />
              {state === "sending"
                ? "TRANSMITTING..."
                : state === "success"
                ? "✓ MESSAGE TRANSMITTED!"
                : "Start a Conversation →"}
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
