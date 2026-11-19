import fs from "fs";

let content = fs.readFileSync("src/data/blogs.ts", "utf8");

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

let updatedCount = 0;
for (const file of heroes) {
  const imgStr = `/images/blogs/${file}`;
  const mobileFile = file.replace(/\.webp$/, "-mobile.webp");
  const mobileStr = `/images/blogs/${mobileFile}`;

  // Find image:\s*["']/images/blogs/xxx.webp["'] and add mobileImage
  const pattern = new RegExp(`(image:\\s*["']${imgStr}["'],?)`, "g");
  if (content.match(pattern)) {
    // Only add if not already present
    if (!content.includes(mobileStr)) {
      content = content.replace(pattern, `$1\n      mobileImage: "${mobileStr}",`);
      updatedCount++;
    }
  }
}

fs.writeFileSync("src/data/blogs.ts", content, "utf8");
console.log(`Added mobileImage to ${updatedCount} blog heroes in src/data/blogs.ts!`);
