// ═══════════════════════════════════════════════════
// COMPONENT: Services.jsx — SHORT DESCRIPTIONS (4-5 CORE SERVICES)
// Dedicated Scroll-Triggered Entrance Animation (Dynamic On-Scroll Reveal)
// ═══════════════════════════════════════════════════
import { useEffect, useRef, useState } from "react";

const SERVICES = [
  {
    num: "01",
    icon: "🤖",
    title: "AI Agent Development",
    desc: "Custom autonomous AI agents designed to execute complex tasks and multi-step workflows.",
    badge: "AUTONOMOUS AI",
    badgeClass: "service-badge-purple",
    points: [
      "Custom Multi-Agent Architectures",
      "LangChain & Tool Integrations",
      "Intelligent Decision Reasoning",
    ],
  },
  {
    num: "02",
    icon: "⚙️",
    title: "AI Automation",
    desc: "End-to-end automation for browser tasks, desktop workflows, and repetitive business operations.",
    badge: "TASK AUTOMATION",
    badgeClass: "service-badge-cyan",
    points: [
      "Repetitive Task Elimination",
      "Browser & Desktop Automation",
      "Scheduled Triggers & Workflows",
    ],
  },
  {
    num: "03",
    icon: "🌐",
    title: "Web Development",
    desc: "Modern, high-performance responsive web applications built with React, Next.js, and Node.js.",
    badge: "FULL STACK",
    badgeClass: "service-badge-purple",
    points: [
      "Modern React / Next.js & Vite Apps",
      "Clean Responsive UI & UX",
      "SEO & High Performance Core Vitals",
    ],
  },
  {
    num: "04",
    icon: "🔌",
    title: "API Integration",
    desc: "Seamless connectivity between LLMs, external services, databases, and custom REST APIs.",
    badge: "INTEGRATION",
    badgeClass: "service-badge-cyan",
    points: [
      "OpenAI & Custom LLM Hookups",
      "RESTful API Architecture",
      "Secure Database Synchronization",
    ],
  },
  {
    num: "05",
    icon: "🎬",
    title: "AI Content Automation",
    desc: "Automated content generation and scheduling pipelines for YouTube, TikTok, and Facebook.",
    badge: "CONTENT ENGINES",
    badgeClass: "service-badge-cyan",
    points: [
      "YouTube Video & Script Pipelines",
      "TikTok & Reels Batch Generation",
      "Automated Social Distribution",
    ],
  },
  {
    num: "06",
    icon: "🦾",
    title: "Robotics & Automation",
    desc: "Autonomous robotics frameworks, ROS & ROS 2 nodes, and embedded systems.",
    badge: "COMING SOON",
    badgeClass: "service-badge-emerald",
    points: [
      "ROS & ROS 2 Robotics Framework",
      "Embedded C / C++ Programming",
      "Autonomous Machine Kinematics",
    ],
  },
];

function ServiceCard({ s, index, onDiscuss }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset when scrolled out of view so animation triggers on scroll
          setIsVisible(false);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`service-card ${s.badgeClass === "service-badge-emerald" ? "service-card-emerald service-card-soon" : ""} ${isVisible ? "service-card-animated" : ""}`}
      style={{
        transitionDelay: `${(index % 3) * 150}ms`,
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

      {/* Title & Short Description */}
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
