import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { absoluteUrl } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Our Portfolio — BrainBoxWorld" },
      { name: "description", content: "Check out some of our recent projects and see how we've helped businesses like yours succeed online." },
      { property: "og:title", content: "Our Portfolio — BrainBoxWorld" },
      { property: "og:description", content: "Recent SEO and web development projects delivered by BrainBoxWorld." },
      { property: "og:url", content: absoluteUrl("/portfolio") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/portfolio") }],
  }),
  component: PortfolioPage,
});

const projects = [
  { name: "mimiandco.com.au", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=500&fit=crop", url: "https://mimiandco.com.au" },
  { name: "retrospec.com", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=500&fit=crop", url: "https://retrospec.com/" },
  { name: "darntough.com", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=500&fit=crop", url: "https://darntough.com/" },
  { name: "trnda.com", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=500&fit=crop", url: "https://trnda.com/" },
  { name: "weightliftinghouse.com", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=500&fit=crop", url: "https://ukstore.weightliftinghouse.com/" },
  { name: "goondiwindicotton.com.au", img: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=500&fit=crop", url: "https://goondiwindicotton.com.au/" },
  { name: "shopbenetek.com", img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=500&fit=crop", url: "https://shopbenetek.com/" },
  { name: "thelandmarkproject.com", img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=500&fit=crop", url: "https://thelandmarkproject.com/" },
  { name: "glamira.africa", img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=500&fit=crop", url: "https://www.glamira.africa/" },
];

function PortfolioPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Our Portfolio"
        subtitle="Check out some of our recent projects and see how we've helped businesses like yours succeed online."
      />
      <section className="py-10 px-4 bg-slate-50">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">Project Gallery</h2>
        </div>
        <div className="max-w-[1400px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="group block rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white hover:shadow-xl transition">
              <div className="relative h-72 overflow-hidden">
                <img src={p.img} alt={`${p.name} website project showcase`} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                  <span className="text-white font-semibold">{p.name}</span>
                </div>
              </div>
              <div className="p-4 text-center font-semibold text-slate-800">{p.name}</div>
            </a>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://wa.me/13312782900" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold">
            <MessageCircle className="w-5 h-5" /> Contact on WhatsApp
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
