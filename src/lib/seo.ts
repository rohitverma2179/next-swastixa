import { seoData } from "@/data/seoData";
import { blogs } from "@/data/blogs";

export const SITE_URL = "https://swastixa.com";
export const DEFAULT_IMAGE = "https://swastixa.com/swastixa_192X192.png";

const DEFAULT_SEO = {
  title: "Swastixa | Digital Marketing & Web Development Agency",
  description:
    "Swastixa Digital is a full-service digital company that blends strategy, design, and technology to deliver 360° creative and digital marketing solutions, including video production, social media, and website development.",
};

export interface SeoOverrides {
  title?: string;
  description?: string;
  image?: string;
}

export function getPageMetadata(path: string, overrides: SeoOverrides = {}) {
  const d = (seoData as Record<string, { title: string; description: string }>)[path] || DEFAULT_SEO;
  const title = overrides.title || d.title;
  const description = overrides.description || d.description;
  const url = SITE_URL + (path === "/" ? "/" : path);
  const image = overrides.image || DEFAULT_IMAGE;
  return {
    title,
    description,
    alternates: { canonical: path === "/" ? "/" : path },
    openGraph: {
      type: "website",
      siteName: "Swastixa Digital",
      title,
      description,
      url,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function getBlogMetadata(slug: string) {
  const blog = (blogs as any[]).find((b) => b.slug === slug);
  if (!blog || !blog.hero) return getPageMetadata(`/blog/${slug}`);
  return getPageMetadata(`/blog/${slug}`, {
    title: blog.hero.metaTitle,
    description: blog.hero.description,
    image: blog.hero.image,
  });
}
