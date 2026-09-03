export interface SpecRow {
  label: string;
  value: string;
}

export interface ProductModel {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  specifications: SpecRow[];
  features: string[];
  image: string;
  images?: string[];
  videoUrl?: string;
  /** Compatible / processable materials shown on PDP */
  materials?: string[];
  /** Direct brochure PDF URL when available; else catalogues hub */
  brochureUrl?: string;
  /** Optional industry slugs to highlight on PDP */
  applications?: string[];
  status: 'IN_STOCK' | 'READY' | 'CUSTOM' | 'PRE-ORDER';
  specsSummary: {
    [key: string]: string;
  };
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
  tagline: string;
  description: string;
  models: ProductModel[];
}

export interface IndustryApplication {
  id: string;
  name: string;
  slug: string;
  icon: string;
  tagline: string;
  description: string;
  challenges: string[];
  solutions: string[];
  recommendedMachines: string[];
  heroImage: string;
}

export interface CapabilityHighlight {
  id: string;
  title: string;
  industry: string;
  summary: string;
  outcomes: { label: string; value: string }[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  heroImage?: string;
  category?: string;
}

export interface MediaItem {
  id: string;
  title: string;
  image?: string;
  type?: "portrait" | "group" | "facility";
  sublabel?: string;
  role?: string;
  department?: string;
}

export interface InstallationPhoto {
  id: string;
  title: string;
  client: string;
  city: string;
  image?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  duration: string;
  thumbnail?: string;
  embedUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  description: string;
  requirements: string[];
}

export interface NewsEvent {
  id: string;
  title: string;
  date: string;
  location?: string;
  type: 'TRADE_FAIR' | 'LAUNCH' | 'MILESTONE';
  description: string;
}

export interface Branch {
  city: string;
}

export interface ContactDepartment {
  label: string;
  phones: string[];
  emails: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
}

import {
  productHeroPath,
  productGalleryPaths,
  teamPhotoPath,
  factoryPhotoPath,
  installationPhotoPath,
  blogHeroPath,
  videoThumbnailPath,
  applicationHeroPath,
  FALLBACK_IMG_LASER,
  FALLBACK_IMG_PRESS,
  FALLBACK_IMG_PEB,
} from "./media";

export type { ClientLogo } from "./clientLogos";
export { clientLogos, clientMarqueeRowA, clientMarqueeRowB } from "./clientLogos";

// References to centralized Cloudinary image assets
const IMG_LASER = FALLBACK_IMG_LASER;
const IMG_PRESS = FALLBACK_IMG_PRESS;
const IMG_PEB = FALLBACK_IMG_PEB;

// -------------------------------------------------------------
// COMPANY & SITE FACTS
// -------------------------------------------------------------

export const companyInfo = {
  name: "ADK Engineering & Solutions",
  tagline: "Crafting Precision, Shaping Tomorrow",
  founded: 2015,
  website: "https://www.adkeng.com",
  overview:
    "ADK Engineering & Solutions is a premier provider of advanced sheet metal machinery across manufacturing, structural steel, telecommunications, and heavy engineering sectors. We supply, configure, and service a complete range of fiber laser cutting (FL Series), CNC plasma (PL Series), CNC press brakes (PB Series), laser welding (LW Series), PEB, and panel bending solutions.",
  corporateAddress:
    "A-503/504, Empire Business Hub, Nr. Shukan Mall, Science City Road, Sola, Ahmedabad 380060, Gujarat",
  worksAddress:
    "Experience & Service Center, Science City Road, Ahmedabad 380060, Gujarat",
  generalPhones: ["+91 99099 53637", "079 48930224"],
  generalEmails: ["info@adkeng.com", "adkeng09@gmail.com"],
  stats: {
    yearsExperience: "16+",
    customers: "850+",
    team: "50+",
    installations: "850+",
  },
};

export const branches: Branch[] = [
  { city: "Ahmedabad" },
  { city: "Pune" },
  { city: "Nashik" },
  { city: "Nagpur" },
  { city: "Kolhapur" },
  { city: "Indore" },
  { city: "Jaipur" },
  { city: "Kolkata" },
  { city: "Bhopal" },
  { city: "Hubli" },
];

export const contactDepartments: ContactDepartment[] = [
  {
    label: "Inquiry & Sales",
    phones: ["+91 92270 85416", "+91 63526 44186"],
    emails: ["inquiry1@adkeng.com", "marketing@adkeng.com"],
  },
  {
    label: "Service & Support",
    phones: ["+91 95100 41629", "+91 82008 52505"],
    emails: ["service@adkeng.com"],
  },
  {
    label: "Spares & Consumables",
    phones: ["+91 63526 43947"],
    emails: ["spares@adkeng.com"],
  },
];

/** Featured clients referenced by installation photos and legacy content */
export const customers = [
  "ISRO (Indian Space Research Organisation)",
  "Bajaj Steel Industries",
  "Cast Mech Technology",
  "Bhoomi Engineering",
  "Energy Mission",
  "J.K. Foundry",
  "Impress Engineers",
  "Digvijay Engineers",
  "MetBuild",
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2015",
    title: "Company Founded",
    desc: "Born with the goal of providing the best technical and budget-friendly sheet metal solutions with reliable service support.",
  },
  {
    year: "2016",
    title: "First Major Installations",
    desc: "Installed the 1st Fiber Laser Cutting Machine and 8 Plasma Cutting Machines, establishing ADK in the market.",
  },
  {
    year: "2017",
    title: "100+ Customers Served",
    desc: "Within two years, ADK served 100+ customers with reliable technical solutions and strong market acceptance.",
  },
  {
    year: "2019",
    title: "Press Brake & PEB Launch",
    desc: "Launched the Press Brake Machine and PEB Machinery, expanding the product portfolio for structural fabrication.",
  },
  {
    year: "2020",
    title: "Pandemic-Era Growth",
    desc: "Launched Fiber Laser Welding Machine and achieved installation of 48 machines within 6 months during the global pandemic.",
  },
  {
    year: "2023",
    title: "India's First 30KW Laser",
    desc: "Installed India's first 30KW Fiber Laser Cutting Machine. Crossed 400+ successful installations including government sectors like ISRO.",
  },
  {
    year: "2025",
    title: "850+ Installations",
    desc: "Received first order for 3000×24000mm table-size laser machine. Vision to empower fabrication shops nationwide. Crossed 850+ installations.",
  },
];

// -------------------------------------------------------------
// MEDIA COLLECTIONS (drop files into public/images/ — see lib/media.ts)
// -------------------------------------------------------------

export const teamPhotos: MediaItem[] = [
  {
    id: "team_group",
    title: "ADK Leadership Team",
    type: "group",
    image: teamPhotoPath("group.jpg"),
    sublabel: "Group photo pending from client",
  },
  {
    id: "team_md",
    title: "Managing Director",
    type: "portrait",
    role: "Founder & Strategic Leadership",
    department: "Executive",
    image: teamPhotoPath("managing-director.jpg"),
  },
  {
    id: "team_eng",
    title: "Head of Engineering",
    type: "portrait",
    role: "R&D & Product Development",
    department: "Engineering",
    image: teamPhotoPath("head-engineering.jpg"),
  },
  {
    id: "team_ops",
    title: "Head of Operations",
    type: "portrait",
    role: "Manufacturing & Quality",
    department: "Operations",
    image: teamPhotoPath("head-operations.jpg"),
  },
  {
    id: "team_service",
    title: "Head of After-Sales",
    type: "portrait",
    role: "Service & Support",
    department: "Customer Care",
    image: teamPhotoPath("head-after-sales.jpg"),
  },
];

export const factoryPhotos: MediaItem[] = [
  {
    id: "fac_01",
    title: "Ahmedabad Facility — Experience & Service Hub",
    type: "facility",
    image: factoryPhotoPath("santej-works-main.jpg"),
    sublabel: "Facility photo",
  },
  {
    id: "fac_02",
    title: "Gantry Assembly Floor",
    type: "facility",
    image: factoryPhotoPath("gantry-assembly.jpg"),
    sublabel: "Assembly floor photo",
  },
  {
    id: "fac_03",
    title: "Optical Calibration Lab",
    type: "facility",
    image: factoryPhotoPath("optical-calibration-lab.jpg"),
    sublabel: "Facility photo",
  },
  {
    id: "fac_04",
    title: "Hydraulic Test Bay",
    type: "facility",
    image: factoryPhotoPath("hydraulic-test-bay.jpg"),
    sublabel: "Infrastructure photo",
  },
];

export const installationPhotos: InstallationPhoto[] = [
  {
    id: "inst_01",
    title: "Fiber Laser Cutting Installation",
    client: customers[0],
    city: branches[0].city,
    image: installationPhotoPath("fiber-laser-01.jpg"),
  },
  {
    id: "inst_02",
    title: "CNC Press Brake Installation",
    client: customers[1],
    city: branches[1].city,
    image: installationPhotoPath("press-brake-01.jpg"),
  },
  {
    id: "inst_03",
    title: "Panel Bender Installation",
    client: customers[2],
    city: branches[2].city,
    image: installationPhotoPath("panel-bender-01.jpg"),
  },
  {
    id: "inst_04",
    title: "PEB Beam Welding Line",
    client: customers[3],
    city: branches[3].city,
    image: installationPhotoPath("peb-welding-01.jpg"),
  },
  {
    id: "inst_05",
    title: "CNC Plasma Profiling Unit",
    client: customers[4],
    city: branches[4].city,
    image: installationPhotoPath("plasma-01.jpg"),
  },
  {
    id: "inst_06",
    title: "Fiber Laser Welding Workshop",
    client: customers[5],
    city: branches[5].city,
    image: installationPhotoPath("laser-welding-01.jpg"),
  },
];

export const videoItems: VideoItem[] = [
  {
    id: "V_01",
    title: "FL Series Exchange-Table Fiber Laser Cutting Demo",
    duration: "2:45",
    thumbnail: videoThumbnailPath("V_01"),
  },
  {
    id: "V_02",
    title: "PB Series CNC Press Brake Bend Test",
    duration: "1:30",
    thumbnail: videoThumbnailPath("V_02"),
  },
  {
    id: "V_03",
    title: "PB-P Series Panel Bender Folding Demonstration",
    duration: "3:15",
    thumbnail: videoThumbnailPath("V_03"),
  },
];

// -------------------------------------------------------------
// PRODUCT CATALOGUE
// -------------------------------------------------------------

