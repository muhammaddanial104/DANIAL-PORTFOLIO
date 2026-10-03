import { useEffect, Suspense, lazy } from "react";
import { Analytics } from "@vercel/analytics/react";
import CosmicBackground from "./components/CosmicBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Code splitting below-the-fold components via React.lazy for lightning-fast initial bundle
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Blog = lazy(() => import("./components/Blog"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function SectionFallback() {
  return (
    <div className="section-loading-fallback" aria-hidden="true">
      <div className="fallback-pulse-ring"></div>
    </div>
  );
}

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
        {/* 01 — HERO (Directly mounted for fastest FCP) */}
        <Hero />

        {/* 02 — ABOUT (Lazy loaded) */}
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>

        {/* 03 — SKILLS (Lazy loaded) */}
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>

        {/* 04 — FEATURED PROJECTS (Lazy loaded) */}
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>

        {/* 05 — TECHNICAL WRITING / ARTICLES (Lazy loaded) */}
        <Suspense fallback={<SectionFallback />}>
          <Blog />
        </Suspense>

        {/* 06 — CONTACT (Lazy loaded) */}
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>

      {/* Footer (Lazy loaded) */}
      <Suspense fallback={<div style={{ minHeight: "120px" }} />}>
        <Footer />
      </Suspense>

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
