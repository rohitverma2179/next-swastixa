import { getPageMetadata, ServiceJsonLd, BreadcrumbJsonLd } from "@/lib/seo";
import View from "@/views/SocialMediaMarketingAgency";

export const metadata = getPageMetadata("/services/social-media-marketing");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Social Media Marketing", path: "/services/social-media-marketing" },
        ]}
      />
      <ServiceJsonLd name="Social Media Marketing Services" path="/services/social-media-marketing" />
      <View />
    </>
  );
}
