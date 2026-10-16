import { motion } from "framer-motion";

// ── PROVEN PRODUCTION SKILLS WITH CONCRETE DELIVERABLES (NO SUBJECTIVE PERCENTAGES) ──
const PROVEN_CATEGORIES = [
  {
    title: "AGENTIC AI & AUTOMATION",
    icon: "🤖",
    color: "#38bdf8",
    badge: "AUTONOMOUS & WORKFLOWS",
    skills: [
      {
        name: "AI Agents & Autonomous Workflows",
        proof: "Engineered multi-step tool-calling pipelines and autonomous decision routing",
        badge: "Production Applied",
      },
      {
        name: "n8n Automation & Webhook Pipelines",
        proof: "Automated lead intake, data sanitization, and WhatsApp notification dispatches",
        badge: "Active Production",
      },
      {
        name: "Generative AI & Prompt Engineering",
        proof: "Structured JSON prompt extraction, intent classification, and sentiment routing",
        badge: "Tested Deliverables",
      },
      {
        name: "Mini Chatbot Automation",
        proof: "Rule-based and intent-matching customer triage chatbots with fallback handling",
        badge: "Live Embedded",
      },
    ],
  },
  {
    title: "PYTHON, DJANGO & BACKEND",
    icon: "🐍",
    color: "#22c55e",
    badge: "SERVER-SIDE & APIS",
    skills: [
      {
        name: "Python Programming & Scripting",
        proof: "Automation algorithms, data transformation, and backend execution services",
        badge: "Core Language",
      },
      {
        name: "Django Framework & REST APIs",
        proof: "Modular RESTful endpoints, model ORM query optimization, and JWT auth",
        badge: "API Architecture",
      },
      {
        name: "Node.js & Express.js Routers",
        proof: "Engineered commercial e-commerce APIs during 6-mo ITS Gujrat internship",
        badge: "Commercial Proof",
      },
      {
        name: "MongoDB & Database Architecture",
        proof: "Schema modeling, aggregation pipelines, and live inventory decrement sync",
        badge: "Production Synced",
      },
    ],
  },
  {
    title: "FRONTEND & UI SYSTEMS",
    icon: "⚛️",
    color: "#a855f7",
    badge: "MODERN CLIENTS",
    skills: [
      {
        name: "React.js (React 18) & Custom Hooks",
        proof: "Built 5+ production web apps with reusable modular component architecture",
        badge: "5+ Shipped Apps",
      },
      {
        name: "Bootstrap 5 & Responsive Layouts",
        proof: "Mobile-first responsive grids, modal dialogs, and polished admin dashboards",
        badge: "Pixel-Perfect",
      },
      {
        name: "Modern JavaScript (ES6+) & DOM",
        proof: "Async/await patterns, debounced queries, and event loop optimization",
        badge: "Advanced ES6+",
      },
      {
        name: "Tailwind CSS & Cosmic Glass UI",
        proof: "Ultra-fast styling, bespoke cosmic glass gradients, and 98+ Lighthouse scores",
        badge: "High Performance",
      },
    ],
  },
  {
    title: "DEVELOPER TOOLING & SYSTEMS",
    icon: "🛠️",
    color: "#f59e0b",
    badge: "WORKFLOW & DEPLOYMENT",
    skills: [
      {
        name: "Git & GitHub Version Control",
        proof: "Branching workflows, semantic commits, and team collaboration hygiene",
        badge: "Daily Practice",
      },
      {
        name: "Postman API Automation & Testing",
        proof: "Endpoint validation, payload assertions, and webhook simulation runs",
        badge: "Verified Testing",
      },
      {
        name: "Vercel Hosting & CI/CD Pipelines",
        proof: "Automated Git deployment triggers, edge network distribution, and analytics",
        badge: "Live CI/CD",
      },
      {
        name: "Robotics State Logic & Kinematics",
        proof: "Applied Bachelor in Robotics foundations to deterministic software state machines",
        badge: "Degree Verified",
      },
    ],
  },
];

