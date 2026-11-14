import { getPageMetadata, BreadcrumbJsonLd, FaqJsonLd } from "@/lib/seo";
import View from "@/views/Faq";
import { allFaqs } from "@/data/faqData";

export const metadata = getPageMetadata("/frequently-asked-questions");

export default function Page() {
  const schemaFaqs = allFaqs.map((faq) => {
    const textParts: string[] = [];
    if (faq.paragraphsBefore) textParts.push(...faq.paragraphsBefore);
    if (faq.bulletPoints) textParts.push(...faq.bulletPoints.map((b) => `• ${b}`));
    if (faq.numberedPoints) textParts.push(...faq.numberedPoints.map((n, i) => `${i + 1}. ${n}`));
    if (faq.paragraphsAfter) textParts.push(...faq.paragraphsAfter);

    return {
      question: faq.question,
      answer: textParts.join("\n\n"),
    };
  });

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Frequently Asked Questions", path: "/frequently-asked-questions" },
        ]}
      />
      <FaqJsonLd faqs={schemaFaqs} />
      <View />
    </>
  );
}
