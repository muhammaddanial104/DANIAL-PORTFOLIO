// ═══════════════════════════════════════════════════════════════════
// COMPONENT: CosmicBackground.jsx — 60FPS DEEP SPACE CANVAS
// Features: Twinkling diamond starfield, soft nebula clouds,
// shooting stars with sparks, and zero lag/stutter.
// ═══════════════════════════════════════════════════════════════════
import { useEffect, useRef } from "react";

export default function CosmicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    // 1. Starfield (300 stars with subtle twinkle)
    const STAR_COUNT = window.innerWidth < 768 ? 160 : 320;
    const stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.02 + 0.005,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        color: Math.random() > 0.4 ? "#ffffff" : Math.random() > 0.5 ? "#7dd3fc" : "#c4b5fd",
      });
    }

    // 2. Shooting Stars
    const meteors = [];
    const spawnMeteor = () => {
      if (meteors.length < 2 && Math.random() < 0.03) {
        meteors.push({
          x: Math.random() * width * 0.8,
          y: Math.random() * height * 0.4,
          len: Math.random() * 120 + 80,
          speed: Math.random() * 8 + 12,
          angle: (Math.PI / 4) + (Math.random() - 0.5) * 0.2,
          opacity: 1,
          decay: Math.random() * 0.015 + 0.015,
        });
      }
    };

    let tick = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep space base gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, "#030712");
      bgGrad.addColorStop(0.5, "#050b1d");
      bgGrad.addColorStop(1, "#02040a");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Soft Celestial Nebulae
      const neb1 = ctx.createRadialGradient(width * 0.2, height * 0.25, 10, width * 0.2, height * 0.25, width * 0.4);
      neb1.addColorStop(0, "rgba(56, 189, 248, 0.08)");
      neb1.addColorStop(0.5, "rgba(99, 102, 241, 0.04)");
      neb1.addColorStop(1, "transparent");
      ctx.fillStyle = neb1;
      ctx.fillRect(0, 0, width, height);

      const neb2 = ctx.createRadialGradient(width * 0.8, height * 0.65, 10, width * 0.8, height * 0.65, width * 0.45);
      neb2.addColorStop(0, "rgba(168, 85, 247, 0.07)");
      neb2.addColorStop(0.6, "rgba(59, 130, 246, 0.03)");
      neb2.addColorStop(1, "transparent");
      ctx.fillStyle = neb2;
      ctx.fillRect(0, 0, width, height);

      // Render Stars with twinkling
      tick += 0.05;
      stars.forEach((s) => {
        s.alpha += Math.sin(tick * s.twinkleSpeed) * 0.01;
        const currentAlpha = Math.max(0.15, Math.min(1, s.alpha));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = currentAlpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // Shooting stars
      spawnMeteor();
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.opacity -= m.decay;

        if (m.opacity <= 0 || m.x > width || m.y > height) {
          meteors.splice(i, 1);
          continue;
        }

        const tailX = m.x - Math.cos(m.angle) * m.len;
        const tailY = m.y - Math.sin(m.angle) * m.len;

        const mGrad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        mGrad.addColorStop(0, "transparent");
        mGrad.addColorStop(0.7, "rgba(56, 189, 248, " + (m.opacity * 0.6) + ")");
        mGrad.addColorStop(1, "rgba(255, 255, 255, " + m.opacity + ")");

        ctx.strokeStyle = mGrad;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();

        // Glowing Head
        ctx.beginPath();
        ctx.arc(m.x, m.y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "#38bdf8";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
