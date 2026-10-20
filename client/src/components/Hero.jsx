import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TiltCard from "./TiltCard";
import HeroCanvasFx from "./HeroCanvasFx";

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
    <section id="home" className="hero-section hmh-hero-container" aria-label="Introduction & Overview">
      {/* Media-Harbour Interactive Canvas Mesh FX */}
      <HeroCanvasFx />

      <div className="hero-container">
        {/* Left Column: Clear Identity, Agency Headline & High-Impact Value Proposition */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Executive Agency Badge */}
          <motion.div
            className="hmh-hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.03 }}
            data-cursor-text="Hello"
          >
            <span className="hmh-badge-dot-live"></span>
            <span className="hmh-badge-title">DIGITAL ENGINEERING &amp; AI AUTOMATION</span>
          </motion.div>

          {/* Primary Name Headline */}
          <motion.h1
            className="hero-name hmh-hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="hero-name-gradient">Muhammad Danial</span>
          </motion.h1>

          {/* Agency Punchy Headline (Media-Harbour Style) */}
          <motion.div
            className="hmh-hero-statement"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
          >
            <span className="hmh-hero-statement-main">
              Digital Platforms. <br />
              <span className="hmh-hero-statement-highlight">Intelligent Automation.</span>
            </span>
          </motion.div>

          {/* Dynamic Role Rotator */}
          <motion.div
            className="hero-role-title hmh-hero-role"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{ minHeight: "36px", display: "flex", alignItems: "center" }}
          >
            <span style={{ color: "var(--text-muted)", fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)", marginRight: "10px", fontWeight: 600 }}>
              Specialization:
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
            className="hero-desc hmh-hero-desc"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
          >
            Architecting robust web platforms with modern MERN, Python &amp; Django, coupled with autonomous AI Agents, n8n workflow automations, and intelligent chatbots. Dedicated to transforming complex logic into seamless, scalable digital solutions.
          </motion.p>

          {/* Degree & Verified Background Pill */}
          <motion.div
            className="hero-pill-badge hmh-cred-pill"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
            whileHover={{ scale: 1.03 }}
            data-cursor-text="Proven"
          >
            <span className="pill-dot" aria-hidden="true"></span>
            <span className="pill-text">🎓 Bachelor in Robotics • 6-Month Commercial Software Internship at ITS Gujrat</span>
          </motion.div>

          {/* Interactive CTAs: Clear Primary Action & Secondary Contact/Resume */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.54 }}
          >
            <motion.button
              type="button"
              onClick={() => scrollTo("projects")}
              className="hero-btn-primary hmh-btn-primary"
              whileHover={{ scale: 1.04, y: -2, boxShadow: "0 0 30px rgba(0, 102, 255, 0.6)" }}
              whileTap={{ scale: 0.96 }}
              aria-label="Explore featured projects"
              data-cursor-text="Explore"
            >
              <span>Explore Projects</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </motion.button>

            <motion.button
              type="button"
              onClick={() => scrollTo("contact")}
              className="hero-btn-secondary hmh-btn-secondary"
              whileHover={{ scale: 1.04, y: -2, borderColor: "#38bdf8" }}
              whileTap={{ scale: 0.96 }}
              aria-label="Get in touch with Muhammad Danial"
              data-cursor-text="Chat"
            >
              <span>Get In Touch</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Tilt Avatar Visual with Maritime Blue Glow & 2 Focused Badges */}
        <motion.div
          className="hero-visual-col"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <TiltCard maxTilt={14} glare={true} className="hero-avatar-tilt-wrapper">
            <motion.div
              className="hero-avatar-wrapper hmh-avatar-wrapper"
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              data-cursor-text="Danial"
            >
              <div className="cosmic-glow-halo halo-cyan hmh-halo-blue" aria-hidden="true"></div>
              <div className="cosmic-glow-halo halo-purple hmh-halo-navy" aria-hidden="true"></div>

              <div className="cosmic-orbit-ring ring-1 hmh-ring" aria-hidden="true"></div>
              <div className="cosmic-orbit-ring ring-2 hmh-ring-2" aria-hidden="true"></div>

              <div className="hero-planet-sphere hmh-avatar-sphere">
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

              {/* 2 Focused Floating Badges (AI Agents & Python/MERN) with Agency Style */}
              <motion.div
                className="hero-float-badge badge-top-right hmh-float-ai"
                animate={{ y: [-5, 5, -5], x: [0, 3, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.12 }}
                data-cursor-text="AI"
              >
                <span className="float-badge-icon" aria-hidden="true">🤖</span>
                <span className="float-badge-text">AI Agents &amp; n8n</span>
              </motion.div>

              <motion.div
                className="hero-float-badge badge-bottom-left hmh-float-code"
                animate={{ y: [-4, 6, -4], x: [0, 2, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.12 }}
                data-cursor-text="Code"
              >
                <span className="float-badge-icon" aria-hidden="true">🐍</span>
                <span className="float-badge-text">Python &amp; MERN</span>
              </motion.div>
            </motion.div>
          </TiltCard>
        </motion.div>
      </div>

      {/* Scroll Down / Explore Indicator */}
      <motion.button
        type="button"
        onClick={() => scrollTo("value-pillars")}
        className="hero-scroll-indicator"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        aria-label="Scroll down to explore value pillars"
        data-cursor-text="Down"
      >
        <div className="mouse-icon" aria-hidden="true">
          <div className="mouse-wheel"></div>
        </div>
        <span className="scroll-text">Explore</span>
      </motion.button>
    </section>
  );
}
