import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { contact } from "@/lib/site-content";

const fieldClass =
  "h-12 w-full border-b border-hairline bg-transparent text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-electric";

export function Contact() {
  return (
    <section id="contact" className="shell py-24 sm:py-32 lg:py-40">
      <Reveal>
        <SectionLabel>{contact.eyebrow}</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="display mt-8 max-w-4xl text-[clamp(2.25rem,6vw,5rem)]">
          {contact.heading}
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="max-w-sm leading-relaxed text-ink-soft">{contact.sub}</p>

          <div className="mt-12 space-y-8">
            <div className="rule-top pt-4">
              <p className="eyebrow">{contact.supportLabel}</p>
              <p className="mt-2 text-sm text-ink-soft">{contact.supportText}</p>
            </div>
            <div className="rule-top pt-4">
              <p className="eyebrow">{contact.callLabel}</p>
              <p className="mt-2 text-sm text-ink-soft">{contact.callText}</p>
            </div>
          </div>

          <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
            {contact.addressNote}
          </p>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-7 lg:col-start-6">
          <form className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="eyebrow">
                Full Name *
              </label>
              <input id="name" name="name" type="text" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="email" className="eyebrow">
                Work Email *
              </label>
              <input id="email" name="email" type="email" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="phone" className="eyebrow">
                Phone Number
              </label>
              <input id="phone" name="phone" type="tel" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="company" className="eyebrow">
                Company Name
              </label>
              <input id="company" name="company" type="text" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="country" className="eyebrow">
                Country
              </label>
              <select id="country" name="country" defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  Select an option
                </option>
                {contact.countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="businessType" className="eyebrow">
                Business Type
              </label>
              <select
                id="businessType"
                name="businessType"
                defaultValue=""
                className={fieldClass}
              >
                <option value="" disabled>
                  Select an option
                </option>
                {contact.businessTypes.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="visitors" className="eyebrow">
                Monthly Website Visitors
              </label>
              <select id="visitors" name="visitors" defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  Select an option
                </option>
                {contact.visitors.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="help" className="eyebrow">
                What can we help you with?
              </label>
              <select id="help" name="help" defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  Select an option
                </option>
                {contact.helpWith.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="currentHost" className="eyebrow">
                Current Hosting Provider
              </label>
              <input
                id="currentHost"
                name="currentHost"
                type="text"
                placeholder="e.g. shared hosting, VPS, another cloud"
                className={fieldClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="eyebrow">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your applications and traffic patterns."
                className="w-full resize-none border-b border-hairline bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-electric"
              />
            </div>
            <div className="flex flex-wrap gap-3 sm:col-span-2">
              <button
                type="submit"
                className="cta inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 text-sm text-paper"
              >
                <span>{contact.primary}</span>
                <span aria-hidden="true" className="cta-arrow">
                  &rarr;
                </span>
              </button>
              <button
                type="submit"
                className="cta inline-flex items-center gap-2 rounded-full border border-ink/25 px-8 py-3.5 text-sm hover:border-electric hover:text-electric"
              >
                <span>{contact.secondary}</span>
                <span aria-hidden="true" className="cta-arrow">
                  &rarr;
                </span>
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
