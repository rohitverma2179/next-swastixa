import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const cards = [
  { id: 1, url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop' },
  { id: 2, url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop' },
  { id: 3, url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop' },
  { id: 4, url: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=800&auto=format&fit=crop' },
  { id: 5, url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop' },
  { id: 6, url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop' }
];

const outDir = path.resolve('public/images/why-company');

for (const c of cards) {
  const tempFile = path.resolve(`temp_why_${c.id}.jpg`);
  const finalWebp = path.join(outDir, `${c.id}.webp`);

  console.log(`Downloading card ${c.id}...`);
  execSync(`curl.exe -s -L -o "${tempFile}" "${c.url}"`);

  console.log(`Converting to 500px webp...`);
  execSync(`ffmpeg -y -i "${tempFile}" -vf "scale=500:-2" -c:v libwebp -quality 82 "${finalWebp}"`, { stdio: 'ignore' });

  const size = fs.statSync(finalWebp).size;
  console.log(`Card ${c.id} WebP size: ${(size / 1024).toFixed(1)} KB`);

  if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
}

console.log('All 6 cards converted successfully!');
