// ═══════════════════════════════════════════════════
// COMPONENT: Services.jsx — WHAT I CAN AUTOMATE
// Aligned with PDF Masterplan Section 04:
// 1. AI Customer Support
// 2. AI Voice Agents
// 3. WhatsApp Automation
// 4. Email Automation
// 5. Lead Qualification
// 6. Business Intelligence
// 7. Custom AI Agents
// 8. API Integrations
// ═══════════════════════════════════════════════════
import { useEffect, useRef, useState } from "react";

const AUTOMATION_SERVICES = [
  {
    num: "01",
    icon: "🎧",
    title: "AI Customer Support",
    badge: "24/7 AUTONOMOUS RESOLUTION",
    badgeClass: "badge-cyan",
    desc: "Autonomous frontline support agents trained on your docs, knowledge bases, and previous ticket resolutions.",
    points: [
      "Resolves 70%+ of Tier-1 inquiries with 0 response latency",
      "Grounded RAG retrieval — zero hallucination guarantee",
      "Seamless human escalation with full conversation context",
      "Live synchronization with Zendesk, Intercom, or Slack",
    ],
    impact: "94% faster ticket resolution • 24/7 coverage",
  },
  {
    num: "02",
    icon: "🎙️",
    title: "AI Voice Agents",
    badge: "SUB-SECOND SPEECH LATENCY",
    badgeClass: "badge-purple",
    desc: "Natural-sounding conversational voice agents for inbound receptionist duties and outbound appointment booking.",
    points: [
      "Human-like conversational cadence and inflection",
      "Real-time calendar booking (Google Calendar / Cal.com)",
      "Automated phone lead qualification & intent logging",
      "Direct integration with Twilio, SIP, and CRM pipelines",
    ],
    impact: "Zero missed phone inquiries • 100% automated booking",
  },
  {
    num: "03",
    icon: "💬",
    title: "WhatsApp Automation",
    badge: "OMNICHANNEL MESSAGING",
    badgeClass: "badge-emerald",
    desc: "Interactive conversational WhatsApp bots powered by official Meta Cloud APIs for seamless client onboarding.",
    points: [
      "Interactive multi-turn product catalog lookup",
      "Instant order status tracking and appointment confirmations",
      "Automated client onboarding questionnaire workflows",
      "Direct webhook sync into PostgreSQL / Google Sheets",
    ],
    impact: "Instant lead engagement • 80%+ message open rate",
  },
  {
    num: "04",
    icon: "✉️",
    title: "Email Automation & Triage",
    badge: "ZERO-INBOX WORKFLOW",
    badgeClass: "badge-cyan",
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
    num: "05",
    icon: "🎯",
    title: "Lead Qualification & Inbound",
    badge: "REVENUE ACCELERATOR",
    badgeClass: "badge-purple",
    desc: "Autonomous agents that evaluate inbound prospects against your Ideal Customer Profile (ICP) around the clock.",
    points: [
      "Instant public company data enrichment & persona scoring",
      "Answers complex technical & pricing questions 24/7",
      "Automatically routes high-value prospects to AE calendars",
      "Eliminates tire-kickers before manual sales calls",
    ],
    impact: "3x faster lead response • High-intent pipeline",
  },
  {
    num: "06",
    icon: "📊",
    title: "Business Intelligence & Reports",
    badge: "DATA SYNTHESIS",
    badgeClass: "badge-cyan",
    desc: "AI data pipelines that pull raw metrics from your databases, analyze KPIs, and generate executive summaries.",
    points: [
      "Runs automated SQL analytical queries on schedules",
      "Detects revenue anomalies and customer churn patterns",
      "Dispatches weekly formatted Slack or email executive briefings",
      "Natural language querying over internal database schemas",
    ],
    impact: "Zero manual spreadsheet crunching • Real-time clarity",
  },
  {
    num: "07",
    icon: "🤖",
    title: "Custom AI Agents & Workflows",
    badge: "AUTONOMOUS REASONING",
    badgeClass: "badge-emerald",
    desc: "Bespoke LangGraph/LangChain multi-agent systems engineered for your specific internal operational bottlenecks.",
    points: [
      "Multi-step planning and self-correction reasoning loops",
      "Multi-agent coordination (Research → Write → Review)",
      "Unstructured PDF, contract, and document data extraction",
      "Secure local or cloud model deployments (Claude / GPT-4o)",
    ],
    impact: "Eliminates repetitive manual friction end-to-end",
  },
  {
    num: "08",
    icon: "🔌",
    title: "API & System Integrations",
    badge: "ENTERPRISE CONNECTIVITY",
    badgeClass: "badge-purple",
    desc: "Connecting AI agents seamlessly with your existing tech stack, databases, payment gateways, and custom REST APIs.",
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
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
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
        transitionDelay: `${(index % 4) * 80}ms`,
      }}
    >
      <div className="service-card-header">
        <div className="service-icon-box">
          <span className="service-card-emoji">{s.icon}</span>
        </div>
        <div className="service-header-meta">
          <span className="service-card-num">{s.num}</span>
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
        <span className="impact-tag">⚡ VERIFIED IMPACT:</span>
        <span className="impact-val">{s.impact}</span>
      </div>

      <div className="service-footer">
        <button
          className="service-action-btn"
          onClick={() => onSelect(s.title)}
        >
          <span>DISCUSS THIS AUTOMATION</span>
          <span className="service-arrow">→</span>
        </button>
      </div>
    </div>
  );
}

export default function Services() {
  const handleDiscuss = (serviceTitle) => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
      // Pre-fill message if input exists
      setTimeout(() => {
        const msgField = document.getElementById("simple-message");
        if (msgField && !msgField.value) {
          msgField.value = `Hi Danial, I'm interested in discussing automation for: ${serviceTitle}. Could you show me what can be automated in our workflow?`;
          msgField.focus();
        }
      }, 500);
    }
  };

  return (
    <section id="services" className="section services-section">
      <div className="section-header">
        <span className="section-num">04</span>
        <h2 className="section-title">
          WHAT I CAN <span className="accent">AUTOMATE</span>
        </h2>
        <div className="section-line" />
      </div>

      <p className="services-subtitle">
        Turn slow, repetitive manual operations into 24/7 autonomous systems. Engineered for measurable business ROI, reliability, and zero hallucination risk.
      </p>

      <div className="services-grid services-grid-auto">
        {AUTOMATION_SERVICES.map((s, idx) => (
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
            Every automation system is deployed with sandboxed tool execution, rigorous input validation, rate limiting, and fallback safeguards. No fake claims, no unmonitored scripts.
          </p>
        </div>
      </div>
    </section>
  );
}
