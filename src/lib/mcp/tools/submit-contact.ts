import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { absoluteUrl } from "@/lib/site";

export default defineTool({
  name: "submit_contact",
  title: "Submit a contact message",
  description:
    "Send a message through BrainBoxWorld's Contact form. The team is notified by email and Telegram.",
  inputSchema: {
    name: z.string().min(1).max(120),
    email: z.string().email().max(255),
    message: z.string().min(1).max(4000),
    company: z.string().max(200).optional(),
    service: z.string().max(120).optional(),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: true },
  handler: async (input) => {
    const res = await fetch(absoluteUrl("/api/public/leads"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...input, source_page: "MCP · Contact" }),
    });
    const text = await res.text();
    if (!res.ok) {
      return {
        content: [{ type: "text", text: `Contact submission failed (${res.status}): ${text.slice(0, 300)}` }],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: "Contact message sent. The team will reply by email." }],
      structuredContent: { ok: true },
    };
  },
});
