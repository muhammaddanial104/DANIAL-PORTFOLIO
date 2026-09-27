// ═══════════════════════════════════════════════════
// COMPONENT: AILab.jsx — "ASK DANIAL AI" & LIVE AGENT DEMO
// Portfolio 10/10 Upgrade Plan — Priority 2
// Interactive AI Command Center demonstrating real agent capability
// ═══════════════════════════════════════════════════
import { useState, useRef, useEffect } from "react";

const SUGGESTED_PROMPTS = [
  "What kind of AI agents can Danial build?",
  "Can Danial automate customer support?",
  "Show me a project that uses AI",
  "What technologies does Danial work with?",
  "I have a business process I want to automate",
];

const WORKFLOW_STEPS = [
  { id: "msg",    icon: "💬", title: "Customer Message", desc: "Incoming multichannel stream (WhatsApp, Web, Email, Voice)" },
  { id: "intent", icon: "🧠", title: "AI Intent Classifier", desc: "Fast semantic routing & sentiment detection" },
  { id: "kb",     icon: "📚", title: "Knowledge Base", desc: "Vector search (RAG) over company docs & past tickets" },
  { id: "resp",   icon: "⚡", title: "Response Generator", desc: "Grounded LLM output with strict policy guardrails" },
  { id: "crm",    icon: "📊", title: "CRM & DB Sync", desc: "Automated ticket logging, lead scoring & state save" },
  { id: "team",   icon: "🔔", title: "Team Notification", desc: "Slack/WhatsApp alert for high-value escalation" },
];

const KNOWLEDGE_BASE = {
  agents: `Danial engineers production-grade autonomous AI agents tailored for real business operations:
• AI Customer Support & Voice Agents: 24/7 intelligent ticketing, instant multi-turn resolutions, and sentiment-aware escalations.
• Workflow & Process Automation: WhatsApp Business bots, email sorting, invoice extraction, and lead qualification.
• Software Engineering Agents: Autonomous coding assistants (like AUTO-DEV AI) that write tests, implement CRUD APIs, and manage Git.
• Autonomous Cyber Defense: Intelligent anomaly detection and real-time network quarantine systems (like AEGIS-AI).`,

  support: `Yes! Danial builds end-to-end AI Customer Support automation:
1. Multichannel Gateway: Integrates with WhatsApp, Web Chat, Email, and Zendesk/HubSpot.
2. Zero-Hallucination Knowledge Retrieval: Uses RAG (Retrieval-Augmented Generation) connected exclusively to your verified business documents and FAQs.
3. Automated Escalation: Resolves 70-80% of repetitive inquiries autonomously and routes complex tier-3 edge cases directly to your human team with context summaries.`,

  project: `Here are Danial's flagship engineering projects:
🛡️ AEGIS-AI: Autonomous cyber defense platform that monitors network packet streams, detects anomalous vectors using ML, and executes instant quarantine protocols.
💻 AUTO-DEV AI: Autonomous software engineering agent built with LangGraph and Python that plans feature specifications, writes clean code, runs tests in sandboxes, and submits pull requests.
🤖 NOVA AI: Voice & vision-enabled desktop intelligence assistant powered by Whisper, PyTorch, and local OS tooling for hands-free productivity.`,

  tech: `Danial's production technology stack:
• AI & Agents: LangChain, LangGraph, OpenAI / Anthropic APIs, Ollama, Whisper, PyTorch, Vector DBs (Pinecone, ChromaDB).
• Backend & APIs: Python, FastAPI, Node.js, Express, RESTful APIs, WebSockets, Celery.
• Frontend & Systems: React.js, Vite, Three.js, GSAP, Tailwind CSS, TypeScript.
• Database & DevOps: MongoDB, PostgreSQL, Redis, Docker, Git, Linux.`,

  automate: `To automate your business process, Danial follows a structured 4-step framework:
1. Workflow Diagnosis: Map your repetitive manual steps and identify data bottlenecks.
2. Architecture Design: Select the optimal models (local vs API), tooling, and verification guardrails.
3. Rapid MVP Development: Build and benchmark a working agent pipeline within 7-14 days.
4. Deployment & Monitoring: Deploy with logging, latency optimization, and human-in-the-loop oversight.

👉 Want to discuss your specific process? Click 'Start a Project' or connect via WhatsApp to get an architectural breakdown!`,
};

function getAIResponse(query) {
  const q = query.toLowerCase();
  if (q.includes("what kind") || q.includes("agent") || q.includes("build") || q.includes("type")) {
    return KNOWLEDGE_BASE.agents;
  }
  if (q.includes("support") || q.includes("customer") || q.includes("service")) {
    return KNOWLEDGE_BASE.support;
  }
  if (q.includes("project") || q.includes("portfolio") || q.includes("work") || q.includes("show")) {
    return KNOWLEDGE_BASE.project;
  }
  if (q.includes("tech") || q.includes("stack") || q.includes("skill") || q.includes("tool") || q.includes("language")) {
    return KNOWLEDGE_BASE.tech;
  }
  if (q.includes("process") || q.includes("automate") || q.includes("business") || q.includes("idea")) {
    return KNOWLEDGE_BASE.automate;
  }
  // Default helpful response
  return `Danial specializes in engineering autonomous AI agents, enterprise automation workflows, and full-stack software systems. 

You can ask me specifically about:
1. AI Customer Support & Voice Agents
2. Featured Projects (AEGIS-AI, AUTO-DEV AI, NOVA AI)
3. Production Technology Stack
4. How to automate your business process

What would you like to explore?`;
}

