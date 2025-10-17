import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  basePath: "/nicole.coimbra",
  assetPrefix: "/nicole.coimbra/",
  distDir: "out",
};

export default nextConfig;
