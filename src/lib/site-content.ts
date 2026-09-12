/**
 * Content inventory taken verbatim from the existing Dillon Cloud website
 * (dilloncloud.com). Nothing here is invented — copy, figures, disclaimers
 * and calls-to-action are preserved as published.
 */

export const brand = {
  name: "Dillon Cloud",
  tagline: "Managed Cloud Infrastructure. Without the Complexity.",
  headline: { lead: "Your Cloud.", accent: "Managed to Perform." },
  intro:
    "Powerful managed cloud infrastructure for businesses that need speed, security, and scalability—without the complexity of managing servers.",
  assurance:
    "No credit card required · Free migration assistance · 24/7 expert support",
} as const;

export const nav = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact Sales", href: "#contact" },
] as const;

export const stats = [
  { value: "99.99%", label: "Uptime" },
  { value: "24/7", label: "Expert Support" },
  { value: "50+", label: "Global Data Centers" },
  { value: "840K+", label: "Websites Powered" },
] as const;

export const statsHeading =
  "Built for businesses that can't afford to slow down.";

export const managedStacks = [
  "WordPress",
  "WooCommerce",
  "Laravel",
  "Magento",
  "PHP",
  "AWS",
  "Google Cloud",
  "DigitalOcean",
] as const;

export const products = {
  eyebrow: "Products",
  heading: "Choose the cloud experience that fits your business.",
  sub: "Two managed paths to the same outcome: reliable infrastructure your team never has to babysit.",
  items: [
    {
      index: "01",
      name: "Dillon Cloud Flexible",
      badge: null as string | null,
      description:
        "Managed cloud hosting with complete control over your applications, server resources, and cloud provider.",
      features: [
        "Multiple application environments",
        "Flexible server resources",
        "Managed security",
        "Automated backups",
        "Staging environments",
        "Performance optimization",
        "24/7 expert support",
      ],
      cta: "Explore Flexible Hosting",
    },
    {
      index: "02",
      name: "Dillon Cloud Autonomous",
      badge: "Recommended",
      description:
        "Fully managed WordPress infrastructure that automatically adapts to changing traffic demands.",
      features: [
        "Automatic scaling",
        "High availability",
        "Managed WordPress",
        "Traffic-spike protection",
        "Global CDN",
        "Automated backups",
        "Expert support",
      ],
      cta: "Explore Autonomous",
    },
  ],
} as const;

export const performance = {
  eyebrow: "Performance",
  heading: "Performance engineered for modern websites.",
  sub: "From first click to checkout, every layer of your infrastructure is optimized to deliver faster, more reliable experiences.",
  steps: [
    { index: "01", name: "Request", description: "Visitor hits your domain" },
    { index: "02", name: "CDN", description: "Static assets served at the edge" },
    { index: "03", name: "Cache", description: "Full-page and object caching" },
    { index: "04", name: "Web Server", description: "Tuned NGINX + Apache stack" },
    { index: "05", name: "Application", description: "PHP-FPM workers, sized to load" },
    { index: "06", name: "Database", description: "Indexed queries, managed engine" },
  ],
  qualities: [
    "Low latency",
    "Optimized caching",
    "Fast response times",
    "Global delivery",
  ],
  note: "Illustrative demo data",
} as const;

export const capabilities = {
  eyebrow: "Why Dillon Cloud",
  heading: "Everything you need. Nothing you don't.",
  sub: "The managed layer that handles the operational work most teams would rather not own.",
  items: [
    {
      index: "01",
      name: "Lightning-Fast Performance",
      description:
        "Optimized infrastructure, caching, and modern server technology keep your applications responsive.",
    },
    {
      index: "02",
      name: "Enterprise Security",
      description:
        "Built-in firewall protection, SSL, malware protection, monitoring, and automated backups help keep your business secure.",
    },
    {
      index: "03",
      name: "Automatic Backups",
      description:
        "Protect your applications with reliable automated backups and simple restoration.",
    },
    {
      index: "04",
      name: "Staging & Cloning",
      description: "Safely test changes before pushing them to production.",
    },
    {
      index: "05",
      name: "24/7 Expert Support",
      description:
        "Real technical experts are available around the clock to help keep your business online.",
    },
    {
      index: "06",
      name: "Easy Scaling",
      description:
        "Increase resources as your traffic and business grow without rebuilding your infrastructure.",
    },
  ],
} as const;

