import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import CosmicBackground from "./components/CosmicBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBanner from "./components/StatsBanner";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import MiniChatbot from "./components/MiniChatbot";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingBotLauncher from "./components/FloatingBotLauncher";

export default function App() {
  useEffect(() => {
    // Disable browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Clear lingering hash on initial load
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    window.scrollTo(0, 0);

    const rafId = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      const homeEl = document.getElementById("home");
      if (homeEl) {
        homeEl.scrollIntoView({ behavior: "instant", block: "start" });
      }
    });

    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="cosmic-app-wrapper">
      {/* Accessibility: Skip to Main Content Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Ambient Starfield Canvas */}
      <CosmicBackground />

      {/* Fixed Sticky Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main id="main-content" className="main-content">
        {/* 01 — HERO */}
        <Hero />

        {/* 01.5 — INDEPENDENT STATS & MILESTONES BANNER */}
        <StatsBanner />

        {/* 02 — ABOUT */}
        <About />

        {/* 03 — SKILLS & PROJECT PROOF */}
        <Skills />

        {/* 04 — FEATURED PROJECTS */}
        <Projects />

        {/* 05 — MINI CHATBOT & AUTOMATION SIMULATOR */}
        <MiniChatbot />

        {/* 06 — CONTACT */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Floating Mini Chatbot Launcher */}
      <FloatingBotLauncher />

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
