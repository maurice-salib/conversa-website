import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "https://conversa-app-psi.vercel.app/",
      },
      {
        source: "/login/:path*",
        destination: "https://conversa-app-psi.vercel.app/:path*",
      },
      // Proxy the app's API routes so client-side fetch calls work
      {
        source: "/api/:path*",
        destination: "https://conversa-app-psi.vercel.app/api/:path*",
      },
      {
        source: "/medipay",
        destination: "https://conversa-app-psi.vercel.app/medipay",
      },
      {
        source: "/medipay/:path*",
        destination: "https://conversa-app-psi.vercel.app/medipay/:path*",
      },
    ];
  },
};

export default nextConfig;
