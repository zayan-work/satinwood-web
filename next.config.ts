import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Clean URLs with no trailing slash, so paths match the page canonicals exactly
  // (https://www.satinwoodtalent.com/team, not /team/). This is the Next.js
  // default; pinned here so it can't drift.
  trailingSlash: false,

  // YouTube video thumbnails (advisory + team podcast sections) via next/image.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },

  // Serve the Sveltia CMS admin (public/admin/index.html) at the clean /admin
  // URL. Next does not do directory-index resolution for static files, so the
  // bare /admin path 404s without this. The CMS uses hash routing, so only the
  // entry needs rewriting; /admin/config.yml resolves to the static file.
  async rewrites() {
    return [{ source: "/admin", destination: "/admin/index.html" }];
  },

  // Domain routing for the satinwoodtalent.com migration. All canonical tags use
  // https://www.satinwoodtalent.com, so every other host 301s onto it.
  // http→https is handled at the host/reverse proxy (Coolify).
  async redirects() {
    return [
      // 1. The advisory brand: send all satinwoodgroup.com traffic to /advisory.
      {
        source: "/:path*",
        has: [{ type: "host", value: "(?<host>.*satinwoodgroup\\.com)" }],
        destination: "https://www.satinwoodtalent.com/advisory",
        permanent: true,
      },
      // 2. Legacy domain: forward old satinwood.co traffic (apex + www) path-for-path.
      {
        source: "/:path*",
        has: [{ type: "host", value: "(?<host>.*satinwood\\.co)" }],
        destination: "https://www.satinwoodtalent.com/:path*",
        permanent: true,
      },
      // 3. Canonicalize the new apex onto www, matching the canonical tags.
      {
        source: "/:path*",
        has: [{ type: "host", value: "satinwoodtalent.com" }],
        destination: "https://www.satinwoodtalent.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
