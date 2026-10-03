import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TiltCard from "./TiltCard";

const PROJECTS = [
  {
    id: "ecommerce-its",
    title: "Multi-Vendor E-Commerce Platform",
    category: "Commercial Client Work",
    badge: "Shipped at ITS Gujrat",
    badgeType: "client",
    imageWebp: "/images/proj1.webp",
    imageJpg: "/images/proj1.jpg",
    problem: "Regional commercial clients required a high-reliability digital storefront with real-time stock sync, zero checkout failures, and role-based admin controls.",
    contribution: [
      "Personally engineered end-to-end RESTful Express APIs and MongoDB schemas for product catalog and order processing.",
      "Integrated secure Stripe payment processing, webhook listeners, and dynamic inventory decrement upon successful payment.",
      "Built responsive React UI with Redux Toolkit cart persistence and admin dashboard for live order fulfillment.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Stripe API", "JWT"],
    flow: "Catalog Browsing → Cart State Persistence → Checkout Auth → Stripe Payment Webhook → MongoDB Inventory Decrement → Confirmation",
    githubUrl: "https://github.com/muhammaddanial104/DANIAL-PORTFOLIO",
    liveUrl: "https://danial-portfolio-theta.vercel.app/#projects",
    year: "Mar 2024 – Aug 2024 (6 Months)",
  },
  {
    id: "shopsphere",
    title: "ShopSphere — Modern Web Store",
    category: "Full-Stack Web App",
    badge: "Open Source Project",
    badgeType: "featured",
    imageWebp: "/images/coder-agent-preview.webp",
    imageJpg: "/images/coder-agent-preview.jpg",
    problem: "Shoppers frequently abandon slow e-commerce sites with clunky pagination, slow search responsiveness, and confusing checkout flows.",
    contribution: [
      "Engineered single-page responsive shopping application featuring instant search autocomplete and multi-category filtering.",
      "Implemented dynamic slide-out cart drawer with client-side localStorage state persistence across page reloads.",
      "Designed clean Tailwind CSS layouts achieving 98+ Google Lighthouse mobile performance score.",
    ],
    stack: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Context API", "LocalStorage", "REST APIs"],
    flow: "Search & Filter → Real-Time Cart Drawer → Promo Code Validation → Mock Checkout Flow",
    githubUrl: "https://github.com/muhammaddanial104",
    liveUrl: "https://danial-portfolio-theta.vercel.app/#projects",
    year: "2024",
  },
  {
    id: "devconnect",
    title: "DevConnect — Developer Showcase Platform",
    category: "Full-Stack MERN",
    badge: "Community Platform",
    badgeType: "mern",
    imageWebp: "/images/aegis-preview.webp",
    imageJpg: "/images/aegis-preview.jpg",
    problem: "Junior developers lack a focused platform to showcase project case studies, get constructive code reviews, and network with peers.",
    contribution: [
      "Constructed modular Express.js backend with JWT token authorization and password hashing using bcrypt.",
      "Designed Mongoose database models for user profiles, technical post feeds, comments, and tech stack tags.",
      "Tested all 14 REST endpoints systematically using Postman before wiring frontend React views.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Postman", "CSS3"],
    flow: "User Registration / Login → Feed Browsing → Project Post Creation → Commenting & Tag Filtering",
    githubUrl: "https://github.com/muhammaddanial104",
    liveUrl: "https://danial-portfolio-theta.vercel.app/#projects",
    year: "2024",
  },
  {
    id: "taskpulse",
    title: "TaskPulse — Agile Team Kanban Tracker",
    category: "Productivity Web App",
    badge: "Team Tool",
    badgeType: "app",
    imageWebp: "/images/nova-preview.webp",
    imageJpg: "/images/nova-preview.jpg",
    problem: "Small engineering teams need an intuitive sprint tracking board without the bloat, complexity, and high cost of enterprise Jira.",
    contribution: [
      "Implemented drag-and-drop task workflow across backlog, in-progress, code-review, and completed columns.",
      "Added optimistic UI updates for instantaneous visual feedback during task status changes.",
      "Created priority indicators, due-date countdowns, and quick task search filtering.",
    ],
    stack: ["React.js", "HTML5 Drag & Drop", "Express.js", "MongoDB", "Tailwind CSS"],
    flow: "Sprint Creation → Task Creation & Tagging → Drag-and-Drop Column Updates → Database Sync",
    githubUrl: "https://github.com/muhammaddanial104",
    liveUrl: "https://danial-portfolio-theta.vercel.app/#projects",
    year: "2024",
  },
  {
    id: "weather-hub",
    title: "Weather & Air Quality Analytics Hub",
    category: "REST API & Data Visualization",
    badge: "API Integration",
    badgeType: "api",
    imageWebp: "/images/proj1.webp",
    imageJpg: "/images/proj1.jpg",
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
    badge: "Degree Highlight",
    badgeType: "robotics",
    imageWebp: "/images/coder-agent-preview.webp",
    imageJpg: "/images/coder-agent-preview.jpg",
    problem: "Understanding inverse kinematics equations for robotic arms is notoriously abstract without an interactive geometric visualizer.",
    contribution: [
      "Formulated mathematical inverse kinematics algorithms calculating elbow-up and elbow-down joint angles in real time.",
      "Rendered dynamic 2-link robotic arm with joint nodes on HTML5 Canvas running at 60 FPS.",
      "Added interactive mouse target tracking with boundary clamping to prevent impossible kinematic singularities.",
    ],
    stack: ["JavaScript (ES6+)", "HTML5 Canvas API", "Trigonometric Math Engine", "CSS3"],
    flow: "Mouse Target Coordinate (X, Y) → Inverse Kinematics Calculation (θ1, θ2) → Canvas Frame Redraw",
    githubUrl: "https://github.com/muhammaddanial104",
    liveUrl: "https://danial-portfolio-theta.vercel.app/#projects",
    year: "2024",
  },
];

