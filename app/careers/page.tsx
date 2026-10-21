import { getPageMetadata } from "@/lib/seo";
import View from "@/views/Careers";

export const metadata = getPageMetadata("/careers");

export default function Page() {
  return <View />;
}
