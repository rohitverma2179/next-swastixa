import { blogs } from "../src/data/blogs.ts";

console.log(`Total blogs: ${blogs.length}`);
blogs.forEach((b, i) => {
  console.log(`${i + 1}. [${b.slug}] => "${b.hero?.metaTitle || 'No Title'}" (Hero: ${b.hero?.image}, Mobile: ${b.hero?.mobileImage})`);
});
