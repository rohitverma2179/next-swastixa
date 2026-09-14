import { getPageMetadata } from "@/lib/seo";
import View from "@/components/work/ProductionHouse";

export const metadata = getPageMetadata("/work/video-production");

export default function Page() {
  return <View />;
}
