export type ServiceFaq = { q: string; a: string };

export type ServiceDefinition = {
  slug: "ecommerce" | "web-development" | "ai-automation" | "digital-growth";
  number: string;
  name: string;
  navLabel: string;
  cardCta: string;
  tagline: string;
  /** Short card description on the homepage. */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSub: string;
  problem: { title: string; body: string; points: string[] };
  solution: { title: string; body: string; points: string[] };
  included: string[];
  process: { step: string; title: string; desc: string }[];
  technology: string[];
  faqs: ServiceFaq[];
};

export const SERVICES: ServiceDefinition[] = [
  {
    slug: "ecommerce",
    number: "01",
    name: "E-commerce Growth",
    navLabel: "E-commerce",
    cardCta: "Explore E-commerce",
    tagline: "Stores engineered to sell, not just to look good.",
    summary:
      "Shopify and WooCommerce builds, redesigns and conversion work that turn existing traffic into more orders.",
    metaTitle: "E-commerce Growth — Shopify & WooCommerce Development | BrainBoxWorld",
    metaDescription:
      "Shopify development, store redesigns, WooCommerce builds, product page and checkout optimization, eCommerce SEO and Google Merchant Center — built to increase revenue per visitor.",
    heroHeadline: "E-commerce stores built to convert and scale",
    heroSub:
      "We design, build and optimize Shopify and WooCommerce stores around one goal: more revenue from the traffic you already have.",
    problem: {
      title: "Why most stores stall",
      body: "Traffic is rarely the first problem. Most stores lose money in the gap between a visitor landing and a completed checkout.",
      points: [
        "Product pages that describe features but never answer buying objections",
        "Slow templates and heavy apps that push mobile load times past three seconds",
        "Checkout friction — forced accounts, surprise shipping costs, too many steps",
        "Category and collection pages that search engines and shoppers both struggle with",
        "Product feeds that get disapproved or under-perform in Google Shopping",
      ],
    },
    solution: {
      title: "How we approach it",
      body: "We start with the data you already have — analytics, search data and session behaviour — then fix the highest-leverage problems first.",
      points: [
        "Store audit covering speed, merchandising, SEO and checkout",
        "A prioritised roadmap ranked by revenue impact versus effort",
        "Design and build work shipped in stages so you see results early",
        "Structured testing on the pages that carry the most revenue",
      ],
    },
    included: [
      "Shopify Development",
      "Shopify Redesign",
      "WooCommerce Development",
      "Conversion Rate Optimization",
      "Product Page Optimization",
      "eCommerce SEO",
      "Google Merchant Center Setup & Feed Fixes",
      "AI Shopping & Product Discovery Optimization",
      "Cart & Checkout Optimization",
    ],
    process: [
      { step: "01", title: "Store audit", desc: "Speed, UX, merchandising, SEO and analytics reviewed against your revenue data." },
      { step: "02", title: "Roadmap", desc: "A ranked plan: what to fix first, expected impact, and how we will measure it." },
      { step: "03", title: "Build", desc: "Theme, template and app work shipped in staged releases with QA on real devices." },
      { step: "04", title: "Optimize", desc: "Product page, cart and checkout improvements validated against store analytics." },
    ],
    technology: ["Shopify", "Shopify Plus", "WooCommerce", "WordPress", "Klaviyo", "Google Merchant Center", "GA4", "Google Tag Manager"],
    faqs: [
      { q: "Do you work with existing stores or only new builds?", a: "Both. A large part of our eCommerce work is improving stores that already trade — redesigns, speed work, product page rewrites and checkout fixes — because there is usually revenue sitting in the existing traffic." },
      { q: "Shopify or WooCommerce — which should I choose?", a: "Shopify suits most brands that want to sell rather than maintain infrastructure. WooCommerce makes sense when you need deep WordPress content integration or unusual pricing and product logic. We recommend based on your catalogue, team and budget, not on preference." },
      { q: "How long does a store project take?", a: "A focused conversion and speed engagement typically runs a few weeks. A full custom store build takes longer and depends on catalogue size, integrations and content readiness. You get a written timeline before work starts." },
      { q: "Can you fix Google Merchant Center disapprovals?", a: "Yes. We review feed structure, required attributes, policy issues and product data quality, then correct the feed at source so the fix holds." },
    ],
  },
  {
    slug: "web-development",
    number: "02",
    name: "Web & SaaS Development",
    navLabel: "Web & SaaS",
    cardCta: "Explore Development",
    tagline: "Business websites, web apps and platforms built to last.",
    summary:
      "Marketing sites, dashboards, client portals and SaaS platforms engineered for performance and maintainability.",
    metaTitle: "Web & SaaS Development — Websites, Web Apps & Platforms | BrainBoxWorld",
    metaDescription:
      "Custom business websites, web applications, SaaS platforms, dashboards, client portals, API integrations and cloud deployment built with React, Supabase and modern cloud infrastructure.",
    heroHeadline: "Websites and platforms engineered for growth",
    heroSub:
      "From a fast marketing site to a full SaaS product, we build software that is quick to load, simple to run and straightforward to extend.",
    problem: {
      title: "What usually goes wrong",
      body: "Most business software problems are not visual. They are structural, and they surface six months after launch.",
      points: [
        "Sites that look fine but fail Core Web Vitals on real mobile connections",
        "Marketing pages nobody on the team can edit without a developer",
        "Internal tools stitched together from spreadsheets and manual steps",
        "Platforms that cannot be extended without rewriting large parts of them",
        "No clear ownership of hosting, deployments or environment configuration",
      ],
    },
    solution: {
      title: "How we build",
      body: "We scope tightly, build on a modern and well-supported stack, and hand over something your team can actually operate.",
      points: [
        "A written technical scope before a line of code is committed",
        "Component-driven front ends with accessibility and performance budgets",
        "Typed APIs, sensible data models and documented integrations",
        "Automated deployments with preview environments for every change",
      ],
    },
    included: [
      "Business Websites",
      "Web Applications",
      "SaaS Platforms",
      "Dashboards",
      "Client Portals",
      "Custom Business Systems",
      "API Integrations",
      "Cloud Deployments",
    ],
    process: [
      { step: "01", title: "Scope", desc: "Requirements, user journeys, data model and success criteria agreed in writing." },
      { step: "02", title: "Design", desc: "Interface design and prototypes reviewed before engineering begins." },
      { step: "03", title: "Build", desc: "Iterative development with preview links you can test at every stage." },
      { step: "04", title: "Launch & support", desc: "Deployment, monitoring, documentation and an agreed support arrangement." },
    ],
    technology: ["React", "TypeScript", "Next.js", "Supabase", "Firebase", "PostgreSQL", "Vercel", "Cloudflare"],
    faqs: [
      { q: "Can you take over an existing codebase?", a: "Yes, after a short technical review. We assess the stack, dependencies and deployment setup first so we can tell you honestly whether improving it or rebuilding is the better investment." },
      { q: "Will my team be able to update content?", a: "Yes. Content that changes regularly is made editable, and we walk your team through it at handover." },
      { q: "Do you provide ongoing maintenance?", a: "We offer maintenance arrangements covering updates, monitoring and small changes. It is optional — the code and infrastructure are yours either way." },
      { q: "Who owns the code?", a: "You do. Repositories, hosting accounts and third-party services are transferred to your ownership at handover." },
    ],
  },
  {
    slug: "ai-automation",
    number: "03",
    name: "AI & Automation",
    navLabel: "AI & Automation",
    cardCta: "Explore AI & Automation",
    tagline: "Remove manual work. Respond faster. Operate leaner.",
    summary:
      "AI agents, chatbots and workflow automation that cut repetitive work out of sales, support and operations.",
    metaTitle: "AI & Automation Services — AI Agents, Chatbots & Workflow Automation | BrainBoxWorld",
    metaDescription:
      "AI agents, AI chatbots, CRM and lead automation, email automation, business workflow automation and AI-powered internal tools built on OpenAI, Claude, Gemini, Make and Zapier.",
    heroHeadline: "AI and automation that pay for themselves",
    heroSub:
      "We automate the repetitive parts of your business — lead routing, follow-up, reporting, support answers — so your team spends time on work that actually needs a human.",
    problem: {
      title: "Where time leaks",
      body: "Most teams lose hours a week to work a system should be doing, and lose leads to slow first responses.",
      points: [
        "Enquiries sitting unanswered because nobody was notified in time",
        "Data re-typed between a form, a spreadsheet and a CRM",
        "Support answering the same handful of questions all day",
        "Reports assembled by hand at the end of every month",
        "AI experiments that never made it into a real workflow",
      ],
    },
    solution: {
      title: "How we automate",
      body: "We map the workflow before automating it, then automate the steps with the clearest payback and leave humans in control of judgement calls.",
      points: [
        "Workflow mapping to find where time and leads are actually lost",
        "Automation built on tools you already pay for wherever possible",
        "AI assistants grounded in your own content so answers stay accurate",
        "Logging and alerts so you can see what ran, and what failed",
      ],
    },
    included: [
      "AI Agents",
      "AI Chatbots",
      "CRM Automation",
      "Lead Automation",
      "Email Automation",
      "Business Workflow Automation",
      "AI-Powered Internal Tools",
      "API & AI Integrations",
    ],
    process: [
      { step: "01", title: "Map", desc: "We document the current workflow end to end and quantify the time it costs." },
      { step: "02", title: "Prioritise", desc: "We pick the automations with the shortest payback period first." },
      { step: "03", title: "Build", desc: "Automations and AI assistants built, tested against real cases and documented." },
      { step: "04", title: "Monitor", desc: "Alerting and review cycles so failures surface immediately, not next quarter." },
    ],
    technology: ["OpenAI", "Anthropic Claude", "Google Gemini", "Make", "Zapier", "n8n", "Supabase", "Webhooks & REST APIs"],
    faqs: [
      { q: "Will an AI assistant make things up about my business?", a: "We ground assistants in your own approved content and constrain what they are allowed to answer. Anything outside that scope is handed to a human rather than guessed at." },
      { q: "Do we need to change the tools we use?", a: "Usually not. We prefer to automate around your existing CRM, inbox and spreadsheets, and only recommend a change when the current tool genuinely blocks the work." },
      { q: "What happens if an automation breaks?", a: "Every workflow we ship has logging and failure alerts, so a broken step is visible immediately rather than silently dropping leads." },
      { q: "Is our data used to train AI models?", a: "We configure integrations to use API endpoints that do not train on your data, and we document exactly what is sent to which provider." },
    ],
  },
  {
    slug: "digital-growth",
    number: "04",
    name: "Digital Growth",
    navLabel: "Digital Growth",
    cardCta: "Explore Digital Growth",
    tagline: "Demand, measured properly and compounded over time.",
    summary:
      "SEO, paid media, email and analytics run as one system so you can see what actually drives revenue.",
    metaTitle: "Digital Growth — SEO, Paid Ads, Email & Analytics | BrainBoxWorld",
    metaDescription:
      "SEO, conversion optimization, paid advertising, email marketing, analytics, social media growth, Google Merchant Center and digital strategy — run as one measurable growth system.",
    heroHeadline: "Growth that you can actually measure",
    heroSub:
      "Search, paid, email and analytics run together, with reporting that tells you which channel produced revenue rather than which channel produced clicks.",
    problem: {
      title: "Why growth spend disappears",
      body: "Channels are usually run in isolation, and measurement is often broken before the first campaign goes live.",
      points: [
        "Analytics that never had conversion tracking configured properly",
        "SEO effort spread across pages with no commercial intent",
        "Ad budget spent on terms that never reach a checkout",
        "Email lists collected but never segmented or used",
        "Reporting that shows traffic but never revenue",
      ],
    },
    solution: {
      title: "How we run growth",
      body: "Measurement first, then the channels — so every later decision is based on numbers you can trust.",
      points: [
        "Analytics and conversion tracking audited and rebuilt where needed",
        "Keyword and content plans built around commercial intent",
        "Paid campaigns structured around margin, not vanity metrics",
        "A single reporting view across search, paid, email and on-site behaviour",
      ],
    },
    included: [
      "Search Engine Optimization",
      "Conversion Optimization",
      "Paid Advertising",
      "Email Marketing",
      "Analytics & Tracking",
      "Social Media Growth",
      "Google Merchant Center",
      "Digital Strategy",
    ],
    process: [
      { step: "01", title: "Measure", desc: "Analytics, tracking and attribution reviewed and corrected before spend increases." },
      { step: "02", title: "Plan", desc: "Channel mix, keyword targets and budget allocation agreed against your margins." },
      { step: "03", title: "Execute", desc: "Content, campaigns and on-site changes shipped on a predictable cadence." },
      { step: "04", title: "Compound", desc: "Monthly review of what worked, with budget shifted toward what produced revenue." },
    ],
    technology: ["Google Search Console", "Google Analytics 4", "Google Tag Manager", "Google Ads", "Meta Ads", "TikTok Ads", "Semrush", "Klaviyo"],
    faqs: [
      { q: "How long before SEO shows results?", a: "Technical and on-page fixes can move rankings within weeks. Content and authority work generally takes several months to compound. We report on leading indicators in the meantime rather than asking you to wait quietly." },
      { q: "Do you require a long contract?", a: "No. Growth work benefits from continuity, but we do not lock clients into long agreements to keep them." },
      { q: "Can you work alongside our in-house marketer?", a: "Yes. We often handle technical execution and measurement while an in-house team owns brand and content." },
      { q: "What reporting do we get?", a: "A single dashboard plus a written monthly summary covering what we did, what changed and what we are doing next." },
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
