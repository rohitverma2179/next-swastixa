import { blogCoverSources } from "@/lib/blogImages";

export default function BlogHero({ hero, slug }) {
  const cover = blogCoverSources(slug);
  return (
    <section className="flex flex-col gap-8 md:gap-12">
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
          {hero.metaTitle}
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
          {hero.description}
        </p>
      </div>

      <div className="relative group overflow-hidden rounded-2xl md:rounded-3xl border border-white/10">
        <img
          src={cover.large}
          srcSet={`${cover.small} 640w, ${cover.large} 1200w`}
          sizes="(max-width: 900px) 100vw, 900px"
          alt={hero.metaTitle}
          width="1200"
          height="675"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-auto min-h-[300px] md:max-h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
      </div>
    </section>
  );
}



