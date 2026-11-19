import fs from "fs";

const content = fs.readFileSync("src/data/blogs.ts", "utf8");
const heroes = [
  "hacked-instagram.webp",
  "digital-marketing.webp",
  "digital-transformation.webp",
  "social-media.webp",
  "on-page.webp",
  "high-converting.webp",
  "seo-sco.webp",
  "google-meta.webp",
  "local-seo.webp",
  "explainer-videos.webp",
  "data-driven.webp",
  "paid-ads.webp",
  "website-design.webp",
  "content-calendar.webp",
  "retargeting-ads.webp",
  "in-house.webp",
  "how-graphic.webp",
  "build-your.webp",
  "choose.webp",
  "full-stack.webp",
  "swastixa-client.webp"
];
heroes.forEach(h => {
  const mob = h.replace(".webp", "-mobile.webp");
  if (!content.includes(mob)) {
    console.log("NOT MATCHED:", h);
  }
});
