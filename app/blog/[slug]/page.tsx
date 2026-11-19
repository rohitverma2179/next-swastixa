import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import { getBlogMetadata, BreadcrumbJsonLd, FaqJsonLd } from "@/lib/seo";
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

  const desktopImg = blog.hero?.image;
  const mobileImg =
    blog.hero?.mobileImage ||
    (desktopImg ? desktopImg.replace(/\.webp$/, "-mobile.webp") : desktopImg);

  const heroImg = desktopImg
    ? (desktopImg.startsWith("http") ? desktopImg : `https://swastixa.com${desktopImg}`)
    : "https://cdn.swastixa.com/Swastixa_white.png";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.hero?.metaTitle || blog.slug,
    description: blog.hero?.description || "",
    image: [heroImg],
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
      {desktopImg && (
        <>
          <link
            rel="preload"
            as="image"
            href={mobileImg}
            media="(max-width: 768px)"
            type="image/webp"
            fetchPriority="high"
          />
          <link
            rel="preload"
            as="image"
            href={desktopImg}
            media="(min-width: 769px)"
            type="image/webp"
            fetchPriority="high"
          />
        </>
      )}
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
      {blog.faq && blog.faq.length > 0 && <FaqJsonLd faqs={blog.faq} />}
      <View blog={blog} />
    </>
  );
}
