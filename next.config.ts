import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  devIndicators: false,
  env: {
    NEXT_PUBLIC_BUILD_TIME: String(Date.now()),
  },
  partialPrefetching: true,
  async redirects() {
    return [{ source: '/guestbook', destination: '/resume', permanent: true }];
  },
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
