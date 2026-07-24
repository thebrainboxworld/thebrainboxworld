import { defineMcp } from "@lovable.dev/mcp-js";
import listBlogPosts from "./tools/list-blog-posts";
import getBlogPost from "./tools/get-blog-post";
import submitLead from "./tools/submit-lead";
import submitContact from "./tools/submit-contact";
import requestAudit from "./tools/request-audit";

export default defineMcp({
  name: "brainboxworld-mcp",
  title: "BrainBoxWorld MCP",
  version: "0.1.0",
  instructions:
    "Tools for BrainBoxWorld — a digital marketing & SEO agency. Read public blog posts, submit contact messages, submit leads, and request a free SEO audit. All submissions notify the team by email and Telegram.",
  tools: [listBlogPosts, getBlogPost, submitLead, submitContact, requestAudit],
});
