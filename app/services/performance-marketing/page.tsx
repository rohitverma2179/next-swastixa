import { getPageMetadata } from "@/lib/seo";
import View from "@/views/PerformanceMarketingAgency";

export const metadata = getPageMetadata("/services/performance-marketing");

export default function Page() {
  return <View />;
}
