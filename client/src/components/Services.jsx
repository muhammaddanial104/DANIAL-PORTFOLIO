export default function Services() {
  const services = [
    {
      num: "01",
      title: "Web Application Development",
      category: "Full Stack",
      description:
        "Engineered with React, Next.js, Node.js, and MongoDB. Modern, blazing-fast web architectures optimized for speed, search engines, and seamless user experiences.",
      features: ["Custom React & Next.js Frontends", "Robust Express & RESTful APIs", "MongoDB Schema Optimization", "Tailwind Pixel-Perfect UI"],
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
    },
    {
      num: "02",
      title: "Autonomous AI Agents & LLMs",
      category: "Artificial Intelligence",
      description:
        "Building self-reasoning AI multi-agents, tool-calling ReAct architectures, local/cloud LLM pipelines, and conversational voice companions for enterprise automation.",
      features: ["Autonomous Multi-Agent Loops", "Function & Tool Calling", "RAG & Knowledge Retrieval", "Desktop AI System Agents"],
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 0-4 4v1H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z"></path>
          <circle cx="9" cy="12" r="1"></circle>
          <circle cx="15" cy="12" r="1"></circle>
          <path d="M9 16h6"></path>
        </svg>
      ),
    },
    {
      num: "03",
      title: "Enterprise Automation & Pipelines",
      category: "Automation",
      description:
        "High-performance automation scripts, distributed web scrapers, data pipelines, bot integrations, and automated headless workflows that save hundreds of human hours.",
      features: ["High-Concurrency Web Scraping", "API & Webhook Integrations", "Automated Task Scheduling", "Error Recovery & Telemetry"],
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
    },
    {
      num: "04",
      title: "E-Commerce Platforms & Stores",
      category: "E-Commerce",
      description:
        "Battle-tested e-commerce solutions built from hands-on ITS Gujrat internship experience. Multi-vendor marketplaces, Stripe checkout, real-time inventory, and analytics.",
      features: ["Secure Stripe / Payment Flow", "Product & Cart Management", "Admin Sales Dashboards", "Order Tracking & Notifications"],
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="section-container services-section">
      {/* Section Header */}
      <div className="section-header services-header-flex">
        <div>
          <div className="section-badge">
            <span className="badge-num">04</span>
            <span className="badge-sep">|</span>
            <span className="badge-title">Services</span>
          </div>
          <h2 className="section-main-heading">
            What <span className="gradient-text">I Do</span>
          </h2>
          <p className="section-subtitle">
            End-to-end digital solutions tailored to high-growth business needs
          </p>
        </div>

        {/* 3D Isometric Cube Accent from Reference */}
        <div className="services-cube-accent">
          <img
            src="/images/services-cube.jpg"
            alt="3D Services Cube"
            className="services-cube-img"
          />
          <div className="cube-glow-ring"></div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-cards-grid">
        {services.map((svc) => (
          <div key={svc.num} className="service-glass-card">
            {/* Top row: Number and Icon */}
            <div className="service-top-row">
              <span className="service-index">{svc.num}</span>
              <div className="service-icon-wrapper">{svc.icon}</div>
            </div>

            {/* Service Title */}
            <h3 className="service-title">{svc.title}</h3>
            <span className="service-cat-pill">{svc.category}</span>

            {/* Description */}
            <p className="service-desc">{svc.description}</p>

            {/* Feature Checklist */}
            <ul className="service-features-list">
              {svc.features.map((feat, idx) => (
                <li key={idx} className="service-feature-item">
                  <span className="feat-check">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            {/* Bottom Glow Bar */}
            <div className="service-card-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
