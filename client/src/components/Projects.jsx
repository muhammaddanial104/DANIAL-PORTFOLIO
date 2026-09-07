// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// COMPONENT: Projects.jsx â€” PROJECT VAULT WITH IMAGES
// Guaranteed image fallbacks + interactive 3D tilt
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
import { useState, useEffect, useRef } from "react";
import api from "../api";

const FALLBACK = [
  {
    _id: "1",
    featured: true,
    status: "live",
    year: "2024",
    title: "E-Commerce Platform",
    description: "Full-featured MERN e-commerce with product management, shopping cart, JWT authentication, Stripe payments and admin dashboard.",
    image: "/proj1.jpg",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
    liveUrl: "#",
    githubUrl: "https://github.com/muhammaddanial104",
  },
  {
    _id: "2",
    featured: true,
    status: "live",
    year: "2025",
    title: "AI Software Engineering Agent",
    description: "Autonomous AI platform that writes, tests and deploys code. Uses LangChain + GPT-4 for end-to-end software engineering tasks.",
    image: "/proj2.jpg",
    tags: ["Python", "LangChain", "OpenAI", "FastAPI", "React", "Docker"],
    liveUrl: "#",
    githubUrl: "https://github.com/muhammaddanial104",
  },
  {
    _id: "3",
    featured: false,
    status: "live",
    year: "2025",
    title: "AI Content Creation Agent",
    description: "Multi-modal content generator creating blog posts, social media content and marketing copy using custom AI agent workflows.",
    image: "/proj3.jpg",
    tags: ["Python", "OpenAI", "Django", "Celery", "Redis", "React"],
    liveUrl: "#",
    githubUrl: "https://github.com/muhammaddanial104",
  },
  {
    _id: "4",
    featured: false,
    status: "wip",
    year: "2025",
    title: "Full Stack SaaS Platform",
    description: "Production-ready SaaS combining MERN with Python microservices for AI processing â€” subscription billing, multi-tenancy, real-time analytics.",
    image: "/proj4.jpg",
    tags: ["MERN", "Python", "FastAPI", "Next.js", "PostgreSQL", "AWS"],
    liveUrl: "#",
    githubUrl: "https://github.com/muhammaddanial104",
  },
];

function ProjectCard({ proj, index }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const fallbackImg = `/proj${(index % 4) + 1}.jpg`;
  const imgSrc = proj.image || fallbackImg;

  const handleMove = e => {
    const c = cardRef.current;
    if (!c) return;
    const r = c.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    c.style.transform = `perspective(1000px) translateY(-6px) rotateX(${-dy * 5}deg) rotateY(${dx * 5}deg)`;
  };

  const handleLeave = () => {
    const c = cardRef.current;
    if (!c) return;
    c.style.transform = "perspective(1000px) translateY(0) rotateX(0) rotateY(0)";
    setHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className={`project-card ${proj.featured ? "featured" : ""}`}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
    >
      {proj.featured && <div className="featured-badge">&#9733; FEATURED</div>}

      {/* Thumbnail with overlay */}
      <div className="proj-thumb-wrap">
        <img
          src={imgSrc}
          alt={proj.title}
          className="proj-thumb"
          loading="lazy"
          onError={e => {
            if (e.target.src !== fallbackImg) {
              e.target.src = fallbackImg;
            }
          }}
        />
        <div className={`proj-thumb-overlay ${hovered ? "show" : ""}`}>
          <div className="proj-thumb-actions">
            <a href={proj.liveUrl} className="thumb-btn" target="_blank" rel="noreferrer">
              &#10148; LIVE DEMO
            </a>
            <a href={proj.githubUrl} className="thumb-btn thumb-btn-sec" target="_blank" rel="noreferrer">
              &#9670; VIEW CODE
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="proj-body">
        <div className="card-header">
          <span className="proj-num">0{index + 1}</span>
          <span className={`proj-status-badge ${proj.status === "live" ? "status-live" : "status-wip"}`}>
            {proj.status === "live" ? "â— LIVE" : "â—‰ IN PROGRESS"}
          </span>
        </div>
        <h3 className="proj-title">{proj.title}</h3>
        <p className="proj-desc">{proj.description}</p>
        <div className="proj-tags">
          {proj.tags && proj.tags.map(t => <span key={t}>{t}</span>)}
        </div>
        <div className="card-footer">
          <div className="card-links">
            <a href={proj.liveUrl} className="card-link" target="_blank" rel="noreferrer">
              Live Demo â†—
            </a>
            <a href={proj.githubUrl} className="card-link" target="_blank" rel="noreferrer">
              GitHub â†—
            </a>
          </div>
          <span className="proj-year">{proj.year || "2025"}</span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState(FALLBACK);

  useEffect(() => {
    api
      .get("/api/projects")
      .then(r => {
        if (r.data && r.data.success && Array.isArray(r.data.data) && r.data.data.length > 0) {
          // Merge API data with guaranteed images
          const withImages = r.data.data.map((p, idx) => ({
            ...p,
            image: p.image || `/proj${(idx % 4) + 1}.jpg`
          }));
          setProjects(withImages);
        }
      })
      .catch(() => {
        // Keeps fallback
      });
  }, []);

  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <span className="section-num">03</span>
        <h2 className="section-title">
          PROJECT <span className="accent">VAULT</span>
        </h2>
        <div className="section-line" />
      </div>
      <p className="projects-subtext">
        Real-world solutions built with <span className="highlight">MERN</span>, <span className="highlight">Python</span> &amp; <span className="highlight">AI</span>.
      </p>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p._id || i} proj={p} index={i} />
        ))}
      </div>
    </section>
  );
}