// ═══════════════════════════════════════════════════
// COMPONENT: Loader.jsx — LUXURY MINIMALIST COMMAND CENTER LOADER
// High-fashion typography, swift 1.3s duration, sleek curtain-wipe reveal
// ═══════════════════════════════════════════════════
import { useState, useEffect } from "react";

const STATUS_STAGES = [
  "INITIALIZING NEURAL RUNTIME...",
  "CALIBRATING AUTONOMOUS AGENTS...",
  "SYNCHRONIZING GALAXY VORTEX...",
  "COMMAND CENTER READY.",
];

export default function Loader({ onDone }) {
  const [phase, setPhase] = useState("show"); // "show" | "wipe" | "done"
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 1200; // Snappy 1.2s load

    const frame = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(frame);
      } else {
        // Trigger smooth upward curtain wipe
        setTimeout(() => setPhase("wipe"), 80);
        // Complete loader removal
        setTimeout(() => {
          setPhase("done");
          onDone?.();
        }, 650);
      }
    };

    const animId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animId);
  }, [onDone]);

  if (phase === "done") return null;

  // Determine stage label
  const stageIdx =
    progress < 30 ? 0 : progress < 65 ? 1 : progress < 92 ? 2 : 3;

  return (
    <div className={`lux-loader ${phase === "wipe" ? "lux-loader-wipe" : ""}`}>
      {/* Ambient center spotlight */}
      <div className="lux-ldr-spotlight" />

      {/* Subtle top HUD header */}
      <div className="lux-ldr-hud">
        <div className="lux-hud-left">
          <span className="lux-hud-dot" />
          <span className="lux-hud-tag">SYSTEM // ONLINE</span>
        </div>
        <div className="lux-hud-right">
          <span className="lux-hud-sub">AI AGENT ARCHITECTURE &bull; 2026</span>
        </div>
      </div>

      {/* Main Center Stage */}
      <div className="lux-ldr-center">
        {/* Monogram Badge */}
        <div className="lux-ldr-badge">
          <span className="lux-badge-bracket">[</span>
          <span className="lux-badge-text">MD</span>
          <span className="lux-badge-bracket">]</span>
        </div>

        {/* Brand Name matching Hero Luxury Outline */}
        <div className="lux-ldr-name-row">
          <span className="lux-fname">MUHAMMAD</span>
          <span className="lux-lname">DANIAL</span>
        </div>

        <p className="lux-ldr-subtitle">
          AI AGENTS &bull; BUSINESS AUTOMATION &bull; FULL-STACK
        </p>

        {/* Minimal Progress Track */}
        <div className="lux-ldr-bar-track">
          <div
            className="lux-ldr-bar-fill"
            style={{ width: `${progress}%` }}
          />
          <div
            className="lux-ldr-bar-glow"
            style={{ left: `${progress}%` }}
          />
        </div>

        {/* Numeric Counter & Live Status */}
        <div className="lux-ldr-status-row">
          <span className="lux-ldr-pct font-mono">
            {String(Math.floor(progress)).padStart(2, "0")}%
          </span>
          <span className="lux-ldr-status font-mono">
            {STATUS_STAGES[stageIdx]}
          </span>
        </div>
      </div>

      {/* Bottom Minimal Meta */}
      <div className="lux-ldr-footer">
        <span>GUJRAT, PK</span>
        <span>&bull;</span>
        <span>AUTONOMOUS WORKFLOWS</span>
      </div>
    </div>
  );
}
