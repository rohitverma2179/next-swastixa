import { getPageMetadata } from "@/lib/seo";
import View from "@/views/Services";

export const metadata = getPageMetadata("/services");

export default function Page() {
  return <View />;
}
