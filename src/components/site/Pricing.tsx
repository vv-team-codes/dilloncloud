import { Cta } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { pricing } from "@/lib/site-content";

export function Pricing() {
  return (
    <section id="pricing" className="shell py-24 sm:py-32 lg:py-40">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <SectionLabel>{pricing.eyebrow}</SectionLabel>
        </Reveal>
        <div>
          <Reveal>
            <h2 className="display text-[clamp(2.25rem,5.5vw,4.5rem)]">{pricing.heading}</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-8 max-w-xl leading-relaxed text-ink-soft">{pricing.sub}</p>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 grid gap-x-12 gap-y-16 lg:mt-24 lg:grid-cols-3">
        {pricing.plans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 90} className="flex">
            <div className="card-motion flex w-full flex-col rule-top px-1 pt-6 pb-2">
              <div className="flex items-baseline justify-between">
                <span className="card-icon display text-lg text-electric">{plan.index}</span>
                {plan.badge && <span className="eyebrow text-electric">{plan.badge}</span>}
              </div>
              <h3 className="display mt-4 text-3xl">{plan.name}</h3>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="display text-[clamp(2.75rem,6vw,4rem)]">{plan.price}</span>
                <span className="text-sm text-ink-soft">{plan.period}</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{plan.description}</p>
              <ul className="mt-8 space-y-2 text-sm text-ink-soft">
                {plan.features.map((feature) => (
                  <li key={feature} className="border-t border-hairline pt-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <Cta href="#contact" variant="outline" pulseOnView={false} className="mt-10">
                {plan.cta}
              </Cta>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-16 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          {pricing.note}
        </p>
      </Reveal>
    </section>
  );
}
