import fs from 'fs';
import { globSync } from 'glob';

const projectRoot = process.cwd();
const files = globSync(['src/**/*.js', 'src/**/*.jsx', 'app/**/*.js', 'app/**/*.jsx'], { cwd: projectRoot, absolute: true });

let r2Count = 0;
for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    if (content.includes('https://cdn.swastixa.com')) {
        content = content.replace(/https:\/\/cdn\.swastixa\.com/g, 'https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev');
        fs.writeFileSync(file, content);
        r2Count++;
    }
}
console.log(`Reverted CDN URLs to R2 in ${r2Count} files.`);
