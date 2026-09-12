import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { stories } from "@/lib/site-content";

export function Stories() {
  return (
    <section id="stories" className="shell py-24 sm:py-32 lg:py-40">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <SectionLabel>{stories.eyebrow}</SectionLabel>
        </Reveal>
        <div>
          <Reveal>
            <h2 className="display text-[clamp(2.25rem,5.5vw,4.5rem)]">{stories.heading}</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-8 max-w-xl leading-relaxed text-ink-soft">{stories.sub}</p>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 grid gap-x-12 gap-y-14 lg:mt-24 lg:grid-cols-3">
        {stories.items.map((item, i) => (
          <Reveal key={item.name} delay={i * 80} className="rule-top pt-6">
            <div className="flex items-baseline justify-between">
              <span className="display text-lg text-electric">{item.index}</span>
              <span className="eyebrow">{item.sector}</span>
            </div>
            <h3 className="display mt-4 text-[clamp(1.5rem,2.4vw,2rem)]">{item.name}</h3>
            <dl className="mt-6 space-y-5 text-sm leading-relaxed">
              <div>
                <dt className="eyebrow">Challenge</dt>
                <dd className="mt-1.5 text-ink-soft">{item.challenge}</dd>
              </div>
              <div>
                <dt className="eyebrow">Solution</dt>
                <dd className="mt-1.5 text-ink-soft">{item.solution}</dd>
              </div>
              <div>
                <dt className="eyebrow">Outcome</dt>
                <dd className="mt-1.5 text-ink-soft">{item.outcome}</dd>
              </div>
            </dl>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
