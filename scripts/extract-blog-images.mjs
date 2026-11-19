import fs from "fs";

const content = fs.readFileSync("src/data/blogs.ts", "utf8");
const urls = new Set();
const matches = content.matchAll(/https?:\/\/[^\s"'`,]+/g);
for (const m of matches) {
  if (m[0].match(/\.(jpg|jpeg|png|webp)/i)) {
    urls.add(m[0].replace(/[",;]$/, ""));
  }
}
console.log("Total unique image URLs:", urls.size);
for (const u of urls) {
  console.log(u);
}
