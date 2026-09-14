import { getPageMetadata } from "@/lib/seo";
import View from "@/components/common/CommingSoon";

export const metadata = getPageMetadata("/awards");

export default function Page() {
  return <View />;
}
