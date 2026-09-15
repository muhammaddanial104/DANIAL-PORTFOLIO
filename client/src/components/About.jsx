// ═══════════════════════════════════════════════════
// COMPONENT: About.jsx — GENUINE, CRISP & PROFESSIONAL
// BS Robotics (Coming Soon), 6-Month ITS Gujrat Internship, AI Agents, AEGIS-AI & NOVA AI
// ═══════════════════════════════════════════════════

export default function About() {
  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="section about-section">
      <div className="section-header">
        <span className="section-num">01</span>
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
              src="/danial.jpg"
              alt="Muhammad Danial"
              className="profile-photo"
              loading="lazy"
            />
            <div className="photo-scan" />
          </div>

          {/* Quick Pillars */}
          <div className="about-pillars-list">
            <div className="about-pillar-tag about-pillar-soon">
              <span className="pillar-icon">🎓</span>
              <span className="pillar-title">BS IN ROBOTICS</span>
              <span className="edu-soon-tag">COMING SOON</span>
            </div>
            <div className="about-pillar-tag" style={{ borderColor: "rgba(34, 211, 238, 0.4)", background: "rgba(34, 211, 238, 0.08)" }}>
              <span className="pillar-icon">💼</span>
              <span className="pillar-title" style={{ color: "#22d3ee" }}>ITS Gujrat (6 Mo. Intern)</span>
            </div>
            <div className="about-pillar-tag">
              <span className="pillar-icon">🤖</span>
              <span className="pillar-title">AI Agents</span>
            </div>
            <div className="about-pillar-tag">
              <span className="pillar-icon">💻</span>
              <span className="pillar-title">Software Engineering</span>
            </div>
            <div className="about-pillar-tag">
              <span className="pillar-icon">🛡️</span>
              <span className="pillar-title">Cyber Defense</span>
            </div>
            <div className="about-pillar-tag">
              <span className="pillar-icon">⚙️</span>
              <span className="pillar-title">Automation</span>
            </div>
          </div>
        </div>

        {/* Info Column */}
        <div className="about-info-col">
          <p className="about-intro">
            Hey, I&apos;m <span className="text-purple">Muhammad Danial</span> —
            an AI Agent Developer, Software Engineer &amp; Automation Engineer based in Gujrat, Pakistan.
          </p>

          <p className="about-body">
            I specialize in building autonomous AI agents, enterprise cyber defense platforms, scalable software systems, and modern web applications with robust API integrations.
            Preparing for <span className="highlight" style={{ color: "#10b981", fontWeight: 600 }}>BS in Robotics (Coming Soon)</span>, combining software intelligence with upcoming hardware engineering.
          </p>

          {/* Professional Experience Card: ITS GUJRAT 6-Month Internship */}
          <div className="about-exp-box">
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
              Completed an intensive 6-month software engineering internship specializing in the full MERN stack. Successfully architected, developed, and deployed <strong>2 production-ready full-stack E-Commerce platforms</strong> along with multiple scalable web applications and client modules — implementing custom Express REST APIs, JWT authentication, Stripe payments, and optimized MongoDB schemas.
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

          {/* Current Focus Card: AEGIS-AI & NOVA AI */}
          <div className="about-focus-box" style={{ marginTop: "1.2rem" }}>
            <div className="focus-header">
              <span className="focus-pulse" />
              <span className="focus-label">CURRENT FOCUS</span>
            </div>
            <h3 className="focus-project-name">AEGIS-AI 🛡️ &bull; AUTO-DEV AI 💻 &bull; NOVA AI 🤖</h3>
            <p className="focus-project-desc">Architecting autonomous AI ecosystems: AEGIS-AI (Autonomous SOC &amp; Cyber Defense), AUTO-DEV AI (Autonomous AI Software Engineering Agent), and NOVA AI (Intelligent Desktop Assistant &amp; Automation Engine).</p>
          </div>

          {/* Core Info Tags */}
          <div className="about-facts-grid" style={{ marginTop: "1.2rem" }}>
            <div className="fact-card">
              <span className="fact-label">LOCATION</span>
              <span className="fact-val">Gujrat, Pakistan</span>
            </div>
            <div className="fact-card">
              <span className="fact-label">EXPERIENCE</span>
              <span className="fact-val" style={{ color: "#22d3ee" }}>6 Mo. Intern @ ITS Gujrat</span>
            </div>
            <div className="fact-card">
              <span className="fact-label">ACADEMICS</span>
              <span className="fact-val" style={{ color: "#10b981" }}>BS Robotics (Coming Soon)</span>
            </div>
            <div className="fact-card">
              <span className="fact-label">AVAILABILITY</span>
              <span className="fact-val fact-green">Available for Projects</span>
            </div>
          </div>

          <button className="btn btn-primary" onClick={() => scrollTo("contact")} style={{ marginTop: "1.2rem" }}>
            <span className="btn-glow" />
            Let&apos;s Work Together
          </button>
        </div>
      </div>
    </section>
  );
}
