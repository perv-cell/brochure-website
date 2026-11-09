import type { NextConfig } from "next";



const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.0.195', 'localhost'], // я добавилы
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
