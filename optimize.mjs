import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';

// --- Configuration ---
const projectRoot = process.cwd();
console.log(`Starting optimizations in ${projectRoot}`);

// 3. Global Find & Replace R2 URLs
const filesToReplaceR2 = globSync(['src/**/*.js', 'src/**/*.jsx', 'app/**/*.js', 'app/**/*.jsx'], { cwd: projectRoot, absolute: true });
let r2Count = 0;
for (const file of filesToReplaceR2) {
    let content = fs.readFileSync(file, 'utf-8');
    if (content.includes('https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev')) {
        content = content.replace(/https:\/\/pub-6aea620a48a5427f992db658caf5fb4a\.r2\.dev/g, 'https://cdn.swastixa.com');
        fs.writeFileSync(file, content);
        r2Count++;
    }
}
console.log(`Replaced R2 URLs in ${r2Count} files.`);

// 5. Image Optimization (loading="lazy" decoding="async")
// We will look for <img ... > tags without loading attribute
const imgFiles = globSync(['src/**/*.jsx', 'src/**/*.js', 'app/**/*.jsx', 'app/**/*.js'], { cwd: projectRoot, absolute: true });
let imgCount = 0;
for (const file of imgFiles) {
    let content = fs.readFileSync(file, 'utf-8');
    let modified = false;
    
    // Find all <img tags. We will use a regex replace function to check if loading exists.
    content = content.replace(/<img\s([^>]+)>/gi, (match, attrs) => {
        if (!attrs.includes('loading=') && !attrs.includes('fetchPriority=')) {
            modified = true;
            return `<img loading="lazy" decoding="async" ${attrs}>`;
        }
        return match;
    });

    // Also remove aos library usage from specific files
    if (file.endsWith('Print.jsx') || file.endsWith('BlogCard.jsx') || file.endsWith('caseStudies.jsx') || file.endsWith('servicecards.jsx')) {
        if (content.includes('data-aos')) {
            content = content.replace(/\sdata-aos="[^"]*"/g, '');
            content = content.replace(/\sdata-aos-duration="[^"]*"/g, '');
            content = content.replace(/\sdata-aos-delay="[^"]*"/g, '');
            modified = true;
            console.log(`Removed data-aos from ${path.basename(file)}`);
        }
    }

    if (modified) {
        fs.writeFileSync(file, content);
        imgCount++;
    }
}
console.log(`Updated images/AOS in ${imgCount} files.`);

console.log("Done running simple optimizations.");
