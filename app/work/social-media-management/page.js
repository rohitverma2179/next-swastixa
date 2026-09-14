import { getPageMetadata } from "@/lib/seo";
import View from "@/components/work/SocialMediaManagement";

export const metadata = getPageMetadata("/work/social-media-management");

export default function Page() {
  return <View />;
}
