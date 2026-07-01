# BrainBoxWorld Vercel Deployment Checklist

## Application type detected

This project is **TanStack Start**: a React 19 + Vite application with SSR, file-based routing, and server/API routes powered by Nitro. It is **not** a plain Vite SPA and must **not** use an `/(.*) -> /index.html` rewrite.

## Vercel settings

- **Framework Preset:** Other / null
- **Install Command:** `npm install`
- **Build Command:** `npm run build`
- **Output Directory:** leave empty in the Vercel dashboard

The build emits Vercel Build Output API files to `.vercel/output` through Nitro's `vercel` preset.

## Required Environment Variables

Set these in Vercel Project Settings → Environment Variables for Production, Preview, and Development as needed.

### Required for correct production URLs/SEO

- `VITE_SITE_URL` — final public site URL, e.g. `https://your-domain.com`
- `SITE_URL` — same final public site URL for server routes/functions

### Required for Supabase forms/API routes

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

### Optional notifications

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `LOVABLE_API_KEY`
- `LEADS_FROM_EMAIL`
- `LEADS_SENDER_DOMAIN`

## Important notes

- Do not add SPA rewrites to `vercel.json`; TanStack Start SSR handles refresh/direct URL access.
- Do not set an Output Directory in Vercel; Nitro generates `.vercel/output` automatically.
- The API endpoints `/api/public/leads`, `/api/public/contact`, `/api/public/audit`, `/sitemap.xml`, and `/robots.txt` are served by the Vercel server function.