const rawCategories: ProductCategory[] = [
  {
    id: "cat_01",
    name: "Fiber Laser Cutting",
    slug: "fiber-laser-cutting",
    icon: "flare",
    tagline: "High-speed fiber laser cutting (FL Series) from 1kW to 60kW with ±0.03 mm accuracy.",
    description:
      "ADK FL Series fiber laser cutting machines cover exchange-table, single-pallet, dual-position, futuristic large-format, tube cutting, and tube+plate configurations. Built with heavy steel pipe beds, quick exchange tables, and RAYCUS, IPG, or MAX PHOTONICS sources for round-the-clock industrial production.",
    models: [
      {
        id: "FL-3015C",
        name: "FL Series — Industrial Pioneer (Exchange Table)",
        slug: "industrial-pioneer-exchange-table",
        tagline: "Industrial Pioneer Series — ADK 3015 C–6525 C quick-exchange table for continuous sheet cutting",
        description:
          "Also listed in the ADK print catalogue as Industrial Pioneer Series (models ADK 3015 C through ADK 6525 C). Super heavy steel pipe welded bed with quick exchange table that improves production efficiency and saves labour. Working areas from 3000×1500 mm to 6500×2500 mm.",
        status: "IN_STOCK",
        image: "/ADK product images/fiber laser cutting machine/ChatGPT Image Aug 26, 2026, 12_02_49 PM.png",
        specsSummary: {
          Models: "ADK FL 3015C – 6525C",
          Speed: "100 m/min",
          Accuracy: "±0.03 mm",
        },
        features: [
          "Super heavy steel pipe welded bed construction",
          "Quick exchange table for continuous production",
          "Up to 60KW laser source capacity",
          "RAYCUS, IPG, MAX PHOTONICS power sources",
        ],
        specifications: [
          { label: "Models", value: "ADK 3015 C / 6515 C / 6520 C / 6525 C (site FL 3015C–6525C)" },
          { label: "Brochure series", value: "Industrial Pioneer Series" },
          { label: "Working Area", value: "3000×1500 / 6500×1500 / 6500×2000 / 6500×2500 mm" },
          { label: "Speed", value: "100 m/min" },
          { label: "Accuracy", value: "±0.03 mm" },
          { label: "Machine Capacity", value: "Up to 60KW" },
          { label: "Power Source", value: "RAYCUS, IPG, MAX PHOTONICS" },
        ],
      },
      {
        id: "FL-8025SL",
        name: "FL Series — High-Power Large Format (Futuristic)",
        slug: "futuristic-laser-series",
        tagline: "Futuristic Laser Series — ADK 8025 SL–24035 SL up to 24 m & 60 kW",
        description:
          "Catalogue Futuristic Laser Series: super large heavy-duty structure for larger plates with smooth finish. Models ADK 8025 SL, 14030 SL, and 24035 SL. India's first 30KW installation was from this series.",
        status: "CUSTOM",
        image: "/ADK product images/fiber laser cutting machine/c241836d-4276-4292-bed0-7a6e11bab879.png",
        specsSummary: {
          Models: "ADK 8025 SL – 24035 SL",
          Max_Length: "24 m",
          Power: "Up to 60KW",
        },
        features: [
          "Super large heavy-duty gantry structure",
          "Excellent thick plate cutting with smooth finish",
          "Working areas up to 3500×24000 mm",
          "High-power sources up to 60KW",
        ],
        specifications: [
          { label: "Models", value: "ADK 8025 SL / 14030 SL / 24035 SL" },
          { label: "Brochure series", value: "Futuristic Laser Series" },
          { label: "Working Area", value: "2500×8000 / 3000×14000 / 3500×24000 mm" },
          { label: "Speed", value: "100 m/min" },
          { label: "Accuracy", value: "±0.05 mm/m" },
          { label: "Machine Capacity", value: "Up to 60KW" },
          { label: "Power Source", value: "RAYCUS, IPG, MAX PHOTONICS" },
        ],
      },
      {
        id: "FL-3015ES",
        name: "FL Series — In-demand Innovation (Single Pallet)",
        slug: "single-pallet-es-series",
        tagline: "In-demand Innovation / Fibercut — ADK 3015 ES–6525 ES single pallet",
        description:
          "Catalogue In-demand Innovation (Fibercut-3015): single pallet machines with standard and custom table sizes. Easy loading and unloading, cost-effective and user-friendly — capturing high market share in its class.",
        status: "IN_STOCK",
        image: "/ADK product images/fiber laser cutting machine/ChatGPT Image Aug 26, 2026, 12_05_03 PM.png",
        specsSummary: {
          Models: "ADK 3015 ES – 6525 ES",
          Speed: "100 m/min",
          Accuracy: "±0.03 mm",
        },
        features: [
          "Standard table sizes with customer options",
          "Easy loading and unloading",
          "Cost-effective for job shops and SMEs",
          "Up to 60KW source compatibility",
        ],
        specifications: [
          { label: "Models", value: "ADK 3015 ES / 6515 ES / 6520 ES / 6525 ES" },
          { label: "Brochure series", value: "In-demand Innovation (Fibercut)" },
          { label: "Working Area", value: "3000×1500 / 6500×1500 / 6500×2000 / 6500×2500 mm" },
          { label: "Speed", value: "100 m/min" },
          { label: "Accuracy", value: "±0.03 mm" },
          { label: "Machine Capacity", value: "Up to 60KW" },
          { label: "Power Source", value: "RAYCUS, MAX PHOTONICS, IPG" },
        ],
      },
      {
        id: "FL-3015D",
        name: "FL Series — Dual-Position Exchange Table",
        slug: "dual-position-exchange-table",
        tagline: "FL 3015D–6525D 15–20 second table exchange for high volume cutting",
        description:
          "Designed for higher productivity in small and medium parts cutting. Used by sheet metal fabricators, panel manufacturers, cabinet makers, and equipment producers. Table exchange time is just 15–20 seconds.",
        status: "IN_STOCK",
        image: "/ADK product images/fiber laser cutting machine/ChatGPT Image Aug 26, 2026, 12_02_49 PM.png",
        specsSummary: {
          Models: "ADK FL 3015D – 6525D",
          Exchange: "15–20 sec",
          Speed: "100 m/min",
        },
        features: [
          "Dual-position exchange table",
          "15–20 second table swap time",
          "Ideal for panel and kitchen equipment producers",
          "Up to 60KW laser capacity",
        ],
        specifications: [
          { label: "Models", value: "ADK FL 3015D / ADK FL 4020D / ADK FL 6515D / ADK FL 6520D / ADK FL 6525D" },
          { label: "Working Area", value: "3000×1500 / 4000×2000 / 6500×1500 / 6500×2000 / 6500×2500 mm" },
          { label: "Speed", value: "100 m/min" },
          { label: "Accuracy", value: "±0.03 mm" },
          { label: "Machine Capacity", value: "Up to 60KW" },
          { label: "Power Source", value: "RAYCUS, MAX PHOTONICS, IPG" },
        ],
      },
      {
        id: "FL-GKS",
        name: "FL Series — Professional Tube Cutting",
        slug: "professional-tube-cutting",
        tagline: "GKS Series — round, square & profiled pipe cutting (catalogue GKS codes)",
        description:
          "Catalogue professional tube cutting: round, square, rectangular pipes, channel, angle, I-beams, and other profiled steel. Precision pneumatic chuck with four-jaw automatic centering clamping.",
        status: "READY",
        image: "/ADK product images/fiber laser cutting machine/c241836d-4276-4292-bed0-7a6e11bab879.png",
        specsSummary: {
          Models: "GKS 6016T2 – 12036B T3",
          Pipe_Range: "10–250 mm",
          Power: "Up to 12KW",
        },
        features: [
          "Precision pneumatic four-jaw auto-centering chuck",
          "Round, square, rectangular and profiled steel cutting",
          "2-chuck and 3-chuck configurations available",
          "Up to 12000W laser power option",
        ],
        materials: [
          "Round Pipe",
          "Square Tube",
          "Rectangular Tube",
          "Channel / Angle / I-Beam",
          "Mild Steel",
          "Stainless Steel",
        ],
        specifications: [
          { label: "Models", value: "GKS 6016T2 / 9016T2 / 6024T2 / 6036T2 / 6036T3 / 9036 T3 / 12036B T3" },
          { label: "Brochure series", value: "Professional Tube Cutting (GKS)" },
          { label: "Round Pipe Capacity", value: "10–160 mm (6016) / 20–250 mm (6024+)" },
          { label: "Effective Cutting Length", value: "6500 mm / 9500 mm / 12500 mm" },
          { label: "Rotating Speed", value: "60–140 r/min" },
          { label: "Single Pipe Load", value: "80–1200 KG" },
          { label: "Laser Power", value: "Up to 12000W" },
        ],
      },
      {
        id: "FL-LNR",
        name: "FL Series — Tube + Plate LNR",
        slug: "tube-plate-lnr-series",
        tagline: "LNR SERIES — one machine for dual pipe and sheet cutting",
        description:
          "Catalogue LNR SERIES: dual pipe and sheet cutting in one machine, saving floor space and capital. Optional automatic loading/unloading and three-chuck configurations available.",
        status: "CUSTOM",
        image: "/ADK product images/fiber laser cutting machine/ChatGPT Image Aug 26, 2026, 12_05_03 PM.png",
        specsSummary: {
          Models: "ADK LNR Series",
          Function: "Tube + Plate",
          Options: "Auto load/unload",
        },
        features: [
          "Dual pipe and sheet cutting in one machine",
          "Optional automatic loading and unloading system",
          "Three-chuck option for long tube processing",
          "Space and cost savings vs. separate machines",
        ],
        specifications: [
          { label: "Cutting Modes", value: "Sheet metal profiling + tube/pipe cutting" },
          { label: "Optional Facilities", value: "Automatic loading/unloading, three-chuck option" },
          { label: "Laser Sources", value: "RAYCUS, IPG, MAX PHOTONICS" },
          { label: "Configuration", value: "Custom per application requirements" },
        ],
      },
    ],
  },
  {
    id: "cat_02",
    name: "CNC Plasma Cutting",
    slug: "cnc-plasma-cutting",
    icon: "precision_manufacturing",
    tagline: "PL Series gantry, table, and portable CNC plasma systems with Hypertherm sources.",
    description:
      "ADK PL Series CNC plasma cutting machines include heavy-duty gantry type, table type, and portable configurations. Features anti-collision systems, backlash-free rack & pinion drives, and Hypertherm PMX/MAXPRO plasma sources for structural steel profiling.",
    models: [
      {
        id: "PL-2508",
        name: "PL Series — Gantry Type CNC Plasma",
        slug: "gantry-plasma-cutting",
        tagline: "PL 2508–5508 P/F heavy-duty gantry structure for structural profiling",
        description:
          "Heavy duty gantry type structure with dual shaft linear motion guide, rack & pinion drive, anti-collision system, and high-tension cup spring backlash compensation. Hypertherm plasma sources from PMX 45 to MAXPRO 200.",
        status: "READY",
        image: "/ADK product images/CNC plazma cutting machine/a2afb5aa-7812-4b39-9366-fa29f01a37a0.png",
        specsSummary: {
          Models: "ADK PL 2508 – 5508 P/F",
          Speed: "0–12000 mm/min",
          Accuracy: "±0.03 mm/3m",
        },
        features: [
          "Heavy duty gantry type structure",
          "Anti-collision with proximity protection",
          "Backlash-free rack & pinion drive",
          "Hypertherm PMX 45 to MAXPRO 200 sources",
        ],
        specifications: [
          { label: "Models", value: "ADK PL 2508 P/F / ADK PL 3508 P/F / ADK PL 4008 P/F / ADK PL 5508 P/F" },
          { label: "Working Width", value: "1800×6500 / 2800×6500 / 3200×6500 / 4500×6500 mm" },
          { label: "Speed", value: "0–12000 mm/min" },
          { label: "Accuracy", value: "±0.03 mm/3m" },
          { label: "Power Source", value: "PMX 45, PMX 65, PMX 85, PMX 105, PMX 125, MAXPRO 200" },
          { label: "Source Make", value: "Hypertherm" },
        ],
      },
      {
        id: "PL-TABLE",
        name: "PL Series — Table Type CNC Plasma",
        slug: "table-type-plasma",
        tagline: "PL Series table type plasma for workshop plate profiling",
        description:
          "Table type CNC plasma systems for workshops needing dedicated bed capacity. Track widths from 2500 mm and above with customizable track lengths up to 8000 mm and beyond.",
        status: "READY",
        image: "/ADK product images/CNC plazma cutting machine/30e5a74f-1939-46de-88a1-50ecd26ed8ef.png",
        specsSummary: {
          Models: "ADK PL Table Type",
          Track: "Up to 8000+ mm",
          Source: "Hypertherm USA",
        },
        features: [
          "Dedicated table type configuration",
          "Dual linear motion guide transmission",
          "Heat resistive heavy duty iron frame",
          "FastCam nesting software (Australia)",
        ],
        specifications: [
          { label: "Table Track Width", value: "2500, 3500, 4200 mm & above" },
          { label: "Track Length", value: "4000, 6000, 8000 mm & above" },
          { label: "Controller", value: "FLSK 2300B (Weldarc) / NC Controller" },
          { label: "Power Source", value: "Hypertherm, USA" },
          { label: "Rapid Positioning Speed", value: "0–12000 mm/min" },
        ],
      },
      {
        id: "PL-PORTABLE",
        name: "PL Series — Portable CNC Plasma",
        slug: "portable-plasma",
        tagline: "PL Series portable plasma for flexible on-site and shop-floor cutting",
        description:
          "Portable CNC plasma systems for flexible deployment across the shop floor or temporary cutting bays. Compact cutting area with Hypertherm sources and NC control.",
        status: "READY",
        image: IMG_LASER,
        specsSummary: {
          Models: "ADK PL Portable",
          Area: "1250×2500 mm",
          Source: "Hypertherm USA",
        },
        features: [
          "Portable frame for flexible workshop deployment",
          "Compact cutting envelope for job shops",
          "Hypertherm plasma source options",
          "NC controller with nesting support",
        ],
        specifications: [
          { label: "Portable Cutting Area", value: "1250×2500 mm" },
          { label: "Controller", value: "FLSK 2300B (Weldarc) / NC Controller" },
          { label: "Power Source", value: "Hypertherm, USA" },
          { label: "Rapid Positioning Speed", value: "0–12000 mm/min" },
          { label: "Application", value: "Structural plate, repair bays, flexible job work" },
        ],
      },
    ],
  },
  {
    id: "cat_03",
    name: "CNC Press Brake",
    slug: "cnc-press-brake",
    icon: "architecture",
    tagline: "PB Series CNC, NC, and tandem / heavy-tonnage press brakes from 40T to 800T+.",
    description:
      "PB Series press brakes feature integrated welded frames with shot-blast anti-rust treatment, servo or NC main drives, DSP laser protection on CNC models, mechanical crowning, and configurations from standard CNC/NC machines to tandem and heavy-tonnage lines.",
    models: [
      {
        id: "PB-SERIES",
        name: "PB Series — CNC Press Brake (NADKpress)",
        slug: "nadkpress-cnc-press-brake",
        tagline: "NADKpress catalogue line — servo CNC press brake, 40T–800T, 4/5/7/9 axis",
        description:
          "Catalogue brand NADKpress. Integrated welded frame with tempering; Y1/Y2 synchronous ram; servo main motor (~60% lower energy); high-frequency hydraulics. Brochure data sheet covers configurations from 40T×1600 mm through 800T×8000 mm.",
        status: "READY",
        image: "/ADK product images/CNC Press brake machine/5c7c27c6-c60a-40f0-950b-b929bf24b7b9.png",
        specsSummary: {
          Models: "NADKpress / ADK PB",
          Tonnage: "40T – 800T",
          Axis: "4, 5, 7 & 9",
        },
        features: [
          "Integrated welded frame with shot-blast anti-rust treatment",
          "Servo main motor — 60% lower energy consumption",
          "DSP laser protection safety system",
          "4, 5, 7 & 9 axis configurations available",
          "Mechanical crowning, sheet followers, dual side clamping",
        ],
        specifications: [
          { label: "Brochure brand", value: "NADKpress" },
          { label: "Models", value: "ADK PB / NADKpress (40T to 800T)" },
          { label: "Example configs", value: "40T×1600 · 110T×3200/4000 · 250T×3200/4000 · 500T×4000/6000 · 800T×8000" },
          { label: "Bending Force Range", value: "40 Ton to 800 Ton" },
          { label: "Bending Length", value: "1600 mm to 8000 mm" },
          { label: "Axis Options", value: "4, 5, 7 & 9 Axis available" },
          { label: "Controller", value: "Y1/Y2 synchronous ram control" },
          { label: "Safety", value: "DSP laser protection, back side door, side doors" },
          { label: "Additional Features", value: "Sheet followers, dual side clamping, mechanical crowning, ladders" },
        ],
      },
      {
        id: "PB-NC",
        name: "PB Series — NC Press Brake",
        slug: "nc-press-brake",
        tagline: "NC-controlled press brake for reliable workshop bending without full CNC complexity",
        description:
          "Extended live-site line (not a separate print-brochure SKU). NC Press Brake machines deliver accurate, repeatable bends with straightforward NC control — ideal for shops that need dependable tonnage without multi-axis CNC programming overhead.",
        status: "READY",
        image: IMG_PRESS,
        specsSummary: {
          Models: "ADK PB NC Series",
          Control: "NC",
          Tonnage: "Workshop range",
        },
        features: [
          "NC backgauge and ram control for repeatable bends",
          "Integrated welded frame construction",
          "Cost-effective entry for job shops and OEMs",
          "Compatible with standard press brake tooling",
        ],
        specifications: [
          { label: "Models", value: "ADK PB NC Series" },
          { label: "Control", value: "NC controller with programmable backgauge" },
          { label: "Frame", value: "Integrated welded construction" },
          { label: "Application", value: "General fabrication, brackets, enclosures" },
          { label: "Contact", value: "Share tonnage and bed length for a tailored quote" },
        ],
      },
      {
        id: "PB-TANDEM",
        name: "PB Series — Tandem & Heavy Tonnage Press Brake",
        slug: "tandem-heavy-tonnage-press-brake",
        tagline: "Synchronised tandem and heavy-tonnage brakes for long and thick plate bending",
        description:
          "Extended live-site line; brochure lists heavy tonnage under the NADKpress data sheet rather than a separate tandem product page. Synchronised rams for long beams and thick plate — PEB, ship, and heavy fab shops.",
        status: "CUSTOM",
        image: IMG_PRESS,
        specsSummary: {
          Models: "ADK PB Tandem / Heavy",
          Mode: "Tandem sync",
          Duty: "Heavy plate",
        },
        features: [
          "Synchronised tandem operation for extended bend lengths",
          "Heavy-tonnage frames for thick structural plate",
          "Suitable for PEB and heavy engineering shops",
          "Custom bed length and tonnage packages",
        ],
        specifications: [
          { label: "Models", value: "ADK PB Tandem & Heavy Tonnage Series" },
          { label: "Configuration", value: "Single heavy tonnage or synchronised tandem" },
          { label: "Application", value: "Long beams, thick plate, structural sections" },
          { label: "Control", value: "Synchronised CNC/NC ram control" },
          { label: "Contact", value: "Share max length, thickness, and tonnage for engineering review" },
        ],
      },
    ],
  },
  {
    id: "cat_04",
    name: "Fiber Laser Welding",
    slug: "fiber-laser-welding",
    icon: "flare",
    tagline: "LW Series 4-in-1 handheld welding and 3D fiber laser welding robot systems.",
    description:
      "ADK LW Series covers handheld 4-in-1 fiber laser welding (weld, clean, cut, wire feed) and 3D fiber laser welding robot cells for automated production — replacing traditional MIG and TIG with higher speed and better finishing.",
    models: [
      {
        id: "LW-4IN1",
        name: "LW Series — 4-in-1 Laser Welding Machine",
        slug: "4in1-fiber-laser-welding",
        tagline: "LW Series laser welding, cleaning, cutting, and wire feed in one handheld system",
        description:
          "The ADK LW Series 4-in-1 laser welding system delivers high speed, better finishing, no need for grinder, low operating cost, low heat hazard, and high efficiency compared to MIG & TIG welding processes.",
        status: "IN_STOCK",
        image: "/ADK product images/Fiber Laser Welding machine/aa70e19f-c67a-435d-8b31-b0c10be39751.png",
        specsSummary: {
          Models: "ADK LW-4IN1",
          Functions: "Weld/Clean/Cut/Feed",
          vs_MIG_TIG: "Higher speed",
        },
        features: [
          "4-in-1: laser welding, cleaning, cutting, and wire feeding",
          "Higher speed than MIG & TIG welding",
          "Better finishing with no grinder requirement",
          "Low operating cost and reduced heat hazard",
        ],
        specifications: [
          { label: "Model", value: "ADK LW Series 4-in-1" },
          { label: "Functions", value: "Laser Welding / Cleaning / Cutting / Wire Feed" },
          { label: "vs MIG & TIG", value: "Higher speed, better finishing, lower heat hazard" },
          { label: "Post-Weld", value: "No grinder required" },
          { label: "Operating Cost", value: "Significantly lower than conventional arc welding" },
          { label: "Applications", value: "Stainless steel, carbon steel, aluminum fabrication" },
        ],
      },
      {
        id: "LW-3D-ROBOT",
        name: "LW Series — 3D Fiber Laser Welding Machine Robot",
        slug: "3d-fiber-laser-welding-robot",
        tagline: "Robotic 3D fiber laser welding cell (distinct from brochure cutting robot)",
        description:
          "Live-site welding robot cell — not the same as the print-catalogue Newly Launched CNC Fiber Laser Cutting Machine Robot. Integrates a fiber laser source with a multi-axis robot for programmable weld paths on cabinets, frames, and complex assemblies.",
        status: "CUSTOM",
        image: IMG_LASER,
        specsSummary: {
          Models: "ADK LW 3D Robot",
          Type: "Robotic cell",
          Process: "Fiber laser weld",
        },
        features: [
          "Multi-axis robot with fiber laser welding torch",
          "Programmable paths for repeatable production welds",
          "Suitable for cabinets, frames, and complex assemblies",
          "Lower heat input vs conventional robotic MIG",
        ],
        specifications: [
          { label: "Model", value: "ADK 3D Fiber Laser Welding Machine Robot" },
          { label: "Process", value: "Fiber laser welding with robotic path control" },
          { label: "Application", value: "Series production joints, enclosures, frames" },
          { label: "vs Conventional Robot MIG", value: "Faster, cleaner, lower heat distortion" },
          { label: "Contact", value: "Share part geometry and volume for a cell proposal" },
        ],
      },
    ],
  },
  {
    id: "cat_05",
    name: "PEB Machinery",
    slug: "peb-machinery",
    icon: "factory",
    tagline: "PEB Series H-beam welding and SAW gantry systems for pre-engineered buildings.",
    description:
      "PEB machines fabricate pre-engineered building components — pre-cut, pre-drilled, and pre-welded structural steel. ADK offers H-Beam Welding (PTW) and SAW Gantry Welding machines for accurate, computer-controlled fabrication.",
    models: [
      {
        id: "PEB-PTW",
        name: "PEB Series — H-Beam Welding Machine (PTW)",
        slug: "peb-h-beam-welding",
        tagline: "PEB Series integrated H-beam assembly and submerged arc welding line",
        description:
          "The PEB Series H-Beam Welding Machine (PTW) handles web widths from 200 to 1500 mm and flange heights from 150 to 500 mm. Beam lengths from 2.5 to 15 metres with web thickness 5–20 mm and flange thickness 5–25 mm.",
        status: "CUSTOM",
        image: "/ADK product images/PEB Machinery/11449a4d-ca3f-4e66-878a-1ddfea8f62ed.png",
        specsSummary: {
          Models: "ADK PEB-PTW",
          Web: "200–1500 mm",
          Flange: "150–500 mm",
        },
        features: [
          "Heavy duty hydraulic centering jaws",
          "Submerged Arc Welding (SAW) for structural joints",
          "Beam length capacity up to 15 metres",
          "Computer-controlled fabrication accuracy",
        ],
        specifications: [
          { label: "Min. Web Width", value: "200 mm" },
          { label: "Max. Web Width", value: "1500 mm" },
          { label: "Web Thickness", value: "5–20 mm" },
          { label: "Min. Flange Height", value: "150 mm" },
          { label: "Max. Flange Height", value: "500 mm" },
          { label: "Flange Thickness", value: "5–25 mm" },
          { label: "Beam Length", value: "2.5–15 m" },
        ],
      },
      {
        id: "PEB-SAW",
        name: "PEB Series — SAW Gantry Welding",
        slug: "peb-saw-gantry-welding",
        tagline: "PEB Series heavy-duty submerged arc gantry welding for large structural beams",
        description:
          "PEB Series SAW Gantry Welding Machine for larger web and flange dimensions — web up to 2500 mm, flange up to 1000 mm, with web thickness up to 80 mm for heavy structural steel fabrication.",
        status: "CUSTOM",
        image: "/ADK product images/PEB Machinery/7510abb7-3af5-493e-a492-27e0f4973e3f.png",
        specsSummary: {
          Models: "ADK PEB-SAW Gantry",
          Web: "200–2500 mm",
          Flange: "250–1000 mm",
        },
        features: [
          "Submerged Arc Welding gantry configuration",
          "Handles larger web and flange dimensions",
          "Heavy structural steel beam production",
          "Beam length capacity 2.5–15 metres",
        ],
        specifications: [
          { label: "Min. Web Width", value: "200 mm" },
          { label: "Max. Web Width", value: "2500 mm" },
          { label: "Web Thickness", value: "5–80 mm" },
          { label: "Min. Flange Height", value: "250 mm" },
          { label: "Max. Flange Height", value: "1000 mm" },
          { label: "Flange Thickness", value: "5–40 mm" },
          { label: "Beam Length", value: "2.5–15 m" },
        ],
      },
    ],
  },
  {
    id: "cat_06",
    name: "Shearing Machine",
    slug: "shearing-machine",
    icon: "architecture",
    tagline: "SH Series hydraulic shearing machines for plate preparation and edge trimming.",
    description:
      "ADK SH Series hydraulic shearing machines are used for plate preparation before laser or plasma cutting, and for edge trimming in fabrication workshops. Configurations are available to suit varying thickness and cutting length requirements.",
    models: [
      {
        id: "SH-HYD",
        name: "SH Series — Hydraulic Shearing Machine",
        slug: "hydraulic-shearing-machine",
        tagline: "SH Series hydraulic guillotine shear for workshop plate preparation",
        description:
          "Extended live-site line (not in the current print brochure extract). Robust hydraulic shearing for plate preparation and edge trimming — multiple thickness and length configurations for fabrication workshops.",
        status: "READY",
        image: "/ADK product images/Shearing Machine/7c87af1d-c7ab-4576-a291-651722f272d7.png",
        specsSummary: {
          Models: "ADK SH Series",
          Type: "Hydraulic Guillotine",
          Application: "Plate prep",
        },
        features: [
          "Hydraulic guillotine shear design",
          "Plate preparation before profiling operations",
          "Multiple size configurations available",
          "Suitable for fabrication workshop environments",
        ],
        specifications: [
          { label: "Machine Type", value: "Hydraulic Guillotine Shear" },
          { label: "Application", value: "Plate preparation and edge trimming" },
          { label: "Configuration", value: "Available in multiple thickness and length options" },
          { label: "Contact", value: "Share your plate specs for a tailored configuration quote" },
        ],
      },
    ],
  },
  {
    id: "cat_07",
    name: "V Grooving Machine",
    slug: "v-grooving-machine",
    icon: "architecture",
    tagline: "VG Series V-grooving for sharp architectural bends and decorative sheet metal.",
    description:
      "ADK V Grooving machines score precise V-channels in sheet metal so panels fold to crisp architectural radii — used for elevator interiors, cladding, signage, and furniture-grade stainless work.",
    models: [
      {
        id: "VG-SERIES",
        name: "VG Series — V Grooving Machine",
        slug: "v-grooving-machine-series",
        tagline: "Precision V-groove scoring for sharp folds on stainless and mild steel panels",
        description:
          "Extended live-site / homepage line (not in the current print brochure extract). Cuts controlled V-channels along bend lines so sheets fold cleanly with minimal radius — architectural panels, elevator cabins, and high-finish stainless.",
        status: "READY",
        image: IMG_PRESS,
        specsSummary: {
          Models: "ADK VG Series",
          Process: "V-groove",
          Finish: "Architectural",
        },
        features: [
          "Precise V-channel scoring for sharp architectural bends",
          "Suitable for stainless and mild steel decorative panels",
          "Common in elevator, cladding, and furniture fab",
          "Configurable bed length for panel sizes",
        ],
        specifications: [
          { label: "Models", value: "ADK VG Series" },
          { label: "Process", value: "CNC/NC V-grooving for fold lines" },
          { label: "Materials", value: "Stainless steel, mild steel, aluminium panels" },
          { label: "Application", value: "Architecture, elevators, cladding, furniture" },
          { label: "Contact", value: "Share sheet size and groove depth for a configuration quote" },
        ],
      },
    ],
  },
  {
    id: "cat_08",
    name: "Panel Bender",
    slug: "panel-bender",
    icon: "architecture",
    tagline: "PB-P Series universal bending die panel benders — 0.2s per bend, no tooling changes.",
    description:
      "ADK PB-P Series Panel Benders adopt a universal bending die that completes various shapes with only one set of die. Handles arc, hem, return, and closed profiles without custom tooling. Models ADK PB-PB1400P, ADK PB-PB2000P, and ADK PB-PB2500P.",
    models: [
      {
        id: "PB-1400",
        name: "PB-P Series — Panel Bender",
        slug: "adk-panel-bender-series",
        tagline: "PB-P Series universal bending die — 0.2 seconds per bend, no tooling changes",
        description:
          "PB-P Series Panel Bender adopts universal bending die completing various shapes with only one set of die. Easily meets arc, hem, return, closed and other complex sheet metal bending requirements without custom tooling.",
        status: "CUSTOM",
        image: "/ADK product images/Panel Bender/6ccbcbe7-e9c0-469a-9c5d-1c31c2d1f83b.png",
        specsSummary: {
          Models: "ADK PB-P Series (PB1400P – PB2500P)",
          Bend_Speed: "0.2 s/bend",
          Width: "Up to 2500 mm",
        },
        features: [
          "Universal bending die — no tooling changes between profiles",
          "Fastest bend speed 0.2 seconds per bend",
          "Handles arc, hem, return, and closed profiles",
          "Models from 1400 mm to 2500 mm bend width",
        ],
        specifications: [
          { label: "Models", value: "ADK-PB1400 P / ADK-PB2000 P / ADK-PB2500 P" },
          { label: "Brochure series", value: "Panel Bender" },
          { label: "Fastest Bend Speed", value: "0.2 s/bend" },
          { label: "Maximum Bend Width", value: "1400 / 2000 / 2500 mm" },
          { label: "Bend Height", value: "170 mm" },
          { label: "Rated Voltage", value: "380V" },
          { label: "Total Motor Power", value: "38 KW / 77 KW / 77 KW" },
          { label: "Total Weight", value: "12T / 16T / 19T (approx.)" },
        ],
      },
    ],
  },
  {
    id: "cat_09",
    name: "Newly Launched Products",
    slug: "newly-launched-products",
    icon: "new_releases",
    tagline: "New ADK lines: Iron Worker, Laser Cutting Robot, Busbar Processing, Pipe Bending, and Turret Punch.",
    description:
      "ADK newly launched equipment expands shop floor productivity — Iron Workers, robotic fiber laser cutting cells, busbar processing units, CNC pipe benders, and CNC turret punches for electrical, architectural, and structural fabricators.",
    models: [
      {
        id: "NL-IRON",
        name: "Iron Worker",
        slug: "iron-worker",
        tagline: "Multi-station iron worker for punching, shearing, and notching structural steel",
        description:
          "The ADK Iron Worker combines punching, shearing, and notching stations for angle, flat bar, and structural sections — a compact workhorse for fabrication shops preparing steel before welding.",
        status: "READY",
        image: "/images/newly-launched/iron-worker.webp",
        specsSummary: {
          Models: "ADK Iron Worker",
          Stations: "Multi-station",
          Duty: "Structural steel",
        },
        features: [
          "Punching, shearing, and notching in one machine",
          "Ideal for angle, flat bar, and structural prep",
          "Compact footprint for job shops",
          "Supports PEB and general fabrication workflows",
        ],
        specifications: [
          { label: "Model", value: "ADK Iron Worker" },
          { label: "Functions", value: "Punch / shear / notch (multi-station)" },
          { label: "Application", value: "Structural steel preparation" },
          { label: "Contact", value: "Share section sizes for a station configuration quote" },
        ],
      },
      {
        id: "NL-LASER-ROBOT",
        name: "CNC Fiber Laser Cutting Machine Robot",
        slug: "cnc-fiber-laser-cutting-robot",
        tagline: "6-Axis robotic fiber laser cutting cell for 3D formed parts and profiles",
        description:
          "Robotic CNC fiber laser cutting cell for 3D parts, hydroformed tubes, and fixtures that flat-bed lasers cannot reach — delivering precision multi-axis cutting for automotive and aerospace components.",
        status: "CUSTOM",
        image: "/images/newly-launched/cnc-fiber-laser-cutting-machine-robot.webp",
        specsSummary: {
          Models: "ADK Laser Cutting Robot",
          Type: "6-Axis Robotic Cell",
          Process: "Fiber Laser Cut",
        },
        features: [
          "Robot-mounted fiber laser for 3D component cutting",
          "Suited to fixtures, formed parts, and tube assemblies",
          "High repeatability with multi-axis trajectory control",
          "Complements flat-bed FL Series lasers",
        ],
        specifications: [
          { label: "Model", value: "ADK CNC Fiber Laser Cutting Machine Robot" },
          { label: "Process", value: "Robotic 3D fiber laser cutting" },
          { label: "Application", value: "3D parts, formed sheets, tube assemblies" },
          { label: "Contact", value: "Share CAD parts for a cell feasibility review" },
        ],
      },
      {
        id: "NL-BUSBAR",
        name: "Busbar Processing Machine",
        slug: "busbar-processing-machine",
        tagline: "Punch, bend, and cut copper and aluminium busbars for electrical panels",
        description:
          "Busbar processing machines punch, bend, and cut copper and aluminium busbars for switchgear and control panel manufacturers — reducing manual marking and drilling on electrical shop floors.",
        status: "READY",
        image: "/images/newly-launched/busbar-processing-machine.webp",
        specsSummary: {
          Models: "ADK Busbar Processor",
          Materials: "Cu / Al",
          Use: "Switchgear & Panels",
        },
        features: [
          "Punch, bend, and cut busbars in one workflow",
          "Copper and aluminium busbar processing",
          "Built for panel and switchgear shops",
          "Reduces manual layout and drilling time",
        ],
        specifications: [
          { label: "Model", value: "ADK Busbar Processing Machine" },
          { label: "Materials", value: "Copper and aluminium busbars" },
          { label: "Application", value: "Electrical panels, switchgear, control cabinets" },
          { label: "Contact", value: "Share busbar width and thickness for a quote" },
        ],
      },
      {
        id: "NL-PIPE-BEND",
        name: "CNC Pipe Bending Machine",
        slug: "cnc-pipe-bending-machine",
        tagline: "CNC pipe and tube bending for furniture, automotive, and process piping",
        description:
          "CNC pipe bending machines form tubes and pipes to programmed radii for furniture frames, automotive exhaust and chassis tubes, and process piping — with repeatable CNC control.",
        status: "READY",
        image: "/images/newly-launched/cnc-pipe-bending-machine.webp",
        specsSummary: {
          Models: "ADK CNC Pipe Bender",
          Control: "CNC Multi-Axis",
          Duty: "Tube / Pipe",
        },
        features: [
          "CNC-controlled bend angles and radii",
          "Suitable for furniture, auto, and process tubing",
          "Repeatable production bends",
          "Complements ADK tube laser cutting lines",
        ],
        specifications: [
          { label: "Model", value: "ADK CNC Pipe Bending Machine" },
          { label: "Control", value: "CNC programmable bends" },
          { label: "Application", value: "Furniture frames, automotive tubes, process piping" },
          { label: "Contact", value: "Share OD, wall thickness, and bend radius for sizing" },
        ],
      },
      {
        id: "NL-TURRET-PUNCH",
        name: "CNC Turret Punch",
        slug: "cnc-turret-punch",
        tagline: "High-speed CNC turret punch press for high-volume perforated sheet metal",
        description:
          "ADK CNC Turret Punch Press offers rapid punching, forming, and louvering for HVAC panels, enclosures, and perforated sheets with minimal tool change time.",
        status: "READY",
        image: "/images/newly-launched/cnc-turret-punch.webp",
        specsSummary: {
          Models: "ADK Turret Punch",
          Process: "Punch & Form",
          Speed: "High Speed",
        },
        features: [
          "High-speed CNC turret punch auto-indexing station",
          "Ideal for HVAC louvers, electrical boxes, and cabinets",
          "Low operating cost for repetitive sheet perforation",
          "Auto tool lubrication and scrap conveyor",
        ],
        specifications: [
          { label: "Model", value: "ADK CNC Turret Punch" },
          { label: "Turret Stations", value: "Multi-station auto-indexing turret" },
          { label: "Applications", value: "Enclosures, HVAC louvers, cabinet manufacturing" },
          { label: "Contact", value: "Inquire for bed size and tonnage specifications" },
        ],
      },
      {
        id: "NL-3D-WELDER",
        name: "3D Fiber Laser Welding Machine Robot",
        slug: "3d-fiber-laser-welding-robot",
        tagline: "Articulated robotic arm 3D laser welding cell for complex automotive assemblies",
        description:
          "The 3D Fiber Laser Welding Machine Robot couples a fiber laser source with a 6-axis robot for flexible spatial seam welding on complex automotive, aerospace, and enclosure assemblies.",
        status: "CUSTOM",
        image: "/images/newly-launched/3d-fiber-laser-welding-machine-robot.webp",
        specsSummary: {
          Models: "ADK 3D Laser Welder",
          Type: "6-Axis Robot Arm",
          Process: "Spatial Laser Seam",
        },
        features: [
          "6-axis articulated robot for complex 3D laser welding",
          "High welding speed with zero thermal distortion",
          "Integrates with automatic loading jigs and turntables",
          "Replaces multi-pass TIG welding on complex profiles",
        ],
        specifications: [
          { label: "Model", value: "3D Fiber Laser Welding Machine Robot" },
          { label: "Laser Power", value: "1.5 kW – 6 kW Fiber Laser" },
          { label: "Robot Reach", value: "6-Axis articulated arm (Custom payload)" },
          { label: "Applications", value: "Automotive body parts, battery packs, aerospace components" },
        ],
      },
      {
        id: "NL-V-GROOVE",
        name: "V Grooving Machine",
        slug: "v-grooving-machine-new",
        tagline: "Precision V-groove scoring for sharp architectural bends and stainless panels",
        description:
          "ADK V Grooving Machine scores controlled V-channels along fold lines so metal sheets fold with minimal radius — ideal for architectural cladding, elevator cabins, and high-finish stainless.",
        status: "READY",
        image: "/images/newly-launched/v-grooving-machine.webp",
        specsSummary: {
          Models: "ADK V-Groover",
          Process: "V-Groove Score",
          Duty: "Architectural",
        },
        features: [
          "Precise V-channel scoring for sharp architectural bends",
          "Suitable for stainless and mild steel decorative panels",
          "Essential for elevator interior, cladding, and furniture fab",
        ],
        specifications: [
          { label: "Model", value: "ADK V Grooving Machine" },
          { label: "Process", value: "V-groove scoring for fold lines" },
          { label: "Materials", value: "Stainless steel, mild steel, aluminium" },
        ],
      },
      {
        id: "NL-PANEL-BENDER",
        name: "Panel Bender",
        slug: "panel-bender-new",
        tagline: "Universal die automated panel bender — 0.2s per bend with no tooling changes",
        description:
          "Newly launched automated panel bender equipped with universal bending dies to execute arc, hem, return, and closed profile bends without custom tooling.",
        status: "CUSTOM",
        image: "/images/newly-launched/panel-bender.webp",
        specsSummary: {
          Models: "ADK Panel Bender",
          Speed: "0.2 s/bend",
          Tooling: "Universal Die",
        },
        features: [
          "Universal bending die — no manual tooling changes",
          "0.2 seconds per bend fast cycle time",
          "Handles complex panel boxes and enclosures",
        ],
        specifications: [
          { label: "Model", value: "ADK Panel Bender" },
          { label: "Bend Speed", value: "0.2 s/bend" },
          { label: "Applications", value: "Steel doors, HVAC panels, elevator doors, cabinet boxes" },
        ],
      },
    ],
  },
  {
    id: "cat_10",
    name: "Spares & Consumables",
    slug: "spares-consumables",
    icon: "precision_manufacturing",
    tagline: "Genuine spares: cutting heads, nozzles, lenses, power sources, drives & gas regulators.",
    description:
      "Minimize downtime with ADK genuine spares and consumables. We maintain extensive stock of laser nozzles, protective lenses, cutting heads, press brake punch & die, laser power sources, gear boxes, limit sensors, rack & pinion, LM guides, bellows, drive motors, and gas regulators. Dedicated spares desk: spares@adkeng.com / +91 63526 43947.",
    models: [
      {
        id: "SP-NOZZLE",
        name: "Laser Cutting Nozzles",
        slug: "laser-cutting-nozzles",
        tagline: "Single & double layer copper laser nozzles for fiber laser cutting heads",
        description:
          "High-purity tellurium copper nozzles for Fiber Laser cutting heads. Available in single and double layer configurations from 0.8mm to 5.0mm for oxygen and nitrogen assist gas cutting.",
        status: "IN_STOCK",
        image: "/images/spares-consumables/consumables.webp",
        specsSummary: {
          Type: "Single & Double Layer",
          Material: "High-purity Tellurium Copper",
          Compatibility: "Raytools, Precitec, WSX",
        },
        features: [
          "High thermal conductivity copper for long nozzle life",
          "Single layer for Nitrogen stainless cutting; Double layer for Oxygen MS cutting",
          "Precision CNC machined orifice for stable gas jet flow",
          "Stocked across all 10 ADK service branches",
        ],
        specifications: [
          { label: "Material", value: "Tellurium Copper / Chrome Plated" },
          { label: "Orifice Sizes", value: "0.8, 1.0, 1.2, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0 mm" },
          { label: "Types", value: "Single Layer, Double Layer, Conical, Chrome" },
          { label: "Direct Support", value: "spares@adkeng.com / +91 63526 43947" },
        ],
      },
      {
        id: "SP-LENS",
        name: "Focusing & Protective Lenses",
        slug: "focusing-protective-lenses",
        tagline: "High-transmittance fused silica protective windows and quartz focus lenses",
        description:
          "Imported high-purity fused silica optics with double-sided anti-reflective coating. Withstands laser power up to 60 kW with low absorption and high thermal stability.",
        status: "IN_STOCK",
        image: "/images/spares-consumables/consumables-2.webp",
        specsSummary: {
          Substrate: "Fused Silica / Quartz",
          Power_Rating: "Up to 60 kW",
          Coating: "AR/AR @ 1064nm",
        },
        features: [
          "Double-sided anti-reflective AR coating for 99.9% transmission",
          "High damage threshold suitable for ultra-high power fiber lasers",
          "Protective windows and collimating/focusing lens pairs",
          "Original factory specifications for minimum focal shift",
        ],
        specifications: [
          { label: "Substrate", value: "Imported Fused Silica (JGS1 / Corning)" },
          { label: "Wavelength", value: "1064 nm Fiber Laser" },
          { label: "Dimensions", value: "20x2, 27.9x4.1, 30x5, 37x7, 40x3, 50x2 mm" },
          { label: "Direct Support", value: "spares@adkeng.com / +91 63526 43947" },
        ],
      },
      {
        id: "SP-HEAD",
        name: "Laser Cutting Head Assembly",
        slug: "laser-cutting-head-assembly",
        tagline: "Autofocus fiber laser cutting head with height sensor & cooling circuits",
        description:
          "Original autofocus laser cutting head assemblies with closed-loop capacitive height sensing, internal water cooling, and dust-sealed optical cartridge design.",
        status: "IN_STOCK",
        image: "/images/spares-consumables/cutting-head.webp",
        specsSummary: {
          Type: "Autofocus Cutting Head",
          Power: "1 kW – 60 kW",
          Sensors: "Capacitive Height Sensor",
        },
        features: [
          "Automatic focus adjustment via servo motor",
          "Dual water cooling circuits for optics and nozzle tip",
          "Sealed optical drawer preventing shop floor contamination",
          "Integrated height tracking module",
        ],
        specifications: [
          { label: "Compatibility", value: "Raytools, Precitec, Boci, WSX" },
          { label: "Max Laser Power", value: "Up to 60 kW" },
          { label: "Focus Range", value: "-20mm to +20mm" },
          { label: "Direct Support", value: "spares@adkeng.com / +91 63526 43947" },
        ],
      },
      {
        id: "SP-PUNCH-DIE",
        name: "Press Brake Punch & Die Tooling",
        slug: "press-brake-punch-die-tooling",
        tagline: "Hardened 42CrMo press brake top punches, multi-V bottom dies & crowning dies",
        description:
          "Induction hardened press brake tooling manufactured from premium 42CrMo steel. Segmented top punches and multi-V bottom dies designed for precise, wear-resistant bending.",
        status: "IN_STOCK",
        image: "/images/spares-consumables/punch-die.webp",
        specsSummary: {
          Material: "42CrMo Alloy Steel",
          Hardness: "55–60 HRC",
          Type: "Amada/Promecam & European",
        },
        features: [
          "Full length induction hardening for maximum tool life",
          "Sectional punches (835mm, 415mm, and segmented sections)",
          "Multi-V and 2-V self-centering bottom dies",
          "Custom goose-neck and acute punches available",
        ],
        specifications: [
          { label: "Material", value: "42CrMo / 42CrMo4" },
          { label: "Hardness", value: "HRC 55-60" },
          { label: "Styles", value: "Amada / Promecam, European Standard, Trumpf" },
          { label: "Direct Support", value: "spares@adkeng.com / +91 63526 43947" },
        ],
      },
      {
        id: "SP-POWER-SOURCE",
        name: "Fiber Laser Power Source Module",
        slug: "fiber-laser-power-source-module",
        tagline: "Raycus, IPG & Maxphotonics fiber laser power source modules and fiber cables",
        description:
          "Replacement fiber laser power modules, QBH beam delivery cables, and optical combiners. Certified genuine modules for 1 kW to 60 kW fiber laser power generators.",
        status: "IN_STOCK",
        image: "/images/spares-consumables/laser-power-source-1.webp",
        specsSummary: {
          Makes: "Raycus / IPG / Maxphotonics",
          Capacity: "1 kW to 60 kW",
          Interface: "QBH / QD Output",
        },
        features: [
          "Original factory warranty modules",
          "Armored QBH fiber delivery cable assemblies",
          "High wall-plug efficiency with low maintenance",
          "On-site diagnostic and swap service across India",
        ],
        specifications: [
          { label: "Brands", value: "Raycus, IPG Photonics, Maxphotonics" },
          { label: "Power Output", value: "1 kW, 3 kW, 6 kW, 12 kW, 20 kW, 30 kW, 60 kW" },
          { label: "Cable Length", value: "15 m, 20 m, 30 m armored fiber" },
          { label: "Direct Support", value: "spares@adkeng.com / +91 63526 43947" },
        ],
      },
      {
        id: "SP-GEARBOX",
        name: "High Precision Gear Box",
        slug: "high-precision-gear-box",
        tagline: "Low-backlash planetary speed reducers for X/Y/Z gantry axes",
        description:
          "Helical planetary gearboxes with backlash under 3 arcmin. Designed for high dynamic acceleration and smooth velocity control on CNC laser and plasma gantries.",
        status: "IN_STOCK",
        image: "/images/spares-consumables/gear-box.webp",
        specsSummary: {
          Type: "Planetary Speed Reducer",
          Backlash: "< 3 arcmin",
          Efficiency: "> 97%",
        },
        features: [
          "High torsional stiffness for rapid acceleration",
          "Synthetic grease lubricated for lifetime maintenance-free operation",
          "Low noise helical gear engagement",
          "Flange output for direct pinion mounting",
        ],
        specifications: [
          { label: "Ratio Options", value: "1:3, 1:4, 1:5, 1:7, 1:10" },
          { label: "Precision Class", value: "P1 / P0 low backlash" },
          { label: "Direct Support", value: "spares@adkeng.com / +91 63526 43947" },
        ],
      },
      {
        id: "SP-SENSOR",
        name: "Industrial Limit Sensors",
        slug: "industrial-limit-sensors",
        tagline: "Inductive proximity switches, travel limit sensors & home positioners",
        description:
          "Heavy-duty inductive proximity sensors and mechanical limit switches for homing, over-travel protection, and table positioning on CNC machinery.",
        status: "IN_STOCK",
        image: "/images/spares-consumables/limit-sensor.webp",
        specsSummary: {
          Type: "Inductive Proximity Sensor",
          IP_Rating: "IP67 Oil/Dustproof",
          Response: "High frequency",
        },
        features: [
          "IP67 sealed against cutting fluid, dust, and metal chips",
          "High repeating accuracy for homing routines",
          "LED status indicator for rapid troubleshooting",
          "M8, M12, and square block form factors",
        ],
        specifications: [
          { label: "Sensing Distance", value: "2mm, 4mm, 8mm" },
          { label: "Output", value: "NPN / PNP - NO / NC" },
          { label: "Direct Support", value: "spares@adkeng.com / +91 63526 43947" },
        ],
      },
      {
        id: "SP-RACK-PINION",
        name: "Helical Rack & Pinion Drives",
        slug: "helical-rack-pinion-drives",
        tagline: "Hardened M2/M3 helical gear racks and ground pinions for precision gantries",
        description:
          "Precision ground helical gear racks and pinions (Grade 6 accuracy). Carburized and induction hardened for zero-backlash high-speed gantry positioning.",
        status: "IN_STOCK",
        image: "/images/spares-consumables/rack-pinion.webp",
        specsSummary: {
          Quality: "DIN 6 / ISO 6",
          Teeth: "Helical Left/Right",
          Hardness: "58–62 HRC",
        },
        features: [
          "Helical teeth design for smooth, quiet operation at 100 m/min",
          "Induction hardened tooth surface for high load transmission",
          "Precision pitch error < 0.015mm per metre",
          "Pre-drilled mounting holes for rapid replacement",
        ],
        specifications: [
          { label: "Modules", value: "Module 1.5, Module 2.0, Module 3.0" },
          { label: "Standard Lengths", value: "1000 mm sections" },
          { label: "Direct Support", value: "spares@adkeng.com / +91 63526 43947" },
        ],
      },
      {
        id: "SP-LM-GUIDE",
        name: "Linear Motion LM Guides",
        slug: "linear-motion-lm-guides",
        tagline: "Heavy-load ball and roller linear guide rails and runner blocks",
        description:
          "Linear guide rails and runner blocks featuring 4-row equal-load geometry. Delivers high rigidity and precise linear guidance across X, Y, and Z motion axes.",
        status: "IN_STOCK",
        image: "/images/spares-consumables/lm-guide.webp",
        specsSummary: {
          Sizes: "15, 20, 25, 30, 35, 45 mm",
          Accuracy: "H / P Grade",
          Sealing: "End seals + Scrapers",
        },
        features: [
          "High load capacity in all 4 radial/reverse directions",
          "Integrated lubrication reservoir for extended service intervals",
          "Double-lip end seals preventing particle ingress",
          "Compatible with Hiwin, THK, PMI guide configurations",
        ],
        specifications: [
          { label: "Rail Widths", value: "15mm, 20mm, 25mm, 30mm, 35mm, 45mm" },
          { label: "Preload Class", value: "ZA / ZB heavy preload" },
          { label: "Direct Support", value: "spares@adkeng.com / +91 63526 43947" },
        ],
      },
      {
        id: "SP-BELLOWS",
        name: "Machine Protective Bellows",
        slug: "machine-protective-bellows",
        tagline: "Flame-retardant concertina bellows for guide rail and rack protection",
        description:
          "Flame-retardant armor bellows and flexible accordions protecting linear guides and rack/pinion drives from laser spatter, hot plasma slag, and debris.",
        status: "IN_STOCK",
        image: "/images/spares-consumables/bellows.webp",
        specsSummary: {
          Material: "PU-coated Kevlar / PVC",
          Resistance: "High temperature & spatter",
          Type: "Custom fold dimensions",
        },
        features: [
          "Kevlar / fiberglass reinforced for thermal resistance",
          "Stainless steel armor plates available for heavy slag protection",
          "Smooth extension and contraction ratio up to 1:10",
          "Tailored for ADK fiber laser and plasma gantry beds",
        ],
        specifications: [
          { label: "Material", value: "High-temp PVC/Kevlar with PVC stiffeners" },
          { label: "Bed Sizes", value: "3015, 4020, 6020, 6025, 8025, 12025" },
          { label: "Direct Support", value: "spares@adkeng.com / +91 63526 43947" },
        ],
      },
      {
        id: "SP-DRIVE-MOTOR",
        name: "Servo Drive Motors",
        slug: "servo-drive-motors",
        tagline: "Yaskawa, Panasonic & Delta AC servo motors and digital drives",
        description:
          "High-response AC servo motors and matching digital drives. Equipped with 24-bit absolute encoders for zero homing delay and precise axis synchronization.",
        status: "IN_STOCK",
        image: "/images/spares-consumables/drive-motors.webp",
        specsSummary: {
          Encoder: "24-bit Absolute",
          Capacity: "400W – 7.5 kW",
          Makes: "Yaskawa / Panasonic / Delta",
        },
        features: [
          "24-bit absolute encoder eliminates machine homing routine",
          "High torque density with 300% peak overload capacity",
          "Real-time adaptive vibration suppression",
          "Pre-configured drive parameters for ADK CNC controllers",
        ],
        specifications: [
          { label: "Capacity", value: "750W, 1.0 kW, 1.5 kW, 2.0 kW, 3.0 kW, 5.0 kW, 7.5 kW" },
          { label: "Communication", value: "EtherCAT / EtherNet-IP / Pulse-Dir" },
          { label: "Direct Support", value: "spares@adkeng.com / +91 63526 43947" },
        ],
      },
      {
        id: "SP-GAS-REGULATOR",
        name: "Assist Gas Pressure Regulator",
        slug: "assist-gas-pressure-regulator",
        tagline: "High-flow Nitrogen & Oxygen pressure regulators and proportional valves",
        description:
          "Dual-stage high-pressure gas regulators and electronic proportional valves for automatic assist gas pressure control up to 30 bar during laser cutting.",
        status: "IN_STOCK",
        image: "/images/spares-consumables/gas-regulator.webp",
        specsSummary: {
          Gas_Types: "Nitrogen (N2) / Oxygen (O2) / Air",
          Max_Pressure: "30 Bar",
          Control: "Manual / Proportional 0-10V",
        },
        features: [
          "Dual stage diaphragm design for steady pressure stability",
          "Supports up to 30 bar Nitrogen high-pressure cutting",
          "Integrated solenoid shut-off valve",
          "Stainless steel internal trim for gas purity",
        ],
        specifications: [
          { label: "Max Inlet Pressure", value: "300 Bar" },
          { label: "Outlet Range", value: "0–35 Bar" },
          { label: "Direct Support", value: "spares@adkeng.com / +91 63526 43947" },
        ],
      },
    ],
  },
];

