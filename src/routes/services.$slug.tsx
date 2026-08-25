import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, CALENDLY_LINK } from "@/components/site/SiteLayout";
import { SERVICES, getService } from "@/lib/services";
import { caseStudies } from "@/lib/portfolio";
import { absoluteUrl } from "@/lib/site";
import { ArrowRight, Check, CalendarCheck, AlertTriangle, Lightbulb } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    const url = absoluteUrl(`/services/${params.slug}`);
    if (!loaderData) {
      return { meta: [{ title: "Service not found — BrainBoxWorld" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: `${s.name} — BrainBoxWorld` },
        { property: "og:description", content: s.metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: `${s.name} — BrainBoxWorld` },
        { name: "twitter:description", content: s.metaDescription },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.name,
            serviceType: s.name,
            description: s.metaDescription,
            url,
            provider: { "@type": "Organization", name: "BrainBoxWorld", url: absoluteUrl() },
            areaServed: "Worldwide",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: `${s.name} deliverables`,
              itemListElement: s.included.map((i) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: i } })),
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
              { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
              { "@type": "ListItem", position: 3, name: s.name, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: s.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: ServicePage,
  notFoundComponent: ServiceNotFound,
});

function ServiceNotFound() {
  return (
    <SiteLayout>
      <section className="px-4 py-24 text-center">
        <h1 className="text-3xl font-bold font-display">Service not found</h1>
        <p className="mt-3 text-slate-400">That page doesn&apos;t exist. Browse everything we do instead.</p>
        <Link to="/services" className="mt-6 inline-flex btn-premium px-6 py-3 rounded-full text-sm font-semibold">
          View all services
        </Link>
      </section>
    </SiteLayout>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs tracking-[0.2em] text-indigo-200 font-medium">
      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" aria-hidden="true" />
      {children}
    </div>
  );
}

function ServicePage() {
  const { service: s } = Route.useLoaderData();
  const related = caseStudies.slice(0, 3);
  const others = SERVICES.filter((x) => x.slug !== s.slug);

  return (
    <SiteLayout>
      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative max-w-[1100px] mx-auto px-4 py-16 md:py-20">
          <Eyebrow>SERVICE {s.number}</Eyebrow>
          <h1 className="mt-5 text-3xl sm:text-4xl md:text-6xl font-bold font-display tracking-tight leading-[1.08]">
            {s.heroHeadline}
          </h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-slate-300 leading-relaxed">{s.heroSub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/audit" className="btn-premium inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-full">
              Get a Free Website Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 hover:border-white/40 text-sm font-semibold transition-colors">
              <CalendarCheck className="w-4 h-4" /> Book a Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* 2 & 3. Problem / Solution */}
      <section className="relative py-12 px-4">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-6">
          <div className="reveal glass rounded-2xl border border-white/10 p-6 md:p-8">
            <div className="flex items-center gap-2 text-amber-300">
              <AlertTriangle className="w-5 h-5" aria-hidden="true" />
              <span className="text-xs tracking-[0.2em] font-semibold">THE PROBLEM</span>
            </div>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold font-display tracking-tight">{s.problem.title}</h2>
            <p className="mt-3 text-slate-400 leading-relaxed">{s.problem.body}</p>
            <ul className="mt-5 space-y-2.5 text-sm text-slate-300">
              {s.problem.points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal glass rounded-2xl border border-white/10 p-6 md:p-8">
            <div className="flex items-center gap-2 text-indigo-300">
              <Lightbulb className="w-5 h-5" aria-hidden="true" />
              <span className="text-xs tracking-[0.2em] font-semibold">THE SOLUTION</span>
            </div>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold font-display tracking-tight">{s.solution.title}</h2>
            <p className="mt-3 text-slate-400 leading-relaxed">{s.solution.body}</p>
            <ul className="mt-5 space-y-2.5 text-sm text-slate-300">
              {s.solution.points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. What's included */}
      <section className="relative py-12 px-4">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold font-display tracking-tight">What&apos;s included</h2>
          <p className="mt-3 text-slate-400 max-w-2xl">{s.tagline}</p>
          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {s.included.map((item) => (
              <div key={item} className="reveal flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 hover:border-indigo-400/40 transition-colors">
                <Check className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How we work */}
      <section className="relative py-12 px-4">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold font-display tracking-tight">How we work</h2>
          <ol className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {s.process.map((p) => (
              <li key={p.step} className="reveal glass rounded-2xl border border-white/10 p-5">
                <span className="text-3xl font-bold font-display text-gradient">{p.step}</span>
                <h3 className="mt-2 font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. Technology */}
      <section className="relative py-12 px-4">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold font-display tracking-tight">Technology we use</h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {s.technology.map((t) => (
              <span key={t} className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-slate-300">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Relevant work */}
      {related.length > 0 && (
        <section className="relative py-12 px-4">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold font-display tracking-tight">Relevant work</h2>
            <div className="mt-7 grid md:grid-cols-3 gap-4">
              {related.map((c) => (
                <article key={c.slug} className="reveal glass rounded-2xl border border-white/10 p-5">
                  <span className="text-xs tracking-widest text-indigo-300 font-semibold">{c.industry}</span>
                  <h3 className="mt-2 font-semibold text-white">{c.name}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed line-clamp-4">{c.overview}</p>
                </article>
              ))}
            </div>
            <Link to="/case-studies" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 hover:text-white transition-colors">
              View all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      )}

      {/* 8. FAQs */}
      <section className="relative py-12 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold font-display tracking-tight">Frequently asked questions</h2>
          <div className="mt-7 divide-y divide-white/10 border-y border-white/10">
            {s.faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4 text-base font-semibold text-white focus-visible:outline-2 focus-visible:outline-indigo-400 rounded">
                  {f.q}
                  <span className="text-indigo-300 transition-transform group-open:rotate-45 text-xl leading-none" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA + internal links */}
      <section className="relative py-12 px-4">
        <div className="max-w-[1100px] mx-auto glass rounded-3xl border border-white/10 px-6 py-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold font-display tracking-tight">Ready to grow your business?</h2>
          <p className="mt-3 text-slate-400 max-w-xl mx-auto">
            Tell us where you are now and what you want next. We will come back with a clear, costed plan.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/audit" className="btn-premium inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-full">
              Get a Free Website Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 hover:border-white/40 text-sm font-semibold transition-colors">
              Talk to us
            </Link>
          </div>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/services/$slug"
                params={{ slug: o.slug }}
                className="text-xs px-3.5 py-2 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-colors"
              >
                {o.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
