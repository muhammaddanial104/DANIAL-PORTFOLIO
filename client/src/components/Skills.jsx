import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

// ── PROVEN PRODUCTION SKILLS ──
const PROVEN_CATEGORIES = [
  {
    title: "AI & AGENT ARCHITECTURE",
    icon: "🤖",
    color: "#a855f7",
    badge: "PRODUCTION & AGENT SWARMS",
    skills: [
      { name: "Autonomous AI Multi-Agents", pct: 94 },
      { name: "LLM APIs (OpenAI GPT-4 & Claude 3.5)", pct: 92 },
      { name: "LangChain, Tool Calling & RAG", pct: 89 },
      { name: "System Prompting & Context Management", pct: 91 },
    ],
  },
  {
    title: "FULL-STACK WEB PLATFORMS",
    icon: "💻",
    color: "#38bdf8",
    badge: "MERN & ENTERPRISE CODE",
    skills: [
      { name: "React.js, Next.js & Modern UI", pct: 90 },
      { name: "Node.js, Express & Architecture", pct: 88 },
      { name: "MongoDB & Database Design", pct: 87 },
      { name: "RESTful APIs & State Management", pct: 90 },
    ],
  },
  {
    title: "AUTOMATION & WORKFLOW PIPELINES",
    icon: "⚙️",
    color: "#ec4899",
    badge: "VERIFIED HIGH-CONCURRENCY",
    skills: [
      { name: "API & Webhook Automations", pct: 92 },
      { name: "Python Scripting & Headless Scraping", pct: 90 },
      { name: "Browser & Desktop Task Automation", pct: 89 },
      { name: "Automated Error Handling & Retries", pct: 87 },
    ],
  },
  {
    title: "DEVOPS, CLOUD & TOOLING",
    icon: "🛠️",
    color: "#f59e0b",
    badge: "CI/CD & DEPLOYMENTS",
    skills: [
      { name: "Git Version Control & Team Workflows", pct: 91 },
      { name: "Docker Containerization Sandboxes", pct: 85 },
      { name: "Vercel, Cloud Hosting & DNS", pct: 88 },
      { name: "Performance Optimization & Security", pct: 86 },
    ],
  },
];

// ── ROBOTICS PROGRAMMING & HARDWARE (COMING SOON) ──
const LEARNING_SKILLS = [
  { name: "Robotics Programming & Control", desc: "Kinematics, inverse kinematics, actuator trajectory planning, and Python/C++ robot control scripts", tag: "COMING SOON" },
  { name: "ROS & ROS 2 Architectures", desc: "Robot Operating System node architectures, pub/sub topics, and micro-ROS communications", tag: "COMING SOON" },
  { name: "Embedded C / C++ Firmware", desc: "Hardware firmware, memory registers, UART/I2C/SPI sensor communications, and realtime control loops", tag: "COMING SOON" },
  { name: "Autonomous Navigation & SLAM", desc: "Kinematics, path planning algorithms, and LiDAR mapping fundamentals", tag: "COMING SOON" },
];

const PROVEN_TECH_TAGS = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript ES6+",
  "TypeScript",
  "Python",
  "FastAPI",
  "LangChain",
  "OpenAI GPT-4",
  "Claude 3.5 Sonnet",
  "REST APIs",
  "Docker",
  "Git & GitHub",
  "Vercel",
  "Tailwind CSS",
  "Browser Automation",
  "Robotics Programming (Coming Soon)",
  "ROS & ROS 2 (Coming Soon)",
  "Embedded C++ (Coming Soon)",
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
      <div className="skill-bar-bg">
        <motion.div
          className="skill-bar-fill"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 12px ${color}88`,
          }}
          initial={{ width: 0 }}
          animate={{ width: filled ? `${pct}%` : "0%" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-container skills-section">
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
        <h2 className="section-main-heading">
          CORE ARSENAL &amp; <span className="gradient-text">TECHNICAL CAPABILITIES</span>
        </h2>
        <p className="section-subtitle">
          Battle-tested competencies backed by real production code, enterprise MERN applications, and autonomous AI systems.
        </p>
      </motion.div>

      {/* 4 Proven Production Skill Cards Grid */}
      <div className="skills-proven-grid">
        {PROVEN_CATEGORIES.map((cat, idx) => (
          <TiltCard key={cat.title} maxTilt={8} glare={true} style={{ height: "100%", width: "100%", minWidth: 0 }}>
            <motion.div
              className="skill-category-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: "100%", marginBottom: 0, width: "100%", boxSizing: "border-box" }}
            >
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
            </motion.div>
          </TiltCard>
        ))}
      </div>

      {/* ── ROBOTICS PROGRAMMING & HARDWARE (COMING SOON) ── */}
      <motion.div
        className="currently-learning-card cat-coming-soon"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="learning-header">
          <div className="learning-title-group">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "8px" }}>
              <span className="learning-badge-pill">🦾 ROBOTICS PROGRAMMING &amp; HARDWARE</span>
              <span className="cat-badge-soon">
                <span className="live-dot-green" />
                COMING SOON
              </span>
            </div>
            <h4 className="learning-heading">Robotics Programming &amp; Autonomous Systems</h4>
            <p className="learning-desc">
              Expanding autonomous AI agents into physical hardware and robotic control. Hands-on robotics programming, ROS 2 node architecture, and embedded systems launching soon alongside my Bachelor in Robotics degree.
            </p>
          </div>
        </div>

        <div className="learning-items-grid">
          {LEARNING_SKILLS.map((item) => (
            <motion.div
              className="learning-item-box"
              key={item.name}
              whileHover={{ y: -3, borderColor: "rgba(16, 185, 129, 0.5)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="learning-item-top">
                <span className="learning-item-name">{item.name}</span>
                <span className="learning-item-tag tag-soon-pulse">
                  <span className="live-dot-green" />
                  {item.tag}
                </span>
              </div>
              <p className="learning-item-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── VERIFIED ACTUAL TECH STACK CHIPS ── */}
      <motion.div
        className="actual-tech-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="actual-tech-card">
          <div className="actual-tech-header">
            <span className="actual-tech-icon">⚡</span>
            <div>
              <h4 className="actual-tech-title">VERIFIED ACTIVE STACK</h4>
              <p className="actual-tech-sub">Core technologies utilized across my deployed web platforms, automated pipelines, and client solutions</p>
            </div>
          </div>

          <div className="actual-tech-chips">
            {PROVEN_TECH_TAGS.map((t, idx) => {
              const isSoon = t.includes("Coming Soon");
              return (
                <motion.span
                  key={idx}
                  className={`tech-pill ${isSoon ? "tech-pill-soon" : ""}`}
                  whileHover={{ scale: 1.08, y: -2 }}
                  transition={{ duration: 0.15 }}
                >
                  <span className={`pill-dot ${isSoon ? "pill-dot-green" : ""}`} />
                  {t}
                </motion.span>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