/** Default materials by category — models may override via `materials`. */
const CATEGORY_MATERIALS: Record<string, string[]> = {
  "fiber-laser-cutting": [
    "Mild Steel",
    "Stainless Steel",
    "Aluminium",
    "Brass",
    "Copper",
  ],
  "cnc-plasma-cutting": ["Mild Steel", "Stainless Steel", "Aluminium"],
  "cnc-press-brake": ["Mild Steel", "Stainless Steel", "Aluminium", "Galvanized Sheet"],
  "fiber-laser-welding": ["Stainless Steel", "Mild Steel", "Aluminium"],
  "peb-machinery": ["Structural Steel", "H-Beam", "I-Beam", "Plate"],
  "shearing-machine": ["Mild Steel", "Stainless Steel", "Aluminium"],
  "v-grooving-machine": ["Stainless Steel", "Mild Steel", "Aluminium"],
  "panel-bender": ["Mild Steel", "Stainless Steel", "Aluminium", "Galvanized Sheet"],
  "newly-launched-products": ["Mild Steel", "Stainless Steel", "Copper", "Aluminium"],
  "spares-consumables": [
    "Cutting Heads",
    "Nozzles",
    "Laser Sources",
    "Drives & Motors",
    "Guides & Bellows",
  ],
};

export const categories: ProductCategory[] = rawCategories.map((cat) => ({
  ...cat,
  models: cat.models.map((m) => ({
    ...m,
    image: productHeroPath(cat.slug, m.slug),
    images: m.images ?? productGalleryPaths(cat.slug, m.slug),
    materials: m.materials ?? CATEGORY_MATERIALS[cat.slug],
  })),
}));

