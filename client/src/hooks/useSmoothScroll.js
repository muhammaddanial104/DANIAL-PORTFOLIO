// ═══════════════════════════════════════════════════
// HOOK: useSmoothScroll.js — LENIS INERTIA MOMENTUM SCROLL
// ═══════════════════════════════════════════════════
import { useEffect } from "react";
import Lenis from "lenis";

export default function useSmoothScroll() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches;

    // On mobile devices, native hardware-accelerated touch scroll runs at 60/120fps without JS latency
    if (isMobile) {
      const handleAnchorClick = e => {
        const target = e.target.closest("a[href^='#'], button[data-scroll-to]");
        if (target) {
          const href = target.getAttribute("href") || target.getAttribute("data-scroll-to");
          if (href && href.startsWith("#")) {
            const el = document.querySelector(href);
            if (el) {
              e.preventDefault();
              el.scrollIntoView({ behavior: "smooth" });
            }
          }
        }
      };
      document.addEventListener("click", handleAnchorClick);
      return () => document.removeEventListener("click", handleAnchorClick);
    }

    const lenis = new Lenis({
      duration: 1.25,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.95,
    });

    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Smooth anchor link click handling
    const handleAnchorClick = e => {
      const target = e.target.closest("a[href^='#'], button[data-scroll-to]");
      if (target) {
        const href = target.getAttribute("href") || target.getAttribute("data-scroll-to");
        if (href && href.startsWith("#")) {
          const el = document.querySelector(href);
          if (el) {
            e.preventDefault();
            lenis.scrollTo(el, { offset: -60, duration: 1.4 });
          }
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);
}
