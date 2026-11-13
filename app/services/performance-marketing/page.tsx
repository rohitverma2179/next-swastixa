import { getPageMetadata, ServiceJsonLd, BreadcrumbJsonLd } from "@/lib/seo";
import View from "@/views/PerformanceMarketingAgency";

export const metadata = getPageMetadata("/services/performance-marketing");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Performance Marketing", path: "/services/performance-marketing" },
        ]}
      />
      <ServiceJsonLd name="Performance Marketing Agency" path="/services/performance-marketing" />
      <View />
    </>
  );
}
