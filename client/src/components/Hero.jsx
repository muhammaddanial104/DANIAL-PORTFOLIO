// ═══════════════════════════════════════════════════
// COMPONENT: Hero.jsx — AI AGENT DEVELOPER & SOFTWARE ENGINEER
// Exact positioning, buttons, BS Robotics (Coming Soon), NO fake metrics
// ═══════════════════════════════════════════════════
import { useEffect, useState } from "react";

function AnimatedLetters({ text, className, baseDelay = 0 }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(0);
    const timers = text.split("").map((_, i) =>
      setTimeout(() => setCount(i + 1), baseDelay + i * 65)
    );
    return () => timers.forEach(clearTimeout);
  }, [text, baseDelay]);

  return (
    <span className={className}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            opacity: i < count ? 1 : 0,
            transform: i < count ? "translateY(0) scale(1)" : "translateY(16px) scale(0.9)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}
        >
          {ch}
        </span>
      ))}
    </span>
  );
}

function AnimatedWord({ text, className, delay = 0 }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.92)",
        transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.2,0.8,0.4,1)",
      }}
    >
      {text}
    </span>
  );
}

export default function Hero() {
  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="section hero-section">
      {/* Left Content */}
      <div className="hero-content">
        <div className="hero-tag">
          <span className="hero-tag-dot" />
          FULL-STACK SOFTWARE ENGINEER &bull; AI AGENT ARCHITECT &bull; ONLINE
        </div>

        {/* 1. Name */}
        <h1 className="hero-name" aria-label="Muhammad Danial">
          <AnimatedLetters text="MUHAMMAD" className="hero-fname" baseDelay={300} />
          <AnimatedWord text="DANIAL" className="hero-lname" delay={850} />
        </h1>

        {/* 2. New Outcome-Driven Headline */}
        <h2 className="hero-outcome-headline">
          &ldquo;I Build AI Agents That Do The Work.&rdquo;
        </h2>

        {/* 3. Supporting Core Specializations */}
        <p className="hero-supporting-line">
          Full-Stack Web Development &bull; Modern Websites &bull; AI Agents &bull; Business Automation
        </p>

        {/* Robotics Coming Soon Badge in Emerald Green */}
        <div className="hero-edu-badge">
          <span className="edu-icon">🎓</span>
          <span className="edu-text">BS IN ROBOTICS</span>
          <span className="edu-divider">&middot;</span>
          <span className="edu-soon-tag">COMING SOON</span>
        </div>

        {/* 4. Action Buttons (Upgrade Plan Primary CTAs) */}
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollTo("ai-lab")}>
            <span className="btn-glow" />
            <span style={{ marginRight: "0.4rem" }}>⚡</span> Try My AI
          </button>
          <button className="btn btn-outline" onClick={() => scrollTo("projects")}>
            View Real Projects
          </button>
        </div>
      </div>

      {/* Right Visual Orb */}
      <div className="hero-visual">
        <div className="orb-float-wrap">
          <div className="orb-ring ring-1" />
          <div className="orb-ring ring-2" />
          <div className="orb-ring ring-3" />
          <div className="orb-ring ring-4" />
          <div className="orb-core">
            <span className="orb-inner-text">MD</span>
          </div>
          <div className="orb-particle op-1" />
          <div className="orb-particle op-2" />
          <div className="orb-particle op-3" />
          <div className="orb-data-tag odt-1">FULL-STACK DEV</div>
          <div className="orb-data-tag odt-2">AI AGENTS</div>
          <div className="orb-data-tag odt-3">MERN WEBSITES</div>
        </div>
        <span className="orb-label">MD &bull; FULL-STACK &amp; AI &bull; ONLINE</span>
      </div>

      <div className="scroll-indicator" onClick={() => scrollTo("about")}>
        <span>SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
