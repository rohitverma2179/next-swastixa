import { getPageMetadata, BreadcrumbJsonLd } from "@/lib/seo";
import View from "@/views/Work";

export const metadata = getPageMetadata("/work");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ]}
      />
      <View />
    </>
  );
}