export const providers = {
  eyebrow: "Cloud providers",
  heading: "Your applications. Your cloud. Your choice.",
  sub: "Deploy your applications on leading cloud infrastructure providers while Dillon Cloud handles the management layer.",
  items: [
    {
      index: "01",
      name: "DigitalOcean",
      description:
        "Straightforward, cost-effective compute for growing applications and agency workloads.",
    },
    {
      index: "02",
      name: "AWS",
      description:
        "Broad global coverage and enterprise-grade capacity for demanding production systems.",
    },
    {
      index: "03",
      name: "Google Cloud",
      description:
        "Strong network performance for latency-sensitive applications and data-heavy workloads.",
    },
    {
      index: "04",
      name: "Vultr",
      description:
        "High-frequency compute options for sites that need consistent single-thread speed.",
    },
    {
      index: "05",
      name: "Linode",
      description:
        "Predictable pricing and dependable instances for steady, long-running workloads.",
    },
  ],
  note: "Provider names are referenced for compatibility only and do not imply partnership or endorsement.",
} as const;

export const useCases = {
  eyebrow: "Use cases",
  heading: "Built for the way modern businesses work.",
  sub: "Different teams, different workloads—one managed platform underneath them.",
  items: [
    {
      index: "01",
      name: "Agencies",
      description: "Manage multiple client websites from one powerful environment.",
    },
    {
      index: "02",
      name: "Ecommerce",
      description:
        "Keep stores fast and reliable during campaigns, promotions, and traffic spikes.",
    },
    {
      index: "03",
      name: "Developers",
      description:
        "Deploy applications faster without spending your time managing infrastructure.",
    },
    {
      index: "04",
      name: "SMBs",
      description: "Get enterprise-grade hosting without building an infrastructure team.",
    },
    {
      index: "05",
      name: "Publishers",
      description:
        "Deliver fast content experiences even when traffic suddenly increases.",
    },
  ],
} as const;

export const globalReach = {
  eyebrow: "Global reach",
  heading: "Infrastructure closer to your customers.",
  sub: "Deploy applications closer to your audience with a global infrastructure footprint designed for performance and resilience.",
  regions: ["North America", "Europe", "Middle East", "Asia", "Australia"],
  qualities: [
    "Global infrastructure",
    "High availability",
    "Multi-region deployment",
    "Optimized delivery",
  ],
  note: "Regions shown are illustrative for this demo website.",
} as const;

export const security = {
  eyebrow: "Security",
  heading: "Security built into every layer.",
  sub: "Protection is applied from the network edge down to the application and database, monitored by our team around the clock.",
  items: [
    { name: "SSL", description: "Free certificates, issued and renewed automatically." },
    {
      name: "Firewall",
      description: "Managed rules filtering traffic before it reaches your app.",
    },
    {
      name: "DDoS Protection",
      description: "Volumetric attack mitigation at the network edge.",
    },
    {
      name: "Malware Monitoring",
      description: "Continuous scanning with guided remediation.",
    },
    {
      name: "Automated Backups",
      description: "Scheduled snapshots with one-click restore.",
    },
    {
      name: "Security Alerts",
      description: "Notifications when something needs your attention.",
    },
    {
      name: "Access Controls",
      description: "Role-based team permissions and SSH key management.",
    },
    {
      name: "24/7 Monitoring",
      description: "Round-the-clock checks on availability and load.",
    },
  ],
} as const;

export const stories = {
  eyebrow: "Customer stories",
  heading: "Trusted by teams building what comes next.",
  sub: "Illustrative profiles created for this demo website to show how Dillon Cloud engagements typically work.",
  items: [
    {
      index: "01",
      name: "Northstar Commerce",
      sector: "Ecommerce",
      challenge: "Traffic became unpredictable during promotional campaigns.",
      solution:
        "Dillon Cloud introduced managed caching, scaling, monitoring, and performance optimization.",
      outcome: "More consistent performance during peak traffic.",
    },
    {
      index: "02",
      name: "Atlas Digital Studio",
      sector: "Agency",
      challenge:
        "Client sites were spread across several hosts with inconsistent maintenance.",
      solution:
        "Sites were consolidated into one managed environment with staging and team access controls.",
      outcome: "Less time spent on server maintenance across the client portfolio.",
    },
    {
      index: "03",
      name: "Vertex Learning",
      sector: "Education technology",
      challenge:
        "Course launches created sudden load the previous setup could not absorb.",
      solution:
        "Autoscaling infrastructure, CDN delivery, and proactive monitoring were put in place.",
      outcome: "Steadier response times through launch periods.",
    },
  ],
} as const;

