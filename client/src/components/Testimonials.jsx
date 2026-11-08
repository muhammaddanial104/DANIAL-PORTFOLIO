import { motion } from "framer-motion";
import "./Testimonials.css";
import TiltCard from "./TiltCard";
import { TESTIMONIALS_DATA } from "../data/testimonialsData";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-container testimonials-section" aria-labelledby="testimonials-heading">
      {/* Section Header */}
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-badge">
          <span className="badge-num">05</span>
          <span className="badge-sep">|</span>
          <span className="badge-title">Social Proof &amp; Verified Feedback</span>
        </div>
        <h2 id="testimonials-heading" className="section-main-heading">
          ENGINEERING ENDORSEMENTS &amp; <span className="gradient-text">CLIENT FEEDBACK</span>
        </h2>
        <p className="section-subtitle">
          Real feedback from commercial engineering leadership, client deliverables, and academic robotics faculty.
        </p>
      </motion.div>

      {/* Testimonials 3-Column Grid */}
      <div className="testimonials-cards-grid">
        {TESTIMONIALS_DATA.map((item, idx) => (
          <TiltCard key={item.name} className="testimonial-tilt-card" maxTilt={8} glare={true}>
            <motion.div
              className="testimonial-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              style={{ "--accent-color": item.accentColor }}
            >
              {/* Header: Verified Badge & Star Rating */}
              <div className="testimonial-card-header">
                <span className={`testimonial-badge badge-${item.badgeType}`}>
                  {item.badge}
                </span>
                <div className="testimonial-stars" aria-label="5 out of 5 stars">
                  {"★".repeat(5)}
                </div>
              </div>

              {/* Quote Body */}
              <p className="testimonial-quote">"{item.quote}"</p>

              {/* Verified Skills Applied Chips */}
              <div className="testimonial-skills-row">
                {item.skills.map((skill) => (
                  <span key={skill} className="t-skill-pill">{skill}</span>
                ))}
              </div>

              {/* Author Info */}
              <div className="testimonial-author-row">
                <div className="author-avatar-badge" aria-hidden="true">
                  <span>{item.avatarText}</span>
                </div>
                <div className="author-info">
                  <h4 className="author-name">{item.name}</h4>
                  <p className="author-role">{item.role}</p>
                  <p className="author-company">{item.company}</p>
                </div>
              </div>
            </motion.div>
          </TiltCard>
        ))}
      </div>

      {/* Transparency Note */}
      <div className="testimonials-trust-note">
        <span className="trust-icon" aria-hidden="true">🛡️</span>
        <span className="trust-text">
          Authentic commercial client deliverables &amp; academic references. Full verification contact details available to recruiters upon request.
        </span>
      </div>
    </section>
  );
}
