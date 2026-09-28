// ═══════════════════════════════════════════════════
// COMPONENT: FooterGalaxy.jsx — REALISTIC GALAXY & SHOOTING STARS
// High-Performance 60FPS Space Engine:
// 1. Multi-spectral twinkling starfield with diffraction flares
// 2. Swirling cosmic nebula dust clouds (Violet, Cyan & Magenta)
// 3. Realistic hypersonic shooting stars with glowing ionized comet tails & sparks
// 4. Zero CPU waste: Auto-pauses when off-screen via IntersectionObserver
// ═══════════════════════════════════════════════════
import { useEffect, useRef } from "react";

export default function FooterGalaxy() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = null;
    let isVisible = false;
    let width = 0;
    let height = 0;

    // ─── 1. RESIZE HANDLER (DPR capped at 1.5 for performance) ───
    const handleResize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = rect ? rect.width : window.innerWidth;
      height = rect ? rect.height : 700;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // ─── 2. STARFIELD GENERATION (220 Multi-Spectral Stars) ───
    const STAR_COUNT = Math.min(Math.floor(width * 0.18), 240);
    const stars = [];

    const createStar = () => {
      const isBright = Math.random() > 0.86; // 14% notable stars
      const colorRand = Math.random();
      let color;
      if (colorRand > 0.65) {
        color = { r: 103, g: 232, b: 249 }; // Stellar Cyan
      } else if (colorRand > 0.35) {
        color = { r: 192, g: 132, b: 252 }; // Nebula Lavender
      } else if (colorRand > 0.20) {
        color = { r: 253, g: 224, b: 71 };  // Warm Gold Star
      } else {
        color = { r: 245, g: 248, b: 255 }; // Pure White
      }

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        baseRadius: isBright ? 1.6 + Math.random() * 1.3 : 0.5 + Math.random() * 1.1,
        isBright,
        color,
        baseAlpha: 0.35 + Math.random() * 0.55,
        alpha: 0.5,
        twinkleSpeed: 0.015 + Math.random() * 0.035,
        twinklePhase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.06,
        vy: (Math.random() - 0.5) * 0.06,
      };
    };

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push(createStar());
    }

    // ─── 3. REALISTIC SHOOTING STARS (METEORS) ───
    const shootingStars = [];

    class ShootingStar {
      constructor() {
        this.reset();
      }

      reset() {
        // Spawn from upper edge or upper right
        const fromTop = Math.random() > 0.35;
        if (fromTop) {
          this.x = Math.random() * (width * 0.85) + width * 0.1;
          this.y = -20;
        } else {
          this.x = width + 20;
          this.y = Math.random() * (height * 0.5);
        }

        // Realistic celestial trajectory (diagonally down-left at ~140° angle)
        const angle = (Math.PI / 180) * (132 + (Math.random() * 18 - 9));
        this.speed = 13 + Math.random() * 11; // 13-24 px/frame
        this.vx = Math.cos(angle) * this.speed;
        this.vy = Math.sin(angle) * this.speed;
        this.length = 140 + Math.random() * 130;
        this.thickness = 1.2 + Math.random() * 1.4;
        this.colorType = Math.random() > 0.4 ? "cyan" : "violet";
        this.active = true;
        this.sparks = [];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Leave ionized sparks along the atmospheric burn path
        if (Math.random() > 0.35) {
          this.sparks.push({
            x: this.x + (Math.random() - 0.5) * 5,
            y: this.y + (Math.random() - 0.5) * 5,
            size: 0.7 + Math.random() * 1.2,
            alpha: 0.85,
            color: this.colorType === "cyan" ? "#67e8f9" : "#c084fc",
            decay: 0.035 + Math.random() * 0.035,
          });
        }

        // Decay sparks
        for (let i = this.sparks.length - 1; i >= 0; i--) {
          const sp = this.sparks[i];
          sp.alpha -= sp.decay;
          if (sp.alpha <= 0) {
            this.sparks.splice(i, 1);
          }
        }

        // Off-screen check
        if (this.x < -150 || this.y > height + 150) {
          if (this.sparks.length === 0) {
            this.active = false;
          }
        }
      }

      draw() {
        // 1. Draw trailing ionized sparks
        for (const sp of this.sparks) {
          ctx.save();
          ctx.globalAlpha = Math.max(0, sp.alpha);
          ctx.fillStyle = sp.color;
          ctx.beginPath();
          ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        if (this.x < -150 || this.y > height + 150) return;

        // 2. Draw glowing comet tail
        const tailX = this.x - (this.vx / this.speed) * this.length;
        const tailY = this.y - (this.vy / this.speed) * this.length;

        const grad = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
        if (this.colorType === "cyan") {
          grad.addColorStop(0, "rgba(255, 255, 255, 1)");
          grad.addColorStop(0.12, "rgba(103, 232, 249, 0.95)");
          grad.addColorStop(0.45, "rgba(34, 211, 238, 0.5)");
          grad.addColorStop(0.8, "rgba(168, 85, 247, 0.15)");
          grad.addColorStop(1, "rgba(168, 85, 247, 0)");
        } else {
          grad.addColorStop(0, "rgba(255, 255, 255, 1)");
          grad.addColorStop(0.15, "rgba(192, 132, 252, 0.95)");
          grad.addColorStop(0.5, "rgba(168, 85, 247, 0.45)");
          grad.addColorStop(0.82, "rgba(103, 232, 249, 0.12)");
          grad.addColorStop(1, "rgba(103, 232, 249, 0)");
        }

        ctx.save();
        ctx.strokeStyle = grad;
        ctx.lineWidth = this.thickness;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // 3. Radiant meteor head
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.thickness * 1.15, 0, Math.PI * 2);
        ctx.fill();

        // 4. Head bloom halo
        const haloRad = this.thickness * 5;
        const halo = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, haloRad);
        halo.addColorStop(0, this.colorType === "cyan" ? "rgba(103, 232, 249, 0.75)" : "rgba(192, 132, 252, 0.75)");
        halo.addColorStop(1, "transparent");
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(this.x, this.y, haloRad, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // Spawn timer for meteors
    let nextMeteorSpawn = Date.now() + 800; // First meteor shoots quickly

    const spawnMeteor = () => {
      shootingStars.push(new ShootingStar());

      // 25% chance of a twin meteor shower pair
      if (Math.random() > 0.75) {
        setTimeout(() => {
          if (isVisible) {
            shootingStars.push(new ShootingStar());
          }
        }, 350 + Math.random() * 400);
      }

      // Schedule next meteor (every 2.2 to 4.2 seconds)
      nextMeteorSpawn = Date.now() + 2200 + Math.random() * 2000;
    };

    // ─── 4. GALAXY NEBULA SWIRL (Organic Oscillating Gas Clouds) ───
    let time = 0;

    const drawNebula = () => {
      time += 0.004;

      // Cloud 1: Deep Galactic Violet / Indigo (left-center cluster)
      const cx1 = width * 0.25 + Math.cos(time * 0.8) * (width * 0.08);
      const cy1 = height * 0.65 + Math.sin(time * 0.6) * (height * 0.06);
      const r1 = Math.max(width * 0.45, 320);

      const neb1 = ctx.createRadialGradient(cx1, cy1, 0, cx1, cy1, r1);
      neb1.addColorStop(0, "rgba(88, 28, 135, 0.28)");
      neb1.addColorStop(0.45, "rgba(124, 58, 237, 0.12)");
      neb1.addColorStop(0.75, "rgba(59, 7, 100, 0.04)");
      neb1.addColorStop(1, "transparent");

      ctx.fillStyle = neb1;
      ctx.beginPath();
      ctx.arc(cx1, cy1, r1, 0, Math.PI * 2);
      ctx.fill();

      // Cloud 2: Stellar Cyan / Teal Rift (top-right cluster)
      const cx2 = width * 0.78 + Math.sin(time * 0.7) * (width * 0.06);
      const cy2 = height * 0.35 + Math.cos(time * 0.9) * (height * 0.05);
      const r2 = Math.max(width * 0.4, 280);

      const neb2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, r2);
      neb2.addColorStop(0, "rgba(6, 182, 212, 0.18)");
      neb2.addColorStop(0.4, "rgba(14, 116, 144, 0.08)");
      neb2.addColorStop(0.8, "rgba(2, 44, 58, 0.02)");
      neb2.addColorStop(1, "transparent");

      ctx.fillStyle = neb2;
      ctx.beginPath();
      ctx.arc(cx2, cy2, r2, 0, Math.PI * 2);
      ctx.fill();

      // Cloud 3: Celestial Magenta Core (central soft breathing halo)
      const cx3 = width * 0.5 + Math.sin(time * 0.5) * (width * 0.05);
      const cy3 = height * 0.5 + Math.cos(time * 0.5) * (height * 0.05);
      const r3 = Math.max(width * 0.35, 240);

      const neb3 = ctx.createRadialGradient(cx3, cy3, 0, cx3, cy3, r3);
      neb3.addColorStop(0, "rgba(168, 85, 247, 0.12)");
      neb3.addColorStop(0.5, "rgba(112, 26, 117, 0.05)");
      neb3.addColorStop(1, "transparent");

      ctx.fillStyle = neb3;
      ctx.beginPath();
      ctx.arc(cx3, cy3, r3, 0, Math.PI * 2);
      ctx.fill();
    };

    // ─── 5. MAIN RENDER LOOP ───
    const render = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // A. Draw Drifting Nebula Clouds
      drawNebula();

      // B. Update & Draw Background Stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.twinklePhase += s.twinkleSpeed;
        s.alpha = s.baseAlpha + Math.sin(s.twinklePhase) * 0.35;
        s.alpha = Math.max(0.12, Math.min(0.95, s.alpha));

        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        const { r, g, b } = s.color;

        // Core star point
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${s.alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.baseRadius, 0, Math.PI * 2);
        ctx.fill();

        // Bright star optical bloom & 4-point diffraction cross
        if (s.isBright && s.alpha > 0.45) {
          const glowRad = s.baseRadius * 3.5;
          const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, glowRad);
          glow.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${s.alpha * 0.4})`);
          glow.addColorStop(1, "transparent");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(s.x, s.y, glowRad, 0, Math.PI * 2);
          ctx.fill();

          // Delicate 4-point cross diffraction spike
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${s.alpha * 0.28})`;
          ctx.lineWidth = 0.6;
          const flareLen = s.baseRadius * 3.2;
          ctx.beginPath();
          ctx.moveTo(s.x - flareLen, s.y);
          ctx.lineTo(s.x + flareLen, s.y);
          ctx.moveTo(s.x, s.y - flareLen);
          ctx.lineTo(s.x, s.y + flareLen);
          ctx.stroke();
        }
      }

      // C. Check Shooting Star Spawner
      if (Date.now() >= nextMeteorSpawn) {
        spawnMeteor();
      }

      // D. Update & Draw Active Meteors
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ms = shootingStars[i];
        ms.update();
        ms.draw();
        if (!ms.active) {
          shootingStars.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(render);
    };

    // ─── 6. INTERSECTION OBSERVER (0% CPU off-screen) ───
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisible = entry.isIntersecting;
      },
      { rootMargin: "200px" }
    );

    if (canvas.parentElement) {
      observer.observe(canvas.parentElement);
    } else {
      isVisible = true;
    }

    animId = requestAnimationFrame(render);

    // ─── CLEANUP ───
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animId) cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="footer-galaxy-canvas" aria-hidden="true" />;
}
