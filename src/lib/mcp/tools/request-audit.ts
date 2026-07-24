import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { absoluteUrl } from "@/lib/site";

export default defineTool({
  name: "request_audit",
  title: "Request a free SEO audit",
  description: "Book a free SEO/website audit with BrainBoxWorld.",
  inputSchema: {
    name: z.string().min(1).max(120),
    email: z.string().email().max(255),
    website: z.string().min(1).max(255).describe("The website to audit."),
    goals: z.string().max(4000).optional().describe("Goals or context for the audit."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: true },
  handler: async ({ name, email, website, goals }) => {
    const res = await fetch(absoluteUrl("/api/public/leads"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        website,
        message: goals,
        service: "Free SEO Audit",
        source_page: "MCP · Audit",
      }),
    });
    const text = await res.text();
    if (!res.ok) {
      return {
        content: [{ type: "text", text: `Audit request failed (${res.status}): ${text.slice(0, 300)}` }],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: "Audit requested. You'll hear back by email shortly." }],
      structuredContent: { ok: true },
    };
  },
});
