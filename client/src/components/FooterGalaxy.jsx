// ═══════════════════════════════════════════════════
// COMPONENT: FooterGalaxy.jsx — AUTHENTIC MILKY WAY GALAXY & SHOOTING STARS
// ═══════════════════════════════════════════════════
// Inspired by real astrophotography & meteor shower time-lapses:
// 1. Diagonal Milky Way Galactic River with dense Gaussian star clusters
// 2. Luminous Galactic Core (Warm Gold, Solar White, Deep Magenta & Cyan)
// 3. Dark cosmic interstellar dust lanes (The Great Rift)
// 4. Frequent Hypersonic Shooting Stars & Bolide Fireballs with lingering ionized trails
// 5. Stardust sparks & 4-point stellar diffraction spikes
// 6. Smooth interactive parallax & 0% CPU waste via IntersectionObserver
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

    // Mouse parallax offsets
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    // ─── 1. SIZING & RESIZE OBSERVER ───
    const updateSize = () => {
      const parent = canvas.parentElement;
      const w = parent ? parent.clientWidth : window.innerWidth;
      const h = parent ? Math.max(parent.clientHeight, 650) : 750;

      if (w === width && h === height) return;
      width = w;
      height = h;

      const dpr = Math.min(window.devicePixelRatio || 1, 2.0);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      initGalaxy();
    };

    let resizeObserver = null;
    if (window.ResizeObserver && canvas.parentElement) {
      resizeObserver = new ResizeObserver(() => updateSize());
      resizeObserver.observe(canvas.parentElement);
    }
    window.addEventListener("resize", updateSize);

    // ─── 2. MOUSE LISTENER FOR CELESTIAL PARALLAX ───
    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
        targetMouseX = ((e.clientX - rect.left) / width - 0.5) * 35;
        targetMouseY = ((e.clientY - rect.top) / height - 0.5) * 25;
      }
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // ─── 3. STARFIELD & MILKY WAY STAR STREAM ───
    let stars = [];
    const STAR_COUNT = 900; // Dense Milky Way star field

    // Helper: Gaussian random around 0 (-1 to 1)
    const randGaussian = () => {
      const u = Math.random();
      const v = Math.random();
      return Math.sqrt(-2.0 * Math.log(u || 0.001)) * Math.cos(2.0 * Math.PI * v);
    };

    const initGalaxy = () => {
      stars = [];

      for (let i = 0; i < STAR_COUNT; i++) {
        // 68% of stars belong to the diagonal Milky Way galactic band
        const isMilkyWayStar = Math.random() < 0.68;
        let x, y, depth;

        if (isMilkyWayStar) {
          // Milky Way band runs diagonally from top-right to bottom-left
          const progress = Math.random(); // 0 (top-right) to 1 (bottom-left)
          const spineX = width * (0.88 - progress * 0.76);
          const spineY = height * (progress * 1.05 - 0.05);

          // Spread across galactic disk thickness (Gaussian distribution)
          const bandThickness = Math.min(width, height) * 0.22;
          const normalOffset = randGaussian() * (bandThickness * 0.42);

          // Angle perpendicular to diagonal (~45 degrees)
          x = spineX + normalOffset * Math.cos(Math.PI / 4);
          y = spineY + normalOffset * Math.sin(Math.PI / 4);
          depth = 0.5 + Math.random() * 0.9;
        } else {
          // General cosmic starfield
          x = Math.random() * width;
          y = Math.random() * height;
          depth = 0.2 + Math.random() * 0.7;
        }

        // Spectral types
        const cRand = Math.random();
        let color;
        if (cRand > 0.75) {
          color = { r: 165, g: 243, b: 252 }; // Sirius Cyan
        } else if (cRand > 0.45) {
          color = { r: 216, g: 180, b: 254 }; // Lavender Nebula
        } else if (cRand > 0.25) {
          color = { r: 254, g: 240, b: 138 }; // Warm Solar Gold
        } else if (cRand > 0.12) {
          color = { r: 244, g: 114, b: 182 }; // Rose emission star
        } else {
          color = { r: 255, g: 255, b: 255 }; // Diamond White
        }

        // Star prominence
        const isProminent = Math.random() > 0.94; // 6% bright landmark stars
        const baseRadius = isProminent
          ? 1.8 + Math.random() * 1.5
          : 0.45 + Math.random() * 0.95;

        stars.push({
          x,
          y,
          depth,
          baseRadius,
          isProminent,
          color,
          baseAlpha: 0.25 + Math.random() * 0.65,
          alpha: 0.5,
          twinkleSpeed: 0.018 + Math.random() * 0.04,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    // ─── 4. REALISTIC SHOOTING STARS & METEOR FIREBALLS ───
    const meteors = [];
    const lingeringTrails = []; // Lingering ionized vapor trails

    class Meteor {
      constructor(isFireball = false) {
        this.isFireball = isFireball;
        this.reset();
      }

      reset() {
        // Spawn from upper quadrants
        const fromTop = Math.random() > 0.3;
        if (fromTop) {
          this.x = Math.random() * (width * 0.85) + width * 0.1;
          this.y = -30;
        } else {
          this.x = width + 30;
          this.y = Math.random() * (height * 0.5);
        }

        // Diagonal downward angle (35 to 48 degrees)
        const angle = (Math.PI / 180) * (132 + (Math.random() * 16 - 8));
        this.speed = this.isFireball ? 16 + Math.random() * 7 : 20 + Math.random() * 14;
        this.vx = Math.cos(angle) * this.speed;
        this.vy = Math.sin(angle) * this.speed;

        this.length = this.isFireball ? 240 + Math.random() * 140 : 160 + Math.random() * 120;
        this.thickness = this.isFireball ? 2.8 + Math.random() * 1.6 : 1.4 + Math.random() * 1.2;
        this.colorMode = Math.random() > 0.35 ? "cyan" : "violet";

        this.life = 0;
        this.maxLife = 90;
        this.active = true;
        this.sparks = [];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life++;

        // Atmospheric ionization sparks shedding behind meteor
        const sparkRate = this.isFireball ? 0.7 : 0.4;
        if (Math.random() < sparkRate) {
          this.sparks.push({
            x: this.x + (Math.random() - 0.5) * (this.thickness * 4),
            y: this.y + (Math.random() - 0.5) * (this.thickness * 4),
            vx: -this.vx * 0.08 + (Math.random() - 0.5) * 1.2,
            vy: -this.vy * 0.08 + (Math.random() - 0.5) * 1.2,
            size: 0.8 + Math.random() * (this.isFireball ? 2.2 : 1.4),
            alpha: 1.0,
            color: this.colorMode === "cyan" ? "#a5f3fc" : "#e879f9",
            decay: 0.03 + Math.random() * 0.035,
          });
        }

        // If fireball, leave periodic lingering vapor smoke cloud
        if (this.isFireball && this.life % 4 === 0 && this.x > 0 && this.y > 0 && this.x < width && this.y < height) {
          lingeringTrails.push({
            x: this.x,
            y: this.y,
            radius: 12 + Math.random() * 16,
            alpha: 0.45,
            color: this.colorMode === "cyan" ? "rgba(103, 232, 249," : "rgba(232, 121, 249,",
            decay: 0.009 + Math.random() * 0.008,
          });
        }

        // Update sparks
        for (let i = this.sparks.length - 1; i >= 0; i--) {
          const sp = this.sparks[i];
          sp.x += sp.vx;
          sp.y += sp.vy;
          sp.alpha -= sp.decay;
          if (sp.alpha <= 0) {
            this.sparks.splice(i, 1);
          }
        }

        // Check boundary
        if (this.x < -200 || this.y > height + 200 || this.life > this.maxLife) {
          if (this.sparks.length === 0) {
            this.active = false;
          }
        }
      }

      draw() {
        // A. Draw Stardust Sparks
        for (const sp of this.sparks) {
          ctx.save();
          ctx.globalAlpha = Math.max(0, sp.alpha);
          ctx.fillStyle = sp.color;
          ctx.beginPath();
          ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        if (this.x < -200 || this.y > height + 200) return;

        // B. Blazing Comet / Meteor Trail
        const tailX = this.x - (this.vx / this.speed) * this.length;
        const tailY = this.y - (this.vy / this.speed) * this.length;

        const grad = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
        if (this.colorMode === "cyan") {
          grad.addColorStop(0, "rgba(255, 255, 255, 1)");
          grad.addColorStop(0.12, "rgba(165, 243, 252, 0.95)");
          grad.addColorStop(0.4, "rgba(34, 211, 238, 0.65)");
          grad.addColorStop(0.75, "rgba(124, 58, 237, 0.2)");
          grad.addColorStop(1, "rgba(124, 58, 237, 0)");
        } else {
          grad.addColorStop(0, "rgba(255, 255, 255, 1)");
          grad.addColorStop(0.15, "rgba(244, 114, 182, 0.95)");
          grad.addColorStop(0.45, "rgba(168, 85, 247, 0.6)");
          grad.addColorStop(0.8, "rgba(59, 130, 246, 0.18)");
          grad.addColorStop(1, "rgba(59, 130, 246, 0)");
        }

        ctx.save();
        ctx.strokeStyle = grad;
        ctx.lineWidth = this.thickness;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // C. Superheated Meteor Head Core
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.thickness * 1.25, 0, Math.PI * 2);
        ctx.fill();

        // D. Atmospheric Heat Bloom Halo
        const glowRad = this.thickness * (this.isFireball ? 9 : 6);
        const glow = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, glowRad);
        glow.addColorStop(
          0,
          this.colorMode === "cyan" ? "rgba(165, 243, 252, 0.9)" : "rgba(244, 114, 182, 0.9)"
        );
        glow.addColorStop(0.5, this.colorMode === "cyan" ? "rgba(6, 182, 212, 0.35)" : "rgba(168, 85, 247, 0.35)");
        glow.addColorStop(1, "transparent");

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(this.x, this.y, glowRad, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // Meteor Spawner Scheduler (every 1.5 to 3.2 seconds)
    let nextMeteorTime = Date.now() + 600;

    const checkSpawnMeteor = () => {
      if (Date.now() >= nextMeteorTime) {
        // 18% chance of an epic Fireball (Bolide)
        const isFireball = Math.random() < 0.18;
        meteors.push(new Meteor(isFireball));

        // 30% chance of a tandem meteor shower pair
        if (Math.random() < 0.3) {
          setTimeout(() => {
            if (isVisible) meteors.push(new Meteor(false));
          }, 250 + Math.random() * 350);
        }

        nextMeteorTime = Date.now() + 1500 + Math.random() * 1800;
      }
    };

    // ─── 5. DRAW THE MILKY WAY GALAXY ARCH & CORE ───
    let galacticTime = 0;

    const drawMilkyWay = () => {
      galacticTime += 0.003;

      // Parallax shift
      const px = mouseX * 0.35;
      const py = mouseY * 0.25;

      // A. Galactic Core Luminous Bulge (Center-Right along band)
      const coreX = width * 0.52 + px + Math.cos(galacticTime * 0.6) * 12;
      const coreY = height * 0.46 + py + Math.sin(galacticTime * 0.5) * 8;
      const coreRadius = Math.max(width * 0.38, 280);

      // Deep galactic core bloom (Golden-White to Warm Amber/Peach to Cosmic Violet)
      const coreGrad = ctx.createRadialGradient(coreX, coreY, 0, coreX, coreY, coreRadius);
      coreGrad.addColorStop(0, "rgba(255, 245, 210, 0.26)"); // Luminous galactic center
      coreGrad.addColorStop(0.25, "rgba(236, 72, 153, 0.14)"); // Pink/Rose emission nebula
      coreGrad.addColorStop(0.55, "rgba(124, 58, 237, 0.09)"); // Violet interstellar haze
      coreGrad.addColorStop(0.85, "rgba(14, 116, 144, 0.04)"); // Outer cyan halo
      coreGrad.addColorStop(1, "transparent");

      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(coreX, coreY, coreRadius, 0, Math.PI * 2);
      ctx.fill();

      // B. Diagonal Milky Way Band Glowing River
      // We draw an angled elliptical ribbon across the sky
      ctx.save();
      ctx.translate(width * 0.5 + px, height * 0.5 + py);
      ctx.rotate(-Math.PI / 4.4); // Angle of galactic plane (~40 deg)

      const bandGrad = ctx.createLinearGradient(0, -height * 0.26, 0, height * 0.26);
      bandGrad.addColorStop(0, "transparent");
      bandGrad.addColorStop(0.25, "rgba(103, 232, 249, 0.06)"); // Cyan rim
      bandGrad.addColorStop(0.48, "rgba(244, 114, 182, 0.14)"); // Warm star river
      bandGrad.addColorStop(0.52, "rgba(255, 255, 255, 0.18)"); // Central dense star cloud
      bandGrad.addColorStop(0.72, "rgba(168, 85, 247, 0.11)"); // Violet rim
      bandGrad.addColorStop(1, "transparent");

      ctx.fillStyle = bandGrad;
      ctx.fillRect(-width, -height * 0.3, width * 2, height * 0.6);

      // C. The Great Rift (Dark Cosmic Dust Filaments)
      // Subtle dark absorption lanes that split the glowing Milky Way stream
      const riftGrad = ctx.createLinearGradient(0, -18, 0, 18);
      riftGrad.addColorStop(0, "transparent");
      riftGrad.addColorStop(0.5, "rgba(5, 0, 15, 0.45)"); // Dark interstellar dust
      riftGrad.addColorStop(1, "transparent");

      ctx.fillStyle = riftGrad;
      ctx.fillRect(-width * 0.8, -18, width * 1.6, 36);

      ctx.restore();

      // D. Cyan Hydrogen-Alpha Reflection Cloud (Upper Right Corner)
      const nebCyanX = width * 0.8 + px;
      const nebCyanY = height * 0.2 + py;
      const nebCyanR = Math.max(width * 0.35, 240);
      const nebCyan = ctx.createRadialGradient(nebCyanX, nebCyanY, 0, nebCyanX, nebCyanY, nebCyanR);
      nebCyan.addColorStop(0, "rgba(6, 182, 212, 0.16)");
      nebCyan.addColorStop(0.5, "rgba(14, 116, 144, 0.06)");
      nebCyan.addColorStop(1, "transparent");
      ctx.fillStyle = nebCyan;
      ctx.beginPath();
      ctx.arc(nebCyanX, nebCyanY, nebCyanR, 0, Math.PI * 2);
      ctx.fill();

      // E. Deep Indigo Abyss (Bottom Left Corner)
      const nebIndX = width * 0.2 + px;
      const nebIndY = height * 0.8 + py;
      const nebIndR = Math.max(width * 0.4, 260);
      const nebInd = ctx.createRadialGradient(nebIndX, nebIndY, 0, nebIndX, nebIndY, nebIndR);
      nebInd.addColorStop(0, "rgba(88, 28, 135, 0.24)");
      nebInd.addColorStop(0.55, "rgba(59, 7, 100, 0.08)");
      nebInd.addColorStop(1, "transparent");
      ctx.fillStyle = nebInd;
      ctx.beginPath();
      ctx.arc(nebIndX, nebIndY, nebIndR, 0, Math.PI * 2);
      ctx.fill();
    };

    // ─── 6. MAIN 60FPS ANIMATION LOOP ───
    const render = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Step 1: Draw the Majestic Milky Way Arch & Core
      drawMilkyWay();

      // Step 2: Draw Lingering Vapor Trails from past meteors
      for (let i = lingeringTrails.length - 1; i >= 0; i--) {
        const tr = lingeringTrails[i];
        tr.alpha -= tr.decay;
        tr.radius += 0.25; // Expands as it cools in vacuum

        if (tr.alpha <= 0) {
          lingeringTrails.splice(i, 1);
          continue;
        }

        const trGlow = ctx.createRadialGradient(tr.x, tr.y, 0, tr.x, tr.y, tr.radius);
        trGlow.addColorStop(0, `${tr.color} ${tr.alpha})`);
        trGlow.addColorStop(1, "transparent");
        ctx.fillStyle = trGlow;
        ctx.beginPath();
        ctx.arc(tr.x, tr.y, tr.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Step 3: Draw Milky Way Starfield & Foreground Sparkles
      const starLen = stars.length;
      for (let i = 0; i < starLen; i++) {
        const s = stars[i];

        // Scintillation / twinkle sine wave
        s.twinklePhase += s.twinkleSpeed;
        s.alpha = s.baseAlpha + Math.sin(s.twinklePhase) * 0.32;
        s.alpha = Math.max(0.12, Math.min(0.98, s.alpha));

        // Parallax position by depth
        const sx = s.x + mouseX * s.depth;
        const sy = s.y + mouseY * s.depth;

        const { r, g, b } = s.color;

        // Core star
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${s.alpha})`;
        ctx.beginPath();
        ctx.arc(sx, sy, s.baseRadius, 0, Math.PI * 2);
        ctx.fill();

        // Bright Landmark Stars with 4-Point Optical Diffraction Spikes
        if (s.isProminent && s.alpha > 0.42) {
          const flareLen = s.baseRadius * 3.8;
          ctx.save();
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${s.alpha * 0.45})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(sx - flareLen, sy);
          ctx.lineTo(sx + flareLen, sy);
          ctx.moveTo(sx, sy - flareLen);
          ctx.lineTo(sx, sy + flareLen);
          ctx.stroke();

          // Soft stellar halo
          const halo = ctx.createRadialGradient(sx, sy, 0, sx, sy, flareLen * 0.9);
          halo.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${s.alpha * 0.5})`);
          halo.addColorStop(1, "transparent");
          ctx.fillStyle = halo;
          ctx.beginPath();
          ctx.arc(sx, sy, flareLen * 0.9, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      // Step 4: Check Meteor Spawner
      checkSpawnMeteor();

      // Step 5: Update & Render Active Shooting Stars
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.update();
        m.draw();
        if (!m.active) {
          meteors.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(render);
    };

    // ─── 7. INTERSECTION OBSERVER (0% CPU off-screen) ───
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisible = entry.isIntersecting;
      },
      { rootMargin: "250px" }
    );

    if (canvas.parentElement) {
      observer.observe(canvas.parentElement);
    } else {
      isVisible = true;
    }

    updateSize();
    animId = requestAnimationFrame(render);

    // ─── CLEANUP ───
    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("mousemove", onMouseMove);
      if (resizeObserver) resizeObserver.disconnect();
      if (animId) cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="footer-galaxy-canvas" aria-hidden="true" />;
}
