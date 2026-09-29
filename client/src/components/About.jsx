import { useState } from "react";

export default function About() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("innocentdanial00@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="section-container about-section">
      {/* Section Header */}
      <div className="section-header">
        <div className="section-badge">
          <span className="badge-num">02</span>
          <span className="badge-sep">|</span>
          <span className="badge-title">About Me</span>
        </div>
        <h2 className="section-main-heading">
          TURNING IDEAS INTO <span className="gradient-text">POWERFUL DIGITAL SOLUTIONS</span>
        </h2>
        <p className="section-subtitle">
          Bridging robotics engineering rigor with enterprise full-stack development and autonomous AI workflows.
        </p>
      </div>

      <div className="about-grid">
        {/* Left Column: Authentic Bio & Highlights */}
        <div className="about-bio-col">
          <p className="about-lead">
            Hi, I'm <strong className="text-white">Muhammad Danial</strong> — a Full-Stack Developer and AI Automation Engineer based in Gujrat, Pakistan.
          </p>

          <p className="about-paragraph">
            With a formal background in <span className="text-cyan">Bachelor in Robotics</span>, I bridge intelligent computational reasoning
            with enterprise-grade software development. I completed an intensive{" "}
            <span className="text-purple">6-Month Software Engineering Internship at ITS Gujrat</span>, where I engineered and deployed
            two production-ready MERN E-Commerce platforms with end-to-end payment integrations, real-time inventory management, and robust JWT authentication.
          </p>

          <p className="about-paragraph">
            My primary focus today centers on architecting autonomous AI multi-agent workflows, scalable full-stack web applications, and high-concurrency automated pipelines that deliver tangible business value.
          </p>

          {/* Key Highlights Grid */}
          <div className="about-highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">🎓</div>
              <div className="highlight-info">
                <h4>Robotics Degree</h4>
                <p>Bachelor in Robotics &amp; Autonomous Systems</p>
              </div>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">💼</div>
              <div className="highlight-info">
                <h4>6-Month ITS Internship</h4>
                <p>Built 2 Full-Scale MERN E-Commerce Stores</p>
              </div>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">🤖</div>
              <div className="highlight-info">
                <h4>AI Agent Architect</h4>
                <p>Autonomous LLM multi-agents &amp; tool calling</p>
              </div>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">⚡</div>
              <div className="highlight-info">
                <h4>Full-Stack Mastery</h4>
                <p>React, Next.js, Node, Express, MongoDB</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="about-actions-row">
            <a
              href="https://wa.me/923137525862?text=Hello%20Danial,%20I%20am%20interested%20in%20discussing%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="about-btn-primary"
            >
              <span>Discuss a Project</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <button
              onClick={copyEmail}
              className="about-btn-secondary"
            >
              <span>{copied ? "✓ Email Copied!" : "Copy Email"}</span>
            </button>

            <button
              onClick={() => scrollTo("projects")}
              className="about-btn-secondary"
            >
              <span>View Projects</span>
            </button>
          </div>
        </div>

        {/* Right Column: Sleek Photo Card with Glass Frame & Floating Badges */}
        <div className="about-visual-col">
          <div className="about-photo-wrapper">
            {/* Glowing neon aura */}
            <div className="about-glow-aura"></div>

            {/* Glass photo frame */}
            <div className="about-photo-frame">
              <img
                src="/images/danial.jpg"
                alt="Muhammad Danial"
                className="about-photo-img"
              />

              <div className="about-photo-overlay"></div>

              {/* Bottom signature badge */}
              <div className="about-signature-badge">
                <span className="signature-name">Danial</span>
                <span className="signature-role">Full-Stack &amp; AI Builder</span>
              </div>
            </div>

            {/* 4 Floating Badges */}
            <div className="about-float-tag tag-code">
              <span>&lt;Code /&gt;</span>
            </div>
            <div className="about-float-tag tag-create">
              <span>✨ Create</span>
            </div>
            <div className="about-float-tag tag-automate">
              <span>⚡ Automate</span>
            </div>
            <div className="about-float-tag tag-innovate">
              <span>🚀 Innovate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
