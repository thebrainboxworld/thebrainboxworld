import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { blogPosts } from "@/lib/blog-posts";

export default defineTool({
  name: "list_blog_posts",
  title: "List blog posts",
  description: "List BrainBoxWorld blog posts with slug, title, tag, date, and excerpt.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = blogPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      tag: p.tag,
      date: p.date,
      read: p.read,
      excerpt: p.excerpt,
      author: p.author,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { posts: items },
    };
  },
});
