import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AskDanialAI() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! I am Danial's AI Assistant. Ask me anything about Danial's full-stack architecture, autonomous AI multi-agents, enterprise production projects, or technical competencies.",
      timestamp: "Just now",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  const suggestedPrompts = [
    "What kind of AI agents can Danial build?",
    "Can Danial automate customer support?",
    "Show me a production AI project.",
    "What technologies does Danial specialize in?",
    "I have a business process I want to automate.",
  ];

  // Verified portfolio knowledge base (truthful guardrails, no hallucination)
  const knowledgeBase = [
    {
      keywords: ["kind of ai", "types of agent", "what kind", "what ai", "build"],
      answer:
        "Danial specializes in architecting 4 primary classes of autonomous AI systems:\n\n1. **ReAct & Tool-Calling Agents:** Multi-step autonomous workflows that connect to APIs, execute webhooks, and process file pipelines end-to-end.\n2. **AI Customer Support & Voice Agents:** 24/7 intelligent conversational agents with RAG over internal documentation, integrated with WhatsApp, Email, and CRM systems.\n3. **Desktop AI Companions:** Local system-control agents like NOVA AI featuring speech synthesis, browser orchestration, and desktop task automation.\n4. **Autonomous Cyber Defense Agents:** Real-time threat detection and vulnerability remediation platforms like AEGIS-AI with automated threat quarantine and remediation.",
    },
    {
      keywords: ["customer support", "support", "ticket", "whatsapp", "email automation"],
      answer:
        "Yes, absolutely! Danial designs autonomous customer support architectures that connect directly to WhatsApp Cloud API, Email inboxes, or web portals. They:\n\n• Classify intent and provide instant answers using company documentation (RAG).\n• Safely query databases and update CRMs (HubSpot, Notion, or MongoDB).\n• Smoothly escalate complex edge cases to human agents with summarized context.\n\nWould you like Danial to build an autonomous support system for your business?",
    },
    {
      keywords: ["project", "nova", "aegis", "autodev", "ecommerce", "work"],
      answer:
        "Here are Danial's verified flagship production architectures:\n\n• **AEGIS-AI:** Autonomous SOC platform that analyzes network threats in real-time and isolates CVE vulnerabilities in quarantined sandbox environments.\n• **AutoDev AI:** Autonomous coding engine with AST parsing, multi-file code generation, and automated test validation and AST diff generation.\n• **NOVA Desktop AI:** Autonomous desktop assistant with natural speech recognition, browser orchestration, and cross-platform automation.\n• **Enterprise MERN E-Commerce:** Built during Danial's 6-month software engineering internship at ITS Gujrat with full Stripe payment flow and live inventory sync.\n\nScroll to the **Projects** section to view complete case studies!",
    },
    {
      keywords: ["technology", "tech stack", "languages", "tools", "skills", "framework"],
      answer:
        "Danial's core production tech stack comprises:\n\n• **Full-Stack & Web:** React.js, Next.js, Node.js, Express.js, MongoDB, RESTful APIs, Tailwind CSS.\n• **AI & Automation:** Python, FastAPI, LangChain, OpenAI GPT-4, Claude 3.5 Sonnet, ReAct Tool-Calling, RAG.\n• **Tooling & Cloud:** Git/GitHub, Vercel, Postman, Headless Browser Automation.\n• **Engineering Core:** Bachelor in Robotics & Autonomous Systems and 6-Month Intensive Software Engineering Internship at ITS Gujrat.",
    },
    {
      keywords: ["business process", "automate", "process", "workflow", "save time", "hire"],
      answer:
        "If your organization handles repetitive manual tasks—such as inbound lead qualification, customer inquiries, data extraction, or cross-app syncing—Danial can architect an automated pipeline to handle it 24/7.\n\n👉 **Direct Next Step:** Reach out directly to Danial on WhatsApp at **+92 313 7525862** or submit the contact form below with your requirements!",
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
          "Danial is a Full-Stack Software Engineer & AI Automation Architect with a Bachelor in Robotics and a 6-month software engineering internship at ITS Gujrat. He builds autonomous multi-agent pipelines, WhatsApp/Email business workflows, and full-stack MERN web platforms.\n\nYou can connect directly with Danial on WhatsApp at +92 313 7525862 or review his case studies below!";
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
    }, 600);
  };

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <section id="ask-ai" className="section-container ai-demo-section">
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
          <span className="badge-title">Interactive AI Demo</span>
        </div>
        <h2 className="section-main-heading">
          ASK DANIAL AI &amp; <span className="gradient-text">COMMAND AGENT</span>
        </h2>
        <p className="section-subtitle">
          Experience Danial's capability firsthand. Converse directly with an AI trained on his architectural philosophy, verified projects, and automation stack.
        </p>
      </motion.div>

      <motion.div
        className="ai-chat-interface-wrapper"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
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
          <AnimatePresence initial={false}>
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                className={`chat-bubble-row ${msg.sender === "user" ? "user-row" : "ai-row"}`}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.25 }}
              >
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
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div
              className="chat-bubble-row ai-row"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="ai-avatar-badge">
                <span>⚡</span>
              </div>
              <div className="ai-bubble typing-bubble">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-status-text">Danial AI is analyzing...</span>
              </div>
            </motion.div>
          )}

          <div ref={chatBottomRef} />
        </div>

        {/* Suggested Prompts Shelf */}
        <div className="suggested-prompts-shelf">
          <span className="prompts-shelf-label">Suggested Inquiries:</span>
          <div className="prompts-chips-list">
            {suggestedPrompts.map((prompt, idx) => (
              <motion.button
                key={idx}
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

          <motion.button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="ai-chat-send-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <span>Ask Agent</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </motion.button>
        </form>

        {/* Quick Conversion Link */}
        <div className="ai-chat-footer-cta">
          <span>Need a customized AI agent or full-stack software built for your business?</span>
          <a
            href="https://wa.me/923137525862?text=Hello%20Danial,%20I%20tried%20your%20Danial%20AI%20demo%20and%20want%20to%20discuss%20a%20project."
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
