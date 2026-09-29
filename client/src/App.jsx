// ═══════════════════════════════════════════════════════════════════
// APP.JSX — CLEAN COSMIC PORTFOLIO ROOT (REFERENCE MATCH)
// Strict Reference Layout Order:
// Navbar -> Hero -> 01 About -> 02 Skills -> 03 Projects -> 04 Services -> 07 Contact -> Footer
// ═══════════════════════════════════════════════════════════════════
import { useState, useEffect } from "react";
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
import useSmoothScroll from "./hooks/useSmoothScroll";
import useTilt        from "./hooks/useTilt";
import useGSAPAnimations from "./hooks/useGSAPAnimations";

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
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useRipple();
  useSmoothScroll();
  useTilt();
  useGSAPAnimations(loaded);

  // Prevent browser from restoring old scroll position on refresh/load
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (!window.location.hash || window.location.hash === "#home") {
      window.scrollTo(0, 0);
    }
  }, []);

  // Ensure scroll is at top (Home) when loader completes
  useEffect(() => {
    if (loaded) {
      if (!window.location.hash || window.location.hash === "#home") {
        window.scrollTo(0, 0);
        if (window.__lenis) {
          window.__lenis.scrollTo(0, { immediate: true });
        }
      }
    }
  }, [loaded]);

  // Ambient mouse spotlight
  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <>
      {/* Ambient cursor spotlight */}
      <div
        className="ambient-cursor-spotlight"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />

      {/* Birthday overlay (Sep 15 only) */}
      {!bdayDone && <BirthdayOverlay onDone={() => setBdayDone(true)} />}

      {/* Loader */}
      {bdayDone && !loaded && <Loader onDone={() => setLoaded(true)} />}

      {/* 3D Cosmic Space Background */}
      <ThreeBackground />

      {/* Ripple container */}
      <div id="ripple-root" />

      {/* Clean Site Wrapper matching exact reference layout */}
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
