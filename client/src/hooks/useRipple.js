// ------------------------------------
// HOOK: useRipple.js
// Click / touch ripple effect
// Purple + Cyan + Pink bursts
// ------------------------------------
import { useEffect } from "react";

export default function useRipple() {
  useEffect(() => {
    // -- Cursor elements --
    const dot  = Object.assign(document.createElement("div"), { className: "cursor-dot" });
    const ring = Object.assign(document.createElement("div"), { className: "cursor-ring" });
    document.body.append(dot, ring);

    const moveCursor = (e) => {
      dot.style.left  = ring.style.left  = e.clientX + "px";
      dot.style.top   = ring.style.top   = e.clientY + "px";
    };
    const downCursor = () => { dot.classList.add("clicked"); ring.classList.add("clicked"); };
    const upCursor   = () => { dot.classList.remove("clicked"); ring.classList.remove("clicked"); };
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", downCursor);
    document.addEventListener("mouseup",   upCursor);

    // -- Ripple creator --
    const colors = ["#9d00ff", "#00f5ff", "#ff00cc"];
    function createRipple(x, y) {
      const root = document.getElementById("ripple-root");
      if (!root) return;

      // Three staggered rings
      colors.forEach((color, i) => {
        const r = document.createElement("div");
        r.className = "ripple";
        r.style.cssText = `left:${x}px;top:${y}px;border-color:${color};animation-delay:${i*0.12}s`;
        root.appendChild(r);
        setTimeout(() => r.remove(), 1400);
      });

      // Burst particles
      for (let i = 0; i < 14; i++) {
        const b = document.createElement("div");
        b.className = "burst-dot";
        const angle = (i / 14) * Math.PI * 2;
        const dist  = 55 + Math.random() * 45;
        b.style.cssText = `
          left:${x}px; top:${y}px;
          background:${colors[i % 3]};
          box-shadow:0 0 8px ${colors[i%3]};
          --bx:${Math.cos(angle)*dist}px;
          --by:${Math.sin(angle)*dist}px;
          animation-delay:${Math.random()*0.15}s;
        `;
        root.appendChild(b);
        setTimeout(() => b.remove(), 900);
      }

      // Central flash
      const flash = document.createElement("div");
      flash.style.cssText = `
        position:absolute; left:${x}px; top:${y}px;
        width:16px; height:16px; border-radius:50%;
        background:radial-gradient(circle,rgba(157,0,255,1),transparent);
        transform:translate(-50%,-50%) scale(0);
        animation:flashPop 0.4s ease-out forwards;
        pointer-events:none;
      `;
      root.appendChild(flash);
      setTimeout(() => flash.remove(), 500);
    }

    // Inject flash keyframe
    const style = document.createElement("style");
    style.textContent = `@keyframes flashPop{0%{transform:translate(-50%,-50%)scale(0);opacity:1}100%{transform:translate(-50%,-50%)scale(6);opacity:0}}`;
    document.head.appendChild(style);

    const onClick      = (e) => createRipple(e.clientX, e.clientY);
    const onTouchStart = (e) => Array.from(e.touches).forEach(t => createRipple(t.clientX, t.clientY));
    document.addEventListener("click",      onClick);
    document.addEventListener("touchstart", onTouchStart, { passive: true });

    return () => {
      dot.remove(); ring.remove(); style.remove();
      document.removeEventListener("mousemove",   moveCursor);
      document.removeEventListener("mousedown",   downCursor);
      document.removeEventListener("mouseup",     upCursor);
      document.removeEventListener("click",       onClick);
      document.removeEventListener("touchstart",  onTouchStart);
    };
  }, []);
}
