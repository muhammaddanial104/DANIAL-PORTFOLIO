import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import TiltCard from "./TiltCard";

const PROJECTS = [
  {
    id: "n8n-agent",
    title: "n8n Autonomous Multi-Agent Workflow Engine",
    category: "Autonomous AI & n8n Automation",
    badge: "Featured AI Pipeline",
    badgeType: "featured",
    imageWebp: "/images/coder-agent-preview.webp",
    imageJpg: "/images/coder-agent-preview.jpg",
    problem: "Manual lead triage, repetitive data formatting, and delayed customer response times create operational bottlenecks and lost conversions.",
    contribution: [
      "Constructed autonomous multi-agent pipeline in n8n utilizing custom Python execution nodes and Gen AI prompt parsing.",
      "Engineered automated webhook listeners with dynamic payload validation, data sanitization, and intent scoring.",
      "Orchestrated instant notification alerts to WhatsApp Business API and automated CRM lead status updates.",
    ],
    stack: ["n8n", "AI Agents", "Python", "Generative AI", "Webhooks", "REST APIs"],
    flow: "Inbound Webhook → n8n Pipeline → Python Gen AI Agent Parsing → Data Enrichment → WhatsApp & CRM Alert",
    githubUrl: "https://github.com/muhammaddanial104",
    liveUrl: "https://danial-portfolio-theta.vercel.app/#projects",
    year: "2024",
  },
  {
    id: "mini-chatbot",
    title: "Python Django Mini Chatbot & Lead Automation",
    category: "AI Automation & Backend APIs",
    badge: "Python + Django REST",
    badgeType: "client",
    imageWebp: "/images/aegis-preview.webp",
    imageJpg: "/images/aegis-preview.jpg",
    problem: "Portals require an embedded, lightweight customer triage and lead capture chatbot with zero third-party recurring SaaS fees.",
    contribution: [
      "Architected Python Django REST API backend with automated intent matching, conversational state handling, and FAQ triage.",
      "Designed clean interactive chat interface with typing indicators, suggested action chips, and instant response feedback.",
      "Integrated n8n webhook triggers to escalate complex inquiries directly to human team members via email and WhatsApp.",
    ],
    stack: ["Python", "Django REST", "AI Chatbot", "n8n Workflows", "Webhooks", "REST APIs"],
    flow: "User Message → Frontend UI → Django REST API → Python Intent Matcher → Automated FAQ Resolution / n8n Escalation",
    githubUrl: "https://github.com/muhammaddanial104",
    liveUrl: "https://danial-portfolio-theta.vercel.app/#projects",
    year: "2024",
  },
  {
    id: "ecommerce-its",
    title: "Multi-Vendor E-Commerce Platform",
    category: "Commercial Client Work",
    badge: "Commercial Production",
    badgeType: "client",
    imageWebp: "/images/proj1.webp",
    imageJpg: "/images/proj1.jpg",
    problem: "Regional commercial clients required a high-reliability digital storefront with real-time stock sync, zero checkout failures, and role-based admin controls.",
    contribution: [
      "Personally engineered end-to-end RESTful Express APIs and MongoDB schemas for product catalog and order processing.",
      "Integrated secure Stripe payment processing, webhook listeners, and dynamic inventory decrement upon successful payment.",
      "Built responsive React UI with Redux Toolkit cart persistence and admin dashboard for live order fulfillment.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Stripe API"],
    flow: "Catalog Browsing → Cart State Persistence → Checkout Auth → Stripe Payment Webhook → MongoDB Inventory Decrement → Confirmation",
    githubUrl: "https://github.com/muhammaddanial104/DANIAL-PORTFOLIO",
    liveUrl: "https://danial-portfolio-theta.vercel.app/#projects",
    year: "Mar 2024 – Aug 2024",
  },
  {
    id: "taskpulse",
    title: "TaskPulse — Agile Team Sprint & Kanban Tracker",
    category: "Productivity Web App",
    badge: "Full-Stack Web App",
    badgeType: "app",
    imageWebp: "/images/proj4.webp",
    imageJpg: "/images/proj4.jpg",
    problem: "Engineering teams need a lightweight sprint tracking board with instant visual feedback, avoiding enterprise Jira bloat and steep learning curves.",
    contribution: [
      "Implemented HTML5 drag-and-drop task workflow across backlog, in-progress, review, and completed columns.",
      "Engineered optimistic UI updates for instantaneous visual feedback during task status transitions.",
      "Created priority indicators, due-date countdowns, and debounced quick-search filtering.",
    ],
    stack: ["React.js", "HTML5 Drag & Drop", "Express.js", "MongoDB", "Tailwind CSS"],
    flow: "Sprint Creation → Task Tagging → Drag-and-Drop Column Updates → Database Sync",
    githubUrl: "https://github.com/muhammaddanial104",
    liveUrl: "https://danial-portfolio-theta.vercel.app/#projects",
    year: "2024",
  },
  {
    id: "weather-hub",
    title: "Weather & Air Quality Analytics Hub",
    category: "REST API & Data Visualization",
    badge: "API & Data Analytics",
    badgeType: "api",
    imageWebp: "/images/proj2.webp",
    imageJpg: "/images/proj2.jpg",
    problem: "Common weather widgets only display basic current temperature without actionable hourly forecasts, air quality index, and rain probabilities.",
    contribution: [
      "Integrated OpenWeather REST API with browser Geolocation API for seamless automatic local weather detection.",
      "Built dynamic search input with debounced API queries to prevent unnecessary rate-limit consumption.",
      "Rendered responsive 5-day hourly temperature trend charts with temperature unit toggling (°C/°F).",
    ],
    stack: ["React.js", "OpenWeather API", "Chart.js", "Geolocation API", "CSS Modules"],
    flow: "Geolocation Request → OpenWeather API Fetch → Data Normalization → Chart.js Trend Rendering",
    githubUrl: "https://github.com/muhammaddanial104",
    liveUrl: "https://danial-portfolio-theta.vercel.app/#projects",
    year: "2024",
  },
  {
    id: "robotics-arm",
    title: "Robotics 2-DOF Arm Kinematics Simulator",
    category: "Robotics & Mathematical Computing",
    badge: "Robotics Degree Highlight",
    badgeType: "robotics",
    imageWebp: "/images/proj3.webp",
    imageJpg: "/images/proj3.jpg",
    problem: "Understanding inverse kinematics equations for robotic arms is abstract and mathematically dense without an interactive geometric visualizer.",
    contribution: [
      "Formulated mathematical inverse kinematics algorithms calculating elbow-up and elbow-down joint angles in real time.",
      "Rendered dynamic 2-link robotic arm with joint nodes on HTML5 Canvas running at 60 FPS.",
      "Added interactive mouse target tracking with boundary clamping to prevent impossible kinematic singularities.",
    ],
    stack: ["JavaScript (ES6+)", "HTML5 Canvas API", "Kinematics Math Engine", "CSS3"],
    flow: "Mouse Target Coordinate (X, Y) → Inverse Kinematics Calculation (θ1, θ2) → Canvas Frame Redraw",
    githubUrl: "https://github.com/muhammaddanial104",
    liveUrl: "https://danial-portfolio-theta.vercel.app/#projects",
    year: "2024",
  },
];

