import ngPreview from "@/assets/previews/ng.png.asset.json";
import ukPreview from "@/assets/previews/uk.png.asset.json";
import usaPreview from "@/assets/previews/usa.png.asset.json";

export type Region = "Nigeria" | "United Kingdom" | "United States";

export interface ProjectResult {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  name: string;
  /** Ecosystem branch region — undefined for external client work. */
  region?: Region;
  regionFlag?: string;
  featured?: boolean;
  tagline: string;
  category: string;
  industry: string;
  year: string;
  overview: string;
  services: string[];
  technologies: string[];
  highlights: string[];
  results: ProjectResult[];
  url: string;
  image: string;
  accent: string; // used for glow/gradient theming
}

/* ------------------------------------------------------------------ */
/* BrainBoxWorld ecosystem — featured interactive showcases           */
/* ------------------------------------------------------------------ */

export const ecosystemProjects: Project[] = [
  {
    id: "brainboxworld-nigeria",
    name: "BrainBoxWorld Nigeria",
    region: "Nigeria",
    regionFlag: "🇳🇬",
    featured: true,
    tagline: "Growth engineering for Africa's most ambitious brands",
    category: "Digital Marketing · Web · SEO",
    industry: "Digital Agency",
    year: "2024",
    overview:
      "Our flagship African branch serving clients across Nigeria and the wider continent. From high-converting websites to full-funnel digital marketing, we help local and pan-African brands scale visibility, leads and revenue.",
    services: [
      "Digital Marketing",
      "Website Design",
      "SEO",
      "Branding",
      "Paid Advertising",
      "Business Growth",
      "Automation",
    ],
    technologies: ["React", "WordPress", "Shopify", "Google Ads", "Meta Ads", "Google Analytics"],
    highlights: [
      "Full-funnel growth systems built for the African market",
      "First-page Google rankings across competitive local niches",
      "Conversion-focused design tuned for mobile-first audiences",
    ],
    results: [
      { label: "Avg. Traffic Growth", value: "+180%" },
      { label: "Clients Served", value: "120+" },
      { label: "Markets", value: "Nigeria · Africa" },
    ],
    url: "https://www.brainboxworldng.dedyn.io",
    image: ngPreview.url,
    accent: "#4f46e5",
  },
  {
    id: "brainboxworld-uk",
    name: "BrainBoxWorld UK",
    region: "United Kingdom",
    regionFlag: "🇬🇧",
    featured: true,
    tagline: "Premium web & brand systems for the UK and Europe",
    category: "Web Design · Branding · Automation",
    industry: "Creative Agency",
    year: "2024",
    overview:
      "Our European branch, based in Birmingham, crafting premium digital experiences for UK and EU clients. We pair refined design with business automation and conversion strategy to elevate established brands.",
    services: [
      "Premium Website Design",
      "Branding",
      "Business Automation",
      "Digital Strategy",
      "Conversion Optimization",
    ],
    technologies: ["React", "Next.js", "Webflow", "Framer", "Zapier", "HubSpot"],
    highlights: [
      "Design-led experiences that build trust in seconds",
      "Automation that removes manual busywork from operations",
      "Conversion optimisation backed by analytics and testing",
    ],
    results: [
      { label: "Avg. Conversion Lift", value: "+64%" },
      { label: "Region", value: "UK · Europe" },
      { label: "Delivery", value: "End-to-end" },
    ],
    url: "https://brainboxworld.infy.uk",
    image: ukPreview.url,
    accent: "#22d3ee",
  },
  {
    id: "vantiq-creative-usa",
    name: "VANTIQ CREATIVE",
    region: "United States",
    regionFlag: "🇺🇸",
    featured: true,
    tagline: "The future of AI creative production",
    category: "AI Video · Commercials · Content",
    industry: "AI Creative Studio",
    year: "2026",
    overview:
      "Our US and international creative studio producing AI commercials, product films and social content that helps ambitious brands grow faster and stand unmistakably apart. Cinematic storytelling powered by generative AI.",
    services: [
      "AI Product Videos",
      "AI Commercials",
      "AI Social Media Content",
      "Creative Advertising",
      "Product Marketing",
      "Content Creation",
      "Digital Storytelling",
    ],
    technologies: ["OpenAI", "Runway", "Midjourney", "After Effects", "Framer", "Vercel"],
    highlights: [
      "AI-native production pipeline delivering at unprecedented speed",
      "Cinematic commercials and product films for global brands",
      "Performance creative engineered to convert, not just look good",
    ],
    results: [
      { label: "Turnaround", value: "10× faster" },
      { label: "Reach", value: "Worldwide" },
      { label: "Focus", value: "AI Creative" },
    ],
    url: "https://www.vantiqcreative.dedyn.io",
    image: usaPreview.url,
    accent: "#a78bfa",
  },
];

