// ═══════════════════════════════════════════════════
// COMPONENT: Services.jsx — FULL-STACK WEB DEVELOPMENT & AI AUTOMATION
// Complete Spectrum:
// 1. Full-Stack Web Applications (MERN)
// 2. Modern Business Websites & Landing Pages
// 3. E-Commerce Platforms & Storefronts
// 4. SaaS Platforms & MVP Engineering
// 5. Custom AI Agents & Workflows
// 6. AI Customer Support Systems
// 7. AI Voice Agents & Reception
// 8. WhatsApp Business Automation
// 9. Email Automation & Triage
// 10. API & System Integrations
// ═══════════════════════════════════════════════════
import { useEffect, useRef, useState } from "react";

const ALL_SERVICES = [
  // ─── FULL-STACK WEB DEVELOPMENT PILLAR ───
  {
    num: "01",
    category: "web",
    categoryLabel: "FULL-STACK WEB",
    icon: "🌐",
    title: "Full-Stack Web Applications (MERN)",
    badge: "MERN & NEXT.JS STACK",
    badgeClass: "badge-purple",
    desc: "Custom, scalable cloud web applications built from scratch with React, Next.js, Node.js, Express, and MongoDB. Secure, high-performance, and production-tested.",
    points: [
      "Scalable RESTful API architecture & microservice endpoints",
      "Secure token-based JWT authentication & role permissions (RBAC)",
      "Clean, modern React/Next.js UI with sub-second page transitions",
      "MongoDB & PostgreSQL schema modeling with query optimization",
    ],
    impact: "Production-ready architecture • 99+ Core Web Vitals",
  },
  {
    num: "02",
    category: "web",
    categoryLabel: "FULL-STACK WEB",
    icon: "💻",
    title: "Modern Websites & Landing Pages",
    badge: "HIGH-CONVERTING UI/UX",
    badgeClass: "badge-cyan",
    desc: "Bespoke, high-converting responsive websites engineered to turn visitors into clients. Pixel-perfect, fast-loading, and mobile-optimized.",
    points: [
      "High-fashion modern dark UI with smooth GSAP animations & interactions",
      "100% mobile-first responsive layout (silky 60fps on all mobile screens)",
      "Technical SEO optimization, OpenGraph meta tags, and structured data",
      "Modular, clean semantic code with zero bloat and instant load times",
    ],
    impact: "3x higher visitor conversion • 100/100 Lighthouse score",
  },
  {
    num: "03",
    category: "web",
    categoryLabel: "FULL-STACK WEB",
    icon: "🛍️",
    title: "E-Commerce Platforms & Storefronts",
    badge: "STRIPE & ORDERS PIPELINE",
    badgeClass: "badge-emerald",
    desc: "Full-featured online stores with product catalogs, shopping carts, checkout processing, and admin management dashboards.",
    points: [
      "Seamless Stripe, PayPal, and credit card payment gateway integration",
      "Comprehensive admin dashboard for inventory, orders, and pricing",
      "Resilient webhook listeners for payment confirmation and receipt emails",
      "Proven experience: engineered 2 production platforms at ITS Gujrat",
    ],
    impact: "Sub-second catalog search • Automated order fulfillment",
  },
  {
    num: "04",
    category: "web",
    categoryLabel: "FULL-STACK WEB",
    icon: "🚀",
    title: "SaaS Platforms & MVP Engineering",
    badge: "MVP TO PRODUCTION",
    badgeClass: "badge-purple",
    desc: "Turn your startup idea into a launched SaaS product in weeks. Engineered with multi-tenancy, subscription billing, and real-time user analytics.",
    points: [
      "Recurring subscription billing tiers via Stripe Billing webhooks",
      "Multi-tenant database isolation & secure user account workspaces",
      "Interactive analytics dashboards with real-time metric visualization",
      "Containerized Docker setup with CI/CD GitHub deployment pipelines",
    ],
    impact: "Rapid time-to-market • Built to support paying users",
  },

  // ─── AI AGENTS & AUTOMATION PILLAR ───
  {
    num: "05",
    category: "ai",
    categoryLabel: "AI & AUTOMATION",
    icon: "🤖",
    title: "Custom AI Agents & Workflows",
    badge: "AUTONOMOUS REASONING",
    badgeClass: "badge-cyan",
    desc: "Bespoke LangGraph/LangChain multi-agent systems engineered to execute multi-step planning, tool calling, and autonomous reasoning.",
    points: [
      "Multi-step planning, self-correction, and tool routing loops",
      "Unstructured document, PDF, invoice, and contract data extraction",
      "Multi-agent coordination pipelines (Research → Synthesize → Review)",
      "Deployments with local or cloud models (Claude 3.5 / GPT-4o)",
    ],
    impact: "Eliminates complex operational friction end-to-end",
  },
  {
    num: "06",
    category: "ai",
    categoryLabel: "AI & AUTOMATION",
    icon: "🎧",
    title: "AI Customer Support Systems",
    badge: "24/7 AUTONOMOUS RESOLUTION",
    badgeClass: "badge-purple",
    desc: "Autonomous frontline support agents trained on your documentation, tickets, and knowledge bases with zero hallucination guarantee.",
    points: [
      "Resolves 70%+ of Tier-1 inquiries with 0 response latency",
      "Grounded RAG vector retrieval over verified business docs",
      "Seamless human escalation with complete conversation history",
      "Live synchronization with Zendesk, Intercom, or Slack",
    ],
    impact: "94% faster ticket resolution • 24/7 coverage",
  },
  {
    num: "07",
    category: "ai",
    categoryLabel: "AI & AUTOMATION",
    icon: "🎙️",
    title: "AI Voice Agents & Reception",
    badge: "SUB-SECOND LATENCY",
    badgeClass: "badge-cyan",
    desc: "Natural-sounding conversational voice agents for inbound receptionist duties and outbound appointment booking.",
    points: [
      "Natural human cadence, tone, and realistic conversational inflection",
      "Real-time calendar booking (Google Calendar / Cal.com)",
      "Inbound caller qualification & structured CRM note logging",
      "Direct integration with Twilio, SIP, and telephony APIs",
    ],
    impact: "Zero missed client calls • 100% automated booking",
  },
  {
    num: "08",
    category: "ai",
    categoryLabel: "AI & AUTOMATION",
    icon: "💬",
    title: "WhatsApp Business Automation",
    badge: "OMNICHANNEL MESSAGING",
    badgeClass: "badge-emerald",
    desc: "Conversational WhatsApp bots powered by official Meta Cloud APIs for client onboarding, catalog queries, and customer messaging.",
    points: [
      "Multi-turn interactive product catalog lookup",
      "Instant order status tracking and appointment confirmations",
      "Automated client onboarding questionnaire workflows",
      "Direct webhook sync into PostgreSQL / Google Sheets",
    ],
    impact: "Instant lead engagement • 80%+ message open rate",
  },
  {
    num: "09",
    category: "ai",
    categoryLabel: "AI & AUTOMATION",
    icon: "✉️",
    title: "Email Automation & Zero-Inbox Triage",
    badge: "ZERO-INBOX WORKFLOW",
    badgeClass: "badge-purple",
    desc: "Intelligent email ingestion, categorization, draft generation, and automated multi-touch follow-ups.",
    points: [
      "Auto-categorizes emails (Urgent, Quote Request, Billing)",
      "Synthesizes contextual reply drafts ready for human approval",
      "Extracts purchase order data and logs directly to database",
      "Multi-step automated follow-up sequences with safety stops",
    ],
    impact: "Saves 10-15 human hours/week per team member",
  },
  {
    num: "10",
    category: "ai",
    categoryLabel: "AI & AUTOMATION",
    icon: "🔌",
    title: "API & System Integrations",
    badge: "ENTERPRISE CONNECTIVITY",
    badgeClass: "badge-cyan",
    desc: "Connecting AI agents, web applications, databases, payment gateways, and custom REST APIs into one unified system.",
    points: [
      "Bridges LLMs with Stripe, Slack, Notion, and HubSpot",
      "High-throughput RESTful & GraphQL API microservices",
      "Reliable webhook listeners with automatic retry queues",
      "Dockerized deployments with monitoring and telemetry",
    ],
    impact: "Unified systems • Zero data silos • Production-ready",
  },
];

