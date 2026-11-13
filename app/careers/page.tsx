import { getPageMetadata, BreadcrumbJsonLd } from "@/lib/seo";
import View from "@/views/Careers";

export const metadata = getPageMetadata("/careers");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
        ]}
      />
      <View />
    </>
  );
}
