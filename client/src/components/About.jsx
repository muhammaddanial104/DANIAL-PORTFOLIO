import { useState } from "react";
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
          <span className="badge-title">My Journey &amp; Mindset</span>
        </div>
        <h2 id="about-heading" className="section-main-heading">
          ENGINEERING DISCIPLINE &amp; <span className="gradient-text">GROWTH MINDSET</span>
        </h2>
        <p className="section-subtitle">
          From robotics algorithms to commercial MERN platforms — building reliable web applications with curiosity, rigor, and clean code.
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
            Hi! I'm <strong className="text-white">Muhammad Danial</strong> — an early-career Full-Stack MERN Developer based in Gujrat, Pakistan.
          </p>

          <p className="about-paragraph">
            My journey began with a <span className="text-cyan">Bachelor in Robotics &amp; Autonomous Systems</span>. Working with hardware kinematics, microcontrollers, and state machines instilled a deep appreciation for deterministic logic, defensive programming, and systematic debugging. When I built my first web app, I was captivated by how fast ideas could transform into accessible software that solves everyday problems for real users.
          </p>

          <p className="about-paragraph">
            To ground my theory in production reality, I completed an intensive <span className="text-purple">6-Month Software Engineering Internship at ITS Gujrat</span>. There, I contributed directly to architecting and deploying two commercial MERN e-commerce platforms — implementing RESTful API endpoints, Stripe checkout workflows, JWT auth guards, and real-time MongoDB inventory synchronization.
          </p>

          <p className="about-paragraph">
            I don't believe in exaggerated buzzwords. As a junior engineer, my superpower is my <strong className="text-white">relentless curiosity and humility</strong>: I code every day, document what I learn on Dev.to, welcome code reviews with open arms, and am eager to contribute value within a collaborative, fast-moving engineering team.
          </p>

          {/* 4 Pillars Grid */}
          <div className="about-highlights-grid">
            <div className="about-highlight-card">
              <span className="highlight-icon" aria-hidden="true">🎓</span>
              <div>
                <strong className="highlight-title">Robotics Degree</strong>
                <p className="highlight-desc">Strong foundation in computational logic, math, and structured problem-solving.</p>
              </div>
            </div>

            <div className="about-highlight-card">
              <span className="highlight-icon" aria-hidden="true">💼</span>
              <div>
                <strong className="highlight-title">6-Mo Commercial Internship</strong>
                <p className="highlight-desc">Shipped 2 production MERN platforms at ITS Gujrat with real client deployments.</p>
              </div>
            </div>

            <div className="about-highlight-card">
              <span className="highlight-icon" aria-hidden="true">⚛️</span>
              <div>
                <strong className="highlight-title">Modern MERN Tooling</strong>
                <p className="highlight-desc">React 18, Node.js, Express, MongoDB, Redux Toolkit, Postman, Git workflows.</p>
              </div>
            </div>

            <div className="about-highlight-card">
              <span className="highlight-icon" aria-hidden="true">🌱</span>
              <div>
                <strong className="highlight-title">Continuous Growth</strong>
                <p className="highlight-desc">Writing tech blogs on Dev.to, learning TypeScript and Next.js, eager to be mentored.</p>
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
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
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
                    alt="Muhammad Danial - Junior Full-Stack Developer"
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
                <span className="signature-role">Junior MERN Developer</span>
              </div>

              {/* 4 Floating Contextual Tags with Proven Perimeter Coordinates */}
              <motion.div
                className="about-float-tag tag-code"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="tag-icon" aria-hidden="true">⚛️</span>
                <span className="tag-text">MERN Stack</span>
              </motion.div>

              <motion.div
                className="about-float-tag tag-create"
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              >
                <span className="tag-icon" aria-hidden="true">🎓</span>
                <span className="tag-text">Robotics B.S.</span>
              </motion.div>

              <motion.div
                className="about-float-tag tag-automate"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              >
                <span className="tag-icon" aria-hidden="true">💼</span>
                <span className="tag-text">6-Mo ITS Gujrat</span>
              </motion.div>

              <motion.div
                className="about-float-tag tag-innovate"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
              >
                <span className="tag-icon" aria-hidden="true">📍</span>
                <span className="tag-text">Gujrat, Pakistan</span>
              </motion.div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
