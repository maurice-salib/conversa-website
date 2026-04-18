import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/login",
        destination: "https://conversa-app-psi.vercel.app/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
