import { getPageMetadata } from "@/lib/seo";
import View from "@/views/Blog";

export const metadata = getPageMetadata("/blog");

export default function Page() {
  return <View />;
}
