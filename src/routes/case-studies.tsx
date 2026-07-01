import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { absoluteUrl } from "@/lib/site";
import { TrendingUp, ArrowRight, Award, BarChart3, ExternalLink } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies & Track Record — BrainBoxWorld" },
      { name: "description", content: "Real brands, real strategies, real results. Explore featured case studies plus our full track record of rankings, traffic, and sales growth." },
      { property: "og:title", content: "Case Studies & Track Record — BrainBoxWorld" },
      { property: "og:description", content: "Featured client case studies and a proven track record of measurable outcomes." },
      { property: "og:url", content: absoluteUrl("/case-studies") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/case-studies") }],
  }),
  component: CaseStudiesPage,
});

const cases = [
  {
    name: "Retrospec",
    cat: "Outdoor & Lifestyle",
    metric: "+168% Conversion Rate",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&h=600&fit=crop",
    url: "https://retrospec.com/",
    summary: "Premium outdoor brand. Conversion-optimized product pages, subscription integration, and a trust-driven brand experience.",
    tags: ["Shopify", "Conversion", "SEO"],
  },
  {
    name: "Darn Tough",
    cat: "Fashion & Apparel",
    metric: "+124% Revenue Growth",
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&h=600&fit=crop",
    url: "https://darntough.com/",
    summary: "Apparel brand with curated collections and a seamless shopping experience designed to convert at every step.",
    tags: ["eCommerce", "UX", "Growth"],
  },
  {
    name: "Weightlifting House",
    cat: "Sports Equipment",
    metric: "+89% Online Revenue",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&h=600&fit=crop",
    url: "https://ukstore.weightliftinghouse.com/",
    summary: "Global sports brand with vibrant product showcases, rewards program, and high-converting product discovery.",
    tags: ["Shopify", "CRO", "Performance"],
  },
  {
    name: "The Landmark Project",
    cat: "Adventure Gear",
    metric: "+156% Average Order Value",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=900&h=600&fit=crop",
    url: "https://thelandmarkproject.com/",
    summary: "Premium adventure brand with immersive design, story-led navigation, and a gifting experience built for high-value customers.",
    tags: ["Brand", "eCommerce", "AOV"],
  },
];

type Result = {
  title: string;
  url: string;
  img: string;
  desc: string;
  traffic?: string;
  ranking?: string;
  conversion?: string;
  date: string;
};