/* ------------------------------------------------------------------ */
/* Client work                                                         */
/* ------------------------------------------------------------------ */

export const clientProjects: Project[] = [
  {
    id: "mimi-and-co",
    name: "Mimi & Co.",
    tagline: "Fashion eCommerce built to convert",
    category: "E-Commerce · Fashion",
    industry: "Fashion & Apparel",
    year: "2024",
    overview:
      "A refined Shopify storefront and growth system for a fashion label, engineered for discovery, speed and conversion across every device.",
    services: ["Shopify Development", "CRO", "SEO", "Performance"],
    technologies: ["Shopify", "Liquid", "Google Analytics", "Klaviyo"],
    highlights: ["Rebuilt product discovery", "Sub-second storefront", "Mobile-first checkout"],
    results: [
      { label: "Revenue", value: "+2.1×" },
      { label: "Load Time", value: "0.9s" },
      { label: "Bounce", value: "-34%" },
    ],
    url: "https://mimiandco.com.au",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=800&fit=crop",
    accent: "#4f46e5",
  },
  {
    id: "retrospec",
    name: "Retrospec",
    tagline: "DTC outdoor brand growth engine",
    category: "DTC · Outdoor",
    industry: "Outdoor & Lifestyle",
    year: "2023",
    overview:
      "SEO and technical performance overhaul for an outdoor lifestyle brand, doubling organic traffic within 90 days.",
    services: ["Technical SEO", "Content Strategy", "CRO"],
    technologies: ["Shopify", "Search Console", "Ahrefs"],
    highlights: ["Doubled organic traffic", "Site-wide technical fixes", "Content engine"],
    results: [
      { label: "Organic Traffic", value: "2×" },
      { label: "Timeframe", value: "90 days" },
      { label: "Keywords", value: "+400" },
    ],
    url: "https://retrospec.com/",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=800&fit=crop",
    accent: "#22d3ee",
  },
  {
    id: "darn-tough",
    name: "Darn Tough",
    tagline: "Heritage apparel, modern experience",
    category: "Apparel · Heritage",
    industry: "Apparel",
    year: "2023",
    overview:
      "Strategic clarity and a data-backed experience rebuild for a heritage apparel brand — every decision grounded in analytics.",
    services: ["Strategy", "UX Design", "Analytics"],
    technologies: ["Shopify Plus", "GA4", "Hotjar"],
    highlights: ["Data-led redesign", "Improved AOV", "Retention systems"],
    results: [
      { label: "AOV", value: "+28%" },
      { label: "Retention", value: "+41%" },
      { label: "NPS", value: "72" },
    ],
    url: "https://darntough.com/",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1200&h=800&fit=crop",
    accent: "#a78bfa",
  },
  {
    id: "trnda",
    name: "Trnda",
    tagline: "Lifestyle brand, premium conversion",
    category: "Fashion · Lifestyle",
    industry: "Lifestyle",
    year: "2024",
    overview:
      "A premium storefront experience that converts like nothing the brand had before — positioning understood instantly.",
    services: ["Web Design", "CRO", "Brand"],
    technologies: ["Shopify", "React", "Klaviyo"],
    highlights: ["New brand experience", "Higher conversion", "Faster storefront"],
    results: [
      { label: "Conversion", value: "+58%" },
      { label: "Speed", value: "1.1s" },
      { label: "Sessions", value: "+37%" },
    ],
    url: "https://trnda.com/",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop",
    accent: "#4f46e5",
  },
  {
    id: "weightlifting-house",
    name: "Weightlifting House",
    tagline: "Sports equipment eCommerce",
    category: "Sports Equipment",
    industry: "Sports & Fitness",
    year: "2023",
    overview:
      "A performant UK store for a specialist sports equipment retailer, optimised for search visibility and conversion.",
    services: ["Store Optimization", "SEO", "Performance"],
    technologies: ["Shopify", "Search Console", "GA4"],
    highlights: ["UK market focus", "Search visibility", "Checkout optimisation"],
    results: [
      { label: "Revenue", value: "+74%" },
      { label: "Region", value: "UK" },
      { label: "Rankings", value: "Page 1" },
    ],
    url: "https://ukstore.weightliftinghouse.com/",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop",
    accent: "#22d3ee",
  },
  {
    id: "goondiwindi-cotton",
    name: "Goondiwindi Cotton",
    tagline: "Heritage cotton brand online",
    category: "Heritage · Cotton",
    industry: "Fashion & Textiles",
    year: "2023",
    overview:
      "A refined digital home for a heritage Australian cotton brand — storytelling and commerce in balance.",
    services: ["Web Design", "SEO", "Content"],
    technologies: ["Shopify", "GA4", "Klaviyo"],
    highlights: ["Brand storytelling", "SEO foundations", "Elevated UX"],
    results: [
      { label: "Traffic", value: "+92%" },
      { label: "Engagement", value: "+45%" },
      { label: "Sales", value: "+38%" },
    ],
    url: "https://goondiwindicotton.com.au/",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1200&h=800&fit=crop",
    accent: "#a78bfa",
  },
  {
    id: "benetek",
    name: "Benetek",
    tagline: "Retail lifestyle, tripled revenue",
    category: "Retail · Lifestyle",
    industry: "Retail",
    year: "2024",
    overview:
      "Rebuilt SEO and product discovery system delivering extraordinary ROI — revenue tripled after launch.",
    services: ["SEO", "Product Discovery", "CRO"],
    technologies: ["Shopify", "Ahrefs", "GA4"],
    highlights: ["Product discovery rebuild", "SEO overhaul", "Extraordinary ROI"],
    results: [
      { label: "Revenue", value: "3×" },
      { label: "ROI", value: "Extraordinary" },
      { label: "Discovery", value: "Rebuilt" },
    ],
    url: "https://shopbenetek.com/",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop",
    accent: "#4f46e5",
  },
  {
    id: "landmark-project",
    name: "The Landmark Project",
    tagline: "Adventure gear brand experience",
    category: "Adventure Gear",
    industry: "Outdoor & Adventure",
    year: "2023",
    overview:
      "A premium, adventure-inspired storefront experience with a focus on brand feel and conversion performance.",
    services: ["Web Design", "CRO", "Performance"],
    technologies: ["Shopify", "React", "GA4"],
    highlights: ["Immersive brand feel", "Higher conversion", "Fast delivery"],
    results: [
      { label: "Conversion", value: "+49%" },
      { label: "Speed", value: "1.0s" },
      { label: "AOV", value: "+22%" },
    ],
    url: "https://thelandmarkproject.com/",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=800&fit=crop",
    accent: "#22d3ee",
  },
];

