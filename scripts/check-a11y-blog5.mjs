import http from "http";
import fs from "fs";
import path from "path";
import zlib from "zlib";
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".css": "text/css",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".json": "application/json",
  ".woff2": "font/woff2",
};

const outDir = path.join(process.cwd(), "out");

const server = http.createServer((req, res) => {
  let reqPath = decodeURIComponent(req.url.split("?")[0]);
  if (reqPath === "/") reqPath = "/index.html";

  let filePath = path.join(outDir, reqPath);
  if (!fs.existsSync(filePath)) {
    if (fs.existsSync(filePath + ".html")) {
      filePath = filePath + ".html";
    } else if (fs.existsSync(path.join(filePath, "index.html"))) {
      filePath = path.join(filePath, "index.html");
    }
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || "application/octet-stream";
    const fileBuf = fs.readFileSync(filePath);

    if (contentType.includes("text") || contentType.includes("javascript") || contentType.includes("json")) {
      const gzipped = zlib.gzipSync(fileBuf);
      res.writeHead(200, {
        "Content-Type": contentType,
        "Content-Encoding": "gzip",
        "Cache-Control": "public, max-age=31536000, immutable"
      });
      res.end(gzipped);
    } else {
      res.writeHead(200, {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable"
      });
      res.end(fileBuf);
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(4130, async () => {
  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless", "--no-sandbox", "--disable-gpu"]
  });

  for (const slug of ["on-page-seo-basics-business-owners", "google-ads-vs-meta-ads-comparison"]) {
    console.log(`Checking ${slug}...`);
    const res = await lighthouse(`http://localhost:4130/blog/${slug}`, {
      port: chrome.port,
      output: "json",
      onlyCategories: ["accessibility"]
    });

    const audits = res.lhr.audits;
    const failed = res.lhr.categories.accessibility.auditRefs.filter(r => audits[r.id].score !== null && audits[r.id].score < 1);
    console.log(`Failed audits for ${slug} (Score: ${Math.round(res.lhr.categories.accessibility.score * 100)}):`);
    for (const f of failed) {
      console.log(`- ${f.id}: ${audits[f.id].title}`);
      if (audits[f.id].details?.items) {
        console.log("  Items:", audits[f.id].details.items.map(it => it.node?.snippet || it.node?.nodeLabel || it));
      }
    }
  }

  await chrome.kill();
  server.close();
  process.exit(0);
});
