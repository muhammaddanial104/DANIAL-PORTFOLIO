// ═══════════════════════════════════════════════════
// COMPONENT: SystemArchitecture.jsx — HOW I BUILD AI SYSTEMS
// Aligned with PDF Masterplan Section 09:
// Interactive Architecture: User → Frontend → AI Agent → LLM → Tools/APIs → Database → Automation
// ═══════════════════════════════════════════════════
import { useState } from "react";

const ARCH_NODES = [
  {
    id: "user",
    num: "01",
    label: "User Input",
    role: "ENTRYPOINT",
    icon: "👤",
    summary: "Voice, Chat, Webhooks, or Cron Triggers",
    details:
      "Accepts natural language voice streams, interactive web chat messages, inbound webhooks (Stripe, GitHub), or time-based cron triggers. Sanitizes inputs and extracts initial session context.",
    tech: ["WebSockets", "REST Endpoints", "Whisper Speech-to-Text", "Meta Cloud Webhooks"],
    safeguards: "Rate limiting, prompt injection sanitization, token length boundaries",
  },
  {
    id: "frontend",
    num: "02",
    label: "Frontend Layer",
    role: "INTERFACE",
    icon: "⚛️",
    summary: "Responsive React / Next.js UI",
    details:
      "Delivers sub-50ms optimistic state updates, streaming token rendering, and real-time status indicators so users never stare at blank spinners.",
    tech: ["React 19 / Next.js", "Vite", "Tailwind CSS", "Server-Sent Events (SSE)"],
    safeguards: "Optimistic UI rollbacks, offline queueing, accessibility WCAG AA",
  },
  {
    id: "agent",
    num: "03",
    label: "AI Agent Core",
    role: "ORCHESTRATOR",
    icon: "🧠",
    summary: "LangGraph Multi-Step Reasoning Loop",
    details:
      "The brain of the system. Implements ReAct (Reason + Act) loops, goal decomposition, multi-agent debates, and self-reflection to verify decisions before execution.",
    tech: ["LangChain", "LangGraph", "Python / FastAPI", "State Graphs"],
    safeguards: "Max-hop loop breakers, deterministic state machines, fallback paths",
  },
  {
    id: "llm",
    num: "04",
    label: "LLM Layer",
    role: "INTELLIGENCE",
    icon: "⚡",
    summary: "Claude 3.5 Sonnet / GPT-4o",
    details:
      "Routes prompts to the optimal foundational model depending on task complexity and budget. Uses structured JSON schema output enforcement for 100% predictable parsing.",
    tech: ["Claude 3.5 Sonnet", "GPT-4o", "DeepSeek-R1", "Prompt Caching"],
    safeguards: "Pydantic JSON schema validation, automatic retry on parse errors, fallback models",
  },
  {
    id: "tools",
    num: "05",
    label: "Tools & APIs",
    role: "EXECUTION",
    icon: "🔌",
    summary: "Sandboxed Functions & Third-Party APIs",
    details:
      "Equips the agent to interact with the real world: executing code in Docker sandboxes, making REST/GraphQL calls, querying third-party APIs (Stripe, Twilio, Google Cal), or scraping dynamic web pages.",
    tech: ["Docker Ephemeral Containers", "FastAPI Handlers", "Playwright / Scrapy", "Stripe SDK"],
    safeguards: "Sandboxed network access, read-only permissions by default, human-in-the-loop approvals",
  },
  {
    id: "database",
    num: "06",
    label: "Data & Memory",
    role: "PERSISTENCE",
    icon: "🗄️",
    summary: "Vector RAG + Relational Storage",
    details:
      "Grounded knowledge retrieval via semantic vector embeddings. Preserves short-term session memory and long-term customer history across multi-turn workflows.",
    tech: ["ChromaDB / Pinecone", "PostgreSQL", "MongoDB", "Redis Cache"],
    safeguards: "Zero-hallucination semantic thresholding, encrypted credential vaults, tenant isolation",
  },
  {
    id: "automation",
    num: "07",
    label: "Output & Action",
    role: "AUTOMATION",
    icon: "🚀",
    summary: "CRM Sync, Dispatches & Telemetry",
    details:
      "Delivers the end result: sending authenticated emails, updating CRM records, triggering Slack alerts, creating GitHub PRs, or streaming final audio back to the caller.",
    tech: ["Zendesk / HubSpot Sync", "SendGrid / Resend", "Slack Webhooks", "Prometheus / Grafana"],
    safeguards: "Idempotent action keys, transaction rollbacks, real-time audit logging",
  },
];

export default function SystemArchitecture() {
  const [activeNode, setActiveNode] = useState(ARCH_NODES[2]); // Default: AI Agent Core

  return (
    <section id="architecture" className="section architecture-section">
      <div className="section-header">
        <span className="section-num">04.B</span>
        <h2 className="section-title">
          HOW I BUILD <span className="accent">AI SYSTEMS</span>
        </h2>
        <div className="section-line" />
      </div>

      <p className="architecture-subtitle">
        An interactive look at my end-to-end engineering architecture. Click any node in the pipeline to inspect protocols, technologies, and safety safeguards.
      </p>

      {/* Interactive Pipeline Bar */}
      <div className="arch-pipeline-container">
        <div className="arch-pipeline-track">
          {ARCH_NODES.map((node, index) => {
            const isSelected = activeNode.id === node.id;
            return (
              <div key={node.id} className="arch-node-wrapper">
                <button
                  type="button"
                  className={`arch-node-btn ${isSelected ? "arch-node-active" : ""}`}
                  onClick={() => setActiveNode(node)}
                >
                  <div className="arch-node-header">
                    <span className="arch-node-num">{node.num}</span>
                    <span className="arch-node-icon">{node.icon}</span>
                  </div>
                  <span className="arch-node-label">{node.label}</span>
                  <span className="arch-node-role">{node.role}</span>
                </button>

                {index < ARCH_NODES.length - 1 && (
                  <div className="arch-connector">
                    <span className="arch-connector-line" />
                    <span className="arch-connector-arrow">▶</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Node Deep Dive Inspector */}
      <div className="arch-inspector-card">
        <div className="arch-inspector-header">
          <div className="inspector-title-group">
            <span className="inspector-icon">{activeNode.icon}</span>
            <div>
              <div className="inspector-badge-row">
                <span className="inspector-step">STAGE {activeNode.num} OF 07</span>
                <span className="inspector-role-badge">{activeNode.role}</span>
              </div>
              <h3 className="inspector-title">{activeNode.label}</h3>
            </div>
          </div>
          <span className="inspector-summary-chip">{activeNode.summary}</span>
        </div>

        <div className="arch-inspector-body">
          <div className="inspector-col">
            <h4 className="inspector-h4">ARCHITECTURE &amp; IMPLEMENTATION</h4>
            <p className="inspector-desc">{activeNode.details}</p>
          </div>

          <div className="inspector-col">
            <h4 className="inspector-h4">TECHNOLOGIES IN USE</h4>
            <div className="inspector-tech-grid">
              {activeNode.tech.map((t) => (
                <span className="tech-chip tech-chip-cyan" key={t}>
                  {t}
                </span>
              ))}
            </div>

            <h4 className="inspector-h4" style={{ marginTop: "1rem" }}>
              RELIABILITY &amp; SAFEGUARDS
            </h4>
            <div className="inspector-safeguard-box">
              <span className="safeguard-icon">🛡️</span>
              <span className="safeguard-text">{activeNode.safeguards}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
