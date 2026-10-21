import { getPageMetadata } from "@/lib/seo";
import View from "@/views/SocialMediaMarketingAgency";

export const metadata = getPageMetadata("/services/social-media-marketing");

export default function Page() {
  return <View />;
}
