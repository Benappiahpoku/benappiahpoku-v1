-icons.js
// <!-- ===== [New Feature] START ===== -->
// Small Node script to generate PWA icons into `public/icons` from a source image.
// Usage:
//   1) Install sharp: npm install --save-dev sharp
//   2) Place a high-res PNG at assets/icon.png (recommend 1024x1024 or 2048x2048).
//   3) Run: node scripts/generate-icons.js
//
// The script will create public/icons and write multiple sizes used in manifest.json.
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const SRC = path.resolve(__dirname, '../assets/icon.png') // source icon
const OUT_DIR = path.resolve(__dirname, '../public/icons')
const SIZES = [48, 72, 96, 128, 144, 152, 192, 384, 512]

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

async function generate() {
  if (!fs.existsSync(SRC)) {
    console.error(`Source icon not found at ${SRC}`)
    console.error('Please add a high-resolution PNG at assets/icon.png (recommend 1024x1024).')
    process.exit(1)
  }

  await ensureDir(OUT_DIR)

  const tasks = SIZES.map(async (size) => {
    const outPath = path.join(OUT_DIR, `icon-${size}.png`)
    await sharp(SRC)
      .resize(size, size, { fit: 'cover' })
      .png({ quality: 90 })
      .toFile(outPath)
    console.log(`Written ${outPath}`)
  })

  await Promise.all(tasks)
  console.log('All icons generated.')
}

generate().catch((err) => {
  console.error('Failed to generate icons:', err)
  process.exit(1)
})
// <!-- ===== [New Feature] END ===== -->