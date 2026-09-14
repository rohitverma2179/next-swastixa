import { getPageMetadata } from './src/lib/seo.js';

console.log('films metadata:', getPageMetadata('/work/video-production/films'));
console.log('construction metadata:', getPageMetadata('/work/video-production/construction'));
console.log('work metadata:', getPageMetadata('/work'));
console.log('awards metadata:', getPageMetadata('/awards'));
console.log('privacy metadata:', getPageMetadata('/privacy-policy'));