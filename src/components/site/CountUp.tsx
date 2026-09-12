import { useEffect, useRef, useState } from "react";

/**
 * Animates the numeric part of a value string (e.g. "99.9%", "24/7", "150+")
 * once it scrolls into view. Non-numeric characters are preserved verbatim.
 */
export function CountUp({ value, duration = 1600 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const match = value.match(/^(\D*)([\d.,]+)(.*)$/);
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!match || reduced || typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return;
    }

    const prefix = match[1] ?? "";
    const numeric = match[2] ?? "";
    const suffix = match[3] ?? "";
    const target = Number(numeric.replace(/,/g, ""));
    if (!Number.isFinite(target)) {
      setDisplay(value);
      return;
    }
    const decimals = numeric.split(".")[1]?.length ?? 0;
    const grouped = numeric.includes(",");


    let frame = 0;
    const format = (n: number) => {
      const fixed = n.toFixed(decimals);
      const out = grouped ? Number(fixed).toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }) : fixed;
      return `${prefix}${out}${suffix}`;
    };

    setDisplay(format(0));

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(format(target * eased));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            run();
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} aria-label={value}>
      {display}
    </span>
  );
}
