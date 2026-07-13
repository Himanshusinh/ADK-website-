// Image path helpers — drop client files into public/images/ using these conventions.

export const IMAGE_PATHS = {
  team: "/images/team",
  factory: "/images/factory",
  installations: "/images/installations",
  blog: "/images/blog",
  videoThumbnails: "/images/videos/thumbnails",
  products: "/images/products",
  clients: "/images/clients",
} as const;

export function productHeroPath(categorySlug: string, modelSlug: string): string {
  return `${IMAGE_PATHS.products}/${categorySlug}/${modelSlug}/hero.jpg`;
}

export function productGalleryPaths(categorySlug: string, modelSlug: string): string[] {
  return [
    `${IMAGE_PATHS.products}/${categorySlug}/${modelSlug}/gallery-1.jpg`,
    `${IMAGE_PATHS.products}/${categorySlug}/${modelSlug}/gallery-2.jpg`,
  ];
}

export function teamPhotoPath(filename: string): string {
  return `${IMAGE_PATHS.team}/${filename}`;
}

export function factoryPhotoPath(filename: string): string {
  return `${IMAGE_PATHS.factory}/${filename}`;
}

export function installationPhotoPath(filename: string): string {
  return `${IMAGE_PATHS.installations}/${filename}`;
}

export function blogHeroPath(slug: string): string {
  return `${IMAGE_PATHS.blog}/${slug}.jpg`;
}

export function videoThumbnailPath(id: string): string {
  return `${IMAGE_PATHS.videoThumbnails}/${id}.jpg`;
}

export function clientLogoPath(filename: string): string {
  return `${IMAGE_PATHS.clients}/${filename}`;
}

// Category-level fallbacks until per-model photos are uploaded
export const FALLBACK_IMG_LASER =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDjVmy45Wdcg-47h-bK5z5RU9W0abt_yHTY3yiXMp3-6swNoq60WtALnMUTABQVTq71U7fJzCIdxrCl7G7EJxTIkSihb7FtFu2ZUlTQaRM_OLB5wPd8aL5NDPjyc8uKdcaPSzn7bkZ3H2-lGKVqMd50i8LuoUee1PXUb1AO3JfIjcSojclqCiqgnGyHxYFIsRv1V2vdwZDMyZjrSwSTusS2rVdlqfPSpiH5fT21CWvKgJculpd9Doy2uA";

export const FALLBACK_IMG_PRESS =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB38iSnXjArEblknQSMqDim07fHM_dRbPA_IDg3F56CTqo_1-gIStXEPrBP8mfv2nMRyrvToNrmVE9lTbu-F9TV49IRWZr1W-4reIbGbN0NMWVBqT1d-El2A6SSRNFWgvX3p6cR2CGDx51KBQtsS_f7NeTVovS13SsaZdXLmw97rd2Zde1Vjnq3a30Jp35TVcSPD9Dcsso8cU90_aGh1X7qEfWUv2ot0IREjCb4_7U0FPboB8T80cCH_A";

export const FALLBACK_IMG_PEB =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAZQwmqr4e-fG8zkgbDfquMEOPCWLRUoP6ClGgI1WQgJlW0SHTY0227I52qRvFC6RWwpJ6xoOz829YKuUfp0PFKd__FOb3YIBzGLpansmaotqKkNCTWbqizLvncH6YikTAeNHHllRY7IHKG28WeX-O0_CphL7Sol08GlbuL_Q_aHiUz2kIpbubDQudMACXCo2NoUJo1R3XhjcGzPkGcRvGSnRz-8u8R3uTcT-UvO77WsywB2CGNWb84Oy1K7DeJrG-SvFo";

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
