import fs from "fs";
import path from "path";
import sharp from "sharp";

const clientsDir = path.join(process.cwd(), "public", "images", "clients");
const files = fs.readdirSync(clientsDir).filter((file) => file.toLowerCase().endsWith(".jpg"));

function removeNearWhiteBackground(buffer, info) {
  const pixels = Buffer.from(buffer);

  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    if (r > 232 && g > 232 && b > 232) {
      pixels[i + 3] = 0;
    }
  }

  return pixels;
}

for (const file of files) {
  const inputPath = path.join(clientsDir, file);
  const outputPath = path.join(clientsDir, file.replace(/\.jpg$/i, ".png"));

  const { data, info } = await sharp(inputPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const processed = removeNearWhiteBackground(data, info);

  await sharp(processed, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .trim({ threshold: 12 })
    .png({ compressionLevel: 9 })
    .toFile(outputPath);

  console.log(`Processed ${file} -> ${path.basename(outputPath)}`);
}

console.log(`Done. ${files.length} logos processed.`);
