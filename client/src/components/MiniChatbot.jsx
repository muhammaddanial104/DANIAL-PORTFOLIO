import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INITIAL_MESSAGES = [
  {
    sender: "ai",
    text: "Hello! I am Danial's Mini Chatbot Automation Assistant.\n\nI showcase Danial's capabilities in Agentic AI, n8n workflow automations, Python, Django, and Bootstrap. You can ask me anything about his technical stack, commercial experience, or run a live automation demo!",
    timestamp: "Just now",
  },
];

const SUGGESTED_PROMPTS = [
  "⚡ Run n8n Automation Demo",
  "🐍 Tell me about Python & Django Stack",
  "🤖 How do you build AI Agents & Workflows?",
  "🎨 Experience with Bootstrap & MERN?",
  "💼 6-Month Commercial Internship Details",
  "📲 How to contact Danial directly?",
];

const KNOWLEDGE_BASE = [
  {
    triggers: ["n8n", "automation demo", "run n8n", "simulate", "pipeline", "workflow demo"],
    answer:
      "🚀 [n8n AUTONOMOUS AGENT WORKFLOW SIMULATION]:\n\n1. ⚡ [Trigger]: Inbound webhook received via POST `/webhook/lead-qualification`.\n2. 🤖 [Agentic AI Node]: Python Gen AI model extracts sentiment, budget tier, and project specifications into structured JSON.\n3. 🔄 [Django / Database Node]: Records verified and synced to internal database.\n4. 📲 [Auto-Dispatch]: Instant notification triggered to Danial's WhatsApp (+92 313 7525862) and confirmation email sent to the client.\n\n✅ Entire pipeline executed autonomously in 380ms with zero manual effort!",
  },
  {
    triggers: ["python", "django", "backend"],
    answer:
      "🐍 [PYTHON & DJANGO FRAMEWORK]:\n\nDanial uses Python for:\n• Backend RESTful APIs with Django & Django REST Framework (DRF).\n• Data models, ORM query optimization, and secure user authentication.\n• Automation scripts, webhook processors, and custom n8n execution nodes.\n• AI Agent orchestration and Gen AI structured prompt pipelines.",
  },
  {
    triggers: ["ai agent", "agentic", "gen ai", "generative ai", "ai automation"],
    answer:
      "🤖 [AGENTIC AI & AI AUTOMATION]:\n\nDanial builds autonomous AI systems that don't just chat, but take action:\n• Multi-step agentic workflows that break complex tasks into actionable tool calls.\n• n8n visual automation pipelines connecting webhooks, databases, CRMs, and email.\n• Generative AI prompt engineering for classification, extraction, and automated lead triage.\n• Custom lightweight mini chatbot automations embedded directly into web apps.",
  },
  {
    triggers: ["bootstrap", "frontend", "ui", "mern", "react"],
    answer:
      "🎨 [BOOTSTRAP 5 & MERN STACK]:\n\nDanial's frontend toolkit combines:\n• Bootstrap 5 for clean, mobile-responsive grids, modals, and rapid UI prototyping.\n• React.js (React 18) with custom hooks and Redux Toolkit state management.\n• Tailwind CSS for modern bespoke cosmic and glassmorphic designs.\n• 98+ Lighthouse mobile performance optimization.",
  },
  {
    triggers: ["internship", "experience", "its gujrat", "projects", "commercial"],
    answer:
      "💼 [6-MONTH COMMERCIAL INTERNSHIP & PROJECTS]:\n\n• Completed a 6-month software engineering internship at ITS Gujrat (March – August 2024).\n• Personally shipped 2 commercial MERN e-commerce platforms with Stripe payments and live inventory sync.\n• Built an n8n Autonomous Multi-Agent Workflow Engine and a Python Django Mini Chatbot system.\n• Holds a Bachelor in Robotics & Autonomous Systems with strong foundations in deterministic state logic.",
  },
  {
    triggers: ["contact", "hire", "email", "phone", "whatsapp"],
    answer:
      "📲 [CONNECT WITH DANIAL]:\n\n• WhatsApp: +92 313 7525862 (Direct instant chat)\n• Email: innocentdanial00@gmail.com\n• GitHub: github.com/muhammaddanial104\n• LinkedIn: linkedin.com/in/muhammad-danial-2584b4432\n• Location: Gujrat / Faisalabad, Pakistan (Open to Remote & On-Site roles)",
  },
];

