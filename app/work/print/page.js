import { getPageMetadata } from "@/lib/seo";
import View from "@/views/Print";

export const metadata = getPageMetadata("/work/print");

export default function Page() {
  return <View />;
}
