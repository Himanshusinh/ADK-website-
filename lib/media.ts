// Image path helpers — resolved via Cloudinary media delivery network where uploaded, otherwise fallback to local /images/ paths.

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "ng7roe1n";
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto`;

// Cloudinary secure paths mappings for uploaded images
const CLOUDINARY_MAPPINGS: Record<string, string> = {
  'factory/santej-works-main.jpg': 'AC-QMS/Product details/Fiber Laser Cutting Machine ( Photos )/ADK MAKE/IMG_20240309_112027.jpg',
  'installations/fiber-laser-01.jpg': 'AC-QMS/Product details/Fiber Laser Cutting Machine ( Photos )/ADK MAKE/IMG_20240309_112027.jpg',
  'installations/laser-welding-01.jpg': 'AC-QMS/Product details/LASER WELDING CUTTING CLEANING MACHINE MINI TYPE ( Photos )/7538912108_60063077791_一体机.57.jpg',
  'installations/peb-welding-01.jpg': 'AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/Single Layer Forming Machine.jpg',
  'installations/plasma-01.jpg': 'AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/CNC Plasma Cutting Machine-TableType.jpg',
  'installations/press-brake-01.jpg': 'AC-QMS/Product details/CNC Prass Brake Machine ( Photos )/CNC Press Brake Machine.jpg',
  'products/cnc-plasma-cutting/gantry-plasma-cutting/gallery-1.jpg': 'AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/CNC Plasma Cutting Machine-Gantry Type.jpg',
  'products/cnc-plasma-cutting/gantry-plasma-cutting/hero.jpg': 'AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/CNC Plasma Cutting Machine-Gantry Type.jpg',
  'products/cnc-plasma-cutting/table-portable-plasma/gallery-1.jpg': 'AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/CNC Plasma Cutting Machine-Portable Type.jpg',
  'products/cnc-plasma-cutting/table-portable-plasma/hero.jpg': 'AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/CNC Plasma Cutting Machine-TableType.jpg',
  'products/cnc-press-brake/nadkpress-cnc-press-brake/gallery-1.jpg': 'AC-QMS/Product details/CNC Prass Brake Machine ( Photos )/ADK Press Brake.png',
  'products/cnc-press-brake/nadkpress-cnc-press-brake/gallery-2.jpg': 'AC-QMS/Product details/CNC Prass Brake Machine ( Photos )/CNC Press Brake (1).png',
  'products/cnc-press-brake/nadkpress-cnc-press-brake/hero.jpg': 'AC-QMS/Product details/Machine Photo/CNC Preess Brake/CNC Press Break Machine.jpg',
  'products/fiber-laser-cutting/dual-position-exchange-table/gallery-1.jpg': 'AC-QMS/Product details/Machine Photo/Laser Cutting Machine/M3015G/GKS-M3015G .2.jpg',
  'products/fiber-laser-cutting/dual-position-exchange-table/gallery-2.jpg': 'AC-QMS/Product details/Machine Photo/Laser Cutting Machine/M3015G/GKS-M3015G .3.jpg',
  'products/fiber-laser-cutting/dual-position-exchange-table/hero.jpg': 'AC-QMS/Product details/Machine Photo/Laser Cutting Machine/M3015G/GKS-M3015G .1.jpg',
  'products/fiber-laser-cutting/futuristic-laser-series/gallery-1.jpg': 'AC-QMS/Product details/Machine Photo/Laser Cutting Machine/王旭/26040SA/26040SA画册.682.jpg',
  'products/fiber-laser-cutting/futuristic-laser-series/gallery-2.jpg': 'AC-QMS/Product details/Machine Photo/Laser Cutting Machine/王旭/26032SLG/26032SL画出.680.jpg',
  'products/fiber-laser-cutting/futuristic-laser-series/hero.jpg': 'AC-QMS/Product details/Machine Photo/Laser Cutting Machine/王旭/26040SA/26040SA.298.jpg',
  'products/fiber-laser-cutting/industrial-pioneer-exchange-table/gallery-1.jpg': 'AC-QMS/Product details/Machine Photo/Laser Cutting Machine/GKS CPL3015B/CPL3015B 配赛德3.jpg',
  'products/fiber-laser-cutting/industrial-pioneer-exchange-table/gallery-2.jpg': 'AC-QMS/Product details/Machine Photo/Laser Cutting Machine/GKS CPL3015B/CPL3015B 配赛德4.png',
  'products/fiber-laser-cutting/industrial-pioneer-exchange-table/hero.jpg': 'AC-QMS/Product details/Machine Photo/Laser Cutting Machine/GKS CPL3015B/CPL3015B 配赛德2.png',
  'products/fiber-laser-cutting/professional-tube-cutting/gallery-1.jpg': 'AC-QMS/Product details/Machine Photo/Laser Cutting Machine/6024T2/6024T2.7.jpg',
  'products/fiber-laser-cutting/professional-tube-cutting/gallery-2.jpg': 'AC-QMS/Product details/Machine Photo/Laser Cutting Machine/6012TSM/GKS-6012TSM .3.png',
  'products/fiber-laser-cutting/professional-tube-cutting/hero.jpg': 'AC-QMS/Product details/Machine Photo/Laser Cutting Machine/6024T2/6024T2.9.jpg',
  'products/fiber-laser-cutting/single-pallet-es-series/gallery-1.jpg': 'AC-QMS/Product details/Machine Photo/Laser Cutting Machine/王旭/3015EⅡ/3015E最新二.624.png',
  'products/fiber-laser-cutting/single-pallet-es-series/gallery-2.jpg': 'AC-QMS/Product details/Machine Photo/Laser Cutting Machine/王旭/3015EⅡ/3015E最新二.626.png',
  'products/fiber-laser-cutting/single-pallet-es-series/hero.jpg': 'AC-QMS/Product details/Machine Photo/Laser Cutting Machine/王旭/3015EⅡ/3015E最新二.622.png',
  'products/fiber-laser-cutting/tube-plate-lnr-series/gallery-1.jpg': 'AC-QMS/Product details/Machine Photo/Laser Cutting Machine/王旭/3015LNR/LNR.135.png',
  'products/fiber-laser-cutting/tube-plate-lnr-series/gallery-2.jpg': 'AC-QMS/Product details/Machine Photo/Laser Cutting Machine/王旭/6025LNⅡ/6025LN.359.png',
  'products/fiber-laser-cutting/tube-plate-lnr-series/hero.jpg': 'AC-QMS/Product details/Machine Photo/Laser Cutting Machine/王旭/3015LNR/LNR.134.jpg',
  'products/fiber-laser-welding/4in1-fiber-laser-welding/gallery-1.jpg': 'AC-QMS/Product details/LASER WELDING CUTTING CLEANING MACHINE MINI TYPE ( Photos )/CWFL-1500ANW手持激光焊接一体机-1.jpg',
  'products/fiber-laser-welding/4in1-fiber-laser-welding/gallery-2.jpg': 'AC-QMS/Product details/LASER WELDING CUTTING CLEANING MACHINE MINI TYPE ( Photos )/7538912108_60063127257_一体机.93.jpg',
  'products/fiber-laser-welding/4in1-fiber-laser-welding/hero.jpg': 'AC-QMS/Product details/Machine Photo/Laser Welding Machine/Fiber Laser Welding Machine.jpg',
  'products/panel-bender/adk-panel-bender-series/hero.jpg': 'AC-QMS/Product details/Machine Photo/Panel bender/Panel Bender.png',
  'products/peb-machinery/peb-h-beam-welding/hero.jpg': 'AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/Single Layer Forming Machine.jpg',
  'products/peb-machinery/peb-saw-gantry-welding/hero.jpg': 'AC-QMS/Product details/CNC Plasma Cutting Machine ( Photos )/Single Layer Forming Machine.jpg',
  'products/shearing-machine/hydraulic-shearing-machine/gallery-1.jpg': 'AC-QMS/Product details/Shearing Machine ( Photos )/QC12K-8x3200 photos/1.png',
  'products/shearing-machine/hydraulic-shearing-machine/gallery-2.jpg': 'AC-QMS/Product details/Shearing Machine ( Photos )/QC12K-8x3200 photos/2.png',
  'products/shearing-machine/hydraulic-shearing-machine/hero.jpg': 'AC-QMS/Product details/Shearing Machine ( Photos )/Swing sheaing machine -1.png',
  'products/spares-consumables/spares-consumables-catalogue/hero.jpg': 'AC-QMS/Product details/LASER WELDING CUTTING CLEANING MACHINE MINI TYPE ( Photos )/7538912108_60063117958_一体机.92.jpg',
  'team/img1.jpg': 'AC-QMS/Group Photos/img1.heic',
  'team/img2.jpg': 'AC-QMS/Group Photos/img2.heic',
};

// Helper to resolve the correct path (Cloudinary if uploaded, fallback to local /images/)
export function resolveImagePath(localRelPath: string): string {
  if (localRelPath in CLOUDINARY_MAPPINGS) {
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
export const ADK_LOGO_URL = encodeURI(`${CLOUDINARY_BASE_URL}/AC-QMS/Product details/ADK-Cloud/ADK LOGO-01.png`);
export const BLUEPRINT_SCHEMATIC_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuCOzIemnEm6V7GR2bo2GIhMBDg-NJl725eBjH6It2PL5Sjo3WhVXoleVnbj2RcKOtirLuRswUqVRNvXpHSz2a0kKCw-CTpTVqGVLS7GCKiWDHyrcsm_fQB46p0q66NNXsvVYrOjLtLu818Swx4zkFGA9-Fn2yq50Rx7pQADrf3UTTpD-48Xwfjm7Zxli8zgv18UZ5_YoHFaIvX_LtmhrsF5NXHgkt5MrIIZGMyZ0t623K4ca27FPmHufTV1KZmThJQB2H5pD3sq7CBy5-E";
export const CHATBOT_ICON_URL = "/images/chatbot-icon.png";
export const WHATSAPP_LOGO_URL = "/images/wp_logo.jpg";

export const FALLBACK_IMG_LASER = "https://lh3.googleusercontent.com/aida-public/AB6AXuDjVmy45Wdcg-47h-bK5z5RU9W0abt_yHTY3yiXMp3-6swNoq60WtALnMUTABQVTq71U7fJzCIdxrCl7G7EJxTIkSihb7FtFu2ZUlTQaRM_OLB5wPd8aL5NDPjyc8uKdcaPSzn7bkZ3H2-lGKVqMd50i8LuoUee1PXUb1AO3JfIjcSojclqCiqgnGyHxYFIsRv1V2vdwZDMyZjrSwSTusS2rVdlqfPSpiH5fT21CWvKgJculpd9Doy2uA";
export const FALLBACK_IMG_PRESS = "https://lh3.googleusercontent.com/aida-public/AB6AXuB38iSnXjArEblknQSMqDim07fHM_dRbPA_IDg3F56CTqo_1-gIStXEPrBP8mfv2nMRyrvToNrmVE9lTbu-F9TV49IRWZr1W-4reIbGbN0NMWVBqT1d-El2A6SSRNFWgvX3p6cR2CGDx51KBQtsS_f7NeTVovS13SsaZdXLmw97rd2Zde1Vjnq3a30Jp35TVcSPD9Dcsso8cU90_aGh1X7qEfWUv2ot0IREjCb4_7U0FPboB8T80cCH_A";
export const FALLBACK_IMG_PEB = "https://lh3.googleusercontent.com/aida-public/AB6AXuAZQwmqr4e-fG8zkgbDfquMEOPCWLRUoP6ClGgI1WQgJlW0SHTY0227I52qRvFC6RWwpJ6xoOz829YKuUfp0PFKd__FOb3YIBzGLpansmaotqKkNCTWbqizLvncH6YikTAeNHHllRY7IHKG28WeX-O0_CphL7Sol08GlbuL_Q_aHiUz2kIpbubDQudMACXCo2NoUJo1R3XhjcGzPkGcRvGSnRz-8u8R3uTcT-UvO77WsywB2CGNWb84Oy1K7DeJrG-SvFo";

export function productHeroPath(categorySlug: string, modelSlug: string): string {
  return resolveImagePath(`products/${categorySlug}/${modelSlug}/hero.jpg`);
}

export function productGalleryPaths(categorySlug: string, modelSlug: string): string[] {
  return [
    resolveImagePath(`products/${categorySlug}/${modelSlug}/gallery-1.jpg`),
    resolveImagePath(`products/${categorySlug}/${modelSlug}/gallery-2.jpg`),
  ];
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
