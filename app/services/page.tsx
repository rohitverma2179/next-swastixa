import { getPageMetadata, BreadcrumbJsonLd, FaqJsonLd } from "@/lib/seo";
import View from "@/views/Services";

export const metadata = getPageMetadata("/services");

const serviceFaqs = [
  {
    question: "What services does Swastixa offer?",
    answer:
      "Swastixa is a full-service digital marketing agency offering Content Marketing, Social Media Marketing, Performance Marketing, Website Development, Video Production, Influencer Marketing, and Packaging & Design solutions.",
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer:
      "Yes. We partner with startups, SMEs, established enterprises, and growing brands across diverse industries, tailoring our strategies to match each business's goals and stage of growth.",
  },
  {
    question: "How do you develop a marketing strategy?",
    answer:
      "Every project begins with understanding your business, target audience, competitors, and objectives. Based on these insights, we create a customised strategy designed to deliver measurable results.",
  },
  {
    question: "Can I choose only one service?",
    answer:
      "Absolutely. Whether you need a new website, social media management, content creation, or performance marketing, you can opt for individual services or an integrated digital marketing solution.",
  },
  {
    question: "Do you create customised marketing plans?",
    answer:
      "Yes. We don't believe in one-size-fits-all solutions. Every strategy is developed around your industry, audience, business objectives, and growth priorities.",
  },
  {
    question: "Which social media platforms do you manage?",
    answer:
      "We create and manage content for Instagram, Facebook, LinkedIn, YouTube, and other platforms based on where your audience is most active.",
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      <FaqJsonLd faqs={serviceFaqs} />
      <View />
    </>
  );
}
