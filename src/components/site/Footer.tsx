import logo from "@/assets/dillon-logo.png";
import { Reveal } from "@/components/site/Reveal";
import { brand, nav } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="bg-navy-deep py-20 text-navy-foreground sm:py-24">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <a href="#top" className="flex items-center gap-3">
              <img
                src={logo}
                alt={`${brand.name} logo`}
                width={36}
                height={36}
                loading="lazy"
                className="h-9 w-9 object-contain"
              />
              <span className="text-lg tracking-tight">{brand.name}</span>
            </a>
            <p className="mt-6 max-w-sm leading-relaxed text-navy-foreground/65">
              {brand.tagline}
            </p>
          </Reveal>

          <Reveal as="nav" delay={80} aria-label="Footer" className="lg:col-span-3">
            <p className="eyebrow text-navy-foreground/50">Navigate</p>
            <ul className="mt-5 space-y-2.5 text-sm text-navy-foreground/75">
              {nav.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="link-underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160} className="lg:col-span-4">
            <p className="eyebrow text-navy-foreground/50">Support</p>
            <p className="mt-5 text-sm leading-relaxed text-navy-foreground/75">
              24/7 support available through live chat and support tickets.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-navy-foreground/50">
              Demo contact address: support@dilloncloud.example — this is a placeholder for
              the demo site, not a monitored mailbox.
            </p>
          </Reveal>
        </div>

        <Reveal delay={220} className="mt-16 flex flex-col gap-3 border-t border-white/12 pt-6 text-xs text-navy-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p>dilloncloud.com</p>
        </Reveal>
      </div>
    </footer>
  );
}
