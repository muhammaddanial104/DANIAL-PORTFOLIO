export default function WhatICanAutomate() {
  const automationCapabilities = [
    {
      id: "support",
      icon: "💬",
      title: "AI Customer Support",
      problem: "Customers wait hours for basic answers; high support staff churn.",
      solution: "24/7 autonomous support agent trained on your docs with multi-language resolution and instant human escalation.",
      outcome: "Instant <2s response times, 70%+ automatic ticket resolution.",
    },
    {
      id: "voice",
      icon: "🎙️",
      title: "AI Voice Agents",
      problem: "Missed phone inquiries, expensive call centers, repetitive qualification calls.",
      solution: "Natural conversational voice agents that answer calls, book appointments, and capture lead requirements directly into your database.",
      outcome: "Zero missed customer calls, 24/7 phone line coverage.",
    },
    {
      id: "whatsapp",
      icon: "📱",
      title: "WhatsApp Automation",
      problem: "Customers prefer WhatsApp, but manual messaging is impossible to scale.",
      solution: "Official WhatsApp Cloud API bots with conversational AI, catalog browsing, order updates, and CRM sync.",
      outcome: "Automated instant customer engagement on their favorite app.",
    },
    {
      id: "email",
      icon: "✉️",
      title: "Email & Ticket Automation",
      problem: "Inboxes overflowing with repetitive inquiries, RFQs, and support tickets.",
      solution: "Autonomous email parsing agents that categorize incoming messages, draft replies from knowledge bases, and sync with ticketing systems.",
      outcome: "Save 15+ hours per week of manual inbox sorting.",
    },
    {
      id: "lead",
      icon: "🎯",
      title: "Lead Qualification",
      problem: "Sales reps spend 50% of their time talking to unqualified prospects.",
      solution: "Interactive conversational agents that ask custom qualification questions, score leads, and book meetings on calendar automatically.",
      outcome: "Sales team only speaks with pre-vetted, high-intent buyers.",
    },
    {
      id: "bi",
      icon: "📊",
      title: "Business Intelligence & Scraping",
      problem: "Competitor data, market prices, and inventory are scattered across websites.",
      solution: "High-speed headless scrapers and data pipelines that track prices, summarize trends, and deliver automated daily Slack/Email reports.",
      outcome: "Actionable real-time market intelligence delivered on autopilot.",
    },
    {
      id: "custom",
      icon: "🤖",
      title: "Custom AI Multi-Agents",
      problem: "Complex multi-step company tasks require multiple browser tabs, spreadsheets, and human steps.",
      solution: "ReAct reasoning loops and tool-calling agents that execute sequences across multiple software tools autonomously.",
      outcome: "Complex multi-tool tasks executed reliably without human intervention.",
    },
    {
      id: "apis",
      icon: "🔌",
      title: "Enterprise API Integrations",
      problem: "SaaS tools and legacy systems do not communicate with each other.",
      solution: "Robust webhook listeners, RESTful bridges, and middleware that synchronize data seamlessly between Shopify, Stripe, MongoDB, and CRMs.",
      outcome: "Clean, synchronized data flow across your entire software stack.",
    },
  ];

  return (
    <section id="automate" className="section-container automate-section">
      {/* Section Header */}
      <div className="section-header">
        <div className="section-badge">
          <span className="badge-num">04</span>
          <span className="badge-sep">|</span>
          <span className="badge-title">Capabilities</span>
        </div>
        <h2 className="section-main-heading">
          What I Can <span className="gradient-text">Automate</span>
        </h2>
        <p className="section-subtitle">
          Real business automation engineered to eliminate manual friction, reduce human labor costs, and operate reliably 24/7.
        </p>
      </div>

      {/* 8 Automation Cards Grid */}
      <div className="automate-cards-grid">
        {automationCapabilities.map((item) => (
          <div key={item.id} className="automate-card">
            <div className="automate-card-header">
              <span className="automate-icon">{item.icon}</span>
              <h3 className="automate-card-title">{item.title}</h3>
            </div>

            <div className="automate-body">
              <div className="automate-field">
                <span className="field-tag tag-problem">Problem:</span>
                <p className="field-text">{item.problem}</p>
              </div>

              <div className="automate-field">
                <span className="field-tag tag-solution">Automation:</span>
                <p className="field-text">{item.solution}</p>
              </div>

              <div className="automate-field outcome-field">
                <span className="field-tag tag-outcome">Impact:</span>
                <p className="field-text outcome-text">{item.outcome}</p>
              </div>
            </div>

            <div className="automate-card-border-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
