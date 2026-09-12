import { useEffect, useState } from "react";

import logo from "@/assets/dillon-logo.png";
import { Button } from "@/components/ui/button";
import { brand, nav } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color,transform] duration-500",
        scrolled || open
          ? "border-b border-hairline bg-paper/90 text-ink backdrop-blur-md"
          : "border-b border-transparent text-navy-foreground",
      )}
    >
      <div className="shell flex h-20 items-center justify-between gap-8 lg:h-24">
        <a href="#top" className="group flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt={`${brand.name} logo`}
            width={36}
            height={36}
            className="h-9 w-9 object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <span className="text-lg tracking-tight font-medium">{brand.name}</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {nav.slice(0, 4).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="link-underline text-sm opacity-80 transition-opacity hover:opacity-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button asChild variant="outline" className={cn(
          "cta hidden h-11 rounded-full bg-transparent px-6 shadow-none lg:inline-flex",
          scrolled
            ? "border-ink/25 text-ink hover:border-electric hover:bg-transparent hover:text-electric"
            : "border-navy-foreground/35 text-navy-foreground hover:border-navy-foreground hover:bg-navy-foreground/10",
        )}>
          <a href="#contact">Contact Sales <span aria-hidden="true" className="cta-arrow">&rarr;</span></a>
        </Button>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full text-current hover:bg-current/10 lg:hidden"
        >
          <span
            className={cn(
              "h-px w-6 bg-current transition-transform duration-300",
              open && "translate-y-[3.5px] rotate-45",
            )}
          />
          <span
            className={cn(
              "h-px w-6 bg-current transition-transform duration-300",
              open && "-translate-y-[3.5px] -rotate-45",
            )}
          />
        </Button>
      </div>

      {open && (
        <div className="mobile-menu fixed inset-x-0 top-20 h-[calc(100svh-5rem)] border-t border-hairline bg-paper text-ink lg:hidden">
          <nav aria-label="Mobile" className="shell flex h-full flex-col justify-center py-8">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="mobile-menu-link display border-b border-hairline py-4 text-4xl last:border-0"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mobile-menu-link cta mt-8 h-12 rounded-full bg-ink px-6 text-paper">
              <a href="#contact" onClick={() => setOpen(false)}>Contact Sales <span aria-hidden="true" className="cta-arrow">&rarr;</span></a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
