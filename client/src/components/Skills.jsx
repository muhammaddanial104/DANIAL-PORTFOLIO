// ═══════════════════════════════════════════════════
// COMPONENT: Skills.jsx — WITH ROBOTICS (COMING SOON)
// ═══════════════════════════════════════════════════
import { useEffect, useRef } from "react";

const CATEGORIES = [
  {
    title: "FRONTEND",
    icon: "⚡",
    color: "#a855f7",
    skills: [
      { name: "React / Next.js",   pct: 88 },
      { name: "JavaScript ES6+",   pct: 85 },
      { name: "HTML5 / CSS3",      pct: 90 },
      { name: "Tailwind CSS",      pct: 82 },
    ],
  },
  {
    title: "BACKEND",
    icon: "⚙️",
    color: "#22d3ee",
    skills: [
      { name: "Node.js / Express", pct: 87 },
      { name: "Python",            pct: 90 },
      { name: "Django / DRF",      pct: 82 },
      { name: "REST / GraphQL",    pct: 85 },
    ],
  },
  {
    title: "AI & DATABASE",
    icon: "🧠",
    color: "#ec4899",
    skills: [
      { name: "AI Agent Dev",       pct: 85 },
      { name: "LangChain / OpenAI", pct: 82 },
      { name: "MongoDB",            pct: 87 },
      { name: "PostgreSQL",         pct: 78 },
    ],
  },
  {
    title: "ROBOTICS",
    icon: "🤖",
    color: "#10b981",
    isComingSoon: true,
    skills: [
      { name: "Robotic Programming", comingSoon: true, pct: 60 },
      { name: "ROS & ROS 2",         comingSoon: true, pct: 45 },
      { name: "Embedded C / C++",     comingSoon: true, pct: 50 },
      { name: "Autonomous Systems",  comingSoon: true, pct: 55 },
    ],
  },
];

const EXPERIENCE = [
  {
    year: "2025 - NOW",
    role: "Full Stack Developer",
    company: "Freelance",
    desc: "Building MERN apps & AI-powered platforms for international clients."
  },
  {
    year: "2025",
    role: "AI Agent Developer",
    company: "Personal Projects",
    desc: "Developed autonomous agents using LangChain, OpenAI GPT-4 & Python."
  },
  {
    year: "COMING SOON",
    role: "Robotics & Automation",
    company: "Coming Soon",
    desc: "BS Robotics (Coming Soon) — Robotic Programming, ROS, kinematics & intelligent machines."
  },
];

const TECH_TAGS = [
  "MERN",
  "Python",
  "Robotic Programming (Coming Soon)",
  "Django",
  "Next.js",
  "React",
  "ROS",
  "Node.js",
  "Express",
  "MongoDB",
  "LangChain",
  "OpenAI",
  "FastAPI",
  "Embedded C++",
  "Docker",
  "Git",
  "JWT",
  "Tailwind CSS",
  "PostgreSQL",
  "Redis"
];

function SkillBar({ name, pct, color, comingSoon }) {
  const fillRef = useRef(null);
  const itemRef = useRef(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && fillRef.current) {
          setTimeout(() => {
            if (fillRef.current) fillRef.current.style.width = pct + "%";
          }, 200);
        }
      },
      { threshold: 0.3 }
    );
    if (itemRef.current) ob.observe(itemRef.current);
    return () => ob.disconnect();
  }, [pct]);

  return (
    <div className={`skill-item ${comingSoon ? "skill-soon-item" : ""}`} ref={itemRef}>
      <div className="skill-info">
        <div className="skill-name-wrap">
          <span className="skill-name">{name}</span>
          {comingSoon && <span className="skill-soon-badge">COMING SOON</span>}
        </div>
        <span className="skill-pct" style={{ color: comingSoon ? "#10b981" : color }}>
          {comingSoon ? "IN PROGRESS" : `${pct}%`}
        </span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-fill"
          ref={fillRef}
          style={{
            width: 0,
            background: comingSoon
              ? "linear-gradient(90deg, rgba(16,185,129,0.5), #10b981 70%, #22d3ee)"
              : `linear-gradient(90deg, ${color}88, ${color})`,
            boxShadow: `0 0 12px ${comingSoon ? "rgba(16,185,129,0.6)" : color + "80"}`,
            transition: "width 1.4s cubic-bezier(0.17,0.67,0.35,1)"
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

      {/* Skill Bars Grid (4 Categories including Robotics) */}
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
      <div className="exp-section">
        <h3 className="exp-title">&#x25B8; EXPERIENCE &amp; EDUCATION</h3>
        <div className="exp-timeline">
          {EXPERIENCE.map((e, i) => (
            <div className="exp-item" key={i}>
              <div className="exp-year">{e.year}</div>
              <div className="exp-dot" />
              <div className="exp-content">
                <div className="exp-role">{e.role}</div>
                <div className="exp-company">{e.company}</div>
                <p className="exp-desc">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Cloud */}
      <div className="tech-cloud">
        {TECH_TAGS.map(t => (
          <span className={`tech-tag ${t.includes("Coming Soon") ? "tag-soon" : ""}`} key={t}>
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}