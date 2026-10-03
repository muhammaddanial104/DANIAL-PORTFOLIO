import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TiltCard from "./TiltCard";

const AEGIS_FEATURES = [
  { name: "Threat Detection",       icon: "🛡️" },
  { name: "Phishing Defense",       icon: "🎣" },
  { name: "Fraud & Anomaly AI",     icon: "🔍" },
  { name: "Autonomous Bug Fix",     icon: "🧪" },
  { name: "AI Self-Healing",        icon: "⚡" },
  { name: "Vulnerability Scan",     icon: "📊" },
  { name: "SOC Telemetry",          icon: "📈" },
  { name: "Incident Response",      icon: "🤖" },
  { name: "Zero-Day Shield",        icon: "🔴" },
  { name: "Sandboxed Patches",      icon: "📦" },
  { name: "Security Audits",        icon: "📋" },
  { name: "SecOps Multi-Agent",     icon: "⚙️" },
];

const AUTODEV_FEATURES = [
  { name: "Multi-Step Planning",    icon: "📋" },
  { name: "Autonomous Coding",      icon: "💻" },
  { name: "AST Code Parsing",       icon: "🌲" },
  { name: "Unit Test Generator",    icon: "🧪" },
  { name: "Isolated Sandbox Exec",  icon: "🛡️" },
  { name: "Git Diffs & Commits",    icon: "🔀" },
  { name: "Static Type Analysis",   icon: "🔬" },
  { name: "Auto Bug Refactoring",   icon: "🔧" },
  { name: "Telemetry & Profiling",  icon: "📊" },
  { name: "Dependency Resolver",    icon: "📦" },
  { name: "Multi-File Reasoning",   icon: "🧠" },
  { name: "CI/CD Auto-Pipeline",    icon: "🚀" },
];

const NOVA_FEATURES = [
  { name: "AI Brain",            icon: "🧠" },
  { name: "Voice Assistant",     icon: "🎙️" },
  { name: "Desktop Control",     icon: "🖥️" },
  { name: "File Management",     icon: "📁" },
  { name: "Browser Control",     icon: "🌐" },
  { name: "Coding Assistant",    icon: "💻" },
  { name: "Video Generator",     icon: "🎬" },
  { name: "YouTube Automation",  icon: "▶️" },
  { name: "TikTok Automation",   icon: "📱" },
  { name: "Facebook Automation", icon: "👥" },
  { name: "Task Automation",     icon: "⚙️" },
  { name: "Multi-Agent Swarm",   icon: "🤖" },
];

