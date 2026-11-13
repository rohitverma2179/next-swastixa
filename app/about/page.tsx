import { getPageMetadata, BreadcrumbJsonLd } from "@/lib/seo";
import View from "@/views/About";

export const metadata = getPageMetadata("/about");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ]}
      />
      <View />
    </>
  );
}
