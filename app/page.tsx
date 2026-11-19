import { getPageMetadata } from "@/lib/seo";
import View from "@/views/Home";

export const metadata = getPageMetadata("/");

export default function Page() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/posters/swastixa-hero-poster.webp"
        type="image/webp"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="video"
        href="/swastixa-top-update.mp4"
        type="video/mp4"
        fetchPriority="high"
      />
      <View />
    </>
  );
}
