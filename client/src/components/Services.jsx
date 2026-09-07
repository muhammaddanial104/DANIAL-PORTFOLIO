// ═══════════════════════════════════════════════════
// COMPONENT: Services.jsx — WHAT I OFFER & SOLUTIONS
// Featuring Web Design, AI Agents, SEO & Engineering
// ═══════════════════════════════════════════════════

const SERVICES = [
  {
    num: "01",
    title: "Modern Web Design & UI/UX",
    badge: "CREATIVE DESIGN",
    badgeClass: "service-badge-cyan",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    desc: "Sleek, futuristic, and conversion-focused web design. High-fidelity layouts, micro-interactions, dark cyberpunk aesthetics, and flawless mobile responsiveness across all devices.",
    features: [
      "Custom UI / UX & Prototyping",
      "Interactive Animations & Micro-effects",
      "Mobile-First Adaptive Layouts",
      "Futuristic Dark & Cyberpunk Themes",
      "High-Converting Landing Pages",
    ],
  },
  {
    num: "02",
    title: "AI Agents & Intelligent Systems",
    badge: "AUTONOMOUS AI",
    badgeClass: "service-badge-purple",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="16" x2="8" y2="16" />
        <line x1="16" y1="16" x2="16" y2="16" />
      </svg>
    ),
    desc: "Autonomous multi-agent workflows and cognitive LLM applications built with Python, LangChain, and OpenAI GPT-4. Automate complex manual workflows with intelligent task reasoning.",
    features: [
      "Autonomous Multi-Agent Architectures",
      "LangChain & Custom AI Chains",
      "OpenAI & Claude API Integrations",
      "Vector DB Retrieval (RAG Workflows)",
      "Automated Task Orchestration",
    ],
  },
  {
    num: "03",
    title: "SEO & Search Ranking Optimization",
    badge: "SEO & GROWTH",
    badgeClass: "service-badge-cyan",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    desc: "Supercharge your online reach and Google organic ranking. Technical SEO, semantic metadata, lighting-fast Core Web Vitals optimization, and keyword architecture.",
    features: [
      "Technical & On-Page SEO Auditing",
      "Schema Markup & Rich Snippets",
      "Core Web Vitals & Speed Tuning",
      "OpenGraph & Social Meta Architecture",
      "Google Search Console Indexing",
    ],
  },
  {
    num: "04",
    title: "Full Stack MERN Development",
    badge: "MERN STACK",
    badgeClass: "service-badge-purple",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    desc: "Complete end-to-end web applications crafted with React, Vite, Node.js, Express, and MongoDB. Fast loading, secure authentication, and engineered for high scale.",
    features: [
      "Custom React & Vite Architectures",
      "Robust REST & GraphQL APIs",
      "Secure JWT Authentication",
      "Payment Gateways (Stripe & PayPal)",
      "Database Modeling (MongoDB & SQL)",
    ],
  },
  {
    num: "05",
    title: "Backend & API Engineering",
    badge: "PYTHON & NODE.JS",
    badgeClass: "service-badge-purple",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    desc: "High-performance server-side architectures built using Node.js/Express, Python/Django, and FastAPI. Focused on zero-downtime reliability, caching, and enterprise security.",
    features: [
      "Microservices & Cloud Deployment",
      "Database Caching (Redis) & Queues",
      "Data Scraping & Automated Pipelines",
      "Third-Party API Integrations",
      "Rate Limiting & Security Shielding",
    ],
  },
  {
    num: "06",
    title: "Robotics & Automation",
    badge: "COMING SOON",
    badgeClass: "service-badge-emerald",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v3" />
        <path d="M12 18v3" />
        <path d="M3 12h3" />
        <path d="M18 12h3" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    desc: "Upcoming engineering solutions focusing on Robot Operating System (ROS & ROS 2), Embedded C/C++, Microcontrollers, and autonomous intelligent machine kinematics.",
    features: [
      "ROS & ROS 2 Robotics Framework",
      "Embedded C / C++ Programming",
      "Autonomous Machine Kinematics",
      "Sensor Fusion & Hardware Interfacing",
      "IoT Control & Telemetry",
    ],
  },
];

export default function Services() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section services-section">
      <div className="section-header">
        <span className="section-num">02</span>
        <h2 className="section-title">
          MY <span className="accent">SERVICES</span>
        </h2>
        <div className="section-line" />
      </div>

      <p className="services-subtitle">
        Delivering end-to-end digital excellence — from modern web designing and SEO to autonomous AI agents, full-stack engineering, and robotics.
      </p>

      <div className="services-grid">
        {SERVICES.map((s) => (
          <div className={`service-card ${s.badgeClass === "service-badge-emerald" ? "service-card-soon" : ""}`} key={s.num}>
            {/* Top row with icon & number */}
            <div className="service-card-header">
              <div className="service-icon-box">
                {s.icon}
              </div>
              <div className="service-header-meta">
                <span className="service-card-num">{s.num}</span>
                <span className={`service-badge ${s.badgeClass}`}>{s.badge}</span>
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>

            {/* Features list */}
            <div className="service-features">
              {s.features.map((f, idx) => (
                <div className="service-feature-item" key={idx}>
                  <span className="service-feature-check">✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>

            {/* Card Action */}
            <div className="service-footer">
              <button className="service-action-btn" onClick={scrollToContact}>
                <span>DISCUSS PROJECT</span>
                <span className="service-arrow">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}