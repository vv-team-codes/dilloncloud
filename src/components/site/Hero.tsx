import { useEffect, useRef } from "react";

import heroImage from "@/assets/hero-dubai-infrastructure.jpg";
import { CountUp } from "@/components/site/CountUp";
import { Cta } from "@/components/site/Cta";
import { brand, stats } from "@/lib/site-content";

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);

        const media = gsap.matchMedia();
        const context = gsap.context(() => {
          media.add("(prefers-reduced-motion: no-preference)", () => {
            const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
            timeline
              .fromTo("[data-hero-media]", { clipPath: "inset(0 0 100% 0)", scale: 1.08 }, { clipPath: "inset(0 0 0% 0)", scale: 1, duration: 1.45, ease: "power4.inOut" })
              .from("[data-hero-eyebrow]", { y: 18, opacity: 0, duration: 0.65 }, 0.55)
              .from("[data-hero-line]", { yPercent: 115, rotate: 1.5, duration: 1.05, stagger: 0.12 }, 0.62)
              .from("[data-hero-copy]", { y: 24, opacity: 0, duration: 0.75, stagger: 0.1 }, 1.05)
              .from("[data-hero-stat]", { y: 20, opacity: 0, duration: 0.7, stagger: 0.08 }, 1.22)
              .from("[data-scroll-cue]", { opacity: 0, y: -8, duration: 0.6 }, 1.55);
          });

          media.add("(prefers-reduced-motion: no-preference) and (hover: hover) and (min-width: 1024px)", () => {
            gsap.timeline({
              scrollTrigger: { trigger: node, start: "top top", end: "bottom top", scrub: 0.65 },
            })
              .to("[data-hero-image]", { yPercent: 12, scale: 1.1, ease: "none" }, 0)
              .to("[data-hero-content]", { yPercent: 10, opacity: 0, ease: "none" }, 0)
              .to("[data-hero-grid]", { yPercent: -12, opacity: 0.05, ease: "none" }, 0);

            const imageDepth = node.querySelector<HTMLElement>("[data-hero-depth-image]");
            const gridDepth = node.querySelector<HTMLElement>("[data-hero-depth-grid]");
            const scanDepth = node.querySelector<HTMLElement>("[data-hero-depth-scan]");
            if (!imageDepth || !gridDepth || !scanDepth) return;

            const imageX = gsap.quickTo(imageDepth, "x", { duration: 0.8, ease: "power3.out" });
            const imageY = gsap.quickTo(imageDepth, "y", { duration: 0.8, ease: "power3.out" });
            const gridX = gsap.quickTo(gridDepth, "x", { duration: 1, ease: "power3.out" });
            const gridY = gsap.quickTo(gridDepth, "y", { duration: 1, ease: "power3.out" });
            const scanX = gsap.quickTo(scanDepth, "x", { duration: 0.65, ease: "power3.out" });

            const move = (event: PointerEvent) => {
              const rect = node.getBoundingClientRect();
              const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
              const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
              imageX(x * 14);
              imageY(y * 9);
              gridX(x * -22);
              gridY(y * -14);
              scanX(x * 9);
            };
            const reset = () => {
              imageX(0);
              imageY(0);
              gridX(0);
              gridY(0);
              scanX(0);
            };

            node.addEventListener("pointermove", move, { passive: true });
            node.addEventListener("pointerleave", reset);
            return () => {
              node.removeEventListener("pointermove", move);
              node.removeEventListener("pointerleave", reset);
            };
          });

          media.add("(prefers-reduced-motion: no-preference) and (hover: none) and (max-width: 1023px)", () => {
            const imageDepth = node.querySelector<HTMLElement>("[data-hero-depth-image]");
            const gridDepth = node.querySelector<HTMLElement>("[data-hero-depth-grid]");
            if (!imageDepth || !gridDepth) return;

            gsap.set([imageDepth, gridDepth], { transformPerspective: 900, transformOrigin: "center center" });
            const imageRotateX = gsap.quickTo(imageDepth, "rotationX", { duration: 0.7, ease: "power3.out" });
            const imageRotateY = gsap.quickTo(imageDepth, "rotationY", { duration: 0.7, ease: "power3.out" });
            const gridRotateX = gsap.quickTo(gridDepth, "rotationX", { duration: 0.85, ease: "power3.out" });
            const gridRotateY = gsap.quickTo(gridDepth, "rotationY", { duration: 0.85, ease: "power3.out" });

            const tilt = (event: TouchEvent) => {
              const touch = event.touches[0];
              if (!touch) return;
              const rect = node.getBoundingClientRect();
              const x = Math.max(-1, Math.min(1, ((touch.clientX - rect.left) / rect.width - 0.5) * 2));
              const y = Math.max(-1, Math.min(1, ((touch.clientY - rect.top) / rect.height - 0.5) * 2));
              imageRotateX(y * -0.7);
              imageRotateY(x * 0.9);
              gridRotateX(y * 0.45);
              gridRotateY(x * -0.6);
            };
            const reset = () => {
              imageRotateX(0);
              imageRotateY(0);
              gridRotateX(0);
              gridRotateY(0);
            };

            node.addEventListener("touchmove", tilt, { passive: true });
            node.addEventListener("touchend", reset, { passive: true });
            node.addEventListener("touchcancel", reset, { passive: true });
            return () => {
              node.removeEventListener("touchmove", tilt);
              node.removeEventListener("touchend", reset);
              node.removeEventListener("touchcancel", reset);
            };
          });
        }, node);

        cleanup = () => {
          media.revert();
          context.revert();
        };
      },
    );

    return () => { cancelled = true; cleanup?.(); };
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="hero-stage relative min-h-[100svh] w-full overflow-hidden bg-navy-deep"
    >
      <div data-hero-media className="absolute inset-0 origin-bottom overflow-hidden will-change-transform">
        <div data-hero-depth-image className="hero-depth-layer absolute -inset-6">
          <img
            data-hero-image
            src={heroImage}
            alt="Enterprise data center overlooking the Dubai skyline at blue hour"
            width={1920}
            height={1280}
            fetchPriority="high"
            className="h-full w-full object-cover object-[58%_center] will-change-transform sm:object-center"
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-navy-deep/70 lg:bg-gradient-to-r lg:from-navy-deep/95 lg:via-navy-deep/42 lg:to-navy-deep/20"
      />

      {/* Restrained architectural motion layer; no decorative blobs. */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <span data-hero-depth-grid className="hero-depth-layer absolute inset-0">
          <span data-hero-grid className="hero-grid" />
        </span>
        <span data-hero-depth-scan className="hero-depth-layer absolute inset-0">
          <span className="hero-scan" />
        </span>
      </div>

      <div
        data-hero-content
        className="shell relative flex min-h-[100svh] flex-col justify-end pt-32 pb-8 text-navy-foreground sm:pb-10 lg:pt-40"
      >
        <p data-hero-eyebrow className="eyebrow max-w-md text-navy-foreground/70">{brand.tagline}</p>

        <h1 className="display mt-7 max-w-5xl text-[clamp(3rem,8.5vw,7.5rem)]">
          <span className="block overflow-hidden"><span data-hero-line className="block">{brand.headline.lead}</span></span>
          <span className="block overflow-hidden"><span data-hero-line className="block text-navy-foreground">{brand.headline.accent}</span></span>
        </h1>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <p
            data-hero-copy
            className="max-w-xl text-base leading-relaxed text-navy-foreground/75"
          >
            {brand.intro}
          </p>

          <div data-hero-copy className="flex flex-wrap gap-3">
            <Cta href="#pricing" variant="light" pulseOnView={false}>
              Start Free
            </Cta>
            <Cta href="#pricing" variant="quiet" pulseOnView={false}>
              Explore Plans
            </Cta>
          </div>
        </div>

        <p data-hero-copy className="mt-6 text-xs text-navy-foreground/55">
          {brand.assurance}
        </p>

        <dl className="mt-12 grid grid-cols-2 gap-y-6 border-t border-white/15 pt-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} data-hero-stat>
              <dd className="display m-0 text-3xl sm:text-4xl">
                <CountUp value={stat.value} />
              </dd>
              <dt className="mt-1 text-xs tracking-wide text-navy-foreground/60">{stat.label}</dt>
            </div>
          ))}
        </dl>
        <a data-scroll-cue href="#products" className="mt-7 hidden w-fit items-center gap-3 text-[0.6875rem] uppercase tracking-[0.18em] text-navy-foreground/55 transition-colors hover:text-navy-foreground sm:flex">
          <span aria-hidden="true" className="hero-scroll-line" /> Explore
        </a>
      </div>
    </section>
  );
}
