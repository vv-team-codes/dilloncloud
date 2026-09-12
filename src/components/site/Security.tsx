import securityImage from "@/assets/security-cage.jpg";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { security } from "@/lib/site-content";
import { LazyImage } from "@/components/site/LazyImage";

export function Security() {
  return (
    <section id="security" className="bg-navy-deep py-24 text-navy-foreground sm:py-32 lg:py-40">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <SectionLabel className="text-navy-foreground/60">{security.eyebrow}</SectionLabel>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="display text-[clamp(2.25rem,5.5vw,4.5rem)]">{security.heading}</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-8 max-w-xl leading-relaxed text-navy-foreground/70">
                {security.sub}
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <Reveal className="img-reveal mt-16 lg:mt-24">
        <LazyImage
          src={securityImage}
          alt="Secure server cage door with access control reader in a data centre"
          width={1600}
          height={1008}
          className="h-72 w-full object-cover sm:h-[30rem]"
        />
      </Reveal>

      <div className="shell mt-16 lg:mt-24">
        <dl className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {security.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 40}>
              <dt className="display border-t border-white/15 pt-5 text-xl">{item.name}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-navy-foreground/65">
                {item.description}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
