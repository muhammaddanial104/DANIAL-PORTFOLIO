// ═══════════════════════════════════════════════════
// COMPONENT: About.jsx — GENUINE, CRISP & PROFESSIONAL
// Aligned with PDF Masterplan Sections 10 & 11:
// - "Why Work With Me" (Focus on problem solving, automation & integration)
// - "Availability & Capabilities" (Truthful Freelance, Contract, Remote, Full-time availability)
// - 6-Month ITS Gujrat Internship + BS in Robotics (Coming Soon)
// ═══════════════════════════════════════════════════

export default function About() {
  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="section about-section">
      <div className="section-header">
        <span className="section-num">02</span>
        <h2 className="section-title">
          ABOUT <span className="accent">ME</span>
        </h2>
        <div className="section-line" />
      </div>

      <div className="about-grid">
        {/* Photo Column */}
        <div className="about-photo-col">
          <div className="photo-frame">
            <div className="pf-corner pf-tl" />
            <div className="pf-corner pf-tr" />
            <div className="pf-corner pf-bl" />
            <div className="pf-corner pf-br" />
            <img
              src="/images/danial.jpg"
              alt="Muhammad Danial"
              className="profile-photo"
              loading="lazy"
            />
            <div className="photo-scan" />
          </div>

          {/* Quick Pillars */}
          <div className="about-pillars-list">
            <div
              className="about-pillar-tag"
              style={{
                borderColor: "rgba(16, 185, 129, 0.4)",
                background: "rgba(16, 185, 129, 0.08)",
              }}
            >
              <span className="pillar-icon">🎓</span>
              <span className="pillar-title" style={{ color: "#10b981" }}>
                Bachelor in Robotics
              </span>
            </div>
            <div
              className="about-pillar-tag"
              style={{
                borderColor: "rgba(34, 211, 238, 0.4)",
                background: "rgba(34, 211, 238, 0.08)",
              }}
            >
              <span className="pillar-icon">💼</span>
              <span className="pillar-title" style={{ color: "#22d3ee" }}>
                ITS Gujrat (6 Mo. Intern)
              </span>
            </div>
            <div className="about-pillar-tag">
              <span className="pillar-icon">🌐</span>
              <span className="pillar-title">Full-Stack MERN</span>
            </div>
            <div className="about-pillar-tag">
              <span className="pillar-icon">💻</span>
              <span className="pillar-title">Modern Websites</span>
            </div>
            <div className="about-pillar-tag">
              <span className="pillar-icon">🤖</span>
              <span className="pillar-title">AI Agents</span>
            </div>
            <div className="about-pillar-tag">
              <span className="pillar-icon">⚡</span>
              <span className="pillar-title">Workflow Automation</span>
            </div>
            <div className="about-pillar-tag">
              <span className="pillar-icon">🛡️</span>
              <span className="pillar-title">Cyber Defense</span>
            </div>
          </div>
        </div>

        {/* Info Column */}
        <div className="about-info-col">
          <p className="about-intro">
            Hey, I&apos;m <span className="text-purple">Muhammad Danial</span> —
            a Full-Stack Web Developer, Software Engineer &amp; AI Agent Developer based in Gujrat, Pakistan.
          </p>

          <p className="about-body">
            I build modern, high-performance web applications, high-converting business websites, and autonomous AI agents that do the real work. With 6 months of hands-on software engineering experience at ITS Gujrat building production MERN e-commerce platforms, I bridge cutting-edge frontend UI/UX, robust Node/Express/Python backends, and intelligent AI automation workflows.
          </p>

          {/* PDF Section 10: WHY WORK WITH ME */}
          <div className="why-work-card">
            <div className="why-work-header">
              <span className="why-work-icon">🎯</span>
              <h3 className="why-work-title">WHY WORK WITH ME</h3>
            </div>
            <p className="why-work-sub">
              Focusing on measurable business problem-solving and production reliability — not generic buzzwords.
            </p>

            <div className="why-work-pillars">
              <div className="why-pillar-item">
                <span className="why-pillar-num">01</span>
                <div>
                  <h4 className="why-pillar-head">Problem-First Engineering</h4>
                  <p className="why-pillar-desc">
                    I start with your bottleneck: the repetitive tasks eating staff hours. I design the minimal, most reliable agent loop that solves it with zero fluff.
                  </p>
                </div>
              </div>

              <div className="why-pillar-item">
                <span className="why-pillar-num">02</span>
                <div>
                  <h4 className="why-pillar-head">Zero-Hallucination Guardrails</h4>
                  <p className="why-pillar-desc">
                    Every system uses grounded RAG vector context, strict Pydantic JSON schema boundaries, and human-in-the-loop escalation paths for edge cases.
                  </p>
                </div>
              </div>

              <div className="why-pillar-item">
                <span className="why-pillar-num">03</span>
                <div>
                  <h4 className="why-pillar-head">Full-Stack Production Ownership</h4>
                  <p className="why-pillar-desc">
                    From frontend React interfaces and low-latency streaming to FastAPI backends, Docker sandboxes, and database architecture, I deliver end-to-end.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience Card: ITS GUJRAT 6-Month Internship */}
          <div className="about-exp-box" style={{ marginTop: "1.2rem" }}>
            <div className="exp-header">
              <div className="exp-meta-left">
                <span className="exp-badge">💼 PROFESSIONAL INTERNSHIP</span>
                <span className="exp-duration">MAR 2024 &ndash; AUG 2024 &bull; 6 MONTHS</span>
              </div>
              <span className="exp-location">📍 Gujrat, Pakistan</span>
            </div>

            <div className="exp-role-row">
              <h3 className="exp-role">MERN Stack Developer Intern</h3>
              <span className="exp-company">@ ITS GUJRAT</span>
            </div>

            <p className="exp-desc">
              Completed an intensive 6-month software engineering internship specializing in full-stack architecture. Successfully engineered and deployed <strong>2 production-ready MERN E-Commerce platforms</strong> along with custom Express REST APIs, JWT authentication, Stripe webhook pipelines, and optimized MongoDB schemas.
            </p>

            <div className="exp-highlights-grid">
              <span className="exp-chip">🛍️ 2 Full-Stack E-Commerce Platforms</span>
              <span className="exp-chip">⚡ Express.js &amp; Node.js REST APIs</span>
              <span className="exp-chip">🗄️ MongoDB Schema Design</span>
              <span className="exp-chip">💳 Stripe Payment Gateway &amp; JWT</span>
              <span className="exp-chip">⚛️ React Frontend Architecture</span>
              <span className="exp-chip">🚀 Production Deployments</span>
            </div>
          </div>

          {/* PDF Section 11: AVAILABILITY & CAPABILITIES */}
          <div className="availability-card" style={{ marginTop: "1.2rem" }}>
            <div className="avail-header">
              <span className="avail-pulse" />
              <h4 className="avail-title">CURRENT AVAILABILITY &amp; ENGAGEMENT MODES</h4>
            </div>
            <div className="avail-grid">
              <div className="avail-item">
                <span className="avail-status-dot dot-green" />
                <div>
                  <span className="avail-type">Freelance &amp; Projects</span>
                  <span className="avail-note">Accepting new AI/Full-Stack builds</span>
                </div>
              </div>
              <div className="avail-item">
                <span className="avail-status-dot dot-green" />
                <div>
                  <span className="avail-type">Contract / Retainer</span>
                  <span className="avail-note">Automation &amp; systems engineering</span>
                </div>
              </div>
              <div className="avail-item">
                <span className="avail-status-dot dot-green" />
                <div>
                  <span className="avail-type">Remote Roles</span>
                  <span className="avail-note">Global timezone flexibility</span>
                </div>
              </div>
              <div className="avail-item">
                <span className="avail-status-dot dot-cyan" />
                <div>
                  <span className="avail-type">Full-Time Opportunities</span>
                  <span className="avail-note">Open to discussing relevant roles</span>
                </div>
              </div>
            </div>
          </div>

          <button
            className="btn btn-primary"
            onClick={() => scrollTo("contact")}
            style={{ marginTop: "1.4rem" }}
          >
            <span className="btn-glow" />
            Discuss a Project →
          </button>
        </div>
      </div>
    </section>
  );
}
