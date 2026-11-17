const INNER_BLOG_PREFIX = "/swastixablog/swastixa-inner-blog/inner-blog/";

function safeBaseName(url: string) {
  try {
    const pathname = new URL(url).pathname;
    return pathname
      .split("/")
      .pop()!
      .replace(/\.[^.]+$/, "")
      .toLowerCase()
      .replace(/[^a-z0-9-]+/g, "-");
  } catch {
    return "";
  }
}

export function blogCoverSources(slug: string) {
  return {
    small: `/blog-images/${slug}-640.webp`,
    large: `/blog-images/${slug}-1200.webp`,
  };
}

export function localBlogContentImage(url?: string) {
  if (!url) return url;
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "cdn.swastixa.com" && parsed.pathname.includes(INNER_BLOG_PREFIX)) {
      return `/blog-images/content/${safeBaseName(url)}.webp`;
    }
  } catch {
    return url;
  }
  return url;
}
