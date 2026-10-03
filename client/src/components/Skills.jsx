import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

// ── PROVEN PRODUCTION SKILLS ──
const PROVEN_CATEGORIES = [
  {
    title: "FRONTEND ENGINEERING",
    icon: "⚛️",
    color: "#38bdf8",
    badge: "MERN & MODERN UI",
    skills: [
      { name: "React.js & Modern Hooks", pct: 90 },
      { name: "JavaScript (ES6+) & DOM", pct: 91 },
      { name: "Tailwind CSS & Responsive Layouts", pct: 92 },
      { name: "Redux Toolkit & Context State", pct: 86 },
    ],
  },
  {
    title: "BACKEND & DATABASE",
    icon: "🟢",
    color: "#22c55e",
    badge: "RESTFUL ARCHITECTURE",
    skills: [
      { name: "Node.js & Express.js Routers", pct: 88 },
      { name: "MongoDB & Mongoose Schemas", pct: 87 },
      { name: "RESTful API Design & CRUD", pct: 90 },
      { name: "JWT Auth & Password Encryption", pct: 89 },
    ],
  },
  {
    title: "DEVELOPER TOOLING & CLOUD",
    icon: "🛠️",
    color: "#f59e0b",
    badge: "WORKFLOW & QA",
    skills: [
      { name: "Git Version Control & Team PRs", pct: 92 },
      { name: "Postman API Integration Testing", pct: 89 },
      { name: "Vercel Hosting & DNS Deployment", pct: 88 },
      { name: "Cross-Device Responsive QA", pct: 91 },
    ],
  },
  {
    title: "ROBOTICS & COMPUTING CORE",
    icon: "🤖",
    color: "#a855f7",
    badge: "DEGREE FOUNDATION",
    skills: [
      { name: "Python Scripting & Utilities", pct: 89 },
      { name: "Data Structures & Core Logic", pct: 87 },
      { name: "Robotic Kinematics & Simulator Math", pct: 86 },
      { name: "Hardware Microcontroller Concepts", pct: 83 },
    ],
  },
];

// ── CURRENTLY LEARNING & GROWTH ──
const LEARNING_SKILLS = [
  { name: "TypeScript for Scalable Apps", desc: "Static typing, interfaces, generics, and strict TypeScript with React and Node.js", tag: "LEARNING" },
  { name: "Next.js 14 App Router", desc: "Server Components, Server Actions, streaming SSR, and SEO-optimized architecture", tag: "LEARNING" },
  { name: "PostgreSQL & Prisma ORM", desc: "Relational schema design, SQL queries, relational joins, and type-safe Prisma models", tag: "LEARNING" },
  { name: "Docker & Container Basics", desc: "Containerizing MERN applications with basic Dockerfiles and multi-stage builds", tag: "LEARNING" },
];

const PROVEN_TECH_TAGS = [
  "React.js",
  "JavaScript ES6+",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "REST APIs",
  "Tailwind CSS",
  "Redux Toolkit",
  "Postman",
  "Git & GitHub",
  "HTML5 / CSS3",
  "Python",
  "Vercel",
  "TypeScript (In Progress)",
  "Next.js (In Progress)",
  "PostgreSQL (In Progress)",
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
      { threshold: 0.2 }
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
      <div className="skill-track" role="progressbar" aria-valuenow={pct} aria-valuemin="0" aria-valuemax="100" aria-label={name}>
        <div
          className="skill-fill"
          style={{
            width: filled ? `${pct}%` : "0%",
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            boxShadow: filled ? `0 0 10px ${color}66` : "none",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-container skills-section" aria-labelledby="skills-heading">
      {/* Section Header */}
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-badge">
          <span className="badge-num">03</span>
          <span className="badge-sep">|</span>
          <span className="badge-title">Technical Expertise</span>
        </div>
        <h2 id="skills-heading" className="section-main-heading">
          PROVEN SKILLS &amp; <span className="gradient-text">TECHNICAL TOOLING</span>
        </h2>
        <p className="section-subtitle">
          Demonstrated competencies backed by real production code, commercial internship deliverables, and daily programming practice.
        </p>
      </motion.div>

      {/* 4 Categorized Proven Skills Cards */}
      <div className="skills-categories-grid">
        {PROVEN_CATEGORIES.map((cat, ci) => (
          <TiltCard key={cat.title} className="skills-cat-card" maxTilt={8} glare={true}>
            <div className="skills-card-header">
              <div className="skills-card-icon-title">
                <span className="skills-card-icon" aria-hidden="true">{cat.icon}</span>
                <div>
                  <span className="skills-card-badge" style={{ color: cat.color, borderColor: `${cat.color}44` }}>
                    {cat.badge}
                  </span>
                  <h3 className="skills-card-title">{cat.title}</h3>
                </div>
              </div>
            </div>

            <div className="skills-bars-list">
              {cat.skills.map((s) => (
                <SkillBar key={s.name} name={s.name} pct={s.pct} color={cat.color} />
              ))}
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Clearly Separated: Currently Learning / Growth Horizon */}
      <div className="learning-section-wrap">
        <div className="learning-section-header">
          <div className="learning-badge">
            <span className="learning-pulse-dot" aria-hidden="true"></span>
            <span>GROWTH HORIZON</span>
          </div>
          <h3 className="learning-heading">
            Technologies I Am Actively Learning
          </h3>
          <p className="learning-sub">
            Honest transparency: These are technologies I am studying and experimenting with to broaden my full-stack capabilities.
          </p>
        </div>

        <div className="learning-grid">
          {LEARNING_SKILLS.map((item, idx) => (
            <motion.div
              key={item.name}
              className="learning-card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <div className="learning-card-top">
                <span className="learning-tag">{item.tag}</span>
              </div>
              <h4 className="learning-card-name">{item.name}</h4>
              <p className="learning-card-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Complete Tech Stack Pills */}
      <div className="actual-tech-container">
        <div className="actual-tech-card">
          <div className="actual-tech-header">
            <div className="actual-tech-icon" aria-hidden="true">🛠️</div>
            <div>
              <h3 className="actual-tech-title">Core Development Stack</h3>
              <p className="actual-tech-sub">Languages, frameworks, and developer workflows I work with regularly</p>
            </div>
          </div>
          <div className="actual-tech-chips">
            {PROVEN_TECH_TAGS.map((tag) => (
              <span key={tag} className="tech-chip">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
