import globalNetwork from "@/assets/global-network.jpg";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { globalReach } from "@/lib/site-content";
import { LazyImage } from "@/components/site/LazyImage";

export function GlobalReach() {
  return (
    <section id="global" className="py-24 sm:py-32 lg:py-40">
      <div className="shell grid gap-10 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <SectionLabel>{globalReach.eyebrow}</SectionLabel>
        </Reveal>
        <div>
          <Reveal>
            <h2 className="display text-[clamp(2.25rem,5.5vw,4.5rem)]">{globalReach.heading}</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-8 max-w-xl leading-relaxed text-ink-soft">{globalReach.sub}</p>
          </Reveal>
        </div>
      </div>

      <Reveal className="img-reveal mt-16 lg:mt-24">
        <LazyImage
          src={globalNetwork}
          alt="Aerial night view of connected city lights across a region"
          width={1920}
          height={1008}
          className="h-80 w-full object-cover sm:h-[32rem]"
        />
      </Reveal>

      <div className="shell mt-14">
        <ul className="grid gap-y-4 sm:grid-cols-2 lg:grid-cols-5">
          {globalReach.regions.map((region, i) => (
            <Reveal as="li" key={region} delay={i * 50} className="rule-top pt-4">
              <span className="display text-xl sm:text-2xl">{region}</span>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-ink-soft">
            {globalReach.qualities.map((quality) => (
              <li key={quality}>{quality}</li>
            ))}
          </ul>
          <p className="mt-8 text-xs text-muted-foreground">{globalReach.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
