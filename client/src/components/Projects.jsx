// ═══════════════════════════════════════════════════
// COMPONENT: Projects.jsx — MAIN PORTFOLIO SHOWCASE
// Featured Key Projects:
// 1. AEGIS-AI 🛡️ (Cyber Defense & Self-Healing SOC)
// 2. AUTO-DEV AI 💻 (Autonomous AI Software Engineering Agent)
// 3. NOVA AI 🤖 (Autonomous Desktop Assistant & Automation Engine)
// Other Noteworthy Projects with clean screenshots & verified links
// ═══════════════════════════════════════════════════
import { useState } from "react";

const AEGIS_FEATURES = [
  { name: "Threat Detection",       icon: "🛡️" },
  { name: "Phishing Defense",       icon: "📧" },
  { name: "Fraud & Anomaly AI",     icon: "🔍" },
  { name: "Autonomous Bug Fix",     icon: "🩹" },
  { name: "AI Self-Healing",        icon: "⚡" },
  { name: "Vulnerability Scan",     icon: "🔬" },
  { name: "SOC Telemetry",          icon: "📊" },
  { name: "Incident Response",      icon: "🤖" },
  { name: "Zero-Day Shield",        icon: "🛑" },
  { name: "Sandboxed Patches",      icon: "📦" },
  { name: "Security Audits",        icon: "📋" },
  { name: "SecOps Multi-Agent",     icon: "🌐" },
];

const AUTODEV_FEATURES = [
  { name: "Multi-Step Planning",    icon: "📋" },
  { name: "Autonomous Coding",      icon: "💻" },
  { name: "AST Code Parsing",       icon: "🌳" },
  { name: "Unit Test Generator",    icon: "🧪" },
  { name: "Docker Sandbox Exec",    icon: "📦" },
  { name: "Git Diffs & Commits",    icon: "🔀" },
  { name: "Static Type Analysis",   icon: "🔍" },
  { name: "Auto Bug Refactoring",   icon: "🩹" },
  { name: "Telemetry & Profiling",  icon: "📊" },
  { name: "Dependency Resolver",    icon: "⚙️" },
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
  { name: "Video Generator",     icon: "🎥" },
  { name: "YouTube Automation",  icon: "▶️" },
  { name: "TikTok Automation",   icon: "📱" },
  { name: "Facebook Automation", icon: "👥" },
  { name: "Task Automation",     icon: "⚙️" },
  { name: "AI Agents",           icon: "🤖" },
];

