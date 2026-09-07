// ═══════════════════════════════════════════════════
// COMPONENT: Projects.jsx — MAIN PORTFOLIO SHOWCASE
// Featured NOVA AI (Largest Card & Screenshot) + In Development Status
// Other Projects with Screenshot, Description, Tech Stack, GitHub & No fake Live Demo
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
  { name: "AI Agents",           icon: "🤖" },
];

const OTHER_PROJECTS = [
  {
    id: "proj-1",
    title: "E-Commerce Platform",
    desc: "Full-featured MERN e-commerce application with product catalog, cart system, JWT authentication, and Stripe payment integration.",
    image: "/proj1.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    githubUrl: "https://github.com/muhammaddanial104",
    liveUrl: null, // No fake live demo!
    details: "Built with secure token-based authentication, an administrative product management dashboard, relational schema modeling, and seamless checkout with Stripe webhook processing.",
  },
  {
    id: "proj-2",
    title: "AI Software Engineering Agent",
    desc: "Autonomous AI platform that writes, tests, and refactors code using LangChain and GPT-4 for automated software development tasks.",
    image: "/proj2.jpg",
    tags: ["Python", "LangChain", "OpenAI", "FastAPI", "Docker", "React"],
    githubUrl: "https://github.com/muhammaddanial104",
    liveUrl: null,
    details: "Utilizes multi-step autonomous planning, static code analysis, unit test generation, and containerized sandboxes for reliable, isolated code execution.",
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
        Engineering autonomous AI systems, intelligent desktop assistants, and scalable full-stack applications.
      </p>

      {/* ══════════════════════════════════════════════════
          FLAGSHIP FEATURED PROJECT: NOVA AI 🤖
          Largest Card & Dedicated Screenshot
          ══════════════════════════════════════════════════ */}
      <div className="nova-flagship-card">
        <div className="nova-card-header">
          <div className="nova-meta-left">
            <span className="nova-crown-tag">★ FEATURED PROJECT</span>
            <span className="nova-status-badge">🚧 In Development</span>
          </div>
          <span className="nova-year">2026</span>
        </div>

        {/* Big NOVA AI Screenshot Banner */}
        <div className="nova-screenshot-banner">
          <div className="nova-screenshot-wrap">
            <img
              src="/nova-preview.jpg"
              alt="NOVA AI Desktop Assistant Interface Screenshot"
              className="nova-screenshot-img"
              loading="lazy"
            />
            <div className="nova-screenshot-overlay">
              <span className="nova-overlay-pill">NOVA AI INTERFACE &bull; SYSTEM HUD PREVIEW</span>
            </div>
          </div>
        </div>

        {/* NOVA Content Details */}
        <div className="nova-content-details">
          <h3 className="nova-title">NOVA AI 🤖</h3>
          <h4 className="nova-subtitle">Autonomous AI Desktop Assistant &amp; Automation Engine</h4>

          <p className="nova-description">
            An AI-powered desktop assistant designed to control your computer, manage files, interact with browsers, assist with coding, generate content and automate tasks.
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
