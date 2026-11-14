import { blogs } from "@/data/blogs";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://swastixa.com";

const staticRoutes = [
  "/",
  "/about",
  "/careers",
  "/blog",
  "/real-estate-marketing-agency-in-gurugram",
  "/video-production-house-in-gurugram",
  "/privacy-policy",
  "/frequently-asked-questions",
  "/services",
  "/services/website-development",
  "/services/seo-agency",
  "/services/content-marketing",
  "/services/social-media-marketing",
  "/services/performance-marketing",
  "/services/video-production-house",
  "/services/influencer-marketing",
  "/services/packaging-design",
  "/work",
  "/work/reels",
  "/work/branding",
  "/work/print",
  "/work/video-production",
  "/work/social-media-management",
  "/work/website-development",
  "/work/digital-marketing",
  "/work/video-production/construction",
  "/work/video-production/films",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const blogRoutes = blogs.map((blog) => `/blog/${blog.slug}`);
  const now = new Date();

  return [...staticRoutes, ...blogRoutes].map((path) => ({
    url: `${BASE}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1.0 : path.startsWith("/blog") ? 0.6 : 0.8,
  }));
}
