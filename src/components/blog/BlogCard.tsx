import { Link } from "@/lib/router";
import { GlowingBorder } from "../common/GlowingBorder";

export default function BlogCard({ blog, index = 0 }: { blog: any; index?: number }) {
    const isPriority = index === 0;
    const desktopImg = blog.image || blog.hero?.image;
    const mobileImg = blog.mobileImage || blog.hero?.mobileImage || (desktopImg ? desktopImg.replace(/\.webp$/, "-mobile.webp") : desktopImg);
    const title = blog.hero?.metaTitle || blog.hero?.subtitle || blog.hero?.title || blog.title;
    const altText = blog.title || blog.hero?.title || title || "Blog cover";

    return (
        <GlowingBorder
            data-aos-anchor-placement="top-bottom"
            containerClassName="shadow-md hover:shadow-2xl transition-all duration-300 bg-zinc-900"
            className="p-4 rounded-sm h-auto"
            borderRadius="0.8rem"
        >
            {/* IMAGE SECTION */}
            <div
                className="
                    rounded-[0.8rem]
                    w-full
                    h-[50vw]          /* Mobile */
                    sm:h-[40vw]        /* Small screens */
                    md:h-[30vw]        /* Tablets */
                    lg:h-[22vw]        /* Laptops */
                    xl:h-[38.133vh]        /* Large monitors */
                    2xl:h-[57.2vh]       /* Ultra wide screens */
                    max-h-160      /* hard safety cap */
                    overflow-hidden
                "
                style={{
                    background: "#18181b",
                    boxShadow: "rgb(110 109 109 / 25%) 1.5px 1px 2.8px inset",
                    borderRadius: "0.8rem"
                }} >
                <picture>
                    {mobileImg && <source media="(max-width: 640px)" srcSet={mobileImg} type="image/webp" />}
                    {desktopImg && <source media="(min-width: 641px)" srcSet={desktopImg} type="image/webp" />}
                    <img
                        loading={isPriority ? "eager" : "lazy"}
                        decoding="async"
                        fetchPriority={isPriority ? "high" : "low"}
                        width={600}
                        height={350}
                        src={mobileImg || desktopImg}
                        alt={altText}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </picture>
            </div>

            {/* TEXT SECTION */}
            <div className="p-[1.2rem]">
                <Link to={`/blog/${blog.slug}`}>
                    <p className="
                  text-[0.95rem]
                  text-gray-300
                  mt-[0.6rem]
                  2xl:text-[1.3rem]
                  line-clamp-2
                  cursor-pointer
                  hover:text-white
                  transition
          ">
                        {title}
                    </p>
                </Link>
            </div>

        </GlowingBorder>
    );
}
