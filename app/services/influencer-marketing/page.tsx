import { getPageMetadata, ServiceJsonLd, BreadcrumbJsonLd } from "@/lib/seo";
import View from "@/views/InfluencerMarketingAgency";

export const metadata = getPageMetadata("/services/influencer-marketing");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Influencer Marketing", path: "/services/influencer-marketing" },
        ]}
      />
      <ServiceJsonLd name="Influencer Marketing Agency" path="/services/influencer-marketing" />
      <View />
    </>
  );
}


