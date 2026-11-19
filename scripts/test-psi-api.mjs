async function testPSI() {
  const targetUrl = encodeURIComponent("https://swastixa.com/blog/how-to-recover-a-hacked-instagram-account");
  const api = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${targetUrl}&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo`;
  
  console.log("Calling PageSpeed Insights API for live URL...");
  const start = Date.now();
  const res = await fetch(api);
  console.log(`Response status: ${res.status} (took ${((Date.now() - start)/1000).toFixed(1)}s)`);
  if (!res.ok) {
    const txt = await res.text();
    console.error("Error response:", txt);
    return;
  }
  const data = await res.json();
  const cats = data.lighthouseResult.categories;
  console.log("Performance:", cats.performance.score * 100);
  console.log("Accessibility:", cats.accessibility.score * 100);
  console.log("Best Practices:", cats["best-practices"].score * 100);
  console.log("SEO:", cats.seo.score * 100);
}

testPSI();
