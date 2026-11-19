import fs from "fs";
import path from "path";
import sharp from "sharp";

async function testCompress() {
  const input = path.join(process.cwd(), "public/images/blogs/digital-marketing.webp");

  // Mobile 640w WebP
  const mobileWebp = await sharp(input)
    .resize({ width: 640, withoutEnlargement: true })
    .webp({ quality: 72, effort: 6 })
    .toBuffer();

  // Mobile 640w AVIF
  const mobileAvif = await sharp(input)
    .resize({ width: 640, withoutEnlargement: true })
    .avif({ quality: 65, effort: 6 })
    .toBuffer();

  // Desktop 1200w AVIF
  const desktopAvif = await sharp(input)
    .resize({ width: 1200, withoutEnlargement: true })
    .avif({ quality: 68, effort: 6 })
    .toBuffer();

  console.log(`Mobile WebP (640w): ${(mobileWebp.length / 1024).toFixed(1)} KB`);
  console.log(`Mobile AVIF (640w): ${(mobileAvif.length / 1024).toFixed(1)} KB`);
  console.log(`Desktop AVIF (1200w): ${(desktopAvif.length / 1024).toFixed(1)} KB`);
}

testCompress();
