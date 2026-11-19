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

server.listen(4127, async () => {
  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless", "--no-sandbox", "--disable-gpu"]
  });

  try {
    const runnerResult = await lighthouse("http://localhost:4127/blog/how-to-recover-a-hacked-instagram-account", {
      port: chrome.port,
      output: "json",
      onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
      formFactor: "desktop",
      screenEmulation: {
        mobile: false,
        width: 1350,
        height: 940,
        deviceScaleFactor: 1,
        disabled: false
      },
      throttling: {
        rttMs: 40,
        throughputKbps: 10240,
        cpuSlowdownMultiplier: 1
      }
    });

    const categories = runnerResult.lhr.categories;
    console.log("=== DESKTOP SCORES ===");
    console.log("Performance:", Math.round(categories.performance.score * 100));
    console.log("Accessibility:", Math.round(categories.accessibility.score * 100));
    console.log("Best Practices:", Math.round(categories["best-practices"].score * 100));
    console.log("SEO:", Math.round(categories.seo.score * 100));

    const audits = runnerResult.lhr.audits;
    console.log("\n=== METRICS ===");
    console.log("FCP:", audits["first-contentful-paint"].displayValue);
    console.log("LCP:", audits["largest-contentful-paint"].displayValue);
    console.log("TBT:", audits["total-blocking-time"].displayValue);
    console.log("CLS:", audits["cumulative-layout-shift"].displayValue);
    console.log("Speed Index:", audits["speed-index"].displayValue);

  } catch (err) {
    console.error("Lighthouse error:", err);
  } finally {
    await chrome.kill();
    server.close();
    process.exit(0);
  }
});