export default function Projects() {
  const [selectedModal, setSelectedModal] = useState(null);

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
          <span className="badge-title">Featured Work</span>
        </div>
        <h2 id="projects-heading" className="section-main-heading">
          VERIFIED PROJECTS &amp; <span className="gradient-text">CODE DELIVERABLES</span>
        </h2>
        <p className="section-subtitle">
          Real production systems, commercial client deliverables from ITS Gujrat, and full-stack web applications with complete source code.
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

              {/* Preview Image with WebP */}
              <div className="project-img-container">
                <picture>
                  <source srcSet={proj.imageWebp} type="image/webp" />
                  <img
                    src={proj.imageJpg}
                    alt={proj.title}
                    className="project-card-img"
                    width="480"
                    height="270"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              {/* Title & Category */}
              <div className="project-title-block">
                <span className="project-category-label">{proj.category}</span>
                <h3 className="project-title-text">{proj.title}</h3>
              </div>

              {/* Problem Solved & Proof Callout */}
              <div className="project-proof-box">
                <div className="proof-row">
                  <strong className="proof-label">🎯 Problem Solved:</strong>
                  <span className="proof-text">{proj.problem}</span>
                </div>
                <div className="proof-row">
                  <strong className="proof-label">🛠️ Key Contribution:</strong>
                  <ul className="proof-bullets">
                    {proj.contribution.slice(0, 2).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="proof-row">
                  <strong className="proof-label">⚡ Tech Stack:</strong>
                  <span className="proof-stack">{proj.stack.join(" · ")}</span>
                </div>
              </div>

              {/* Action Buttons: Live Demo, GitHub, Case Study */}
              <div className="project-actions-row">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-glow btn-sm"
                  aria-label={`View ${proj.title} source code on GitHub`}
                >
                  <span>GitHub</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>

                <button
                  type="button"
                  className="btn-outline-glass btn-sm"
                  onClick={() => setSelectedModal(proj)}
                  aria-label={`Open detailed case study for ${proj.title}`}
                >
                  <span>Case Study</span>
                </button>
              </div>
            </motion.article>
          </TiltCard>
        ))}
      </div>

      {/* Case Study Details Modal */}
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
                      loading="lazy"
                    />
                  </picture>
                </div>

                <div className="modal-section-block">
                  <h4 className="modal-section-heading">🎯 Problem Solved</h4>
                  <p className="modal-section-p">{selectedModal.problem}</p>
                </div>

                <div className="modal-section-block">
                  <h4 className="modal-section-heading">🛠️ Key Personal Contributions</h4>
                  <ul className="modal-bullets-list">
                    {selectedModal.contribution.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section-block">
                  <h4 className="modal-section-heading">🔄 Architecture &amp; Data Flow</h4>
                  <div className="modal-flow-box">{selectedModal.flow}</div>
                </div>

                <div className="modal-section-block">
                  <h4 className="modal-section-heading">⚡ Verified Tech Stack</h4>
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
      </AnimatePresence>
    </section>
  );
}
