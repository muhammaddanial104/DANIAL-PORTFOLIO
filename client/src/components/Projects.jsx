import { useState } from "react";

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
  { name: "Docker Sandbox Exec",    icon: "🐳" },
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
      <div className="section-header">
        <div className="section-badge">
          <span className="badge-num">03</span>
          <span className="badge-sep">|</span>
          <span className="badge-title">Featured Projects</span>
        </div>
        <h2 className="section-main-heading">
          FEATURED <span className="gradient-text">PROJECTS</span>
        </h2>
        <p className="section-subtitle">
          Engineering autonomous AI systems, enterprise cyber defense platforms, and autonomous software engineering agents.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          FLAGSHIP 1: AEGIS-AI (Exact from Video)
          ══════════════════════════════════════════════════════════════ */}
      <div className="flagship-project-card aegis-card">
        <div className="flagship-top-meta">
          <div className="meta-badge-group">
            <span className="star-tag">★ KEY FEATURED PROJECT</span>
            <span className="status-badge badge-green">Active Defense System</span>
          </div>
          <span className="project-year">2026</span>
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
          <h3 className="flagship-title">AEGIS-AI</h3>
          <h4 className="flagship-subtitle">
            Autonomous AI Cyber Defense &amp; Self-Healing SOC Platform
          </h4>

          <p className="flagship-description">
            An enterprise-grade autonomous cyber defense and Security Operations Center (SOC) platform engineered to detect multi-vector cyber attacks, phishing emails, and malicious fraud in real time. Features autonomous vulnerability detection, automated bug fixing, and sandboxed self-healing system remediation.
          </p>

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

          {/* Tech Stack Chips */}
          <div className="tech-chips-row">
            {["Python", "FastAPI", "LangChain / LangGraph", "Claude 3.5 Sonnet", "Suricata / Zeek", "Docker Sandboxes", "ChromaDB", "React / Tailwind"].map((t) => (
              <span className="tech-chip" key={t}>{t}</span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flagship-actions">
            <a
              href="https://github.com/muhammaddanial104"
              target="_blank"
              rel="noreferrer"
              className="btn-primary-glow"
            >
              View on GitHub
            </a>
            <button
              className="btn-outline-glass"
              onClick={() =>
                setSelectedModal({
                  title: "AEGIS-AI",
                  badge: "Autonomous Cyber Defense Platform",
                  image: "/images/aegis-preview.jpg",
                  problem: "Manual security operations struggle with slow incident response, undetected zero-days, and alert fatigue.",
                  solution: "Engineered an autonomous multi-agent SOC that scans networks, isolates malicious payloads in Docker, and generates instant CVE patches.",
                  flow: "Telemetry Ingestion → Multi-Agent Triage → Sandboxed CVE Analysis → Autonomous Playbook Execution → Slack/SOC Alert",
                  tech: ["Python", "FastAPI", "LangChain", "Claude 3.5", "Docker", "ChromaDB", "React"],
                  result: "Detects and isolates network threats in under 4 minutes with verifiable self-healing rollbacks.",
                  githubUrl: "https://github.com/muhammaddanial104",
                })
              }
            >
              Project Details
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          FLAGSHIP 2: AUTO-DEV AI (Exact from Video)
          ══════════════════════════════════════════════════════════════ */}
      <div className="flagship-project-card autodev-card">
        <div className="flagship-top-meta">
          <div className="meta-badge-group">
            <span className="star-tag">★ KEY FEATURED PROJECT</span>
            <span className="status-badge badge-purple">Autonomous Coding Engine</span>
          </div>
          <span className="project-year">2026</span>
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
          <h3 className="flagship-title">AUTO-DEV AI 💻</h3>
          <h4 className="flagship-subtitle">
            Autonomous AI Software Engineering Agent &amp; Code Generation Platform
          </h4>

          <p className="flagship-description">
            An autonomous AI software engineer designed to plan, write, test, debug, and refactor production codebases. Features multi-step reasoning, AST-level syntax tree parsing, automated pytest test suite generation, and containerized Docker sandboxes for fully isolated, verified code execution.
          </p>

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

          {/* Tech Stack Chips */}
          <div className="tech-chips-row">
            {["Python", "LangChain / LangGraph", "OpenAI GPT-4 / Claude", "Tree-sitter AST", "Docker Sandboxes", "Pytest Suite", "FastAPI", "Git Automation"].map((t) => (
              <span className="tech-chip" key={t}>{t}</span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flagship-actions">
            <a
              href="https://github.com/muhammaddanial104"
              target="_blank"
              rel="noreferrer"
              className="btn-primary-glow"
            >
              View on GitHub
            </a>
            <button
              className="btn-outline-glass"
              onClick={() =>
                setSelectedModal({
                  title: "AUTO-DEV AI 💻",
                  badge: "Autonomous AI Software Engineering Agent",
                  image: "/images/coder-agent-preview.jpg",
                  problem: "Developers spend significant hours on repetitive code scaffolding, bug recreation, and test authoring.",
                  solution: "Engineered an autonomous coding agent with AST parsing and isolated Docker test verification.",
                  flow: "User Requirement → AST Parse → Plan → Code Generation → Docker Pytest → Self-Reflection Loop → Git Diff",
                  tech: ["Python", "LangChain", "OpenAI GPT-4", "Tree-sitter", "Docker", "Pytest", "FastAPI"],
                  result: "Automated end-to-end task implementation with guaranteed containerized test verification.",
                  githubUrl: "https://github.com/muhammaddanial104",
                })
              }
            >
              Project Details
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          FLAGSHIP 3: NOVA AI (Exact from Video)
          ══════════════════════════════════════════════════════════════ */}
      <div className="flagship-project-card nova-card">
        <div className="flagship-top-meta">
          <div className="meta-badge-group">
            <span className="star-tag">★ KEY FEATURED PROJECT</span>
            <span className="status-badge badge-amber">In Development</span>
          </div>
          <span className="project-year">2026</span>
        </div>

        {/* Desktop Window Frame Screenshot */}
        <div className="window-frame-banner">
          <div className="window-bar">
            <div className="window-dots">
              <span className="w-dot dot-red" />
              <span className="w-dot dot-yellow" />
              <span className="w-dot dot-green" />
            </div>
            <span className="window-title">NOVA AI • Desktop Assistant &amp; Workflow Engine</span>
            <span className="window-status status-active">● ASSISTANT INTERFACE ACTIVE</span>
          </div>
          <div className="window-image-wrap">
            <img
              src="/images/nova-preview.jpg"
              alt="NOVA AI Desktop Assistant Interface Screenshot"
              className="window-img"
              loading="lazy"
            />
          </div>
        </div>

        {/* Project Content Body */}
        <div className="flagship-body">
          <h3 className="flagship-title">NOVA AI 🤖</h3>
          <h4 className="flagship-subtitle">
            Autonomous AI Desktop Assistant &amp; Automation Engine
          </h4>

          <p className="flagship-description">
            An AI-powered desktop assistant designed to control your computer, manage files, interact with browsers, assist with coding, generate content and automate complex workflows.
          </p>

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

          {/* Tech Stack Chips */}
          <div className="tech-chips-row">
            {["Python", "LangChain", "OpenAI GPT-4o", "Desktop Automation", "Browser Control", "Speech Recognition", "FastAPI", "Tkinter / Modern UI"].map((t) => (
              <span className="tech-chip" key={t}>{t}</span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flagship-actions">
            <a
              href="https://github.com/muhammaddanial104"
              target="_blank"
              rel="noreferrer"
              className="btn-primary-glow"
            >
              View on GitHub
            </a>
            <button
              className="btn-outline-glass"
              onClick={() =>
                setSelectedModal({
                  title: "NOVA AI 🤖",
                  badge: "Autonomous AI Desktop Assistant",
                  image: "/images/nova-preview.jpg",
                  problem: "Constant context-switching across browser, terminal, and local file explorer wastes hours of daily focus.",
                  solution: "Engineered a local desktop AI assistant with voice recognition and system tool-calling hooks.",
                  flow: "Voice / Text Input → Speech Parser → ReAct Agent → Local OS Hooks → Execution Feedback",
                  tech: ["Python", "LangChain", "OpenAI GPT-4o", "FastAPI", "PyAutoGUI", "Whisper"],
                  result: "Voice-driven OS control and automated file/browser workflow execution.",
                  githubUrl: "https://github.com/muhammaddanial104",
                })
              }
            >
              Project Details
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          PROJECT 4: E-COMMERCE PLATFORMS (ITS GUJRAT)
          ══════════════════════════════════════════════════════════════ */}
      <div className="ecommerce-showcase-card">
        <div className="flagship-top-meta">
          <span className="star-tag">Featured Tech &amp; Techware</span>
          <span className="project-year">ITS Gujrat Internship</span>
        </div>

        <div className="window-frame-banner">
          <div className="window-image-wrap">
            <img
              src="/images/proj1.jpg"
              alt="MERN E-Commerce Platform"
              className="window-img"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flagship-body">
          <h3 className="flagship-title">E-Commerce Platforms (ITS Gujrat)</h3>
          <p className="flagship-description">
            2 full-featured MERN e-commerce platforms engineered during a 6-month internship at ITS Gujrat (Mar 2024 - Aug 2024) with product catalogs, JWT auth, and Stripe integration.
          </p>

          <div className="tech-chips-row">
            {["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT Auth"].map((t) => (
              <span className="tech-chip" key={t}>{t}</span>
            ))}
          </div>

          <div className="flagship-actions">
            <a
              href="https://github.com/muhammaddanial104"
              target="_blank"
              rel="noreferrer"
              className="btn-primary-glow"
            >
              Github
            </a>
            <button
              className="btn-outline-glass"
              onClick={() =>
                setSelectedModal({
                  title: "MERN E-Commerce Platforms",
                  badge: "ITS Gujrat 6-Month Internship Platforms",
                  image: "/images/proj1.jpg",
                  problem: "Commercial retail operations needed custom scalable e-commerce infrastructure with secure checkout and inventory sync.",
                  solution: "Architected 2 full-scale MERN platforms with multi-vendor support, JWT authentication, and Stripe payments.",
                  flow: "React UI → Node/Express REST API → JWT Auth → Stripe Checkout → MongoDB Cluster",
                  tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux"],
                  result: "Production platforms deployed with end-to-end payment processing and order management.",
                  githubUrl: "https://github.com/muhammaddanial104",
                })
              }
            >
              Details
            </button>
          </div>
        </div>
      </div>

      {/* Case Study Details Modal */}
      {selectedModal && (
        <div className="project-modal-overlay" onClick={() => setSelectedModal(null)}>
          <div className="project-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-row">
              <div>
                <h3 className="modal-title">{selectedModal.title}</h3>
                <span className="modal-badge">{selectedModal.badge}</span>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedModal(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {selectedModal.image && (
              <div className="modal-banner-wrap">
                <img
                  src={selectedModal.image}
                  alt={selectedModal.title}
                  className="modal-banner-img"
                />
              </div>
            )}

            <div className="modal-content-stack">
              <div className="modal-info-block">
                <h4 className="modal-block-title">1. THE PROBLEM</h4>
                <p className="modal-block-text">{selectedModal.problem}</p>
              </div>

              <div className="modal-info-block">
                <h4 className="modal-block-title">2. THE SOLUTION &amp; SYSTEM BUILT</h4>
                <p className="modal-block-text">{selectedModal.solution}</p>
              </div>

              <div className="modal-info-block">
                <h4 className="modal-block-title">3. ARCHITECTURAL WORKFLOW</h4>
                <p className="modal-block-text font-mono text-cyan">{selectedModal.flow}</p>
              </div>

              <div className="modal-info-block">
                <h4 className="modal-block-title">4. VERIFIABLE OUTCOME</h4>
                <p className="modal-block-text font-bold text-white">{selectedModal.result}</p>
              </div>

              <div className="modal-tags-row">
                {selectedModal.tech?.map((t) => (
                  <span className="tech-chip" key={t}>{t}</span>
                ))}
              </div>
            </div>

            <div className="modal-footer-row">
              <a
                href={selectedModal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary-glow"
              >
                View Source on GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
