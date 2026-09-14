import { getPageMetadata } from "@/lib/seo";
import View from "@/views/WebsiteDevelopment";

export const metadata = getPageMetadata("/services/website-development");

export default function Page() {
  return <View />;
}
