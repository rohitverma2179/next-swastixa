import { getPageMetadata, ServiceJsonLd, BreadcrumbJsonLd } from "@/lib/seo";
import View from "@/views/SeoAgency";

export const metadata = getPageMetadata("/services/seo-agency");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "SEO Agency", path: "/services/seo-agency" },
        ]}
      />
      <ServiceJsonLd name="SEO Agency & Services" path="/services/seo-agency" />
      <View />
    </>
  );
}
