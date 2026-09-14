import { getPageMetadata } from "@/lib/seo";
import View from "@/views/About";

export const metadata = getPageMetadata("/about");

export default function Page() {
  return <View />;
}
