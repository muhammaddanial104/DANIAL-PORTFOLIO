import { motion } from "framer-motion";

const TECH_ITEMS = [
  { name: "React.js", category: "Frontend Core", icon: "⚛️" },
  { name: "AI Agents", category: "Agentic AI", icon: "🤖" },
  { name: "n8n Automations", category: "Workflow Engine", icon: "⚡" },
  { name: "Python", category: "Backend & AI", icon: "🐍" },
  { name: "Django REST", category: "Modular API", icon: "🎯" },
  { name: "Node.js", category: "Runtime", icon: "🟢" },
  { name: "Express.js", category: "Web Services", icon: "🚂" },
  { name: "MongoDB", category: "Database", icon: "🍃" },
  { name: "Bootstrap 5", category: "Responsive UI", icon: "🅱️" },
  { name: "PostgreSQL", category: "Relational DB", icon: "🐘" },
  { name: "Stripe API", category: "Fintech Payments", icon: "💳" },
  { name: "Docker", category: "Containers", icon: "🐳" },
  { name: "Vite", category: "Build Tooling", icon: "⚡" },
  { name: "Git & GitHub", category: "Version Control", icon: "🐙" },
  { name: "RESTful APIs", category: "Architecture", icon: "🔌" },
  { name: "Robotics Kinematics", category: "Engineering Rigor", icon: "🦾" },
];

export default function TechMarquee() {
  // Duplicate for seamless infinite loop
  const duplicatedItems = [...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <div className="hmh-marquee-wrapper" aria-label="Core Technology Stack and Tools">
      <div className="hmh-marquee-fade-left" aria-hidden="true"></div>
      <div className="hmh-marquee-fade-right" aria-hidden="true"></div>

      <div className="hmh-marquee-track">
        {duplicatedItems.map((item, idx) => (
          <div key={`${item.name}-${idx}`} className="hmh-marquee-item">
            <span className="hmh-marquee-icon">{item.icon}</span>
            <div className="hmh-marquee-content">
              <span className="hmh-marquee-name">{item.name}</span>
              <span className="hmh-marquee-cat">{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
