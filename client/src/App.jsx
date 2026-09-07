// --------------------------------------------------------
// APP.JSX — Main App with Loader
// --------------------------------------------------------
import { useState, useEffect } from "react";
import Loader         from "./components/Loader";
import ThreeBackground from "./components/ThreeBackground";
import Navbar         from "./components/Navbar";
import Hero           from "./components/Hero";
import About          from "./components/About";
import Skills         from "./components/Skills";
import Projects       from "./components/Projects";
import Contact        from "./components/Contact";
import Footer         from "./components/Footer";
import useRipple      from "./hooks/useRipple";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useRipple();

  return (
    <>
      {/* -- LOADER -- */}
      {!loaded && <Loader onDone={() => setLoaded(true)} />}

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
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
