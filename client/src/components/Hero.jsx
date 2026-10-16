import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TiltCard from "./TiltCard";

const CYCLING_ROLES = [
  "Full-Stack Developer (MERN & Python/Django)",
  "AI Agents & n8n Automation Specialist",
  "Agentic AI & Generative AI Builder",
  "Mini Chatbot Automation Developer",
  "Python, Django & React.js Engineer",
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
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="hero-section" aria-label="Introduction & Overview">
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
            <span className="greeting-wave" aria-hidden="true">👋</span>
            <span className="greeting-text">Hello, I'm</span>
          </motion.div>

          {/* Primary Name Headline */}
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="hero-name-gradient">Muhammad Danial</span>
          </motion.h1>

          {/* Dynamic Role Rotator */}
          <motion.div
            className="hero-role-title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ minHeight: "36px", display: "flex", alignItems: "center" }}
          >
            <span style={{ color: "var(--text-muted)", fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)", marginRight: "10px", fontWeight: 600 }}>
              Focused as
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

          {/* Value Proposition */}
          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Building high-performance web platforms with MERN, Python &amp; Django, integrated with autonomous AI Agents, n8n workflow automations, and intelligent mini chatbots. Dedicated to transforming complex logic into seamless, automated digital pipelines.
          </motion.p>

          {/* Degree & Verified Background Pill */}
          <motion.div
            className="hero-pill-badge"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            whileHover={{ scale: 1.03 }}
          >
            <span className="pill-dot" aria-hidden="true"></span>
            <span className="pill-text">🎓 Bachelor in Robotics • 6-Month Software Internship at ITS Gujrat</span>
          </motion.div>

          {/* Interactive CTAs: Clear Primary Action & Secondary Resume */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.button
              type="button"
              onClick={() => scrollTo("projects")}
              className="hero-btn-primary"
              whileHover={{ scale: 1.04, y: -2, boxShadow: "0 0 30px rgba(56, 189, 248, 0.6)" }}
              whileTap={{ scale: 0.96 }}
              aria-label="Explore featured projects"
            >
              <span>Explore Featured Projects</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </motion.button>

            <motion.a
              href="/resume.pdf"
              download="Muhammad_Danial_Resume.pdf"
              className="hero-btn-secondary"
              whileHover={{ scale: 1.04, y: -2, borderColor: "#38bdf8" }}
              whileTap={{ scale: 0.96 }}
              aria-label="Download Muhammad Danial Resume PDF"
            >
              <span>Download Resume (PDF)</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Tilt Avatar Visual with Cosmic Rings & 2 Clean Floating Badges */}
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
              <div className="cosmic-glow-halo halo-cyan" aria-hidden="true"></div>
              <div className="cosmic-glow-halo halo-purple" aria-hidden="true"></div>

              <div className="cosmic-orbit-ring ring-1" aria-hidden="true"></div>
              <div className="cosmic-orbit-ring ring-2" aria-hidden="true"></div>

              <div className="hero-planet-sphere">
                <picture>
                  <source srcSet="/images/danial.webp" type="image/webp" />
                  <img
                    src="/images/danial.jpg"
                    alt="Muhammad Danial - Full-Stack Developer & AI Automation Specialist"
                    className="hero-avatar-img"
                    width="320"
                    height="320"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
                <div className="planet-atmosphere-overlay" aria-hidden="true"></div>
                <div className="planet-rim-light" aria-hidden="true"></div>
              </div>

              {/* 2 Focused Floating Badges (AI Agents & Python/MERN) */}
              <motion.div
                className="hero-float-badge badge-top-right"
                animate={{ y: [-5, 5, -5], x: [0, 3, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.12 }}
              >
                <span className="float-badge-icon" aria-hidden="true">🤖</span>
                <span className="float-badge-text">AI Agents &amp; n8n</span>
              </motion.div>

              <motion.div
                className="hero-float-badge badge-bottom-left"
                animate={{ y: [-4, 6, -4], x: [0, 2, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.12 }}
              >
                <span className="float-badge-icon" aria-hidden="true">🐍</span>
                <span className="float-badge-text">Python &amp; MERN Stack</span>
              </motion.div>
            </motion.div>
          </TiltCard>
        </motion.div>
      </div>

      {/* Scroll Down / Explore Indicator */}
      <motion.button
        type="button"
        onClick={() => scrollTo("stats-banner")}
        className="hero-scroll-indicator"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        aria-label="Scroll down to explore metrics and about section"
      >
        <div className="mouse-icon" aria-hidden="true">
          <div className="mouse-wheel"></div>
        </div>
        <span className="scroll-text">Explore</span>
      </motion.button>
    </section>
  );
}
