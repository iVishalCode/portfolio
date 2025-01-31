import type { NextConfig } from "next";
import withMDX from "@next/mdx";

const nextConfig: NextConfig = withMDX()({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
});

export default nextConfig;
