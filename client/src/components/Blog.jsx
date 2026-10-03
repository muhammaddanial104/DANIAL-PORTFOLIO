import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TiltCard from "./TiltCard";

const ARTICLES = [
  {
    id: "n8n-agents",
    title: "Building Autonomous AI Agents & Workflows with n8n and Python",
    category: "AI Automation & Agentic AI",
    tags: ["n8n", "AI Agents", "Python", "AI Automation"],
    readTime: "5 min read",
    date: "Sep 2024",
    icon: "🤖",
    excerpt:
      "A hands-on breakdown of orchestrating multi-agent decision nodes in n8n, handling webhook events, and executing Python scripts for automated data extraction.",
    highlights: [
      "Configuring webhook triggers to ingest live leads and form submissions into n8n.",
      "Custom Python execution nodes for Gen AI prompt parsing and data normalization.",
      "Multi-branch error routing with instant WhatsApp and email alert notifications.",
    ],
    devtoUrl: "https://dev.to/muhammaddanial104",
  },
  {
    id: "django-chatbot",
    title: "Architecting a Lightweight Mini Chatbot with Python Django & Bootstrap 5",
    category: "Full-Stack & Chatbots",
    tags: ["Python", "Django", "Bootstrap 5", "Mini Chatbot"],
    readTime: "4 min read",
    date: "Aug 2024",
    icon: "💬",
    excerpt:
      "How to build an embeddable, responsive customer support chatbot using Bootstrap 5 on the frontend and Python Django REST framework on the backend.",
    highlights: [
      "Lightweight Bootstrap 5 chat component with smooth animated message bubbles.",
      "Django REST API endpoint with regex and NLP-based intent matching algorithms.",
      "Connecting n8n webhook listeners to escalate unanswered queries to live human agents.",
    ],
    devtoUrl: "https://dev.to/muhammaddanial104",
  },
  {
    id: "robotics-to-web",
    title: "From Robotics to Full-Stack: What Hardware Taught Me About Code",
    category: "Engineering Journey",
    tags: ["Robotics", "Clean Code", "Growth Mindset"],
    readTime: "6 min read",
    date: "Jul 2024",
    icon: "🤖",
    excerpt:
      "Why deterministic state machines, sensor latency, and physical feedback in my Robotics degree made me a more disciplined, defensive web developer.",
    highlights: [
      "Treating UI states like robotic state machines — zero unhandled error states.",
      "Defensive API input validation mirroring physical sensor noise filtering.",
      "Why hardware debugging instilled a relentless, root-cause troubleshooting mindset.",
    ],
    devtoUrl: "https://dev.to/muhammaddanial104",
  },
  {
    id: "jwt-security",
    title: "Securing MERN Apps: JWT Authentication, Refresh Tokens & Cookies",
    category: "Web Security",
    tags: ["Security", "JWT", "Node.js", "Express"],
    readTime: "5 min read",
    date: "Jun 2024",
    icon: "🛡️",
    excerpt:
      "Production-ready patterns for storing access tokens securely, rotating refresh tokens, and protecting sensitive REST endpoints against XSS and CSRF.",
    highlights: [
      "HttpOnly, SameSite strict cookies preventing client-side script token theft.",
      "Automatic token refresh interceptors with seamless user session renewal.",
      "Express rate-limiting middleware to protect auth routes from brute-force attacks.",
    ],
    devtoUrl: "https://dev.to/muhammaddanial104",
  },
];

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
          <span className="badge-title">Articles &amp; Insights</span>
        </div>
        <h2 id="blog-heading" className="section-main-heading">
          TECHNICAL WRITING &amp; <span className="gradient-text">LEARNING LOGS</span>
        </h2>
        <p className="section-subtitle">
          Documenting real-world engineering discoveries, MERN stack patterns, and clean code principles as I build and grow every day.
        </p>
      </motion.div>

      {/* Articles Grid */}
      <div className="blog-grid">
        {ARTICLES.map((article, idx) => (
          <TiltCard key={article.id} className="blog-tilt-card" maxTilt={8} glare={true}>
            <motion.article
              className="blog-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="blog-card-top">
                <span className="blog-card-icon" aria-hidden="true">{article.icon}</span>
                <div className="blog-meta-right">
                  <span className="blog-category">{article.category}</span>
                  <span className="blog-read-time">{article.readTime}</span>
                </div>
              </div>

              <h3 className="blog-card-title">{article.title}</h3>
              <p className="blog-card-excerpt">{article.excerpt}</p>

              <div className="blog-tags-row">
                {article.tags.map((t) => (
                  <span key={t} className="blog-tag-pill">{t}</span>
                ))}
              </div>

              <div className="blog-card-actions">
                <button
                  type="button"
                  className="btn-outline-glass blog-btn"
                  onClick={() => setSelectedArticle(article)}
                  aria-label={`Read article preview: ${article.title}`}
                >
                  <span>Quick Read</span>
                </button>
                <a
                  href={article.devtoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-link-external"
                  aria-label={`Read full article on Dev.to: ${article.title}`}
                >
                  <span>Dev.to</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </motion.article>
          </TiltCard>
        ))}
      </div>

      {/* Quick Read Modal Dialog */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="project-modal-overlay"
            onClick={() => setSelectedArticle(null)}
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
              aria-labelledby="modal-article-title"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.26 }}
            >
              <div className="modal-header-row">
                <div>
                  <span className="modal-badge">{selectedArticle.category} • {selectedArticle.readTime}</span>
                  <h3 id="modal-article-title" className="modal-title">{selectedArticle.title}</h3>
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

              <div className="modal-body-content">
                <div className="modal-section-block">
                  <h4 className="modal-section-heading">📖 Article Overview</h4>
                  <p className="modal-section-p">{selectedArticle.excerpt}</p>
                </div>

                <div className="modal-section-block">
                  <h4 className="modal-section-heading">💡 Key Takeaways &amp; Architectural Takeaways</h4>
                  <ul className="modal-bullets-list">
                    {selectedArticle.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section-block">
                  <h4 className="modal-section-heading">🏷️ Topics &amp; Frameworks</h4>
                  <div className="modal-tech-pills">
                    {selectedArticle.tags.map((t) => (
                      <span className="modal-tech-pill" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-footer-row">
                <a
                  href={selectedArticle.devtoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-glow"
                >
                  <span>Read Full Article on Dev.to</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
                <button
                  type="button"
                  className="btn-outline-glass"
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
