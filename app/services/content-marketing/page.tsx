import { getPageMetadata, ServiceJsonLd, BreadcrumbJsonLd } from "@/lib/seo";
import View from "@/views/ContentMarketingAgency";

export const metadata = getPageMetadata("/services/content-marketing");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Content Marketing", path: "/services/content-marketing" },
        ]}
      />
      <ServiceJsonLd name="Content Marketing Services Agency" path="/services/content-marketing" />
      <View />
    </>
  );
}
