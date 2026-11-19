import { getPageMetadata, BreadcrumbJsonLd } from "@/lib/seo";
import View from "@/views/Blog";
import { blogs } from "@/data/blogs";

export const metadata = getPageMetadata("/blog");

export default function Page() {
  const firstBlog: any = blogs[0];
  const desktopImg = firstBlog?.hero?.image || firstBlog?.image || "/images/blogs/hacked-instagram.webp";
  const mobileImg = firstBlog?.hero?.mobileImage || firstBlog?.mobileImage || (desktopImg ? desktopImg.replace(/\.webp$/, "-mobile.webp") : desktopImg);

  return (
    <>
      {desktopImg && (
        <>
          <link
            rel="preload"
            as="image"
            href={mobileImg}
            media="(max-width: 640px)"
            type="image/webp"
            fetchPriority="high"
          />
          <link
            rel="preload"
            as="image"
            href={desktopImg}
            media="(min-width: 641px)"
            type="image/webp"
            fetchPriority="high"
          />
        </>
      )}
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
