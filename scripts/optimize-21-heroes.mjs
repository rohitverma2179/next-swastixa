import fs from "fs";
import path from "path";
import sharp from "sharp";

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

const dir = path.join(process.cwd(), "public", "images", "blogs");

async function optimizeAll() {
  console.log(`Optimizing all ${heroes.length} blog hero images (desktop 1200w + mobile 640w)...`);

  let origTotal = 0;
  let desktopTotal = 0;
  let mobileTotal = 0;

  for (const file of heroes) {
    const fullPath = path.join(dir, file);
    if (!fs.existsSync(fullPath)) {
      console.warn(`File not found: ${fullPath}`);
      continue;
    }

    const origBuf = fs.readFileSync(fullPath);
    origTotal += origBuf.length;

    // Mobile 640w
    const mobileFile = file.replace(/\.webp$/, "-mobile.webp");
    const mobilePath = path.join(dir, mobileFile);

    const mobileBuf = await sharp(origBuf)
      .resize({ width: 640, withoutEnlargement: true })
      .webp({ quality: 72, effort: 6 })
      .toBuffer();
    fs.writeFileSync(mobilePath, mobileBuf);
    mobileTotal += mobileBuf.length;

    // Desktop 1200w (re-compressed for best efficiency)
    const desktopBuf = await sharp(origBuf)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 76, effort: 6 })
      .toBuffer();
    fs.writeFileSync(fullPath, desktopBuf);
    desktopTotal += desktopBuf.length;

    console.log(`✓ ${file}:`);
    console.log(`   Orig: ${(origBuf.length / 1024).toFixed(1)} KB`);
    console.log(`   Desktop (1200w): ${(desktopBuf.length / 1024).toFixed(1)} KB`);
    console.log(`   Mobile (640w): ${(mobileBuf.length / 1024).toFixed(1)} KB -> ${mobileFile}`);
  }

  console.log("\n--- HERO OPTIMIZATION SUMMARY ---");
  console.log(`Total Original: ${(origTotal / 1024).toFixed(1)} KB`);
  console.log(`Total Desktop (1200w): ${(desktopTotal / 1024).toFixed(1)} KB`);
  console.log(`Total Mobile (640w): ${(mobileTotal / 1024).toFixed(1)} KB`);
  console.log(`Mobile savings vs Original: ${((1 - mobileTotal / origTotal) * 100).toFixed(1)}% reduction!`);
}

optimizeAll();
