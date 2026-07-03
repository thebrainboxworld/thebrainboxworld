import { useState } from "react";

/**
 * Premium interactive logo wall.
 * Icons load from Simple Icons CDN in full brand color, rendered monochrome
 * by default and revealed in color on hover, with a glow + tooltip.
 */

interface Platform {
  name: string;
  slug?: string; // simpleicons slug
}

const platforms: Platform[] = [
  { name: "Shopify", slug: "shopify" },
  { name: "WordPress", slug: "wordpress" },
  { name: "WooCommerce", slug: "woocommerce" },
  { name: "Webflow", slug: "webflow" },
  { name: "Framer", slug: "framer" },
  { name: "Lovable" },
  { name: "Supabase", slug: "supabase" },
  { name: "Firebase", slug: "firebase" },
  { name: "Vercel", slug: "vercel" },
  { name: "Cloudflare", slug: "cloudflare" },
  { name: "Stripe", slug: "stripe" },
  { name: "Paystack" },
  { name: "Flutterwave" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Zapier", slug: "zapier" },
  { name: "Make", slug: "make" },
  { name: "OpenAI", slug: "openai" },
  { name: "Claude", slug: "anthropic" },
  { name: "Gemini", slug: "googlegemini" },
  { name: "Meta", slug: "meta" },
  { name: "Google Ads", slug: "googleads" },
  { name: "TikTok", slug: "tiktok" },
  { name: "Instagram", slug: "instagram" },
  { name: "LinkedIn", slug: "linkedin" },
  { name: "YouTube", slug: "youtube" },
  { name: "WhatsApp", slug: "whatsapp" },
  { name: "Telegram", slug: "telegram" },
  { name: "Analytics", slug: "googleanalytics" },
  { name: "Tag Manager", slug: "googletagmanager" },
  { name: "Figma", slug: "figma" },
  { name: "Canva", slug: "canva" },
  { name: "Photoshop", slug: "adobephotoshop" },
  { name: "Illustrator", slug: "adobeillustrator" },
  { name: "Notion", slug: "notion" },
  { name: "GitHub", slug: "github" },
];

function LogoTile({ p, index }: { p: Platform; index: number }) {
  const [failed, setFailed] = useState(false);
  const showIcon = p.slug && !failed;

  return (
    <div
      className="group/logo relative reveal-zoom"
      style={{ transitionDelay: `${(index % 12) * 40}ms` }}
    >
      <div className="relative flex flex-col items-center justify-center gap-3 aspect-square rounded-2xl glass border border-white/10 transition-all duration-500 group-hover/logo:-translate-y-1.5 group-hover/logo:border-indigo-400/40 group-hover/logo:shadow-[0_20px_50px_-20px_rgba(79,70,229,0.7)]">
        {/* hover glow */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500 bg-[radial-gradient(120px_80px_at_50%_20%,rgba(129,140,248,0.25),transparent_70%)]" />

        {showIcon ? (
          <img
            src={`https://cdn.simpleicons.org/${p.slug}`}
            alt={`${p.name} logo`}
            loading="lazy"
            onError={() => setFailed(true)}
            className="w-9 h-9 md:w-10 md:h-10 object-contain transition-all duration-500 grayscale opacity-60 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 group-hover/logo:scale-110"
          />
        ) : (
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/30 to-violet-500/30 border border-white/10 flex items-center justify-center text-sm font-bold text-indigo-200 transition-all duration-500 group-hover/logo:scale-110">
            {p.name.slice(0, 2)}
          </div>
        )}

        <span className="text-[11px] md:text-xs text-slate-400 group-hover/logo:text-white transition-colors duration-300 text-center px-1 leading-tight">
          {p.name}
        </span>
      </div>

      {/* tooltip */}
      <div className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap rounded-md bg-[#0a0a1a] px-2.5 py-1 text-[11px] font-medium text-white opacity-0 translate-y-1 border border-white/10 shadow-lg transition-all duration-300 group-hover/logo:opacity-100 group-hover/logo:translate-y-0">
        {p.name}
        <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#0a0a1a] border-b border-r border-white/10" />
      </div>
    </div>
  );
}

export function PlatformWall() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3 md:gap-4 max-w-6xl mx-auto">
      {platforms.map((p, i) => (
        <LogoTile key={p.name} p={p} index={i} />
      ))}
    </div>
  );
}
