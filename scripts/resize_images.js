const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const src = path.join(__dirname, '..', 'assets', 'hero-bg.jpg');
const outDir = path.join(__dirname, '..', 'assets');
const sizes = [480, 768, 1200];

(async () => {
  try {
    if (!fs.existsSync(src)) {
      console.error('Source image not found:', src);
      process.exit(1);
    }

    for (const w of sizes) {
      const outPath = path.join(outDir, `hero-bg-${w}.jpg`);
      await sharp(src)
        .resize({ width: w })
        .jpeg({ quality: 85, mozjpeg: true })
        .toFile(outPath);
      console.log('Wrote', outPath);
    }

    console.log('Done');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
