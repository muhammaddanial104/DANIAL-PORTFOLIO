import { useState, useEffect } from "react";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left Column: Bio & CTAs */}
        <div className="hero-content">
          {/* Greeting Badge */}
          <div className="hero-greeting-badge">
            <span className="greeting-wave">👋</span>
            <span className="greeting-text">Hello, I'm</span>
          </div>

          {/* Massive Display Name */}
          <h1 className="hero-name">
            <span className="hero-name-gradient">Danial</span>
          </h1>

          {/* Subtitle */}
          <h2 className="hero-subtitle">
            Full Stack Developer <span className="subtitle-amp">&</span> AI Builder
          </h2>

          {/* Degree / Specialization Pill */}
          <div className="hero-pill-badge">
            <span className="pill-dot"></span>
            <span className="pill-text">🎓 Bachelor in Robotics & AI Architect</span>
          </div>

          {/* Description */}
          <p className="hero-desc">
            Passionate Full-Stack Developer and AI Agent Architect with hands-on experience
            building high-performance MERN applications, autonomous AI multi-agents, and
            enterprise workflow automation.
          </p>

          {/* Action Buttons */}
          <div className="hero-buttons">
            <button
              onClick={() => scrollTo("projects")}
              className="hero-btn-primary"
            >
              <span>Explore My Work</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="hero-btn-secondary"
            >
              <span>Contact Me</span>
            </button>
          </div>

          {/* Social Row */}
          <div className="hero-social-row">
            <a
              href="https://github.com/muhammaddanial104"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-danial-2584b4432"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            <a
              href="https://wa.me/923137525862"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="Direct WhatsApp"
              aria-label="WhatsApp"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>

            <a
              href="https://www.facebook.com/share/1EPnhc4Zon/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="Facebook Profile"
              aria-label="Facebook"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/d4_danial"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="Instagram Profile"
              aria-label="Instagram"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="hero-stats-row">
            <div className="hero-stat-item">
              <span className="hero-stat-number">2+</span>
              <span className="hero-stat-label">Years Experience</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat-item">
              <span className="hero-stat-number">10+</span>
              <span className="hero-stat-label">Projects Completed</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat-item">
              <span className="hero-stat-number">100%</span>
              <span className="hero-stat-label">Dedication</span>
            </div>
          </div>
        </div>

        {/* Right Column: Celestial Planet Avatar & Floating Badges */}
        <div className="hero-visual-col">
          <div className="hero-avatar-wrapper">
            {/* Ambient Cosmic Halos */}
            <div className="cosmic-glow-halo halo-cyan"></div>
            <div className="cosmic-glow-halo halo-purple"></div>

            {/* Orbiting Celestial Rings */}
            <div className="cosmic-orbit-ring ring-1"></div>
            <div className="cosmic-orbit-ring ring-2"></div>

            {/* Planet Sphere Frame */}
            <div className="hero-planet-sphere">
              <img
                src="/images/danial.jpg"
                alt="Muhammad Danial - Full Stack Developer"
                className="hero-avatar-img"
              />
              <div className="planet-atmosphere-overlay"></div>
              <div className="planet-rim-light"></div>
            </div>

            {/* 4 Floating Tech Badges (Exact from Reference Image) */}
            <div className="hero-float-badge badge-top-right">
              <span className="float-badge-icon">🌐</span>
              <span className="float-badge-text">Web Apps</span>
            </div>

            <div className="hero-float-badge badge-mid-left">
              <span className="float-badge-icon">✨</span>
              <span className="float-badge-text">AI Tools</span>
            </div>

            <div className="hero-float-badge badge-bottom-left">
              <span className="float-badge-icon">⚡</span>
              <span className="float-badge-text">Automation</span>
            </div>

            <div className="hero-float-badge badge-bottom-right">
              <span className="float-badge-icon">🛡️</span>
              <span className="float-badge-text">Cyber Security</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="hero-scroll-indicator" onClick={() => scrollTo("about")}>
        <div className="mouse-icon">
          <div className="mouse-wheel"></div>
        </div>
        <span className="scroll-text">Scroll Down</span>
      </div>
    </section>
  );
}
