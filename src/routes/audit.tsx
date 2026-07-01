import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { absoluteUrl } from "@/lib/site";
import { Check, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/audit")({
  head: () => ({
    meta: [
      { title: "Free SEO & Growth Audit — BrainBoxWorld" },
      { name: "description", content: "Book a free Growth Foundations Audit — a strategic diagnostic that gives you clarity and confidence to scale." },
      { property: "og:title", content: "Free SEO & Growth Audit — BrainBoxWorld" },
      { property: "og:description", content: "Diagnostic-led audit for brands ready to scale without structural friction." },
      { property: "og:url", content: absoluteUrl("/audit") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/audit") }],
  }),
  component: AuditPage,
});

const includes = [
  "Technical SEO crawl & site health report",
  "Conversion funnel & friction analysis",
  "Page speed and Core Web Vitals review",
  "Keyword opportunity & content gap assessment",
  "Competitor visibility & backlink snapshot",
  "Prioritized 90-day action roadmap",
];

function AuditPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", website: "", goals: "", company_url: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/public/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          website: form.website,
          message: form.goals,
          service: 'SEO & Growth Audit',
          source_page: 'Book SEO Audit',
          company_url: form.company_url, // honeypot
        }),
      });
      if (!res.ok) throw new Error('Failed');
      toast.success("Audit request received! We'll be in touch within 24 hours.");
      setForm({ name: "", email: "", phone: "", website: "", goals: "", company_url: "" });
      setSuccess(true);
    } catch {
      toast.error("Something went wrong. Please try again or WhatsApp us.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <SiteLayout>
      <PageHero title="Free Growth Foundations Audit" subtitle="A focused diagnostic for brands that want to scale without structural friction, conversion leaks, or blind data." />
      <section className="py-10 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">What's included</h2>
            <ul className="space-y-3">
              {includes.map((t) => (
                <li key={t} className="flex items-start gap-2 text-slate-700">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 p-5 bg-white border border-slate-200 rounded-xl">
              <p className="text-sm text-slate-600">Prefer to talk first?</p>
              <a href="https://wa.me/13312782900" className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold">
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
          {success ? (
            <div className="bg-white border border-green-200 rounded-xl p-8 text-center flex flex-col items-center justify-center shadow-sm">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">Request received!</h2>
              <p className="text-slate-600 mb-6">Thank you for contacting BrainBox World. We have received your request and will contact you shortly.</p>
              <button onClick={() => setSuccess(false)} className="px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                Request another audit
              </button>
            </div>
          ) : (
          <form onSubmit={onSubmit} className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 space-y-4 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800">Request your audit</h2>
            {/* Honeypot — hidden from humans, bots fill it */}
            <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.company_url} onChange={(e) => setForm({ ...form, company_url: e.target.value })} className="hidden" />
            <Field label="Name *">
              <input required type="text" aria-label="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" className={inputCls} />
            </Field>
            <Field label="Email *">
              <input required type="email" aria-label="Email address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@example.com" className={inputCls} />
            </Field>
            <Field label="Phone">
              <input type="tel" aria-label="Phone number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+1 (555) 000-0000" className={inputCls} />
            </Field>
            <Field label="Website *">
              <input required type="url" aria-label="Your website URL" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} placeholder="https://yourwebsite.com" className={inputCls} />
            </Field>
            <Field label="Growth goals">
              <textarea aria-label="Your growth goals" value={form.goals} onChange={(e) => setForm({ ...form, goals: e.target.value })} rows={4} placeholder="What are your growth goals?" className={inputCls} />
            </Field>
            <button type="submit" disabled={submitting} className="w-full py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold disabled:opacity-60 transition-all hover:scale-[1.02]">
              {submitting ? "Sending..." : "Book My Free Audit"}
            </button>
          </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

const inputCls = "w-full px-3 py-2.5 rounded-md border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate-700 mb-1.5">{label}</span>
      {children}
    </label>
  );
}
