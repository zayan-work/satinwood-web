import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Clean URLs with no trailing slash, so paths match the page canonicals exactly
  // (https://www.satinwoodtalent.com/team, not /team/). This is the Next.js
  // default; pinned here so it can't drift.
  trailingSlash: false,

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
