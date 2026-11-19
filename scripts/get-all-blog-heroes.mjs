import fs from "fs";

const content = fs.readFileSync("src/data/blogs.ts", "utf8");

// Split by blog object: id: \d+, slug: "..."
const slugBlocks = content.split(/\nid:\s*\d+,/);

const heroes = [];
for (let i = 1; i < slugBlocks.length; i++) {
  const block = slugBlocks[i];
  const slugMatch = block.match(/slug:\s*["']([^"']+)["']/);
  const heroBlock = block.match(/hero:\s*\{([\s\S]*?)\},\s*content:/);
  if (slugMatch && heroBlock) {
    const slug = slugMatch[1];
    // Find the uncommented image: in heroBlock
    const imageLines = heroBlock[1].split("\n").filter(l => !l.trim().startsWith("//"));
    const imgMatch = imageLines.join("\n").match(/image:\s*["']([^"']+)["']/);
    if (imgMatch) {
      heroes.push({ slug, image: imgMatch[1] });
    }
  }
}

console.log(`Found ${heroes.length} blog heroes:`);
heroes.forEach((h, idx) => {
  console.log(`${idx + 1}. ${h.slug} -> ${h.image}`);
});
