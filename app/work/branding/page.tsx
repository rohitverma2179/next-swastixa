import { getPageMetadata } from "@/lib/seo";
import View from "@/views/Branding";

export const metadata = getPageMetadata("/work/branding");

export default function Page() {
  return <View />;
}
