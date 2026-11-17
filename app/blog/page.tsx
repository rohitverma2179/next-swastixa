import { getPageMetadata, BreadcrumbJsonLd } from "@/lib/seo";
import View from "@/views/Blog";

export const metadata = getPageMetadata("/blog");

export default function Page() {
  return (
    <>
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
