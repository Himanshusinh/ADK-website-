// Image path helpers — resolved via Cloudinary media delivery network where uploaded, otherwise fallback to local /images/ paths.

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "ng7roe1n";
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto`;

// Cloudinary public IDs under AC-QMS/Product details (no file extension required for delivery)
const CLOUDINARY_MAPPINGS: Record<string, string> = {
  // — CNC Plasma —
  "products/cnc-plasma-cutting/gantry-plasma-cutting/hero.jpg":
    "AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/CNC Plasma Cutting Machine-Gantry Type",
  "products/cnc-plasma-cutting/gantry-plasma-cutting/gallery-1.jpg":
    "AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/CNC Plasma Cutting Machine-Gantry Type",
  "products/cnc-plasma-cutting/gantry-plasma-cutting/gallery-2.jpg":
    "AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/CNC Plasma Cutting Machine-TableType",
  "products/cnc-plasma-cutting/gantry-plasma-cutting/gallery-3.jpg":
    "AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/CNC Plasma Cutting Machine-Portable Type",
  "products/cnc-plasma-cutting/gantry-plasma-cutting/gallery-4.jpg":
    "AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/Single Layer Forming Machine",

  "products/cnc-plasma-cutting/table-type-plasma/hero.jpg":
    "AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/CNC Plasma Cutting Machine-TableType",
  "products/cnc-plasma-cutting/table-type-plasma/gallery-1.jpg":
    "AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/CNC Plasma Cutting Machine-Portable Type",
  "products/cnc-plasma-cutting/table-type-plasma/gallery-2.jpg":
    "AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/CNC Plasma Cutting Machine-TableType",
  "products/cnc-plasma-cutting/table-type-plasma/gallery-3.jpg":
    "AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/CNC Plasma Cutting Machine-Gantry Type",
  "products/cnc-plasma-cutting/portable-plasma/hero.jpg":
    "AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/CNC Plasma Cutting Machine-Portable Type",
  "products/cnc-plasma-cutting/portable-plasma/gallery-1.jpg":
    "AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/CNC Plasma Cutting Machine-Portable Type",
  "products/cnc-plasma-cutting/portable-plasma/gallery-2.jpg":
    "AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/CNC Plasma Cutting Machine-TableType",

  // — CNC Press Brake —
  "products/cnc-press-brake/nadkpress-cnc-press-brake/hero.jpg":
    "AC-QMS/Product details/CNC Prass Brake Machine ( Photos )/CNC Press Brake Machine",
  "products/cnc-press-brake/nadkpress-cnc-press-brake/gallery-1.jpg":
    "AC-QMS/Product details/CNC Prass Brake Machine ( Photos )/ADK Press Brake",
  "products/cnc-press-brake/nadkpress-cnc-press-brake/gallery-2.jpg":
    "AC-QMS/Product details/CNC Prass Brake Machine ( Photos )/CNC Press Brake (1)",
  "products/cnc-press-brake/nadkpress-cnc-press-brake/gallery-3.jpg":
    "AC-QMS/Product details/CNC Prass Brake Machine ( Photos )/WAD Series CNC Press Brake (3)",
  "products/cnc-press-brake/nadkpress-cnc-press-brake/gallery-4.jpg":
    "AC-QMS/Product details/CNC Prass Brake Machine ( Photos )/Tandem Press Brake",
  "products/cnc-press-brake/nadkpress-cnc-press-brake/gallery-5.jpg":
    "AC-QMS/Product details/CNC Prass Brake Machine ( Photos )/NC prass brake/100T 3200",

  // — Fiber Laser sheet / tube / LNR —
  // Heroes & galleries use clean local studio shots in public/assets/adk/
  // (studio-fiber.png, studio-fiber-2.png, studio-fiber-3.png) via productHeroPath /
  // productGalleryPaths — Cloudinary mappings removed so local assets win.

  // — Fiber Laser Welding —
  "products/fiber-laser-welding/4in1-fiber-laser-welding/hero.jpg":
    "AC-QMS/Product details/Machine Photo/Laser Welding Machine/Fiber Laser Welding Machine",
  "products/fiber-laser-welding/4in1-fiber-laser-welding/gallery-1.jpg":
    "AC-QMS/Product details/LASER WELDING CUTTING CLEANING MACHINE MINI TYPE ( Photos )/CWFL-1500ANW手持激光焊接一体机-1",
  "products/fiber-laser-welding/4in1-fiber-laser-welding/gallery-2.jpg":
    "AC-QMS/Product details/LASER WELDING CUTTING CLEANING MACHINE MINI TYPE ( Photos )/7538912108_60063127257_一体机.93",
  "products/fiber-laser-welding/4in1-fiber-laser-welding/gallery-3.jpg":
    "AC-QMS/Product details/LASER WELDING CUTTING CLEANING MACHINE MINI TYPE ( Photos )/7538912108_60063077791_一体机.57",
  "products/fiber-laser-welding/4in1-fiber-laser-welding/gallery-4.jpg":
    "AC-QMS/Product details/LASER WELDING CUTTING CLEANING MACHINE MINI TYPE ( Photos )/7538912108_60063117958_一体机.92",

  // — Panel Bender —
  "products/panel-bender/adk-panel-bender-series/hero.jpg":
    "AC-QMS/Product details/Machine Photo/Panel bender/Panel Bender",

  // — PEB (hero only until dedicated PEB stills are mapped) —
  "products/peb-machinery/peb-h-beam-welding/hero.jpg":
    "AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/Single Layer Forming Machine",
  "products/peb-machinery/peb-saw-gantry-welding/hero.jpg":
    "AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/CNC Plasma Cutting Machine-Gantry Type",

  // — Shearing —
  "products/shearing-machine/hydraulic-shearing-machine/hero.jpg":
    "AC-QMS/Product details/Shearing Machine ( Photos )/Swing sheaing machine -1",
  "products/shearing-machine/hydraulic-shearing-machine/gallery-1.jpg":
    "AC-QMS/Product details/Shearing Machine ( Photos )/QC12K-8x3200 photos/1",
  "products/shearing-machine/hydraulic-shearing-machine/gallery-2.jpg":
    "AC-QMS/Product details/Shearing Machine ( Photos )/QC12K-8x3200 photos/2",
  "products/shearing-machine/hydraulic-shearing-machine/gallery-3.jpg":
    "AC-QMS/Product details/Shearing Machine ( Photos )/QC12K-8x3200 photos/3",
  "products/shearing-machine/hydraulic-shearing-machine/gallery-4.jpg":
    "AC-QMS/Product details/Shearing Machine ( Photos )/QC12K-8x3200 photos/4",
  "products/shearing-machine/hydraulic-shearing-machine/gallery-5.jpg":
    "AC-QMS/Product details/Shearing Machine ( Photos )/QC12K-8x3200 photos/5",

  // — Spares —
  "products/spares-consumables/spares-consumables-catalogue/hero.jpg":
    "AC-QMS/Product details/LASER WELDING CUTTING CLEANING MACHINE MINI TYPE ( Photos )/7538912108_60063117958_一体机.92",

  // — Home hero / Advanced Machinery —
  // fiber laser: local /assets/adk/studio-fiber.png (see FIBER_LASER_STUDIO_IMAGES)
  "home/hero-plasma.jpg":
    "AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/CNC Plasma Cutting Machine-Gantry Type",
  "home/hero-press-brake.jpg": "go8yh1honqzdocohpw5a",

  // — Team —
  "team/img1.jpg": "AC-QMS/Group Photos/img1",
  "team/img2.jpg": "AC-QMS/Group Photos/img2",
};

function hasCloudinaryMapping(localRelPath: string): boolean {
  return localRelPath in CLOUDINARY_MAPPINGS;
}

// Helper to resolve the correct path (Cloudinary if uploaded, fallback to local /images/)
export function resolveImagePath(localRelPath: string): string {
  if (hasCloudinaryMapping(localRelPath)) {
    return encodeURI(`${CLOUDINARY_BASE_URL}/${CLOUDINARY_MAPPINGS[localRelPath]}`);
  }
  return `/images/${localRelPath}`;
}

/** Hard-crop a Cloudinary URL to a fill frame (keeps local /images paths unchanged). */
export function withCloudinaryFill(
  src: string,
  width: number,
  height: number,
  gravity: "auto" | "center" | "face" = "auto",
): string {
  if (!src.includes("res.cloudinary.com/") || !src.includes("/upload/")) {
    return src;
  }
  return src.replace(
    /\/upload\/(?:f_auto,q_auto\/)?/,
    `/upload/c_fill,g_${gravity},w_${width},h_${height},f_auto,q_auto/`,
  );
}

/** Trim empty studio padding from a Cloudinary image (no subject crop). */
export function withCloudinaryTrim(src: string, colorTolerance = 20): string {
  if (!src.includes("res.cloudinary.com/") || !src.includes("/upload/")) {
    return src;
  }
  return src.replace(
    /\/upload\/(?:f_auto,q_auto\/)?/,
    `/upload/e_trim:${colorTolerance}/f_auto,q_auto/`,
  );
}

/** Strip near-white studio backdrop (Cloudinary e_bgremoval). Prefer this over
 *  e_background_removal — AI removal is unavailable / 400 for some assets. */
export function withCloudinaryBackgroundRemoval(src: string): string {
  if (!src.includes("res.cloudinary.com/") || !src.includes("/upload/")) {
    return src;
  }
  return src.replace(
    /\/upload\/(?:f_auto,q_auto\/)?/,
    `/upload/e_bgremoval/f_png/`,
  );
}

// Standalone centralized asset URLs (to prevent duplicate definitions)
export const ADK_LOGO_URL = encodeURI(
  `${CLOUDINARY_BASE_URL}/AC-QMS/Product details/ADK-Cloud/ADK LOGO-01`,
);
export const ADK_DECADE_VIDEO_URL =
  "https://res.cloudinary.com/ng7roe1n/video/upload/v1785735863/ADK_10_years_Compressed_t83m6s.mp4";
export const ADK_DECADE_VIDEO_POSTER =
  "https://res.cloudinary.com/ng7roe1n/video/upload/so_0,f_auto,q_auto/ADK_10_years_Compressed_t83m6s.jpg";
export const BLUEPRINT_SCHEMATIC_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCOzIemnEm6V7GR2bo2GIhMBDg-NJl725eBjH6It2PL5Sjo3WhVXoleVnbj2RcKOtirLuRswUqVRNvXpHSz2a0kKCw-CTpTVqGVLS7GCKiWDHyrcsm_fQB46p0q66NNXsvVYrOjLtLu818Swx4zkFGA9-Fn2yq50Rx7pQADrf3UTTpD-48Xwfjm7Zxli8zgv18UZ5_YoHFaIvX_LtmhrsF5NXHgkt5MrIIZGMyZ0t623K4ca27FPmHufTV1KZmThJQB2H5pD3sq7CBy5-E";
export const CHATBOT_ICON_URL = "/images/chatbot-icon.png";
export const WHATSAPP_LOGO_URL = "/images/wp_logo.jpg";

/** Clean ADK FiberCut / sheet laser studio shots (from public/new-images). */
export const FIBER_LASER_STUDIO_IMAGES = [
  "/assets/adk/studio-fiber.png",
  "/assets/adk/studio-fiber-2.png",
  "/assets/adk/studio-fiber-3.png",
] as const;

export const FALLBACK_IMG_LASER = FIBER_LASER_STUDIO_IMAGES[0];
export const FALLBACK_IMG_PRESS =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB38iSnXjArEblknQSMqDim07fHM_dRbPA_IDg3F56CTqo_1-gIStXEPrBP8mfv2nMRyrvToNrmVE9lTbu-F9TV49IRWZr1W-4reIbGbN0NMWVBqT1d-El2A6SSRNFWgvX3p6cR2CGDx51KBQtsS_f7NeTVovS13SsaZdXLmw97rd2Zde1Vjnq3a30Jp35TVcSPD9Dcsso8cU90_aGh1X7qEfWUv2ot0IREjCb4_7U0FPboB8T80cCH_A";
export const FALLBACK_IMG_PEB =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAZQwmqr4e-fG8zkgbDfquMEOPCWLRUoP6ClGgI1WQgJlW0SHTY0227I52qRvFC6RWwpJ6xoOz829YKuUfp0PFKd__FOb3YIBzGLpansmaotqKkNCTWbqizLvncH6YikTAeNHHllRY7IHKG28WeX-O0_CphL7Sol08GlbuL_Q_aHiUz2kIpbubDQudMACXCo2NoUJo1R3XhjcGzPkGcRvGSnRz-8u8R3uTcT-UvO77WsywB2CGNWb84Oy1K7DeJrG-SvFo";

const FIBER_LASER_HERO_BY_MODEL: Record<string, number> = {
  "industrial-pioneer-exchange-table": 0,
  "single-pallet-es-series": 0,
  "dual-position-exchange-table": 1,
  "futuristic-laser-series": 2,
  "professional-tube-cutting": 1,
  "tube-plate-lnr-series": 2,
};

export function productHeroPath(categorySlug: string, modelSlug: string): string {
  if (categorySlug === "fiber-laser-cutting") {
    const idx = FIBER_LASER_HERO_BY_MODEL[modelSlug] ?? 0;
    return FIBER_LASER_STUDIO_IMAGES[idx] ?? FIBER_LASER_STUDIO_IMAGES[0];
  }
  return resolveImagePath(`products/${categorySlug}/${modelSlug}/hero.jpg`);
}

/** All mapped gallery-N stills for a model (skips unmapped indices). */
export function productGalleryPaths(categorySlug: string, modelSlug: string): string[] {
  if (categorySlug === "fiber-laser-cutting") {
    return [...FIBER_LASER_STUDIO_IMAGES];
  }
  const paths: string[] = [];
  for (let i = 1; i <= 8; i++) {
    const key = `products/${categorySlug}/${modelSlug}/gallery-${i}.jpg`;
    if (hasCloudinaryMapping(key)) {
      paths.push(resolveImagePath(key));
    }
  }
  return paths;
}

export function teamPhotoPath(filename: string): string {
  return resolveImagePath(`team/${filename}`);
}

export function factoryPhotoPath(filename: string): string {
  return resolveImagePath(`factory/${filename}`);
}

export function installationPhotoPath(filename: string): string {
  return resolveImagePath(`installations/${filename}`);
}

export function blogHeroPath(slug: string): string {
  return resolveImagePath(`blog/${slug}.jpg`);
}

/** Industry application page heroes — `public/images/applications/{slug}/hero.jpg` */
export function applicationHeroPath(slug: string): string {
  return resolveImagePath(`applications/${slug}/hero.jpg`);
}

export function getApplicationHeroFallback(): string {
  return FALLBACK_IMG_LASER;
}

export function videoThumbnailPath(id: string): string {
  return resolveImagePath(`videos/thumbnails/${id}.jpg`);
}

export function clientLogoPath(filename: string): string {
  return resolveImagePath(`clients/${filename}`);
}

// Category-level fallbacks until per-model photos are uploaded
export function getProductImageFallback(categorySlug: string): string {
  switch (categorySlug) {
    case "cnc-press-brake":
    case "shearing-machine":
    case "v-grooving-machine":
    case "newly-launched-products":
      return FALLBACK_IMG_PRESS;
    case "peb-machinery":
    case "panel-bender":
      return FALLBACK_IMG_PEB;
    default:
      return FALLBACK_IMG_LASER;
  }
}
