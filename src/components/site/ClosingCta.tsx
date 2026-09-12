import ctaImage from "@/assets/cta-aisle.jpg";
import { Cta } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";
import { closingCta } from "@/lib/site-content";
import { LazyImage } from "@/components/site/LazyImage";

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-navy-foreground">
      <LazyImage
        src={ctaImage}
        alt="Symmetrical aisle of server racks in a managed cloud data centre"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-navy-deep/78" />

      <div className="shell relative py-28 sm:py-40 lg:py-52">
        <Reveal>
          <h2 className="display max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)]">
            {closingCta.heading}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-8 max-w-xl leading-relaxed text-navy-foreground/75">
            {closingCta.sub}
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-12 flex flex-wrap gap-3">
            <Cta href="#contact" variant="light">
              {closingCta.primary}
            </Cta>
            <Cta href="#contact" variant="quiet" pulseOnView={false}>
              {closingCta.secondary}
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
