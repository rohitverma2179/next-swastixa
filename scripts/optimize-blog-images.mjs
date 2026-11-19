import fs from "fs";
import path from "path";
import sharp from "sharp";

const targetDir = path.join(process.cwd(), "public", "images", "blogs");
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const content = fs.readFileSync("src/data/blogs.ts", "utf8");
const urls = new Set();
const matches = content.matchAll(/https?:\/\/[^\s"'`,]+/g);
for (const m of matches) {
  if (m[0].match(/\.(jpg|jpeg|png|webp)/i)) {
    urls.add(m[0].replace(/[",;]$/, ""));
  }
}

console.log(`Found ${urls.size} unique image URLs to download and optimize...`);

function getLocalFileName(url) {
  const parsed = new URL(url);
  const base = path.basename(parsed.pathname).replace(/\.(jpg|jpeg|png|webp)$/i, "");
  // sanitize
  const clean = base.toLowerCase().replace(/[^a-z0-9_-]/g, "-");
  return `${clean}.webp`;
}

async function run() {
  const urlMap = {};
  let totalOriginalBytes = 0;
  let totalOptimizedBytes = 0;
  let count = 0;

  for (const url of urls) {
    count++;
    const filename = getLocalFileName(url);
    const outputPath = path.join(targetDir, filename);
    const localUrl = `/images/blogs/${filename}`;
    urlMap[url] = localUrl;

    try {
      console.log(`[${count}/${urls.size}] Downloading: ${url}`);
      const res = await fetch(url);
      if (!res.ok) {
        console.warn(`Failed to fetch ${url} (status ${res.status})`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      totalOriginalBytes += buffer.length;

      // Determine if it is a hero image or content image
      const isInner = url.includes("inner-blog");
      const maxWidth = isInner ? 900 : 1200;

      const optimizedBuffer = await sharp(buffer)
        .resize({ width: maxWidth, withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toBuffer();

      fs.writeFileSync(outputPath, optimizedBuffer);
      totalOptimizedBytes += optimizedBuffer.length;

      console.log(`  Saved to ${filename} (${(buffer.length / 1024).toFixed(1)} KB -> ${(optimizedBuffer.length / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`  Error processing ${url}:`, err.message);
    }
  }

  console.log("\n--- OPTIMIZATION SUMMARY ---");
  console.log(`Total Original: ${(totalOriginalBytes / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total Optimized: ${(totalOptimizedBytes / 1024 / 1024).toFixed(2)} MB`);
  const savings = ((1 - totalOptimizedBytes / totalOriginalBytes) * 100).toFixed(1);
  console.log(`Savings: ${savings}% reduction!`);

  // Save urlMap for updating blogs.ts
  fs.writeFileSync("scripts/blog-image-map.json", JSON.stringify(urlMap, null, 2));
  console.log("Saved mapping to scripts/blog-image-map.json");
}

run();
