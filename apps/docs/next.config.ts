import type { NextConfig } from "next";
import path from "path";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  experimental: {
    webpackBuildWorker: false,
  },
  distDir: isDev ? ".next/dev" : ".next/build",
  outputFileTracingRoot: path.join(__dirname, "../../"),
};

export default nextConfig;
