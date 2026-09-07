// ═══════════════════════════════════════════════════
// COMPONENT: Skills.jsx — 4 PRECISE CATEGORIES
// AI & Agents | Development | Automation | Other
// ═══════════════════════════════════════════════════
import { useEffect, useRef } from "react";

const CATEGORIES = [
  {
    title: "AI & AGENTS",
    icon: "🤖",
    color: "#a855f7",
    skills: [
      { name: "AI Agents",          pct: 92 },
      { name: "LLM Integration",    pct: 90 },
      { name: "Prompt Engineering", pct: 88 },
      { name: "AI Automation",      pct: 86 },
    ],
  },
  {
    title: "DEVELOPMENT",
    icon: "💻",
    color: "#22d3ee",
    skills: [
      { name: "Python",             pct: 90 },
      { name: "JavaScript",         pct: 86 },
      { name: "React / Next.js",    pct: 88 },
      { name: "Node.js",            pct: 85 },
    ],
  },
  {
    title: "AUTOMATION",
    icon: "⚙️",
    color: "#ec4899",
    skills: [
      { name: "API Integration",     pct: 90 },
      { name: "Browser Automation",  pct: 88 },
      { name: "Workflow Automation", pct: 86 },
    ],
  },
  {
    title: "OTHER",
    icon: "🛠️",
    color: "#10b981",
    skills: [
      { name: "Git / GitHub",        pct: 88 },
      { name: "SEO",                 pct: 85 },
      { name: "Deployment",          pct: 82 },
    ],
  },
];

const TECH_TAGS = [
  "AI Agents",
  "LLM Integration",
  "Prompt Engineering",
  "AI Automation",
  "Python",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "API Integration",
  "Browser Automation",
  "Workflow Automation",
  "Git / GitHub",
  "SEO",
  "Deployment",
  "FastAPI",
  "MongoDB",
];

function SkillBar({ name, pct, color }) {
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
    <div className="skill-item" ref={itemRef}>
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-pct" style={{ color: color }}>
          {pct}%
        </span>
      </div>
      <div className="skill-bar-bg">
        <div
          ref={fillRef}
          className="skill-bar-fill"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}`,
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
        <span className="section-num">02</span>
        <h2 className="section-title">
          TECH <span className="accent">SKILLS</span>
        </h2>
        <div className="section-line" />
      </div>

      {/* 4 Clean Categories Grid */}
      <div className="skills-grid skills-grid-4">
        {CATEGORIES.map(cat => (
          <div className="skill-category" key={cat.title}>
            <div className="cat-header">
              <h3 className="cat-title">
                <span style={{ color: cat.color }}>{cat.icon}</span> {cat.title}
              </h3>
            </div>
            <div className="skill-bars">
              {cat.skills.map(sk => (
                <SkillBar
                  key={sk.name}
                  name={sk.name}
                  pct={sk.pct}
                  color={cat.color}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tech Arsenal Tags */}
      <div className="skills-lower">
        <div className="tech-cloud" style={{ width: "100%" }}>
          <h4 className="cloud-title">ACTUAL TECH STACK</h4>
          <div className="tags-cloud">
            {TECH_TAGS.map((t, idx) => (
              <span key={idx} className="cloud-tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}