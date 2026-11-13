import { seoData } from "@/data/seoData";
import { blogs } from "@/data/blogs";

export const SITE_URL = "https://swastixa.com";
export const DEFAULT_IMAGE = "https://cdn.swastixa.com/Swastixa_white.png";

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
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "Swastixa Digital",
      title,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
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

export function getServiceSchema(serviceName: string, path: string, description?: string) {
  const meta = (seoData as Record<string, { title: string; description: string }>)[path] || DEFAULT_SEO;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description || meta.description,
    url: `${SITE_URL}${path}`,
    provider: {
      "@type": "Organization",
      name: "Swastixa Digital",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "India",
    },
  };
}

export function ServiceJsonLd({ name, path, description }: { name: string; path: string; description?: string }) {
  const schema = getServiceSchema(name, path, description);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = getBreadcrumbSchema(items);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
