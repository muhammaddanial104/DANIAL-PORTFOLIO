import CosmicBackground from "./components/CosmicBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AskDanialAI from "./components/AskDanialAI";
import WhatICanAutomate from "./components/WhatICanAutomate";
import LiveAgentDemo from "./components/LiveAgentDemo";
import Skills from "./components/Skills";
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

      {/* Fixed Navbar with "Start a Project" CTA */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="main-content">
        {/* 01 — Hero: "I Build AI Agents That Do the Work." */}
        <Hero />

        {/* Live Interactive AI Demo */}
        <AskDanialAI />

        {/* 8 High-Impact Business Automation Capabilities */}
        <WhatICanAutomate />

        {/* Complete 6-Step Autonomous Workflow Simulation */}
        <LiveAgentDemo />

        {/* 02 — TECH SKILLS (From Video: 5 Categories + Actual Tech Stack) */}
        <Skills />

        {/* 03 — FEATURED PROJECTS (From Video: AEGIS-AI, AUTO-DEV AI, NOVA AI, E-Commerce) */}
        <Projects />

        {/* AI ROI Calculator with Transparent Assumptions */}
        <RoiCalculator />

        {/* How I Build AI Systems: Interactive Multi-Agent Architecture */}
        <SystemArchitecture />

        {/* Why Work With Me: Engineering Rigor & Production Experience */}
        <WhyWorkWithMe />

        {/* Truthful Availability, Final CTA & Action Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
