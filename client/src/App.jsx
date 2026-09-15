// --------------------------------------------------------
// APP.JSX — Main App with Birthday Celebration & Loader
// Aligned in exact Navbar order: Home -> About -> Skills -> Projects -> Services -> Contact
// --------------------------------------------------------
import { useState } from "react";
import BirthdayOverlay from "./components/BirthdayOverlay";
import Loader         from "./components/Loader";
import ThreeBackground from "./components/ThreeBackground";
import Navbar         from "./components/Navbar";
import Hero           from "./components/Hero";
import About          from "./components/About";
import Skills         from "./components/Skills";
import Projects       from "./components/Projects";
import Services       from "./components/Services";
import Contact        from "./components/Contact";
import Footer         from "./components/Footer";
import useRipple      from "./hooks/useRipple";

// Active exclusively on September 15, 2026 until 12:00 AM Midnight
const isBirthdayActive = () => {
  const now = new Date();
  const expiry = new Date(2026, 8, 15, 23, 59, 59, 999).getTime();
  return (
    now.getFullYear() === 2026 &&
    now.getMonth() === 8 &&
    now.getDate() === 15 &&
    now.getTime() <= expiry
  );
};

export default function App() {
  const [bdayDone, setBdayDone] = useState(!isBirthdayActive());
  const [loaded, setLoaded]     = useState(false);
  useRipple();

  return (
    <>
      {/* -- BIRTHDAY & ROBOTICS MILESTONE OVERLAY (Before 12 AM Midnight) -- */}
      {!bdayDone && <BirthdayOverlay onDone={() => setBdayDone(true)} />}

      {/* -- LOADER -- (Runs after birthday overlay or immediately if expired) */}
      {bdayDone && !loaded && <Loader onDone={() => setLoaded(true)} />}

      {/* -- THREE.JS BACKGROUND -- */}
      <ThreeBackground />

      {/* -- SCANLINES -- */}
      <div className="scanlines" />

      {/* -- HUD CORNERS -- */}
      <div className="hud-corner top-left" />
      <div className="hud-corner top-right" />
      <div className="hud-corner bottom-left" />
      <div className="hud-corner bottom-right" />

      {/* -- RIPPLE PORTAL -- */}
      <div id="ripple-root" />

      {/* -- CONTENT (shown after loader) -- */}
      <div className={`site-wrapper ${loaded ? "site-visible" : ""}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
