import { getPageMetadata } from "@/lib/seo";
import View from "@/components/work/ProductionHouse";

export function generateStaticParams() {
  return [{ tab: "films" }, { tab: "construction" }];
}

export async function generateMetadata({ params }) {
  const { tab } = await params;
  return getPageMetadata(`/work/video-production/${tab}`);
}

export default function Page() {
  return <View />;
}
