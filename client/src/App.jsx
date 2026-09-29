import CosmicBackground from "./components/CosmicBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AskDanialAI from "./components/AskDanialAI";
import WhatICanAutomate from "./components/WhatICanAutomate";
import LiveAgentDemo from "./components/LiveAgentDemo";
import Projects from "./components/Projects";
import RoiCalculator from "./components/RoiCalculator";
import SystemArchitecture from "./components/SystemArchitecture";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="cosmic-app-wrapper">
      {/* 60FPS Twinkling Starfield Canvas */}
      <CosmicBackground />

      {/* 01 — Minimal Navbar with "Start a Project" CTA */}
      <Navbar />

      {/* Main Content Sections Following 10/10 Upgrade Plan */}
      <main className="main-content">
        {/* 02 — Hero: "I Build AI Agents That Do the Work." */}
        <Hero />

        {/* 03 — Ask Danial AI: Live Interactive AI Demo */}
        <AskDanialAI />

        {/* 04 — What I Can Automate: 8 High-Impact Business Automation Capabilities */}
        <WhatICanAutomate />

        {/* 05 — Live Agent Demo: Complete 6-Step Autonomous Workflow */}
        <LiveAgentDemo />

        {/* 06 & 07 — Featured Nova AI Case Study & Additional Case Studies */}
        <Projects />

        {/* 08 — AI ROI Calculator with Transparent Assumptions */}
        <RoiCalculator />

        {/* 09 — How I Build AI Systems: Interactive Multi-Agent Architecture */}
        <SystemArchitecture />

        {/* 10 — Why Work With Me: Engineering Rigor & Production Experience */}
        <WhyWorkWithMe />

        {/* 11 & 12 — Truthful Availability, Final CTA & Action Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
