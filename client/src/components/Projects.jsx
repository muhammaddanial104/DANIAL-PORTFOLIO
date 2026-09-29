import { useState } from "react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projectsData = [
    {
      id: "webpulse",
      title: "WebPulse",
      subtitle: "SaaS Analytics & Telemetry Platform",
      category: "fullstack",
      categoryLabel: "Web Apps",
      image: "/images/proj1.jpg",
      featured: true,
      description:
        "High-throughput SaaS infrastructure monitoring platform with sub-second telemetry, real-time WebSocket metrics, team workspaces, and customizable status alerts.",
      tags: ["React", "Node.js", "Express", "MongoDB", "WebSocket", "Tailwind"],
      liveUrl: "https://github.com/muhammaddanial104",
      githubUrl: "https://github.com/muhammaddanial104",
      highlight: "Real-time Telemetry & WebSockets",
    },
    {
      id: "nova-ai",
      title: "NOVA AI Engine",
      subtitle: "Autonomous AI Desktop Companion",
      category: "ai",
      categoryLabel: "AI Agents",
      image: "/images/stonic-robot.jpg",
      isRobotAvatar: true,
      featured: true,
      description:
        "Autonomous AI desktop engine featuring voice synthesis, ReAct multi-agent reasoning loops, OS-level tool-calling, and interactive 3D companion presence.",
      tags: ["Python", "Multi-Agents", "Electron", "React", "FastAPI", "OpenAI"],
      liveUrl: "https://github.com/muhammaddanial104",
      githubUrl: "https://github.com/muhammaddanial104",
      highlight: "Autonomous Tool-Calling & ReAct",
    },
    {
      id: "aegis-ai",
      title: "AEGIS-AI",
      subtitle: "Cyber Security Recon Agent",
      category: "ai",
      categoryLabel: "AI Agents",
      image: "/images/aegis-preview.jpg",
      featured: false,
      description:
        "Autonomous multi-agent cyber security engine. Scans network endpoints, analyzes CVE vulnerabilities, and delivers automated mitigation playbooks.",
      tags: ["Python", "FastAPI", "React", "Security APIs", "Docker"],
      liveUrl: "https://github.com/muhammaddanial104",
      githubUrl: "https://github.com/muhammaddanial104",
      highlight: "Automated CVE & Threat Recon",
    },
    {
      id: "its-ecommerce",
      title: "MERN Enterprise E-Commerce",
      subtitle: "ITS Gujrat 6-Month Internship Store",
      category: "fullstack",
      categoryLabel: "Full Stack",
      image: "/images/proj2.jpg",
      featured: false,
      description:
        "Production-grade e-commerce application engineered during 6-month internship at ITS Gujrat. Complete with multi-vendor portal, Stripe payments, and admin dashboards.",
      tags: ["MongoDB", "Express", "React", "Node.js", "Stripe", "Redux"],
      liveUrl: "https://github.com/muhammaddanial104",
      githubUrl: "https://github.com/muhammaddanial104",
      highlight: "Production MERN + Stripe Auth",
    },
  ];

  const filterTabs = [
    { label: "All Projects", value: "all" },
    { label: "AI Agents", value: "ai" },
    { label: "Web Apps", value: "fullstack" },
  ];

  const filteredProjects = activeFilter === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-container projects-section">
      {/* Section Header */}
      <div className="section-header projects-header-flex">
        <div>
          <div className="section-badge">
            <span className="badge-num">03</span>
            <span className="badge-sep">|</span>
            <span className="badge-title">Projects</span>
          </div>
          <h2 className="section-main-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Autonomous AI agents, enterprise SaaS, and full-stack MERN production platforms
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="project-filter-tabs">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`filter-tab-btn ${activeFilter === tab.value ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-cards-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${project.featured ? "card-flagship" : ""}`}
          >
            {/* Visual Image Banner */}
            <div className={`project-image-box ${project.isRobotAvatar ? "robot-preview-box" : ""}`}>
              <img
                src={project.image}
                alt={project.title}
                className={`project-thumb ${project.isRobotAvatar ? "robot-thumb" : ""}`}
              />
              <div className="project-image-overlay"></div>

              {/* Top Category Badge */}
              <div className="project-category-badge">
                <span>{project.categoryLabel}</span>
              </div>

              {/* Highlight Pill */}
              <div className="project-highlight-badge">
                <span className="dot-pulse"></span>
                <span>{project.highlight}</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="project-card-body">
              <div className="project-title-row">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-subtitle">{project.subtitle}</span>
                </div>
              </div>

              <p className="project-desc">{project.description}</p>

              {/* Tags */}
              <div className="project-tags-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tech-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="project-actions">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn-demo"
                >
                  <span>Live Demo</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn-github"
                  title="Source Code"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
