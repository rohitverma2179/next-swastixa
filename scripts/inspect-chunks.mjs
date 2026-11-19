import fs from "fs";
import path from "path";

const chunksDir = path.join("out", "_next", "static", "chunks");
const files = fs.readdirSync(chunksDir);

for (const file of files) {
  if (!file.endsWith(".js")) continue;
  const content = fs.readFileSync(path.join(chunksDir, file), "utf8");
  const sizeKb = Math.round(content.length / 1024);
  if (sizeKb < 5) continue;

  const matches = [];
  ["framer-motion", "gsap", "lenis", "react-icons", "lucide", "tailwind", "next/navigation", "react-dom", "react"].forEach(lib => {
    if (content.includes(lib)) matches.push(lib);
  });
  console.log(`- ${file} (${sizeKb} KB): [${matches.join(", ")}]`);
}