const results: Result[] = [
  { title: "Custom Las Vegas Weddings", url: "https://customlasvegasweddings.com/", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop", desc: "Achieved first page rankings for all major wedding-related keywords in Las Vegas market", traffic: "+280%", ranking: "1st Page for 5 keywords", date: "December 2025" },
  { title: "Used Booths", url: "https://usedbooths.com/", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop", desc: "Dominated trade show exhibit equipment market with first page rankings across all target keywords", ranking: "1st Page for 6 keywords", date: "November 2025" },
  { title: "Matt Adams Ministries", url: "https://www.mattadamsministries.com/", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop", desc: "First page rankings for Christian entertainment niche keywords", ranking: "1st Page for 3 keywords", date: "October 2025" },
  { title: "Mobile Drug Screen", url: "https://mobiledrugsscreen.com/", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop", desc: "First page rankings across California markets for mobile drug testing services", ranking: "1st Page for 5 keywords", date: "September 2025" },
  { title: "Drift School", url: "https://www.driftschool.com/", img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&h=400&fit=crop", desc: "Top rankings for all drift training and lesson keywords", ranking: "1st Page for 4 keywords", date: "August 2025" },
  { title: "OC Laundry", url: "https://www.oclaundry.com/", img: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=400&fit=crop", desc: "Dominated Orange County laundry services market with first page rankings", ranking: "1st Page for 5 keywords", date: "July 2025" },
  { title: "YorkeLee Home Decor", url: "https://yorkelee.com.au/", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop", desc: "Achieved first page rankings for competitive home decor keywords", traffic: "+180%", ranking: "#1 on Google", conversion: "12.5%", date: "January 2025" },
  { title: "Seattle Gold Grillz", url: "https://seattlegoldgrillz.com/", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop", desc: "Dominated local and national jewelry search results", traffic: "+220%", ranking: "Top 3 positions", conversion: "18.2%", date: "December 2024" },
  { title: "Dolphin Suturs", url: "https://dolphinsuturs.com/", img: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&h=400&fit=crop", desc: "From not ranked to top 10 positions for all suture manufacturing keywords in India", traffic: "+450%", ranking: "Rank #3-8 (from not in top 100)", date: "November 2024" },
  { title: "Konnect ERP", url: "https://konnecterp.com/", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", desc: "Top 10 rankings for ERP software across multiple Indian manufacturing markets", ranking: "Rank #3-9 (from not in top 100)", date: "November 2024" },
  { title: "Rainy Filters", url: "https://rainyfilters.com/", img: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=600&h=400&fit=crop", desc: "Achieved #1 rankings for rainwater harvesting in India - dominating the market", traffic: "+520%", ranking: "#1-4 positions (from not in top 100)", date: "October 2024" },
  { title: "HII Bangalore", url: "https://hiibangalore.com/", img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop", desc: "Multiple #1 rankings for catering and event services in Bangalore", ranking: "#1-5 positions (from not in top 100)", date: "September 2024" },
  { title: "Music Box Attic", url: "https://musicboxattic.com/", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop", desc: "From page 2 to #1 for antique music box keywords", traffic: "+190%", ranking: "#1-6 positions", date: "August 2024" },
  { title: "Bespoke Coach", url: "https://bespokecoach.com/", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop", desc: "Top 10 rankings for luxury Mercedes Sprinter customization services", ranking: "Rank #5-7 (from not in top 100)", date: "July 2024" },
  { title: "Children's Home Healthcare", url: "https://childrenshha.com/", img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop", desc: "Multiple #1 rankings for pediatric home healthcare services", ranking: "#1-5 positions (from not in top 100)", conversion: "24.5%", date: "June 2024" },
  { title: "Greediersocialmedia UK", url: "https://greediersocialmedia.co.uk/", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop", desc: "Achieved #1 rankings for social media growth services in UK market", ranking: "#1-2 positions in Google UK", date: "May 2024" },
  { title: "ATL Systems UK", url: "https://atlsystems.co.uk/", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop", desc: "Five #1 rankings for pharmacy software and MHRA compliance solutions", ranking: "#1 for all 5 keywords (from not in top 100)", date: "April 2024" },
  { title: "Clean Group Australia", url: "https://www.clean-group.com.au/", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop", desc: "Dominated Australian commercial cleaning market with multiple #1 rankings", traffic: "+380%", ranking: "#1 for 6 major keywords", date: "March 2024" },
  { title: "Ageless Laser Centres Canada", url: "https://agelesslasercentres.com/", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop", desc: "Top rankings for cosmetic procedures in Victoria BC market", ranking: "#1-3 positions (from not in top 100)", date: "February 2024" },
  { title: "Persian Rugs Australia", url: "https://persianrugsaustralia.com.au/", img: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=400&fit=crop", desc: "Multiple #1 and #2 rankings for Persian and Oriental rugs in Australia", ranking: "#1-2 positions (from not in top 100)", date: "January 2024" },
];

type Tab = "ranking" | "traffic" | "sales";

const tabs: { id: Tab; label: string; icon: React.ComponentType<{ className?: string }>; title: string; desc: string }[] = [
  { id: "ranking", label: "Ranking Results", icon: Award, title: "Ranking Results", desc: "See how we've helped clients achieve top rankings on search engines" },
  { id: "traffic", label: "Traffic Results", icon: TrendingUp, title: "Traffic Results", desc: "Massive organic traffic growth delivered for our clients" },
  { id: "sales", label: "Sales Results", icon: BarChart3, title: "Sales Results", desc: "Real conversion and revenue impact from our SEO campaigns" },
];

function CaseStudiesPage() {
  return (
    <SiteLayout>
      <PageHero title="Case Studies" subtitle="Handpicked projects showcasing our approach to growth systems — real brands, real strategies, real results." />

      {/* Featured case studies */}
      <section className="py-10 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto space-y-12">
          {cases.map((c, i) => (
            <article key={c.name} className={`grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <img src={c.img} alt={`${c.name} case study showcase`} className="w-full h-72 md:h-full object-cover" loading="lazy" />
              <div className="p-8">
                <div className="text-xs uppercase tracking-widest text-blue-600 font-semibold">{c.cat}</div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-2">{c.name}</h2>
                <div className="flex items-center gap-2 mt-3 text-green-600 font-bold">
                  <TrendingUp className="w-5 h-5" /> {c.metric}
                </div>
                <p className="text-slate-600 leading-relaxed mt-4">{c.summary}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {c.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-700">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3 mt-6">
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 inline-flex items-center gap-2">
                    View Live <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link to="/contact" className="px-5 py-2.5 rounded-md border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-100">
                    Discuss Your Project
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Track record (moved from Experience) */}
      <TrackRecord />
    </SiteLayout>
  );
}

function TrackRecord() {
  const [tab, setTab] = useState<Tab>("ranking");
  const active = tabs.find((t) => t.id === tab)!;

  const filtered = results.filter((r) => {
    if (tab === "ranking") return !!r.ranking;
    if (tab === "traffic") return !!r.traffic;
    if (tab === "sales") return !!r.conversion;
    return true;
  });

  return (
    <section className="py-12 px-4 bg-white border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Our Track Record</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Real results from real clients. Explore our proven success in SEO, traffic growth, and digital marketing excellence.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center bg-slate-50 rounded-lg border border-slate-200 p-1 shadow-sm">
            {tabs.map((t) => {
              const isActive = t.id === tab;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold transition ${
                    isActive ? "bg-blue-600 text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <t.icon className="w-4 h-4" /> {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active section header */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <active.icon className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-lg">{active.title}</h3>
            <p className="text-sm text-slate-600">{active.desc}</p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r) => (
            <div key={r.title + r.date} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="h-48 overflow-hidden">
                <img src={r.img} alt={`${r.title} SEO results`} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-slate-800 mb-1">{r.title}</h4>
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline mb-3">
                  Visit Website <ExternalLink className="w-3 h-3" />
                </a>
                <p className="text-sm text-slate-600 mb-4">{r.desc}</p>
                <div className="space-y-2 text-sm border-t border-slate-100 pt-3">
                  {r.traffic && <Row label="Traffic Increase" value={r.traffic} valueClass="text-green-600 font-bold" />}
                  {r.ranking && <Row label="Ranking" value={r.ranking} valueClass="text-blue-600 font-semibold" />}
                  {r.conversion && <Row label="Conversion" value={r.conversion} valueClass="text-purple-600 font-semibold" />}
                </div>
                <div className="text-xs text-slate-500 mt-3">{r.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-slate-50 rounded-2xl border border-slate-200 p-10 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-800 mb-3">Ready to Join Our Success Stories?</h3>
          <p className="text-slate-600 mb-6">Let us help you achieve similar results. Start your journey to digital success today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/13312782900" className="px-6 py-3 rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold">Get Started</a>
            <Link to="/contact" className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, valueClass = "" }: { label: string; value: string; valueClass?: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-slate-500">{label}:</span>
      <span className={valueClass}>{value}</span>
    </div>
  );
}
