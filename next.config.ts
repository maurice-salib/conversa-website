import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/lp",
        has: [{ type: "host", value: "icon-conversa.ai" }],
      },
    ];
  },
};

export default nextConfig;
