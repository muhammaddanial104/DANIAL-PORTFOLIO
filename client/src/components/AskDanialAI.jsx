import { useState, useRef, useEffect } from "react";

export default function AskDanialAI() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! I am Danial's AI Assistant. Ask me anything about Danial's AI agent architecture, automation capabilities, tech stack, or real projects.",
      timestamp: "Just now",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  const suggestedPrompts = [
    "What kind of AI agents can Danial build?",
    "Can Danial automate customer support?",
    "Show me a project that uses AI.",
    "What technologies does Danial work with?",
    "I have a business process I want to automate.",
  ];

  // Verified portfolio knowledge base (truthful guardrails, no hallucination)
  const knowledgeBase = [
    {
      keywords: ["kind of ai", "types of agent", "what kind", "what ai", "build"],
      answer:
        "Danial specializes in building 4 core types of autonomous AI agents:\n\n1. **ReAct & Tool-Calling Agents:** Multi-step reasoning agents that use APIs, webhooks, and local tools to complete end-to-end tasks.\n2. **AI Customer Support & Voice Agents:** 24/7 autonomous support bots integrated with WhatsApp, Email, and CRM systems with RAG over company docs.\n3. **Desktop AI Companions:** Local system-control agents like NOVA AI featuring voice synthesis and OS automation.\n4. **Cyber Defense & Recon Agents:** Autonomous vulnerability scanners and CVE analysis agents like AEGIS-AI.",
    },
    {
      keywords: ["customer support", "support", "ticket", "whatsapp", "email automation"],
      answer:
        "Yes, absolutely! Danial builds autonomous customer support systems that connect to WhatsApp, Email, or website chat widgets. They:\n\n• Understand customer intent and queries in real-time.\n• Retrieve verified answers from your company documentation (RAG).\n• Update your CRM (HubSpot, Notion, or MongoDB).\n• Escalate complex tickets to human staff with full context.\n\nWould you like Danial to build a customer support agent for your business?",
    },
    {
      keywords: ["project", "nova", "aegis", "webpulse", "ecommerce", "work"],
      answer:
        "Here are Danial's verified flagship projects:\n\n• **NOVA AI Engine:** Autonomous AI desktop assistant with voice synthesis, ReAct tool-calling loops, and OS automation (Python, Electron, React).\n• **AEGIS-AI:** Autonomous cyber security reconnaissance and vulnerability auditing engine (Python, FastAPI, Docker).\n• **WebPulse:** Real-time SaaS analytics & telemetry platform with sub-second WebSocket updates (MERN Stack).\n• **Enterprise MERN E-Commerce:** Built during Danial's 6-month software engineering internship at ITS Gujrat with full Stripe payment flow.\n\nScroll down to the **Projects** section to explore the full case studies!",
    },
    {
      keywords: ["technology", "tech stack", "languages", "tools", "skills", "framework"],
      answer:
        "Danial's production tech stack includes:\n\n• **AI & Automation:** Python, ReAct Multi-Agents, Tool-Calling, FastAPI, LangChain, RAG Systems, OS Automation.\n• **Frontend:** React, Next.js, Tailwind CSS, Electron.\n• **Backend & Databases:** Node.js, Express.js, MongoDB, RESTful APIs, WebSockets.\n• **Core Discipline:** Bachelor in Robotics (Robotics & Artificial Intelligence) and 6-Month Intensive Internship at ITS Gujrat.",
    },
    {
      keywords: ["business process", "automate", "process", "workflow", "save time", "hire"],
      answer:
        "If you have repetitive manual work (e.g., qualifying leads, answering repetitive queries, syncing spreadsheets, or monitoring APIs), Danial can build a custom automated pipeline to handle it.\n\n👉 **Best next step:** Reach out directly to Danial on WhatsApp at **+92 313 7525862** or submit the contact form below with your workflow details!",
    },
  ];

  const handleSend = (queryText) => {
    const textToSend = queryText || input.trim();
    if (!textToSend || isTyping) return;

    // Add user message
    const userMsg = {
      sender: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI reasoning and matching
    setTimeout(() => {
      const lower = textToSend.toLowerCase();
      let matchedAnswer = null;

      for (const item of knowledgeBase) {
        if (item.keywords.some((kw) => lower.includes(kw))) {
          matchedAnswer = item.answer;
          break;
        }
      }

      if (!matchedAnswer) {
        matchedAnswer =
          "Danial is an AI Agent Architect & Full-Stack Engineer with a Bachelor in Robotics and a 6-month software engineering internship at ITS Gujrat. He builds autonomous multi-agents, WhatsApp/Email business automation, and MERN web applications.\n\nYou can chat directly with Danial on WhatsApp at +92 313 7525862 or check out the case studies below!";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: matchedAnswer,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setIsTyping(false);
    }, 650);
  };

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <section id="ask-ai" className="section-container ai-demo-section">
      {/* Section Header */}
      <div className="section-header">
        <div className="section-badge">
          <span className="badge-num">03</span>
          <span className="badge-sep">|</span>
          <span className="badge-title">Interactive AI Demo</span>
        </div>
        <h2 className="section-main-heading">
          Ask <span className="gradient-text">Danial AI</span>
        </h2>
        <p className="section-subtitle">
          Experience Danial's capability firsthand. Ask questions about his AI systems, automation architecture, or real case studies.
        </p>
      </div>

      <div className="ai-chat-interface-wrapper">
        <div className="ai-chat-glow-border"></div>

        {/* Chat Terminal Header */}
        <div className="ai-terminal-header">
          <div className="terminal-window-dots">
            <span className="window-dot dot-red"></span>
            <span className="window-dot dot-yellow"></span>
            <span className="window-dot dot-green"></span>
          </div>

          <div className="terminal-agent-title">
            <span className="agent-status-indicator"></span>
            <span className="agent-title-text">DANIAL-AI COMMAND AGENT [v2.4 — ONLINE]</span>
          </div>

          <div className="terminal-badge">
            <span>Verified Knowledge Base</span>
          </div>
        </div>

        {/* Chat Messages Body */}
        <div className="ai-messages-scroll-area">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-bubble-row ${msg.sender === "user" ? "user-row" : "ai-row"}`}>
              {msg.sender === "ai" && (
                <div className="ai-avatar-badge">
                  <span>⚡</span>
                </div>
              )}

              <div className={`chat-bubble-content ${msg.sender === "user" ? "user-bubble" : "ai-bubble"}`}>
                <div className="bubble-header">
                  <span className="bubble-author">{msg.sender === "user" ? "You" : "Danial AI"}</span>
                  <span className="bubble-time">{msg.timestamp}</span>
                </div>
                <div className="bubble-markdown-text">
                  {msg.text.split("\n\n").map((para, i) => (
                    <p key={i} style={{ marginBottom: i < msg.text.split("\n\n").length - 1 ? "10px" : "0" }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {msg.sender === "user" && (
                <div className="user-avatar-badge">
                  <span>👤</span>
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="chat-bubble-row ai-row">
              <div className="ai-avatar-badge">
                <span>⚡</span>
              </div>
              <div className="ai-bubble typing-bubble">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-status-text">Danial AI is analyzing...</span>
              </div>
            </div>
          )}

          <div ref={chatBottomRef} />
        </div>

        {/* Suggested Prompts Shelf from Upgrade Plan */}
        <div className="suggested-prompts-shelf">
          <span className="prompts-shelf-label">Suggested Inquiries:</span>
          <div className="prompts-chips-list">
            {suggestedPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                disabled={isTyping}
                className="prompt-chip-btn"
              >
                <span>{prompt}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Query Input */}
        <form
          className="ai-chat-input-bar"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question or business automation requirement..."
            className="ai-chat-text-input"
            disabled={isTyping}
          />

          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="ai-chat-send-btn"
          >
            <span>Ask Agent</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>

        {/* Quick Conversion Link */}
        <div className="ai-chat-footer-cta">
          <span>Need a tailored AI agent built for your company?</span>
          <a
            href="https://wa.me/923137525862?text=Hello%20Danial,%20I%20tried%20your%20Danial%20AI%20demo%20and%20want%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="chat-whatsapp-link"
          >
            Talk directly to Danial on WhatsApp ↗
          </a>
        </div>
      </div>
    </section>
  );
}
