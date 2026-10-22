// Static export can't optimize images at request time, so the blog uses
// pre-sized WebP copies of each post cover, generated next to the original.
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import sharp from 'sharp';

const postsDirectory = path.join(process.cwd(), '_posts');
const publicDirectory = path.join(process.cwd(), 'public');

export const SIZES = { card: 720, wide: 1600 };

const covers = fs
  .readdirSync(postsDirectory, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => {
    const file = path.join(postsDirectory, entry.name, 'index.md');
    return matter(fs.readFileSync(file, 'utf8')).data.coverImage;
  })
  .filter(Boolean);

let generated = 0;

for (const cover of covers) {
  const source = path.join(publicDirectory, cover);
  const sourceTime = fs.statSync(source).mtimeMs;

  for (const [name, width] of Object.entries(SIZES)) {
    const target = path.join(path.dirname(source), `cover-${name}.webp`);
    if (fs.existsSync(target) && fs.statSync(target).mtimeMs >= sourceTime) {
      continue;
    }

    await sharp(source)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(target);
    generated += 1;
  }
}

console.log(`thumbnails: ${generated} generated, ${covers.length} covers`);
