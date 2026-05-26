import type { NextConfig } from "next";

// In dev: demos are proxied to the old site running on localhost:3001
// In production (Netlify): set DEMO_ORIGIN=https://benniejiga.pro in env vars
const demoOrigin = process.env.DEMO_ORIGIN || "http://localhost:3001";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/demo/:path*",
        destination: `${demoOrigin}/demo/:path*`,
      },
      {
        source: "/Multiple_POV_Scenario/:path*",
        destination: `${demoOrigin}/Multiple_POV_Scenario/:path*`,
      },
    ];
  },
};

export default nextConfig;