// ── CURRENTLY LEARNING & GROWTH HORIZON ──
const LEARNING_SKILLS = [
  { name: "Advanced Multi-Agent Swarms", desc: "Multi-agent coordination, agent memory loops, tool-calling, and autonomous decision routing", tag: "IN PROGRESS" },
  { name: "Enterprise n8n Node Integrations", desc: "Custom node modules, self-hosted n8n clusters, and fail-safe webhook retries", tag: "IN PROGRESS" },
  { name: "Django Channels & WebSockets", desc: "Real-time asynchronous event streaming and live socket connections in Python", tag: "IN PROGRESS" },
  { name: "Vector Databases & RAG Pipelines", desc: "Retrieval-Augmented Generation using vector embeddings for context-aware Gen AI responses", tag: "IN PROGRESS" },
];

const PROVEN_TECH_TAGS = [
  "AI Agents",
  "n8n Automation",
  "Generative AI",
  "Agentic AI",
  "AI Automation",
  "Mini Chatbot Automation",
  "Python",
  "Django",
  "Bootstrap 5",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Tailwind CSS",
  "Redux Toolkit",
  "Postman",
  "Git & GitHub",
  "Vercel",
];

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
          <span className="badge-title">Technical Competence</span>
        </div>
        <h2 id="skills-heading" className="section-main-heading">
          VERIFIED SKILLS &amp; <span className="gradient-text">PROJECT PROOF</span>
        </h2>
        <p className="section-subtitle">
          Tangible engineering capabilities backed by commercial deliverables, deployed client applications, and continuous production coding.
        </p>
      </motion.div>

      {/* 4 Categorized Proven Skills Cards (Proof-Based, Zero Artificial Percentages) */}
      <div className="skills-categories-grid">
        {PROVEN_CATEGORIES.map((cat, catIdx) => (
          <motion.div
            key={cat.title}
            className="skill-category-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
          >
            <div className="skill-cat-header">
              <h3 className="skill-cat-title">
                <span className="skill-cat-icon" aria-hidden="true">{cat.icon}</span>
                <span>{cat.title}</span>
              </h3>
              <span
                className="cat-badge-proven"
                style={{
                  color: cat.color,
                  borderColor: `${cat.color}55`,
                  background: `${cat.color}15`,
                  boxShadow: `0 0 10px ${cat.color}25`,
                }}
              >
                {cat.badge}
              </span>
            </div>

            {/* Proof-Based Capability List */}
            <div className="skill-proof-stack">
              {cat.skills.map((s) => (
                <div key={s.name} className="skill-proof-item">
                  <div className="skill-proof-top">
                    <h4 className="skill-proof-name">{s.name}</h4>
                    <span
                      className="skill-proof-badge"
                      style={{
                        color: cat.color,
                        borderColor: `${cat.color}40`,
                        background: `${cat.color}10`,
                      }}
                    >
                      {s.badge}
                    </span>
                  </div>
                  <p className="skill-proof-desc">{s.proof}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Clearly Separated: Currently Learning / Growth Horizon */}
      <div className="currently-learning-card">
        <span className="learning-badge-pill">
          🌱 GROWTH HORIZON
        </span>
        <h3 className="learning-heading">
          Technologies I Am Actively Deepening
        </h3>
        <p className="learning-desc">
          Honest transparency: These are advanced frameworks and patterns I am studying and implementing in practice projects to broaden my engineering edge.
        </p>

        <div className="learning-items-grid">
          {LEARNING_SKILLS.map((item, idx) => (
            <motion.div
              key={item.name}
              className="learning-item-box"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <div className="learning-item-top">
                <h4 className="learning-item-name">{item.name}</h4>
                <span className="learning-item-tag">{item.tag}</span>
              </div>
              <p className="learning-item-desc">{item.desc}</p>
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
