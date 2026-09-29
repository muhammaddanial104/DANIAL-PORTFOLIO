import { motion } from "framer-motion";

export default function WhatICanAutomate() {
  const automationCapabilities = [
    {
      id: "support",
      icon: "💬",
      title: "AI Customer Support Agents",
      problem: "Customers wait hours for basic answers; high support staff churn and inconsistent resolution.",
      solution: "24/7 autonomous support agent trained on your internal documentation with multi-language resolution and instant human escalation.",
      outcome: "<2s instant response time with 70%+ automatic ticket resolution.",
    },
    {
      id: "voice",
      icon: "🎙️",
      title: "Conversational AI Voice Agents",
      problem: "Missed incoming phone calls, expensive call centers, and repetitive phone qualification calls.",
      solution: "Natural conversational voice agents that answer inbound calls, book appointments, and capture lead requirements directly into your database.",
      outcome: "Zero missed inbound inquiries and 24/7 continuous phone line coverage.",
    },
    {
      id: "whatsapp",
      icon: "📱",
      title: "WhatsApp & Chatbot Automations",
      problem: "Customers prefer WhatsApp, but manual messaging is impossible to scale during peak volume.",
      solution: "Official WhatsApp Cloud API bots with conversational AI, catalog browsing, order tracking, and two-way CRM synchronization.",
      outcome: "Automated instant customer engagement directly on their preferred channel.",
    },
    {
      id: "email",
      icon: "✉️",
      title: "Intelligent Inbox & Email Parsing",
      problem: "Inboxes overflowing with repetitive inquiries, RFQs, invoices, and unstructured support tickets.",
      solution: "Autonomous email parsing agents that categorize incoming messages, draft replies from knowledge bases, and sync with ticketing systems.",
      outcome: "Saves 15+ hours per week of manual inbox sorting and correspondence.",
    },
    {
      id: "lead",
      icon: "🎯",
      title: "Automated Lead Qualification",
      problem: "Sales representatives spend over 50% of their day talking to unqualified, low-intent prospects.",
      solution: "Interactive conversational agents that ask custom qualification questions, score leads dynamically, and book meetings on calendar automatically.",
      outcome: "Sales team only speaks with pre-vetted, high-intent buyers ready to close.",
    },
    {
      id: "bi",
      icon: "📊",
      title: "Business Intelligence & Scraping",
      problem: "Competitor data, market prices, and inventory information are scattered and tedious to track manually.",
      solution: "High-speed headless scrapers and data pipelines that monitor pricing, summarize market shifts, and deliver automated daily Slack/Email reports.",
      outcome: "Actionable real-time market intelligence delivered completely on autopilot.",
    },
    {
      id: "custom",
      icon: "🤖",
      title: "Custom AI Multi-Agent Swarms",
      problem: "Complex company tasks require toggling multiple browser tabs, spreadsheets, and human steps.",
      solution: "ReAct reasoning loops and tool-calling agents that execute sequences across multiple SaaS tools autonomously.",
      outcome: "Complex multi-step workflows executed reliably without manual intervention.",
    },
    {
      id: "apis",
      icon: "🔌",
      title: "Enterprise API Integrations",
      problem: "Disparate software tools and legacy databases operate in silos and fail to synchronize data.",
      solution: "Robust webhook listeners, RESTful bridges, and custom middleware that synchronize data seamlessly between Shopify, Stripe, MongoDB, and CRMs.",
      outcome: "Clean, dependable, synchronized data flow across your entire software ecosystem.",
    },
  ];

  return (
    <section id="automate" className="section-container automate-section">
      {/* Section Header */}
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-badge">
          <span className="badge-num">05</span>
          <span className="badge-sep">|</span>
          <span className="badge-title">Automation Suite</span>
        </div>
        <h2 className="section-main-heading">
          END-TO-END AUTOMATION &amp; <span className="gradient-text">INTELLIGENT SYSTEMS</span>
        </h2>
        <p className="section-subtitle">
          Real business automation engineered to eliminate manual friction, reduce overhead, and operate reliably 24/7.
        </p>
      </motion.div>

      {/* 8 Automation Cards Grid */}
      <div className="automate-cards-grid">
        {automationCapabilities.map((item, idx) => (
          <motion.div
            key={item.id}
            className="automate-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, scale: 1.015 }}
          >
            <div className="automate-card-header">
              <span className="automate-icon">{item.icon}</span>
              <h3 className="automate-card-title">{item.title}</h3>
            </div>

            <div className="automate-body">
              <div className="automate-field">
                <span className="field-tag tag-problem">Bottleneck:</span>
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