const OTHER_PROJECTS = [
  {
    id: "proj-1",
    title: "E-Commerce Platforms (ITS Gujrat)",
    desc: "2 full-featured MERN e-commerce platforms engineered during a 6-month internship at ITS Gujrat (Mar 2024 – Aug 2024) with product catalogs, JWT auth, and Stripe integration.",
    image: "/proj1.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT Auth"],
    githubUrl: "https://github.com/muhammaddanial104",
    liveUrl: null, // No fake live demo!
    details: "Built during a 6-month intensive MERN Stack software engineering internship at ITS Gujrat (March 2024 – August 2024). Completed 2 full production-ready platforms featuring secure token-based authentication, admin product management dashboards, high-efficiency MongoDB relational schemas, and checkout processing with Stripe webhooks.",
  },
  {
    id: "proj-3",
    title: "AI Content Creation Agent",
    desc: "Multi-modal AI engine generating high-engagement marketing copy, social media posts, and scripts through custom AI agent workflows.",
    image: "/proj3.jpg",
    tags: ["Python", "OpenAI", "Django", "Celery", "Redis", "React"],
    githubUrl: "https://github.com/muhammaddanial104",
    liveUrl: null,
    details: "Orchestrates asynchronous content generation pipelines with Celery and Redis, capable of generating niche-tailored articles, video scripts, and social carousel posts in seconds.",
  },
  {
    id: "proj-4",
    title: "Full Stack SaaS Platform",
    desc: "Scalable cloud SaaS web platform featuring multi-tenant authentication, subscription billing, and real-time user analytics.",
    image: "/proj4.jpg",
    tags: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/muhammaddanial104",
    liveUrl: null,
    details: "Architected for high throughput with server-side rendering, responsive dark mode interface, role-based access control, and real-time metric tracking.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section projects-section">
      {/* Header */}
      <div className="section-header">
        <span className="section-num">03</span>
        <h2 className="section-title">
          FEATURED <span className="accent">PROJECTS</span>
        </h2>
        <div className="section-line" />
      </div>

      <p className="projects-subtitle">
        Engineering autonomous AI systems, enterprise cyber defense platforms, and autonomous software engineering agents.
      </p>

      {/* ══════════════════════════════════════════════════
          FLAGSHIP PROJECT 1: AEGIS-AI 🛡️
          Autonomous Cyber Defense & Self-Healing SOC Platform
          ══════════════════════════════════════════════════ */}
      <div className="nova-flagship-card aegis-flagship-card">
        <div className="nova-card-header">
          <div className="nova-meta-left">
            <span className="nova-crown-tag aegis-crown-tag">★ KEY FEATURED PROJECT</span>
            <span className="nova-status-badge aegis-status-badge">🛡️ Active Defense System</span>
          </div>
          <span className="nova-year">2026</span>
        </div>

        {/* Desktop Window Frame with Real Generated Screenshot */}
        <div className="nova-screenshot-banner">
          <div className="nova-window-bar">
            <div className="nova-window-dots">
              <span className="w-dot dot-red" />
              <span className="w-dot dot-yellow" />
              <span className="w-dot dot-green" />
            </div>
            <span className="nova-window-title">AEGIS-AI &bull; Autonomous SOC &amp; Cyber Defense Operations</span>
            <span className="nova-window-status">● ARMED &amp; SECURED</span>
          </div>
          <div className="nova-screenshot-wrap">
            <img
              src="/aegis-preview.jpg"
              alt="AEGIS-AI Autonomous Cyber Defense Platform Interface"
              className="nova-screenshot-img"
              loading="lazy"
            />
          </div>
        </div>

        {/* AEGIS Content Details */}
        <div className="nova-content-details">
          <h3 className="nova-title">AEGIS-AI 🛡️</h3>
          <h4 className="nova-subtitle aegis-subtitle">Autonomous AI Cyber Defense &amp; Self-Healing SOC Platform</h4>

          <p className="nova-description">
            An enterprise-grade autonomous cyber defense and Security Operations Center (SOC) platform engineered to detect multi-vector cyber attacks, phishing emails, and malicious fraud in real time. Features autonomous vulnerability detection, automated bug fixing, and sandboxed self-healing system remediation.
          </p>

          {/* 12 Features Badges */}
          <div className="nova-features-wrap">
            <span className="nova-features-label">12 CORE DEFENSE CAPABILITIES:</span>
            <div className="nova-features-grid">
              {AEGIS_FEATURES.map(f => (
                <div className="nova-feat-pill" key={f.name}>
                  <span className="nova-feat-icon">{f.icon}</span>
                  <span className="nova-feat-text">{f.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="nova-tech-row">
            <span className="tech-chip">Python</span>
            <span className="tech-chip">FastAPI</span>
            <span className="tech-chip">LangChain / LangGraph</span>
            <span className="tech-chip">Claude 3.5 Sonnet</span>
            <span className="tech-chip">Suricata / Zeek</span>
            <span className="tech-chip">Docker Sandboxes</span>
            <span className="tech-chip">ChromaDB</span>
            <span className="tech-chip">React / Tailwind</span>
          </div>

          {/* Action Buttons */}
          <div className="nova-actions-row">
            <a
              href="https://github.com/muhammaddanial104"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <span className="btn-glow" />
              View on GitHub
            </a>
            <button
              className="btn btn-outline"
              onClick={() =>
                setSelectedProject({
                  title: "AEGIS-AI 🛡️",
                  desc: "An enterprise-grade autonomous cyber defense and Security Operations Center (SOC) platform engineered to detect multi-vector cyber attacks, phishing emails, and fraudulent behaviors in real time.",
                  tags: ["Python", "FastAPI", "LangChain", "Claude 3.5 Sonnet", "Suricata / Zeek", "Docker Sandboxes", "ChromaDB"],
                  status: "🛡️ Active Defense System",
                  image: "/aegis-preview.jpg",
                  details: "AEGIS-AI connects network packet analyzers (Suricata/Zeek) and system telemetry with a multi-agent AI mesh. When an intrusion, zero-day threat, or malicious payload is spotted, specialized agents isolate the affected node, generate an AST-level source code patch, verify it in an ephemeral Docker sandbox, and deploy fixes automatically.",
                  githubUrl: "https://github.com/muhammaddanial104",
                  features: AEGIS_FEATURES,
                })
              }
            >
              Project Details
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          FLAGSHIP PROJECT 2: AUTO-DEV AI 💻
          Autonomous AI Software Engineering Agent
          ══════════════════════════════════════════════════ */}
      <div className="nova-flagship-card autodev-flagship-card">
        <div className="nova-card-header">
          <div className="nova-meta-left">
            <span className="nova-crown-tag autodev-crown-tag">★ KEY FEATURED PROJECT</span>
            <span className="nova-status-badge autodev-status-badge">⚡ Autonomous Coding Engine</span>
          </div>
          <span className="nova-year">2026</span>
        </div>

        {/* Desktop Window Frame with Real Generated Screenshot */}
        <div className="nova-screenshot-banner">
          <div className="nova-window-bar">
            <div className="nova-window-dots">
              <span className="w-dot dot-red" />
              <span className="w-dot dot-yellow" />
              <span className="w-dot dot-green" />
            </div>
            <span className="nova-window-title">AUTO-DEV AI &bull; Autonomous Software Engineering Agent</span>
            <span className="nova-window-status">● AGENT ACTIVE</span>
          </div>
          <div className="nova-screenshot-wrap">
            <img
              src="/coder-agent-preview.jpg"
              alt="AUTO-DEV AI Autonomous Software Engineering Agent IDE Interface"
              className="nova-screenshot-img"
              loading="lazy"
            />
          </div>
        </div>

        {/* AUTO-DEV Content Details */}
        <div className="nova-content-details">
          <h3 className="nova-title">AUTO-DEV AI 💻</h3>
          <h4 className="nova-subtitle" style={{ color: "#60a5fa" }}>Autonomous AI Software Engineering Agent &amp; Code Generation Platform</h4>

          <p className="nova-description">
            An autonomous AI software engineer designed to plan, write, test, debug, and refactor production codebases. Features multi-step reasoning, AST-level syntax tree parsing, automated pytest test suite generation, and containerized Docker sandboxes for fully isolated, verified code execution.
          </p>

          {/* 12 Features Badges */}
          <div className="nova-features-wrap">
            <span className="nova-features-label">12 CORE ENGINEERING CAPABILITIES:</span>
            <div className="nova-features-grid">
              {AUTODEV_FEATURES.map(f => (
                <div className="nova-feat-pill" key={f.name}>
                  <span className="nova-feat-icon">{f.icon}</span>
                  <span className="nova-feat-text">{f.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="nova-tech-row">
            <span className="tech-chip">Python</span>
            <span className="tech-chip">LangChain / LangGraph</span>
            <span className="tech-chip">OpenAI GPT-4 / Claude</span>
            <span className="tech-chip">Tree-sitter AST</span>
            <span className="tech-chip">Docker Sandboxes</span>
            <span className="tech-chip">Pytest Suite</span>
            <span className="tech-chip">FastAPI</span>
            <span className="tech-chip">Git Automation</span>
          </div>

          {/* Action Buttons */}
          <div className="nova-actions-row">
            <a
              href="https://github.com/muhammaddanial104"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <span className="btn-glow" />
              View on GitHub
            </a>
            <button
              className="btn btn-outline"
              onClick={() =>
                setSelectedProject({
                  title: "AUTO-DEV AI 💻",
                  desc: "Autonomous AI software engineer that reads requirements, explores multi-file repos, parses abstract syntax trees (AST), generates unit tests, and implements verified code changes.",
                  tags: ["Python", "LangChain", "OpenAI GPT-4", "FastAPI", "Docker", "Tree-sitter", "Pytest"],
                  status: "⚡ Autonomous Coding Engine",
                  image: "/coder-agent-preview.jpg",
                  details: "AUTO-DEV AI operates with an autonomous agent loop: Planning -> AST Analysis -> Code Synthesis -> Containerized Test Execution -> Self-Correction -> Git Branch / Pull Request generation. All code is verified within isolated Docker containers to guarantee zero regressions.",
                  githubUrl: "https://github.com/muhammaddanial104",
                  features: AUTODEV_FEATURES,
                })
              }
            >
              Project Details
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          FLAGSHIP PROJECT 3: NOVA AI 🤖
          Autonomous AI Desktop Assistant & Automation Engine
          ══════════════════════════════════════════════════ */}
      <div className="nova-flagship-card">
        <div className="nova-card-header">
          <div className="nova-meta-left">
            <span className="nova-crown-tag">★ KEY FEATURED PROJECT</span>
            <span className="nova-status-badge">🚧 In Development</span>
          </div>
          <span className="nova-year">2026</span>
        </div>

        {/* Clean Window Frame around Screenshot */}
        <div className="nova-screenshot-banner">
          <div className="nova-window-bar">
            <div className="nova-window-dots">
              <span className="w-dot dot-red" />
              <span className="w-dot dot-yellow" />
              <span className="w-dot dot-green" />
            </div>
            <span className="nova-window-title">NOVA AI &bull; Desktop Assistant Interface</span>
            <span className="nova-window-status">● ACTIVE</span>
          </div>
          <div className="nova-screenshot-wrap">
            <img
              src="/nova-preview.jpg"
              alt="NOVA AI Desktop Assistant Interface Screenshot"
              className="nova-screenshot-img"
              loading="lazy"
            />
          </div>
        </div>

        {/* NOVA Content Details */}
        <div className="nova-content-details">
          <h3 className="nova-title">NOVA AI 🤖</h3>
          <h4 className="nova-subtitle">Autonomous AI Desktop Assistant &amp; Automation Engine</h4>

          <p className="nova-description">
            An AI-powered desktop assistant designed to control your computer, manage files, interact with browsers, assist with coding, generate content and automate complex workflows.
          </p>

          {/* 12 Features Badges */}
          <div className="nova-features-wrap">
            <span className="nova-features-label">12 CORE CAPABILITIES &amp; FEATURES:</span>
            <div className="nova-features-grid">
              {NOVA_FEATURES.map(f => (
                <div className="nova-feat-pill" key={f.name}>
                  <span className="nova-feat-icon">{f.icon}</span>
                  <span className="nova-feat-text">{f.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="nova-tech-row">
            <span className="tech-chip">Python</span>
            <span className="tech-chip">LangChain</span>
            <span className="tech-chip">OpenAI GPT-4</span>
            <span className="tech-chip">Desktop Automation</span>
            <span className="tech-chip">Browser Control</span>
            <span className="tech-chip">Speech Recognition</span>
            <span className="tech-chip">FastAPI</span>
          </div>

          {/* Action Buttons */}
          <div className="nova-actions-row">
            <a
              href="https://github.com/muhammaddanial104"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <span className="btn-glow" />
              View on GitHub
            </a>
            <button
              className="btn btn-outline"
              onClick={() =>
                setSelectedProject({
                  title: "NOVA AI 🤖",
                  desc: "An AI-powered desktop assistant designed to control your computer, manage files, interact with browsers, assist with coding, generate content and automate tasks.",
                  tags: ["Python", "LangChain", "OpenAI GPT-4", "Desktop Automation", "Speech Recognition", "FastAPI"],
                  status: "🚧 In Development",
                  image: "/nova-preview.jpg",
                  details: "NOVA AI integrates natural language voice and text input with OS-level execution hooks. It automates repetitive browsing tasks, synthesizes content, manages directory structures, and executes intelligent multi-agent tasks seamlessly on your local desktop.",
                  githubUrl: "https://github.com/muhammaddanial104",
                  features: NOVA_FEATURES,
                })
              }
            >
              Project Details
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          OTHER PROJECTS SECTION
          ══════════════════════════════════════════════════ */}
      <h3 className="other-projects-heading">OTHER NOTEWORTHY PROJECTS</h3>

      <div className="other-projects-grid">
        {OTHER_PROJECTS.map((p, idx) => (
          <div className="project-card" key={p.id}>
            {/* Screenshot */}
            <div className="proj-thumb-wrap">
              <img
                src={p.image}
                alt={p.title}
                className="proj-thumb"
                loading="lazy"
                onError={e => {
                  e.target.src = `/proj${(idx % 4) + 1}.jpg`;
                }}
              />
            </div>

            {/* Content */}
            <div className="proj-body">
              <h4 className="proj-title">{p.title}</h4>
              <p className="proj-desc">{p.desc}</p>

              {/* Tech Stack */}
              <div className="proj-tags">
                {p.tags.map(t => (
                  <span className="proj-tag" key={t}>{t}</span>
                ))}
              </div>

              {/* Action Buttons: Only actual verified links */}
              <div className="proj-card-actions">
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-btn proj-btn-gh"
                >
                  GitHub
                </a>
                <button
                  className="proj-btn proj-btn-details"
                  onClick={() => setSelectedProject(p)}
                >
                  Details
                </button>
                {/* Live Demo only if actually live */}
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-btn proj-btn-live"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      {selectedProject && (
        <div className="proj-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="proj-modal" onClick={e => e.stopPropagation()}>
            <div className="proj-modal-header">
              <h3>{selectedProject.title}</h3>
              <button
                className="proj-modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
            </div>

            {selectedProject.status && (
              <span className="nova-status-badge modal-status">
                {selectedProject.status}
              </span>
            )}

            {selectedProject.image && (
              <div className="modal-image-wrap">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="modal-image"
                />
              </div>
            )}

            <p className="proj-modal-desc">{selectedProject.desc}</p>

            <div className="proj-modal-details-box">
              <h4>ARCHITECTURE &amp; OVERVIEW</h4>
              <p>{selectedProject.details}</p>
            </div>

            {selectedProject.features && (
              <div className="proj-modal-features">
                <h4>CAPABILITIES</h4>
                <div className="nova-features-grid">
                  {selectedProject.features.map(f => (
                    <div className="nova-feat-pill" key={f.name}>
                      <span>{f.icon}</span>
                      <span>{f.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="proj-modal-tags">
              {selectedProject.tags?.map(t => (
                <span className="tech-chip" key={t}>{t}</span>
              ))}
            </div>

            <div className="proj-modal-footer">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <span className="btn-glow" />
                View Source on GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
