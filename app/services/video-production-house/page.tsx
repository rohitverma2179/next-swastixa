import { getPageMetadata, ServiceJsonLd, BreadcrumbJsonLd } from "@/lib/seo";
import View from "@/views/VideoProductionHouse";

export const metadata = getPageMetadata("/services/video-production-house");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Video Production House", path: "/services/video-production-house" },
        ]}
      />
      <ServiceJsonLd name="Video Production House" path="/services/video-production-house" />
      <View />
    </>
  );
}