export default function Projects() {
  const [selectedModal, setSelectedModal] = useState(null);

  return (
    <section id="projects" className="section-container projects-section">
      {/* Section Header */}
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-badge">
          <span className="badge-num">04</span>
          <span className="badge-sep">|</span>
          <span className="badge-title">Featured Work</span>
        </div>
        <h2 className="section-main-heading">
          FLAGSHIP PROJECTS &amp; <span className="gradient-text">ENGINEERING PROOF</span>
        </h2>
        <p className="section-subtitle">
          Real-world software architectures featuring verified problem statements, clear personal contributions, and production-tested code.
        </p>
      </motion.div>

      {/* ══════════════════════════════════════════════════════════════
          FLAGSHIP 1: AEGIS-AI
          ══════════════════════════════════════════════════════════════ */}
      <TiltCard maxTilt={6} glare={true} style={{ width: "100%", marginBottom: "35px" }}>
        <motion.div
          className="flagship-project-card aegis-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 0 }}
        >
        <div className="flagship-top-meta">
          <div className="meta-badge-group">
            <span className="star-tag">★ KEY FEATURED PROJECT</span>
            <span className="status-badge badge-green">Active Defense System</span>
          </div>
          <span className="project-year">2026 • Autonomous Security</span>
        </div>

        {/* Desktop Window Frame Screenshot */}
        <div className="window-frame-banner">
          <div className="window-bar">
            <div className="window-dots">
              <span className="w-dot dot-red" />
              <span className="w-dot dot-yellow" />
              <span className="w-dot dot-green" />
            </div>
            <span className="window-title">AEGIS-AI • Autonomous SOC &amp; Cyber Defense Operations</span>
            <span className="window-status status-armed">● ARMED &amp; SECURED</span>
          </div>
          <div className="window-image-wrap">
            <img
              src="/images/aegis-preview.jpg"
              alt="AEGIS-AI Cyber Defense Platform Screenshot"
              className="window-img"
              loading="lazy"
            />
          </div>
        </div>

        {/* Project Content Body */}
        <div className="flagship-body">
          <div className="flagship-title-row">
            <div>
              <h3 className="flagship-title">AEGIS-AI</h3>
              <h4 className="flagship-subtitle">
                Autonomous AI Cyber Defense &amp; Self-Healing SOC Platform
              </h4>
            </div>
          </div>

          {/* Problem Solved Callout (Section 3 of Report) */}
          <div className="project-proof-box">
            <div className="proof-row">
              <strong className="proof-label">🎯 Problem Solved:</strong>
              <span className="proof-text">
                Enterprise security teams face severe alert fatigue, slow manual log triage, and hours of delay before isolating network breaches.
              </span>
            </div>
            <div className="proof-row">
              <strong className="proof-label">🛠️ My Contribution:</strong>
              <ul className="proof-bullets">
                <li>Architected multi-agent triage pipeline that isolates suspicious payloads inside isolated sandbox environments.</li>
                <li>Engineered autonomous CVE vulnerability scanning and self-healing patch remediation with real-time SOC alerting.</li>
              </ul>
            </div>
            <div className="proof-row">
              <strong className="proof-label">⚡ Tech Stack:</strong>
              <span className="proof-stack">Python · FastAPI · LangChain · Claude 3.5 Sonnet · Threat Sandboxes · Suricata · ChromaDB · React</span>
            </div>
          </div>

          {/* 12 Core Capabilities Grid */}
          <div className="capabilities-wrap">
            <span className="capabilities-label">12 CORE DEFENSE CAPABILITIES:</span>
            <div className="capabilities-grid">
              {AEGIS_FEATURES.map((f) => (
                <div className="cap-pill" key={f.name}>
                  <span className="cap-icon">{f.icon}</span>
                  <span className="cap-text">{f.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Links & Proof (Section 3 of Report) */}
          <div className="flagship-actions">
            <a
              href="https://github.com/muhammaddanial104"
              target="_blank"
              rel="noreferrer"
              className="btn-primary-glow"
            >
              <span>View on GitHub</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>

            <button
              className="btn-outline-glass"
              onClick={() =>
                setSelectedModal({
                  title: "AEGIS-AI",
                  badge: "Autonomous Cyber Defense Platform",
                  image: "/images/aegis-preview.jpg",
                  problem: "Manual security operations struggle with slow incident response, undetected zero-days, and alert fatigue.",
                  solution: "Engineered an autonomous multi-agent SOC that scans networks, isolates malicious payloads in quarantine environments, and generates instant CVE patches.",
                  contribution: [
                    "Designed event-driven telemetry ingestion engine connecting Zeek logs to LangChain reasoning agents.",
                    "Built automated payload quarantine service ensuring zero host contamination during vulnerability analysis.",
                    "Created real-time React dashboard with live threat heatmaps and incident timeline playback.",
                  ],
                  flow: "Telemetry Ingestion → Multi-Agent Triage → Sandboxed CVE Analysis → Autonomous Playbook Execution → SOC Alert",
                  tech: ["Python", "FastAPI", "LangChain", "Claude 3.5 Sonnet", "FastAPI Sandboxes", "Suricata", "ChromaDB", "React"],
                  result: "Detects and isolates simulated network threats in under 4 minutes with verifiable automated rollbacks.",
                  githubUrl: "https://github.com/muhammaddanial104",
                })
              }
            >
              <span>Case Study Details</span>
            </button>
          </div>
        </div>
      </motion.div>
      </TiltCard>

      {/* ══════════════════════════════════════════════════════════════
          FLAGSHIP 2: AUTO-DEV AI 💻
          ══════════════════════════════════════════════════════════════ */}
      <TiltCard maxTilt={6} glare={true} style={{ width: "100%", marginBottom: "35px" }}>
        <motion.div
          className="flagship-project-card autodev-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 0 }}
        >
        <div className="flagship-top-meta">
          <div className="meta-badge-group">
            <span className="star-tag">★ KEY FEATURED PROJECT</span>
            <span className="status-badge badge-purple">Autonomous Coding Engine</span>
          </div>
          <span className="project-year">2026 • AI Developer Agent</span>
        </div>

        {/* Desktop Window Frame Screenshot */}
        <div className="window-frame-banner">
          <div className="window-bar">
            <div className="window-dots">
              <span className="w-dot dot-red" />
              <span className="w-dot dot-yellow" />
              <span className="w-dot dot-green" />
            </div>
            <span className="window-title">AUTO-DEV AI • Autonomous Software Engineering Agent</span>
            <span className="window-status status-active">● AGENT ACTIVE</span>
          </div>
          <div className="window-image-wrap">
            <img
              src="/images/coder-agent-preview.jpg"
              alt="AUTO-DEV AI Coder Agent Interface Screenshot"
              className="window-img"
              loading="lazy"
            />
          </div>
        </div>

        {/* Project Content Body */}
        <div className="flagship-body">
          <div className="flagship-title-row">
            <div>
              <h3 className="flagship-title">AUTO-DEV AI 💻</h3>
              <h4 className="flagship-subtitle">
                Autonomous Software Engineering Agent &amp; Code Generation Platform
              </h4>
            </div>
          </div>

          {/* Problem Solved Callout */}
          <div className="project-proof-box">
            <div className="proof-row">
              <strong className="proof-label">🎯 Problem Solved:</strong>
              <span className="proof-text">
                Software developers spend 30-40% of their time writing repetitive test cases, debugging syntax regressions, and scaffolding multi-file boilerplate.
              </span>
            </div>
            <div className="proof-row">
              <strong className="proof-label">🛠️ My Contribution:</strong>
              <ul className="proof-bullets">
                <li>Built AST-level syntax tree parsing engine allowing the agent to safely read, modify, and refactor code across multiple files.</li>
                <li>Implemented isolated automated Pytest execution loop with autonomous self-reflection and auto-diff generator.</li>
              </ul>
            </div>
            <div className="proof-row">
              <strong className="proof-label">⚡ Tech Stack:</strong>
              <span className="proof-stack">Python · LangChain / LangGraph · Tree-sitter AST · OpenAI GPT-4 · Subprocess Sandboxing · Pytest · FastAPI</span>
            </div>
          </div>

          {/* 12 Core Capabilities Grid */}
          <div className="capabilities-wrap">
            <span className="capabilities-label">12 CORE CODING CAPABILITIES:</span>
            <div className="capabilities-grid">
              {AUTODEV_FEATURES.map((f) => (
                <div className="cap-pill" key={f.name}>
                  <span className="cap-icon">{f.icon}</span>
                  <span className="cap-text">{f.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Links & Proof */}
          <div className="flagship-actions">
            <a
              href="https://github.com/muhammaddanial104"
              target="_blank"
              rel="noreferrer"
              className="btn-primary-glow"
            >
              <span>View on GitHub</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>

            <button
              className="btn-outline-glass"
              onClick={() =>
                setSelectedModal({
                  title: "AUTO-DEV AI 💻",
                  badge: "Autonomous AI Software Engineering Agent",
                  image: "/images/coder-agent-preview.jpg",
                  problem: "Developers spend significant hours on repetitive code scaffolding, bug recreation, and test authoring.",
                  solution: "Engineered an autonomous coding agent with AST parsing and isolated sandbox test verification.",
                  contribution: [
                    "Architected planner-critic agentic loop using LangGraph state graphs.",
                    "Configured sandboxed execution environment to execute unit tests without risking host environment integrity.",
                    "Added unified git patch output generator allowing human review before merging.",
                  ],
                  flow: "User Requirement → AST Parse → Plan → Code Generation → Automated Pytest → Self-Reflection Loop → Git Diff",
                  tech: ["Python", "LangChain", "OpenAI GPT-4", "Tree-sitter", "Async Subprocess", "Pytest", "FastAPI"],
                  result: "Automated end-to-end task implementation with guaranteed automated test verification.",
                  githubUrl: "https://github.com/muhammaddanial104",
                })
              }
            >
              <span>Case Study Details</span>
            </button>
          </div>
        </div>
      </motion.div>
      </TiltCard>

      {/* ══════════════════════════════════════════════════════════════
          FLAGSHIP 3: NOVA AI 🤖 (Clearly marked Private/Beta per Report)
          ══════════════════════════════════════════════════════════════ */}
      <TiltCard maxTilt={6} glare={true} style={{ width: "100%", marginBottom: "35px" }}>
        <motion.div
          className="flagship-project-card nova-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 0 }}
        >
        <div className="flagship-top-meta">
          <div className="meta-badge-group">
            <span className="star-tag">★ AGENTIC SYSTEM</span>
            <span className="status-badge badge-amber">Private Project — Beta</span>
          </div>
          <span className="project-year">2026 • Desktop Agent</span>
        </div>

        {/* Desktop Window Frame Screenshot */}
        <div className="window-frame-banner">
          <div className="window-bar">
            <div className="window-dots">
              <span className="w-dot dot-red" />
              <span className="w-dot dot-yellow" />
              <span className="w-dot dot-green" />
            </div>
            <span className="window-title">NOVA AI • Autonomous Desktop &amp; Social Automation Engine</span>
            <span className="window-status" style={{ color: "#fbbf24" }}>● BETA RUNTIME</span>
          </div>
          <div className="window-image-wrap">
            <img
              src="/images/nova-preview.jpg"
              alt="NOVA AI Desktop Assistant Screenshot"
              className="window-img"
              loading="lazy"
            />
          </div>
        </div>

        {/* Project Content Body */}
        <div className="flagship-body">
          <div className="flagship-title-row">
            <div>
              <h3 className="flagship-title">NOVA AI 🤖</h3>
              <h4 className="flagship-subtitle">
                Autonomous Desktop Assistant &amp; Social Media Automation Swarm
              </h4>
            </div>
          </div>

          {/* Problem Solved Callout */}
          <div className="project-proof-box">
            <div className="proof-row">
              <strong className="proof-label">🎯 Problem Solved:</strong>
              <span className="proof-text">
                Content creators and solopreneurs lose hours daily to manual file organization, repetitive browser data entry, and multi-platform social media posting.
              </span>
            </div>
            <div className="proof-row">
              <strong className="proof-label">🛠️ My Contribution:</strong>
              <ul className="proof-bullets">
                <li>Built voice-driven command recognition that executes local file operations, system apps, and browser tasks hands-free.</li>
                <li>Created automated headless browser pipelines for scheduled social uploads and audience analytics reporting.</li>
              </ul>
            </div>
            <div className="proof-row">
              <strong className="proof-label">⚡ Tech Stack:</strong>
              <span className="proof-stack">Python · PyAutoGUI · OpenAI API · Selenium · Node.js · Express · Electron</span>
            </div>
          </div>

          {/* 12 Core Capabilities Grid */}
          <div className="capabilities-wrap">
            <span className="capabilities-label">12 CORE CAPABILITIES &amp; FEATURES:</span>
            <div className="capabilities-grid">
              {NOVA_FEATURES.map((f) => (
                <div className="cap-pill" key={f.name}>
                  <span className="cap-icon">{f.icon}</span>
                  <span className="cap-text">{f.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Links & Proof */}
          <div className="flagship-actions">
            <span className="btn-private-tag">
              🔒 Private Project — Case Study Available
            </span>

            <a
              href="https://github.com/muhammaddanial104"
              target="_blank"
              rel="noreferrer"
              className="btn-outline-glass"
            >
              <span>GitHub Profile</span>
            </a>

            <button
              className="btn-primary-glow"
              onClick={() =>
                setSelectedModal({
                  title: "NOVA AI 🤖",
                  badge: "Desktop Automation & Social Media Agent",
                  image: "/images/nova-preview.jpg",
                  problem: "Content creators and remote workers waste hours daily on repetitive multi-platform video uploads, browser tasks, and file management.",
                  solution: "Engineered an autonomous AI assistant capable of voice interaction, local desktop automation, and headless multi-platform publishing.",
                  contribution: [
                    "Integrated OpenAI Whisper and speech synthesis for low-latency desktop voice commands.",
                    "Constructed Selenium and PyAutoGUI automation scripts for scheduled YouTube, TikTok, and Facebook posting.",
                    "Built secure local credential vault ensuring zero API key exposure on client machines.",
                  ],
                  flow: "Voice / Text Input → Intent Classification → Automation Script Execution → Browser Telemetry → Status Report",
                  tech: ["Python", "PyAutoGUI", "OpenAI API", "Selenium", "Node.js", "Express", "Electron"],
                  result: "Eliminates ~15 hours of manual content distribution and repetitive desktop tasks per week.",
                  githubUrl: "https://github.com/muhammaddanial104",
                })
              }
            >
              <span>Case Study Details</span>
            </button>
          </div>
        </div>
      </motion.div>
      </TiltCard>

      {/* ══════════════════════════════════════════════════════════════
          PROJECT 4: E-COMMERCE PLATFORMS (ITS Gujrat Client Work)
          ══════════════════════════════════════════════════════════════ */}
      <TiltCard maxTilt={6} glare={true} style={{ width: "100%", marginBottom: "30px" }}>
        <motion.div
          className="ecommerce-showcase-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 0 }}
        >
        <div className="flagship-top-meta">
          <div className="meta-badge-group">
            <span className="star-tag" style={{ color: "#38bdf8", borderColor: "rgba(56, 189, 248, 0.4)", background: "rgba(56, 189, 248, 0.12)" }}>
              ★ PRODUCTION CLIENT WORK
            </span>
            <span className="status-badge badge-green">Deployed at ITS Gujrat</span>
          </div>
          <span className="project-year">Mar 2024 – Aug 2024 (6 Months)</span>
        </div>

        <div className="ecommerce-content-grid">
          <div className="ecommerce-img-col">
            <img
              src="/images/proj1.jpg"
              alt="MERN E-Commerce Platform Built at ITS Gujrat"
              className="ecommerce-preview-img"
              loading="lazy"
            />
          </div>

          <div className="ecommerce-text-col">
            <h3 className="flagship-title">E-Commerce Platforms (ITS Gujrat)</h3>
            <h4 className="flagship-subtitle">
              2 Production-Grade Full-Stack MERN Platforms
            </h4>

            {/* Problem Solved Callout */}
            <div className="project-proof-box">
              <div className="proof-row">
                <strong className="proof-label">🎯 Problem Solved:</strong>
                <span className="proof-text">
                  Regional commercial clients needed high-throughput digital storefronts with real-time stock sync, frictionless payment gateway integration, and zero checkout failures.
                </span>
              </div>
              <div className="proof-row">
                <strong className="proof-label">🛠️ My Contribution:</strong>
                <ul className="proof-bullets">
                  <li>Personally engineered end-to-end RESTful APIs, JWT role-based access control, and dynamic product filtering.</li>
                  <li>Integrated secure Stripe payment processing, webhook listeners, and real-time MongoDB inventory updates.</li>
                </ul>
              </div>
              <div className="proof-row">
                <strong className="proof-label">⚡ Tech Stack:</strong>
                <span className="proof-stack">React.js · Node.js · Express.js · MongoDB · Redux Toolkit · Stripe API · JWT</span>
              </div>
            </div>

            <div className="flagship-actions">
              <a
                href="https://github.com/muhammaddanial104"
                target="_blank"
                rel="noreferrer"
                className="btn-primary-glow"
              >
                <span>View Code on GitHub</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>

              <button
                className="btn-outline-glass"
                onClick={() =>
                  setSelectedModal({
                    title: "E-Commerce Platforms (ITS Gujrat)",
                    badge: "6-Month Production Software Internship",
                    image: "/images/proj1.jpg",
                    problem: "Clients required scalable digital storefronts capable of handling high concurrent orders and real-time inventory updates.",
                    solution: "Architected 2 full-featured MERN platforms with complete admin dashboards, real-time inventory synchronization, and Stripe checkout.",
                    contribution: [
                      "Implemented entire backend routing, MongoDB data schemas, and password hashing with bcrypt & JWT.",
                      "Engineered Redux cart state persistence across page refreshes and browser sessions.",
                      "Built custom admin portal for live order fulfillment, customer analytics, and inventory updates.",
                    ],
                    flow: "Catalog Browsing → Cart State → Checkout Auth → Stripe Payment Webhook → MongoDB Inventory Decrement → Confirmation Email",
                    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Stripe API", "JWT"],
                    result: "Successfully deployed and handed over to clients with 99.9% checkout reliability.",
                    githubUrl: "https://github.com/muhammaddanial104",
                  })
                }
              >
                <span>Case Study Details</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      </TiltCard>

      {/* ══════════════════════════════════════════════════════════════
          INTERACTIVE CASE STUDY MODAL DIALOG
          ══════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {selectedModal && (
          <motion.div
            className="project-modal-overlay"
            onClick={() => setSelectedModal(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <motion.div
              className="project-modal-dialog"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Header */}
              <div className="modal-header-row">
                <div>
                  <span className="modal-badge">{selectedModal.badge}</span>
                  <h3 className="modal-title">{selectedModal.title}</h3>
                </div>
                <button
                  className="modal-close-btn"
                  onClick={() => setSelectedModal(null)}
                  aria-label="Close dialog"
                >
                  ✕
                </button>
              </div>

              {/* Modal Body */}
              <div className="modal-body-content">
                {selectedModal.image && (
                  <div className="modal-img-wrap">
                    <img
                      src={selectedModal.image}
                      alt={selectedModal.title}
                      className="modal-banner-img"
                    />
                  </div>
                )}

                <div className="modal-section-block">
                  <h4 className="modal-section-heading">🎯 Problem Statement</h4>
                  <p className="modal-section-p">{selectedModal.problem}</p>
                </div>

                <div className="modal-section-block">
                  <h4 className="modal-section-heading">💡 Solution Engineered</h4>
                  <p className="modal-section-p">{selectedModal.solution}</p>
                </div>

                {selectedModal.contribution && (
                  <div className="modal-section-block">
                    <h4 className="modal-section-heading">🛠️ Key Personal Contributions</h4>
                    <ul className="modal-bullets-list">
                      {selectedModal.contribution.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="modal-section-block">
                  <h4 className="modal-section-heading">🔄 Execution Architecture Flow</h4>
                  <div className="modal-flow-box">{selectedModal.flow}</div>
                </div>

                <div className="modal-section-block">
                  <h4 className="modal-section-heading">⚡ Verified Technologies</h4>
                  <div className="modal-tech-pills">
                    {selectedModal.tech.map((t) => (
                      <span className="modal-tech-pill" key={t}>{t}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-section-block">
                  <h4 className="modal-section-heading">📊 Measurable Outcome / Result</h4>
                  <p className="modal-section-result">{selectedModal.result}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="modal-footer-row">
                <a
                  href={selectedModal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary-glow"
                >
                  <span>View on GitHub</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
                <button
                  className="btn-outline-glass"
                  onClick={() => setSelectedModal(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
