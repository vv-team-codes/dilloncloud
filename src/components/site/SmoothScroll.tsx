import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopPointer = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 1024px)");

    if (reducedMotion.matches || !desktopPointer.matches) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    void Promise.all([import("lenis"), import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: Lenis }, { gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;

        gsap.registerPlugin(ScrollTrigger);
        const lenis = new Lenis({
          duration: 1.05,
          smoothWheel: true,
          wheelMultiplier: 0.85,
          touchMultiplier: 1,
        });

        const onScroll = () => ScrollTrigger.update();
        const update = (time: number) => lenis.raf(time * 1000);

        lenis.on("scroll", onScroll);
        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);

        cleanup = () => {
          gsap.ticker.remove(update);
          lenis.off("scroll", onScroll);
          lenis.destroy();
        };
      },
    );

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return null;
}