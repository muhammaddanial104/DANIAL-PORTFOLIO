import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingBotLauncher() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(() => {
    try {
      return sessionStorage.getItem("dismiss_bot_launcher") === "true";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (isDismissed) return;

    const checkVisibility = () => {
      // 1. Check if chatbot section is in viewport
      const botEl = document.getElementById("chatbot");
      let botVisible = false;
      if (botEl) {
        const rect = botEl.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60 && rect.bottom > 60) {
          botVisible = true;
        }
      }

      // 2. Check if footer or bottom of page is in view
      const footerEl = document.querySelector(".footer-container");
      let footerVisible = false;
      if (footerEl) {
        const rect = footerEl.getBoundingClientRect();
        if (rect.top < window.innerHeight - 40) {
          footerVisible = true;
        }
      }

      // 3. Check if any modal is currently open in DOM
      const modalOpen = Boolean(document.querySelector(".project-modal-overlay"));

      if (botVisible || footerVisible || modalOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("resize", checkVisibility, { passive: true });
    checkVisibility();

    // Check periodically or on DOM mutations (e.g. when modal opens)
    const interval = setInterval(checkVisibility, 500);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
      clearInterval(interval);
    };
  }, [isDismissed]);

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

  const handleDismiss = (e) => {
    e.stopPropagation();
    setIsDismissed(true);
    try {
      sessionStorage.setItem("dismiss_bot_launcher", "true");
    } catch {}
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="floating-bot-wrapper"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 15 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <button
            type="button"
            onClick={scrollToBot}
            className="floating-bot-launcher"
            title="Try Danial's Mini Chatbot & AI Automation Demo"
            aria-label="Open Mini Chatbot & AI Automation Demo"
          >
            <span className="floating-bot-pulse" aria-hidden="true" />
            <span className="floating-bot-icon" aria-hidden="true">🤖</span>
            <span className="floating-bot-text">AI Chatbot</span>
          </button>
          <button
            type="button"
            onClick={handleDismiss}
            className="floating-bot-close"
            aria-label="Dismiss AI Chatbot button"
            title="Dismiss"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
