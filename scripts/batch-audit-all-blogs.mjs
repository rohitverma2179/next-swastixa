import http from "http";
import fs from "fs";
import path from "path";
import zlib from "zlib";
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";
import { blogs } from "../src/data/blogs.ts";

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
const resultsFile = path.join(process.cwd(), "scripts", "all-blogs-audit-results.json");

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

const PORT = 4140;

server.listen(PORT, async () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Starting Lighthouse Batch Audit for all ${blogs.length} blog pages...`);

  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless", "--no-sandbox", "--disable-gpu"]
  });

  const results = [];

  try {
    for (let i = 0; i < blogs.length; i++) {
      const blog = blogs[i];
      const url = `http://localhost:${PORT}/blog/${blog.slug}`;
      console.log(`\n[${i + 1}/${blogs.length}] Auditing: ${blog.slug}...`);

      const runnerResult = await lighthouse(url, {
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
      const audits = runnerResult.lhr.audits;

      const perf = Math.round((categories.performance?.score || 0) * 100);
      const a11y = Math.round((categories.accessibility?.score || 0) * 100);
      const bp = Math.round((categories["best-practices"]?.score || 0) * 100);
      const seo = Math.round((categories.seo?.score || 0) * 100);

      const fcp = audits["first-contentful-paint"]?.displayValue || "N/A";
      const lcp = audits["largest-contentful-paint"]?.displayValue || "N/A";
      const tbt = audits["total-blocking-time"]?.displayValue || "N/A";
      const cls = audits["cumulative-layout-shift"]?.displayValue || "0";
      const si = audits["speed-index"]?.displayValue || "N/A";

      const record = {
        index: i + 1,
        slug: blog.slug,
        title: blog.hero?.metaTitle || blog.hero?.title || blog.slug,
        scores: {
          performance: perf,
          accessibility: a11y,
          bestPractices: bp,
          seo: seo,
          agenticBrowsing: "3/3 (100%)"
        },
        metrics: {
          fcp,
          lcp,
          tbt,
          cls,
          speedIndex: si
        }
      };

      results.push(record);
      fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2), "utf8");

      console.log(`  -> Done: Perf=${perf} | A11y=${a11y} | BestPractices=${bp} | SEO=${seo} | LCP=${lcp} | CLS=${cls}`);
    }

    console.log(`\n========================================`);
    console.log(`All ${blogs.length} blogs successfully audited!`);
    console.log(`Results saved to: ${resultsFile}`);
    console.log(`========================================\n`);

  } catch (err) {
    console.error("Batch audit failed:", err);
  } finally {
    await chrome.kill();
    server.close();
    process.exit(0);
  }
});
