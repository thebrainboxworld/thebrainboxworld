import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, CALENDLY_LINK } from "@/components/site/SiteLayout";
import { SERVICES } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";
import { ArrowRight, Check, CalendarCheck } from "lucide-react";

const TITLE = "Services — E-commerce, Web & SaaS, AI Automation, Digital Growth | BrainBoxWorld";
const DESC =
  "Four focused practices: e-commerce growth, web and SaaS development, AI and automation, and digital growth. See what is included, how we work and the technology we use.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: "BrainBoxWorld Services" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/services") },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/services") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
          ],
        }),
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <SiteLayout>
      <PageHero
        title="What We Do"
        subtitle="Four focused practices, one goal: digital systems that bring in customers and keep them."
      />

      <section className="relative py-12 px-4">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <article key={s.slug} className="reveal glass rounded-2xl border border-white/10 p-6 md:p-8 flex flex-col hover:border-indigo-400/40 transition-colors">
              <span className="text-xs tracking-[0.25em] text-indigo-300 font-semibold">SERVICE {s.number}</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold font-display tracking-tight">{s.name}</h2>
              <p className="mt-3 text-slate-400 leading-relaxed">{s.summary}</p>
              <ul className="mt-5 grid sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-300">
                {s.included.slice(0, 6).map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 hover:text-white transition-colors self-start"
              >
                {s.cardCta} <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="relative py-12 px-4">
        <div className="max-w-4xl mx-auto text-center glass rounded-3xl border border-white/10 px-6 py-12">
          <h2 className="text-2xl md:text-4xl font-bold font-display tracking-tight">Not sure what you need?</h2>
          <p className="mt-3 text-slate-400">
            Start with a free website audit. We will tell you where the biggest opportunity is before you spend anything.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/audit" className="btn-premium inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-full">
              Get a Free Website Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 hover:border-white/40 text-sm font-semibold transition-colors">
              <CalendarCheck className="w-4 h-4" /> Book a Strategy Call
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
