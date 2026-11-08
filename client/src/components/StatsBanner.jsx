import { motion } from "framer-motion";
import "./StatsBanner.css";
import CountUp from "./CountUp";
import { STATS_DATA } from "../data/statsData";

export default function StatsBanner() {
  return (
    <section className="stats-banner-section" aria-label="Key Professional Milestones">
      <div className="stats-banner-container">
        <div className="stats-cards-grid">
          {STATS_DATA.map((item, idx) => (
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
