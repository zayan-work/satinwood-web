import type { MetadataRoute } from "next";

const SITE = "https://www.satinwood.co";

// AI search crawlers are intentionally allowed (answer-engine optimization),
// alongside the catch-all rule. Mirrors the reference robots.txt.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ClaudeBot",
  "PerplexityBot",
  "Google-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
