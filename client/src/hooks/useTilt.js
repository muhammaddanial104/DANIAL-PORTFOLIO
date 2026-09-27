// ═══════════════════════════════════════════════════
// HOOK: useTilt.js — 3D PERSPECTIVE CARD TILT & SPECULAR SHEEN
// Inspired by Awwwards luxury developer portfolios
// ═══════════════════════════════════════════════════
import { useEffect } from "react";

export default function useTilt() {
  useEffect(() => {
    // Only run on desktop with pointer precision
    if (window.innerWidth < 1024 || window.matchMedia("(pointer: coarse)").matches) return;

    const cards = document.querySelectorAll(".nova-flagship-card, .project-card, .about-exp-box, .about-focus-box, .fact-card");

    cards.forEach(card => {
      let bounds;

      const onMouseEnter = () => {
        // Only tilt if the card is visible/revealed by GSAP
        if (document.body.classList.contains("gsap-ready") && !card.classList.contains("gsap-revealed")) {
          return;
        }
        bounds = card.getBoundingClientRect();
        card.style.transition = "transform 0.15s ease-out, box-shadow 0.25s ease-out, border-color 0.25s ease-out";
      };

      const onMouseMove = e => {
        if (!bounds) bounds = card.getBoundingClientRect();
        const mouseX = e.clientX - bounds.left;
        const mouseY = e.clientY - bounds.top;

        const xPct = mouseX / bounds.width - 0.5;
        const yPct = mouseY / bounds.height - 0.5;

        const rotX = -yPct * 10; // max 5 deg tilt
        const rotY = xPct * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.012, 1.012, 1.012)`;
      };

      const onMouseLeave = () => {
        card.style.transition = "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease-out, border-color 0.5s ease-out";
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      };

      card.addEventListener("mouseenter", onMouseEnter);
      card.addEventListener("mousemove", onMouseMove);
      card.addEventListener("mouseleave", onMouseLeave);

      card._cleanupTilt = () => {
        card.removeEventListener("mouseenter", onMouseEnter);
        card.removeEventListener("mousemove", onMouseMove);
        card.removeEventListener("mouseleave", onMouseLeave);
      };
    });

    return () => {
      cards.forEach(card => card._cleanupTilt?.());
    };
  });
}
