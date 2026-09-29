// ═══════════════════════════════════════════════════
// COMPONENT: Skills.jsx — REDESIGNED TO MATCH REFERENCE IMAGE
// Section 02: My Skills
// - Glowing 3D Glass Pedestal Tech Icons (React, Next.js, Node.js, Express, MongoDB, Tailwind, Git, Python, JS, etc.)
// - "Currently Learning" glass panel (Advanced MERN, System Design, Cyber Security, AI & Machine Learning, Robotics)
// - Preserves all authentic skills categories and tech tags
// ═══════════════════════════════════════════════════
import { useState } from "react";

// Top Showcase Tech Cards (Matches the 10 pedestal cards in reference image)
const FEATURED_TECH = [
  // Top Row (Primary Core)
  {
    name: "React",
    role: "Frontend",
    glow: "rgba(34, 211, 238, 0.4)",
    borderColor: "rgba(34, 211, 238, 0.4)",
    textColor: "#67e8f9",
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" width="36" height="36" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#67e8f9"/>
        <g stroke="#67e8f9" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    role: "Full-Stack",
    glow: "rgba(255, 255, 255, 0.3)",
    borderColor: "rgba(255, 255, 255, 0.35)",
    textColor: "#ffffff",
    icon: (
      <svg viewBox="0 0 180 180" width="36" height="36" fill="none">
        <mask id="next-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#next-mask)">
          <circle cx="90" cy="90" r="90" fill="#000000" stroke="#ffffff" strokeWidth="6" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#next-paint0)" />
          <rect x="115" y="54" width="12" height="72" fill="url(#next-paint1)" />
        </g>
        <defs>
          <linearGradient id="next-paint0" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="next-paint1" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Node.js",
    role: "Backend",
    glow: "rgba(34, 197, 94, 0.4)",
    borderColor: "rgba(34, 197, 94, 0.4)",
    textColor: "#4ade80",
    icon: (
      <svg viewBox="0 0 32 32" width="36" height="36" fill="#4ade80">
        <path d="M16 2.375L3.125 9.75v14.75L16 31.875l12.875-7.375V9.75L16 2.375zm-1.25 4.313l9.875 5.687-3.438 2-6.437-3.687v-4zm2.5 0v4l-6.438 3.687-3.437-2 9.875-5.687zm-11.875 8.125l3.438 2v7.375l-3.438-2v-7.375zm13.125 14.125l-9.875-5.688 3.438-2 6.437 3.688v4zm2.5 0v-4l6.438-3.688 3.437 2-9.875 5.688zm10.625-8.75l-3.438 2v-7.375l3.438-2v7.375z"/>
      </svg>
    ),
  },
  {
    name: "Express.js",
    role: "REST APIs",
    glow: "rgba(168, 85, 247, 0.4)",
    borderColor: "rgba(168, 85, 247, 0.4)",
    textColor: "#c084fc",
    icon: (
      <svg viewBox="0 0 64 64" width="36" height="36" fill="none">
        <rect width="64" height="64" rx="14" fill="#0f172a" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="2"/>
        <text x="32" y="42" textAnchor="middle" fill="#c084fc" fontFamily="'Rajdhani', sans-serif" fontWeight="800" fontSize="24">
          EX
        </text>
      </svg>
    ),
  },

  // Bottom Row (Ecosystem & Languages)
  {
    name: "MongoDB",
    role: "Database",
    glow: "rgba(16, 185, 129, 0.35)",
    borderColor: "rgba(16, 185, 129, 0.35)",
    textColor: "#34d399",
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#34d399">
        <path d="M12 0C11.5 3.5 6 9.5 6 15c0 3.5 2.5 6.5 6 9 3.5-2.5 6-5.5 6-9 0-5.5-5.5-11.5-6-15zm.2 21.8c-.1-.7-.2-1.3-.2-1.8 0-4.6 3.2-8.5 3.2-8.5s-1.8 4.2-1.8 7.3c0 1.2.4 2.1 1 2.8-.7.4-1.5.6-2.2.2z"/>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    role: "UI Styling",
    glow: "rgba(56, 189, 248, 0.35)",
    borderColor: "rgba(56, 189, 248, 0.35)",
    textColor: "#38bdf8",
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#38bdf8">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
      </svg>
    ),
  },
  {
    name: "Git & GitHub",
    role: "DevOps",
    glow: "rgba(244, 63, 94, 0.35)",
    borderColor: "rgba(244, 63, 94, 0.35)",
    textColor: "#fb7185",
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#fb7185">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: "Python",
    role: "AI & Agents",
    glow: "rgba(59, 130, 246, 0.4)",
    borderColor: "rgba(59, 130, 246, 0.4)",
    textColor: "#60a5fa",
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#60a5fa">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.75h5.803v.825H3.92S0 5.77 0 11.902c0 6.134 3.42 5.92 3.42 5.92h2.043v-2.876s-.11-3.428 3.373-3.428h5.77s3.262.052 3.262-3.155V2.656S18.337 0 11.914 0zm-3.16 1.832c.575 0 1.042.467 1.042 1.042 0 .576-.467 1.043-1.042 1.043-.576 0-1.043-.467-1.043-1.043 0-.575.467-1.042 1.043-1.042zM12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.75h-5.803v-.825h8.089s3.92.46 3.92-5.672c0-6.134-3.42-5.92-3.42-5.92h-2.043v2.876s.11 3.428-3.373 3.428h-5.77s-3.262-.052-3.262 3.155v5.717S5.663 24 12.086 24zm3.16-1.832c-.575 0-1.042-.467-1.042-1.042 0-.576.467-1.043 1.042-1.043.576 0 1.043.467 1.043 1.043 0 .575-.467 1.042-1.043 1.042z"/>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    role: "Language",
    glow: "rgba(234, 179, 8, 0.4)",
    borderColor: "rgba(234, 179, 8, 0.4)",
    textColor: "#facc15",
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#facc15">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.017-.892-1.819-2.073-2.311-.531-.227-1.043-.377-1.536-.453l-.337-.05c-.657-.099-.958-.273-.958-.568 0-.327.279-.589.782-.589.47 0 .861.189 1.156.558.175.22.378.367.625.367.336 0 .584-.251.584-.6 0-.361-.24-.654-.545-.889-.604-.467-1.397-.7-2.318-.7-1.42 0-2.392.837-2.392 2.052 0 .977.628 1.644 1.765 1.956.76.208 1.154.341 1.341.458.337.21.492.493.492.868 0 .546-.49.923-1.25.923-.748 0-1.272-.349-1.579-.974-.143-.294-.378-.444-.653-.444-.336 0-.584.24-.584.6 0 .428.329.837.799 1.158.749.513 1.706.779 2.766.779 1.634 0 2.673-.837 2.673-2.176zm-8.031-4.887h-1.61v5.929c0 .734-.347 1.09-1.04 1.09-.34 0-.623-.082-.821-.24-.2-.16-.367-.406-.367-.736 0-.36.241-.6.574-.6.182 0 .324.06.444.17.094.08.167.12.247.12.115 0 .193-.08.193-.284v-5.449h-1.61c-.347 0-.613-.267-.613-.613 0-.347.266-.614.613-.614h4.99c.347 0 .613.267.613.614 0 .346-.266.613-.613.613z"/>
      </svg>
    ),
  },
  {
    name: "FastAPI",
    role: "Backend AI",
    glow: "rgba(20, 184, 166, 0.4)",
    borderColor: "rgba(20, 184, 166, 0.4)",
    textColor: "#2dd4bf",
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#2dd4bf">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.835 4.148l5.24 7.02h-4.32l1.637 8.684-6.992-9.674h4.435z"/>
      </svg>
    ),
  },
];

