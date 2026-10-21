import { getPageMetadata } from "@/lib/seo";
import View from "@/views/VideoProductionHouse";

export const metadata = getPageMetadata("/services/video-production-house");

export default function Page() {
  return <View />;
}
