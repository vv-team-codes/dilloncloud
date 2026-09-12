import { useState } from "react";

import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { faq } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="shell py-24 sm:py-32 lg:py-40">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <Reveal>
            <SectionLabel>{faq.eyebrow}</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="display mt-8 text-[clamp(2.25rem,5vw,4rem)]">{faq.heading}</h2>
            <p className="mt-6 max-w-sm leading-relaxed text-ink-soft">{faq.sub}</p>
          </Reveal>
        </div>

        <dl className="lg:mt-2">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={Math.min(i, 5) * 30} className="rule-top">
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  >
                    <span className="display text-[clamp(1.15rem,2vw,1.6rem)]">{item.q}</span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "mt-2 shrink-0 text-electric transition-transform duration-500",
                        isOpen && "rotate-45",
                      )}
                    >
                      +
                    </span>
                  </button>
                </dt>
                <dd
                  className={cn(
                    "grid transition-all duration-500",
                    isOpen ? "grid-rows-[1fr] pb-8 opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <p className="max-w-2xl overflow-hidden leading-relaxed text-ink-soft">
                    {item.a}
                  </p>
                </dd>
              </Reveal>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
