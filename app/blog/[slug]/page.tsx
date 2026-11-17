import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import { getBlogMetadata, BreadcrumbJsonLd } from "@/lib/seo";
import View from "@/views/BlogInner";

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return getBlogMetadata(slug);
}

export default async function Page({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.hero?.metaTitle || blog.slug,
    description: blog.hero?.description || "",
    image: blog.hero?.image ? [blog.hero.image] : ["https://cdn.swastixa.com/Swastixa_white.png"],
    url: `https://swastixa.com/blog/${slug}`,
    publisher: {
      "@type": "Organization",
      name: "Swastixa Digital",
      logo: {
        "@type": "ImageObject",
        url: "https://cdn.swastixa.com/Swastixa_white.png",
      },
    },
    author: {
      "@type": "Organization",
      name: "Swastixa Digital",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://swastixa.com/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: blog.hero?.metaTitle || blog.slug, path: `/blog/${slug}` },
        ]}
      />
      <View />
    </>
  );
}
