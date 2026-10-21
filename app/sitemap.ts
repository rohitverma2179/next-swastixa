import { blogs } from "@/data/blogs";

export const dynamic = "force-static";

const BASE = "https://swastixa.com";

const staticRoutes = [
  "/",
  "/about",
  "/awards",
  "/careers",
  "/blog",
  "/privacy-policy",
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
];

export default function sitemap() {
  const blogRoutes = blogs.map((blog) => `/blog/${blog.slug}`);

  return [...staticRoutes, ...blogRoutes].map((path) => ({
    url: BASE + (path === "/" ? "/" : path),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1.0 : path.startsWith("/blog/") ? 0.6 : 0.8,
  }));
}
