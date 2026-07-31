// Image path helpers — resolved via Cloudinary media delivery network where uploaded, otherwise fallback to local /images/ paths.

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "ng7roe1n";
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto`;

// Cloudinary public IDs under AC-QMS/Product details (no file extension required for delivery)
const CLOUDINARY_MAPPINGS: Record<string, string> = {
  // — Factory / installations —
  "factory/santej-works-main.jpg":
    "AC-QMS/Product details/Fiber Laser Cutting Machine ( Photos )/ADK MAKE/IMG_20240309_112027",
  "installations/fiber-laser-01.jpg":
    "AC-QMS/Product details/Fiber Laser Cutting Machine ( Photos )/ADK MAKE/Fiber Laser Cutting Machine S Model",
  "installations/laser-welding-01.jpg":
    "AC-QMS/Product details/Machine Photo/Laser Welding Machine/Fiber Laser Welding Machine",
  "installations/peb-welding-01.jpg":
    "AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/Single Layer Forming Machine",
  "installations/plasma-01.jpg":
    "AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/CNC Plasma Cutting Machine-TableType",
  "installations/press-brake-01.jpg":
    "AC-QMS/Product details/CNC Prass Brake Machine ( Photos )/CNC Press Brake Machine",

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

  "products/cnc-plasma-cutting/table-portable-plasma/hero.jpg":
    "AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/CNC Plasma Cutting Machine-TableType",
  "products/cnc-plasma-cutting/table-portable-plasma/gallery-1.jpg":
    "AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/CNC Plasma Cutting Machine-Portable Type",
  "products/cnc-plasma-cutting/table-portable-plasma/gallery-2.jpg":
    "AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/CNC Plasma Cutting Machine-TableType",
  "products/cnc-plasma-cutting/table-portable-plasma/gallery-3.jpg":
    "AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/CNC Plasma Cutting Machine-Gantry Type",

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

  // — Fiber Laser: Industrial Pioneer (exchange table) — prefer full-machine ADK MAKE frames —
  "products/fiber-laser-cutting/industrial-pioneer-exchange-table/hero.jpg":
    "AC-QMS/Product details/Fiber Laser Cutting Machine ( Photos )/ADK MAKE/Fiber Laser Cutting Machine S Model",
  "products/fiber-laser-cutting/industrial-pioneer-exchange-table/gallery-1.jpg":
    "AC-QMS/Product details/Fiber Laser Cutting Machine ( Photos )/ADK MAKE/001 machine copy",
  "products/fiber-laser-cutting/industrial-pioneer-exchange-table/gallery-2.jpg":
    "AC-QMS/Product details/Fiber Laser Cutting Machine ( Photos )/ADK MAKE/002 machine 1",
  "products/fiber-laser-cutting/industrial-pioneer-exchange-table/gallery-3.jpg":
    "AC-QMS/Product details/Fiber Laser Cutting Machine ( Photos )/ADK MAKE/004 machine",
  "products/fiber-laser-cutting/industrial-pioneer-exchange-table/gallery-4.jpg":
    "AC-QMS/Product details/Fiber Laser Cutting Machine ( Photos )/ADK MAKE/machine 09",
  "products/fiber-laser-cutting/industrial-pioneer-exchange-table/gallery-5.jpg":
    "AC-QMS/Product details/Machine Photo/Laser Cutting Machine/GKS CPL3015B/CPL3015B 配赛德3",

  // — Fiber Laser: Dual-position —
  "products/fiber-laser-cutting/dual-position-exchange-table/hero.jpg":
    "AC-QMS/Product details/Machine Photo/Laser Cutting Machine/M3015G/GKS-M3015G .1",
  "products/fiber-laser-cutting/dual-position-exchange-table/gallery-1.jpg":
    "AC-QMS/Product details/Machine Photo/Laser Cutting Machine/M3015G/GKS-M3015G .2",
  "products/fiber-laser-cutting/dual-position-exchange-table/gallery-2.jpg":
    "AC-QMS/Product details/Machine Photo/Laser Cutting Machine/M3015G/GKS-M3015G .3",
  "products/fiber-laser-cutting/dual-position-exchange-table/gallery-3.jpg":
    "AC-QMS/Product details/Fiber Laser Cutting Machine ( Photos )/ADK MAKE/002 machine 1 F",
  "products/fiber-laser-cutting/dual-position-exchange-table/gallery-4.jpg":
    "AC-QMS/Product details/Fiber Laser Cutting Machine ( Photos )/ADK MAKE/00A machine 555",

  // — Fiber Laser: Futuristic / large format —
  "products/fiber-laser-cutting/futuristic-laser-series/hero.jpg":
    "AC-QMS/Product details/Machine Photo/Laser Cutting Machine/王旭/26040SA/26040SA.298",
  "products/fiber-laser-cutting/futuristic-laser-series/gallery-1.jpg":
    "AC-QMS/Product details/Machine Photo/Laser Cutting Machine/王旭/26040SA/26040SA画册.682",
  "products/fiber-laser-cutting/futuristic-laser-series/gallery-2.jpg":
    "AC-QMS/Product details/Machine Photo/Laser Cutting Machine/王旭/26032SLG/26032SL画出.680",
  "products/fiber-laser-cutting/futuristic-laser-series/gallery-3.jpg":
    "AC-QMS/Product details/Fiber Laser Cutting Machine ( Photos )/ADK MAKE/00J  machine 1 F",

  // — Fiber Laser: Single pallet —
  "products/fiber-laser-cutting/single-pallet-es-series/hero.jpg":
    "AC-QMS/Product details/Machine Photo/Laser Cutting Machine/王旭/3015EⅡ/3015E最新二.622",
  "products/fiber-laser-cutting/single-pallet-es-series/gallery-1.jpg":
    "AC-QMS/Product details/Machine Photo/Laser Cutting Machine/王旭/3015EⅡ/3015E最新二.624",
  "products/fiber-laser-cutting/single-pallet-es-series/gallery-2.jpg":
    "AC-QMS/Product details/Machine Photo/Laser Cutting Machine/王旭/3015EⅡ/3015E最新二.626",
  "products/fiber-laser-cutting/single-pallet-es-series/gallery-3.jpg":
    "AC-QMS/Product details/Fiber Laser Cutting Machine ( Photos )/ADK MAKE/img7",

  // — Fiber Laser: Tube —
  "products/fiber-laser-cutting/professional-tube-cutting/hero.jpg":
    "AC-QMS/Product details/Machine Photo/Laser Cutting Machine/6024T2/6024T2.9",
  "products/fiber-laser-cutting/professional-tube-cutting/gallery-1.jpg":
    "AC-QMS/Product details/Machine Photo/Laser Cutting Machine/6024T2/6024T2.7",
  "products/fiber-laser-cutting/professional-tube-cutting/gallery-2.jpg":
    "AC-QMS/Product details/Machine Photo/Laser Cutting Machine/6012TSM/GKS-6012TSM .3",
  "products/fiber-laser-cutting/professional-tube-cutting/gallery-3.jpg":
    "AC-QMS/Product details/Machine Photo/Laser Cutting Machine/6012TSM/GKS-6012TSM .4",
  "products/fiber-laser-cutting/professional-tube-cutting/gallery-4.jpg":
    "AC-QMS/Product details/Machine Photo/Laser Cutting Machine/6012TSM/GKS-6012TSM .5",

  // — Fiber Laser: Tube + plate —
  "products/fiber-laser-cutting/tube-plate-lnr-series/hero.jpg":
    "AC-QMS/Product details/Machine Photo/Laser Cutting Machine/王旭/3015LNR/LNR.134",
  "products/fiber-laser-cutting/tube-plate-lnr-series/gallery-1.jpg":
    "AC-QMS/Product details/Machine Photo/Laser Cutting Machine/王旭/3015LNR/LNR.135",
  "products/fiber-laser-cutting/tube-plate-lnr-series/gallery-2.jpg":
    "AC-QMS/Product details/Machine Photo/Laser Cutting Machine/王旭/6025LNⅡ/6025LN.359",
  "products/fiber-laser-cutting/tube-plate-lnr-series/gallery-3.jpg":
    "AC-QMS/Product details/Machine Photo/Laser Cutting Machine/6028TSM/6028TSM.3",
 
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
  "products/panel-bender/adk-panel-bender-series/gallery-1.jpg":
    "AC-QMS/Product details/Machine Photo/Panel bender/Panel Bender",

  // — PEB —
  "products/peb-machinery/peb-h-beam-welding/hero.jpg":
    "AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/Single Layer Forming Machine",
  "products/peb-machinery/peb-h-beam-welding/gallery-1.jpg":
    "AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/Single Layer Forming Machine",
  "products/peb-machinery/peb-saw-gantry-welding/hero.jpg":
    "AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/Single Layer Forming Machine",
  "products/peb-machinery/peb-saw-gantry-welding/gallery-1.jpg":
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

// Standalone centralized asset URLs (to prevent duplicate definitions)
export const ADK_LOGO_URL = encodeURI(
  `${CLOUDINARY_BASE_URL}/AC-QMS/Product details/ADK-Cloud/ADK LOGO-01`,
);
export const BLUEPRINT_SCHEMATIC_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCOzIemnEm6V7GR2bo2GIhMBDg-NJl725eBjH6It2PL5Sjo3WhVXoleVnbj2RcKOtirLuRswUqVRNvXpHSz2a0kKCw-CTpTVqGVLS7GCKiWDHyrcsm_fQB46p0q66NNXsvVYrOjLtLu818Swx4zkFGA9-Fn2yq50Rx7pQADrf3UTTpD-48Xwfjm7Zxli8zgv18UZ5_YoHFaIvX_LtmhrsF5NXHgkt5MrIIZGMyZ0t623K4ca27FPmHufTV1KZmThJQB2H5pD3sq7CBy5-E";
export const CHATBOT_ICON_URL = "/images/chatbot-icon.png";
export const WHATSAPP_LOGO_URL = "/images/wp_logo.jpg";

export const FALLBACK_IMG_LASER =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDjVmy45Wdcg-47h-bK5z5RU9W0abt_yHTY3yiXMp3-6swNoq60WtALnMUTABQVTq71U7fJzCIdxrCl7G7EJxTIkSihb7FtFu2ZUlTQaRM_OLB5wPd8aL5NDPjyc8uKdcaPSzn7bkZ3H2-lGKVqMd50i8LuoUee1PXUb1AO3JfIjcSojclqCiqgnGyHxYFIsRv1V2vdwZDMyZjrSwSTusS2rVdlqfPSpiH5fT21CWvKgJculpd9Doy2uA";
export const FALLBACK_IMG_PRESS =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB38iSnXjArEblknQSMqDim07fHM_dRbPA_IDg3F56CTqo_1-gIStXEPrBP8mfv2nMRyrvToNrmVE9lTbu-F9TV49IRWZr1W-4reIbGbN0NMWVBqT1d-El2A6SSRNFWgvX3p6cR2CGDx51KBQtsS_f7NeTVovS13SsaZdXLmw97rd2Zde1Vjnq3a30Jp35TVcSPD9Dcsso8cU90_aGh1X7qEfWUv2ot0IREjCb4_7U0FPboB8T80cCH_A";
export const FALLBACK_IMG_PEB =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAZQwmqr4e-fG8zkgbDfquMEOPCWLRUoP6ClGgI1WQgJlW0SHTY0227I52qRvFC6RWwpJ6xoOz829YKuUfp0PFKd__FOb3YIBzGLpansmaotqKkNCTWbqizLvncH6YikTAeNHHllRY7IHKG28WeX-O0_CphL7Sol08GlbuL_Q_aHiUz2kIpbubDQudMACXCo2NoUJo1R3XhjcGzPkGcRvGSnRz-8u8R3uTcT-UvO77WsywB2CGNWb84Oy1K7DeJrG-SvFo";

export function productHeroPath(categorySlug: string, modelSlug: string): string {
  return resolveImagePath(`products/${categorySlug}/${modelSlug}/hero.jpg`);
}

/** All mapped gallery-N stills for a model (skips unmapped indices). */
export function productGalleryPaths(categorySlug: string, modelSlug: string): string[] {
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
      return FALLBACK_IMG_PRESS;
    case "peb-machinery":
    case "panel-bender":
      return FALLBACK_IMG_PEB;
    default:
      return FALLBACK_IMG_LASER;
  }
}
