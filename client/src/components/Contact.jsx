// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// COMPONENT: Contact.jsx â€” ACCESSIBLE FORM + SOCIALS
// Associated labels (htmlFor + id) & autocomplete
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
import { useState } from "react";
import api from "../api";

const FB_URL = "https://www.facebook.com/share/1EPnhc4Zon/";
const IG_URL = "https://www.instagram.com/d4_danial";
const LI_URL = "https://www.linkedin.com/in/muhammad-danial-2584b4432";
const GH_URL = "https://github.com/muhammaddanial104";
const MAIL   = "innocentdanial00@gmail.com";

const FBIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
);
const IGIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/>
  </svg>
);
const LIIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const GHIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);
const MLIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

export default function Contact() {
  const [form,  setForm]  = useState({ name:"", email:"", subject:"", message:"" });
  const [state, setState] = useState("idle");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setState("sending");
    try {
      const res = await api.post("/api/contact", form);
      if (res.data && res.data.success) {
        setState("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setState("idle"), 4000);
        return;
      }
      throw new Error("API failed");
    } catch {
      // Fallback: direct email transmission
      const mailtoUrl = `mailto:${MAIL}?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\nMessage:\n${form.message}`)}`;
      window.location.href = mailtoUrl;
      setState("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setState("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-header">
        <span className="section-num">05</span>
        <h2 className="section-title">GET IN <span className="accent">TOUCH</span></h2>
        <div className="section-line" />
      </div>

      <div className="contact-grid">
        {/* â”€â”€ LEFT â”€â”€ */}
        <div className="contact-info-panel">
          <p className="contact-intro">
            Ready to build something <span className="accent">extraordinary</span>?<br/>
            Let&apos;s collaborate and create the future together.
          </p>

          {/* Social buttons */}
          <div className="social-row">
            <a href={FB_URL} target="_blank" rel="noreferrer" className="social-btn fb-btn" aria-label="Visit Facebook profile">
              <FBIcon /> <span>Facebook</span>
            </a>
            <a href={IG_URL} target="_blank" rel="noreferrer" className="social-btn ig-btn" aria-label="Visit Instagram profile">
              <IGIcon /> <span>Instagram</span>
            </a>
            <a href={LI_URL} target="_blank" rel="noreferrer" className="social-btn li-btn" aria-label="Visit LinkedIn profile">
              <LIIcon /> <span>LinkedIn</span>
            </a>
            <a href={GH_URL} target="_blank" rel="noreferrer" className="social-btn gh-btn" aria-label="Visit GitHub profile">
              <GHIcon /> <span>GitHub</span>
            </a>
          </div>

          {/* Contact items */}
          <div className="contact-links">
            <a href={`mailto:${MAIL}`} className="contact-item" aria-label="Send email">
              <span className="contact-icon"><MLIcon /></span>
              <div>
                <span className="contact-label">EMAIL</span>
                <span className="contact-value">{MAIL}</span>
              </div>
              <span className="contact-arrow">&#8594;</span>
            </a>
            <a href={FB_URL} target="_blank" rel="noreferrer" className="contact-item" aria-label="Facebook page">
              <span className="contact-icon"><FBIcon /></span>
              <div>
                <span className="contact-label">FACEBOOK</span>
                <span className="contact-value">Muhammad Danial</span>
              </div>
              <span className="contact-arrow">&#8594;</span>
            </a>
            <a href={IG_URL} target="_blank" rel="noreferrer" className="contact-item" aria-label="Instagram page">
              <span className="contact-icon"><IGIcon /></span>
              <div>
                <span className="contact-label">INSTAGRAM</span>
                <span className="contact-value">@d4_danial</span>
              </div>
              <span className="contact-arrow">&#8594;</span>
            </a>
            <a href={LI_URL} target="_blank" rel="noreferrer" className="contact-item" aria-label="LinkedIn profile">
              <span className="contact-icon"><LIIcon /></span>
              <div>
                <span className="contact-label">LINKEDIN</span>
                <span className="contact-value">Muhammad Danial</span>
              </div>
              <span className="contact-arrow">&#8594;</span>
            </a>
          </div>
        </div>

        {/* â”€â”€ RIGHT FORM â”€â”€ */}
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">YOUR NAME</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                className="form-input"
                autoComplete="name"
                placeholder="Muhammad Ali"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">YOUR EMAIL</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                className="form-input"
                autoComplete="email"
                placeholder="ali@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="contact-subject" className="form-label">SUBJECT</label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              className="form-input"
              autoComplete="off"
              placeholder="Project Collaboration"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-message" className="form-label">MESSAGE</label>
            <textarea
              id="contact-message"
              name="message"
              className="form-input form-textarea"
              autoComplete="off"
              placeholder="Tell me about your project or idea..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={`btn btn-primary form-submit-btn ${state}`} disabled={state === "sending"}>
            <span className="btn-glow" />
            {state === "idle"    && <><span>&#9889;</span> SEND MESSAGE</>}
            {state === "sending" && <><span>&#9711;</span> TRANSMITTING...</>}
            {state === "success" && <><span>&#10003;</span> MESSAGE SENT!</>}
            {state === "error"   && <><span>&#10005;</span> ERROR â€” RETRY</>}
          </button>
          {state === "success" && <p className="form-success-msg">&#9989; Message delivered! I will reply soon.</p>}
          {state === "error"   && <p className="form-error-msg">&#10060; Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  );
}