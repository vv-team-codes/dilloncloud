import autonomous from "@/assets/product-autonomous.jpg";
import flexible from "@/assets/product-flexible.jpg";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { products } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { LazyImage } from "@/components/site/LazyImage";

const images = [flexible, autonomous];
const alts = [
  "Exterior of a modern data centre building at blue hour",
  "Illuminated server racks in a dark data hall",
];

export function Products() {
  return (
    <section id="products" className="bg-navy-deep py-24 text-navy-foreground sm:py-32 lg:py-44">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <SectionLabel className="text-navy-foreground/60">{products.eyebrow}</SectionLabel>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="display text-[clamp(2.25rem,5.5vw,4.5rem)]">{products.heading}</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-8 max-w-xl leading-relaxed text-navy-foreground/70">
                {products.sub}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 space-y-24 lg:mt-32 lg:space-y-36">
          {products.items.map((item, i) => (
            <article
              key={item.name}
              className={cn(
                "grid items-center gap-10 lg:grid-cols-12",
                i % 2 === 1 && "lg:[&>*:first-child]:order-2",
              )}
            >
              <Reveal className="img-reveal lg:col-span-6">
                <LazyImage
                  src={images[i]}
                  alt={alts[i]}
                  width={1600}
                  height={1104}
                  className="h-72 w-full object-cover sm:h-[28rem]"
                />
              </Reveal>

              <Reveal delay={100} className="lg:col-span-5 lg:col-start-8">
                <div className="flex items-baseline gap-5">
                  <span className="display text-4xl text-electric">{item.index}</span>
                  {item.badge && (
                    <span className="eyebrow rounded-full border border-white/25 px-3 py-1 text-navy-foreground/70">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="display mt-5 text-[clamp(1.8rem,3.5vw,2.9rem)]">{item.name}</h3>
                <p className="mt-5 max-w-lg leading-relaxed text-navy-foreground/70">
                  {item.description}
                </p>
                <ul className="mt-8 grid gap-x-8 gap-y-2 text-sm text-navy-foreground/75 sm:grid-cols-2">
                  {item.features.map((feature) => (
                    <li key={feature} className="border-t border-white/12 pt-2">
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#pricing"
                  className="link-underline mt-10 inline-block text-sm text-navy-foreground"
                >
                  {item.cta}
                </a>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
