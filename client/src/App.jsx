import { useEffect } from "react";
import CosmicBackground from "./components/CosmicBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AskDanialAI from "./components/AskDanialAI";
import WhatICanAutomate from "./components/WhatICanAutomate";
import LiveAgentDemo from "./components/LiveAgentDemo";
import SystemArchitecture from "./components/SystemArchitecture";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import RoiCalculator from "./components/RoiCalculator";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    // 1. Disable browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Clear any lingering hash so browser does not jump to other sections
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    // 3. Immediately scroll to top
    window.scrollTo(0, 0);

    // 4. Double-check after initial paint and DOM render
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
      {/* Ambient Starfield Canvas */}
      <CosmicBackground />

      {/* Fixed Sticky Navbar */}
      <Navbar />

      {/* Main Page Flow per Professional Improvement Report */}
      <main className="main-content">
        {/* 01 — HERO: Name + Role + Value Proposition + Primary CTAs */}
        <Hero />

        {/* 02 — ABOUT: Short Story, Degree & 6-Month ITS Gujrat Internship */}
        <About />

        {/* 03 — SKILLS: Proven Skills by Category + Separated Currently Learning */}
        <Skills />

        {/* 04 — FEATURED PROJECTS: 4 Projects with Problem Solved, Contribution & Proof */}
        <Projects />

        {/* 05 — AI / AUTOMATION: Interactive Command Center & Live Workflow Simulation */}
        <AskDanialAI />
        <WhatICanAutomate />
        <LiveAgentDemo />

        {/* 06 — PROCESS & RIGOR: Architecture, Why Work With Me & Transparent ROI */}
        <SystemArchitecture />
        <WhyWorkWithMe />
        <RoiCalculator />

        {/* 07 — CONTACT: Low-Friction Form, Direct WhatsApp, Email & Socials */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