export default function Projects() {
  const [selectedModal, setSelectedModal] = useState(null);

  useEffect(() => {
    if (selectedModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedModal]);

  return (
    <section id="projects" className="section-container projects-section" aria-labelledby="projects-heading">
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
          <span className="badge-title">Featured Work &amp; Code Proof</span>
        </div>
        <h2 id="projects-heading" className="section-main-heading">
          VERIFIED PROJECTS &amp; <span className="gradient-text">CODE DELIVERABLES</span>
        </h2>
        <p className="section-subtitle">
          Autonomous n8n agentic workflows, Python Django mini chatbot automations, and commercial full-stack commercial client deliverables.
        </p>
      </motion.div>

      {/* Projects Grid: 6 Real Projects */}
      <div className="projects-cards-grid">
        {PROJECTS.map((proj, idx) => (
          <TiltCard key={proj.id} className="project-grid-tilt-card" maxTilt={8} glare={true}>
            <motion.article
              className="project-display-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.12 }}
            >
              {/* Card Header & Badge */}
              <div className="card-top-row">
                <span className={`status-badge badge-${proj.badgeType}`}>
                  {proj.badge}
                </span>
                <span className="project-year">{proj.year}</span>
              </div>

              {/* Pixel-Perfect Window Frame Banner */}
              <div
                className="project-window-frame"
                onClick={() => setSelectedModal(proj)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedModal(proj);
                  }
                }}
                aria-label={`View detailed case study for ${proj.title}`}
              >
                <div className="project-window-bar">
                  <div className="window-dots">
                    <span className="w-dot dot-red" aria-hidden="true" />
                    <span className="w-dot dot-yellow" aria-hidden="true" />
                    <span className="w-dot dot-green" aria-hidden="true" />
                  </div>
                  <span className="window-title">{proj.title}</span>
                  <span className="window-status status-active">● Active</span>
                </div>
                <div className="project-img-container">
                  <picture>
                    <source srcSet={proj.imageWebp} type="image/webp" />
                    <img
                      src={proj.imageJpg}
                      alt={proj.title}
                      className="project-card-img"
                      width="1376"
                      height="768"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <div className="img-hover-overlay" aria-hidden="true">
                    <span className="zoom-hint">🔍 Architecture &amp; Case Study</span>
                  </div>
                </div>
              </div>

              {/* Title & Category */}
              <div className="project-title-block">
                <span className="project-category-label">{proj.category}</span>
                <h3 className="project-title-text">{proj.title}</h3>
              </div>

              {/* Problem Solved & Proof Callout */}
              <div className="project-proof-box">
                <div className="proof-row">
                  <strong className="proof-label">🎯 Challenge Solved:</strong>
                  <p className="proof-text">{proj.problem}</p>
                </div>
                <div className="proof-row">
                  <strong className="proof-label">🛠️ Key Engineering:</strong>
                  <ul className="proof-bullets">
                    {proj.contribution.slice(0, 2).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="proof-row">
                  <strong className="proof-label">⚡ Tech Stack:</strong>
                  <div className="proof-stack-pills">
                    {proj.stack.map((tech) => (
                      <span key={tech} className="tech-pill-chip">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Case Study + GitHub */}
              <div className="project-actions-row">
                <button
                  type="button"
                  className="btn-primary-glow btn-sm"
                  onClick={() => setSelectedModal(proj)}
                  aria-label={`Open detailed case study for ${proj.title}`}
                >
                  <span>Case Study</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>

                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-glass btn-sm"
                  aria-label={`View ${proj.title} source code on GitHub`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>Code</span>
                </a>
              </div>
            </motion.article>
          </TiltCard>
        ))}
      </div>

      {/* Case Study Details Modal (Portaled to body to guarantee top-level z-index) */}
      {typeof document !== "undefined" &&
        createPortal(
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
                  aria-labelledby="modal-project-title"
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 20 }}
                  transition={{ duration: 0.26 }}
                >
                  <div className="modal-header-row">
                    <div>
                      <span className="modal-badge">{selectedModal.badge} • {selectedModal.category}</span>
                      <h3 id="modal-project-title" className="modal-title">{selectedModal.title}</h3>
                    </div>
                    <button
                      type="button"
                      className="modal-close-btn"
                      onClick={() => setSelectedModal(null)}
                      aria-label="Close dialog"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="modal-body-content">
                    <div className="modal-img-wrap">
                      <picture>
                        <source srcSet={selectedModal.imageWebp} type="image/webp" />
                        <img
                          src={selectedModal.imageJpg}
                          alt={selectedModal.title}
                          className="modal-banner-img"
                          width="1376"
                          height="768"
                          loading="lazy"
                        />
                      </picture>
                    </div>

                    <div className="modal-section-block">
                      <h4 className="modal-section-heading">🎯 Challenge Solved</h4>
                      <p className="modal-section-p">{selectedModal.problem}</p>
                    </div>

                    <div className="modal-section-block">
                      <h4 className="modal-section-heading">🛠️ Key Engineering Deliverables</h4>
                      <ul className="modal-bullets-list">
                        {selectedModal.contribution.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="modal-section-block">
                      <h4 className="modal-section-heading">🔄 Architecture &amp; Data Pipeline</h4>
                      <div className="modal-flow-box">{selectedModal.flow}</div>
                    </div>

                    <div className="modal-section-block">
                      <h4 className="modal-section-heading">⚡ Production Tech Stack</h4>
                      <div className="modal-tech-pills">
                        {selectedModal.stack.map((t) => (
                          <span className="modal-tech-pill" key={t}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="modal-footer-row">
                    <a
                      href={selectedModal.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary-glow"
                    >
                      <span>View Code on GitHub</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                    <button
                      type="button"
                      className="btn-outline-glass"
                      onClick={() => setSelectedModal(null)}
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
