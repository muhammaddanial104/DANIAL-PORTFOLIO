import { motion } from "framer-motion";

const PILLARS = [
  {
    number: "01",
    tag: "DISCIPLINE",
    title: "Robotics Engineering Rigor",
    desc: "Background in autonomous systems and computational kinematics translates to deterministic logic, defensive programming, and systematic debugging with zero guesswork.",
    highlight: "Deterministic logic & robust architecture",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    number: "02",
    tag: "PROVEN DELIVERY",
    title: "Commercial Production Experience",
    desc: "Completed an intensive 6-month software internship at ITS Gujrat, directly architecting and deploying 2 commercial MERN e-commerce platforms with live client traffic.",
    highlight: "Shipped 2 commercial apps at ITS Gujrat",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    number: "03",
    tag: "AI AUTOMATION",
    title: "Autonomous AI Agents & n8n Workflows",
    desc: "Going beyond static UI to design autonomous multi-agent pipelines, n8n webhook orchestrations, custom LLM tool-calling, and embeddable intelligent mini chatbots.",
    highlight: "Agentic pipelines & n8n webhooks",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m4.93 4.93 4.24 4.24" />
        <path d="m14.83 9.17 4.24-4.24" />
        <path d="m14.83 14.83 4.24 4.24" />
        <path d="m9.17 14.83-4.24 4.24" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    number: "04",
    tag: "FULL STACK",
    title: "Modular Python/Django & MERN Scalability",
    desc: "Clean separation of concerns with Django REST framework, Express.js microservices, optimized MongoDB/PostgreSQL schemas, and rapid frontend state management.",
    highlight: "Enterprise REST APIs & database integrity",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    number: "05",
    tag: "PARTNERSHIP",
    title: "Direct Communication & Tight Execution",
    desc: "Short decision paths, rapid prototyping, and transparent progress updates. No intermediary bureaucracy — technical clarity from day one to live deployment.",
    highlight: "Fast iterations, zero communication loss",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function ValuePillars() {
  return (
    <section className="hmh-pillars-section" id="value-pillars" aria-label="Why Engineering Teams Value Working With Me">
      <div className="section-container">
        {/* Section Header (Media-Harbour Style) */}
        <motion.div
          className="hmh-section-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hmh-badge-pill">
            <span className="hmh-badge-dot"></span>
            <span>PROVEN METHODOLOGY &amp; TRUST</span>
          </div>

          <h2 className="hmh-section-title">
            Why Teams &amp; Clients Value <span className="hmh-gradient-text">Our Collaboration</span>.
          </h2>

          <p className="hmh-section-desc">
            Just like leading European digital agencies, modern engineering requires more than code — it demands reliability, transparent delivery, and cutting-edge automation.
          </p>
        </motion.div>

        {/* 5 Pillars Luxury Card Grid */}
        <div className="hmh-pillars-grid">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              className={`hmh-pillar-card ${idx === 0 || idx === 1 ? "hmh-pillar-card-prominent" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              data-cursor-text="Trust"
            >
              <div className="hmh-pillar-glow" aria-hidden="true"></div>

              <div className="hmh-pillar-top">
                <span className="hmh-pillar-number">{pillar.number}</span>
                <span className="hmh-pillar-tag">{pillar.tag}</span>
                <div className="hmh-pillar-icon" aria-hidden="true">
                  {pillar.icon}
                </div>
              </div>

              <h3 className="hmh-pillar-title">{pillar.title}</h3>
              <p className="hmh-pillar-desc">{pillar.desc}</p>

              <div className="hmh-pillar-footer">
                <span className="hmh-pillar-check">✓</span>
                <span className="hmh-pillar-highlight">{pillar.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
