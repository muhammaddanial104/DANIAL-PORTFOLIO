// ═══════════════════════════════════════════════════
// COMPONENT: BirthdayOverlay.jsx — SPECIAL CELEBRATION PROTOCOL
// Active on September 15, 2026 until 12:00 AM Midnight.
// Automatically self-destructs and never renders after midnight.
// ═══════════════════════════════════════════════════
import { useEffect, useRef, useState } from "react";

const EXPIRY_TIME = new Date(2026, 8, 15, 23, 59, 59, 999).getTime();

export default function BirthdayOverlay({ onDone }) {
  const [fading, setFading] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");
  const canvasRef = useRef(null);

  // Auto-dismiss or time-out check
  useEffect(() => {
    // Check if already expired
    if (Date.now() > EXPIRY_TIME) {
      onDone?.();
      return;
    }

    // Countdown update every second
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

    // Auto-advance after 6.5 seconds so visitor isn't blocked forever
    const autoAdvanceTimer = setTimeout(() => {
      handleDismiss();
    }, 6500);

    return () => {
      clearInterval(timerInterval);
      clearTimeout(autoAdvanceTimer);
    };
  }, []);

  // Confetti Particle Simulation
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

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -20;
        this.size = Math.random() * 7 + 4;
        this.speedY = Math.random() * 2.2 + 1.2;
        this.speedX = (Math.random() - 0.5) * 2;
        this.color = ["#10b981", "#22d3ee", "#a855f7", "#ec4899", "#f59e0b", "#34d399", "#60a5fa"][
          Math.floor(Math.random() * 7)
        ];
        this.rotation = Math.random() * 360;
        this.rotSpeed = (Math.random() - 0.5) * 6;
      }
      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotSpeed;
        if (this.y > canvas.height + 25) this.reset();
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 0.7);
        ctx.restore();
      }
    }

    const particles = Array.from({ length: 65 }, () => {
      const p = new Particle();
      p.y = Math.random() * canvas.height;
      return p;
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
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
    }, 550);
  };

  return (
    <div className={`bday-backdrop ${fading ? "bday-backdrop-out" : ""}`}>
      {/* Canvas for Confetti */}
      <canvas ref={canvasRef} className="bday-canvas" />

      {/* Cyber Circuit Grid Background */}
      <div className="bday-grid-bg" />

      {/* Main Glassmorphism Celebration Card */}
      <div className={`bday-card ${fading ? "bday-card-out" : ""}`}>
        
        {/* Milestone Pill */}
        <div className="bday-milestone-pill">
          <span className="bday-icon">🦾</span>
          <span className="bday-pill-text">MILESTONE UNLOCKED: ROBOTICS JOURNEY BEGINS</span>
          <span className="bday-icon">🚀</span>
        </div>

        {/* Glowing Headline */}
        <h1 className="bday-title">
          HAPPY BIRTHDAY, DANIAL! 🎂🎉
        </h1>

        {/* Pyaari Wish */}
        <p className="bday-wish-text">
          May this special day bring you boundless happiness, continuous growth, and immense success. 
          Here&apos;s to another remarkable year of mastering autonomous AI, writing exceptional code, and making bold dreams a reality! ✨
        </p>

        {/* Official Robotics Milestone Quote Box */}
        <div className="bday-quote-box">
          <div className="bday-quote-heading">
            <span>🌟</span> &ldquo;Best of luck on your next journey — The Robotics Journey Officially Begins!&rdquo; <span>🌟</span>
          </div>
          <p className="bday-quote-sub">
            Bridging autonomous software intelligence with cutting-edge robotics and hardware engineering.
          </p>
        </div>

        {/* Tech Pillars */}
        <div className="bday-pillars-row">
          <span className="bday-pillar-tag bday-tag-purple">🤖 Autonomous AI</span>
          <span className="bday-pillar-tag bday-tag-blue">💻 Software Engineering</span>
          <span className="bday-pillar-tag bday-tag-cyan">🛡️ Cyber Defense</span>
          <span className="bday-pillar-tag bday-tag-green">🦾 Robotics Era</span>
        </div>

        {/* Midnight Expiry Countdown */}
        {timeLeft && (
          <div className="bday-timer-pill">
            <span className="bday-timer-label">CELEBRATION WINDOW CLOSES AT 12:00 AM MIDNIGHT:</span>
            <span className="bday-timer-val">{timeLeft}</span>
          </div>
        )}

        {/* Action Button */}
        <div className="bday-btn-row">
          <button className="bday-enter-btn" onClick={handleDismiss}>
            ENTER PORTFOLIO &#8594;
          </button>
          <span className="bday-auto-note">(Or auto-advances in 5s)</span>
        </div>
      </div>
    </div>
  );
}
