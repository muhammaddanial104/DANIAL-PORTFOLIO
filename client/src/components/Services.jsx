// ═══════════════════════════════════════════════════
// COMPONENT: Services.jsx — 5 CORE SERVICES
// Features: AI Agents, Automation, Web Dev, API Integration, Content Automation
// Dedicated Scroll-Triggered Entrance Animation
// ═══════════════════════════════════════════════════
import { useEffect, useRef, useState } from "react";

const SERVICES = [
  {
    num: "01",
    icon: "🤖",
    title: "AI Agent Development",
    desc: "Custom AI agents for tasks and workflows.",
    badge: "AUTONOMOUS AI",
    badgeClass: "service-badge-purple",
    points: [
      "Custom Autonomous Agent Architectures",
      "LangChain & Multi-Agent Systems",
      "Task Reasoning & Tool Use",
      "Intelligent Decision Pipelines",
    ],
  },
  {
    num: "02",
    icon: "⚙️",
    title: "AI Automation",
    desc: "Automate repetitive business and content tasks.",
    badge: "TASK AUTOMATION",
    badgeClass: "service-badge-cyan",
    points: [
      "Repetitive Task Elimination",
      "Browser & Desktop Automation",
      "End-to-End Business Flow Orchestration",
      "Error-Handling & Scheduled Triggers",
    ],
  },
  {
    num: "03",
    icon: "🌐",
    title: "Web Development",
    desc: "Modern responsive websites and web applications.",
    badge: "FULL STACK",
    badgeClass: "service-badge-purple",
    points: [
      "Modern React / Next.js & Vite Apps",
      "Clean Responsive UI & UX",
      "Fast Core Web Vitals & SEO Ready",
      "Secure Production Deployments",
    ],
  },
  {
    num: "04",
    icon: "🔌",
    title: "API Integration",
    desc: "Connect AI models, services and custom APIs.",
    badge: "INTEGRATION",
    badgeClass: "service-badge-cyan",
    points: [
      "OpenAI, Claude & Custom LLM Hookups",
      "RESTful & GraphQL API Development",
      "Third-Party Service & Database Sync",
      "Secure Authentication & Rate Limiting",
    ],
  },
  {
    num: "05",
    icon: "🎬",
    title: "AI Content Automation",
    desc: "Automated video/content workflows for YouTube, TikTok and Facebook.",
    badge: "CONTENT ENGINES",
    badgeClass: "service-badge-emerald",
    points: [
      "YouTube Video & Script Automation",
      "TikTok & Reels Batch Generators",
      "Facebook Post Automation & Scheduling",
      "AI Voiceovers & Multimedia Pipelines",
    ],
  },
];

function ServiceCard({ s, index, onDiscuss }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`service-card ${s.badgeClass === "service-badge-emerald" ? "service-card-emerald" : ""} ${isVisible ? "service-card-animated" : ""}`}
      style={{
        transitionDelay: `${(index % 3) * 130}ms`,
      }}
    >
      {/* Header */}
      <div className="service-card-header">
        <div className="service-icon-box">
          <span className="service-card-emoji">{s.icon}</span>
        </div>
        <div className="service-header-meta">
          <span className="service-card-num">{s.num}</span>
          <span className={`service-badge ${s.badgeClass}`}>{s.badge}</span>
        </div>
      </div>

      {/* Title & Description */}
      <h3 className="service-title">{s.title}</h3>
      <p className="service-desc">{s.desc}</p>

      {/* Points */}
      <div className="service-features">
        {s.points.map((p, idx) => (
          <div className="service-feature-item" key={idx}>
            <span className="service-feature-check">✓</span>
            <span>{p}</span>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="service-footer">
        <button className="service-action-btn" onClick={onDiscuss}>
          <span>DISCUSS PROJECT</span>
          <span className="service-arrow">→</span>
        </button>
      </div>
    </div>
  );
}

export default function Services() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section services-section">
      <div className="section-header">
        <span className="section-num">04</span>
        <h2 className="section-title">
          MY <span className="accent">SERVICES</span>
        </h2>
        <div className="section-line" />
      </div>

      <p className="services-subtitle">
        High-impact AI solutions, intelligent automation systems, and modern web applications built for performance.
      </p>

      <div className="services-grid services-grid-5">
        {SERVICES.map((s, idx) => (
          <ServiceCard
            key={s.num}
            s={s}
            index={idx}
            onDiscuss={scrollToContact}
          />
        ))}
      </div>
    </section>
  );
}