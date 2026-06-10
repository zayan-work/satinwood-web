import type { MetadataRoute } from "next";

const BASE = "https://www.satinwood.co";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/team`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/advisory`, changeFrequency: "monthly", priority: 0.7 },
  ];
}
