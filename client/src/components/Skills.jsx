import { motion } from "framer-motion";
import "./Skills.css";
import { PROVEN_CATEGORIES, LEARNING_SKILLS, PROVEN_TECH_TAGS } from "../data/skillsData";

export default function Skills() {
  return (
    <section id="skills" className="section-container skills-section" aria-labelledby="skills-heading">
      {/* Section Header */}
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-badge">
          <span className="badge-num">03</span>
          <span className="badge-sep">|</span>
          <span className="badge-title">Technical Capabilities</span>
        </div>
        <h2 id="skills-heading" className="section-main-heading">
          ENGINEERING STACK &amp; <span className="gradient-text">SYSTEMS EXPERTISE</span>
        </h2>
        <p className="section-subtitle">
          Specialized in autonomous AI Agents, n8n webhook automations, Python &amp; Django REST backends, and decoupled Full-Stack web platforms.
        </p>
      </motion.div>

      {/* 4 Proven Categories Grid */}
      <div className="skills-proven-grid">
        {PROVEN_CATEGORIES.map((category, catIdx) => (
          <motion.div
            key={category.title}
            className="skill-category-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            style={{ "--accent-color": category.color }}
          >
            {/* Category Header */}
            <div className="skill-cat-header">
              <span className="skill-cat-icon" aria-hidden="true">{category.icon}</span>
              <h3 className="skill-cat-title">{category.title}</h3>
              <span className="cat-badge-proven">{category.badge}</span>
            </div>

            {/* Individual Skills List with Concrete Deliverable Proof */}
            <div className="skills-list">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-item-row">
                  <div className="skill-item-header">
                    <span className="skill-item-name">{skill.name}</span>
                    <span className="skill-item-badge">{skill.badge}</span>
                  </div>
                  <p className="skill-item-proof">{skill.proof}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Currently Learning / Growth Horizon Block */}
      <motion.div
        className="learning-horizon-container"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="learning-horizon-header">
          <div className="learning-badge">
            <span className="learning-dot" aria-hidden="true"></span>
            <span>GROWTH HORIZON • CURRENTLY ACTIVE</span>
          </div>
          <h3 className="learning-title">Continuously Expanding Engineering Depth</h3>
        </div>

        <div className="learning-grid">
          {LEARNING_SKILLS.map((item) => (
            <div key={item.name} className="learning-card">
              <div className="learning-card-top">
                <span className="learning-card-title">{item.name}</span>
                <span className="learning-tag">{item.tag}</span>
              </div>
              <p className="learning-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Verified Tech Marquee / Quick Tags */}
      <motion.div
        className="tech-tags-cloud-wrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="cloud-label">⚡ CORE PRODUCTION TECHNOLOGIES:</div>
        <div className="cloud-tags-row">
          {PROVEN_TECH_TAGS.map((tag) => (
            <span key={tag} className="cloud-tag-pill">{tag}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
