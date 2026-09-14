import { getPageMetadata } from "@/lib/seo";
import View from "@/views/Reels";

export const metadata = getPageMetadata("/work/reels");

export default function Page() {
  return <View />;
}