export const pricing = {
  eyebrow: "Pricing",
  heading: "Simple pricing. No infrastructure surprises.",
  sub: "Pay for the resources you use, with management, security, and support included.",
  plans: [
    {
      index: "01",
      name: "Starter",
      price: "$11",
      period: "/month",
      badge: null as string | null,
      description: "For small websites and growing businesses.",
      features: [
        "2 GB RAM",
        "1 vCPU",
        "50 GB storage",
        "2 TB bandwidth",
        "Free SSL",
        "Automated backups",
        "24/7 support",
      ],
      cta: "Start Free",
    },
    {
      index: "02",
      name: "Growth",
      price: "$35",
      period: "/month",
      badge: "Most Popular",
      description: "For growing businesses and moderate traffic.",
      features: [
        "4 GB RAM",
        "2 vCPU",
        "80 GB storage",
        "4 TB bandwidth",
        "Advanced caching",
        "Staging",
        "Free migration",
        "24/7 support",
      ],
      cta: "Get Started",
    },
    {
      index: "03",
      name: "Scale",
      price: "$88",
      period: "/month",
      badge: null as string | null,
      description: "For demanding websites and ecommerce applications.",
      features: [
        "8 GB RAM",
        "4 vCPU",
        "160 GB storage",
        "5 TB bandwidth",
        "Advanced performance tools",
        "Priority support",
        "Free migration",
        "Enhanced monitoring",
      ],
      cta: "Choose Scale",
    },
  ],
  note: "Pricing shown is illustrative for this demo website. Actual infrastructure costs may vary by provider, region, configuration, and usage.",
} as const;

export const support = {
  eyebrow: "Support",
  heading: "Your infrastructure team, without the overhead.",
  sub: "Real engineers monitor the platform and answer your questions, so your team can stay focused on the product.",
  items: [
    "24/7 support",
    "Live chat",
    "Technical experts",
    "Monitoring",
    "Knowledge base",
    "Migration assistance",
  ],
} as const;

export const closingCta = {
  heading: "Ready to leave hosting headaches behind?",
  sub: "Move your websites to a managed cloud environment with expert migration assistance and minimal disruption.",
  primary: "Start Your Migration",
  secondary: "Talk to an Expert",
} as const;

export const faq = {
  eyebrow: "FAQ",
  heading: "Questions, answered.",
  sub: "If something isn't covered here, our team is happy to walk you through it.",
  items: [
    {
      q: "What is managed cloud hosting?",
      a: "Managed cloud hosting means your application runs on cloud infrastructure while a provider handles the operational work: server setup, security patching, caching, backups, monitoring, and support. You keep control of your application without maintaining the servers underneath it.",
    },
    {
      q: "How is managed hosting different from shared hosting?",
      a: "Shared hosting places many websites on a single server with shared resources, so one busy neighbour can slow everyone down. With Dillon Cloud your application runs on dedicated cloud resources you can size and scale independently.",
    },
    {
      q: "Can I migrate my existing website?",
      a: "Yes. Our team provides migration assistance, including a staged copy of your files and database, testing before go-live, and DNS guidance so downtime stays minimal.",
    },
    {
      q: "Can I scale resources as my traffic grows?",
      a: "Yes. You can increase RAM, CPU, and storage on your existing environment, or move to an autoscaling setup that adds capacity automatically during traffic spikes.",
    },
    {
      q: "Which applications can I host?",
      a: "Dillon Cloud supports WordPress, WooCommerce, Magento, Laravel, and other PHP applications, as well as custom stacks that run on standard Linux web servers.",
    },
    {
      q: "Do you provide SSL certificates?",
      a: "Yes. Free SSL certificates are included on every plan and renew automatically. You can also install your own certificate if your organisation requires one.",
    },
    {
      q: "Are backups included?",
      a: "Yes. Automated backups are included on all plans, with scheduled snapshots and straightforward restoration for a full site or an individual application.",
    },
    {
      q: "Do you provide 24/7 support?",
      a: "Yes. Technical support is available around the clock through live chat and support tickets, with priority response on higher plans.",
    },
    {
      q: "Can agencies manage multiple client websites?",
      a: "Yes. Agencies can run multiple applications in one environment, separate client projects, invite team members with role-based access, and use staging sites for review.",
    },
    {
      q: "How does billing work?",
      a: "Billing is usage based and charged monthly for the resources your environments consume. You can change plans at any time, and pricing adjusts from the next billing cycle.",
    },
  ],
} as const;

export const contact = {
  eyebrow: "Contact",
  heading: "Let's find the right cloud setup for your business.",
  sub: "Tell us what you're building, how much traffic you expect, and where you're running into infrastructure challenges. Our team can help you choose the right approach.",
  supportLabel: "Support",
  supportText: "24/7 support available through live chat and support tickets.",
  callLabel: "Prefer to talk it through?",
  callText: "Request a call and a solutions engineer will follow up.",
  addressNote:
    "Demo contact address: support@dilloncloud.example — this is a placeholder for the demo site, not a monitored mailbox.",
  primary: "Contact Sales",
  secondary: "Schedule a Call",
  countries: [
    "United States",
    "United Kingdom",
    "India",
    "Germany",
    "Australia",
    "Other",
  ],
  businessTypes: [
    "Agency",
    "Ecommerce",
    "SaaS",
    "Publisher",
    "Small business",
    "Other",
  ],
  visitors: ["Under 10,000", "10,000 – 100,000", "100,000 – 1M", "Over 1M"],
  helpWith: [
    "Migration",
    "Performance",
    "Scaling",
    "Security",
    "Pricing",
    "Something else",
  ],
} as const;
