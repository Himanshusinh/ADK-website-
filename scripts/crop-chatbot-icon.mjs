import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const input = path.join(
  root,
  "public/images/Gemini_Generated_Image_rr89zorr89zorr89-clean (1).png"
);
const output = path.join(root, "public/images/chatbot-icon.png");
const size = 224;

const circle = Buffer.from(
  `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/></svg>`
);

await sharp(input)
  .trim({ threshold: 12 })
  .resize(size, size, { fit: "cover", position: "centre" })
  .composite([{ input: circle, blend: "dest-in" }])
  .png()
  .toFile(output);

console.log("Wrote", output);
