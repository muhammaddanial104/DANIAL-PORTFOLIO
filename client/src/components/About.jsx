import { useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("innocentdanial00@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="section-container about-section">
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
          <span className="badge-title">About Me</span>
        </div>
        <h2 className="section-main-heading">
          ENGINEERING DISCIPLINE &amp; <span className="gradient-text">DIGITAL EXCELLENCE</span>
        </h2>
        <p className="section-subtitle">
          Merging robotics systems engineering with modern full-stack web architecture and autonomous AI workflows.
        </p>
      </motion.div>

      <div className="about-grid">
        {/* Left Column: Authentic Bio & Highlights */}
        <motion.div
          className="about-bio-col"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="about-lead">
            Hi, I'm <strong className="text-white">Muhammad Danial</strong> — a Full-Stack Software Engineer and AI Automation Specialist based in Gujrat, Pakistan.
          </p>

          <p className="about-paragraph">
            With a formal foundation in <span className="text-cyan">Bachelor in Robotics &amp; Autonomous Systems</span>, I approach software engineering from a first-principles perspective. Rather than just writing code, I design resilient, modular architectures that eliminate manual inefficiencies and scale reliably under real-world demands.
          </p>

          <p className="about-paragraph">
            During my intensive <span className="text-purple">6-Month Software Engineering Internship at ITS Gujrat</span>, I engineered and deployed two production-ready MERN e-commerce platforms. Both systems integrated automated Stripe/local payment flows, real-time inventory management, and robust JWT authorization protocols.
          </p>

          <p className="about-paragraph">
            Today, my core focus is building modern full-stack web applications and autonomous AI multi-agent workflows—turning complex business requirements into elegant, high-impact digital solutions.
          </p>

          {/* Key Highlights Grid */}
          <div className="about-highlights-grid">
            <motion.div
              className="highlight-card"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="highlight-icon">🎓</div>
              <div className="highlight-info">
                <h4>BS in Robotics</h4>
                <p>Systematic logic, algorithms &amp; autonomous systems engineering</p>
              </div>
            </motion.div>

            <motion.div
              className="highlight-card"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="highlight-icon">💼</div>
              <div className="highlight-info">
                <h4>ITS Gujrat Internship</h4>
                <p>Shipped 2 production MERN e-commerce platforms end-to-end</p>
              </div>
            </motion.div>

            <motion.div
              className="highlight-card"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="highlight-icon">🤖</div>
              <div className="highlight-info">
                <h4>AI Agent Architect</h4>
                <p>Autonomous LLM swarms, custom tool-calling &amp; API workflows</p>
              </div>
            </motion.div>

            <motion.div
              className="highlight-card"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="highlight-icon">⚡</div>
              <div className="highlight-info">
                <h4>Full-Stack Mastery</h4>
                <p>High-speed React, Next.js, Node.js, Express &amp; MongoDB</p>
              </div>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <div className="about-actions-row">
            <motion.a
              href="https://wa.me/923137525862?text=Hello%20Danial,%20I%20am%20interested%20in%20discussing%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="about-btn-primary"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Discuss a Project</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </motion.a>

            <motion.button
              onClick={copyEmail}
              className="about-btn-secondary"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>{copied ? "✓ Email Copied!" : "Copy Email"}</span>
            </motion.button>

            <motion.button
              onClick={() => scrollTo("projects")}
              className="about-btn-secondary"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>View Projects</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column: Sleek Photo Card with Glass Frame & Floating Badges */}
        <motion.div
          className="about-visual-col"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="about-photo-wrapper">
            {/* Glowing neon aura */}
            <div className="about-glow-aura"></div>

            {/* Glass photo frame */}
            <div className="about-photo-frame">
              <img
                src="/images/danial.jpg"
                alt="Muhammad Danial"
                className="about-photo-img"
              />

              <div className="about-photo-overlay"></div>

              {/* Bottom signature badge */}
              <div className="about-signature-badge">
                <span className="signature-name">Muhammad Danial</span>
                <span className="signature-role">Full-Stack &amp; AI Builder</span>
              </div>
            </div>

            {/* 4 Floating Badges with Subtle Oscillating Animation */}
            <motion.div
              className="about-float-tag tag-code"
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span>&lt;Code /&gt;</span>
            </motion.div>

            <motion.div
              className="about-float-tag tag-create"
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
              <span>✨ Create</span>
            </motion.div>

            <motion.div
              className="about-float-tag tag-automate"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            >
              <span>⚡ Automate</span>
            </motion.div>

            <motion.div
              className="about-float-tag tag-innovate"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            >
              <span>🚀 Innovate</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
