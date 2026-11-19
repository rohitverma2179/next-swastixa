import fs from "fs";

for (const f of [
  "src/components/blog/bloginnerPages/ContentRenderer.tsx",
  "src/components/blog/bloginnerPages/BlogContent.tsx"
]) {
  let content = fs.readFileSync(f, "utf8");
  content = content.replace(/"use client";\s*/g, "");
  fs.writeFileSync(f, content, "utf8");
  console.log(`Updated ${f}`);
}
