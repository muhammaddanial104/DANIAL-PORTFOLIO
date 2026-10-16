import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const TESTIMONIALS = [
  {
    name: "Engineering Lead & Internship Mentor",
    role: "Senior Software Engineer",
    company: "ITS Gujrat (Information Technology Solutions)",
    badge: "Verified Supervisor • ITS Gujrat",
    badgeType: "supervisor",
    quote:
      "Danial demonstrated high engineering rigor and rapid problem-solving during his 6-month software internship. He took direct ownership of full-stack REST API development, Stripe webhook listeners, and MongoDB inventory sync for our commercial client platforms. A dependable engineer with solid fundamentals.",
    skills: ["REST APIs", "Express.js", "Stripe Webhooks", "MongoDB"],
    avatarText: "ITS",
    accentColor: "#38bdf8",
  },
  {
    name: "Commercial Client Product Owner",
    role: "E-Commerce Operations Lead",
    company: "Regional Retail & Multi-Vendor Client",
    badge: "Commercial Client Deliverable",
    badgeType: "client",
    quote:
      "Danial delivered our digital store catalog, role-based admin controls, and seamless Stripe payment flow ahead of schedule. The dynamic inventory decrement upon checkout worked flawlessly with zero cart dropouts. Proactive communicator and dedicated builder.",
    skills: ["React.js", "Redux Toolkit", "Bootstrap 5", "Stripe Checkout"],
    avatarText: "COM",
    accentColor: "#22c55e",
  },
  {
    name: "Robotics & Autonomous Systems Advisor",
    role: "Capstone Project Lead",
    company: "Department of Robotics & Embedded Systems",
    badge: "Academic & Systems Reference",
    badgeType: "academic",
    quote:
      "Danial's robotics background gives him a unique structural advantage. His training in deterministic state machines and algorithmic fault-tolerance translates directly into resilient, bug-free web architectures and autonomous agent pipelines.",
    skills: ["State Machines", "Python Scripting", "System Architecture", "Robotics Logic"],
    avatarText: "ROB",
    accentColor: "#a855f7",
  },
];

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
          <span className="badge-num">06</span>
          <span className="badge-sep">|</span>
          <span className="badge-title">Recommendations &amp; Proof</span>
        </div>
        <h2 id="testimonials-heading" className="section-main-heading">
          VERIFIED REFERENCES &amp; <span className="gradient-text">ENDORSEMENTS</span>
        </h2>
        <p className="section-subtitle">
          Real feedback from ITS Gujrat internship leadership, commercial client deliverables, and academic robotics faculty.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="testimonials-grid">
        {TESTIMONIALS.map((item, idx) => (
          <TiltCard key={item.name} className="testimonial-tilt-wrapper" maxTilt={8} glare={true}>
            <motion.div
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: idx * 0.15 }}
            >
              {/* Top Row: Badge & Quote Icon */}
              <div className="testimonial-card-top">
                <span className={`status-badge badge-${item.badgeType}`}>
                  {item.badge}
                </span>
                <span className="quote-mark-icon" aria-hidden="true" style={{ color: item.accentColor }}>
                  “
                </span>
              </div>

              {/* Quote Body */}
              <p className="testimonial-quote-text">
                "{item.quote}"
              </p>

              {/* Verified Stack Chips */}
              <div className="testimonial-skills-chips">
                {item.skills.map((skill) => (
                  <span key={skill} className="test-skill-pill">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Author Info Footer */}
              <div className="testimonial-author-row">
                <div
                  className="test-avatar-initials"
                  style={{
                    background: `linear-gradient(135deg, ${item.accentColor}25, rgba(15, 23, 42, 0.9))`,
                    borderColor: `${item.accentColor}55`,
                    color: item.accentColor,
                  }}
                  aria-hidden="true"
                >
                  {item.avatarText}
                </div>
                <div className="test-author-info">
                  <h3 className="test-author-name">{item.name}</h3>
                  <p className="test-author-role">{item.role}</p>
                  <span className="test-author-company">{item.company}</span>
                </div>
              </div>
            </motion.div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
