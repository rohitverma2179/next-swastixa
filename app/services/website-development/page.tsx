import { getPageMetadata, ServiceJsonLd, BreadcrumbJsonLd } from "@/lib/seo";
import View from "@/views/WebsiteDevelopment";

export const metadata = getPageMetadata("/services/website-development");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Website Development", path: "/services/website-development" },
        ]}
      />
      <ServiceJsonLd name="Custom Website Development Services" path="/services/website-development" />
      <View />
    </>
  );
}
