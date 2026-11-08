import { motion } from "framer-motion";
import CountUp from "./CountUp";

const STATS = [
  {
    number: 2,
    suffix: "+",
    title: "Commercial Platforms",
    detail: "Shipped production web architectures with live Stripe payments",
    icon: "🚀",
  },
  {
    number: 6,
    suffix: "+",
    title: "Full-Stack & AI Systems",
    detail: "Modern Full-Stack, Python/Django & n8n agentic workflows",
    icon: "⚡",
  },
  {
    number: 100,
    suffix: "%",
    title: "Deterministic Code Logic",
    detail: "Robotics computational background applied to resilient software",
    icon: "🎓",
  },
  {
    number: 24,
    suffix: "/7",
    title: "Autonomous Automations",
    detail: "Self-driving agent pipelines and real-time webhook routing",
    icon: "🤖",
  },
];

export default function StatsBanner() {
  return (
    <section className="stats-banner-section" aria-label="Key Professional Milestones">
      <div className="stats-banner-container">
        <div className="stats-cards-grid">
          {STATS.map((item, idx) => (
            <motion.div
              key={item.title}
              className="stat-metric-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -3, borderColor: "rgba(56, 189, 248, 0.45)" }}
            >
              <div className="stat-card-header">
                <span className="stat-icon" aria-hidden="true">{item.icon}</span>
                <span className="stat-number">
                  <CountUp end={item.number} suffix={item.suffix} />
                </span>
              </div>
              <h3 className="stat-title">{item.title}</h3>
              <p className="stat-detail">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
