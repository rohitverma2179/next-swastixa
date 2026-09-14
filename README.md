# Swastixa Digital - Next.js (Static Site)

Converted from Vite + React (SPA) to **Next.js App Router** as a fully **static site**.

- No SSR at runtime - `next build` generates plain HTML files (SSG) into `out/`
- View-source (Ctrl+U) on any page shows the full content + meta tags
- All SEO metadata (title, description, canonical, Open Graph, Twitter) is baked into the HTML at build time
- `sitemap.xml` and `robots.txt` are auto-generated from routes + blog data
- No backend needed: contact/career forms use EmailJS, blogs come from `src/data/blogs.js`

## Commands

```bash
npm install      # install dependencies
npm run dev      # local dev server (http://localhost:3000)
npm run build    # builds the static site into the `out/` folder
npm run start    # serves the built static site locally
```

## Structure

```
app/                     Next.js App Router (one folder per URL)
  layout.js              Root layout: global metadata, GA/GTM, fonts
  providers.jsx          Client providers: Lenis, GSAP, AOS, Header, Toaster
  page.js ...            One page.js per route - exports build-time metadata
  blog/[slug]/page.js    Blog pages (statically generated from blogs data)
  sitemap.js             Auto-generated sitemap.xml
  robots.js              Auto-generated robots.txt
src/
  views/                 Page components (old src/pages, "use client")
  components/            All original components (unchanged, "use client")
  lib/router.jsx         React-Router -> Next Link/navigation compatibility layer
  lib/seo.js             Metadata helpers (reads src/data/seoData.js)
  data/                  blogs, SEO data, etc. (unchanged)
  assets/                Images/PDFs (unchanged)
public/                  Fonts, favicons, PDFs (unchanged)
```

## URL changes (SEO-friendly kebab-case)

| Old                       | New                             |
|---------------------------|---------------------------------|
| /work/Production          | /work/video-production          |
| /work/Production/:tab      | /work/video-production/[tab]     |
| /work/SocialMedia         | /work/social-media-management   |
| /work/WebsiteDevelopment  | /work/website-development       |
| /work/DigitalMarketing    | /work/digital-marketing         |
| /work/Branding            | /work/branding                  |
| /work/Print               | /work/print                     |
| /PrivacyPolicy            | /privacy-policy                 |

Deploy the `out/` folder to any static host (Vercel, Netlify, Hostinger, etc.).
