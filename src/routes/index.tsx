import { createFileRoute } from "@tanstack/react-router";

import { ClosingCta } from "@/components/site/ClosingCta";
import { Contact } from "@/components/site/Contact";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { GlobalReach } from "@/components/site/GlobalReach";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Intro } from "@/components/site/Intro";
import { NumberedList } from "@/components/site/NumberedList";
import { Pricing } from "@/components/site/Pricing";
import { Products } from "@/components/site/Products";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Security } from "@/components/site/Security";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Stories } from "@/components/site/Stories";
import { Support } from "@/components/site/Support";
import { capabilities, performance, providers, useCases } from "@/lib/site-content";

const title = "Dillon Cloud — Managed Cloud Infrastructure Without the Complexity";
const description =
  "Powerful managed cloud infrastructure for businesses that need speed, security, and scalability—without the complexity of managing servers.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top">
      <SmoothScroll />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Intro />
        <Products />
        <NumberedList
          id="features"
          eyebrow={capabilities.eyebrow}
          heading={capabilities.heading}
          sub={capabilities.sub}
          items={capabilities.items}
        />
        <NumberedList
          id="performance"
          eyebrow={performance.eyebrow}
          heading={performance.heading}
          sub={performance.sub}
          items={performance.steps}
          note={performance.note}
        />
        <Security />
        <NumberedList
          id="providers"
          eyebrow={providers.eyebrow}
          heading={providers.heading}
          sub={providers.sub}
          items={providers.items}
          note={providers.note}
        />
        <NumberedList
          id="solutions"
          eyebrow={useCases.eyebrow}
          heading={useCases.heading}
          sub={useCases.sub}
          items={useCases.items}
        />
        <GlobalReach />
        <Stories />
        <Pricing />
        <ClosingCta />
        <Support />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
