import React from "react";

function BlogHero({
  hero,
}: {
  hero: {
    metaTitle?: string;
    title?: string;
    description?: string;
    image: string;
    mobileImage?: string;
  };
}) {
  const desktopImage = hero.image;
  const mobileImage =
    hero.mobileImage ||
    (desktopImage ? desktopImage.replace(/\.webp$/, "-mobile.webp") : desktopImage);

  return (
    <section className="flex flex-col gap-8 md:gap-12">
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
          {hero.metaTitle || hero.title}
        </h1>
        {hero.description && (
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            {hero.description}
          </p>
        )}
      </div>

      <div className="relative group overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 w-full aspect-[16/9] bg-zinc-900">
        <picture className="w-full h-full block">
          <source
            media="(max-width: 768px)"
            srcSet={mobileImage}
            type="image/webp"
            width={640}
            height={360}
          />
          <img
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            width={1200}
            height={675}
            src={desktopImage}
            alt={hero.title || hero.metaTitle || "Blog Article Cover Image"}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </picture>
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

export default BlogHero;
