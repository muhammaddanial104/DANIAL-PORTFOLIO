import { useState, useEffect } from "react";
import "./Projects.css";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import TiltCard from "./TiltCard";
import { PROJECTS_DATA } from "../data/projectsData";

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
          Autonomous n8n agentic workflows, Python Django mini chatbot automations, and commercial full-stack production platforms.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="projects-cards-grid">
        {PROJECTS_DATA.map((proj, idx) => (
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

      {/* Case Study Details Modal */}
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
