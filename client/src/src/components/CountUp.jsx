import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export default function CountUp({ end, suffix = "", duration = 1.8 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const endValue = parseInt(end, 10) || 0;
    if (endValue === 0) {
      setCount(0);
      return;
    }

    const totalSteps = 45;
    const stepTime = (duration * 1000) / totalSteps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Easing out cubic
      const progress = step / totalSteps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(easeOut * endValue);

      setCount(current);

      if (step >= totalSteps) {
        clearInterval(timer);
        setCount(endValue);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
