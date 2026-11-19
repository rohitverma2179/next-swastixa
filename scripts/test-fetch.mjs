async function test() {
  const res = await fetch("https://cdn.swastixa.com/swastixablog/digital-marketing.jpg");
  console.log("Status:", res.status);
  console.log("Content-Type:", res.headers.get("content-type"));
  console.log("Content-Length:", res.headers.get("content-length"));
}
test();
