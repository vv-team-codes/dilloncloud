import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { support } from "@/lib/site-content";

export function Support() {
  return (
    <section id="support" className="shell py-24 sm:py-32 lg:py-40">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <SectionLabel>{support.eyebrow}</SectionLabel>
        </Reveal>
        <div>
          <Reveal>
            <h2 className="display text-[clamp(2.25rem,5.5vw,4.5rem)]">{support.heading}</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-8 max-w-xl leading-relaxed text-ink-soft">{support.sub}</p>
          </Reveal>
          <Reveal delay={140}>
            <ul className="mt-12 grid gap-y-3 sm:grid-cols-2">
              {support.items.map((item) => (
                <li key={item} className="rule-top pt-3 text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
