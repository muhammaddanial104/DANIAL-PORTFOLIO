import { useState } from "react";
import "./About.css";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

export default function About() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("innocentdanial00@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about" className="section-container about-section" aria-labelledby="about-heading">
      {/* Section Header */}
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-badge">
          <span className="badge-num">02</span>
          <span className="badge-sep">|</span>
          <span className="badge-title">Identity &amp; Engineering Mindset</span>
        </div>
        <h2 id="about-heading" className="section-main-heading">
          ENGINEERING DISCIPLINE &amp; <span className="gradient-text">SYSTEMS THINKING</span>
        </h2>
        <p className="section-subtitle">
          From robotics mathematical modeling to scalable Full-Stack &amp; Python architectures — engineering resilient, high-speed digital platforms.
        </p>
      </motion.div>

      <div className="about-grid">
        {/* Left Column: Authentic Bio & Growth Mindset Story */}
        <motion.div
          className="about-bio-col"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="about-lead">
            Hi! I'm <strong className="text-white">Muhammad Danial</strong> — Full-Stack Developer &amp; AI Automation Specialist based in Gujrat, Pakistan.
          </p>

          <p className="about-paragraph">
            With a degree in <span className="text-cyan">Robotics &amp; Autonomous Systems</span>, I combine mathematical problem-solving with production-grade full-stack architecture. I have engineered and deployed commercial e-commerce platforms and web applications featuring resilient REST APIs, automated Stripe transactions, and live database synchronization.
          </p>

          <p className="about-paragraph">
            Today, I specialize in architecting <strong className="text-white">autonomous AI Agents, n8n workflow automations, Python &amp; Django REST backends, and responsive Full-Stack applications</strong> — transforming manual, time-intensive operations into high-speed, self-driving digital pipelines.
          </p>

          {/* 4 Pillars Grid with proven glass cards */}
          <div className="about-highlights-grid">
            <div className="highlight-card">
              <span className="highlight-icon" aria-hidden="true">🎓</span>
              <div className="highlight-info">
                <h4>Robotics &amp; Algorithmic Logic</h4>
                <p>Strong foundations in computational kinematics, mathematical modeling, and deterministic system design.</p>
              </div>
            </div>

            <div className="highlight-card">
              <span className="highlight-icon" aria-hidden="true">💼</span>
              <div className="highlight-info">
                <h4>Production Platform Delivery</h4>
                <p>Shipped commercial full-stack platforms with live Stripe payments and real-time inventory synchronization.</p>
              </div>
            </div>

            <div className="highlight-card">
              <span className="highlight-icon" aria-hidden="true">🤖</span>
              <div className="highlight-info">
                <h4>Autonomous AI Agents &amp; n8n</h4>
                <p>Multi-agent pipelines, prompt engineering, automated webhook triage, and intelligent mini chatbots.</p>
              </div>
            </div>

            <div className="highlight-card">
              <span className="highlight-icon" aria-hidden="true">⚡</span>
              <div className="highlight-info">
                <h4>Scalable Backend &amp; Cloud APIs</h4>
                <p>High-concurrency Node.js/Express &amp; Python Django REST APIs, secure JWT auth, and database architectures.</p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="about-actions-row">
            <a
              href="/resume.pdf"
              download="Muhammad_Danial_Resume.pdf"
              className="about-btn-primary"
              aria-label="Download Muhammad Danial CV"
            >
              <span>Download Full CV</span>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="about-btn-secondary"
              aria-label="Copy Danial's email address"
            >
              <span>{copied ? "Email Copied! ✓" : "Copy Email"}</span>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Right Column: 3D Tilt Authentic Photo with Interactive Badges & Signature */}
        <motion.div
          className="about-visual-col"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <TiltCard maxTilt={12} glare={true} className="about-photo-tilt-card">
            <div className="about-photo-wrapper">
              <div className="about-glow-aura" aria-hidden="true"></div>

              <div className="about-photo-frame">
                <picture>
                  <source srcSet="/images/danial.webp" type="image/webp" />
                  <img
                    src="/images/danial.jpg"
                    alt="Muhammad Danial - Full-Stack Developer & AI Automation Specialist"
                    className="about-photo-img"
                    width="400"
                    height="500"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <div className="about-photo-overlay" aria-hidden="true"></div>
              </div>

              {/* Signature Badge */}
              <div className="about-signature-badge">
                <span className="signature-name">Muhammad Danial</span>
                <span className="signature-role">Full-Stack &amp; AI Automation</span>
              </div>

              {/* Clean Floating Badges: "Full Stack" and "AI Agents & n8n" */}
              <motion.div
                className="about-float-tag tag-code"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="tag-icon" aria-hidden="true">💻</span>
                <span className="tag-text">Full Stack</span>
              </motion.div>

              <motion.div
                className="about-float-tag tag-create"
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              >
                <span className="tag-icon" aria-hidden="true">🤖</span>
                <span className="tag-text">AI Agents &amp; n8n</span>
              </motion.div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
