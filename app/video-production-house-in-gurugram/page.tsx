import { getPageMetadata } from "@/lib/seo";
import View from "@/views/VideoProductionLandingPage";

export const metadata = getPageMetadata("/video-production-house-in-gurugram", {
  title: "Video Production House In Gurugram | By Swastixa Digital",
  description:
    "Swastixa Digital is a video production company in Gurugram making brand films, ads and corporate videos for every industry. Book your free strategy call today.",
});

export default function Page() {
  return <View />;
}

