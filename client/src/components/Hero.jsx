// ═══════════════════════════════════════════════════
// COMPONENT: Hero.jsx — ROBOTICS COMING SOON + CLEAN
// MUHAMMAD: letter-by-letter (solid white)
// DANIAL: whole-word animation (gradient)
// ═══════════════════════════════════════════════════
import { useEffect, useRef, useState } from "react";

const ROLES = [
  "Full Stack Developer",
  "AI Agent Developer",
  "Web Designer",
  "SEO Specialist",
  "Python Developer",
  "MERN Stack Expert",
  "Robotics Engineer (Coming Soon)",
];

// Letter-by-letter ONLY for solid-color words
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
            transform: i < count
              ? "translateY(0) scale(1)"
              : "translateY(28px) scale(0.85)",
            transition:
              "opacity 0.45s cubic-bezier(0.34,1.56,0.64,1), transform 0.45s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          {ch}
        </span>
      ))}
    </span>
  );
}

// Whole-word slide-up for gradient words (gradient + child spans don't mix)
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
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.9)",
        transition:
          "opacity 0.8s cubic-bezier(0.34,1.56,0.64,1), transform 0.8s cubic-bezier(0.34,1.56,0.64,1)",
        display: "block",
      }}
    >
      {text}
    </span>
  );
}

// Animated counter
function Counter({ target, suffix }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let n = 0;
        const iv = setInterval(() => {
          n = Math.min(n + target / 50, target);
          setVal(Math.floor(n));
          if (n >= target) clearInterval(iv);
        }, 28);
      }
    });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [target]);
  return (
    <span ref={ref} className="stat-num">
      {val}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx,   setRoleIdx]   = useState(0);
  const [deleting,  setDeleting]  = useState(false);
  const [charIdx,   setCharIdx]   = useState(0);

  useEffect(() => {
    const current = ROLES[roleIdx];
    const timer = setTimeout(
      () => {
        if (!deleting) {
          setDisplayed(current.slice(0, charIdx + 1));
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), 2000);
          } else {
            setCharIdx(c => c + 1);
          }
        } else {
          setDisplayed(current.slice(0, charIdx - 1));
          if (charIdx <= 0) {
            setDeleting(false);
            setRoleIdx(r => (r + 1) % ROLES.length);
            setCharIdx(0);
          } else {
            setCharIdx(c => c - 1);
          }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(timer);
  }, [charIdx, deleting, roleIdx]);

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
          SYSTEM ONLINE &bull; ALL MODULES ACTIVE
        </div>

        {/* -- NAME -- */}
        <h1 className="hero-name" aria-label="Muhammad Danial">
          <AnimatedLetters text="MUHAMMAD" className="hero-fname" baseDelay={400} />
          <AnimatedWord text="DANIAL" className="hero-lname" delay={1050} />
        </h1>

        <div className="hero-role">
          <span className="role-prefix">&#62;</span>
          <span id="typed-role">{displayed}</span>
          <span className="cursor-blink">_</span>
        </div>

        {/* Robotics Coming Soon Badge */}
        <div className="hero-edu-badge">
          <span className="edu-icon">&#x1F393;</span>
          <span className="edu-text">BS IN ROBOTICS</span>
          <span className="edu-divider">&middot;</span>
          <span className="edu-soon-tag">COMING SOON</span>
        </div>

        <p className="hero-desc">
          Based in <span className="highlight">Gujrat, Pakistan</span> &mdash; crafting
          intelligent <span className="highlight">AI agents</span>,{" "}
          <span className="highlight">MERN</span> apps &amp; futuristic digital experiences.
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
            <span className="btn-glow" />
            &#x1F680; VIEW PROJECTS
          </button>
          <button className="btn btn-outline" onClick={() => scrollTo("contact")}>
            &#x1F4E1; CONTACT ME
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <Counter target={4} suffix="+" />
            <span className="stat-label">PROJECTS</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <Counter target={1} suffix="+" />
            <span className="stat-label">YRS EXP</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <Counter target={85} suffix="%" />
            <span className="stat-label">PROFICIENCY</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <Counter target={10} suffix="+" />
            <span className="stat-label">TECHNOLOGIES</span>
          </div>
        </div>
      </div>

      {/* Right Orb */}
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
          <div className="orb-data-tag odt-1">AI DEV</div>
          <div className="orb-data-tag odt-2">MERN</div>
          <div className="orb-data-tag odt-3">ROBOTICS</div>
        </div>
        <span className="orb-label">MD &bull; AI DEV &bull; ONLINE</span>
      </div>

      <div className="scroll-indicator">
        <span>SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}