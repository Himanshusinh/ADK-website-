/**
 * Catalogue download list aligned to ADK print brochure series
 * (docs/ADK_Brochure_Extracted.md). No PDF binaries in-repo yet —
 * UI uses enquiry requests until client supplies files under public/catalogues/.
 */

export interface CatalogueItem {
  id: string;
  name: string;
  size: string;
  /** Optional product category slug for cross-links */
  categorySlug?: string;
  /** Brochure series alias when display name differs from site FL/PB branding */
  brochureAlias?: string;
}

export const catalogueItems: CatalogueItem[] = [
  {
    id: "CAT_FL_PIONEER",
    name: "Industrial Pioneer Series — Exchange Table Fiber Laser",
    size: "4.8 MB",
    categorySlug: "fiber-laser-cutting",
    brochureAlias: "ADK 3015 C – 6525 C",
  },
  {
    id: "CAT_FL_FUTURISTIC",
    name: "Futuristic Laser Series — Large Format (up to 24 m)",
    size: "5.5 MB",
    categorySlug: "fiber-laser-cutting",
    brochureAlias: "ADK 8025 SL – 24035 SL",
  },
  {
    id: "CAT_FL_INNOVATION",
    name: "In-demand Innovation — Single Pallet Fiber Laser (Fibercut)",
    size: "4.2 MB",
    categorySlug: "fiber-laser-cutting",
    brochureAlias: "ADK 3015 ES – 6525 ES",
  },
  {
    id: "CAT_FL_DUAL",
    name: "Dual-Position Exchange Table Fiber Laser",
    size: "3.9 MB",
    categorySlug: "fiber-laser-cutting",
    brochureAlias: "ADK 3015 D – 6525 D",
  },
  {
    id: "CAT_FL_TUBE",
    name: "Professional Tube Cutting Machine (GKS Series)",
    size: "4.0 MB",
    categorySlug: "fiber-laser-cutting",
    brochureAlias: "GKS 6016T2 – 12036B T3",
  },
  {
    id: "CAT_FL_LNR",
    name: "LNR Series — Tube + Plate Fiber Laser",
    size: "3.5 MB",
    categorySlug: "fiber-laser-cutting",
  },
  {
    id: "CAT_PB_NADK",
    name: "NADKpress CNC Press Brake — Technical Data Sheet",
    size: "3.2 MB",
    categorySlug: "cnc-press-brake",
    brochureAlias: "40T – 800T",
  },
  {
    id: "CAT_PL_GANTRY",
    name: "Gantry CNC Plasma Cutting Machine Catalogue",
    size: "3.8 MB",
    categorySlug: "cnc-plasma-cutting",
    brochureAlias: "ADK 2508 – 5508 P/F",
  },
  {
    id: "CAT_PL_TABLE_PORTABLE",
    name: "Table Type & Portable CNC Plasma",
    size: "3.1 MB",
    categorySlug: "cnc-plasma-cutting",
  },
  {
    id: "CAT_LW_4IN1",
    name: "4-in-1 Fiber Laser Welding Machine Overview",
    size: "2.9 MB",
    categorySlug: "fiber-laser-welding",
  },
  {
    id: "CAT_PEB",
    name: "PEB H-Beam Welding & SAW Gantry Line",
    size: "7.1 MB",
    categorySlug: "peb-machinery",
  },
  {
    id: "CAT_PB_PANEL",
    name: "Panel Bender Series (ADK-PB1400 P – PB2500 P)",
    size: "4.1 MB",
    categorySlug: "panel-bender",
  },
  {
    id: "CAT_NEWLY",
    name: "Newly Launched Products Overview",
    size: "2.4 MB",
    categorySlug: "newly-launched-products",
    brochureAlias: "Iron Worker · Laser Cutting Robot · Busbar · Pipe Bender",
  },
  {
    id: "CAT_SPARES",
    name: "Spares & Consumables Catalogue",
    size: "5.5 MB",
    categorySlug: "spares-consumables",
  },
  {
    id: "CAT_SH_VG_EXT",
    name: "Extended Range — Shearing & V Grooving (live site lines)",
    size: "2.8 MB",
    brochureAlias: "Outside print brochure · also on adkeng.com",
  },
];
