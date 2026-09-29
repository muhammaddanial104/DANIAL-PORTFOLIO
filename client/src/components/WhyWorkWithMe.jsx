export default function WhyWorkWithMe() {
  const pillars = [
    {
      icon: "⚙️",
      title: "Robotics & Systems Engineering Rigor",
      description:
        "My background in a Bachelor in Robotics trains me in state machines, failure recovery, and deterministic execution. I don't build fragile wrapper scripts; I architect robust autonomous agents that recover gracefully from errors.",
    },
    {
      icon: "💼",
      title: "Commercial Production Experience",
      description:
        "Completed a rigorous 6-month software engineering internship at ITS Gujrat, shipping two full-scale MERN E-Commerce platforms with real payment processing, user authentication, and inventory sync.",
    },
    {
      icon: "🎯",
      title: "Autonomous Action vs. Mere Chatbots",
      description:
        "Most developers build chat interfaces that just talk. I engineer action-oriented AI agents equipped with tool-calling, custom API webhooks, headless web scrapers, and database write capabilities that do real work.",
    },
    {
      icon: "🌐",
      title: "Full-Stack End-to-End Ownership",
      description:
        "From sleek responsive React frontends and high-speed FastAPI/Node backends to vector databases and cloud deployment, I take complete end-to-end ownership of your software system without handoff friction.",
    },
  ];

  return (
    <section id="why-me" className="section-container why-me-section">
      {/* Section Header */}
      <div className="section-header">
        <div className="section-badge">
          <span className="badge-num">10</span>
          <span className="badge-sep">|</span>
          <span className="badge-title">Engineering Philosophy</span>
        </div>
        <h2 className="section-main-heading">
          Why Work <span className="gradient-text">With Me</span>
        </h2>
        <p className="section-subtitle">
          Proven problem solving, robotics systems discipline, and production software experience — zero generic claims.
        </p>
      </div>

      <div className="why-pillars-grid">
        {pillars.map((p, idx) => (
          <div key={idx} className="why-pillar-card">
            <div className="pillar-icon-box">{p.icon}</div>
            <h3 className="pillar-title">{p.title}</h3>
            <p className="pillar-desc">{p.description}</p>
            <div className="pillar-card-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
