import { getPageMetadata } from "@/lib/seo";
import View from "@/views/SeoAgency";

export const metadata = getPageMetadata("/services/seo-agency");

export default function Page() {
  return <View />;
}