export default function AILab() {
  const [messages, setMessages] = useState([
    {
      id: "init",
      sender: "ai",
      text: "System initialized. I'm Danial's portfolio agent. I can explain what Danial builds, demonstrate real systems like AEGIS-AI and AUTO-DEV AI, or analyze how to automate your specific business process. Ask me anything or select a prompt below!",
      time: "Just now",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Rotate workflow pipeline preview
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % WORKFLOW_STEPS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleSend = textToSend => {
    const query = (textToSend || inputVal).trim();
    if (!query || isTyping) return;

    const userMsg = {
      id: "u-" + Date.now(),
      sender: "user",
      text: query,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages(prev => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    // Simulate intelligent agent reasoning delay
    setTimeout(() => {
      const responseText = getAIResponse(query);
      const aiMsg = {
        id: "ai-" + Date.now(),
        sender: "ai",
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 650);
  };

  return (
    <section id="ai-lab" className="section ai-lab-section">
      {/* Section Header */}
      <div className="section-header">
        <span className="section-num">01</span>
        <h2 className="section-title">
          AI COMMAND <span className="accent">CENTER</span>
        </h2>
        <div className="section-line" />
      </div>

      <p className="ai-lab-subtitle">
        Interactive portfolio assistant &bull; Test capabilities, inspect workflows, and see how Danial builds production AI agents.
      </p>

      {/* Main Grid: Chat Assistant on Left/Center, Interactive Architecture on Right */}
      <div className="ai-lab-grid">
        {/* Terminal / Chat Widget */}
        <div className="ai-chat-card">
          {/* Header Bar */}
          <div className="ai-chat-header">
            <div className="ai-chat-status">
              <span className="ai-status-dot" />
              <span className="ai-status-title">DANIAL-AI AGENT v2.4</span>
              <span className="ai-latency-badge">24ms LATENCY</span>
            </div>
            <div className="ai-chat-controls">
              <span className="ctrl-dot red" />
              <span className="ctrl-dot yellow" />
              <span className="ctrl-dot green" />
            </div>
          </div>

          {/* Quick Prompt Chips */}
          <div className="ai-prompts-bar">
            <span className="ai-prompts-label">QUICK PROMPTS:</span>
            <div className="ai-chips-scroll">
              {SUGGESTED_PROMPTS.map((p, idx) => (
                <button
                  key={idx}
                  className="ai-prompt-chip"
                  onClick={() => handleSend(p)}
                  disabled={isTyping}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Messages Log */}
          <div className="ai-chat-messages">
            {messages.map(m => (
              <div key={m.id} className={`ai-message ${m.sender === "user" ? "user-msg" : "ai-msg"}`}>
                <div className="msg-sender-tag">
                  {m.sender === "user" ? "YOU" : "DANIAL AI"} &bull; {m.time}
                </div>
                <div className="msg-bubble">
                  {m.text.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="ai-message ai-msg typing-msg">
                <div className="msg-sender-tag">DANIAL AI &bull; ANALYZING CONTEXT...</div>
                <div className="typing-indicator">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Bar */}
          <form
            className="ai-chat-input-bar"
            onSubmit={e => {
              e.preventDefault();
              handleSend();
            }}
          >
            <span className="input-prompt-sign">&gt;</span>
            <input
              type="text"
              placeholder="Ask Danial AI anything (e.g., Can you automate customer support?)..."
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              disabled={isTyping}
              className="ai-text-input"
            />
            <button type="submit" className="ai-send-btn" disabled={!inputVal.trim() || isTyping}>
              <span>Send</span>
              <span className="send-arrow">&rarr;</span>
            </button>
          </form>
        </div>

        {/* Live Autonomous Workflow Pipeline (Item 05 from Upgrade Plan) */}
        <div className="ai-workflow-card">
          <div className="workflow-card-header">
            <span className="wf-tag">LIVE WORKFLOW DEMO</span>
            <h3 className="wf-title">Autonomous AI Support Pipeline</h3>
            <p className="wf-desc">
              How Danial designs zero-hallucination agentic pipelines for enterprise clients:
            </p>
          </div>

          <div className="workflow-steps-list">
            {WORKFLOW_STEPS.map((s, idx) => (
              <div
                key={s.id}
                className={`wf-step-item ${activeStep === idx ? "active-step" : ""}`}
                onClick={() => setActiveStep(idx)}
              >
                <div className="wf-step-num">0{idx + 1}</div>
                <div className="wf-step-icon">{s.icon}</div>
                <div className="wf-step-content">
                  <div className="wf-step-title">{s.title}</div>
                  <div className="wf-step-desc">{s.desc}</div>
                </div>
                {activeStep === idx && <span className="wf-active-pulse" />}
              </div>
            ))}
          </div>

          <div className="workflow-card-footer">
            <button
              className="btn btn-outline wf-action-btn"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Discuss Your Custom Agent &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
