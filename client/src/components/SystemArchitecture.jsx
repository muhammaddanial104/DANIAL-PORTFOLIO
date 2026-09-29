import { useState } from "react";

export default function SystemArchitecture() {
  const [selectedNode, setSelectedNode] = useState(2); // Default to AI Agent

  const nodes = [
    {
      id: 0,
      shortTitle: "1. User Request",
      title: "Inbound User Touchpoint",
      badge: "Inbound",
      role: "User communicates via WhatsApp, Web chat, or Voice command",
      tech: "WhatsApp Cloud API, WebSocket, Web Client, REST Webhooks",
      guardrails: "Rate limiting, IP throttling, and JWT token authentication.",
      payload: `{
  "sender": "+1234567890",
  "channel": "whatsapp_cloud_api",
  "text": "What is the status of our order #9421?",
  "timestamp": "2026-09-29T09:30:00Z"
}`,
    },
    {
      id: 1,
      shortTitle: "2. Gateway Layer",
      title: "API Gateway & Ingestion Server",
      badge: "Ingestion",
      role: "Validates payload, decrypts signatures, and routes to agent orchestrator",
      tech: "Node.js, Express.js, FastAPI, Redis Event Queue",
      guardrails: "Input sanitization, schema validation with Zod / Pydantic.",
      payload: `{
  "route": "/api/v1/agent/dispatch",
  "status": "validated",
  "session_id": "sess_89a0b1",
  "queue_latency": "14ms"
}`,
    },
    {
      id: 2,
      shortTitle: "3. AI Agent Core",
      title: "Autonomous Agent Orchestrator",
      badge: "Reasoning",
      role: "ReAct loop decomposes the request into steps, selects tools, and manages context memory",
      tech: "Python, LangChain, ReAct State Machines, Session Memory",
      guardrails: "Strict recursion limits, loop detection, and hallucination check.",
      payload: `{
  "agent_state": "PLANNING",
  "intent": "QUERY_ORDER_STATUS",
  "required_tools": ["search_orders_db", "format_shipping_estimate"],
  "memory_turns": 4
}`,
    },
    {
      id: 3,
      shortTitle: "4. LLM Engine",
      title: "LLM Reasoning Engine",
      badge: "Intelligence",
      role: "Performs semantic reasoning, tool parameter synthesis, and natural language generation",
      tech: "OpenAI GPT-4o, Groq LPU, Anthropic Claude, Local Llama (Ollama)",
      guardrails: "System prompt guardrails, temperature 0.2 for deterministic tool calls.",
      payload: `{
  "model": "groq-llama-3.3-70b",
  "inference_time": "120ms",
  "tool_call": {
    "name": "search_orders_db",
    "arguments": { "order_id": 9421 }
  }
}`,
    },
    {
      id: 4,
      shortTitle: "5. Tools & APIs",
      title: "Tool Execution & Integrations",
      badge: "Execution",
      role: "Agent triggers real backend APIs, webhooks, or headless browser scripts",
      tech: "Custom Python Tools, Stripe API, Puppeteer / Selenium, REST / GraphQL",
      guardrails: "Idempotent requests, automatic retry with exponential backoff.",
      payload: `{
  "tool_executed": "search_orders_db",
  "status": 200,
  "result": {
    "id": 9421,
    "status": "In Transit via DHL",
    "delivery_estimate": "Tomorrow, 2:00 PM"
  }
}`,
    },
    {
      id: 5,
      shortTitle: "6. Data & Vector DB",
      title: "Database & Knowledge Store",
      badge: "Persistence",
      role: "Maintains operational state, logs historical telemetry, and vectors for RAG",
      tech: "MongoDB Atlas, Pinecone / Chroma Vector DB, Redis Cache",
      guardrails: "Encrypted connections (TLS 1.3), role-based collection access.",
      payload: `{
  "db": "mongodb_atlas",
  "collection": "order_events",
  "audit_logged": true,
  "cached_redis_ttl": 300
}`,
    },
    {
      id: 6,
      shortTitle: "7. Automated Action",
      title: "Execution, Response & Notification",
      badge: "Delivery",
      role: "Delivers verified response back to customer and alerts the team via Slack/WhatsApp",
      tech: "WhatsApp API, Twilio, Slack Webhooks, Email Notification",
      guardrails: "Human escalation trigger if sentiment is negative or confidence < 85%.",
      payload: `{
  "delivery_channel": "whatsapp",
  "response_sent": "Your order #9421 is in transit via DHL and arriving tomorrow by 2:00 PM!",
  "slack_team_alert": "INFO: Order #9421 status answered automatically."
}`,
    },
  ];

  const current = nodes[selectedNode];

  return (
    <section id="architecture" className="section-container arch-section">
      {/* Section Header */}
      <div className="section-header">
        <div className="section-badge">
          <span className="badge-num">09</span>
          <span className="badge-sep">|</span>
          <span className="badge-title">Engineering Depth</span>
        </div>
        <h2 className="section-main-heading">
          How I Build <span className="gradient-text">AI Systems</span>
        </h2>
        <p className="section-subtitle">
          An interactive walkthrough of the end-to-end multi-agent pipeline: from initial user message to autonomous tool execution and database sync.
        </p>
      </div>

      <div className="arch-interactive-card">
        <div className="arch-glow-bg"></div>

        {/* Pipeline Steps Tabs */}
        <div className="arch-nodes-tabs-row">
          {nodes.map((node) => (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node.id)}
              className={`arch-node-tab-btn ${selectedNode === node.id ? "active" : ""}`}
            >
              <span className="tab-dot"></span>
              <span>{node.shortTitle}</span>
            </button>
          ))}
        </div>

        {/* Selected Node Details Inspector */}
        <div className="arch-inspector-grid">
          {/* Left Details */}
          <div className="arch-details-col">
            <div className="arch-details-header">
              <span className="node-stage-badge">{current.badge}</span>
              <h3 className="node-stage-title">{current.title}</h3>
            </div>

            <div className="arch-info-block">
              <span className="arch-block-lbl">What Happens Here:</span>
              <p className="arch-block-val">{current.role}</p>
            </div>

            <div className="arch-info-block">
              <span className="arch-block-lbl">Technologies & Protocols:</span>
              <p className="arch-block-val text-cyan font-semibold">{current.tech}</p>
            </div>

            <div className="arch-info-block">
              <span className="arch-block-lbl">Security & Reliability Guardrails:</span>
              <p className="arch-block-val text-emerald-400 font-medium">🛡️ {current.guardrails}</p>
            </div>
          </div>

          {/* Right Live JSON Payload Telemetry */}
          <div className="arch-telemetry-col">
            <div className="code-editor-header">
              <div className="code-dots">
                <span className="c-dot red"></span>
                <span className="c-dot yellow"></span>
                <span className="c-dot green"></span>
              </div>
              <span className="code-file-title">stage_{current.id + 1}_payload.json</span>
              <span className="code-live-pill">LIVE SCHEMA</span>
            </div>
            <pre className="code-payload-view">
              <code>{current.payload}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
