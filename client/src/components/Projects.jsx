import { useState } from "react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const caseStudies = [
    {
      id: "webpulse",
      title: "WebPulse",
      subtitle: "SaaS Telemetry & Infrastructure Monitoring",
      category: "fullstack",
      categoryLabel: "SaaS & Web",
      image: "/images/proj1.jpg",
      problem: "Distributed servers and APIs suffer silent latency spikes and outages that traditional log-checkers detect too late.",
      solution: "Engineered a real-time SaaS infrastructure telemetry platform with sub-second WebSocket telemetry, multi-tenant team workspaces, and custom threshold alerts.",
      howItWorks: "Synthetic Probes ➔ WebSocket Ingestion Pipeline ➔ Time-Series MongoDB ➔ Live React Charts",
      stack: ["React", "Node.js", "Express", "MongoDB", "WebSocket", "Tailwind CSS"],
      result: "Sub-second live streaming telemetry, automated heartbeat alerts, and multi-tenant workspace isolation.",
      liveUrl: "https://github.com/muhammaddanial104",
      githubUrl: "https://github.com/muhammaddanial104",
    },
    {
      id: "aegis-ai",
      title: "AEGIS-AI",
      subtitle: "Autonomous Cyber Security Reconnaissance Agent",
      category: "ai",
      categoryLabel: "AI & Security",
      image: "/images/aegis-preview.jpg",
      problem: "Manual network vulnerability auditing and CVE threat correlation take security engineers hours of repetitive manual analysis.",
      solution: "Built an autonomous multi-agent cyber security engine that scans endpoints, maps vulnerabilities against NVD CVE databases, and generates automated remediation playbooks.",
      howItWorks: "Network Surface Scanner ➔ Multi-Agent CVE Correlation ➔ Severity Scoring ➔ Actionable Mitigation Guide",
      stack: ["Python", "FastAPI", "React", "Docker", "Security APIs", "NVD Database"],
      result: "Automated vulnerability reconnaissance completed in under 4 minutes with structured remediation playbooks.",
      liveUrl: "https://github.com/muhammaddanial104",
      githubUrl: "https://github.com/muhammaddanial104",
    },
    {
      id: "its-ecommerce",
      title: "MERN Enterprise E-Commerce",
      subtitle: "ITS Gujrat 6-Month Internship Store",
      category: "fullstack",
      categoryLabel: "Enterprise MERN",
      image: "/images/proj2.jpg",
      problem: "Commercial clients needed a custom high-performance e-commerce platform with multi-vendor support and seamless checkout.",
      solution: "Engineered two full-scale production MERN E-Commerce applications during a rigorous 6-month software engineering internship at ITS Gujrat with Stripe payments and inventory tracking.",
      howItWorks: "React UI ➔ Express/Node REST Layer ➔ JWT Auth ➔ Stripe Checkout ➔ MongoDB Cluster",
      stack: ["MongoDB", "Express.js", "React", "Node.js", "Stripe API", "Redux"],
      result: "Production-ready platforms shipped with zero transaction loss, complete order tracking, and real-time inventory synchronization.",
      liveUrl: "https://github.com/muhammaddanial104",
      githubUrl: "https://github.com/muhammaddanial104",
    },
  ];

  const filtered = activeFilter === "all"
    ? caseStudies
    : caseStudies.filter((item) => item.category === activeFilter);

  return (
    <section id="projects" className="section-container projects-section">
      {/* Section Header */}
      <div className="section-header">
        <div className="section-badge">
          <span className="badge-num">06</span>
          <span className="badge-sep">|</span>
          <span className="badge-title">Case Studies & Deployments</span>
        </div>
        <h2 className="section-main-heading">
          Engineering <span className="gradient-text">Case Studies</span>
        </h2>
        <p className="section-subtitle">
          Real problems, engineered solutions, verifiable architectures, and production results.
        </p>
      </div>

      {/* 06 — FEATURED PROJECT: NOVA AI LARGE CASE STUDY TREATMENT */}
      <div className="featured-case-study-hero">
        <div className="featured-case-left">
          <div className="featured-badge-top">
            <span className="featured-star">★</span>
            <span>Flagship Case Study</span>
            <span className="featured-cat-tag">Autonomous AI Desktop Companion</span>
          </div>

          <h3 className="featured-hero-title">NOVA AI Engine</h3>
          <p className="featured-hero-subtitle">
            Autonomous Desktop AI Assistant & Voice Companion
          </p>

          {/* Case Study Template Breakdown */}
          <div className="case-breakdown-stack">
            <div className="case-item">
              <span className="case-label label-problem">Problem:</span>
              <p className="case-text">
                Professionals lose up to 15+ hours weekly switching between dozens of open tabs, executing repetitive terminal tasks, and manually managing local files without an intelligent unified agent.
              </p>
            </div>

            <div className="case-item">
              <span className="case-label label-solution">Solution:</span>
              <p className="case-text">
                Engineered an autonomous AI desktop assistant equipped with voice synthesis, ReAct tool-calling loops, OS-level application control, and 3D companion presence.
              </p>
            </div>

            <div className="case-item">
              <span className="case-label label-workflow">How It Works:</span>
              <p className="case-text font-mono text-cyan">
                Voice/Text Input ➔ Whisper STT ➔ ReAct Loop with OS Tools ➔ System Execution (Files, Terminal, Apps) ➔ Feedback
              </p>
            </div>

            <div className="case-item">
              <span className="case-label label-result">Result:</span>
              <p className="case-text font-bold text-white">
                Sub-second voice response time, autonomous multi-step local desktop task execution, and 100% hands-free system interaction.
              </p>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="featured-stack-wrap">
            {["Python", "Multi-Agents", "Electron", "React", "FastAPI", "OpenAI / Local LLMs", "PyAutoGUI"].map((t) => (
              <span key={t} className="featured-tech-pill">{t}</span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="featured-actions-row">
            <a
              href="https://github.com/muhammaddanial104"
              target="_blank"
              rel="noopener noreferrer"
              className="featured-btn-primary"
            >
              <span>Explore GitHub Repository</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>

            <a
              href="https://wa.me/923137525862?text=Hello%20Danial,%20I%20am%20interested%20in%20the%20Nova%20AI%20architecture."
              target="_blank"
              rel="noopener noreferrer"
              className="featured-btn-secondary"
            >
              <span>Discuss Architecture</span>
            </a>
          </div>
        </div>

        {/* Featured Visual: 3D Robot Companion */}
        <div className="featured-case-right">
          <div className="robot-visual-card">
            <div className="robot-aura-glow"></div>
            <img
              src="/images/stonic-robot.jpg"
              alt="NOVA AI 3D Companion"
              className="robot-visual-img"
            />
            <div className="robot-status-pill">
              <span className="dot-pulse"></span>
              <span>NOVA v3.1 Engine • Local Daemon Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* 07 — MORE PROJECTS (CASE STUDY CARDS) */}
      <div className="projects-subhead-row">
        <div>
          <h3 className="more-projects-title">Additional Production Case Studies</h3>
          <p className="more-projects-subtitle">Full-stack web applications and autonomous cyber defense agents</p>
        </div>

        <div className="project-filter-tabs">
          {[
            { label: "All Case Studies", value: "all" },
            { label: "AI & Security", value: "ai" },
            { label: "Full Stack & SaaS", value: "fullstack" },
          ].map((tab) => (
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

      <div className="case-studies-grid">
        {filtered.map((item) => (
          <div key={item.id} className="case-study-card">
            {/* Thumbnail Header */}
            <div className="case-study-thumb-wrap">
              <img src={item.image} alt={item.title} className="case-study-thumb-img" />
              <div className="case-thumb-overlay"></div>
              <span className="case-category-tag">{item.categoryLabel}</span>
            </div>

            {/* Case Study Card Body with 4 Questions */}
            <div className="case-card-body">
              <h4 className="case-title">{item.title}</h4>
              <span className="case-subtitle">{item.subtitle}</span>

              <div className="case-card-qa-stack">
                <div className="qa-block">
                  <span className="qa-tag tag-p">Problem:</span>
                  <p className="qa-text">{item.problem}</p>
                </div>

                <div className="qa-block">
                  <span className="qa-tag tag-s">Solution:</span>
                  <p className="qa-text">{item.solution}</p>
                </div>

                <div className="qa-block">
                  <span className="qa-tag tag-w">How It Works:</span>
                  <p className="qa-text font-mono text-cyan">{item.howItWorks}</p>
                </div>

                <div className="qa-block">
                  <span className="qa-tag tag-r">Result:</span>
                  <p className="qa-text font-semibold text-white">{item.result}</p>
                </div>
              </div>

              {/* Stack */}
              <div className="case-stack-tags">
                {item.stack.map((t) => (
                  <span key={t} className="case-tag-pill">{t}</span>
                ))}
              </div>

              {/* Actions */}
              <div className="case-card-actions">
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-btn-demo"
                >
                  <span>View Project</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>

                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-btn-github"
                  title="Source Code"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
