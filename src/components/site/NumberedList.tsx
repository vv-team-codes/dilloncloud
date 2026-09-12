import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

interface Item {
  index: string;
  name: string;
  description: string;
}

interface NumberedListProps {
  id?: string;
  eyebrow: string;
  heading: string;
  sub?: string;
  items: readonly Item[];
  note?: string;
}

export function NumberedList({
  id,
  eyebrow,
  heading,
  sub,
  items,
  note,
}: NumberedListProps) {
  return (
    <section id={id} className="shell py-24 sm:py-32 lg:py-40">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <SectionLabel>{eyebrow}</SectionLabel>
        </Reveal>
        <div>
          <Reveal>
            <h2 className="display text-[clamp(2.25rem,5.5vw,4.5rem)]">{heading}</h2>
          </Reveal>
          {sub && (
            <Reveal delay={80}>
              <p className="mt-8 max-w-xl leading-relaxed text-ink-soft">{sub}</p>
            </Reveal>
          )}
        </div>
      </div>

      <ol className="mt-16 lg:mt-24">
        {items.map((item, i) => (
          <Reveal as="li" key={item.name} delay={i * 60} className="rule-top">
            <div
              tabIndex={0}
              className="card-motion grid gap-3 py-8 outline-none sm:grid-cols-12 sm:gap-8 sm:py-10"
            >
              <span className="card-icon display text-xl text-electric sm:col-span-1">
                {item.index}
              </span>
              <h3 className="display text-[clamp(1.5rem,3vw,2.4rem)] sm:col-span-5">
                {item.name}
              </h3>
              <p className="max-w-xl leading-relaxed text-ink-soft sm:col-span-6">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>

      {note && (
        <Reveal>
          <p className="rule-top pt-6 text-xs text-muted-foreground">{note}</p>
        </Reveal>
      )}
    </section>
  );
}