function ServiceCard({ s, index, onSelect }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`service-card auto-service-card ${isVisible ? "service-card-animated" : ""}`}
      style={{
        transitionDelay: `${(index % 3) * 70}ms`,
      }}
    >
      <div className="service-card-header">
        <div className="service-icon-box">
          <span className="service-card-emoji">{s.icon}</span>
        </div>
        <div className="service-header-meta">
          <span className="service-cat-pill">{s.categoryLabel}</span>
          <span className={`service-badge ${s.badgeClass}`}>{s.badge}</span>
        </div>
      </div>

      <h3 className="service-title">{s.title}</h3>
      <p className="service-desc">{s.desc}</p>

      <div className="service-features">
        {s.points.map((p, idx) => (
          <div className="service-feature-item" key={idx}>
            <span className="service-feature-check">✓</span>
            <span>{p}</span>
          </div>
        ))}
      </div>

      <div className="service-impact-box">
        <span className="impact-tag">⚡ VERIFIED VALUE:</span>
        <span className="impact-val">{s.impact}</span>
      </div>

      <div className="service-footer">
        <button
          className="service-action-btn"
          onClick={() => onSelect(s.title)}
        >
          <span>DISCUSS THIS SERVICE</span>
          <span className="service-arrow">→</span>
        </button>
      </div>
    </div>
  );
}

