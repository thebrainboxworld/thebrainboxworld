import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, CALENDLY_LINK, WHATSAPP_LINK } from "@/components/site/SiteLayout";
import { PlatformWall } from "@/components/site/PlatformWall";
import { ClientResults } from "@/components/site/ClientResults";
import { ecosystemProjects } from "@/lib/portfolio";
import { absoluteUrl } from "@/lib/site";
import { useEffect, useRef, useState } from "react";
import {
  Code2, Palette, ShoppingCart, BrainCog, TrendingUp, Smartphone, Headphones,
  Sparkles, ArrowRight, ArrowUpRight, Check, Star, Quote, CalendarCheck,
  Rocket, Target, Layers, LineChart, ShieldCheck, Zap, Globe2, MessageSquare,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => {
    const url = absoluteUrl("/");
    return {
      meta: [
        { title: "BrainBoxWorld — Digital Solutions, AI & Automation" },
        { name: "description", content: "BrainBoxWorld builds high-performance websites, AI systems, automation, and growth-focused digital experiences. Book a 30-minute strategy call." },
        { property: "og:title", content: "BrainBoxWorld — Modern Digital Solutions" },
        { property: "og:description", content: "Websites, apps, AI, automation, and growth systems that scale. Book a 30-minute strategy call." },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: HomePage,
});

/* ----------------------------- DATA ----------------------------- */




const stats = [
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 180, suffix: "%", label: "Avg. Growth Increase" },
  { value: 25, suffix: "M+", prefix: "$", label: "Revenue Influenced" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const whyUs = [
  { icon: Target, title: "Conversion-Focused Design", desc: "Every pixel engineered to move visitors from interest to action." },
  { icon: BrainCog, title: "AI-Powered Solutions", desc: "Smart automations and intelligent systems that work while you sleep." },
  { icon: TrendingUp, title: "Growth-Driven Development", desc: "Built for compounding returns, not vanity metrics." },
  { icon: Layers, title: "Scalable Architecture", desc: "Foundations that hold up at 10×, 100× and beyond." },
  { icon: Zap, title: "High-Performance Systems", desc: "Sub-second loads, native-feel interactions, edge delivery." },
  { icon: ShieldCheck, title: "Future-Proof Tech", desc: "Modern stacks chosen for longevity, not hype cycles." },
  { icon: Rocket, title: "Automation-Driven Workflows", desc: "We replace manual work with elegant, observable pipelines." },
  { icon: Sparkles, title: "Modern User Experiences", desc: "Premium UX that earns trust in the first 3 seconds." },
];

const services = [
  {
    icon: Code2, title: "Web & Software Development",
    items: ["Websites", "Custom Web Apps", "SaaS Platforms", "API Development", "Dashboards", "CMS"],
    desc: "Full-stack engineering for sites, apps and platforms that scale.",
  },
  {
    icon: Palette, title: "UI/UX & Branding",
    items: ["Product Design", "Wireframes & Prototypes", "Brand Identity", "Motion Graphics"],
    desc: "Design systems and brand experiences that look as good as they perform.",
  },
  {
    icon: ShoppingCart, title: "E-Commerce & Business Systems",
    items: ["Shopify", "WooCommerce", "Payments", "Checkout Optimization", "Store Optimization"],
    desc: "Stores engineered for conversion, retention and revenue growth.",
  },
  {
    icon: BrainCog, title: "AI & Automation",
    items: ["AI Chatbots", "Workflow Automation", "CRM Integration", "AI Features", "Dashboards"],
    desc: "Smart systems that automate operations and unlock new revenue.",
  },
  {
    icon: TrendingUp, title: "Digital Growth",
    items: ["SEO", "Technical SEO", "CRO", "Analytics", "Performance Optimization"],
    desc: "Data-led growth engineering across acquisition, activation and retention.",
  },
  {
    icon: Smartphone, title: "Mobile & Cloud",
    items: ["Mobile Apps", "Firebase", "Cloud Deployment", "DevOps Setup"],
    desc: "Native-grade mobile and resilient cloud infrastructure.",
  },
  {
    icon: Headphones, title: "Support & Consulting",
    items: ["Maintenance", "Redesign", "Hosting", "MVP Development", "Consultation"],
    desc: "Ongoing care, advisory and rapid MVP launches for ambitious teams.",
  },
];




const testimonials = [
  { quote: "BrainBoxWorld didn't just optimize our site — they rebuilt our entire growth engine. Organic traffic doubled within 90 days.", author: "Sarah Chen", role: "Founder, Retrospec", rating: 5 },
  { quote: "The strategic clarity they brought was unlike any agency we've worked with. Every decision was backed by data.", author: "Marcus Reyes", role: "CEO, Darn Tough", rating: 5 },
  { quote: "They understood our positioning instantly. The new experience converts like nothing we had before.", author: "Amara Okafor", role: "Marketing Lead, Trnda", rating: 5 },
  { quote: "Our revenue tripled after they rebuilt our SEO and product discovery system. The ROI has been extraordinary.", author: "James Whitaker", role: "Co-Founder, Benetek", rating: 5 },
];

const workflow = [
  { step: "01", title: "Discovery", desc: "Stakeholder interviews, audits, market & data deep-dive." },
  { step: "02", title: "Strategy", desc: "Positioning, roadmap, KPI architecture and growth thesis." },
  { step: "03", title: "Design", desc: "Premium UX, brand systems and high-fidelity prototypes." },
  { step: "04", title: "Development", desc: "Engineering, integrations and AI-powered automations." },
  { step: "05", title: "Optimization", desc: "CRO, performance, accessibility, technical SEO." },
  { step: "06", title: "Launch", desc: "Cinematic launch, monitoring and learning loops." },
  { step: "07", title: "Growth", desc: "Continuous iteration to compound results over time." },
];

const insights = [
  { tag: "Conversion", read: "8 min read", title: "Why Your Site Isn't Converting (And the 7 Structural Fixes That Will)", date: "March 2026", slug: "site-not-converting-7-structural-fixes" },
  { tag: "SEO & AI", read: "10 min read", title: "The AI-Powered SEO Framework for eCommerce Brands in 2026", date: "March 2026", slug: "ai-powered-seo-framework-2026" },
  { tag: "Architecture", read: "7 min read", title: "Shopify 2.0 vs Custom Build: Which Architecture Scales Better?", date: "February 2026", slug: "shopify-2-vs-custom-build" },
];

/* ----------------------------- HELPERS ----------------------------- */

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const duration = 1800;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(eased * value));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return <span ref={ref}>{prefix}{n}{suffix}</span>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs tracking-[0.2em] text-indigo-200 font-medium">
      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
      {children}
    </div>
  );
}

