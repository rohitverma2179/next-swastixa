import fs from "fs";
import path from "path";

// Read src/data/blogs.ts and extract all slugs and hero.image
const content = fs.readFileSync("src/data/blogs.ts", "utf8");

const blogMatches = content.matchAll(/slug:\s*["']([^"']+)["'][\s\S]*?hero:\s*\{[\s\S]*?image:\s*["']([^"']+)["']/g);

const list = [];
for (const m of blogMatches) {
  list.push({ slug: m[1], image: m[2] });
}

console.log(`Found ${list.length} blogs:`);
list.forEach((item, idx) => {
  const localPath = path.join(process.cwd(), "public", item.image);
  let size = 0;
  if (fs.existsSync(localPath)) {
    size = fs.statSync(localPath).size;
  }
  console.log(`${idx + 1}. [${item.slug}]`);
  console.log(`   Image: ${item.image} (${(size / 1024).toFixed(1)} KB)`);
});
