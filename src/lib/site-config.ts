/**
 * Central, editable business configuration for BrainBoxWorld.
 * Change values here — they propagate across the whole site.
 *
 * NOTE ON TRUST: `stats` and `testimonials` intentionally start empty.
 * Only add entries that are genuinely verified. Sections that have no
 * verified entries hide themselves automatically.
 */

export const BRAND = {
  name: "BrainBoxWorld",
  legalName: "BrainBoxWorld",
  tagline: "We Build Digital Experiences That Grow Your Business",
  intro:
    "High-converting websites, eCommerce systems, AI automation and digital growth solutions built to attract customers, increase conversions and scale your business.",
  serviceLabels: "E-commerce · Web & SaaS · AI & Automation · Digital Growth",
  description:
    "BrainBoxWorld builds high-converting websites, eCommerce systems, AI automation and digital growth systems for ambitious businesses worldwide.",
  reach:
    "Helping ambitious businesses across Africa, the UK, the US and international markets build, automate and grow online.",
} as const;

/** Primary production domain the site will move to. Kept out of hard-coded URLs. */
export const PRODUCTION_DOMAIN = "brainboxworld.com";

export const CONTACT = {
  /** Primary business email. */
  email: "hello@brainboxworld.com",
  /** Inbox that currently receives lead notifications. */
  notificationsEmail: "hellobrainboxworld@gmail.com",
  phoneDisplay: "+1 (331) 278-2900",
  whatsappNumber: "13312782900",
  calendly: "https://calendly.com/brainboxworld/30min",
  availability: "Available 24/7",
  /** We are fully remote — no physical offices are claimed. */
  location: "Remote · Working with clients worldwide",
} as const;

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsappNumber}`;

/** Only verified, existing profiles. */
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/adam-bawa-aliyu-8463a93b2",
  facebook: "https://www.facebook.com/bawaaliyuadams",
  tiktok: "https://www.tiktok.com/@brainboxworld",
  instagram: "https://www.instagram.com/brainboxproworld",
  x: "https://x.com/Brainboxworld",
} as const;

export const CTA = {
  primary: { label: "Get a Free Website Audit", to: "/audit" as const },
  primaryShort: { label: "Get Free Audit", to: "/audit" as const },
  secondary: { label: "Book a Strategy Call", href: CONTACT.calendly },
} as const;

/**
 * Verified headline results only. Each entry MUST be traceable to a real
 * project. Leave empty rather than publishing an unverified number.
 */
export type VerifiedStat = {
  value: string;
  label: string;
  /** Slug of the case study that evidences this number. */
  source: string;
};
export const VERIFIED_STATS: VerifiedStat[] = [];

/**
 * Verified third-party review ratings. Only include platforms and numbers you
 * can actually evidence. `url` links out to the public review profile.
 */
export type VerifiedRating = {
  platform: string;
  rating?: string;
  count?: string;
  url?: string;
};
export const VERIFIED_RATINGS: VerifiedRating[] = [
  { platform: "Google", rating: "5.0", count: "12+ reviews", url: "https://maps.app.goo.gl/T6viiJ1m128KwdsL9" },
  { platform: "Trustpilot", count: "14 reviews" },
  { platform: "Clutch", rating: "5.0", count: "7 reviews" },
];

/**
 * Genuine client testimonials only — never invent names, roles or quotes.
 */
export type Testimonial = {
  quote: string;
  name: string;
  company: string;
  role?: string;
  avatar?: string;
  result?: string;
  verificationUrl?: string;
};
export const TESTIMONIALS: Testimonial[] = [];

/** Technologies we genuinely work with, grouped for the trust strip. */
export const TECH_GROUPS: { title: string; items: string[] }[] = [
  { title: "E-commerce", items: ["Shopify", "WooCommerce", "WordPress"] },
  { title: "AI & Automation", items: ["OpenAI", "Claude", "Gemini", "Make", "Zapier"] },
  { title: "Development & Cloud", items: ["React", "Supabase", "Firebase", "Vercel", "Cloudflare"] },
  { title: "Marketing & Analytics", items: ["Google", "Meta", "TikTok", "Google Analytics", "Google Tag Manager"] },
];
