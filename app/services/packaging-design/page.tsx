import { getPageMetadata, ServiceJsonLd, BreadcrumbJsonLd } from "@/lib/seo";
import View from "@/views/PackagingDesign";

export const metadata = getPageMetadata("/services/packaging-design");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Packaging Design", path: "/services/packaging-design" },
        ]}
      />
      <ServiceJsonLd name="Product Packaging Design Services" path="/services/packaging-design" />
      <View />
    </>
  );
}