// Slug reference for applications recommendedMachines:
// industrial-pioneer-exchange-table, futuristic-laser-series, single-pallet-es-series,
// dual-position-exchange-table, professional-tube-cutting, tube-plate-lnr-series,
// gantry-plasma-cutting, table-type-plasma, portable-plasma, nadkpress-cnc-press-brake,
// nc-press-brake, tandem-heavy-tonnage-press-brake, 4in1-fiber-laser-welding,
// 3d-fiber-laser-welding-robot, peb-h-beam-welding, peb-saw-gantry-welding,
// hydraulic-shearing-machine, v-grooving-machine-series, adk-panel-bender-series,
// iron-worker, cnc-fiber-laser-cutting-robot, busbar-processing-machine,
// cnc-pipe-bending-machine, spares-consumables-catalogue

export const applications: IndustryApplication[] = [
  {
    id: "app_01",
    name: "Aerospace",
    slug: "aerospace",
    icon: "flight",
    tagline: "High-grade components with micro-tolerances for aircraft assemblies.",
    description: "Aerospace manufacturing demands the absolute highest levels of reliability and certification. Material thicknesses vary from thin ducting sheets to thick titanium structural components.",
    challenges: ["No-taper profiles for complex aluminum alloys", "Extremely tight material traceability and repeatability", "Thermal stress minimization in heat-treated components"],
    solutions: ["Dynamic gantry lasers with autofocus sensors calibrating heights based on sheet topology", "Closed-loop servo-controlled press brakes maintaining bend tolerances within 0.05 degrees"],
    recommendedMachines: ["industrial-pioneer-exchange-table", "nadkpress-cnc-press-brake"],
    heroImage: applicationHeroPath("aerospace"),
  },
  {
    id: "app_02",
    name: "Agriculture",
    slug: "agriculture",
    icon: "agriculture",
    tagline: "Tough structural components for harvesting machinery and tractors.",
    description: "Agricultural implements are exposed to high vibrations and friction. Bending and cutting must accommodate high-tensile steels and thick carbon plating.",
    challenges: ["Cracking at bend zones of high-yield-strength plates", "Heavy rust and oxidation scale on storage-yard sheets", "Consistent weld joints on thick-walled structures"],
    solutions: ["Guillotine shearing with variable rake and blade gap adjusters", "High-definition plasma cutting on dedicated water tables"],
    recommendedMachines: ["gantry-plasma-cutting", "hydraulic-shearing-machine"],
    heroImage: applicationHeroPath("agriculture"),
  },
  {
    id: "app_03",
    name: "Automobile",
    slug: "automobile",
    icon: "directions_car",
    tagline: "High-throughput sheet fabrication for chassis and interior panels.",
    description: "Automobile parts manufacturing requires extreme repeatability and integration into fully automated robotic assemblies.",
    challenges: ["Short cycle times for complex panel forming", "Integration with robotic welding lines", "High surface finish requirements for body parts"],
    solutions: ["Servo-driven panel benders bending multiple profiles in under 20 seconds", "Laser cutting lines with integrated shuttle tables for non-stop feeding"],
    recommendedMachines: ["adk-panel-bender-series", "industrial-pioneer-exchange-table"],
    heroImage: applicationHeroPath("automobile"),
  },
  {
    id: "app_arch",
    name: "Architecture",
    slug: "architecture",
    icon: "apartment",
    tagline: "Architectural cladding, elevator interiors, and decorative stainless panels.",
    description:
      "Architectural metalwork needs crisp folds, clean edges, and finish-ready stainless or coated panels for facades, lobbies, and elevator cabins.",
    challenges: [
      "Sharp architectural radii without cracking coated or stainless sheet",
      "Cosmetic surface quality on visible cladding panels",
      "Repeatable panel geometry across large facade packages",
    ],
    solutions: [
      "V-grooving before folding for tight decorative radii",
      "Fiber laser cutting with nitrogen for oxide-free stainless edges",
      "Panel benders for repeat enclosure and cabin geometries",
    ],
    recommendedMachines: ["v-grooving-machine-series", "adk-panel-bender-series", "industrial-pioneer-exchange-table"],
    heroImage: applicationHeroPath("architecture"),
  },
  {
    id: "app_04",
    name: "Chemical Plant",
    slug: "chemical-plant",
    icon: "science",
    tagline: "Stainless steel tank fabrication and pipe profiling for corrosive environments.",
    description: "Vessels and heat exchangers for chemical processing must withstand high temperatures and acidic attacks, necessitating thick stainless steel and specialized alloys.",
    challenges: ["Complex weld bevel preparations on heavy curved plates", "Contamination-free sheet metal profiling", "High quality welding with zero micro-cracks or voids"],
    solutions: ["CNC plasma beveling for V/K bevel preparation profiles", "4-in-1 fiber laser welding for robust joints without structural embrittlement"],
    recommendedMachines: ["gantry-plasma-cutting", "4in1-fiber-laser-welding"],
    heroImage: applicationHeroPath("chemical-plant"),
  },
  {
    id: "app_05",
    name: "Control Panel",
    slug: "control-panel",
    icon: "developer_board",
    tagline: "Precision enclosures, junction boxes, and cabinet structures.",
    description: "Electrical enclosures require IP-rated dust and water protection, making accurate side-wall dimensions and door flanges critical.",
    challenges: ["Multi-bend profiles requiring frequent tooling adjustments", "Handling scratch-sensitive galvanized and pre-painted sheets", "Consistent door flange alignments"],
    solutions: ["Universal bending tools on panel benders forming box shapes automatically", "Autofocus lasers cutting ventilation patterns and cabinet holes at high speeds"],
    recommendedMachines: ["adk-panel-bender-series", "industrial-pioneer-exchange-table"],
    heroImage: applicationHeroPath("control-panel"),
  },
  {
    id: "app_06",
    name: "Elevators",
    slug: "elevators",
    icon: "elevator",
    tagline: "Precision cabin panel bending, bracket structures, and guide rails.",
    description: "Elevator cabin doors and panels demand cosmetically perfect finishes and smooth, soundless movements, meaning high dimensional tolerances are vital.",
    challenges: ["Visible press brake tooling marks on mirror-finish stainless steel panels", "Tight parallel door flange requirements", "High-volume small brackets manufacturing"],
    solutions: ["Panel bender with soft-touch clamps eliminating mechanical scratches", "Fiber laser cutting with nitrogen assist for bright, scale-free edges"],
    recommendedMachines: ["adk-panel-bender-series", "industrial-pioneer-exchange-table"],
    heroImage: applicationHeroPath("elevators"),
  },
  {
    id: "app_07",
    name: "Food Machinery",
    slug: "food-machinery",
    icon: "kitchen",
    tagline: "Sanitary stainless steel containers and processing equipment.",
    description: "Food grade steel requires weld regions to be completely smooth and pit-free to prevent bacterial accumulation.",
    challenges: ["Time-consuming post-weld grinding and polishing on stainless steel joints", "Intricate slicing patterns for hopper and feeder systems", "High reflectivity processing"],
    solutions: ["4-in-1 laser welders making narrow, clean weld lines without burning adjacent panels", "High-transmission fiber optics cutting copper, brass, and SS sheets"],
    recommendedMachines: ["4in1-fiber-laser-welding", "industrial-pioneer-exchange-table"],
    heroImage: applicationHeroPath("food-machinery"),
  },
  {
    id: "app_08",
    name: "Heavy Fabrication",
    slug: "heavy-fabrication",
    icon: "precision_manufacturing",
    tagline: "Thick plate processing, heavy duty weld beveling, and massive beams.",
    description: "Heavy engineering plants assemble railway bridges, cranes, and earthmovers where reliability of structural welds is a matter of safety.",
    challenges: ["Beveling and cutting plates up to 50mm thick", "High-power structural welding with thick wires", "Material handling and alignment of multi-ton steel sections"],
    solutions: ["High-tonnage CNC press brakes with hydraulic crowning", "SAW H-beam welding lines to automatically construct structural pillars"],
    recommendedMachines: ["nadkpress-cnc-press-brake", "peb-h-beam-welding"],
    heroImage: applicationHeroPath("heavy-fabrication"),
  },
  {
    id: "app_09",
    name: "Hydraulic Machinery",
    slug: "hydraulic-machinery",
    icon: "water_drop",
    tagline: "Base frames, oil tanks, and manifold bracket fabrications.",
    description: "Base frames for hydraulic systems require rigid structures to handle mechanical torque and support heavy hydraulic pumps.",
    challenges: ["Weld joint leakages in high pressure hydraulic tanks", "Precise alignment of pump mounting holes on structural bases", "Thick structural frame profile cutting"],
    solutions: ["Direct CNC profiling of mounting holes using high gantry lasers", "Precision bending of tank sidewalls to reduce overall weld seams"],
    recommendedMachines: ["industrial-pioneer-exchange-table", "nadkpress-cnc-press-brake"],
    heroImage: applicationHeroPath("hydraulic-machinery"),
  },
  {
    id: "app_10",
    name: "Job Work",
    slug: "job-work",
    icon: "engineering",
    tagline: "Flexible job-shop systems designed to swap materials quickly.",
    description: "Job shops face changing profiles: thin aluminum in the morning, 20mm structural plates in the afternoon. Flexibility is their survival metric.",
    challenges: ["Frequent setup and tear-down times", "Diverse material stock management", "Quick nesting generation to maximize sheet yield"],
    solutions: ["Single pallet ES series with easy loading and 75%+ market adoption", "User-friendly controller screens with built-in auto-nesting databases"],
    recommendedMachines: ["single-pallet-es-series", "nadkpress-cnc-press-brake"],
    heroImage: applicationHeroPath("job-work"),
  },
  {
    id: "app_11",
    name: "Material Handling",
    slug: "material-handling",
    icon: "warehouse",
    tagline: "Conveyor frames, rack beams, and automated warehousing chassis.",
    description: "Warehousing systems use structural channels, sheets, and tubes assembled in large quantities to sustain static cargo loads.",
    challenges: ["High-volume repetitive cuts of structural channels", "Consistent hole pitches along long structural profiles", "Precision structural corner welds"],
    solutions: ["Fiber laser cutting with custom rotary pipe fixtures", "Hydraulic shearing machines to chop structural bars cleanly"],
    recommendedMachines: ["industrial-pioneer-exchange-table", "hydraulic-shearing-machine"],
    heroImage: applicationHeroPath("material-handling"),
  },
  {
    id: "app_12",
    name: "PEB",
    slug: "peb",
    icon: "home_work",
    tagline: "High-yield fabrication machinery for Pre-Engineered Building components.",
    description: "Pre-Engineered Building columns, beams, purlins, and wall panels must be fabricated quickly to meet project delivery schedules.",
    challenges: ["Production bottleneck in building structural H-beams manually", "Correcting flange distortion post-welding", "Fast processing of structural plates for joist connections"],
    solutions: ["Integrated H-Beam Assembly and SAW Welding lines running continuously", "CNC Plasma cutters to prepare splice plate connections"],
    recommendedMachines: ["peb-h-beam-welding", "gantry-plasma-cutting"],
    heroImage: applicationHeroPath("peb"),
  },
  {
    id: "app_13",
    name: "Profile Cutting",
    slug: "profile-cutting",
    icon: "content_cut",
    tagline: "High-precision shapes from structural steel plates.",
    description: "Creating highly customized steel shapes, gear profiles, and connection rings from plates requires minimal heat-affected zones.",
    challenges: ["Dross and slag build-up on underside profiles", "Hardened cut edges that degrade subsequent drilling tools", "Beveling error on thick cutouts"],
    solutions: ["Fine-focus fiber laser cutting on gantry beds", "High-definition plasma systems with regulated gas proportions"],
    recommendedMachines: ["industrial-pioneer-exchange-table", "gantry-plasma-cutting"],
    heroImage: applicationHeroPath("profile-cutting"),
  },
  {
    id: "app_14",
    name: "Road Construction",
    slug: "road-construction",
    icon: "construction",
    tagline: "Asphalt mixers, heavy rollers, and machinery frameworks.",
    description: "Roadwork equipment is built to handle constant shock, requiring highly robust steel profiles and high-integrity weld fillets.",
    challenges: ["Processing thick wear-resistant steels (e.g. Hardox plate)", "High force requirements to bend heavy structural wear plates", "Precision bevel joints for massive cylinders"],
    solutions: ["Ultra-high power fiber lasers (30kW+) capable of cutting high-hard alloys", "Tonnage-boosted press brakes up to 800T with specialized tooling"],
    recommendedMachines: ["futuristic-laser-series", "nadkpress-cnc-press-brake"],
    heroImage: applicationHeroPath("road-construction"),
  },
  {
    id: "app_15",
    name: "Steel Furniture",
    slug: "steel-furniture",
    icon: "chair",
    tagline: "Office cabinets, lockers, shelving units, and table support rails.",
    description: "Furniture items demand light weight, structural stability, and a clean, cosmetic surface for paint or chrome plating.",
    challenges: ["Welding thin-gauge sheets without burn-through or buckling", "High volume folding setups", "Clean edges without micro-burrs"],
    solutions: ["Panel benders folding cabinets on all 4 sides automatically", "4-in-1 laser welding with wire feeding for clean joint fillets"],
    recommendedMachines: ["adk-panel-bender-series", "4in1-fiber-laser-welding"],
    heroImage: applicationHeroPath("steel-furniture"),
  },
  {
    id: "app_16",
    name: "Steel & Metal Work",
    slug: "steel-metal-work",
    icon: "build",
    tagline: "Grills, structural stairs, custom architectural panels.",
    description: "Architectural fabrication integrates customized, complex patterns on copper, brass, stainless steel, and iron.",
    challenges: ["Intricate decorative cut designs without thermal warp", "Cutting reflective yellow metals without back-reflection damage", "Short turnaround for customized architect jobs"],
    solutions: ["High-speed fiber lasers with back-reflection optical isolators", "Integrated software converters accepting CAD DXF profiles directly"],
    recommendedMachines: ["industrial-pioneer-exchange-table", "4in1-fiber-laser-welding"],
    heroImage: applicationHeroPath("steel-metal-work"),
  },
  {
    id: "app_17",
    name: "Tank Manufacturing",
    slug: "tank-manufacturing",
    icon: "propane_tank",
    tagline: "Pressure vessels, chemical silos, storage tanks, and boilers.",
    description: "Cylindrical storage vessels are subjected to internal pressures, requiring high precision in plate rolling and longitudinal seams.",
    challenges: ["Welding long horizontal plate joints uniformly", "Aligning plate edges before welding without gap variances", "Perfect circle rolling and edge preparation"],
    solutions: ["CNC plasma bevel heads to cut circular port flanges", "SAW welding systems adapted for cylindrical tank rotators"],
    recommendedMachines: ["gantry-plasma-cutting", "peb-saw-gantry-welding"],
    heroImage: applicationHeroPath("tank-manufacturing"),
  },
  {
    id: "app_18",
    name: "Textile Machinery",
    slug: "textile-machinery",
    icon: "checkroom",
    tagline: "Precision spinning frames, loom brackets, and carding machine parts.",
    description: "Loom and carding structures are high-speed moving mechanisms, where even small weight or balance variances produce damaging vibrations.",
    challenges: ["Massive component counts with multi-axis bracket geometry", "Surface finish must be mirror-smooth to avoid catching threads", "Weight optimization via skeletal sheet structures"],
    solutions: ["High-speed fiber laser cutting for lightweight structural cutouts", "Multi-axis CNC press brakes for complex bracket geometry"],
    recommendedMachines: ["industrial-pioneer-exchange-table", "nadkpress-cnc-press-brake"],
    heroImage: applicationHeroPath("textile-machinery"),
  },
  {
    id: "app_19",
    name: "Tower Manufacturing",
    slug: "tower-manufacturing",
    icon: "cell_tower",
    tagline: "Telecommunication pylons, transmission poles, and structural frames.",
    description: "Wind, electrical transmission, and telecommunication masts require heavy structural angles, thick plate gussets, and high structural safety factors.",
    challenges: ["Processing thick angle iron and structural steel profiles", "Accurate flange plate cutting and multi-hole punching", "High volume assembly alignment"],
    solutions: ["CNC Plasma profiling for thick connector plates", "Hydraulic shearing machines to chop angle bars without edge deformation"],
    recommendedMachines: ["gantry-plasma-cutting", "hydraulic-shearing-machine"],
    heroImage: applicationHeroPath("tower-manufacturing"),
  },
];

