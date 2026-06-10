import type { MetadataRoute } from "next";

const BASE = "https://www.satinwood.co";

// Static publish date for the current set of routes. Bump when content changes.
const LAST_MODIFIED = "2026-06-10";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/team`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/advisory`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
  ];
}
