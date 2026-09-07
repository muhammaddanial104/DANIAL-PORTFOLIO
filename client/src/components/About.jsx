// ═══════════════════════════════════════════════════
// COMPONENT: About.jsx — SHORT & GENUINE
// Highlights: BS Robotics, AI Agents, Automation,
// Web Dev, APIs & Current Focus: NOVA AI
// ═══════════════════════════════════════════════════

export default function About() {
  const PILLARS = [
    { title: "BS ROBOTICS",     icon: "🎓", desc: "Engineering & Intelligent Machines" },
    { title: "AI Agents",       icon: "🤖", desc: "Autonomous Systems & LLM Workflows" },
    { title: "Automation",      icon: "⚙️", desc: "Task & Browser Automation" },
    { title: "Web Development", icon: "🌐", desc: "Modern Full-Stack Applications" },
    { title: "APIs",            icon: "🔌", desc: "Robust API Integration & Pipelines" },
  ];

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
            {PILLARS.map((p) => (
              <div className="about-pillar-tag" key={p.title}>
                <span className="pillar-icon">{p.icon}</span>
                <span className="pillar-title">{p.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Info Column */}
        <div className="about-info-col">
          <p className="about-intro">
            Hey, I&apos;m <span className="text-purple">Muhammad Danial</span> —
            an AI Agent Developer &amp; Automation Engineer from Gujrat, Pakistan.
          </p>

          <p className="about-body">
            I specialize in building autonomous AI agents, automated workflows, and robust web applications with seamless API integrations.
            Currently pursuing <span className="highlight">BS in Robotics</span>, combining engineering principles with modern software to create intelligent, production-ready systems.
          </p>

          {/* Current Focus Card */}
          <div className="about-focus-box">
            <div className="focus-header">
              <span className="focus-pulse" />
              <span className="focus-label">CURRENT FOCUS</span>
            </div>
            <h3 className="focus-project-name">NOVA AI 🤖</h3>
            <p className="focus-project-desc">
              Building an autonomous AI desktop assistant designed to control computers, manage files, automate browsers, generate content, and orchestrate complex tasks.
            </p>
          </div>

          {/* Key Facts */}
          <div className="about-facts-grid">
            <div className="fact-card">
              <span className="fact-label">LOCATION</span>
              <span className="fact-val">Gujrat, Pakistan</span>
            </div>
            <div className="fact-card">
              <span className="fact-label">EDUCATION</span>
              <span className="fact-val">BS in Robotics</span>
            </div>
            <div className="fact-card">
              <span className="fact-label">CORE FOCUS</span>
              <span className="fact-val">AI Agents &amp; Automation</span>
            </div>
            <div className="fact-card">
              <span className="fact-label">AVAILABILITY</span>
              <span className="fact-val fact-green">Available for Projects</span>
            </div>
          </div>

          {/* Action CTA */}
          <button className="btn btn-primary" onClick={() => scrollTo("contact")}>
            <span className="btn-glow" />
            Let&apos;s Work Together
          </button>
        </div>
      </div>
    </section>
  );
}