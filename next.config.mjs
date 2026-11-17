/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allows CI/production builds to use an isolated cache while `next dev` is running.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // Pure static site - build-time HTML generation (SSG), NO server-side rendering at runtime.
  output: "export",
  images: {
    // Static export: use plain <img> tags (project already uses <img> everywhere)
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Better tree-shaking for icon libraries
    optimizePackageImports: ["lucide-react", "react-icons", "framer-motion", "gsap", "lenis"],
  },
};

export default nextConfig;
