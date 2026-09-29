import { useState, useEffect } from "react";

export default function LiveAgentDemo() {
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState("lead");

  const scenarios = {
    lead: {
      title: "Inbound Enterprise Lead",
      customerMessage: "Hi Danial, we want to automate customer support across WhatsApp and Email for 500+ tickets/day.",
      intent: "SERVICE_INQUIRY: Automated Support Agent & WhatsApp Integration",
      kbResult: "Docs Matched: Architecture/WhatsApp-Cloud-API.md + SupportAgent_SLA.pdf (Score: 0.96)",
      aiResponse: "Understood! Danial's support agent integrates with WhatsApp Cloud API & Zendesk, resolving 70%+ of standard inquiries in under 2 seconds. Let's schedule a 15-min call.",
      crmAction: "Created Lead #8492 in MongoDB CRM | Tag: High-Intent-Enterprise | Status: Qualified",
      notification: "⚡ Slack/WhatsApp Alert sent to Danial: 'New high-priority lead from WhatsApp Automation inquiry.'",
    },
    quote: {
      title: "Custom AI Multi-Agent Inquiry",
      customerMessage: "Can your agents scrape competitor catalog prices and automatically update our pricing database?",
      intent: "TECHNICAL_FEASIBILITY: Headless Scraper + ReAct Tool-Calling Agent",
      kbResult: "Docs Matched: Pipelines/Headless-Scraper-Cluster.md + ReAct-Execution-Loops.md",
      aiResponse: "Yes, Danial builds high-concurrency headless scrapers with anti-bot bypass and database sync for automated pricing adjustments.",
      crmAction: "Logged Ticket #8493 | Category: Automation Scraper | Priority: Urgent",
      notification: "⚡ Slack Alert: 'Scraper Pipeline proposal requested. Data models ready.'",
    },
  };

  const steps = [
    { num: 1, title: "Customer Message", role: "Inbound channel (WhatsApp / Web)" },
    { num: 2, title: "AI Intent Recognition", role: "LLM classification & entity parsing" },
    { num: 3, title: "Knowledge Base (RAG)", role: "Vector search over company documents" },
    { num: 4, title: "Response Generation", role: "Grounded answer with strict guardrails" },
    { num: 5, title: "CRM Sync", role: "Automatic database & record update" },
    { num: 6, title: "Team Notification", role: "Instant WhatsApp / Slack alert" },
  ];

  const current = scenarios[selectedScenario];

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(1);

    const stepIntervals = [1, 2, 3, 4, 5, 6];
    stepIntervals.forEach((step, index) => {
      setTimeout(() => {
        setActiveStep(step);
        if (index === stepIntervals.length - 1) {
          setIsRunning(false);
        }
      }, (index + 1) * 750);
    });
  };

  // Reset to step 6 on initial mount so it displays full workflow
  useEffect(() => {
    setActiveStep(6);
  }, [selectedScenario]);

  return (
    <section id="demo" className="section-container workflow-demo-section">
      {/* Section Header */}
      <div className="section-header">
        <div className="section-badge">
          <span className="badge-num">05</span>
          <span className="badge-sep">|</span>
          <span className="badge-title">System Architecture In Action</span>
        </div>
        <h2 className="section-main-heading">
          Live <span className="gradient-text">Agent Workflow</span>
        </h2>
        <p className="section-subtitle">
          See how an autonomous agent pipeline handles an incoming customer message from start to finish without human intervention.
        </p>
      </div>

      <div className="workflow-demo-box">
        {/* Scenario Selector & Run Button */}
        <div className="workflow-control-bar">
          <div className="scenario-selector-wrap">
            <span className="scenario-label">Select Inbound Scenario:</span>
            <div className="scenario-buttons">
              <button
                onClick={() => setSelectedScenario("lead")}
                className={`scenario-btn ${selectedScenario === "lead" ? "active" : ""}`}
              >
                Inbound Lead Inquiry
              </button>
              <button
                onClick={() => setSelectedScenario("quote")}
                className={`scenario-btn ${selectedScenario === "quote" ? "active" : ""}`}
              >
                Custom Scraper Pipeline
              </button>
            </div>
          </div>

          <button
            onClick={runSimulation}
            disabled={isRunning}
            className="run-simulation-btn"
          >
            <span>{isRunning ? "Running Pipeline..." : "⚡ Run Live Simulation"}</span>
          </button>
        </div>

        {/* 6 Step Nodes Progression Bar */}
        <div className="workflow-nodes-track">
          {steps.map((s) => {
            const isCompleted = activeStep >= s.num;
            const isCurrent = activeStep === s.num && isRunning;
            return (
              <div
                key={s.num}
                className={`workflow-node-item ${isCompleted ? "completed" : ""} ${isCurrent ? "current" : ""}`}
              >
                <div className="node-number-circle">
                  {isCompleted && !isCurrent ? "✓" : s.num}
                </div>
                <div className="node-text-wrap">
                  <span className="node-title">{s.title}</span>
                  <span className="node-role">{s.role}</span>
                </div>
                {s.num < steps.length && <div className="node-connector-line"></div>}
              </div>
            );
          })}
        </div>

        {/* Live Execution Telemetry Cards */}
        <div className="workflow-telemetry-grid">
          <div className="telemetry-card">
            <div className="telemetry-header">
              <span className="tel-tag tag-input">1. Inbound Customer Message</span>
              <span className="tel-badge">Channel: WhatsApp / REST</span>
            </div>
            <p className="telemetry-body">"{current.customerMessage}"</p>
          </div>

          <div className={`telemetry-card ${activeStep >= 2 ? "active" : "dim"}`}>
            <div className="telemetry-header">
              <span className="tel-tag tag-intent">2. AI Intent Extraction</span>
              <span className="tel-badge">Confidence: 98.4%</span>
            </div>
            <p className="telemetry-body font-mono">{current.intent}</p>
          </div>

          <div className={`telemetry-card ${activeStep >= 3 ? "active" : "dim"}`}>
            <div className="telemetry-header">
              <span className="tel-tag tag-kb">3. Knowledge Base (RAG)</span>
              <span className="tel-badge">Latency: 140ms</span>
            </div>
            <p className="telemetry-body font-mono">{current.kbResult}</p>
          </div>

          <div className={`telemetry-card ${activeStep >= 4 ? "active" : "dim"}`}>
            <div className="telemetry-header">
              <span className="tel-tag tag-response">4. Grounded AI Response</span>
              <span className="tel-badge">Output Status: Verified</span>
            </div>
            <p className="telemetry-body">"{current.aiResponse}"</p>
          </div>

          <div className={`telemetry-card ${activeStep >= 5 ? "active" : "dim"}`}>
            <div className="telemetry-header">
              <span className="tel-tag tag-crm">5. Automated CRM Sync</span>
              <span className="tel-badge">DB: MongoDB / REST</span>
            </div>
            <p className="telemetry-body font-mono">{current.crmAction}</p>
          </div>

          <div className={`telemetry-card ${activeStep >= 6 ? "active" : "dim"}`}>
            <div className="telemetry-header">
              <span className="tel-tag tag-notify">6. Team Instant Notification</span>
              <span className="tel-badge">Delivered: &lt;1.2s</span>
            </div>
            <p className="telemetry-body">{current.notification}</p>
          </div>
        </div>

        <div className="workflow-footer-note">
          <span>✓ End-to-end execution completed in <strong>1.48 seconds</strong> with 0 human intervention.</span>
        </div>
      </div>
    </section>
  );
}
