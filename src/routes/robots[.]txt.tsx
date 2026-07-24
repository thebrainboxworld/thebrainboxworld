import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { absoluteUrl } from "@/lib/site";

// Explicitly allow AI crawlers so BrainBoxWorld content is indexed by
// ChatGPT (GPTBot / OAI-SearchBot), Claude (ClaudeBot / anthropic-ai),
// Perplexity (PerplexityBot), Google AI (Google-Extended), Common Crawl
// (CCBot — the corpus most open LLMs are trained on), Meta AI, Apple
// Intelligence, Amazon, You.com, Bytedance, Cohere and others.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "GoogleOther",
  "CCBot",
  "Meta-ExternalAgent",
  "FacebookBot",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "Bytespider",
  "YouBot",
  "cohere-ai",
  "DuckAssistBot",
  "MistralAI-User",
];

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () => {
        const lines: string[] = [
          "User-agent: *",
          "Allow: /",
          "",
        ];

        for (const bot of AI_CRAWLERS) {
          lines.push(`User-agent: ${bot}`, "Allow: /", "");
        }

        lines.push(
          `Sitemap: ${absoluteUrl("/sitemap.xml")}`,
          `# LLM discovery: ${absoluteUrl("/llms.txt")} & ${absoluteUrl("/llms-full.txt")}`,
        );

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