export default function Services() {
  const [filter, setFilter] = useState("all"); // "all" | "web" | "ai"

  const filteredServices = ALL_SERVICES.filter((s) => {
    if (filter === "all") return true;
    return s.category === filter;
  });

  const handleDiscuss = (serviceTitle) => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const msgField = document.getElementById("simple-message");
        if (msgField) {
          msgField.value = `Hi Danial, I'm interested in discussing your service: ${serviceTitle}. Could you tell me more about your approach and how we can get started?`;
          msgField.focus();
        }
      }, 500);
    }
  };

  return (
    <section id="services" className="section services-section">
      {/* Reference Category Tag */}
      <div className="section-tag-row">
        <span className="section-num-tag">04 | Services</span>
      </div>

      <div className="services-header-row">
        <div>
          <h2 className="services-main-title">
            What I <span className="accent-gradient">Do</span>
          </h2>
          <p className="services-subtitle-text">
            I offer a range of development and AI services to help bring your ideas to life.
          </p>
        </div>
      </div>

      {/* Interactive Category Filter Pills */}
      <div className="services-filter-row">
        <button
          type="button"
          className={`service-filter-btn ${filter === "all" ? "filter-active" : ""}`}
          onClick={() => setFilter("all")}
        >
          ALL SERVICES ({ALL_SERVICES.length})
        </button>
        <button
          type="button"
          className={`service-filter-btn ${filter === "web" ? "filter-active" : ""}`}
          onClick={() => setFilter("web")}
        >
          🌐 FULL-STACK WEBSITES &amp; APPS (4)
        </button>
        <button
          type="button"
          className={`service-filter-btn ${filter === "ai" ? "filter-active" : ""}`}
          onClick={() => setFilter("ai")}
        >
          🤖 AI AGENTS &amp; AUTOMATION (6)
        </button>
      </div>

      {/* Services Cards Grid */}
      <div className="services-grid services-grid-auto">
        {filteredServices.map((s, idx) => (
          <ServiceCard
            key={s.num}
            s={s}
            index={idx}
            onSelect={handleDiscuss}
          />
        ))}
      </div>

      {/* Commercial Commitment Banner */}
      <div className="commercial-guarantee-banner">
        <div className="guarantee-icon">🛡️</div>
        <div className="guarantee-body">
          <h4>ENGINEERED FOR PRODUCTION — ZERO FLUFF</h4>
          <p>
            Whether building a high-converting full-stack web platform or an autonomous AI agent, every system is delivered with clean architecture, strict error handling, responsive 60fps design, and production-tested security.
          </p>
        </div>
      </div>
    </section>
  );
}
