import fs from "fs";
import path from "path";
import sharp from "sharp";

const content = fs.readFileSync("src/data/blogs.ts", "utf8");
const blogMatches = content.matchAll(/slug:\s*["']([^"']+)["'][\s\S]*?hero:\s*\{[\s\S]*?image:\s*["']([^"']+)["']/g);

async function inspect() {
  for (const m of blogMatches) {
    const slug = m[1];
    const imgRel = m[2];
    const fullPath = path.join(process.cwd(), "public", imgRel);
    if (!fs.existsSync(fullPath)) {
      console.log(`MISSING: ${fullPath}`);
      continue;
    }
    const meta = await sharp(fullPath).metadata();
    const stats = fs.statSync(fullPath);
    console.log(`${slug}: ${meta.width}x${meta.height} (${(stats.size / 1024).toFixed(1)} KB) format: ${meta.format}`);
  }
}

inspect();