function SectionHeading({ label, title, subtitle, align = "center" }: { label: string; title: React.ReactNode; subtitle?: string; align?: "center" | "left" }) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignCls} max-w-3xl ${align === "center" ? "mx-auto" : ""} mb-8 reveal`}>
      <SectionLabel>{label}</SectionLabel>
      <h2 className="mt-5 text-3xl md:text-5xl font-bold font-display tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-slate-400 text-base md:text-lg leading-relaxed">{subtitle}</p>}
    </div>
  );
}

/* ----------------------------- PAGE ----------------------------- */

function HomePage() {
  return (
    <SiteLayout>
      {/* ====================== HERO ====================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-0 w-[28rem] h-[28rem] bg-violet-600/25 rounded-full blur-3xl animate-blob delay-300" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-blob delay-500" />

        <div className="relative max-w-[1400px] mx-auto px-4 pt-20 md:pt-28 pb-20 md:pb-32">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs tracking-wider text-indigo-200 animate-fade-in">
                <Sparkles className="w-3.5 h-3.5" />
                Trusted by ambitious teams worldwide
              </div>

              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.05] tracking-tight">
                <span className="block animate-slide-up">Your Trusted Partner</span>
                <span className="block animate-slide-up delay-100">for{" "}
                  <span className="text-gradient">Modern Digital</span>
                </span>
                <span className="block animate-slide-up delay-200">Solutions.</span>
              </h1>

              <p className="mt-8 text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed animate-slide-up delay-300">
                Looking to build a powerful website, launch a scalable platform, automate your business, or grow your digital presence?
                At BrainBoxWorld, we craft high-performance digital experiences — from websites and branding to AI-powered systems,
                automation, and scalable applications.
              </p>

              <div className="mt-10 flex flex-wrap gap-4 animate-slide-up delay-400">
                <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 btn-premium text-sm font-semibold px-6 py-3.5 rounded-full">
                  <CalendarCheck className="w-4 h-4" />
                  Book a 30-Minute Call
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <Link to="/portfolio"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass hover:bg-white/10 text-sm font-semibold text-white border border-white/10 hover:border-white/30 transition-all">
                  View Our Work
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400 animate-fade-in delay-500">
                {["Conversion-focused", "AI-powered", "Scalable", "Performance-first"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" /> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating UI showcase */}
            <div className="lg:col-span-5 relative h-[460px] hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-72 h-72 rounded-full border border-indigo-500/20 animate-spin-slow" />
                <div className="absolute w-96 h-96 rounded-full border border-violet-500/10 animate-spin-slow" style={{ animationDirection: "reverse" }} />
              </div>

              <div className="absolute top-2 right-6 grad-border p-4 w-60 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center"><LineChart className="w-4 h-4 text-indigo-300" /></div>
                  <div>
                    <div className="text-xs text-slate-400">Conversions</div>
                    <div className="text-lg font-bold text-white">+182%</div>
                  </div>
                </div>
                <div className="mt-3 h-12 flex items-end gap-1">
                  {[30, 45, 38, 60, 70, 55, 82, 90, 75, 95].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-indigo-500 to-violet-400" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>

              <div className="absolute bottom-10 left-2 grad-border p-4 w-64 animate-float delay-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <div className="text-xs text-slate-400">AI Workflow · Active</div>
                </div>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex justify-between"><span>Lead captured</span><Check className="w-3 h-3 text-emerald-400" /></div>
                  <div className="flex justify-between"><span>Enrichment</span><Check className="w-3 h-3 text-emerald-400" /></div>
                  <div className="flex justify-between"><span>CRM sync</span><Check className="w-3 h-3 text-emerald-400" /></div>
                  <div className="flex justify-between text-indigo-300"><span>AI follow-up</span><span className="animate-pulse">●●●</span></div>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grad-border p-5 w-56 animate-bob glow-soft">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                      <BrainCog className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">BrainBox AI</div>
                    <div className="text-[10px] text-emerald-400">Online · ready</div>
                  </div>
                </div>
                <div className="mt-3 bg-white/5 border border-white/10 rounded-lg p-2 text-xs text-slate-300">
                  Ready to scale your business? Let's design your growth engine.
                </div>
              </div>

              <div className="absolute bottom-4 right-2 grad-border px-3 py-2 animate-float delay-200">
                <div className="flex items-center gap-2 text-xs">
                  <Globe2 className="w-3.5 h-3.5 text-indigo-300" />
                  <span className="font-semibold text-white">Remote</span>
                  <span className="text-slate-400">· clients worldwide</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ====================== VERIFIED STATS (only real numbers) ====================== */}
      {VERIFIED_STATS.length > 0 && (
        <section className="relative -mt-6 md:-mt-10 px-4">
          <div className="max-w-[1400px] mx-auto grad-border p-2 glow-soft reveal-zoom">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
              {VERIFIED_STATS.map((s) => (
                <div key={s.label} className="p-6 md:p-8 text-center group">
                  <div className="text-3xl md:text-5xl font-bold font-display text-gradient">{s.value}</div>
                  <div className="mt-2 text-xs md:text-sm text-slate-400 tracking-wide uppercase">{s.label}</div>
                  <div className="mt-3 h-0.5 w-10 mx-auto bg-gradient-to-r from-indigo-500 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* ====================== PLATFORMS WE WORK WITH ====================== */}
      <section className="relative py-12 px-4">
        <SectionHeading
          label="PLATFORMS WE WORK WITH"
          title={<>Built on <span className="text-gradient">world-class technology</span></>}
          subtitle="From storefronts to AI — we build with the platforms and tools trusted by the world's best teams. Hover to explore."
        />
        <PlatformWall />
      </section>


      {/* ====================== WHY US ====================== */}
      <section className="relative py-12 px-4 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading
            label="WHY BRAINBOXWORLD"
            title={<>Built for outcomes, <span className="text-gradient">not output</span></>}
            subtitle="We don't sell deliverables — we build the systems that make your business compound."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((w, i) => (
              <div key={w.title} className="grad-border p-6 hover-lift reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/30 to-violet-500/30 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <w.icon className="w-6 h-6 text-indigo-300" />
                </div>
                <h3 className="font-semibold text-lg text-white font-display">{w.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== SERVICES ====================== */}
      <section id="services" className="relative py-12 px-4 scroll-mt-12">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading
            label="WHAT WE DO"
            title={<>Services engineered for <span className="text-gradient">growth</span></>}
            subtitle="A complete digital partner — from brand and product design to engineering, AI, and growth systems."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[s.slug];
              return (
                <div key={s.slug} className="group grad-border p-7 hover-lift reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/30 to-violet-500/30 border border-white/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-indigo-300" />
                    </div>
                    <div>
                      <div className="text-[11px] tracking-widest text-indigo-300/70">{s.number}</div>
                      <h3 className="font-semibold text-lg text-white font-display">{s.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{s.summary}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {s.included.slice(0, 6).map((it) => (
                      <span key={it} className="text-[11px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">{it}</span>
                    ))}
                  </div>
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-300 hover:text-indigo-200 story-link">
                    {s.cardCta} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ====================== PORTFOLIO / ECOSYSTEM ====================== */}
      <section className="relative py-12 px-4 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading
            label="THE BRAINBOXWORLD ECOSYSTEM"
            title={<>One agency, <span className="text-gradient">three continents</span></>}
            subtitle="Choose the team that fits your region and goals — Nigeria, the UK, or VANTIQ Creative in the USA. Wherever you are, we work with clients worldwide."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {ecosystemProjects.map((p, i) => (
              <Link key={p.id} to="/portfolio"
                className="group grad-border overflow-hidden hover-lift reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="relative h-56 overflow-hidden">
                  <img src={p.image} alt={`${p.name} website preview`} loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[1400ms]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/30 to-transparent" />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full glass text-white border border-white/15">
                    <span aria-hidden>{p.regionFlag}</span> {p.region}
                  </div>
                </div>
                <div className="p-5">
                  <div className="font-semibold text-white text-lg">{p.name}</div>
                  <div className="text-xs text-slate-400 mt-1">{p.tagline}</div>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-300 group-hover:text-indigo-200">
                    Explore <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10 border border-white/10 hover:border-white/30 text-sm font-semibold transition-all">
              View Full Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================== CLIENT RESULTS ====================== */}
      <ClientResults />


      {/* ====================== PROCESS ====================== */}
      <section className="relative py-12 px-4">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading
            label="HOW WE WORK"
            title={<>A proven 7-step <span className="text-gradient">process</span></>}
            subtitle="Strategy-led. Design-driven. Engineering-grade. Built to compound."
          />
          <div className="relative">
            <div className="absolute left-0 right-0 top-12 hidden md:block h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {workflow.map((w, i) => (
                <div key={w.step} className="relative reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="grad-border p-4 hover-lift">
                    <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-xs font-bold text-white shadow-[0_10px_30px_-10px_rgba(79,70,229,0.7)]">
                      {w.step}
                    </div>
                    <div className="mt-3 text-center font-semibold text-white text-sm">{w.title}</div>
                    <div className="mt-1 text-center text-xs text-slate-400">{w.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================== TESTIMONIALS (verified only) ====================== */}
      {TESTIMONIALS.length > 0 && (
        <section id="testimonials" className="relative py-12 px-4 scroll-mt-12 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeading
              label="CLIENT STORIES"
              title={<>What clients <span className="text-gradient">actually say</span></>}
            />
            <div className="grid md:grid-cols-2 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="grad-border p-7 hover-lift reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <Quote className="w-8 h-8 text-indigo-400/60 mb-3" />
                  <p className="text-slate-200 leading-relaxed">"{t.quote}"</p>
                  <div className="mt-5">
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-slate-400">{[t.role, t.company].filter(Boolean).join(" · ")}</div>
                    {t.result && <div className="mt-2 text-xs text-emerald-400">{t.result}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* ====================== INSIGHTS ====================== */}
      <section className="relative py-12 px-4">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading
            label="INSIGHTS"
            title={<>Field notes from the <span className="text-gradient">frontier</span></>}
            subtitle="Strategy, architecture and growth — written for operators who ship."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {insights.map((p, i) => (
              <Link key={p.slug} to="/blog" className="group grad-border p-6 hover-lift reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="px-2 py-1 rounded-md bg-indigo-500/15 text-indigo-300 border border-indigo-400/20">{p.tag}</span>
                  <span>{p.read}</span>
                </div>
                <h3 className="font-semibold text-white font-display text-lg leading-snug">{p.title}</h3>
                <div className="mt-4 text-xs text-slate-500 flex items-center justify-between">
                  <span>{p.date}</span>
                  <ArrowUpRight className="w-4 h-4 text-indigo-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== FINAL CTA ====================== */}
      <section className="relative py-12 px-4">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-600/40 rounded-full blur-3xl animate-blob" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-violet-600/40 rounded-full blur-3xl animate-blob delay-300" />

          <div className="relative px-6 py-10 md:py-14 text-center reveal-zoom">
            <SectionLabel>READY WHEN YOU ARE</SectionLabel>
            <h2 className="mt-6 text-4xl md:text-6xl font-bold font-display tracking-tight">
              Ready to build something <span className="text-gradient">exceptional?</span>
            </h2>
            <p className="mt-5 text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
              Tell us where you are, where you want to be, and we'll architect the path. A 30-minute call is all it takes to start.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 btn-premium text-sm font-semibold px-7 py-4 rounded-full">
                <CalendarCheck className="w-4 h-4" /> Book a Call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass hover:bg-white/10 border border-white/10 hover:border-white/30 text-sm font-semibold transition-all">
                <MessageSquare className="w-4 h-4" /> Start Your Project
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5"><Globe2 className="w-3.5 h-3.5" /> Remote · Global</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Replies within hours</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> NDA on request</span>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Clock(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
