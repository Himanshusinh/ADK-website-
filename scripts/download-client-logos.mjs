/**
 * Download client logos from https://www.adkeng.com/client.php
 *
 * Usage: node scripts/download-client-logos.mjs
 */

import fs from "fs";
import path from "path";

const SOURCE_PAGE = "https://www.adkeng.com/client.php";
const BASE_URL = "https://www.adkeng.com/images/clients/";
const OUTPUT_DIR = path.join(process.cwd(), "public", "images", "clients");

function encodeClientFilename(filename) {
  return filename.replace(/ /g, "%20").replace(/&/g, "%26");
}

async function fetchClientFilenames() {
  const response = await fetch(SOURCE_PAGE);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${SOURCE_PAGE}: ${response.status} ${response.statusText}`);
  }

  const html = await response.text();
  const matches = [...html.matchAll(/images\/clients\/([^"']+\.jpg)/gi)];
  const filenames = [...new Set(matches.map((match) => match[1]))];

  if (filenames.length === 0) {
    throw new Error("No client logo filenames found on source page.");
  }

  return filenames;
}

async function downloadLogo(filename) {
  const url = BASE_URL + encodeClientFilename(filename);
  const outputPath = path.join(OUTPUT_DIR, filename);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`${filename}: ${response.status} ${response.statusText}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(outputPath, buffer);

  return buffer.length;
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log(`Fetching logo list from ${SOURCE_PAGE}...`);
  const filenames = await fetchClientFilenames();
  console.log(`Found ${filenames.length} logos.\n`);

  let downloaded = 0;
  const failures = [];

  for (const filename of filenames) {
    try {
      const bytes = await downloadLogo(filename);
      downloaded += 1;
      console.log(`OK  ${filename} (${bytes} bytes)`);
    } catch (error) {
      failures.push({ filename, error: error instanceof Error ? error.message : String(error) });
      console.error(`FAIL ${filename}: ${error instanceof Error ? error.message : error}`);
    }
  }

  console.log(`\nDone. Downloaded ${downloaded}/${filenames.length}.`);

  if (failures.length > 0) {
    console.error(`Failed: ${failures.length}`);
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
