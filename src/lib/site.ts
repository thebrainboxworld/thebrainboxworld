export const SITE_NAME = "BrainBoxWorld";
export const DEFAULT_SITE_URL = "https://thebrainboxworld.lovable.app";

function readProcessEnv(name: string): string | undefined {
  if (typeof process === "undefined") return undefined;
  return process.env?.[name];
}

function normalizeUrl(url: string): string {
  const withProtocol = /^https?:\/\//i.test(url) ? url : `https://${url}`;
  return withProtocol.replace(/\/+$/, "");
}

export function getSiteUrl(): string {
  const env = import.meta.env as Record<string, string | undefined>;
  const candidate =
    env.VITE_SITE_URL ||
    readProcessEnv("SITE_URL") ||
    readProcessEnv("NEXT_PUBLIC_SITE_URL") ||
    readProcessEnv("VERCEL_PROJECT_PRODUCTION_URL") ||
    readProcessEnv("VERCEL_URL") ||
    DEFAULT_SITE_URL;

  return normalizeUrl(candidate);
}

export function absoluteUrl(path = ""): string {
  const base = getSiteUrl();
  if (!path) return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}