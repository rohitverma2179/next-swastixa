import fs from "fs";

const html = fs.readFileSync("out/blog/how-to-recover-a-hacked-instagram-account.html", "utf8");
const idx = html.indexOf('rel="preload" as="image"');
console.log("PRELOAD TAG IN HTML:");
console.log(html.substring(idx - 10, idx + 250));

const imgIdx = html.indexOf('<picture');
console.log("\nPICTURE TAG IN HTML:");
console.log(html.substring(imgIdx, imgIdx + 450));
