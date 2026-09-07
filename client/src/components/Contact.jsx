// ═══════════════════════════════════════════════════
// COMPONENT: Contact.jsx — LET'S BUILD SOMETHING INTELLIGENT.
// Verified WhatsApp (+923137525862), Email, GitHub, LinkedIn + Simple Form
// ═══════════════════════════════════════════════════
import { useState } from "react";
import api from "../api";

const MAIL = "innocentdanial00@gmail.com";
const PHONE = "+923137525862";
const GH_URL = "https://github.com/muhammaddanial104";
const LI_URL = "https://www.linkedin.com/in/muhammad-danial-2584b4432";
const WA_URL = "https://wa.me/923137525862?text=Hi%20Danial,%20I'd%20like%20to%20discuss%20a%20project!";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, setState] = useState("idle");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setState("sending");
    try {
      const res = await api.post("/api/contact", {
        ...form,
        subject: "New Project Inquiry from Portfolio",
      });
      if (res.data && res.data.success) {
        setState("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setState("idle"), 4000);
        return;
      }
      throw new Error("API fallback");
    } catch {
      // Direct email fallback
      const mailtoUrl = `mailto:${MAIL}?subject=Project%20Inquiry%20from%20Portfolio&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)}`;
      window.location.href = mailtoUrl;
      setState("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setState("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-header">
        <span className="section-num">05</span>
        <h2 className="section-title">
          GET IN <span className="accent">TOUCH</span>
        </h2>
        <div className="section-line" />
      </div>

      <div className="contact-container">
        {/* Strong Heading Requested */}
        <h3 className="contact-main-heading">
          Let&apos;s Build <span className="accent">Something Intelligent.</span>
        </h3>
        <p className="contact-lead-text">
          Whether you need an autonomous AI agent, custom workflow automation, or modern web platform — let&apos;s connect directly.
        </p>

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

          <a
            href={`mailto:${MAIL}`}
            className="channel-btn channel-email"
          >
            <span className="channel-icon">✉️</span>
            <div className="channel-text-wrap">
              <span className="channel-name">Email</span>
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

        {/* Simple Contact Form */}
        <div className="contact-form-wrap">
          <form className="contact-simple-form" onSubmit={handleSubmit} noValidate>
            <div className="form-simple-row">
              <div className="form-simple-group">
                <label htmlFor="simple-name">YOUR NAME</label>
                <input
                  id="simple-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-simple-group">
                <label htmlFor="simple-email">YOUR EMAIL</label>
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
              <label htmlFor="simple-message">YOUR MESSAGE</label>
              <textarea
                id="simple-message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project, idea, or automation requirements..."
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary contact-submit-btn"
              disabled={state === "sending"}
            >
              <span className="btn-glow" />
              {state === "sending" ? "TRANSMITTING..." : state === "success" ? "✓ MESSAGE SENT!" : "Send Message"}
            </button>

            {state === "success" && (
              <p className="form-status-msg status-success">
                Message transmitted successfully! Muhammad Danial will respond shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
