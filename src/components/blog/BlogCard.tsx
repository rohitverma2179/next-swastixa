import Link from "next/link";
import { blogCoverSources } from "@/lib/blogImages";

export default function BlogCard({ blog, priority = false }) {
  const title = blog.hero?.metaTitle || blog.hero?.title || blog.slug;
  const cover = blogCoverSources(blog.slug);

  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-md transition hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl [content-visibility:auto] [contain-intrinsic-size:520px]">
      <Link href={`/blog/${blog.slug}`} className="group block" aria-label={`Read ${title}`}>
        <div className="aspect-[16/9] w-full overflow-hidden bg-zinc-800">
          <img
            src={cover.small}
            srcSet={`${cover.small} 640w, ${cover.large} 1200w`}
            sizes="(max-width: 639px) 100vw, (max-width: 1535px) 50vw, 640px"
            alt={title}
            width="800"
            height="450"
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-5 md:p-6">
          <h2 className="line-clamp-2 text-lg font-semibold leading-snug text-gray-100 transition group-hover:text-white md:text-xl">{title}</h2>
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-400">{blog.hero?.description}</p>
        </div>
      </Link>
    </article>
  );
}
