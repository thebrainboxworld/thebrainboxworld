import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Insights & Blog — BrainBoxWorld" },
      { name: "description", content: "Strategic insights, tactical guides, and growth frameworks from the BrainBoxWorld team." },
      { property: "og:title", content: "BrainBoxWorld Blog" },
      { property: "og:description", content: "SEO, conversion, and growth insights for ambitious brands." },
      { property: "og:url", content: absoluteUrl("/blog") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/blog") }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <SiteLayout>
      <PageHero title="Insights & Blog" subtitle="Strategic insights, tactical guides, and growth frameworks from the BrainBoxWorld team." />
      <section className="py-10 px-4 bg-slate-50">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="sr-only">Latest articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((p) => (
            <article key={p.slug} className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition flex flex-col">
              <Link to="/blog/$slug" params={{ slug: p.slug }}>
                <img src={p.img} alt={p.title} className="w-full h-48 object-cover" loading="lazy" />
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                  <span className="text-blue-600 font-semibold">{p.tag}</span>
                  <span>•</span>
                  <span>{p.read}</span>
                </div>
                <h3 className="font-bold text-slate-800 leading-snug mb-3">
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="hover:text-blue-600 transition-colors">{p.title}</Link>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{p.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{p.date}</span>
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="text-blue-600 font-semibold inline-flex items-center gap-1">Read <ArrowRight className="w-3 h-3" /></Link>
                </div>
              </div>
            </article>
          ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
