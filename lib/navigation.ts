export type MegaMenuId = "products" | "solutions" | "more";

export interface NavChildLink {
  label: string;
  path: string;
  icon?: string;
  description?: string;
}

export interface NavItem {
  label: string;
  path: string; 
  mega?: MegaMenuId;
  children?: NavChildLink[];
  activePaths?: string[];
}

export const featuredProductSlugs = [
  "fiber-laser-cutting",
  "cnc-plasma-cutting",
  "cnc-press-brake",
  "panel-bender",
  "peb-machinery",
] as const;

export const productCompactLinks: NavChildLink[] = [
  { label: "All Products", path: "/products" },
  { label: "Fiber Laser", path: "/products/fiber-laser-cutting", icon: "flare" },
  { label: "CNC Plasma", path: "/products/cnc-plasma-cutting", icon: "precision_manufacturing" },
  { label: "Press Brake", path: "/products/cnc-press-brake", icon: "architecture" },
  { label: "Panel Bender", path: "/products/panel-bender", icon: "view_in_ar" },
  { label: "PEB Machinery", path: "/products/peb-machinery", icon: "foundation" },
];

export const solutionsCompactLinks: NavChildLink[] = [
  { label: "Industries", path: "/applications", icon: "factory" },
  { label: "Use Cases", path: "/clients", icon: "engineering" },
  { label: "View All Sectors", path: "/applications", icon: "grid_view" },
];

export const companyCorporateLinks: NavChildLink[] = [
  { label: "About", path: "/about", icon: "info" },
  { label: "Clients", path: "/clients", icon: "groups" },
  { label: "Gallery", path: "/gallery", icon: "photo_library" },
  { label: "News", path: "/news", icon: "newspaper" },
  { label: "Careers", path: "/career", icon: "work" },
];

export const companyResourceLinks: NavChildLink[] = [
  { label: "Resources", path: "/resources", icon: "library_books" },
  { label: "Technical Blog", path: "/resources/blog", icon: "menu_book" },
  { label: "Catalogues", path: "/resources/catalogues", icon: "download_for_offline" },
  { label: "FAQ & Support", path: "/resources/faq", icon: "quiz" },
];

export const primaryNav: NavItem[] = [
  {
    label: "Home",
    path: "/",
    activePaths: ["/"],
  },
  {
    label: "Products",
    path: "/products",
    mega: "products",
    children: productCompactLinks,
    activePaths: ["/products"],
  },
  {
    label: "Solutions",
    path: "/applications",
    mega: "solutions",
    children: solutionsCompactLinks,
    activePaths: ["/applications", "/clients"],
  },
  {
    label: "Contact",
    path: "/contact",
    activePaths: ["/contact"],
  },
  {
    label: "More",
    path: "/about",
    mega: "more",
    children: [...companyCorporateLinks, ...companyResourceLinks],
    activePaths: [
      "/about",
      "/gallery",
      "/news",
      "/career",
      "/resources",
    ],
  },
];

export function isNavItemActive(pathname: string, item: NavItem): boolean {
  if (item.path === "/") return pathname === "/";

  const paths = item.activePaths ?? [item.path];
  return paths.some((p) => {
    if (p === "/") return pathname === "/";
    return pathname === p || pathname.startsWith(`${p}/`);
  });
}

export function formatNavIndex(index: number): string {
  return `${String(index + 1).padStart(2, "0")}.`;
}
