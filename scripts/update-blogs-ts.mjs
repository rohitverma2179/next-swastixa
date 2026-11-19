import fs from "fs";

const map = JSON.parse(fs.readFileSync("scripts/blog-image-map.json", "utf8"));
let content = fs.readFileSync("src/data/blogs.ts", "utf8");

let replacements = 0;
for (const [cdnUrl, localUrl] of Object.entries(map)) {
  if (cdnUrl.includes("b-cdn.net")) continue; // skip 403 commented one
  // Replace all occurrences of cdnUrl
  const count = content.split(cdnUrl).length - 1;
  if (count > 0) {
    content = content.replaceAll(cdnUrl, localUrl);
    replacements += count;
  }
}

fs.writeFileSync("src/data/blogs.ts", content, "utf8");
console.log(`Successfully replaced ${replacements} image URLs in src/data/blogs.ts!`);
