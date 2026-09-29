import { useState } from "react";

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");

  const skillsData = [
    {
      id: "react",
      name: "React",
      category: "frontend",
      role: "Frontend Library",
      level: "95%",
      color: "#00d8ff",
      iconSvg: (
        <svg viewBox="0 0 115.3 100" width="36" height="36" fill="currentColor">
          <ellipse cx="57.65" cy="50" rx="16.5" ry="49.5" fill="none" stroke="#00d8ff" strokeWidth="4.5" transform="rotate(30 57.65 50)"/>
          <ellipse cx="57.65" cy="50" rx="16.5" ry="49.5" fill="none" stroke="#00d8ff" strokeWidth="4.5" transform="rotate(90 57.65 50)"/>
          <ellipse cx="57.65" cy="50" rx="16.5" ry="49.5" fill="none" stroke="#00d8ff" strokeWidth="4.5" transform="rotate(150 57.65 50)"/>
          <circle cx="57.65" cy="50" r="9" fill="#00d8ff"/>
        </svg>
      ),
    },
    {
      id: "nextjs",
      name: "Next.js",
      category: "frontend",
      role: "Full Stack Framework",
      level: "90%",
      color: "#ffffff",
      iconSvg: (
        <svg viewBox="0 0 180 180" width="36" height="36" fill="none">
          <circle cx="90" cy="90" r="85" fill="#000000" stroke="#38bdf8" strokeWidth="4"/>
          <path d="M149.5 153.5L78.8 62H62v56h14.5V81.4l62.4 80.5c3.6-2.5 7.1-5.3 10.6-8.4z" fill="#ffffff"/>
          <rect x="115" y="62" width="14" height="56" fill="#ffffff"/>
        </svg>
      ),
    },
    {
      id: "nodejs",
      name: "Node.js",
      category: "backend",
      role: "Backend Runtime",
      level: "92%",
      color: "#22c55e",
      iconSvg: (
        <svg viewBox="0 0 256 289" width="36" height="36" fill="#22c55e">
          <path d="M128 0L6 70.4v148.1l122 70.5 122-70.5V70.4L128 0zm0 25.5l102.5 59.2v124.6L128 268.5 25.5 209.3V84.7L128 25.5z"/>
          <path d="M128 65l60 34.6v69.3L128 203.5 68 168.9V99.6L128 65z"/>
        </svg>
      ),
    },
    {
      id: "express",
      name: "Express.js",
      category: "backend",
      role: "Web Framework",
      level: "90%",
      color: "#cbd5e1",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
      ),
    },
    {
      id: "mongodb",
      name: "MongoDB",
      category: "database",
      role: "NoSQL Database",
      level: "88%",
      color: "#10b981",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="#10b981">
          <path d="M12 1.5C11.5 3 7 8 7 13.5c0 3.5 2.5 6.5 5 7.5 2.5-1 5-4 5-7.5C17 8 12.5 3 12 1.5zm.3 17.5v-15c1.8 1.8 3.5 4.8 3.5 8 0 2.5-1.5 5.5-3.5 7z"/>
        </svg>
      ),
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      category: "frontend",
      role: "Modern Styling",
      level: "96%",
      color: "#38bdf8",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="#38bdf8">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
        </svg>
      ),
    },
    {
      id: "git",
      name: "Git & GitHub",
      category: "tools",
      role: "Version Control",
      level: "94%",
      color: "#f97316",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="6" y1="3" x2="6" y2="15"></line>
          <circle cx="18" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <path d="M18 9a9 9 0 0 1-9 9"></path>
        </svg>
      ),
    },
    {
      id: "python",
      name: "Python",
      category: "ai",
      role: "AI & Scripting",
      level: "92%",
      color: "#facc15",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="#facc15">
          <path d="M11.922 0c-3.327 0-5.467.625-6.31 1.776-.783 1.07-.638 2.875-.638 4.398h6.948v.99H4.975C3.398 7.164 1.93 8.358 1.34 9.945c-.687 1.85-.708 3.864 0 5.76.623 1.684 2.148 2.827 3.635 2.827h1.996v-2.973c0-1.74 1.488-3.21 3.23-3.21h4.945V7.404c0-2.37-1.923-4.404-4.224-4.404zm-1.89 1.485c.548 0 .99.444.99.99 0 .55-.442.99-.99.99a.99.99 0 0 1-.99-.99c0-.546.442-.99.99-.99zM12.078 24c3.327 0 5.467-.625 6.31-1.776.783-1.07.638-2.875.638-4.398h-6.948v-.99h6.947c1.577 0 3.045-1.194 3.635-2.78.687-1.85.708-3.864 0-5.76-.623-1.685-2.148-2.828-3.635-2.828h-1.996v2.973c0 1.74-1.488 3.21-3.23 3.21H8.854v4.945c0 2.37 1.923 4.404 4.224 4.404zm1.89-1.485a.99.99 0 0 1-.99-.99c0-.55.442-.99.99-.99.548 0 .99.44.99.99 0 .546-.442.99-.99.99z"/>
        </svg>
      ),
    },
    {
      id: "javascript",
      name: "JavaScript",
      category: "frontend",
      role: "ES6+ Core",
      level: "95%",
      color: "#eab308",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="#eab308">
          <path d="M3 3h18v18H3V3zm13.7 13.9c-.8.5-1.8.8-2.7.8-2.2 0-3.6-1.3-3.6-3.4 0-2.4 1.6-3.6 3.7-3.6.9 0 1.7.3 2.3.7l-.7 1.6c-.5-.3-1-.5-1.6-.5-1.1 0-1.8.7-1.8 1.8 0 1.1.7 1.8 1.8 1.8.6 0 1.2-.2 1.6-.4v-1.1h-1.8v-1.6h3.9v3.9zm-7.6-5.8h2.1v6h-2.1v-6z"/>
        </svg>
      ),
    },
    {
      id: "fastapi",
      name: "FastAPI",
      category: "backend",
      role: "High-Speed Python APIs",
      level: "89%",
      color: "#14b8a6",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="#14b8a6">
          <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm1.09 4.887a.75.75 0 0 1 .74.872l-.74 3.702h3.04a.75.75 0 0 1 .59 1.213l-6.52 8.441a.75.75 0 0 1-1.33-.659l.74-3.702H6.57a.75.75 0 0 1-.59-1.213l6.52-8.441a.75.75 0 0 1 .59-.213z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="section-container skills-section">
      {/* Section Header */}
      <div className="section-header skills-header-flex">
        <div>
          <div className="section-badge">
            <span className="badge-num">02</span>
            <span className="badge-sep">|</span>
            <span className="badge-title">Skills</span>
          </div>
          <h2 className="section-main-heading">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <a
          href="https://github.com/muhammaddanial104"
          target="_blank"
          rel="noopener noreferrer"
          className="view-all-skills-btn"
        >
          <span>View All on GitHub</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>

      <div className="skills-layout-grid">
        {/* Left Area: 10 3D Glass Pedestals */}
        <div className="skills-pedestals-grid">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="tech-pedestal-card"
              style={{ "--tech-color": skill.color }}
            >
              {/* 3D Top Rim Glow */}
              <div className="pedestal-top-glow"></div>

              {/* Floating Tech Icon */}
              <div className="pedestal-icon-box">
                {skill.iconSvg}
              </div>

              {/* Pedestal Title & Role */}
              <div className="pedestal-info">
                <h3 className="pedestal-name">{skill.name}</h3>
                <span className="pedestal-role">{skill.role}</span>
              </div>

              {/* Bottom 3D Bevel Slab */}
              <div className="pedestal-bottom-slab">
                <div className="pedestal-level-track">
                  <div
                    className="pedestal-level-fill"
                    style={{ width: skill.level, backgroundColor: skill.color }}
                  ></div>
                </div>
                <span className="pedestal-level-text">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Area: Currently Learning Panel + Astronaut Visual */}
        <div className="skills-learning-col">
          <div className="currently-learning-card">
            <div className="learning-badge">
              <span className="learning-dot"></span>
              <span className="learning-title">Currently Mastering</span>
            </div>

            <h3 className="learning-heading">Next-Gen Tech Stack</h3>

            <ul className="learning-list">
              <li className="learning-item">
                <span className="item-icon">🚀</span>
                <div className="item-text">
                  <strong>AI Multi-Agent Systems</strong>
                  <p>Autonomous tool-calling, ReAct loops & orchestration</p>
                </div>
              </li>

              <li className="learning-item">
                <span className="item-icon">🛡️</span>
                <div className="item-text">
                  <strong>Cyber Security & Recon</strong>
                  <p>Automated vulnerability scanning & security auditing</p>
                </div>
              </li>

              <li className="learning-item">
                <span className="item-icon">⚡</span>
                <div className="item-text">
                  <strong>High-Concurrency System Design</strong>
                  <p>Distributed backends, Redis caching & microservices</p>
                </div>
              </li>

              <li className="learning-item">
                <span className="item-icon">🎓</span>
                <div className="item-text">
                  <strong>Bachelor in Robotics</strong>
                  <p>Autonomous decision algorithms & embedded AI</p>
                </div>
              </li>
            </ul>

            {/* Quote */}
            <div className="learning-quote">
              <span className="quote-mark">“</span>
              <p>Continuous learning is the minimum requirement for success in any field.</p>
            </div>

            {/* Astronaut Cosmic Graphic */}
            <div className="skills-astronaut-box">
              <img
                src="/images/skills-astronaut.jpg"
                alt="Cosmic Astronaut"
                className="skills-astronaut-img"
              />
              <div className="astronaut-glow-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
