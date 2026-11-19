import fs from "fs";

let content = fs.readFileSync("src/data/blogs.ts", "utf8");
content = content.replace(
  /image:\s*\n\s*\/\/\s*["'][^"']+["'],\s*\n\s*["']\/images\/blogs\/hacked-instagram\.webp["'],/,
  `image: "/images/blogs/hacked-instagram.webp",\n      mobileImage: "/images/blogs/hacked-instagram-mobile.webp",`
);
fs.writeFileSync("src/data/blogs.ts", content, "utf8");
console.log("Updated blog 1!");