export const allProjects: Project[] = [...ecosystemProjects, ...clientProjects];

/* ------------------------------------------------------------------ */
/* Client results — proof of outcomes                                  */
/* Add real MP4/YouTube/Vimeo/Drive links via the `video` field.       */
/* ------------------------------------------------------------------ */

export type ResultMediaType = "mp4" | "youtube" | "vimeo" | "drive" | "image";

export interface ClientResult {
  id: string;
  type: ResultMediaType;
  tag: string;
  title: string;
  description: string;
  /** For mp4: direct .mp4 URL. youtube/vimeo/drive: the video ID or embed src. */
  video?: string;
  poster: string;
  metrics: { label: string; value: string }[];
  /** Optional supporting analytics/before-after images shown in the lightbox. */
  images?: string[];
}

export const clientResults: ClientResult[] = [
  {
    id: "sales-proof",
    type: "image",
    tag: "Real Results",
    title: "Store Sales Breakthrough",
    description:
      "Client testimonial and dashboard showcasing a measurable revenue transformation after a full store optimisation.",
    poster: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    metrics: [
      { label: "Revenue", value: "+312%" },
      { label: "ROAS", value: "6.4×" },
      { label: "Period", value: "90 days" },
    ],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=900&fit=crop",
      "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=1400&h=900&fit=crop",
    ],
  },
  {
    id: "traffic-growth",
    type: "image",
    tag: "SEO Growth",
    title: "Organic Traffic Explosion",
    description:
      "Before-and-after analytics from a technical SEO and content programme that doubled qualified organic traffic.",
    poster: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop",
    metrics: [
      { label: "Traffic", value: "+218%" },
      { label: "Keywords", value: "+640" },
      { label: "Page 1", value: "92%" },
    ],
    images: [
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&h=900&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=900&fit=crop",
    ],
  },
  {
    id: "roas-scale",
    type: "image",
    tag: "Paid Ads",
    title: "Profitable Ad Scaling",
    description:
      "Meta and Google Ads dashboards showing consistent, profitable scaling with a rising return on ad spend.",
    poster: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&h=800&fit=crop",
    metrics: [
      { label: "ROAS", value: "5.8×" },
      { label: "Spend", value: "Scaled 4×" },
      { label: "CPA", value: "-38%" },
    ],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=900&fit=crop",
    ],
  },
];
