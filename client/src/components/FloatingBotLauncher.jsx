import { motion } from "framer-motion";

export default function FloatingBotLauncher() {
  const scrollToBot = () => {
    const el = document.getElementById("chatbot");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        const inputEl = el.querySelector(".ai-chat-text-input");
        if (inputEl) inputEl.focus();
      }, 600);
    }
  };

  return (
    <motion.button
      type="button"
      onClick={scrollToBot}
      className="floating-bot-launcher"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.08, y: -4 }}
      whileTap={{ scale: 0.94 }}
      title="Try Danial's Mini Chatbot & AI Automation Demo"
      aria-label="Open Mini Chatbot & AI Automation Demo"
      style={{
        position: "fixed",
        bottom: "26px",
        right: "26px",
        zIndex: 990,
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 16px",
        background: "rgba(6, 13, 33, 0.9)",
        border: "1px solid rgba(56, 189, 248, 0.5)",
        borderRadius: "9999px",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(56, 189, 248, 0.35)",
        backdropFilter: "blur(12px)",
        cursor: "pointer",
        color: "#ffffff",
        fontSize: "0.85rem",
        fontWeight: 700,
        fontFamily: "inherit",
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#22c55e",
          boxShadow: "0 0 8px #22c55e",
        }}
        aria-hidden="true"
      />
      <span style={{ fontSize: "1.1rem" }} aria-hidden="true">🤖</span>
      <span style={{ color: "#e0f2fe", letterSpacing: "0.2px" }}>AI Chatbot</span>
    </motion.button>
  );
}
