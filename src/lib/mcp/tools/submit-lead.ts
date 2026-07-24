import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { absoluteUrl } from "@/lib/site";

async function postLead(payload: Record<string, unknown>) {
  const res = await fetch(absoluteUrl("/api/public/leads"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Lead submission failed (${res.status}): ${text.slice(0, 300)}`);
  }
  try {
    return JSON.parse(text);
  } catch {
    return { ok: true };
  }
}

export default defineTool({
  name: "submit_lead",
  title: "Submit a lead",
  description:
    "Submit a general lead to BrainBoxWorld. Sends the same notifications as the website's contact/lead forms.",
  inputSchema: {
    name: z.string().min(1).max(120).describe("Full name of the person."),
    email: z.string().email().max(255).describe("Contact email."),
    phone: z.string().max(40).optional().describe("Phone number."),
    company: z.string().max(200).optional(),
    website: z.string().max(255).optional(),
    service: z.string().max(120).optional().describe("Service of interest, e.g. SEO."),
    message: z.string().max(4000).optional(),
    source_page: z.string().max(120).optional().describe("Where the lead originated. Defaults to 'MCP'."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: true },
  handler: async (input) => {
    try {
      const result = await postLead({ ...input, source_page: input.source_page ?? "MCP" });
      return {
        content: [{ type: "text", text: "Lead submitted successfully." }],
        structuredContent: { ok: true, result },
      };
    } catch (err) {
      return {
        content: [{ type: "text", text: err instanceof Error ? err.message : String(err) }],
        isError: true,
      };
    }
  },
});
