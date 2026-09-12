import fibre from "@/assets/detail-fibre.jpg";
import operations from "@/assets/detail-operations.jpg";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { managedStacks, statsHeading, capabilities } from "@/lib/site-content";
import { LazyImage } from "@/components/site/LazyImage";

export function Intro() {
  return (
    <section id="about" className="shell py-24 sm:py-32 lg:py-44">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <SectionLabel>{capabilities.eyebrow}</SectionLabel>
        </Reveal>
        <div>
          <Reveal>
            <h2 className="display text-[clamp(2.25rem,5.5vw,4.5rem)]">{statsHeading}</h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <Reveal delay={80}>
              <p className="max-w-md leading-relaxed text-ink-soft">{capabilities.sub}</p>
            </Reveal>
            <Reveal delay={160}>
              <p className="max-w-md leading-relaxed text-ink-soft">
                Dillon Cloud supports WordPress, WooCommerce, Magento, Laravel, and other
                PHP applications, as well as custom stacks that run on standard Linux web
                servers.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="mt-24 grid items-end gap-8 lg:mt-36 lg:grid-cols-12">
        <Reveal className="img-reveal lg:col-span-5">
          <LazyImage
            src={fibre}
            alt="Fibre optic patch panel inside an enterprise network cabinet"
            width={1200}
            height={1504}
            className="h-[26rem] w-full object-cover sm:h-[34rem]"
          />
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <h3 className="display text-[clamp(1.9rem,4vw,3.25rem)]">
              {capabilities.heading}
            </h3>
          </Reveal>
          <Reveal delay={100} className="img-reveal mt-10">
            <LazyImage
              src={operations}
              alt="Engineer reviewing managed cloud infrastructure dashboards"
              width={1200}
              height={912}
              className="h-64 w-full object-cover sm:h-80"
            />
          </Reveal>
          <Reveal delay={140}>
            <p className="eyebrow mt-10">Applications and clouds we manage</p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
              {managedStacks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
