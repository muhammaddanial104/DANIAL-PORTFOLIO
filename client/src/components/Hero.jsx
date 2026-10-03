import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "./CountUp";
import TiltCard from "./TiltCard";

const CYCLING_ROLES = [
  "Full-Stack Software Engineer",
  "AI Multi-Agent Architect",
  "Robotics Systems Engineer",
  "Autonomous Workflow Builder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % CYCLING_ROLES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left Column: Clear Identity, Role & High-Impact Value Proposition */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Greeting Badge */}
          <motion.div
            className="hero-greeting-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="greeting-wave">👋</span>
            <span className="greeting-text">Welcome, I'm</span>
          </motion.div>

          {/* Primary Name Headline with Radiant Stream */}
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="hero-name-gradient">Muhammad Danial</span>
          </motion.h1>

          {/* Dynamic Role Rotator with Glow & Spring Animation */}
          <motion.div
            className="hero-role-title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ minHeight: "36px", display: "flex", alignItems: "center" }}
          >
            <span style={{ color: "var(--text-muted)", fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)", marginRight: "10px", fontWeight: 600 }}>
              Specialized in
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={CYCLING_ROLES[roleIndex]}
                className="role-rotating-text"
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                transition={{ duration: 0.32, ease: "easeOut" }}
                style={{
                  fontWeight: 800,
                  color: "#38bdf8",
                  textShadow: "0 0 16px rgba(56, 189, 248, 0.6)",
                  display: "inline-block",
                }}
              >
                {CYCLING_ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Punchy, Clear Value Proposition */}
          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I architect high-performance web applications and autonomous AI systems. From modern full-stack MERN &amp; Next.js platforms to automated agent pipelines, I build reliable digital solutions that eliminate manual work and help businesses scale.
          </motion.p>

          {/* Degree & Verified Background Pill */}
          <motion.div
            className="hero-pill-badge"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            whileHover={{ scale: 1.03 }}
          >
            <span className="pill-dot"></span>
            <span className="pill-text">🎓 Bachelor in Robotics • 6-Month ITS Gujrat Internship • Full-Stack Builder</span>
          </motion.div>

          {/* Interactive CTAs */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.button
              onClick={() => scrollTo("projects")}
              className="hero-btn-primary"
              whileHover={{ scale: 1.04, y: -2, boxShadow: "0 0 30px rgba(56, 189, 248, 0.6)" }}
              whileTap={{ scale: 0.96 }}
            >
              <span>Explore Projects</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </motion.button>

            <motion.button
              onClick={() => scrollTo("contact")}
              className="hero-btn-secondary"
              whileHover={{ scale: 1.04, y: -2, borderColor: "#38bdf8" }}
              whileTap={{ scale: 0.96 }}
            >
              <span>Let's Work Together</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </motion.button>
          </motion.div>

          {/* Social Proof Links with Magnetic Hover */}
          <motion.div
            className="hero-social-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.a
              href="https://github.com/muhammaddanial104"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="GitHub Profile"
              aria-label="GitHub"
              whileHover={{ scale: 1.18, y: -3, color: "#38bdf8", borderColor: "#38bdf8" }}
              whileTap={{ scale: 0.92 }}
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/muhammad-danial-2584b4432"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.18, y: -3, color: "#38bdf8", borderColor: "#38bdf8" }}
              whileTap={{ scale: 0.92 }}
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </motion.a>

            <motion.a
              href="https://wa.me/923137525862"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="Direct WhatsApp"
              aria-label="WhatsApp"
              whileHover={{ scale: 1.18, y: -3, color: "#22c55e", borderColor: "#22c55e" }}
              whileTap={{ scale: 0.92 }}
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </motion.a>

            <motion.a
              href="mailto:innocentdanial00@gmail.com"
              className="social-icon-btn"
              title="Direct Email"
              aria-label="Email"
              whileHover={{ scale: 1.18, y: -3, color: "#c084fc", borderColor: "#c084fc" }}
              whileTap={{ scale: 0.92 }}
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </motion.a>
          </motion.div>

          {/* Stats Bar with Live Counting Numbers */}
          <motion.div
            className="hero-stats-row"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="hero-stat-item">
              <span className="hero-stat-number">
                <CountUp end={6} suffix=" Mo" />
              </span>
              <span className="hero-stat-label">Software Experience</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat-item">
              <span className="hero-stat-number">
                <CountUp end={2} suffix="" />
              </span>
              <span className="hero-stat-label">Projects Delivered</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat-item">
              <span className="hero-stat-number">
                <CountUp end={100} suffix="%" />
              </span>
              <span className="hero-stat-label">Execution &amp; Quality</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Tilt Avatar Visual with Cosmic Rings & Holographic Sheen */}
        <motion.div
          className="hero-visual-col"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <TiltCard maxTilt={14} glare={true} className="hero-avatar-tilt-wrapper">
            <motion.div
              className="hero-avatar-wrapper"
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="cosmic-glow-halo halo-cyan"></div>
              <div className="cosmic-glow-halo halo-purple"></div>

              <div className="cosmic-orbit-ring ring-1"></div>
              <div className="cosmic-orbit-ring ring-2"></div>

              <div className="hero-planet-sphere">
                <img
                  src="/images/danial.jpg"
                  alt="Muhammad Danial - Full-Stack & AI Automation Developer"
                  className="hero-avatar-img"
                />
                <div className="planet-atmosphere-overlay"></div>
                <div className="planet-rim-light"></div>
              </div>

              {/* 4 Interactive Floating Badges with Subtle Physics */}
              <motion.div
                className="hero-float-badge badge-top-right"
                animate={{ y: [-5, 5, -5], x: [0, 3, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.12 }}
              >
                <span className="float-badge-icon">🌐</span>
                <span className="float-badge-text">Full-Stack MERN</span>
              </motion.div>

              <motion.div
                className="hero-float-badge badge-mid-left"
                animate={{ y: [5, -5, 5], x: [0, -3, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                whileHover={{ scale: 1.12 }}
              >
                <span className="float-badge-icon">🤖</span>
                <span className="float-badge-text">AI Automation</span>
              </motion.div>

              <motion.div
                className="hero-float-badge badge-bottom-left"
                animate={{ y: [-4, 6, -4], x: [0, 2, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                whileHover={{ scale: 1.12 }}
              >
                <span className="float-badge-icon">⚙️</span>
                <span className="float-badge-text">APIs &amp; Workflows</span>
              </motion.div>

              <motion.div
                className="hero-float-badge badge-bottom-right"
                animate={{ y: [6, -4, 6], x: [0, -2, 0] }}
                transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                whileHover={{ scale: 1.12 }}
              >
                <span className="float-badge-icon">🦾</span>
                <span className="float-badge-text">Robotics Degree</span>
              </motion.div>
            </motion.div>
          </TiltCard>
        </motion.div>
      </div>

      {/* Scroll Down Indicator with Pulsing Arrow */}
      <motion.div
        className="hero-scroll-indicator"
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        whileHover={{ y: 4, scale: 1.05 }}
      >
        <div className="mouse-icon">
          <div className="mouse-wheel"></div>
        </div>
        <span className="scroll-text">Explore Background &amp; Projects</span>
      </motion.div>
    </section>
  );
}
