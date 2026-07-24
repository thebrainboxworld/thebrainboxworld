import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { blogPosts } from "@/lib/blog-posts";

export default defineTool({
  name: "get_blog_post",
  title: "Get blog post",
  description: "Get the full content of a BrainBoxWorld blog post by slug.",
  inputSchema: {
    slug: z.string().min(1).describe("The blog post slug, from list_blog_posts."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) {
      return {
        content: [{ type: "text", text: `No blog post found for slug: ${slug}` }],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(post, null, 2) }],
      structuredContent: { post },
    };
  },
});
