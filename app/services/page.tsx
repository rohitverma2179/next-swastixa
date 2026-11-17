import { getPageMetadata, BreadcrumbJsonLd } from "@/lib/seo";
import View from "@/views/Services";

export const metadata = getPageMetadata("/services");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      <View />
    </>
  );
}
