// ═══════════════════════════════════════════════════
// COMPONENT: Skills.jsx — WITH ROBOTICS (COMING SOON)
// Animated Progress Bars & Exact Categories
// ═══════════════════════════════════════════════════
import { useEffect, useRef, useState } from "react";

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
    color: "#f59e0b",
    skills: [
      { name: "Git / GitHub",        pct: 88 },
      { name: "SEO",                 pct: 85 },
      { name: "Deployment",          pct: 82 },
    ],
  },
  {
    title: "ROBOTICS",
    icon: "🦾",
    color: "#10b981",
    isComingSoon: true,
    skills: [
      { name: "Robotic Programming", comingSoon: true, pct: 60 },
      { name: "ROS & ROS 2",         comingSoon: true, pct: 50 },
      { name: "Embedded C / C++",     comingSoon: true, pct: 55 },
      { name: "Autonomous Systems",  comingSoon: true, pct: 52 },
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
  "Robotic Programming (Coming Soon)",
  "ROS & ROS 2",
  "Embedded C++",
];

function SkillBar({ name, pct, color, comingSoon }) {
  const [filled, setFilled] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setFilled(true);
          ob.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (itemRef.current) ob.observe(itemRef.current);
    return () => ob.disconnect();
  }, []);

  const barColor = comingSoon ? "#10b981" : color;

  return (
    <div className={`skill-item ${comingSoon ? "item-coming-soon" : ""}`} ref={itemRef}>
      <div className="skill-info">
        <span className="skill-name">
          {name}
          {comingSoon && <span className="tag-soon">SOON</span>}
        </span>
        <span className="skill-pct" style={{ color: barColor }}>
          {comingSoon ? "COMMENCING" : `${pct}%`}
        </span>
      </div>
      <div className="skill-bar-bg">
        <div
          className={`skill-bar-fill ${comingSoon ? "fill-soon" : ""}`}
          style={{
            backgroundColor: barColor,
            boxShadow: `0 0 12px ${barColor}`,
            width: filled ? `${pct}%` : "0%",
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

      {/* Categories Grid (With Robotics Coming Soon in Green) */}
      <div className="skills-grid skills-grid-5cat">
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

      {/* Tech Arsenal Tags */}
      <div className="skills-lower">
        <div className="tech-cloud" style={{ width: "100%" }}>
          <h4 className="cloud-title">ACTUAL TECH STACK</h4>
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