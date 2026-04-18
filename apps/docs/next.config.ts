import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    webpackBuildWorker: false,
  },
  outputFileTracingRoot: path.join(__dirname, "../../"),
};

export default nextConfig;
