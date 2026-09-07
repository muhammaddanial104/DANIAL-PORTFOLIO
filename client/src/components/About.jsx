// ═══════════════════════════════════════════════════
// COMPONENT: About.jsx — SHORT & GENUINE (MAX 3-4 LINES)
// BS Robotics (Coming Soon), AI Agents, Automation, Web Dev, APIs, NOVA AI
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
            <div className="about-pillar-tag">
              <span className="pillar-icon">🤖</span>
              <span className="pillar-title">AI Agents</span>
            </div>
            <div className="about-pillar-tag">
              <span className="pillar-icon">⚙️</span>
              <span className="pillar-title">Automation</span>
            </div>
            <div className="about-pillar-tag">
              <span className="pillar-icon">🌐</span>
              <span className="pillar-title">Web Development</span>
            </div>
            <div className="about-pillar-tag">
              <span className="pillar-icon">🔌</span>
              <span className="pillar-title">APIs</span>
            </div>
          </div>
        </div>

        {/* Info Column: Crisp, max 3-4 lines */}
        <div className="about-info-col">
          <p className="about-intro">
            Hey, I&apos;m <span className="text-purple">Muhammad Danial</span> —
            an AI Agent Developer &amp; Automation Engineer based in Gujrat, Pakistan.
          </p>

          <p className="about-body">
            I specialize in building autonomous AI agents, intelligent workflow automations, and modern web applications with scalable API integrations.
            Preparing for <span className="highlight" style={{ color: "#10b981", fontWeight: 600 }}>BS in Robotics (Coming Soon)</span>, combining software intelligence with upcoming hardware engineering.
          </p>

          {/* Current Focus Card: NOVA AI */}
          <div className="about-focus-box">
            <div className="focus-header">
              <span className="focus-pulse" />
              <span className="focus-label">CURRENT FOCUS</span>
            </div>
            <h3 className="focus-project-name">NOVA AI 🤖</h3>
            <p className="focus-project-desc">
              Engineering an autonomous AI desktop assistant designed to control computers, manage files, automate browsers, assist with coding, and orchestrate complex tasks.
            </p>
          </div>

          {/* Core Info Tags */}
          <div className="about-facts-grid">
            <div className="fact-card">
              <span className="fact-label">LOCATION</span>
              <span className="fact-val">Gujrat, Pakistan</span>
            </div>
            <div className="fact-card">
              <span className="fact-label">ACADEMICS</span>
              <span className="fact-val" style={{ color: "#10b981" }}>BS Robotics (Coming Soon)</span>
            </div>
            <div className="fact-card">
              <span className="fact-label">SPECIALTY</span>
              <span className="fact-val">AI Agents &amp; Automations</span>
            </div>
            <div className="fact-card">
              <span className="fact-label">AVAILABILITY</span>
              <span className="fact-val fact-green">Available for Projects</span>
            </div>
          </div>

          <button className="btn btn-primary" onClick={() => scrollTo("contact")}>
            <span className="btn-glow" />
            Let&apos;s Work Together
          </button>
        </div>
      </div>
    </section>
  );
}
