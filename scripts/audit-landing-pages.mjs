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

const PORT = 4145;

const routes = [
  "/real-estate-marketing-agency-in-gurugram",
  "/video-production-house-in-gurugram"
];

async function runAudit() {
  await new Promise(resolve => server.listen(PORT, resolve));
  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless=new", "--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"]
  });

  const results = {};

  try {
    for (const route of routes) {
      console.log(`\n========================================`);
      console.log(`Auditing ${route} (Mobile)`);
      console.log(`========================================`);

      const mobileResult = await lighthouse(`http://127.0.0.1:${PORT}${route}`, {
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

      const mc = mobileResult.lhr.categories;
      const ma = mobileResult.lhr.audits;
      console.log(`Mobile Scores:`);
      console.log(`  Performance: ${Math.round(mc.performance.score * 100)}`);
      console.log(`  Accessibility: ${Math.round(mc.accessibility.score * 100)}`);
      console.log(`  Best Practices: ${Math.round(mc["best-practices"].score * 100)}`);
      console.log(`  SEO: ${Math.round(mc.seo.score * 100)}`);
      console.log(`  FCP: ${ma["first-contentful-paint"]?.displayValue}`);
      console.log(`  LCP: ${ma["largest-contentful-paint"]?.displayValue}`);
      console.log(`  TBT: ${ma["total-blocking-time"]?.displayValue}`);
      console.log(`  CLS: ${ma["cumulative-layout-shift"]?.displayValue}`);
      console.log(`  Speed Index: ${ma["speed-index"]?.displayValue}`);
      
      for (const [catName, cat] of Object.entries(mc)) {
        if (cat.score < 1) {
          console.log(`  Issues in ${catName}:`);
          for (const ref of cat.auditRefs) {
            const a = ma[ref.id];
            if (a && a.score !== null && a.score < 1) {
              console.log(`    - [${ref.id}] ${a.title} (${a.score})`);
              if (a.details?.items) console.log("      Items:", JSON.stringify(a.details.items.slice(0, 2)));
            }
          }
        }
      }

      const lcpElem = ma["largest-contentful-paint-element"]?.details?.items?.[0];
      if (lcpElem?.node?.snippet) {
        console.log(`  LCP Element: ${lcpElem.node.snippet} (${lcpElem.node.nodeLabel || ''})`);
      }

      console.log(`\nAuditing ${route} (Desktop)`);
      const desktopResult = await lighthouse(`http://127.0.0.1:${PORT}${route}`, {
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

      const dc = desktopResult.lhr.categories;
      const da = desktopResult.lhr.audits;
      console.log(`Desktop Scores:`);
      console.log(`  Performance: ${Math.round(dc.performance.score * 100)}`);
      console.log(`  Accessibility: ${Math.round(dc.accessibility.score * 100)}`);
      console.log(`  Best Practices: ${Math.round(dc["best-practices"].score * 100)}`);
      console.log(`  SEO: ${Math.round(dc.seo.score * 100)}`);
      console.log(`  FCP: ${da["first-contentful-paint"]?.displayValue}`);
      console.log(`  LCP: ${da["largest-contentful-paint"]?.displayValue}`);
      console.log(`  TBT: ${da["total-blocking-time"]?.displayValue}`);
      console.log(`  CLS: ${da["cumulative-layout-shift"]?.displayValue}`);

      results[route] = {
        mobile: {
          perf: Math.round(mc.performance.score * 100),
          a11y: Math.round(mc.accessibility.score * 100),
          bp: Math.round(mc["best-practices"].score * 100),
          seo: Math.round(mc.seo.score * 100),
          fcp: ma["first-contentful-paint"]?.displayValue,
          lcp: ma["largest-contentful-paint"]?.displayValue,
          tbt: ma["total-blocking-time"]?.displayValue,
          cls: ma["cumulative-layout-shift"]?.displayValue,
          si: ma["speed-index"]?.displayValue,
          lcpElement: lcpElem?.node?.snippet
        },
        desktop: {
          perf: Math.round(dc.performance.score * 100),
          a11y: Math.round(dc.accessibility.score * 100),
          bp: Math.round(dc["best-practices"].score * 100),
          seo: Math.round(dc.seo.score * 100),
          fcp: da["first-contentful-paint"]?.displayValue,
          lcp: da["largest-contentful-paint"]?.displayValue,
          tbt: da["total-blocking-time"]?.displayValue,
          cls: da["cumulative-layout-shift"]?.displayValue,
          si: da["speed-index"]?.displayValue
        }
      };
    }

    fs.writeFileSync(path.join(process.cwd(), "scripts", "landing-audit-results.json"), JSON.stringify(results, null, 2));
  } catch (err) {
    console.error("Audit error:", err);
  } finally {
    await chrome.kill();
    server.close();
    process.exit(0);
  }
}

runAudit();
