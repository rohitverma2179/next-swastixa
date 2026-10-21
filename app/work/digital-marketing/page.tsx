import { getPageMetadata } from "@/lib/seo";
import View from "@/components/work/DigitalMarketing";

export const metadata = getPageMetadata("/work/digital-marketing");

export default function Page() {
  return <View />;
}
