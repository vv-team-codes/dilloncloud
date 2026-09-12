import { useEffect, useRef } from "react";

/**
 * Reading-progress indicator.
 * Writes straight to the DOM (no React state) so scrolling never re-renders the
 * tree, and animates transform only so the compositor does the work on mobile.
 */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const bar = barRef.current;
    const wrap = wrapRef.current;
    if (!bar || !wrap) return;

    let frame = 0;
    let lastAnnounced = -1;

    const measure = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      bar.style.setProperty("--scroll-progress", String(value));

      // Announce in coarse steps so assistive tech isn't flooded.
      const rounded = Math.round(value * 10) * 10;
      if (rounded !== lastAnnounced) {
        lastAnnounced = rounded;
        wrap.setAttribute("aria-valuenow", String(rounded));
        wrap.setAttribute("aria-valuetext", `${rounded}% of the page read`);
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={0}
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5"
    >
      <div ref={barRef} className="scroll-progress-bar h-full bg-electric" />
    </div>
  );
}
