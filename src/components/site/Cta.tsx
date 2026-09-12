import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "light" | "quiet";

const variants: Record<Variant, string> = {
  solid: "rounded-full bg-ink px-8 py-3.5 text-sm text-paper",
  outline: "rounded-full border border-ink/25 px-7 py-3 text-sm hover:border-electric hover:text-electric",
  light: "rounded-full bg-paper px-8 py-3.5 text-sm text-ink",
  quiet: "rounded-full border border-white/40 px-8 py-3.5 text-sm hover:bg-white/10",
};

interface CtaProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** Play a single gentle pulse the first time the button scrolls into view. */
  pulseOnView?: boolean;
}

export function Cta({ href, children, variant = "solid", className, pulseOnView = true }: CtaProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || !pulseOnView) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            setPulse(true);
          }
        });
      },
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [pulseOnView]);

  return (
    <a
      ref={ref}
      href={href}
      onAnimationEnd={() => setPulse(false)}
      className={cn(
        "cta inline-flex w-fit items-center gap-2",
        variants[variant],
        pulse && "cta-pulse",
        className,
      )}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="cta-arrow">
        &rarr;
      </span>
    </a>
  );
}
