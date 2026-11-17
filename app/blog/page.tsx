import { getPageMetadata, BreadcrumbJsonLd } from "@/lib/seo";
import View from "@/views/Blog";
import { blogs } from "@/data/blogs";

export const metadata = getPageMetadata("/blog");

export default function Page() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Swastixa Digital Marketing Blog",
    description: "Practical digital marketing, SEO, advertising, social media and branding guides.",
    url: "https://swastixa.com/blog",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogs.map((blog, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://swastixa.com/blog/${blog.slug}`,
        name: blog.hero?.metaTitle || blog.slug,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />
      <View />
    </>
  );
}
