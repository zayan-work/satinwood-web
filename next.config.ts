import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Clean URLs with no trailing slash, so paths match the page canonicals exactly
  // (https://www.satinwood.co/team, not /team/). This is the Next.js default;
  // pinned here so it can't drift.
  trailingSlash: false,

  // Canonicalize the apex domain onto www with a 301, matching the canonical tags
  // (which all use https://www.satinwood.co). http→https is handled at the host.
  // If you deploy on Vercel, you can instead set this redirect in the domain
  // settings; keeping it here makes it host-agnostic.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "satinwood.co" }],
        destination: "https://www.satinwood.co/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