export default function MiniChatbot() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  const handleSend = (textToSend = input) => {
    const trimmed = textToSend.trim();
    if (!trimmed || isTyping) return;

    const userMsg = {
      sender: "user",
      text: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const lower = trimmed.toLowerCase();
      let matchedAnswer = null;

      for (const item of KNOWLEDGE_BASE) {
        if (item.triggers.some((kw) => lower.includes(kw))) {
          matchedAnswer = item.answer;
          break;
        }
      }

      if (!matchedAnswer) {
        matchedAnswer = `Danial is a Full-Stack Developer (MERN & Python/Django) and AI Automation Specialist. He builds autonomous AI Agents, n8n workflow pipelines, and intelligent mini chatbots.\n\nHe has a Bachelor in Robotics and completed a 6-month software engineering internship at ITS Gujrat shipping 2 commercial platforms.\n\nYou can chat directly with Danial on WhatsApp at +92 313 7525862 or click one of the suggested prompts below!`;
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
    }, 550);
  };

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <section id="chatbot" className="section-container ai-demo-section" aria-labelledby="chatbot-heading">
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
          <span className="badge-title">Interactive AI Automation</span>
        </div>
        <h2 id="chatbot-heading" className="section-main-heading">
          MINI CHATBOT AUTOMATION &amp; <span className="gradient-text">AI AGENTS</span>
        </h2>
        <p className="section-subtitle">
          Experience automated agentic workflows firsthand. Interact with Danial's mini chatbot powered by Python, Django concepts, and n8n webhook automation logic.
        </p>
      </motion.div>

      {/* Terminal Chat Container */}
      <motion.div
        className="ai-chat-interface-wrapper"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="ai-chat-glow-border" aria-hidden="true"></div>

        {/* Terminal Header */}
        <div className="ai-terminal-header">
          <div className="terminal-window-dots" aria-hidden="true">
            <span className="window-dot dot-red"></span>
            <span className="window-dot dot-yellow"></span>
            <span className="window-dot dot-green"></span>
          </div>

          <div className="terminal-agent-title">
            <span className="agent-status-indicator" aria-hidden="true"></span>
            <span className="agent-title-text">DANIAL-AI MINI CHATBOT [PYTHON &amp; n8n ENGINE — ONLINE]</span>
          </div>

          <div className="terminal-badge">
            <span>Agentic Workflow v3.0</span>
          </div>
        </div>

        {/* Messages Scroll Area */}
        <div className="ai-messages-scroll-area" role="log" aria-live="polite">
          <AnimatePresence initial={false}>
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                className={`chat-bubble-row ${msg.sender === "user" ? "user-row" : "ai-row"}`}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.22 }}
              >
                {msg.sender === "ai" && (
                  <div className="ai-avatar-badge" aria-hidden="true">
                    <span>🤖</span>
                  </div>
                )}

                <div className={`chat-bubble-content ${msg.sender === "user" ? "user-bubble" : "ai-bubble"}`}>
                  <div className="bubble-header">
                    <span className="bubble-author">{msg.sender === "user" ? "You" : "Danial Mini Bot"}</span>
                    <span className="bubble-time">{msg.timestamp}</span>
                  </div>
                  <div className="bubble-markdown-text">
                    {msg.text.split("\n\n").map((para, pIdx) => (
                      <p key={pIdx} style={{ marginBottom: pIdx < msg.text.split("\n\n").length - 1 ? "10px" : "0" }}>
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                {msg.sender === "user" && (
                  <div className="user-avatar-badge" aria-hidden="true">
                    <span>👤</span>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div
              className="chat-bubble-row ai-row"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="ai-avatar-badge" aria-hidden="true">
                <span>⚡</span>
              </div>
              <div className="ai-bubble typing-bubble">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-status-text">Processing agentic workflow...</span>
              </div>
            </motion.div>
          )}

          <div ref={chatBottomRef} />
        </div>

        {/* Suggested Prompts Shelf */}
        <div className="suggested-prompts-shelf">
          <span className="prompts-shelf-label">Instant Automated Queries:</span>
          <div className="prompts-chips-list">
            {SUGGESTED_PROMPTS.map((prompt, idx) => (
              <motion.button
                key={idx}
                type="button"
                onClick={() => handleSend(prompt)}
                disabled={isTyping}
                className="prompt-chip-btn"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>{prompt}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Interactive Query Input Bar */}
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
            placeholder="Ask about AI agents, n8n automations, Python, Django, or commercial experience..."
            className="ai-chat-text-input"
            disabled={isTyping}
            aria-label="Type message to Danial AI"
          />

          <motion.button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="ai-chat-send-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Send message"
          >
            <span>Send</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </motion.button>
        </form>

        {/* Quick Conversion Link */}
        <div className="ai-chat-footer-cta">
          <span>Need a customized AI agent, n8n automation, or Python/Django web application?</span>
          <a
            href="https://wa.me/923137525862?text=Hello%20Danial,%20I%20tried%20your%20Mini%20Chatbot%20and%20want%20to%20discuss%20an%20AI%20automation%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="chat-whatsapp-link"
          >
            Talk directly with Danial on WhatsApp ↗
          </a>
        </div>
      </motion.div>
    </section>
  );
}
