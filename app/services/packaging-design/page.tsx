import { getPageMetadata } from "@/lib/seo";
import View from "@/views/PackagingDesign";

export const metadata = getPageMetadata("/services/packaging-design");

export default function Page() {
  return <View />;
}
