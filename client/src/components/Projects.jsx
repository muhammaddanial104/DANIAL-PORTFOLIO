// ═══════════════════════════════════════════════════
// COMPONENT: Projects.jsx — CASE STUDIES ARCHITECTURE
// Aligned with PDF Masterplan: Problem → Solution → Architecture → Stack → Result
// Flagship 1: NOVA AI (Featured Project Case Study Treatment)
// Flagship 2: AEGIS-AI (Autonomous SOC & Cyber Defense)
// Flagship 3: AUTO-DEV AI (Autonomous Software Engineering Agent)
// Other Noteworthy Projects: What problem? What did I build? What technologies? What result?
// ═══════════════════════════════════════════════════
import { useState } from "react";

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
  { name: "Multi-Agent Swarm",   icon: "🤖" },
];

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

const OTHER_PROJECTS = [
  {
    id: "proj-1",
    title: "E-Commerce Platforms (ITS Gujrat)",
    problem: "Local commerce required high-performance digital stores with instant catalog lookup, secure checkout, and resilient order fulfillment.",
    solution: "Architected 2 full-featured production MERN platforms during a 6-month software engineering internship at ITS Gujrat (Mar 2024 – Aug 2024).",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Stripe API", "JWT Auth"],
    result: "Full checkout lifecycle with sub-second product filtering, resilient Stripe webhook processing, and tokenized session security.",
    image: "/images/proj1.jpg",
    githubUrl: "https://github.com/muhammaddanial104",
    liveUrl: null,
  },
  {
    id: "proj-3",
    title: "AI Content Creation Agent",
    problem: "Manual copywriting, scriptwriting, and multi-platform media drafting consumes hours of marketing bandwidth daily.",
    solution: "Engineered an asynchronous multi-modal AI generation engine that transforms briefs into articles, video scripts, and social carousels.",
    tech: ["Python", "OpenAI API", "Django", "Celery", "Redis", "React"],
    result: "Eliminated manual content drafting bottlenecks with background queue rendering and customized brand voice constraints.",
    image: "/images/proj3.jpg",
    githubUrl: "https://github.com/muhammaddanial104",
    liveUrl: null,
  },
  {
    id: "proj-4",
    title: "Full Stack SaaS Platform",
    problem: "Multi-tenant cloud apps often struggle with isolated data access, complex billing states, and slow server response times.",
    solution: "Built a high-throughput cloud web application with server-side rendering, role-based access control (RBAC), and subscription workflows.",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    result: "High-throughput server rendering with sub-second page transitions and secure multi-tenant isolation.",
    image: "/images/proj4.jpg",
    githubUrl: "https://github.com/muhammaddanial104",
    liveUrl: null,
  },
];

