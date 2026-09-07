// ---------------------------------------------------
// COMPONENT: Loader.jsx � REDESIGNED v3
// Clean minimal: pulsing MD + scanning line + counter
// ---------------------------------------------------
import { useState, useEffect } from "react";

export default function Loader({ onDone }) {
  const [phase,    setPhase]    = useState("show");
  const [progress, setProgress] = useState(0);
  const [lineIdx,  setLineIdx]  = useState(0);

  const LINES = [
    "BOOTING AI DEV OS...",
    "LOADING THREE.JS RENDERER...",
    "CONNECTING NEURAL NETWORK...",
    "COMPILING MERN MODULES...",
    "AI SYSTEMS ONLINE...",
    "READY ?",
  ];

  useEffect(() => {
    // progress 0?100 in 2.2s
    const step = 100 / (2200 / 35);
    const prog = setInterval(() => setProgress(p => Math.min(p + step, 100)), 35);

    // cycle lines
    const lineTimer = setInterval(() => setLineIdx(i => Math.min(i + 1, LINES.length - 1)), 380);

    const t1 = setTimeout(() => setPhase("fade"), 2200);
    const t2 = setTimeout(() => { setPhase("done"); onDone?.(); }, 2900);

    return () => { clearInterval(prog); clearInterval(lineTimer); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`ldr ${phase === "fade" ? "ldr-out" : ""}`}>

      {/* -- Background grid -- */}
      <div className="ldr-grid" />

      {/* -- Corner accents -- */}
      <div className="ldr-corner ldr-tl" />
      <div className="ldr-corner ldr-tr" />
      <div className="ldr-corner ldr-bl" />
      <div className="ldr-corner ldr-br" />

      {/* -- Scanning line -- */}
      <div className="ldr-scan" style={{ top: `${progress}%` }} />

      {/* -- Center content -- */}
      <div className="ldr-center">

        {/* Hex frame with MD */}
        <div className="ldr-hex-wrap">
          <div className="ldr-hex-ring lhr-1" />
          <div className="ldr-hex-ring lhr-2" />
          <div className="ldr-hex-ring lhr-3" />

          {/* Orbiting dots */}
          <div className="ldr-orb-dot lod-1" />
          <div className="ldr-orb-dot lod-2" />

          {/* MD core */}
          <div className="ldr-md-core">
            <span className="ldr-md">MD</span>
          </div>
        </div>

        {/* Name below */}
        <div className="ldr-name">MUHAMMAD DANIAL</div>
        <div className="ldr-subtitle">FULL STACK &bull; AI AGENT &bull; ROBOTICS</div>

        {/* Progress bar */}
        <div className="ldr-bar-track">
          <div className="ldr-bar-fill" style={{ width: `${progress}%` }} />
          <div
            className="ldr-bar-cursor"
            style={{ left: `${progress}%` }}
          />
        </div>

        {/* Percent + status */}
        <div className="ldr-bottom">
          <span className="ldr-pct">{Math.floor(progress)}%</span>
          <span className="ldr-line">{LINES[lineIdx]}</span>
        </div>

      </div>
    </div>
  );
}
