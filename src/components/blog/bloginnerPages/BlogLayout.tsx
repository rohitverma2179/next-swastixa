import BlogHero from "./BlogHero";
import BlogContent from "./BlogContent";
import FAQ from "../../faq/FAQ";

export default function BlogLayout({ blog }) {
  return (
    <main className="min-h-screen bg-black px-4 pb-16 pt-32 text-white md:px-8 lg:px-16">
      <div className="max-w-[900px] mx-auto">
        <BlogHero hero={blog.hero} slug={blog.slug} />

        <div className="mt-12 md:mt-20">
          <BlogContent content={blog.content} />
        </div>

        {/* FAQ Section */}
        {blog.faq && blog.faq.length > 0 && (
          <div className="mt-20 pt-10 border-t border-white/10">
            <FAQ faqs={blog.faq} />
          </div>
        )}
      </div>
    </main>
  );
}
