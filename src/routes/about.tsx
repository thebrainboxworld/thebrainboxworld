import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { absoluteUrl } from "@/lib/site";
import { Check, Users, Award, Target } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BrainBoxWorld — Digital Marketing & SEO Agency" },
      { name: "description", content: "BrainBoxWorld is a digital marketing agency with 8+ years of experience building SEO and growth systems that scale." },
      { property: "og:title", content: "About BrainBoxWorld" },
      { property: "og:description", content: "Strategy-first. Conversion-obsessed. Full-stack execution." },
      { property: "og:url", content: absoluteUrl("/about") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Strategy-First Approach", desc: "We diagnose before we design. Every project starts with deep analysis, not templates." },
  { icon: Award, title: "Conversion-Obsessed", desc: "Beautiful design is the baseline. We engineer every element to drive measurable business results." },
  { icon: Users, title: "Full-Stack Execution", desc: "From brand strategy to custom code — one team, one vision, zero handoff friction." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero title="About BrainBoxWorld" subtitle="A digital marketing agency built around growth systems — not just websites." />
      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Who we are</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          BrainBoxWorld is a leading digital marketing agency with over 8 years of experience delivering SEO and web development services that compound. We help businesses achieve first-page Google rankings, increase organic traffic, and maximize online conversions.
        </p>
        <p className="text-slate-600 leading-relaxed">
          We pride ourselves on measurable results and long-term partnerships — from startup ventures to established enterprises, we build customized growth solutions that drive real business outcomes.
        </p>
      </section>
      <section className="py-10 px-4 bg-slate-50">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Why brands work with us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl border border-slate-200 p-6">
                <v.icon className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-lg text-slate-800 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">What we deliver</h2>
        <ul className="space-y-3">
          {[
            "Content Marketing & Content Management",
            "SEO for Google, Yahoo, Bing and beyond",
            "Google Ads & Pay-Per-Click Advertising",
            "Social Media Marketing & Optimization",
            "Custom web development & performance engineering",
            "Conversion-focused UX & landing page design",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 text-slate-700"><Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /> {t}</li>
          ))}
        </ul>
        <div className="mt-10 flex gap-4">
          <Link to="/audit" className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700">Book a Free Audit</Link>
          <Link to="/contact" className="px-6 py-3 rounded-md bg-slate-800 text-white font-semibold hover:bg-slate-900">Contact Us</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
