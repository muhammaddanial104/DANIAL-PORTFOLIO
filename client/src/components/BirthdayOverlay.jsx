// ═══════════════════════════════════════════════════
// COMPONENT: BirthdayOverlay.jsx — SPECIAL CELEBRATION PROTOCOL
// Active on September 15, 2026 until 12:00 AM Midnight.
// Ultra-smooth physics, fireworks bursts, and cinematic transitions.
// ═══════════════════════════════════════════════════
import { useEffect, useRef, useState } from "react";

const EXPIRY_TIME = new Date(2026, 8, 15, 23, 59, 59, 999).getTime();

export default function BirthdayOverlay({ onDone }) {
  const [fading, setFading] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");
  const canvasRef = useRef(null);

  // Auto-dismiss and real-time countdown timer
  useEffect(() => {
    if (Date.now() > EXPIRY_TIME) {
      onDone?.();
      return;
    }

    const updateCountdown = () => {
      const now = Date.now();
      const diff = EXPIRY_TIME - now;
      if (diff <= 0) {
        handleDismiss();
      } else {
        const hrs = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
        const mins = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
        const secs = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, "0");
        setTimeLeft(`${hrs}:${mins}:${secs}`);
      }
    };
    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);

    // Auto-advance after 7.5 seconds
    const autoAdvanceTimer = setTimeout(() => {
      handleDismiss();
    }, 7500);

    return () => {
      clearInterval(timerInterval);
      clearTimeout(autoAdvanceTimer);
    };
  }, []);

  // Enhanced Physics Canvas: Fireworks Bursts + Falling Cyber Confetti
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const COLORS = [
      "#10b981", "#22d3ee", "#a855f7", "#ec4899",
      "#f59e0b", "#34d399", "#60a5fa", "#f43f5e"
    ];

    // Falling Confetti Ribbons
    class Confetti {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -20;
        this.size = Math.random() * 7 + 4;
        this.speedY = Math.random() * 2 + 1.2;
        this.speedX = (Math.random() - 0.5) * 1.8;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.rotation = Math.random() * 360;
        this.rotSpeed = (Math.random() - 0.5) * 5;
        this.opacity = Math.random() * 0.4 + 0.6;
      }
      update() {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.y * 0.02) * 0.8;
        this.rotation += this.rotSpeed;
        if (this.y > canvas.height + 25) this.reset();
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 0.7);
        ctx.restore();
      }
    }

    // Festive Firework Spark Particle
    class Spark {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 1.5;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.color = color;
        this.alpha = 1;
        this.decay = Math.random() * 0.018 + 0.012;
        this.size = Math.random() * 3.5 + 1.5;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.06; // gravity
        this.alpha -= this.decay;
      }
      draw() {
        if (this.alpha <= 0) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const confettis = Array.from({ length: 60 }, () => {
      const c = new Confetti();
      c.y = Math.random() * canvas.height;
      return c;
    });

    let sparks = [];

    // Trigger celebratory firework bursts
    const launchFireworks = () => {
      const bursts = [
        { x: canvas.width * 0.22, y: canvas.height * 0.32, color: "#10b981" },
        { x: canvas.width * 0.78, y: canvas.height * 0.28, color: "#22d3ee" },
        { x: canvas.width * 0.50, y: canvas.height * 0.20, color: "#a855f7" },
        { x: canvas.width * 0.35, y: canvas.height * 0.42, color: "#f59e0b" },
        { x: canvas.width * 0.65, y: canvas.height * 0.38, color: "#ec4899" }
      ];

      bursts.forEach((b, i) => {
        setTimeout(() => {
          for (let k = 0; k < 38; k++) {
            sparks.push(new Spark(b.x, b.y, b.color));
          }
        }, i * 350);
      });
    };

    launchFireworks();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update confetti
      confettis.forEach(c => {
        c.update();
        c.draw();
      });

      // Draw and update firework sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.update();
        s.draw();
        if (s.alpha <= 0) sparks.splice(i, 1);
      }

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleDismiss = () => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      onDone?.();
    }, 650);
  };

  return (
    <div className={`bday-backdrop ${fading ? "bday-backdrop-out" : ""}`}>
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="bday-canvas" />

      {/* Cyber Circuit Grid Background with Ambient Pulsing Glow */}
      <div className="bday-grid-bg" />
      <div className="bday-ambient-glow-1" />
      <div className="bday-ambient-glow-2" />

      {/* Floating Main Celebration Card */}
      <div className={`bday-card ${fading ? "bday-card-out" : ""}`}>
        
        {/* Animated Corner Brackets */}
        <div className="bday-corner bday-c-tl" />
        <div className="bday-corner bday-c-tr" />
        <div className="bday-corner bday-c-bl" />
        <div className="bday-corner bday-c-br" />

        {/* Milestone Pill with Glowing Pulse */}
        <div className="bday-milestone-pill">
          <span className="bday-icon">🦾</span>
          <span className="bday-pill-text">MILESTONE UNLOCKED: ROBOTICS JOURNEY BEGINS</span>
          <span className="bday-icon">🚀</span>
        </div>

        {/* Shimmering Animated Neon Headline */}
        <h1 className="bday-title">
          HAPPY BIRTHDAY, DANIAL! 🎂🎉
        </h1>

        {/* Heartfelt Wish */}
        <p className="bday-wish-text">
          May this special day bring you boundless happiness, continuous growth, and immense success. 
          Here&apos;s to another remarkable year of mastering autonomous AI, writing exceptional code, and making bold dreams a reality! ✨
        </p>

        {/* Robotics Milestone Quote Box with Circuit Glow */}
        <div className="bday-quote-box">
          <div className="bday-quote-heading">
            <span className="bday-star-sparkle">🌟</span>
            <span>&ldquo;Best of luck on your next journey — The Robotics Journey Officially Begins!&rdquo;</span>
            <span className="bday-star-sparkle">🌟</span>
          </div>
          <p className="bday-quote-sub">
            Bridging autonomous software intelligence with cutting-edge robotics and hardware engineering.
          </p>
        </div>

        {/* Interactive Staggered Tech Pillars */}
        <div className="bday-pillars-row">
          <span className="bday-pillar-tag bday-tag-purple" style={{ animationDelay: "0.4s" }}>🤖 Autonomous AI</span>
          <span className="bday-pillar-tag bday-tag-blue" style={{ animationDelay: "0.5s" }}>💻 Software Engineering</span>
          <span className="bday-pillar-tag bday-tag-cyan" style={{ animationDelay: "0.6s" }}>🛡️ Cyber Defense</span>
          <span className="bday-pillar-tag bday-tag-green" style={{ animationDelay: "0.7s" }}>🦾 Robotics Era</span>
        </div>

        {/* Midnight Expiry Countdown with Pulsing Aura */}
        {timeLeft && (
          <div className="bday-timer-pill">
            <span className="bday-timer-dot" />
            <span className="bday-timer-label">CELEBRATION WINDOW CLOSES AT 12:00 AM MIDNIGHT:</span>
            <span className="bday-timer-val">{timeLeft}</span>
          </div>
        )}

        {/* Action Button with Breathing Pulse Glow */}
        <div className="bday-btn-row">
          <button className="bday-enter-btn" onClick={handleDismiss}>
            <span className="bday-btn-shimmer" />
            ENTER PORTFOLIO &#8594;
          </button>
          <span className="bday-auto-note">(Or auto-advances in 7s)</span>
        </div>
      </div>
    </div>
  );
}
