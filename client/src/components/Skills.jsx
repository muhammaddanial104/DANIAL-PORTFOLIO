import { useEffect, useRef, useState } from "react";

// ── PROVEN PRODUCTION SKILLS ──
const PROVEN_CATEGORIES = [
  {
    title: "AI & AGENT ARCHITECTURE",
    icon: "🤖",
    color: "#a855f7",
    badge: "PROVEN IN PROJECTS",
    skills: [
      { name: "Autonomous AI Agents",    pct: 92 },
      { name: "LLM & OpenAI / Claude API", pct: 90 },
      { name: "LangChain & Multi-Agents", pct: 88 },
      { name: "Prompt Engineering & Tools", pct: 89 },
    ],
  },
  {
    title: "CORE / PROVEN DEVELOPMENT",
    icon: "💻",
    color: "#22d3ee",
    badge: "PRODUCTION & CLIENT WORK",
    skills: [
      { name: "React & Next.js",         pct: 88 },
      { name: "JavaScript (ES6+) / TS",   pct: 86 },
      { name: "Node.js & Express",        pct: 85 },
      { name: "MongoDB & RESTful APIs",   pct: 88 },
    ],
  },
  {
    title: "AUTOMATION & WORKFLOWS",
    icon: "⚙️",
    color: "#ec4899",
    badge: "VERIFIED DEPLOYMENTS",
    skills: [
      { name: "API & Webhook Integration", pct: 90 },
      { name: "Browser Automation",       pct: 88 },
      { name: "System & Workflow Pipelines", pct: 86 },
      { name: "Python Scripting & FastAPI", pct: 89 },
    ],
  },
  {
    title: "TOOLING & DEPLOYMENT",
    icon: "🛠️",
    color: "#f59e0b",
    badge: "DAILY WORKFLOW",
    skills: [
      { name: "Git & GitHub CI/CD",      pct: 88 },
      { name: "Docker Containerization", pct: 84 },
      { name: "Vercel / Cloud Deployment", pct: 85 },
      { name: "Performance & SEO",       pct: 82 },
    ],
  },
];

// ── CURRENTLY LEARNING (Separated per Improvement Report) ──
const LEARNING_SKILLS = [
  { name: "ROS & ROS 2", desc: "Robot Operating System node architectures & publisher/subscriber topics", tag: "Academic Coursework" },
  { name: "Embedded C / C++", desc: "Hardware firmware, registers, and sensor communication protocols", tag: "Lab Research" },
  { name: "Autonomous Navigation", desc: "Kinematics, path planning algorithms, and basic SLAM concepts", tag: "Degree Focus" },
  { name: "Microcontroller Systems", desc: "Interfacing actuators, ESP32/STM32, and hardware feedback loops", tag: "Hands-on Lab" },
];

const PROVEN_TECH_TAGS = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript ES6+",
  "Python",
  "FastAPI",
  "LangChain",
  "OpenAI GPT-4",
  "Claude 3.5 Sonnet",
  "REST APIs",
  "Docker Sandboxes",
  "Git & GitHub",
  "Vercel",
  "Tailwind CSS",
  "Browser Automation",
];

function SkillBar({ name, pct, color }) {
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

  return (
    <div className="skill-item" ref={itemRef}>
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-pct" style={{ color }}>{pct}%</span>
      </div>
      <div className="skill-bar-bg">
        <div
          className="skill-bar-fill"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}66`,
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
    <section id="skills" className="section-container skills-section">
      {/* Section Header */}
      <div className="section-header">
        <div className="section-badge">
          <span className="badge-num">03</span>
          <span className="badge-sep">|</span>
          <span className="badge-title">Tech Skills</span>
        </div>
        <h2 className="section-main-heading">
          PROVEN SKILLS &amp; <span className="gradient-text">TECHNICAL CAPABILITIES</span>
        </h2>
        <p className="section-subtitle">
          Demonstrated competencies backed by real production code, client deliverables, and verifiable projects.
        </p>
      </div>

      {/* 4 Proven Production Skill Cards Grid */}
      <div className="skills-proven-grid">
        {PROVEN_CATEGORIES.map((cat) => (
          <div className="skill-category-card" key={cat.title}>
            <div className="skill-cat-header">
              <h3 className="skill-cat-title">
                <span className="skill-cat-icon" style={{ color: cat.color }}>{cat.icon}</span>
                <span>{cat.title}</span>
              </h3>
              <span className="cat-badge-proven">{cat.badge}</span>
            </div>

            <div className="skill-bars-stack">
              {cat.skills.map((sk) => (
                <SkillBar
                  key={sk.name}
                  name={sk.name}
                  pct={sk.pct}
                  color={cat.color}
                />
              ))}
            </div>

            <div className="cat-card-glow-bar" style={{ background: cat.color }}></div>
          </div>
        ))}
      </div>

      {/* ── SEPARATED: CURRENTLY LEARNING SECTION (Section 5 from Report) ── */}
      <div className="currently-learning-card">
        <div className="learning-header">
          <div className="learning-title-group">
            <span className="learning-badge-pill">🎓 ACADEMIC RESEARCH &amp; CURRENTLY LEARNING</span>
            <h4 className="learning-heading">Robotics &amp; Embedded Systems Curriculum</h4>
            <p className="learning-desc">
              Part of my ongoing Bachelor in Robotics &amp; Autonomous Systems degree. Separated from my production-ready software stack to reflect truthful, verifiable expertise.
            </p>
          </div>
        </div>

        <div className="learning-items-grid">
          {LEARNING_SKILLS.map((item) => (
            <div className="learning-item-box" key={item.name}>
              <div className="learning-item-top">
                <span className="learning-item-name">{item.name}</span>
                <span className="learning-item-tag">{item.tag}</span>
              </div>
              <p className="learning-item-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── VERIFIED ACTUAL TECH STACK CHIPS ── */}
      <div className="actual-tech-container">
        <div className="actual-tech-card">
          <div className="actual-tech-header">
            <span className="actual-tech-icon">⚡</span>
            <div>
              <h4 className="actual-tech-title">VERIFIED TECH STACK</h4>
              <p className="actual-tech-sub">Core technologies directly used across featured applications and client work</p>
            </div>
          </div>

          <div className="actual-tech-chips">
            {PROVEN_TECH_TAGS.map((t, idx) => (
              <span key={idx} className="tech-pill">
                <span className="pill-dot" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
