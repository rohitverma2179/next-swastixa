import { getPageMetadata } from "@/lib/seo";
import View from "@/views/ContentMarketingAgency";

export const metadata = getPageMetadata("/services/content-marketing");

export default function Page() {
  return <View />;
}
