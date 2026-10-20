import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [clicked, setClicked] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    // Only enable on non-touch devices with fine pointers
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
    if (isTouch) return;

    setEnabled(true);

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    // Smooth lerp loop for the outer ring follower
    const loop = () => {
      const ease = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      rafId.current = requestAnimationFrame(loop);
    };

    // Listen for hover over interactive elements
    const handleMouseOver = (e) => {
      const target = e.target.closest(
        "a, button, [role='button'], .project-card, .pillar-card, .service-card, .interactive-tag, input, textarea, select"
      );

      if (target) {
        setHovered(true);
        const customText = target.getAttribute("data-cursor-text");
        if (customText) {
          setHoverText(customText);
        } else if (target.classList.contains("project-card")) {
          setHoverText("View");
        } else {
          setHoverText("");
        }
      } else {
        setHovered(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    rafId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="media-harbour-cursor-container" aria-hidden="true">
      {/* Precision inner center dot */}
      <div
        ref={dotRef}
        className={`hmh-cursor-dot ${hovered ? "hmh-cursor-dot-hidden" : ""}`}
      />

      {/* Smooth magnetic outer follower ring */}
      <div
        ref={ringRef}
        className={`hmh-cursor-ring ${hovered ? "hmh-cursor-ring-hovered" : ""} ${
          clicked ? "hmh-cursor-ring-clicked" : ""
        } ${hoverText ? "hmh-cursor-ring-has-text" : ""}`}
      >
        {hoverText && <span className="hmh-cursor-text">{hoverText}</span>}
      </div>
    </div>
  );
}
