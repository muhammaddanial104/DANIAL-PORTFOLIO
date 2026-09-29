import { motion } from "framer-motion";

export default function WhyWorkWithMe() {
  const pillars = [
    {
      icon: "⚙️",
      title: "Robotics & Systems Engineering Rigor",
      description:
        "My background in a Bachelor in Robotics trains me in state machines, failure recovery, and deterministic execution. I don't build fragile wrapper scripts; I architect robust autonomous systems that recover gracefully from real-world edge cases.",
    },
    {
      icon: "💼",
      title: "Commercial Production Track Record",
      description:
        "Completed a rigorous 6-month software engineering internship at ITS Gujrat, engineering and launching two production MERN e-commerce platforms with live payment processing, JWT authentication, and inventory engines.",
    },
    {
      icon: "🎯",
      title: "Autonomous Action vs. Superficial Bots",
      description:
        "Most developers build simple prompt wrappers that only generate text. I engineer action-oriented AI agents equipped with custom tool-calling, API webhooks, headless scrapers, and database writes that execute real work.",
    },
    {
      icon: "🌐",
      title: "Full-Stack End-to-End Ownership",
      description:
        "From sleek responsive React frontends and high-speed Node.js/Python backends to database schemas, cloud infrastructure, and deployment, I take complete architectural ownership without handoff friction.",
    },
  ];

  return (
    <section id="why-me" className="section-container why-me-section">
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
          <span className="badge-title">Engineering Philosophy</span>
        </div>
        <h2 className="section-main-heading">
          WHY WORK WITH ME &amp; <span className="gradient-text">ENGINEERING ADVANTAGE</span>
        </h2>
        <p className="section-subtitle">
          Systematic engineering rigor, commercial production experience, and autonomous action—delivering measurable business impact.
        </p>
      </motion.div>

      <div className="why-pillars-grid">
        {pillars.map((p, idx) => (
          <motion.div
            key={idx}
            className="why-pillar-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <div className="pillar-icon-box">{p.icon}</div>
            <h3 className="pillar-title">{p.title}</h3>
            <p className="pillar-desc">{p.description}</p>
            <div className="pillar-card-glow"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
