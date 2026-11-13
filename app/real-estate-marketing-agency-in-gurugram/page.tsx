import { getPageMetadata, ServiceJsonLd } from "@/lib/seo";
import View from "@/views/RealEstateMarketingAgencyInGurugram";

export const metadata = getPageMetadata("/real-estate-marketing-agency-in-gurugram", {
  title: "Real Estate Marketing Agency In Gurugram | Swastixa Digital",
  description:
    "Swastixa Digital is a real estate marketing agency in Gurgaon that helps developers and brokers get qualified buyer leads. Book your free strategy call today.",
});

export default function Page() {
  return (
    <>
      <ServiceJsonLd name="Real Estate Marketing Agency In Gurugram" path="/real-estate-marketing-agency-in-gurugram" />
      <View />
    </>
  );
}