export const capabilityHighlights: CapabilityHighlight[] = [
  {
    id: "cap_01",
    title: "PEB Structural Fabrication",
    industry: "Pre-Engineered Buildings",
    summary: "ADK H-beam welding and SAW gantry systems automate structural steel production — assembly, submerged arc welding, and straightening in integrated lines.",
    outcomes: [
      { label: "Beam Length", value: "Up to 15 m" },
      { label: "Web Width", value: "200–2500 mm" },
      { label: "Installations", value: "850+" },
    ],
  },
  {
    id: "cap_02",
    title: "High-Power Laser Cutting",
    industry: "Heavy Fabrication",
    summary: "From standard exchange-table machines to India's first 30KW installation, ADK fiber lasers handle everything from thin sheet to 24-metre plate profiling.",
    outcomes: [
      { label: "Max Power", value: "60 KW" },
      { label: "Max Bed", value: "3500×24000 mm" },
      { label: "Accuracy", value: "±0.03 mm" },
    ],
  },
  {
    id: "cap_03",
    title: "Automated Panel Bending",
    industry: "Electrical Enclosures",
    summary: "Universal bending die panel benders complete box profiles at 0.2 seconds per bend without tooling changes — ideal for cabinets, enclosures, and furniture.",
    outcomes: [
      { label: "Bend Speed", value: "0.2 s/bend" },
      { label: "Max Width", value: "2500 mm" },
      { label: "Tooling", value: "Universal die" },
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "bp_04",
    title: "Specifying a PEB H-Beam Welding Line for Indian Fabricators",
    slug: "peb-h-beam-welding-line-guide",
    category: "PEB Machinery",
    heroImage: blogHeroPath("peb-h-beam-welding-line-guide"),
    summary:
      "How to size H-beam welding capacity for PEB shops — bed length, flange thickness, SAW vs gantry, and the throughput traps that slow Indian fabricators.",
    content:
      "Pre-engineered building (PEB) fabricators win on schedule only when the welding line matches the beam mix they actually ship. Oversized gantries waste floor space; undersized lines create night-shift bottlenecks on thick flanges and long columns.\n\nADK PEB machinery covers H-beam welding and SAW gantry configurations so shops can align capital spend with the spans and sections in their order book.\n\n### Start With the Beam Mix\nPull six months of shipped beams: length bands, flange thickness, and web height. If most work sits under 12 m with moderate flanges, a compact H-beam welding line often beats a long gantry on cost per ton. When columns regularly exceed 18–24 m or flanges climb into heavy plate, plan for extended bed length and a SAW gantry that keeps heat input and travel speed consistent.\n\n### SAW vs Dedicated H-Beam Lines\nDedicated H-beam welding lines excel at repeat I/H sections with fixtures that hold web and flange alignment through the pass. SAW gantry systems add flexibility when you also weld plates, girders, or non-standard assemblies on the same floor. Many PEB plants run both: a dedicated line for standard rafters and columns, and a gantry for odd lengths and thick plate work.\n\n### Throughput Traps to Avoid\n- **Fixture changeovers** that eat more time than the weld itself.\n- **No plan for flange prep** — torch cutting and grinding before the weld bay.\n- **Ignoring crane reach** between cutting, fitting, and welding stations.\n- **Buying length without duty cycle** — a long bed that sits idle between sparse long-beam jobs.\n\n### Practical Spec Checklist\n- Match bed length to the 90th percentile of your longest regular beams, not the one-off outlier.\n- Confirm flange and web thickness ranges against your thickest recurring section.\n- Budget floor space for infeed, outfeed, and crane swing — not just the machine footprint.\n- Ask for training on parameter sets for the steel grades you buy most often.\n\n### Summary\n- **Standard PEB mix**: Dedicated H-beam welding line sized to your common spans.\n- **Heavy / long columns**: Extended bed + SAW gantry capacity.\n- **Mixed fab**: Combine dedicated PEB welding with gantry flexibility.\n\nFor a line shortlist matched to your beam history, contact inquiry1@adkeng.com or call +91 92270 85416.",
    date: "August 18, 2026",
    readTime: "6 min read",
    author: "Engineering Dept ADK",
  },
  {
    id: "bp_05",
    title: "What ADK On-Site Installation and Calibration Actually Includes",
    slug: "adk-installation-calibration-guide",
    category: "Service & Support",
    heroImage: blogHeroPath("adk-installation-calibration-guide"),
    summary:
      "From foundation checks to first production nests — what happens when ADK engineers install a machine, calibrate optics or crowning, and train your operators.",
    content:
      "Buying a machine is only half the project. The other half is getting it level, aligned, parameterised, and into the hands of operators who can run a full shift without guesswork. ADK includes on-site mechanical installation, optical or axis calibration, and operator training with every machine purchase.\n\nKnowing what that visit covers helps you prepare the shop floor so commissioning days are productive instead of spent waiting on civil work or power.\n\n### Before the Crew Arrives\nConfirm foundation drawings, power (typically 3-phase 380V/50Hz for laser and press systems), assist-gas supply for cutting, and crane access for unloading. Clear the bed footprint plus service aisles. Have sample materials and thicknesses ready for acceptance cuts or bends.\n\n### Mechanical Installation\nEngineers position and level the machine, connect utilities, and verify safety systems (guards, light curtains, E-stops). For lasers this includes table, gantry, and enclosure checks. For press brakes it includes bed alignment and crowning system verification. PEB and plasma systems get similar mechanical and travel checks on their rails or beds.\n\n### Calibration and First Jobs\nOptical calibration on fiber lasers locks beam path and focus for the bed size you bought. Press brakes get crowning and axis checks so angles stay consistent along the length. The team then runs representative nests or bends on your material so parameters match your shop — not a demo plate from another city.\n\n### Operator Training\nTraining covers safety, daily checks, material/parameter selection, nesting or bend programming basics, and routine preventive maintenance. The goal is a crew that can start the next shift without calling support for every thickness change.\n\n### After Handover\nRegional service hubs in Ahmedabad, Pune, Nashik, Nagpur, Kolhapur, Indore, Kolkata, and Bhopal back the install. Use service@adkeng.com or +91 95100 41629 / +91 82008 52505 when you need a callback. Spares: spares@adkeng.com or +91 63526 43947.\n\n### Checklist\n- **You prepare**: foundation, power, gas, crane, sample material.\n- **ADK delivers**: install, calibrate, train, acceptance runs.\n- **You keep**: documented parameters and a service contact path.\n\nVisit the Ahmedabad Experience Center if you want to see calibration and demo cuts before you buy — or request a video demonstration with an application engineer.",
    date: "August 12, 2026",
    readTime: "5 min read",
    author: "Technical Team ADK",
  },
  {
    id: "bp_01",
    title: "Understanding Fiber Laser Power Requirements for Sheet Metal",
    slug: "laser-power-sheet-metal-guide",
    category: "Fiber Laser",
    heroImage: blogHeroPath("laser-power-sheet-metal-guide"),
    summary:
      "Selecting the correct laser power balances budget with production speed. A practical breakdown of 3kW, 6kW, 12kW, and 30kW+ configurations for Indian job shops.",
    content:
      "When purchasing a fiber laser cutting machine, laser power is one of the first decisions that shapes throughput, edge quality, and operating cost. ADK configures sources from 1kW to 60kW with RAYCUS, IPG, and MAX PHOTONICS options so workshops can match the source to the work they actually run.\n\nChoosing higher power is not always better. Oversized sources raise capital and cooling cost if your mix stays on thin sheet, while undersized sources create bottlenecks on thick plate and overtime nights.\n\n### The Relationship Between Power and Speed\nWhile a 3kW laser can cut stainless steel up to about 10mm, a 12kW source often does the same cut several times faster. For high-volume shops processing mostly 2mm to 5mm sheet, a 6kW machine is frequently the efficiency sweet spot.\n\n### Assist Gas Selection\nHigh-power lasers (12kW+) cut thick carbon plate efficiently with oxygen. Nitrogen is preferred when bright, oxide-free edges matter on stainless or aluminium. Compressed air is a cost-effective option for many carbon and stainless jobs up to roughly 8mm when cosmetic requirements allow.\n\n### Practical Selection Tips\nMap your last six months of nest thickness and material mix before locking power. If more than 70% of jobs sit under 6mm, prioritize table speed and nesting software over extreme kilowatts. If heavy plate is a weekly requirement, plan for 12kW+ and a bed size that fits your longest parts.\n\n### Summary\n- **1kW–3kW**: Thin sheet, signs, light brackets.\n- **6kW–12kW**: Mixed job work and structural brackets.\n- **12kW–30kW+**: Heavy engineering, thick plate, round-the-clock output.",
    date: "July 8, 2026",
    readTime: "5 min read",
    author: "Technical Team ADK",
  },
  {
    id: "bp_02",
    title: "Press Brake vs. Panel Bender: Choosing the Right Bending Tech",
    slug: "press-brake-vs-panel-bender",
    category: "Bending Technology",
    heroImage: blogHeroPath("press-brake-vs-panel-bender"),
    summary:
      "PB Series CNC press brakes stay the versatile workhorse, while ADK panel benders shine on cabinets and boxes. Compare setup time, handling, and yield.",
    content:
      "Bending is where many shops lose time between cutting and welding. Hydraulic press brakes remain the industry baseline for versatility, but automated panel benders are now common in factories that live on enclosure and furniture geometries.\n\nThe right choice depends less on brand preference and more on part family: open profiles and thick plate favor press brakes; closed boxes and repeat flanges favor panel benders.\n\n### Setup Times and Versatility\nA press brake often needs die and punch changes when gauge or radius changes. ADK panel benders use a universal bending approach that forms many angles without tooling swaps. For doors, cabinets, and electrical boxes, that removes most setup between jobs.\n\n### Component Handling\nOn a press brake, the operator lifts and supports the sheet through each bend. A panel bender clamps the blank flat; the manipulator rotates it while blades form flanges with far less manual holding. That improves consistency on long production runs and reduces fatigue.\n\n### When Each Wins\nChoose a press brake when you need thick plate, deep channels, or frequent one-off radius work. Choose a panel bender when daily volume is box-like, cosmetic surfaces matter, and every minute of setup costs throughput.\n\n### Comparison\n- **PB Series Press Brake**: Broad versatility, 40T–800T, multi-axis options, lower entry cost.\n- **ADK Panel Bender**: Faster on boxes and cabinets, about 0.2s per bend, minimal tooling changes, automatic manipulation.",
    date: "July 2, 2026",
    readTime: "6 min read",
    author: "Engineering Dept ADK",
  },
  {
    id: "bp_03",
    title: "CNC Plasma vs. Fiber Laser: When to Choose Which",
    slug: "plasma-vs-fiber-laser-guide",
    category: "Cutting Technology",
    heroImage: blogHeroPath("plasma-vs-fiber-laser-guide"),
    summary:
      "Compare ADK gantry plasma and fiber laser cutting for thick plate, mild steel profiling, and mixed-material workshops — including cost and quality trade-offs.",
    content:
      "Plasma and fiber laser both profile plate, but they solve different shop problems. Plasma remains strong on thick mild steel and structural work at a lower capital entry. Fiber laser leads on thin-to-medium sheet, fine contours, and clean edges that reduce secondary finishing.\n\nMany Indian fabricators run both: plasma for heavy structural nests, laser for precision sheet and high mix job work.\n\n### Thickness and Material Breakpoints\nAs plate thickness climbs into the heavy structural range, high-definition plasma often keeps cost per cut competitive. Fiber laser dominates when parts need tight tolerances, small holes, or bright stainless edges with minimal dross.\n\n### Source and Process Notes\nADK plasma systems pair with Hypertherm-class sources for reliable pierce and cut quality on carbon steel. Fiber lasers from ADK use solid-state sources with assist-gas recipes tuned for oxygen, nitrogen, or air depending on material and finish.\n\n### Cost of Ownership\nPlasma typically spends more on consumables over time but starts lower. Fiber laser invests more upfront and in power/cooling, then returns value through speed, nesting density, and reduced grinding. Total cost depends on hours run, plate mix, and scrap targets.\n\n### Quick Guide\n- **Prefer plasma**: Thick mild steel, structural profiles, budget-first thick plate capacity.\n- **Prefer fiber laser**: Thin-to-medium sheet, fine features, stainless/aluminium finish quality.\n- **Run both**: Heavy fab plus precision sheet under one roof.\n\nFor a machine shortlist sized to your nest history, contact inquiry1@adkeng.com or call +91 92270 85416.",
    date: "June 24, 2026",
    readTime: "6 min read",
    author: "Technical Team ADK",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What is the typical lead time for an ADK Fiber Laser machine?",
    answer: "For standard bed sizes (ADK 3015C, ADK 3015ES, ADK 3015D), typical ex-factory delivery is 45 to 60 days. Customized large-format sizes (Futuristic Laser Series up to 3500×24000 mm) or ultra-high-power units (30kW+) require 75 to 90 days for gantry assembly and source testing.",
  },
  {
    question: "Do you provide on-site installation and operator training?",
    answer: "Yes. Every ADK machine purchase includes on-site mechanical installation, optical calibration, and comprehensive operator training. We cover safety protocols, parameter tuning for varying materials, nesting software usage, and routine preventive maintenance.",
  },
  {
    question: "How is after-sales service and spare parts support managed?",
    answer: "ADK operates service hubs across Ahmedabad, Pune, Nashik, Nagpur, Kolhapur, Indore, Kolkata, and Bhopal. Contact service@adkeng.com or call +91 95100 41629 / +91 82008 52505. Spares are available at spares@adkeng.com or +91 63526 43947.",
  },
  {
    question: "Can your panel benders handle pre-painted or galvanized sheets without scratching?",
    answer: "Yes. ADK Panel Benders use universal bending blades that swing rather than slide against the sheet surface, eliminating cosmetic scraping. This makes them ideal for finished electrical cabinets and pre-painted enclosures.",
  },
  {
    question: "What power supply requirements do ADK fiber laser machines need?",
    answer: "Standard configurations require 3-phase 380V/50Hz. The 4-in-1 laser welder can operate on single-phase 220V. We provide detailed electrical schematics during the quotation phase.",
  },
  {
    question: "Do you offer customized bed sizes or non-standard machine configurations?",
    answer: "Yes. ADK regularly builds custom bed lengths (Futuristic Laser Series up to 3500×24000 mm), extended throat depths for press brakes, tube+plate LNR configurations, and integrated loading/unloading systems.",
  },
  {
    question: "What laser source brands does ADK use?",
    answer: "ADK fiber laser machines are configured with RAYCUS, IPG, and MAX PHOTONICS laser sources. Plasma machines use Hypertherm PMX and MAXPRO sources. Press brakes feature DSP laser protection and servo main motors.",
  },
];

export const careerPositions: CareerPosition[] = [
  {
    id: "job_01",
    title: "Field Service Engineer (CNC / Laser)",
    department: "After-Sales Support",
    location: "Ahmedabad, Gujarat",
    experience: "3 - 5 Years",
    description: "Oversee installation, commissioning, and diagnostic repair of ADK fiber laser cutters, CNC press brakes, and plasma systems at customer sites across India.",
    requirements: [
      "Diploma or Bachelor's in Electrical/Mechanical/Mechatronics engineering",
      "Hands-on experience with servo systems, hydraulic pumps, and gantry alignments",
      "Familiarity with laser cutting parameter tuning and CNC controllers (CypCut, Delem)",
      "Willingness to travel across regional industrial clusters",
    ],
  },
  {
    id: "job_02",
    title: "CNC Controls Software Engineer",
    department: "Research & Development",
    location: "Ahmedabad, Gujarat",
    experience: "4 - 8 Years",
    description: "Develop and optimize automated motion algorithms, kinematic controllers, and nesting integration for ADK's next-generation panel benders and laser systems.",
    requirements: [
      "Strong coding skills in C++/C# and PLC programming (Beckhoff, Siemens, or Omron)",
      "Understanding of multi-axis kinematics and coordinate transformations",
      "Experience with EtherCAT protocols and servo parameter optimizations",
      "Knowledge of CAD/CAM geometry parsers (DXF/G-code compilation)",
    ],
  },
];

export const newsEvents: NewsEvent[] = [
  {
    id: "ne_01",
    title: "India's First 30KW Fiber Laser Installation",
    date: "2024",
    type: "MILESTONE",
    description: "ADK installed India's first 30KW Fiber Laser Cutting Machine, crossing 400+ successful installations including government organizations like ISRO.",
  },
  {
    id: "ne_02",
    title: "Newly Launched Product Range",
    date: "2025",
    type: "LAUNCH",
    description: "ADK launched CNC Fiber Laser Cutting Robot, Iron Worker, Busbar Processing Machine, and CNC Pipe Bending Machine — expanding beyond core sheet metal machinery.",
  },
  {
    id: "ne_03",
    title: "850+ Installations Milestone",
    date: "2025",
    type: "MILESTONE",
    description: "Crossed 850+ machine installations nationwide. Received first order for 3000×24000mm table-size laser machine — the largest in ADK's portfolio.",
  },
  {
    id: "ne_04",
    title: "Celebrating 10 Years of Precision & Innovation",
    date: "January 2025",
    type: "MILESTONE",
    description: "From a bold vision in 2015 to becoming a trusted engineering partner — ADK celebrates a decade of innovation, precision, and people-powered growth.",
  },
];

export const whyChooseAdk = [
  {
    icon: "engineering",
    title: "Experienced Service Team",
    description: "Qualified engineers with 16+ years of hands-on experience in laser calibration, CNC controls, and hydraulic press brake tuning.",
  },
  {
    icon: "verified",
    title: "Always Deliver More",
    description: "We exceed expectations with proactive support, on-site training, and post-installation calibration included with every machine purchase.",
  },
  {
    icon: "support_agent",
    title: "24/7 Online Support",
    description: "Round-the-clock remote diagnostics and technical assistance. Service team at service@adkeng.com, +91 95100 41629.",
  },
  {
    icon: "schedule",
    title: "On-Time Delivery",
    description: "Structured production timelines with transparent lead-time communication from order confirmation to ex-factory dispatch.",
  },
  {
    icon: "public",
    title: "PAN India Presence",
    description: "8 branch offices: Ahmedabad, Pune, Nashik, Nagpur, Kolhapur, Indore, Kolkata, and Bhopal for rapid on-site support.",
  },
  {
    icon: "build",
    title: "Comprehensive After-Sales",
    description: "Installation, training, ongoing maintenance, technical support, spare parts availability, and upgrade packages — your machine is your capital.",
  },
];

export const leadershipTeam = [
  { name: "Managing Director", role: "Founder & Strategic Leadership", department: "Executive" },
  { name: "Head of Engineering", role: "R&D & Product Development", department: "Engineering" },
  { name: "Head of Operations", role: "Manufacturing & Quality", department: "Operations" },
  { name: "Head of After-Sales", role: "Service & Support", department: "Customer Care" },
];

export const careerApplicationEmail = "inquiry1@adkeng.com";
