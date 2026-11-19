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
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
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

const PORT = 4135;

server.listen(PORT, async () => {
  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless=new", "--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"]
  });

  try {
    const runnerResult = await lighthouse(`http://127.0.0.1:${PORT}/blog`, {
      port: chrome.port,
      output: "json",
      onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
      formFactor: "mobile",
      screenEmulation: {
        mobile: true,
        width: 412,
        height: 823,
        deviceScaleFactor: 1.75,
        disabled: false
      },
      throttling: {
        rttMs: 150,
        throughputKbps: 1638.4,
        cpuSlowdownMultiplier: 4
      }
    });

    const categories = runnerResult.lhr.categories;
    console.log("=== MAIN BLOG PAGE SCORES ===");
    console.log("Performance:", Math.round(categories.performance.score * 100));
    console.log("Accessibility:", Math.round(categories.accessibility.score * 100));
    console.log("Best Practices:", Math.round(categories["best-practices"].score * 100));
    console.log("SEO:", Math.round(categories.seo.score * 100));

    const audits = runnerResult.lhr.audits;
    console.log("\n=== METRICS ===");
    console.log("FCP:", audits["first-contentful-paint"]?.displayValue);
    console.log("LCP:", audits["largest-contentful-paint"]?.displayValue);
    console.log("TBT:", audits["total-blocking-time"]?.displayValue);
    console.log("CLS:", audits["cumulative-layout-shift"]?.displayValue);
    console.log("Speed Index:", audits["speed-index"]?.displayValue);

    console.log("\n=== LCP ELEMENT ===");
    const lcpElem = audits["largest-contentful-paint-element"]?.details?.items;
    if (lcpElem) {
      console.log(JSON.stringify(lcpElem, null, 2));
    }

    console.log("\n=== TOTAL BLOCKING TIME (LONG TASKS) ===");
    const longTasks = audits["long-tasks"]?.details?.items;
    if (longTasks) {
      console.log(JSON.stringify(longTasks.slice(0, 5), null, 2));
    }

    console.log("\n=== UNUSED JAVASCRIPT ===");
    const unusedJs = audits["unused-javascript"]?.details?.items;
    if (unusedJs) {
      console.log(JSON.stringify(unusedJs.slice(0, 5), null, 2));
    }

  } catch (err) {
    console.error("Lighthouse error:", err);
  } finally {
    await chrome.kill();
    server.close();
    process.exit(0);
  }
});
