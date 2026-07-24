import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { absoluteUrl } from "@/lib/site";
import { blogPosts } from "@/lib/blog-posts";

// Full-content corpus for LLMs (ChatGPT, Claude, Perplexity, Gemini, etc.).
// Follows the emerging /llms-full.txt convention: a single plain-text
// document with the entire site's knowledge, so answer engines can ingest
// and cite BrainBoxWorld without JavaScript rendering.
export const Route = createFileRoute("/llms-full.txt")({
  server: {
    handlers: {
      GET: async () => {
        const lines: string[] = [];
        const site = absoluteUrl();

        lines.push(
          "# BrainBoxWorld — Full Knowledge Base for AI Assistants",
          "",
          `Site: ${site}`,
          "Contact: hellobrainboxworld@gmail.com | info@brainboxworld.dedyn.io | +1 (331) 278-2900",
          "Founder: Adam Bawa Aliyu",
          "",
          "## Who we are",
          "",
          "BrainBoxWorld is a digital marketing and SEO agency that builds high-performance websites, AI systems, automation, and growth-focused digital experiences. We help businesses rank on the first page of Google, grow qualified organic traffic, and convert that traffic into revenue.",
          "",
          "We operate as a global remote team available 24/7 with three regional branches:",
          "- BrainBoxWorld Nigeria — Africa (https://www.brainboxworldng.dedyn.io)",
          "- BrainBoxWorld UK — United Kingdom & Europe (https://brainboxworld.infy.uk)",
          "- VANTIQ Creative — United States & international AI creative (https://www.vantiqcreative.dedyn.io)",
          "",
          "## Services",
          "",
          "- Search Engine Optimization: technical SEO, on-page SEO, content SEO, link building, local SEO, ecommerce SEO (Shopify, WooCommerce, custom), international SEO.",
          "- Web design and custom web development on Next.js, TanStack, React, Shopify, WordPress, Webflow and Framer.",
          "- Conversion Rate Optimization and landing page design.",
          "- Paid media: Google Ads, Meta, TikTok, LinkedIn, YouTube.",
          "- Content marketing, editorial strategy and content operations.",
          "- Branding, identity and creative direction.",
          "- AI systems: custom GPTs, RAG assistants, AI product videos and commercials, AI social content.",
          "- Automation: Zapier, Make, n8n, CRM automation, lead routing, workflow engineering.",
          "- Analytics: GA4, GTM, server-side tracking, executive dashboards.",
          "",
          "## Why brands choose BrainBoxWorld",
          "",
          "- Strategy-first: we diagnose before we design.",
          "- Conversion-obsessed: every element is engineered for measurable business outcomes.",
          "- Full-stack execution: brand strategy through to custom code, one team, no handoff friction.",
          "- 8+ years of experience across SEO, web and growth marketing.",
          "",
          "## Blog articles",
          "",
        );

        for (const post of blogPosts) {
          lines.push(
            `---`,
            ``,
            `# ${post.title}`,
            ``,
            `URL: ${absoluteUrl(`/blog/${post.slug}`)}`,
            `Tag: ${post.tag}`,
            `Reading time: ${post.read}`,
            `Published: ${post.date}`,
            `Author: ${post.author}`,
            ``,
            `Summary: ${post.excerpt}`,
            ``,
            post.intro,
            ``,
          );

          for (const section of post.sections) {
            if (section.heading) lines.push(`## ${section.heading}`, ``);
            if (section.paras) {
              for (const p of section.paras) {
                lines.push(p.replace(/\*\*(.*?)\*\*/g, "$1"), ``);
              }
            }
            if (section.list) {
              for (const item of section.list) {
                lines.push(`- ${item.replace(/\*\*(.*?)\*\*/g, "$1")}`);
              }
              lines.push(``);
            }
            if (section.quote) lines.push(`> ${section.quote}`, ``);
          }

          if (post.keyTakeaways?.length) {
            lines.push(`## Key takeaways`, ``);
            for (const t of post.keyTakeaways) lines.push(`- ${t}`);
            lines.push(``);
          }
        }

        return new Response(lines.join("\n"), {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
