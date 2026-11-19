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

server.listen(4135, async () => {
  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless", "--no-sandbox", "--disable-gpu"]
  });

  try {
    const res = await lighthouse("http://localhost:4135/blog/how-to-recover-a-hacked-instagram-account", {
      port: chrome.port,
      output: "json",
      onlyCategories: ["performance"],
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

    const audits = res.lhr.audits;
    console.log("=== SCORE ===", Math.round(res.lhr.categories.performance.score * 100));
    console.log("FCP:", audits["first-contentful-paint"]?.displayValue);
    console.log("LCP:", audits["largest-contentful-paint"]?.displayValue);
    console.log("TBT:", audits["total-blocking-time"]?.displayValue);
    console.log("CLS:", audits["cumulative-layout-shift"]?.displayValue);
    console.log("SI:", audits["speed-index"]?.displayValue);

    console.log("\n=== RENDER BLOCKING ===");
    console.log(JSON.stringify(audits["render-blocking-resources"]?.details?.items || [], null, 2));

    console.log("\n=== BOOTUP TIME (JS EXECUTION) ===");
    const bootup = audits["bootup-time"]?.details?.items || [];
    console.log(JSON.stringify(bootup.slice(0, 10), null, 2));

    console.log("\n=== MAIN THREAD WORK ===");
    const mainThread = audits["mainthread-work-breakdown"]?.details?.items || [];
    console.log(JSON.stringify(mainThread.slice(0, 10), null, 2));

    console.log("\n=== ALL NETWORK REQUESTS ORDERED BY START TIME ===");
    const netReqs = (audits["network-requests"]?.details?.items || []).sort((a, b) => a.networkRequestTime - b.networkRequestTime);
    console.log(JSON.stringify(netReqs.map(r => ({
      url: r.url.replace("http://localhost:4135", ""),
      resourceType: r.resourceType,
      transferSize: r.transferSize,
      startTime: Math.round(r.networkRequestTime * 1000) / 1000,
      endTime: Math.round(r.networkEndTime * 1000) / 1000,
      priority: r.priority
    })), null, 2));

    console.log("\n=== LCP ELEMENT DETAILS ===");
    console.log(JSON.stringify(audits["largest-contentful-paint-element"]?.details?.items || [], null, 2));

  } catch (err) {
    console.error(err);
  } finally {
    await chrome.kill();
    server.close();
    process.exit(0);
  }
});