// Currently Learning Sidebar Items
const CURRENTLY_LEARNING = [
  { name: "Advanced MERN Architecture", progress: "95%", color: "#38bdf8" },
  { name: "System Design & Microservices", progress: "88%", color: "#818cf8" },
  { name: "Cyber Security & SOC Telemetry", progress: "85%", color: "#c084fc" },
  { name: "AI Multi-Agent Swarms (LangGraph)", progress: "92%", color: "#ec4899" },
  { name: "Bachelor in Robotics & ROS 2", progress: "Commencing", color: "#10b981", isRobotics: true },
];

// All verified tech tags
const ALL_TECH_TAGS = [
  "AI Agents", "LLM Integration", "Prompt Engineering", "Python",
  "JavaScript", "React", "Next.js", "Node.js", "Express.js",
  "MongoDB", "FastAPI", "Tailwind CSS", "Stripe API", "JWT Auth",
  "Git & GitHub", "Docker", "Browser Automation", "Workflow Automation",
  "Robotic Programming", "ROS & ROS 2", "Embedded C++"
];

export default function Skills() {
  const [showAllTags, setShowAllTags] = useState(false);

  return (
    <section id="skills" className="section skills-section">
      {/* Reference Category Tag */}
      <div className="section-tag-row">
        <span className="section-num-tag">02 | Skills</span>
      </div>

      {/* Header with Title and "View All Skills" button */}
      <div className="skills-header-row">
        <div>
          <h2 className="skills-main-title">
            My <span className="accent-gradient">Skills</span>
          </h2>
          <p className="skills-subhead">
            Technologies and tools I use to build fast, scalable, and modern applications.
          </p>
        </div>

        <button
          className="btn btn-outline skills-toggle-btn"
          onClick={() => setShowAllTags(!showAllTags)}
        >
          {showAllTags ? "Hide Extra Tech" : "View All Skills"}
        </button>
      </div>

      {/* Main Skills Showcase Grid */}
      <div className="skills-showcase-layout">
        {/* Left: 3D Glowing Glass Pedestal Tech Cards */}
        <div className="skills-pedestal-grid">
          {FEATURED_TECH.map((tech) => (
            <div
              key={tech.name}
              className="tech-pedestal-card"
              style={{
                "--card-glow": tech.glow,
                borderColor: tech.borderColor,
              }}
            >
              <div className="pedestal-top-glow" />
              <div className="pedestal-icon-box">{tech.icon}</div>
              <h3 className="pedestal-name" style={{ color: tech.textColor }}>
                {tech.name}
              </h3>
              <span className="pedestal-role">{tech.role}</span>
              <div className="pedestal-base-beam" />
            </div>
          ))}
        </div>

        {/* Right: "Currently Learning" Glass Card */}
        <div className="skills-learning-card">
          <div className="learning-card-header">
            <span className="learning-icon">🚀</span>
            <div>
              <h3 className="learning-title">Currently Learning</h3>
              <span className="learning-sub">Continuous Engineering Growth</span>
            </div>
          </div>

          <div className="learning-list">
            {CURRENTLY_LEARNING.map((item) => (
              <div className="learning-item" key={item.name}>
                <div className="learning-meta">
                  <span className="learning-name">
                    {item.isRobotics && <span style={{ marginRight: "0.3rem" }}>🎓</span>}
                    {item.name}
                  </span>
                  <span
                    className="learning-val"
                    style={{ color: item.color }}
                  >
                    {item.progress}
                  </span>
                </div>
                <div className="learning-bar-track">
                  <div
                    className="learning-bar-fill"
                    style={{
                      backgroundColor: item.color,
                      boxShadow: `0 0 10px ${item.color}`,
                      width: item.progress === "Commencing" ? "65%" : item.progress,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Inspirational Motto */}
          <div className="learning-footer-quote">
            <span className="quote-icon">“</span>
            <p className="quote-text">
              Better than yesterday. <br />
              <span className="accent-gradient">That&apos;s the goal.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Expandable All Tech Tags Cloud */}
      {showAllTags && (
        <div className="skills-all-tags-container">
          <h4 className="all-tags-title">FULL TECHNICAL ARSENAL</h4>
          <div className="all-tags-grid">
            {ALL_TECH_TAGS.map((tag) => (
              <span className="arsenal-pill" key={tag}>
                <span className="pill-dot" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
