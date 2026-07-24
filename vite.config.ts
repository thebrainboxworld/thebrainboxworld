import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { mcpPlugin } from "@lovable.dev/mcp-js/stacks/tanstack/vite";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // This project is TanStack Start (React + Vite SSR), not a static SPA.
  // Nitro's Vercel preset emits the Build Output API bundle at .vercel/output,
  // including one catch-all server function so direct visits/refreshes never 404.
  nitro: { preset: "vercel" },
  plugins: [mcpPlugin()],
});
