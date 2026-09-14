import { getPageMetadata } from "@/lib/seo";
import View from "@/components/work/WebsiteDevelopment";

export const metadata = getPageMetadata("/work/website-development");

export default function Page() {
  return <View />;
}
