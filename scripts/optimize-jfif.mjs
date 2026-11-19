import fs from "fs";
import path from "path";
import sharp from "sharp";

const jfifUrls = [
  "https://cdn.swastixa.com/swastixablog/swastixa-inner-blog/inner-blog/data-driven-brands.jfif",
  "https://cdn.swastixa.com/swastixablog/swastixa-inner-blog/inner-blog/in-house-content.jfif"
];

const targetDir = path.join(process.cwd(), "public", "images", "blogs");

async function run() {
  for (const url of jfifUrls) {
    const filename = path.basename(new URL(url).pathname).replace(/\.jfif$/i, ".webp");
    const outputPath = path.join(targetDir, filename);
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Failed ${url}: ${res.status}`);
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    const opt = await sharp(buf)
      .resize({ width: 900, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toBuffer();
    fs.writeFileSync(outputPath, opt);
    console.log(`Saved ${filename} (${buf.length} -> ${opt.length} bytes)`);

    // Replace in blogs.ts
    let blogsContent = fs.readFileSync("src/data/blogs.ts", "utf8");
    blogsContent = blogsContent.replaceAll(url, `/images/blogs/${filename}`);
    fs.writeFileSync("src/data/blogs.ts", blogsContent, "utf8");
    console.log(`Replaced ${url} with /images/blogs/${filename}`);
  }
}

run();
