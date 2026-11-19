import fs from "fs";

const content = fs.readFileSync("src/data/blogs.ts", "utf8");
const lines = content.split("\n");

const blogLineIndices = [];
lines.forEach((line, idx) => {
  if (line.match(/^\s*slug:\s*["']/)) {
    blogLineIndices.push(idx);
  }
});

const heroes = [];
for (let i = 0; i < blogLineIndices.length; i++) {
  const startIdx = blogLineIndices[i];
  const endIdx = i + 1 < blogLineIndices.length ? blogLineIndices[i + 1] : startIdx + 50;
  const slice = lines.slice(startIdx, endIdx);

  const slugMatch = slice[0].match(/slug:\s*["']([^"']+)["']/);
  const slug = slugMatch ? slugMatch[1] : `blog-${i+1}`;

  // Find image: in hero block (before content:)
  let heroImage = null;
  let inHero = false;
  for (const l of slice) {
    if (l.includes("hero:")) inHero = true;
    if (l.includes("content:")) inHero = false;
    if (inHero && l.includes("image:") && !l.trim().startsWith("//")) {
      const m = l.match(/image:\s*["']([^"']+)["']/);
      if (m) heroImage = m[1];
    } else if (inHero && !heroImage && l.trim().startsWith('"') && l.includes(".webp")) {
      const m = l.match(/["']([^"']+)["']/);
      if (m) heroImage = m[1];
    }
  }

  heroes.push({ slug, image: heroImage });
}

console.log(JSON.stringify(heroes, null, 2));
