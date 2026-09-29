// ═══════════════════════════════════════════════════════════════════
// COMPONENT: CosmicBackground.jsx — INTERACTIVE 60FPS COSMIC SYSTEM
// Features: Interactive mouse constellation network, responsive
// nebula spotlight, diamond stars, and shooting meteor showers.
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

    // Mouse Tracking for Interactive Constellation & Nebula Follower
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    };

    const onMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const onMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    // 1. Starfield Particles (Interactive density)
    const STAR_COUNT = window.innerWidth < 768 ? 140 : 260;
    const stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.4,
        baseAlpha: Math.random() * 0.7 + 0.3,
        alpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.04 + 0.015,
        color:
          Math.random() > 0.45
            ? "#ffffff"
            : Math.random() > 0.5
            ? "#38bdf8"
            : "#c084fc",
      });
    }

    // 2. Shooting Stars / Meteors
    const meteors = [];
    const spawnMeteor = () => {
      if (meteors.length < 3 && Math.random() < 0.035) {
        meteors.push({
          x: Math.random() * width * 0.85,
          y: Math.random() * height * 0.35,
          len: Math.random() * 140 + 90,
          speed: Math.random() * 10 + 14,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.22,
          opacity: 1,
          decay: Math.random() * 0.018 + 0.016,
        });
      }
    };

    let tick = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep space atmospheric base
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, "#030712");
      bgGrad.addColorStop(0.5, "#060d24");
      bgGrad.addColorStop(1, "#02040a");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Ambient Nebulae
      const neb1 = ctx.createRadialGradient(
        width * 0.18,
        height * 0.22,
        20,
        width * 0.18,
        height * 0.22,
        width * 0.42
      );
      neb1.addColorStop(0, "rgba(56, 189, 248, 0.09)");
      neb1.addColorStop(0.5, "rgba(99, 102, 241, 0.04)");
      neb1.addColorStop(1, "transparent");
      ctx.fillStyle = neb1;
      ctx.fillRect(0, 0, width, height);

      const neb2 = ctx.createRadialGradient(
        width * 0.82,
        height * 0.68,
        20,
        width * 0.82,
        height * 0.68,
        width * 0.46
      );
      neb2.addColorStop(0, "rgba(168, 85, 247, 0.08)");
      neb2.addColorStop(0.6, "rgba(59, 130, 246, 0.03)");
      neb2.addColorStop(1, "transparent");
      ctx.fillStyle = neb2;
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse interpolation
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.09;
        mouse.y += (mouse.targetY - mouse.y) * 0.09;

        // Interactive cursor glowing spotlight
        const mouseGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          240
        );
        mouseGlow.addColorStop(0, "rgba(56, 189, 248, 0.14)");
        mouseGlow.addColorStop(0.5, "rgba(168, 85, 247, 0.06)");
        mouseGlow.addColorStop(1, "transparent");
        ctx.fillStyle = mouseGlow;
        ctx.fillRect(0, 0, width, height);
      }

      tick += 0.04;

      // Update & Render Stars with movement and boundary wrap
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        // Twinkle factor
        const twinkle = Math.sin(tick * 2 + i) * 0.25;
        const currentAlpha = Math.max(0.15, Math.min(1, s.baseAlpha + twinkle));

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = currentAlpha;
        ctx.fill();

        // Interactive constellation connection to mouse
        if (mouse.active) {
          const dx = mouse.x - s.x;
          const dy = mouse.y - s.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const lineAlpha = (1 - dist / 140) * 0.45;
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Connect nearby stars near the cursor
            for (let j = i + 1; j < stars.length; j++) {
              const s2 = stars[j];
              const d2x = s.x - s2.x;
              const d2y = s.y - s2.y;
              const d2 = Math.sqrt(d2x * d2x + d2y * d2y);
              if (d2 < 85) {
                const edgeAlpha = (1 - d2 / 85) * (1 - dist / 140) * 0.35;
                ctx.beginPath();
                ctx.moveTo(s.x, s.y);
                ctx.lineTo(s2.x, s2.y);
                ctx.strokeStyle = `rgba(168, 85, 247, ${edgeAlpha})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();
              }
            }
          }
        }
      }
      ctx.globalAlpha = 1;

      // Shooting stars (Meteors)
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
        mGrad.addColorStop(0.65, `rgba(56, 189, 248, ${m.opacity * 0.7})`);
        mGrad.addColorStop(1, `rgba(255, 255, 255, ${m.opacity})`);

        ctx.strokeStyle = mGrad;
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();

        // Glowing Head
        ctx.beginPath();
        ctx.arc(m.x, m.y, 2.8, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "#38bdf8";
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
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
