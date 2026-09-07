// ═══════════════════════════════════════════════════
// COMPONENT: Skills.jsx — ALIGNED WITH SERVICES
// Features: Web Design, AI Agents, SEO, Full Stack, Robotics
// ═══════════════════════════════════════════════════
import { useEffect, useRef } from "react";

const CATEGORIES = [
  {
    title: "WEB DESIGN & UI/UX",
    icon: "🎨",
    color: "#22d3ee",
    skills: [
      { name: "Modern UI/UX & Prototyping", pct: 92 },
      { name: "Responsive & Mobile-First",   pct: 95 },
      { name: "Micro-Animations & Effects",  pct: 88 },
      { name: "HTML5 / CSS3 / Tailwind",     pct: 90 },
    ],
  },
  {
    title: "AI AGENTS & LLMS",
    icon: "🤖",
    color: "#a855f7",
    skills: [
      { name: "Autonomous AI Agents",       pct: 88 },
      { name: "LangChain & Custom Chains",   pct: 85 },
      { name: "OpenAI GPT-4 & Claude APIs",  pct: 90 },
      { name: "Vector DBs & RAG Workflows",  pct: 84 },
    ],
  },
  {
    title: "SEO & PERFORMANCE",
    icon: "📈",
    color: "#f59e0b",
    skills: [
      { name: "Technical & On-Page SEO",    pct: 90 },
      { name: "Core Web Vitals & Speed",     pct: 88 },
      { name: "Schema.org & Rich Snippets",  pct: 86 },
      { name: "Google Search Console",       pct: 85 },
    ],
  },
  {
    title: "FULL STACK & BACKEND",
    icon: "⚡",
    color: "#ec4899",
    skills: [
      { name: "React / Vite / Next.js",      pct: 90 },
      { name: "Node.js & Express.js",        pct: 88 },
      { name: "MongoDB & Database Systems",  pct: 87 },
      { name: "RESTful & GraphQL APIs",      pct: 86 },
    ],
  },
  {
    title: "ROBOTICS & AUTOMATION",
    icon: "🦾",
    color: "#10b981",
    isComingSoon: true,
    skills: [
      { name: "Robotic Programming", comingSoon: true, pct: 60 },
      { name: "ROS & ROS 2 Framework", comingSoon: true, pct: 50 },
      { name: "Embedded C / C++",     comingSoon: true, pct: 55 },
      { name: "Autonomous Kinematics", comingSoon: true, pct: 52 },
    ],
  },
];

const EXPERIENCE = [
  {
    year: "2025 - NOW",
    role: "Full Stack & AI Agent Developer",
    company: "Freelance",
    desc: "Building production MERN web applications and autonomous AI agents for clients worldwide."
  },
  {
    year: "2024 - NOW",
    role: "Web Designer & SEO Specialist",
    company: "Client Projects",
    desc: "Designing high-converting responsive interfaces, optimizing technical SEO and Google search rankings."
  },
  {
    year: "COMING SOON",
    role: "Robotics & Automation",
    company: "Coming Soon",
    desc: "BS Robotics (Coming Soon) — Robotic Programming, ROS, kinematics & intelligent machines."
  },
];

const TECH_TAGS = [
  "Web Design",
  "AI Agents",
  "SEO Optimization",
  "MERN Stack",
  "Python",
  "UI / UX",
  "LangChain",
  "OpenAI GPT-4",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Core Web Vitals",
  "Robotic Programming (Coming Soon)",
  "ROS & ROS 2",
  "Embedded C++",
  "FastAPI",
  "Django",
  "Tailwind CSS",
  "Git & GitHub",
  "REST APIs",
  "Vector DBs",
];

function SkillBar({ name, pct, color, comingSoon }) {
  const fillRef = useRef(null);
  const itemRef = useRef(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && fillRef.current) {
          fillRef.current.style.width = `${pct}%`;
        }
      },
      { threshold: 0.2 }
    );
    if (itemRef.current) ob.observe(itemRef.current);
    return () => ob.disconnect();
  }, [pct]);

  return (
    <div className={`skill-item ${comingSoon ? "item-coming-soon" : ""}`} ref={itemRef}>
      <div className="skill-info">
        <span className="skill-name">
          {name}
          {comingSoon && <span className="tag-soon">SOON</span>}
        </span>
        <span className="skill-pct" style={{ color: comingSoon ? "#10b981" : color }}>
          {comingSoon ? "COMMENCING" : `${pct}%`}
        </span>
      </div>
      <div className="skill-bar-bg">
        <div
          ref={fillRef}
          className={`skill-bar-fill ${comingSoon ? "fill-soon" : ""}`}
          style={{
            backgroundColor: comingSoon ? "#10b981" : color,
            boxShadow: comingSoon ? "0 0 10px #10b981" : `0 0 10px ${color}`,
            width: "0%",
            transition: "width 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      {/* Header */}
      <div className="section-header">
        <span className="section-num">03</span>
        <h2 className="section-title">
          SKILL <span className="accent">MATRIX</span>
        </h2>
        <div className="section-line" />
      </div>

      {/* Skill Bars Grid (Aligned with Services) */}
      <div className="skills-grid">
        {CATEGORIES.map(cat => (
          <div className={`skill-category ${cat.isComingSoon ? "cat-coming-soon" : ""}`} key={cat.title}>
            <div className="cat-header">
              <h3 className="cat-title">
                <span style={{ color: cat.color }}>{cat.icon}</span> {cat.title}
              </h3>
              {cat.isComingSoon && (
                <span className="cat-badge-soon">COMING SOON</span>
              )}
            </div>
            <div className="skill-bars">
              {cat.skills.map(sk => (
                <SkillBar
                  key={sk.name}
                  name={sk.name}
                  pct={sk.pct}
                  color={cat.color}
                  comingSoon={sk.comingSoon}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Experience Timeline */}
      <div className="skills-lower">
        <div className="exp-timeline">
          {EXPERIENCE.map((item, i) => (
            <div className="exp-item" key={i}>
              <div className="exp-year">{item.year}</div>
              <div className="exp-dot" />
              <div className="exp-content">
                <h4 className="exp-role">{item.role}</h4>
                <span className="exp-company">{item.company}</span>
                <p className="exp-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Cloud */}
        <div className="tech-cloud">
          <h4 className="cloud-title">TECHNOLOGY ARSENAL</h4>
          <div className="tags-cloud">
            {TECH_TAGS.map((t, idx) => (
              <span key={idx} className={`cloud-tag ${t.includes("Coming Soon") ? "tag-soon" : ""}`}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}