export default function Projects() {
  const [selectedModal, setSelectedModal] = useState(null);
  const [filter, setFilter] = useState("all");

  return (
    <section id="projects" className="section projects-section">
      {/* Reference Category Tag */}
      <div className="section-tag-row">
        <span className="section-num-tag">03 | Projects</span>
      </div>

      {/* Header with Title and Filter Tabs (Reference Match) */}
      <div className="projects-header-row">
        <div>
          <h2 className="projects-main-title">
            Featured <span className="accent-gradient">Projects</span>
          </h2>
          <p className="projects-subtitle-text">
            Here are some of my best projects. Each one was built with passion, problem-solving, and a focus on real-world impact.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="projects-filter-pills">
          <button
            className={`proj-filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`proj-filter-btn ${filter === "web" ? "active" : ""}`}
            onClick={() => setFilter("web")}
          >
            Web Apps
          </button>
          <button
            className={`proj-filter-btn ${filter === "ai" ? "active" : ""}`}
            onClick={() => setFilter("ai")}
          >
            AI
          </button>
          <button
            className={`proj-filter-btn ${filter === "fullstack" ? "active" : ""}`}
            onClick={() => setFilter("fullstack")}
          >
            Full Stack
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          FLAGSHIP 1: NOVA AI 🤖 (Large Case-Study Treatment)
          PDF Section 06: Give Nova AI a large case-study treatment with
          problem, solution, architecture, stack, demo and repository
          ══════════════════════════════════════════════════ */}
      <div className="nova-flagship-card case-study-card">
        <div className="nova-card-header">
          <div className="nova-meta-left">
            <span className="nova-crown-tag">★ FEATURED CASE STUDY</span>
            <span className="nova-status-badge">🤖 Autonomous Desktop Engine</span>
          </div>
          <span className="nova-year">2026</span>
        </div>

        {/* Desktop Window Frame Screenshot */}
        <div className="nova-screenshot-banner">
          <div className="nova-window-bar">
            <div className="nova-window-dots">
              <span className="w-dot dot-red" />
              <span className="w-dot dot-yellow" />
              <span className="w-dot dot-green" />
            </div>
            <span className="nova-window-title">NOVA AI &bull; Autonomous Desktop Assistant &amp; Workflow Engine</span>
            <span className="nova-window-status">● SYSTEM ACTIVE</span>
          </div>
          <div className="nova-screenshot-wrap">
            <img
              src="/images/nova-preview.jpg"
              alt="NOVA AI Desktop Assistant Interface Screenshot"
              className="nova-screenshot-img"
              loading="lazy"
            />
          </div>
        </div>

        {/* Case Study Details Grid */}
        <div className="nova-content-details">
          <div className="case-study-hero-title">
            <h3 className="nova-title">NOVA AI 🤖</h3>
            <span className="case-study-type-badge">Autonomous Desktop &amp; Multi-Tool Automation</span>
          </div>
          <h4 className="nova-subtitle">
            Autonomous AI Desktop Assistant, Browser Controller &amp; Workflow Execution Engine
          </h4>

          {/* Structured Case Study Blocks */}
          <div className="case-study-breakdown">
            {/* Problem */}
            <div className="cs-block cs-problem">
              <div className="cs-block-header">
                <span className="cs-icon">⚠️</span>
                <span className="cs-tag">THE PROBLEM</span>
              </div>
              <p className="cs-text">
                Daily computer work involves constant context-switching across fragmented apps: manually organizing files, orchestrating repetitive browser workflows, executing CLI commands, and generating media assets across multiple standalone tools. This manual overhead burns hours of productive focus.
              </p>
            </div>

            {/* Solution */}
            <div className="cs-block cs-solution">
              <div className="cs-block-header">
                <span className="cs-icon">💡</span>
                <span className="cs-tag">THE SOLUTION</span>
              </div>
              <p className="cs-text">
                Engineered <strong>NOVA AI</strong> — a unified desktop intelligence system with voice and natural text input. NOVA bridges LLM reasoning with native OS hooks, browser automation, and automated video/content generation, allowing users to orchestrate complex multi-step tasks in natural language.
              </p>
            </div>

            {/* Architecture Workflow */}
            <div className="cs-block cs-workflow">
              <div className="cs-block-header">
                <span className="cs-icon">📐</span>
                <span className="cs-tag">SYSTEM ARCHITECTURE &amp; WORKFLOW</span>
              </div>
              <div className="cs-flow-steps">
                <div className="cs-step">
                  <span className="cs-step-num">1</span>
                  <span className="cs-step-name">Natural Voice / Text</span>
                  <span className="cs-step-sub">Speech-to-text &amp; prompt parser</span>
                </div>
                <span className="cs-step-arrow">→</span>
                <div className="cs-step">
                  <span className="cs-step-num">2</span>
                  <span className="cs-step-name">Intent &amp; Tool Planner</span>
                  <span className="cs-step-sub">LangChain LLM reasoning loop</span>
                </div>
                <span className="cs-step-arrow">→</span>
                <div className="cs-step">
                  <span className="cs-step-num">3</span>
                  <span className="cs-step-name">OS &amp; Browser Engine</span>
                  <span className="cs-step-sub">Direct file &amp; web automation</span>
                </div>
                <span className="cs-step-arrow">→</span>
                <div className="cs-step">
                  <span className="cs-step-num">4</span>
                  <span className="cs-step-name">Execution Output</span>
                  <span className="cs-step-sub">Task verification &amp; audio feedback</span>
                </div>
              </div>
            </div>

            {/* Measurable Result */}
            <div className="cs-block cs-result">
              <div className="cs-block-header">
                <span className="cs-icon">📈</span>
                <span className="cs-tag">VERIFIABLE RESULT</span>
              </div>
              <p className="cs-text">
                Unifies 12+ separate manual tasks into a single responsive voice/chat interface. Automates repetitive file parsing, web information retrieval, and video creation pipelines with sub-second dispatch latency.
              </p>
            </div>
          </div>

          {/* 12 Features Grid */}
          <div className="nova-features-wrap">
            <span className="nova-features-label">12 CORE ENGINE CAPABILITIES:</span>
            <div className="nova-features-grid">
              {NOVA_FEATURES.map(f => (
                <div className="nova-feat-pill" key={f.name}>
                  <span className="nova-feat-icon">{f.icon}</span>
                  <span className="nova-feat-text">{f.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="nova-tech-row">
            <span className="tech-chip">Python</span>
            <span className="tech-chip">LangChain</span>
            <span className="tech-chip">OpenAI GPT-4o</span>
            <span className="tech-chip">Desktop Automation</span>
            <span className="tech-chip">Browser Control</span>
            <span className="tech-chip">Speech Recognition</span>
            <span className="tech-chip">FastAPI</span>
            <span className="tech-chip">Tkinter / Modern UI</span>
          </div>

          {/* Actions */}
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
                setSelectedModal({
                  title: "NOVA AI 🤖",
                  badge: "Autonomous Desktop Assistant & Automation Engine",
                  image: "/images/nova-preview.jpg",
                  problem: "Constant context-switching across browser tabs, file managers, and standalone media generation tools causes severe operational friction.",
                  solution: "Engineered a local desktop AI agent with native OS capabilities, web scraping, and voice interaction.",
                  flow: "User Voice/Text Command → Intent Analysis → Tool Selection → OS/Browser Execution → Feedback Output",
                  tech: ["Python", "LangChain", "OpenAI GPT-4o", "SpeechRecognition", "PyAutoGUI", "Selenium", "FastAPI"],
                  result: "Replaced 12 separate manual workflows with zero-friction natural language desktop orchestration.",
                  githubUrl: "https://github.com/muhammaddanial104",
                })
              }
            >
              Full Case Study Breakdown
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          FLAGSHIP 2: AEGIS-AI 🛡️ (Cyber Defense Case Study)
          ══════════════════════════════════════════════════ */}
      <div className="nova-flagship-card aegis-flagship-card case-study-card">
        <div className="nova-card-header">
          <div className="nova-meta-left">
            <span className="nova-crown-tag aegis-crown-tag">★ KEY CASE STUDY</span>
            <span className="nova-status-badge aegis-status-badge">🛡️ Active Defense System</span>
          </div>
          <span className="nova-year">2026</span>
        </div>

        {/* Window Banner */}
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
              src="/images/aegis-preview.jpg"
              alt="AEGIS-AI Autonomous Cyber Defense Platform Screenshot"
              className="nova-screenshot-img"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content Details */}
        <div className="nova-content-details">
          <div className="case-study-hero-title">
            <h3 className="nova-title">AEGIS-AI 🛡️</h3>
            <span className="case-study-type-badge" style={{ borderColor: "rgba(168, 85, 247, 0.4)", color: "#c084fc" }}>
              Enterprise SOC &amp; Self-Healing AI
            </span>
          </div>
          <h4 className="nova-subtitle aegis-subtitle">
            Autonomous Cyber Defense &amp; Self-Healing SOC Platform
          </h4>

          {/* Structured Case Study Blocks */}
          <div className="case-study-breakdown">
            <div className="cs-block cs-problem">
              <div className="cs-block-header">
                <span className="cs-icon">⚠️</span>
                <span className="cs-tag">THE PROBLEM</span>
              </div>
              <p className="cs-text">
                Security Operation Centers are bombarded by thousands of telemetry logs and alerts daily. Human analysts struggle with alert fatigue, and manual vulnerability patching takes hours or days — leaving critical windows open for zero-day exploitation and data exfiltration.
              </p>
            </div>

            <div className="cs-block cs-solution">
              <div className="cs-block-header">
                <span className="cs-icon">💡</span>
                <span className="cs-tag">THE SOLUTION</span>
              </div>
              <p className="cs-text">
                Built <strong>AEGIS-AI</strong> — a real-time autonomous security mesh combining network packet telemetry with specialized AI agents. It identifies multi-vector attacks, isolates compromised nodes, synthesizes AST-level code fixes, and executes verified patches inside sandboxed Docker containers before production merge.
              </p>
            </div>

            <div className="cs-block cs-workflow">
              <div className="cs-block-header">
                <span className="cs-icon">📐</span>
                <span className="cs-tag">SYSTEM ARCHITECTURE &amp; WORKFLOW</span>
              </div>
              <div className="cs-flow-steps">
                <div className="cs-step">
                  <span className="cs-step-num">1</span>
                  <span className="cs-step-name">Telemetry Ingestion</span>
                  <span className="cs-step-sub">Suricata &amp; Zeek live packet logs</span>
                </div>
                <span className="cs-step-arrow">→</span>
                <div className="cs-step">
                  <span className="cs-step-num">2</span>
                  <span className="cs-step-name">Threat Agent Mesh</span>
                  <span className="cs-step-sub">Phishing &amp; anomaly classification</span>
                </div>
                <span className="cs-step-arrow">→</span>
                <div className="cs-step">
                  <span className="cs-step-num">3</span>
                  <span className="cs-step-name">Docker Sandbox Patch</span>
                  <span className="cs-step-sub">Ephemeral containerized test</span>
                </div>
                <span className="cs-step-arrow">→</span>
                <div className="cs-step">
                  <span className="cs-step-num">4</span>
                  <span className="cs-step-name">Automated Defense</span>
                  <span className="cs-step-sub">Zero-day shield &amp; self-healing</span>
                </div>
              </div>
            </div>

            <div className="cs-block cs-result">
              <div className="cs-block-header">
                <span className="cs-icon">📈</span>
                <span className="cs-tag">VERIFIABLE RESULT</span>
              </div>
              <p className="cs-text">
                Compresses incident triage and patch verification turnaround from several hours down to sub-minute autonomous detection and isolated container verification with zero downtime.
              </p>
            </div>
          </div>

          {/* 12 Features Grid */}
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

          {/* Tech Stack */}
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

          {/* Actions */}
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
                setSelectedModal({
                  title: "AEGIS-AI 🛡️",
                  badge: "Autonomous Cyber Defense & Self-Healing SOC Platform",
                  image: "/images/aegis-preview.jpg",
                  problem: "Manual security log parsing causes alert fatigue and slow incident remediation, leaving systems exposed.",
                  solution: "Engineered an autonomous multi-agent defense system that ingests telemetry, isolates threats, and deploys sandboxed AST patches.",
                  flow: "Packet Stream → Multi-Agent Triage → Quarantine → AST Patching → Docker Verification → Merge",
                  tech: ["Python", "FastAPI", "LangChain", "Claude 3.5 Sonnet", "Suricata", "Zeek", "Docker", "ChromaDB"],
                  result: "Accelerates incident triage from hours to sub-minute verified containerized remediation.",
                  githubUrl: "https://github.com/muhammaddanial104",
                })
              }
            >
              Full Case Study Breakdown
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          FLAGSHIP 3: AUTO-DEV AI 💻 (Software Engineering Agent)
          ══════════════════════════════════════════════════ */}
      <div className="nova-flagship-card autodev-flagship-card case-study-card">
        <div className="nova-card-header">
          <div className="nova-meta-left">
            <span className="nova-crown-tag autodev-crown-tag">★ KEY CASE STUDY</span>
            <span className="nova-status-badge autodev-status-badge">⚡ Autonomous Coding Engine</span>
          </div>
          <span className="nova-year">2026</span>
        </div>

        {/* Window Banner */}
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
              src="/images/coder-agent-preview.jpg"
              alt="AUTO-DEV AI Software Engineering Agent IDE Interface"
              className="nova-screenshot-img"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content Details */}
        <div className="nova-content-details">
          <div className="case-study-hero-title">
            <h3 className="nova-title">AUTO-DEV AI 💻</h3>
            <span className="case-study-type-badge" style={{ borderColor: "rgba(59, 130, 246, 0.4)", color: "#60a5fa" }}>
              Autonomous Code Synthesis &amp; Testing
            </span>
          </div>
          <h4 className="nova-subtitle" style={{ color: "#60a5fa" }}>
            Autonomous AI Software Engineer with Containerized Verification
          </h4>

          {/* Structured Case Study Blocks */}
          <div className="case-study-breakdown">
            <div className="cs-block cs-problem">
              <div className="cs-block-header">
                <span className="cs-icon">⚠️</span>
                <span className="cs-tag">THE PROBLEM</span>
              </div>
              <p className="cs-text">
                Modern software engineering teams spend substantial engineering hours on repetitive boilerplate implementation, reproducing obscure edge-case bug tickets, and writing unit test suites across multi-file codebases.
              </p>
            </div>

            <div className="cs-block cs-solution">
              <div className="cs-block-header">
                <span className="cs-icon">💡</span>
                <span className="cs-tag">THE SOLUTION</span>
              </div>
              <p className="cs-text">
                Developed <strong>AUTO-DEV AI</strong> — an autonomous software engineering agent that parses codebases into Abstract Syntax Trees (AST), generates targeted test cases, implements verified code solutions, and executes isolated pytest test runs inside Docker containers before issuing Git pull requests.
              </p>
            </div>

            <div className="cs-block cs-workflow">
              <div className="cs-block-header">
                <span className="cs-icon">📐</span>
                <span className="cs-tag">SYSTEM ARCHITECTURE &amp; WORKFLOW</span>
              </div>
              <div className="cs-flow-steps">
                <div className="cs-step">
                  <span className="cs-step-num">1</span>
                  <span className="cs-step-name">Task Ingestion</span>
                  <span className="cs-step-sub">Requirement &amp; AST repo analysis</span>
                </div>
                <span className="cs-step-arrow">→</span>
                <div className="cs-step">
                  <span className="cs-step-num">2</span>
                  <span className="cs-step-name">Planning &amp; Tests</span>
                  <span className="cs-step-sub">Multi-step plan &amp; unit test synthesis</span>
                </div>
                <span className="cs-step-arrow">→</span>
                <div className="cs-step">
                  <span className="cs-step-num">3</span>
                  <span className="cs-step-name">Docker Sandbox</span>
                  <span className="cs-step-sub">Isolated containerized test runner</span>
                </div>
                <span className="cs-step-arrow">→</span>
                <div className="cs-step">
                  <span className="cs-step-num">4</span>
                  <span className="cs-step-name">Git Commit / PR</span>
                  <span className="cs-step-sub">Verified diffs ready for review</span>
                </div>
              </div>
            </div>

            <div className="cs-block cs-result">
              <div className="cs-block-header">
                <span className="cs-icon">📈</span>
                <span className="cs-tag">VERIFIABLE RESULT</span>
              </div>
              <p className="cs-text">
                Guarantees zero-regression code generation by enforcing strict containerized test suite execution before changes are approved or committed to version control.
              </p>
            </div>
          </div>

          {/* 12 Features Grid */}
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

          {/* Tech Stack */}
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

          {/* Actions */}
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
              Full Case Study Breakdown
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          OTHER NOTEWORTHY PROJECTS SECTION
          PDF Section 07: Every project answers: What problem? What did I build? What technologies? What result?
          ══════════════════════════════════════════════════ */}
      <h3 className="other-projects-heading">ADDITIONAL VERIFIED PROJECTS</h3>
      <p className="other-projects-sub">
        Every project below answers: What problem? What did I build? What technologies? What result?
      </p>

      <div className="other-projects-grid">
        {OTHER_PROJECTS.map((p, idx) => (
          <div className="project-card case-study-mini-card" key={p.id}>
            <div className="proj-thumb-wrap">
              <img
                src={p.image}
                alt={p.title}
                className="proj-thumb"
                loading="lazy"
                onError={e => {
                  e.target.src = `/images/proj${(idx % 4) + 1}.jpg`;
                }}
              />
            </div>

            <div className="proj-body">
              <h4 className="proj-title">{p.title}</h4>

              {/* What Problem */}
              <div className="mini-cs-row">
                <span className="mini-cs-label text-amber">PROBLEM:</span>
                <p className="mini-cs-val">{p.problem}</p>
              </div>

              {/* What Did I Build */}
              <div className="mini-cs-row">
                <span className="mini-cs-label text-cyan">BUILT:</span>
                <p className="mini-cs-val">{p.solution}</p>
              </div>

              {/* Measurable Result */}
              <div className="mini-cs-row">
                <span className="mini-cs-label text-emerald">RESULT:</span>
                <p className="mini-cs-val">{p.result}</p>
              </div>

              {/* Tech Stack */}
              <div className="proj-tags">
                {p.tech.map(t => (
                  <span className="proj-tag" key={t}>{t}</span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="proj-card-actions">
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-btn proj-btn-gh"
                >
                  GitHub Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Details Modal */}
      {selectedModal && (
        <div className="proj-modal-backdrop" onClick={() => setSelectedModal(null)}>
          <div className="proj-modal" onClick={e => e.stopPropagation()}>
            <div className="proj-modal-header">
              <div>
                <h3>{selectedModal.title}</h3>
                <span className="nova-status-badge modal-status" style={{ marginTop: "0.4rem", display: "inline-block" }}>
                  {selectedModal.badge}
                </span>
              </div>
              <button
                className="proj-modal-close"
                onClick={() => setSelectedModal(null)}
              >
                ✕
              </button>
            </div>

            {selectedModal.image && (
              <div className="modal-image-wrap">
                <img
                  src={selectedModal.image}
                  alt={selectedModal.title}
                  className="modal-image"
                />
              </div>
            )}

            <div className="proj-modal-details-box">
              <h4>1. THE PROBLEM</h4>
              <p>{selectedModal.problem}</p>
            </div>

            <div className="proj-modal-details-box">
              <h4>2. THE SOLUTION &amp; SYSTEM BUILT</h4>
              <p>{selectedModal.solution}</p>
            </div>

            <div className="proj-modal-details-box">
              <h4>3. ARCHITECTURAL WORKFLOW</h4>
              <p className="font-mono text-cyan" style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>{selectedModal.flow}</p>
            </div>

            <div className="proj-modal-details-box">
              <h4>4. VERIFIABLE OUTCOME</h4>
              <p>{selectedModal.result}</p>
            </div>

            <div className="proj-modal-tags">
              {selectedModal.tech?.map(t => (
                <span className="tech-chip" key={t}>{t}</span>
              ))}
            </div>

            <div className="proj-modal-footer">
              <a
                href={selectedModal.githubUrl}
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
