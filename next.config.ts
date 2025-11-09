import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Laat Next/Turbopack weten dat dit de root is
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;