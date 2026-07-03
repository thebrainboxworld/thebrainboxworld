import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CALENDLY_LINK } from "@/components/site/SiteLayout";
import { PortfolioShowcase } from "@/components/site/PortfolioShowcase";
import { ClientResults } from "@/components/site/ClientResults";
import { PlatformWall } from "@/components/site/PlatformWall";
import { absoluteUrl } from "@/lib/site";
import { CalendarCheck, MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Work — BrainBoxWorld Creative Agency" },
      { name: "description", content: "Explore the BrainBoxWorld portfolio — premium website showcases across Nigeria, the UK and the USA (VANTIQ Creative), plus real client results, proof of revenue and the platforms we work with." },
      { property: "og:title", content: "Portfolio & Work — BrainBoxWorld" },
      { property: "og:description", content: "Immersive project showcases, client results, and world-class platforms. Choose the BrainBoxWorld team that fits your region — Nigeria, UK, or USA." },
      { property: "og:url", content: absoluteUrl("/portfolio") },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/portfolio") }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Our Work"
        subtitle="Immersive project experiences from a premium international agency — choose the BrainBoxWorld team that fits your region, while we serve clients worldwide."
      />

      {/* Ecosystem + client showcase with cinematic project experiences */}
      <PortfolioShowcase />

      {/* Proof of results */}
      <ClientResults />

      {/* Platforms we work with */}
      <section className="relative py-14 px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs tracking-[0.2em] text-indigo-200 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" /> PLATFORMS WE WORK WITH
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold font-display tracking-tight">
            Built on <span className="text-gradient">world-class technology</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base md:text-lg leading-relaxed">
            We build with the platforms and tools trusted by the world's best teams — hover to explore.
          </p>
        </div>
        <PlatformWall />
      </section>

      {/* CTA */}
      <section className="relative py-14 px-4">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="relative px-6 py-12 md:py-16 text-center reveal-zoom">
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight">
              Ready to become our next <span className="text-gradient">success story?</span>
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
              Pick the team that fits your region and goals. Let's architect the path from where you are to where you want to be.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 btn-premium text-sm font-semibold px-7 py-4 rounded-full">
                <CalendarCheck className="w-4 h-4" /> Book a Call <ArrowRight className="w-4 h-4" />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass hover:bg-white/10 border border-white/10 hover:border-white/30 text-sm font-semibold transition-all">
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
