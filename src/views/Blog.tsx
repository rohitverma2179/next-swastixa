import BlogGrid from "../components/blog/BlogGrid";
import { blogs } from "../data/blogs";

export default function BlogPage() {
  return (
    <main className="relative z-0 min-h-screen w-full overflow-hidden bg-black px-4 pb-16 pt-32 md:px-10 xl:px-24">
        <header className="mx-auto mb-14 max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">Digital Marketing Insights</h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
            Practical guides on SEO, paid advertising, social media, content, branding and business growth from Swastixa Digital.
          </p>
        </header>
        <BlogGrid blogs={blogs} />
    </main>
  );
}
