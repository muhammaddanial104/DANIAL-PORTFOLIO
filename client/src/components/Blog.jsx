import { useState } from "react";
import "./Blog.css";
import { motion, AnimatePresence } from "framer-motion";
import TiltCard from "./TiltCard";
import { ARTICLES_DATA } from "../data/blogData";

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="blog" className="section-container blog-section" aria-labelledby="blog-heading">
      {/* Section Header */}
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-badge">
          <span className="badge-num">06</span>
          <span className="badge-sep">|</span>
          <span className="badge-title">Technical Writing &amp; Knowledge</span>
        </div>
        <h2 id="blog-heading" className="section-main-heading">
          ENGINEERING ARTICLES &amp; <span className="gradient-text">INSIGHTS</span>
        </h2>
        <p className="section-subtitle">
          Documenting real-world engineering discoveries, modern full-stack patterns, and clean code principles as I build and grow every day.
        </p>
      </motion.div>

      {/* Articles Grid */}
      <div className="articles-grid">
        {ARTICLES_DATA.map((article, idx) => (
          <TiltCard key={article.id} className="article-tilt-card" maxTilt={8} glare={true}>
            <motion.article
              className="article-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Top Row: Category, Date, Read Time */}
              <div className="article-top-row">
                <span className="article-cat-badge">{article.category}</span>
                <div className="article-meta">
                  <span className="article-date">{article.date}</span>
                  <span className="meta-sep">•</span>
                  <span className="article-time">{article.readTime}</span>
                </div>
              </div>

              {/* Icon & Title */}
              <div className="article-title-block">
                <span className="article-icon" aria-hidden="true">{article.icon}</span>
                <h3 className="article-title">{article.title}</h3>
              </div>

              {/* Excerpt */}
              <p className="article-excerpt">{article.excerpt}</p>

              {/* Key Highlights Bullet Box */}
              <div className="article-highlights-box">
                <div className="highlights-label">Key Takeaways:</div>
                <ul className="highlights-list">
                  {article.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              {/* Tags Cloud */}
              <div className="article-tags-row">
                {article.tags.map((tag) => (
                  <span key={tag} className="article-tag">{tag}</span>
                ))}
              </div>

              {/* Footer CTA: Read Details Modal */}
              <div className="article-card-footer">
                <button
                  type="button"
                  className="article-read-btn"
                  onClick={() => setSelectedArticle(article)}
                  aria-label={`Read full summary of ${article.title}`}
                >
                  <span>Read Article</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>

                <a
                  href={article.devtoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-devto-link"
                  aria-label="View Danial's profile on Dev.to"
                >
                  <span>Dev.to</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </motion.article>
          </TiltCard>
        ))}
      </div>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="article-modal-overlay"
            onClick={() => setSelectedArticle(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="article-modal-dialog"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-article-title"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25 }}
            >
              {/* Modal Header */}
              <div className="article-modal-header">
                <div>
                  <div className="modal-article-meta">
                    <span className="modal-cat-badge">{selectedArticle.category}</span>
                    <span className="modal-time-badge">{selectedArticle.readTime} • {selectedArticle.date}</span>
                  </div>
                  <h3 id="modal-article-title" className="modal-article-title">
                    <span className="modal-icon">{selectedArticle.icon}</span> {selectedArticle.title}
                  </h3>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setSelectedArticle(null)}
                  aria-label="Close dialog"
                >
                  ✕
                </button>
              </div>

              {/* Modal Body */}
              <div className="article-modal-body">
                <p className="modal-article-excerpt">{selectedArticle.excerpt}</p>

                <div className="modal-section-block">
                  <h4 className="modal-section-heading">Key Technical Takeaways &amp; Implementation Details</h4>
                  <ul className="modal-highlights-list">
                    {selectedArticle.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section-block">
                  <h4 className="modal-section-heading">Core Topics Covered</h4>
                  <div className="modal-tags-row">
                    {selectedArticle.tags.map((t) => (
                      <span key={t} className="modal-tag-chip">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="article-modal-footer">
                <a
                  href={selectedArticle.devtoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-glow btn-sm"
                >
                  <span>Read on Dev.to</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
                <button
                  type="button"
                  className="btn-outline-glass btn-sm"
                  onClick={() => setSelectedArticle(null)}
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
