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
} from "./media";

export type { ClientLogo } from "./clientLogos";
export { clientLogos, clientMarqueeRowA, clientMarqueeRowB } from "./clientLogos";

// Shared prototype image URLs (fallback until client photos uploaded)
const IMG_LASER =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDjVmy45Wdcg-47h-bK5z5RU9W0abt_yHTY3yiXMp3-6swNoq60WtALnMUTABQVTq71U7fJzCIdxrCl7G7EJxTIkSihb7FtFu2ZUlTQaRM_OLB5wPd8aL5NDPjyc8uKdcaPSzn7bkZ3H2-lGKVqMd50i8LuoUee1PXUb1AO3JfIjcSojclqCiqgnGyHxYFIsRv1V2vdwZDMyZjrSwSTusS2rVdlqfPSpiH5fT21CWvKgJculpd9Doy2uA";
const IMG_PRESS =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB38iSnXjArEblknQSMqDim07fHM_dRbPA_IDg3F56CTqo_1-gIStXEPrBP8mfv2nMRyrvToNrmVE9lTbu-F9TV49IRWZr1W-4reIbGbN0NMWVBqT1d-El2A6SSRNFWgvX3p6cR2CGDx51KBQtsS_f7NeTVovS13SsaZdXLmw97rd2Zde1Vjnq3a30Jp35TVcSPD9Dcsso8cU90_aGh1X7qEfWUv2ot0IREjCb4_7U0FPboB8T80cCH_A";
const IMG_PEB =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAZQwmqr4e-fG8zkgbDfquMEOPCWLRUoP6ClGgI1WQgJlW0SHTY0227I52qRvFC6RWwpJ6xoOz829YKuUfp0PFKd__FOb3YIBzGLpansmaotqKkNCTWbqizLvncH6YikTAeNHHllRY7IHKG28WeX-O0_CphL7Sol08GlbuL_Q_aHiUz2kIpbubDQudMACXCo2NoUJo1R3XhjcGzPkGcRvGSnRz-8u8R3uTcT-UvO77WsywB2CGNWb84Oy1K7DeJrG-SvFo";

// -------------------------------------------------------------
// COMPANY & SITE FACTS
// -------------------------------------------------------------

export const companyInfo = {
  name: "ADK Engineering & Solutions",
  tagline: "Crafting Precision, Shaping Tomorrow",
  founded: 2015,
  website: "https://www.adkeng.com",
  overview:
    "ADK Engineering & Solutions is a premier provider of advanced sheet metal machinery, standing at the forefront of innovation across healthcare, manufacturing, telecommunications, and entertainment sectors. We design, manufacture, and deliver a complete range of fiber laser cutting, CNC plasma, press brake, laser welding, PEB, and panel bending solutions.",
  corporateAddress:
    "A-503/504, Empire Business Hub, Nr. Shukan Mall, Science City Road, Sola, Ahmedabad 380060, Gujarat",
  worksAddress:
    "2100/2, Santej-Khatraj Road, Near Gayatri Farm, Santej 382722, Gujarat",
  generalPhones: ["+91 99099 53637", "079 48930224"],
  generalEmails: ["info@adkeng.com", "adkeng09@gmail.com"],
  stats: {
    yearsExperience: "16+",
    customers: "750+",
    team: "50+",
    installations: "550+",
  },
};

export const branches: Branch[] = [
  { city: "Ahmedabad" },
  { city: "Pune" },
  { city: "Nashik" },
  { city: "Nagpur" },
  { city: "Kolhapur" },
  { city: "Indore" },
  { city: "Kolkata" },
  { city: "Bhopal" },
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
    title: "550+ Installations",
    desc: "Received first order for 3000×24000mm table-size laser machine. Vision to add 251+ new satisfied customers. Crossed 550+ installations.",
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
    title: "Santej Works — Main Facility",
    type: "facility",
    image: factoryPhotoPath("santej-works-main.jpg"),
    sublabel: "Factory photo pending from client",
  },
  {
    id: "fac_02",
    title: "Gantry Assembly Floor",
    type: "facility",
    image: factoryPhotoPath("gantry-assembly.jpg"),
    sublabel: "Factory photo pending",
  },
  {
    id: "fac_03",
    title: "Optical Calibration Lab",
    type: "facility",
    image: factoryPhotoPath("optical-calibration-lab.jpg"),
    sublabel: "Facility photo pending",
  },
  {
    id: "fac_04",
    title: "Hydraulic Test Bay",
    type: "facility",
    image: factoryPhotoPath("hydraulic-test-bay.jpg"),
    sublabel: "Infrastructure photo pending",
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
    title: "Industrial Pioneer Exchange-Table Fiber Laser Cutting Demo",
    duration: "2:45",
    thumbnail: videoThumbnailPath("V_01"),
  },
  {
    id: "V_02",
    title: "NADKpress CNC Press Brake Bend Test",
    duration: "1:30",
    thumbnail: videoThumbnailPath("V_02"),
  },
  {
    id: "V_03",
    title: "ADK-PB Panel Bender Folding Demonstration",
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
    tagline: "High-speed fiber laser cutting from 1kW to 60kW with ±0.03 mm accuracy.",
    description:
      "ADK fiber laser cutting machines cover exchange-table, single-pallet, dual-position, futuristic large-format, tube cutting, and tube+plate configurations. Built with heavy steel pipe beds, quick exchange tables, and RAYCUS, IPG, or MAX PHOTONICS sources for round-the-clock industrial production.",
    models: [
      {
        id: "FL-3015C",
        name: "Industrial Pioneer Series (Exchange Table)",
        slug: "industrial-pioneer-exchange-table",
        tagline: "Quick-exchange table for continuous high-volume sheet cutting",
        description:
          "The Industrial Pioneer Series features a super heavy steel pipe welded bed with quick exchange table that significantly improves production efficiency and saves labour costs. Models ADK 3015C through ADK 6525C cover working areas from 3000×1500 mm to 6500×2500 mm.",
        status: "IN_STOCK",
        image: IMG_LASER,
        specsSummary: {
          Models: "ADK 3015C – 6525C",
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
          { label: "Models", value: "ADK 3015C / ADK 6515C / ADK 6520C / ADK 6525C" },
          { label: "Working Area", value: "3000×1500 / 6500×1500 / 6500×2000 / 6500×2500 mm" },
          { label: "Speed", value: "100 m/min" },
          { label: "Accuracy", value: "±0.03 mm" },
          { label: "Machine Capacity", value: "Up to 60KW" },
          { label: "Power Source", value: "RAYCUS, IPG, MAX PHOTONICS" },
        ],
      },
      {
        id: "FL-8025SL",
        name: "Futuristic Laser Series",
        slug: "futuristic-laser-series",
        tagline: "Super large heavy-duty structure for high-power plate cutting up to 24m",
        description:
          "The Futuristic Laser Series is built for super large heavy-duty production. These high-power machines deliver excellent cutting ability on larger plates with smooth cutting finish. India's first 30KW installation was from this series.",
        status: "CUSTOM",
        image: IMG_LASER,
        specsSummary: {
          Models: "ADK 8025SL – 24035SL",
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
          { label: "Models", value: "ADK 8025SL / ADK 14030SL / ADK 24035SL" },
          { label: "Working Area", value: "2500×8000 / 3000×14000 / 3500×24000 mm" },
          { label: "Speed", value: "100 m/min" },
          { label: "Accuracy", value: "±0.05 mm/m" },
          { label: "Machine Capacity", value: "Up to 60KW" },
          { label: "Power Source", value: "RAYCUS, IPG, MAX PHOTONICS" },
        ],
      },
      {
        id: "FL-3015ES",
        name: "In-demand Innovation Series (Single Pallet)",
        slug: "single-pallet-es-series",
        tagline: "Cost-effective single pallet machine capturing 75%+ market share",
        description:
          "Single pallet machines with standard and custom table sizes. Easy loading and unloading, cost-effective and user-friendly — this innovative development captures more than 75% market ratio in its class.",
        status: "IN_STOCK",
        image: IMG_LASER,
        specsSummary: {
          Models: "ADK 3015ES – 6525ES",
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
          { label: "Models", value: "ADK 3015ES / ADK 6515ES / ADK 6520ES / ADK 6525ES" },
          { label: "Working Area", value: "3000×1500 / 6500×1500 / 6500×2000 / 6500×2500 mm" },
          { label: "Speed", value: "100 m/min" },
          { label: "Accuracy", value: "±0.03 mm" },
          { label: "Machine Capacity", value: "Up to 60KW" },
          { label: "Power Source", value: "RAYCUS, MAX PHOTONICS, IPG" },
        ],
      },
      {
        id: "FL-3015D",
        name: "Dual-Position Exchange Table Series",
        slug: "dual-position-exchange-table",
        tagline: "15–20 second table exchange for small parts high-volume cutting",
        description:
          "Designed for higher productivity in small parts cutting. Used by sheet metal fabricators, panel manufacturers, cupboard manufacturers, and kitchen equipment producers. Table exchange time is just 15–20 seconds.",
        status: "IN_STOCK",
        image: IMG_LASER,
        specsSummary: {
          Exchange: "15–20 sec",
          Speed: "100 m/min",
          Accuracy: "±0.03 mm",
        },
        features: [
          "Dual-position exchange table",
          "15–20 second table swap time",
          "Ideal for panel and kitchen equipment producers",
          "Up to 60KW laser capacity",
        ],
        specifications: [
          { label: "Models", value: "ADK 3015D / ADK 4020D / ADK 6515D / ADK 6520D / ADK 6525D" },
          { label: "Working Area", value: "3000×1500 / 4000×2000 / 6500×1500 / 6500×2000 / 6500×2500 mm" },
          { label: "Speed", value: "100 m/min" },
          { label: "Accuracy", value: "±0.03 mm" },
          { label: "Machine Capacity", value: "Up to 60KW" },
          { label: "Power Source", value: "RAYCUS, MAX PHOTONICS, IPG" },
        ],
      },
      {
        id: "FL-GKS",
        name: "Professional Tube Cutting Machine",
        slug: "professional-tube-cutting",
        tagline: "Round, square, rectangular pipes and profiled steel tube cutting",
        description:
          "Capable of cutting round pipes, square pipes, rectangular pipes, channel steel, angle steel, I-beams, and other profiled steel. Precision pneumatic chuck with four-jaw automatic centering clamping.",
        status: "READY",
        image: IMG_LASER,
        specsSummary: {
          Models: "GKS 6016T2 – 12036BT3",
          Pipe_Range: "10–250 mm",
          Power: "Up to 12KW",
        },
        features: [
          "Precision pneumatic four-jaw auto-centering chuck",
          "Round, square, rectangular and profiled steel cutting",
          "2-chuck and 3-chuck configurations available",
          "Up to 12000W laser power option",
        ],
        specifications: [
          { label: "Models", value: "GKS 6016T2 / GKS 9016T2 / GKS 6024T2 / GKS 6036T2 / GKS 6036T3" },
          { label: "Round Pipe Capacity", value: "10–160 mm (6016) / 20–250 mm (6024+)" },
          { label: "Effective Cutting Length", value: "6500 mm / 9500 mm / 12500 mm" },
          { label: "Rotating Speed", value: "60–140 r/min" },
          { label: "Single Pipe Load", value: "80–1200 KG" },
          { label: "Laser Power", value: "Up to 12000W" },
        ],
      },
      {
        id: "FL-LNR",
        name: "Tube + Plate LNR Series",
        slug: "tube-plate-lnr-series",
        tagline: "One machine for dual pipe and sheet cutting — saves cost and space",
        description:
          "The LNR Series meets the dual requirements of cutting pipes and sheets in a single machine, saving floor space and capital investment. Optional automatic loading/unloading and three-chuck configurations available.",
        status: "CUSTOM",
        image: IMG_LASER,
        specsSummary: {
          Function: "Tube + Plate",
          Options: "Auto load/unload",
          Series: "LNR",
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
    tagline: "Gantry, table, and portable CNC plasma systems with Hypertherm sources.",
    description:
      "ADK CNC plasma cutting machines include heavy-duty gantry type, table type, and portable configurations. Features anti-collision systems, backlash-free rack & pinion drives, and Hypertherm PMX/MAXPRO plasma sources for structural steel profiling.",
    models: [
      {
        id: "PL-2508",
        name: "Gantry Type CNC Plasma",
        slug: "gantry-plasma-cutting",
        tagline: "Heavy-duty gantry structure for large-format structural profiling",
        description:
          "Heavy duty gantry type structure with dual shaft linear motion guide, rack & pinion drive, anti-collision system, and high-tension cup spring backlash compensation. Hypertherm plasma sources from PMX 45 to MAXPRO 200.",
        status: "READY",
        image: IMG_LASER,
        specsSummary: {
          Models: "ADK 2508 – 5508 P/F",
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
          { label: "Models", value: "ADK 2508 P/F / ADK 3508 P/F / ADK 4008 P/F / ADK 5508 P/F" },
          { label: "Working Width", value: "1800×6500 / 2800×6500 / 3200×6500 / 4500×6500 mm" },
          { label: "Speed", value: "0–12000 mm/min" },
          { label: "Accuracy", value: "±0.03 mm/3m" },
          { label: "Power Source", value: "PMX 45, PMX 65, PMX 85, PMX 105, PMX 125, MAXPRO 200" },
          { label: "Source Make", value: "Hypertherm" },
        ],
      },
      {
        id: "PL-TABLE",
        name: "Table & Portable CNC Plasma",
        slug: "table-portable-plasma",
        tagline: "Table type and portable plasma for flexible workshop deployment",
        description:
          "Table type and portable CNC plasma systems for workshops needing flexible deployment. Track widths from 2500 mm and above with customizable track lengths up to 8000 mm and beyond.",
        status: "READY",
        image: IMG_LASER,
        specsSummary: {
          Types: "Table / Portable",
          Track: "Up to 8000+ mm",
          Source: "Hypertherm USA",
        },
        features: [
          "Table type and portable configurations",
          "Dual linear motion guide transmission",
          "Heat resistive heavy duty iron frame",
          "FastCam nesting software (Australia)",
        ],
        specifications: [
          { label: "Table Track Width", value: "2500, 3500, 4200 mm & above" },
          { label: "Track Length", value: "4000, 6000, 8000 mm & above" },
          { label: "Portable Cutting Area", value: "1250×2500 mm" },
          { label: "Controller", value: "FLSK 2300B (Weldarc) / NC Controller" },
          { label: "Power Source", value: "Hypertherm, USA" },
          { label: "Rapid Positioning Speed", value: "0–12000 mm/min" },
        ],
      },
    ],
  },
  {
    id: "cat_03",
    name: "CNC Press Brake",
    slug: "cnc-press-brake",
    icon: "architecture",
    tagline: "NADKpress CNC press brakes from 40T to 800T with 4, 5, 7 & 9 axis options.",
    description:
      "NADKpress CNC press brakes feature integrated welded frames with shot-blast anti-rust treatment, servo main motor drive (60% lower energy consumption), DSP laser protection, mechanical crowning, and 4/5/7/9 axis configurations from 40T to 800T.",
    models: [
      {
        id: "PB-NADK",
        name: "NADKpress CNC Press Brake",
        slug: "nadkpress-cnc-press-brake",
        tagline: "Servo-driven press brake with DSP laser guard and mechanical crowning",
        description:
          "The whole frame adopts integrated welding with tempering to eliminate internal stress. Y1/Y2 axis synchronous ram control, servo main motor (60% lower energy than conventional), and high-frequency hydraulic control for faster, more stable bending.",
        status: "READY",
        image: IMG_PRESS,
        specsSummary: {
          Tonnage: "40T – 800T",
          Axis: "4, 5, 7 & 9",
          Energy: "60% lower",
        },
        features: [
          "Integrated welded frame with shot-blast anti-rust treatment",
          "Servo main motor — 60% lower energy consumption",
          "DSP laser protection safety system",
          "4, 5, 7 & 9 axis configurations available",
          "Mechanical crowning, sheet followers, dual side clamping",
        ],
        specifications: [
          { label: "Bending Force Range", value: "40 Ton to 800 Ton" },
          { label: "Bending Length", value: "1600 mm to 8000 mm" },
          { label: "Axis Options", value: "4, 5, 7 & 9 Axis available" },
          { label: "Controller", value: "Y1/Y2 synchronous ram control" },
          { label: "Safety", value: "DSP laser protection, back side door, side doors" },
          { label: "Additional Features", value: "Sheet followers, dual side clamping, mechanical crowning, ladders" },
        ],
      },
    ],
  },
  {
    id: "cat_04",
    name: "Fiber Laser Welding",
    slug: "fiber-laser-welding",
    icon: "flare",
    tagline: "4-in-1 laser welding, cleaning, cutting, and wire feeding system.",
    description:
      "ADK's 4-in-1 Fiber Laser Welding Machine replaces traditional MIG and TIG welding with higher speed, better finishing, no grinder requirement, lower operating cost, and reduced heat hazard compared to conventional arc welding.",
    models: [
      {
        id: "LW-4IN1",
        name: "4-in-1 Fiber Laser Welding Machine",
        slug: "4in1-fiber-laser-welding",
        tagline: "Laser welding, cleaning, cutting, and wire feed in one handheld system",
        description:
          "The ADK 4-in-1 laser welding system delivers high speed, better finishing, no need for grinder, low operating cost, low heat hazard, and high efficiency compared to MIG & TIG welding processes.",
        status: "IN_STOCK",
        image: IMG_LASER,
        specsSummary: {
          Functions: "Weld/Clean/Cut/Feed",
          vs_MIG_TIG: "Higher speed",
          Finish: "No grinder needed",
        },
        features: [
          "4-in-1: laser welding, cleaning, cutting, and wire feeding",
          "Higher speed than MIG & TIG welding",
          "Better finishing with no grinder requirement",
          "Low operating cost and reduced heat hazard",
        ],
        specifications: [
          { label: "Functions", value: "Laser Welding / Cleaning / Cutting / Wire Feed" },
          { label: "vs MIG & TIG", value: "Higher speed, better finishing, lower heat hazard" },
          { label: "Post-Weld", value: "No grinder required" },
          { label: "Operating Cost", value: "Significantly lower than conventional arc welding" },
          { label: "Applications", value: "Stainless steel, carbon steel, aluminum fabrication" },
        ],
      },
    ],
  },
  {
    id: "cat_05",
    name: "PEB Machinery",
    slug: "peb-machinery",
    icon: "factory",
    tagline: "H-beam welding and SAW gantry systems for pre-engineered buildings.",
    description:
      "PEB machines fabricate pre-engineered building components — pre-cut, pre-drilled, and pre-welded structural steel. ADK offers H-Beam Welding (PTW) and SAW Gantry Welding machines for accurate, computer-controlled fabrication.",
    models: [
      {
        id: "PEB-PTW",
        name: "H-Beam Welding Machine (PTW)",
        slug: "peb-h-beam-welding",
        tagline: "Integrated H-beam assembly and submerged arc welding line",
        description:
          "The H-Beam Welding Machine (PTW) handles web widths from 200 to 1500 mm and flange heights from 150 to 500 mm. Beam lengths from 2.5 to 15 metres with web thickness 5–20 mm and flange thickness 5–25 mm.",
        status: "CUSTOM",
        image: IMG_PEB,
        specsSummary: {
          Web: "200–1500 mm",
          Flange: "150–500 mm",
          Length: "2.5–15 m",
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
        name: "SAW Gantry Welding Machine",
        slug: "peb-saw-gantry-welding",
        tagline: "Heavy-duty submerged arc gantry welding for large structural beams",
        description:
          "SAW Gantry Welding Machine for larger web and flange dimensions — web up to 2500 mm, flange up to 1000 mm, with web thickness up to 80 mm for heavy structural steel fabrication.",
        status: "CUSTOM",
        image: IMG_PEB,
        specsSummary: {
          Web: "200–2500 mm",
          Flange: "250–1000 mm",
          Web_Thick: "5–80 mm",
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
    tagline: "Hydraulic shearing machines for plate preparation and edge trimming.",
    description:
      "ADK hydraulic shearing machines are used for plate preparation before laser or plasma cutting, and for edge trimming in fabrication workshops. Configurations are available to suit varying thickness and cutting length requirements.",
    models: [
      {
        id: "SH-HYD",
        name: "Hydraulic Shearing Machine",
        slug: "hydraulic-shearing-machine",
        tagline: "Hydraulic guillotine shear for workshop plate preparation",
        description:
          "Robust hydraulic shearing machines for plate preparation and edge trimming. Available in configurations to suit different thickness and length requirements for fabrication workshops.",
        status: "READY",
        image: IMG_PRESS,
        specsSummary: {
          Type: "Hydraulic Guillotine",
          Application: "Plate prep",
          Config: "Multiple sizes",
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
    name: "Panel Bender",
    slug: "panel-bender",
    icon: "architecture",
    tagline: "Universal bending die panel benders — 0.2s per bend, no tooling changes.",
    description:
      "ADK Panel Benders adopt a universal bending die that completes various shapes with only one set of die. Handles arc, hem, return, and closed profiles without custom tooling. Models ADK-PB1400P, ADK-PB2000P, and ADK-PB2500P.",
    models: [
      {
        id: "PB-1400",
        name: "ADK Panel Bender Series",
        slug: "adk-panel-bender-series",
        tagline: "Universal bending die — 0.2 seconds per bend, no tooling changes",
        description:
          "Panel Bender adopts universal bending die completing various shapes with only one set of die. Easily meets arc, hem, return, closed and other complex sheet metal bending requirements without custom tooling.",
        status: "CUSTOM",
        image: IMG_PEB,
        specsSummary: {
          Models: "PB1400P – PB2500P",
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
          { label: "Models", value: "ADK-PB1400P / ADK-PB2000P / ADK-PB2500P" },
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
    id: "cat_08",
    name: "Spares & Consumables",
    slug: "spares-consumables",
    icon: "precision_manufacturing",
    tagline: "Genuine spares: cutting heads, nozzles, laser sources, drives, and more.",
    description:
      "Minimize downtime with ADK genuine spares and consumables. We maintain inventory of cutting heads, punch & die, laser power sources, gear boxes, limit sensors, rack & pinion, LM guides, bellows, drives & motors, and gas regulators.",
    models: [
      {
        id: "SP-CAT",
        name: "Spares & Consumables Catalogue",
        slug: "spares-consumables-catalogue",
        tagline: "Complete range of genuine ADK machine spares and consumables",
        description:
          "ADK stocks genuine spares and consumables to keep your machinery running at peak performance. Quick dispatch from our spares department with dedicated support at spares@adkeng.com.",
        status: "IN_STOCK",
        image: IMG_LASER,
        specsSummary: {
          Categories: "10+ types",
          Dispatch: "Quick delivery",
          Contact: "spares@adkeng.com",
        },
        features: [
          "Cutting heads and protective windows",
          "Punch & die sets for press brakes",
          "Laser power source components",
          "Gear box, limit sensors, rack & pinion, LM guide",
          "Bellows, drives & motors, gas regulators",
        ],
        specifications: [
          { label: "Cutting Head", value: "Laser cutting head assemblies and nozzles" },
          { label: "Punch & Die", value: "Press brake tooling sets" },
          { label: "Laser Power Source", value: "Source modules and optical components" },
          { label: "Motion Components", value: "Gear box, rack & pinion, LM guide, limit sensors" },
          { label: "Protection", value: "Bellows, drives & motors" },
          { label: "Gas Systems", value: "Gas regulators and assist gas fittings" },
          { label: "Contact", value: "spares@adkeng.com / +91 63526 43947" },
        ],
      },
    ],
  },
];

export const categories: ProductCategory[] = rawCategories.map((cat) => ({
  ...cat,
  models: cat.models.map((m) => ({
    ...m,
    image: productHeroPath(cat.slug, m.slug),
    images: m.images ?? productGalleryPaths(cat.slug, m.slug),
  })),
}));

// Slug reference for applications recommendedMachines:
// industrial-pioneer-exchange-table, futuristic-laser-series, single-pallet-es-series,
// dual-position-exchange-table, professional-tube-cutting, tube-plate-lnr-series,
// gantry-plasma-cutting, table-portable-plasma, nadkpress-cnc-press-brake,
// 4in1-fiber-laser-welding, peb-h-beam-welding, peb-saw-gantry-welding,
// hydraulic-shearing-machine, adk-panel-bender-series, spares-consumables-catalogue

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
  },
  {
    id: "app_05",
    name: "Control Panel",
    slug: "control-panel",
    icon: "settings",
    tagline: "Precision enclosures, junction boxes, and cabinet structures.",
    description: "Electrical enclosures require IP-rated dust and water protection, making accurate side-wall dimensions and door flanges critical.",
    challenges: ["Multi-bend profiles requiring frequent tooling adjustments", "Handling scratch-sensitive galvanized and pre-painted sheets", "Consistent door flange alignments"],
    solutions: ["Universal bending tools on panel benders forming box shapes automatically", "Autofocus lasers cutting ventilation patterns and cabinet holes at high speeds"],
    recommendedMachines: ["adk-panel-bender-series", "industrial-pioneer-exchange-table"],
  },
  {
    id: "app_06",
    name: "Elevators",
    slug: "elevators",
    icon: "swap_vert",
    tagline: "Precision cabin panel bending, bracket structures, and guide rails.",
    description: "Elevator cabin doors and panels demand cosmetically perfect finishes and smooth, soundless movements, meaning high dimensional tolerances are vital.",
    challenges: ["Visible press brake tooling marks on mirror-finish stainless steel panels", "Tight parallel door flange requirements", "High-volume small brackets manufacturing"],
    solutions: ["Panel bender with soft-touch clamps eliminating mechanical scratches", "Fiber laser cutting with nitrogen assist for bright, scale-free edges"],
    recommendedMachines: ["adk-panel-bender-series", "industrial-pioneer-exchange-table"],
  },
  {
    id: "app_07",
    name: "Food Machinery",
    slug: "food-machinery",
    icon: "restaurant",
    tagline: "Sanitary stainless steel containers and processing equipment.",
    description: "Food grade steel requires weld regions to be completely smooth and pit-free to prevent bacterial accumulation.",
    challenges: ["Time-consuming post-weld grinding and polishing on stainless steel joints", "Intricate slicing patterns for hopper and feeder systems", "High reflectivity processing"],
    solutions: ["4-in-1 laser welders making narrow, clean weld lines without burning adjacent panels", "High-transmission fiber optics cutting copper, brass, and SS sheets"],
    recommendedMachines: ["4in1-fiber-laser-welding", "industrial-pioneer-exchange-table"],
  },
  {
    id: "app_08",
    name: "Heavy Fabrication",
    slug: "heavy-fabrication",
    icon: "handyman",
    tagline: "Thick plate processing, heavy duty weld beveling, and massive beams.",
    description: "Heavy engineering plants assemble railway bridges, cranes, and earthmovers where reliability of structural welds is a matter of safety.",
    challenges: ["Beveling and cutting plates up to 50mm thick", "High-power structural welding with thick wires", "Material handling and alignment of multi-ton steel sections"],
    solutions: ["High-tonnage CNC press brakes with hydraulic crowning", "SAW H-beam welding lines to automatically construct structural pillars"],
    recommendedMachines: ["nadkpress-cnc-press-brake", "peb-h-beam-welding"],
  },
  {
    id: "app_09",
    name: "Hydraulic Machinery",
    slug: "hydraulic-machinery",
    icon: "plumbing",
    tagline: "Base frames, oil tanks, and manifold bracket fabrications.",
    description: "Base frames for hydraulic systems require rigid structures to handle mechanical torque and support heavy hydraulic pumps.",
    challenges: ["Weld joint leakages in high pressure hydraulic tanks", "Precise alignment of pump mounting holes on structural bases", "Thick structural frame profile cutting"],
    solutions: ["Direct CNC profiling of mounting holes using high gantry lasers", "Precision bending of tank sidewalls to reduce overall weld seams"],
    recommendedMachines: ["industrial-pioneer-exchange-table", "nadkpress-cnc-press-brake"],
  },
  {
    id: "app_10",
    name: "Job Work",
    slug: "job-work",
    icon: "work",
    tagline: "Flexible job-shop systems designed to swap materials quickly.",
    description: "Job shops face changing profiles: thin aluminum in the morning, 20mm structural plates in the afternoon. Flexibility is their survival metric.",
    challenges: ["Frequent setup and tear-down times", "Diverse material stock management", "Quick nesting generation to maximize sheet yield"],
    solutions: ["Single pallet ES series with easy loading and 75%+ market adoption", "User-friendly controller screens with built-in auto-nesting databases"],
    recommendedMachines: ["single-pallet-es-series", "nadkpress-cnc-press-brake"],
  },
  {
    id: "app_11",
    name: "Material Handling",
    slug: "material-handling",
    icon: "conveyor_belt",
    tagline: "Conveyor frames, rack beams, and automated warehousing chassis.",
    description: "Warehousing systems use structural channels, sheets, and tubes assembled in large quantities to sustain static cargo loads.",
    challenges: ["High-volume repetitive cuts of structural channels", "Consistent hole pitches along long structural profiles", "Precision structural corner welds"],
    solutions: ["Fiber laser cutting with custom rotary pipe fixtures", "Hydraulic shearing machines to chop structural bars cleanly"],
    recommendedMachines: ["industrial-pioneer-exchange-table", "hydraulic-shearing-machine"],
  },
  {
    id: "app_12",
    name: "PEB",
    slug: "peb",
    icon: "domain",
    tagline: "High-yield fabrication machinery for Pre-Engineered Building components.",
    description: "Pre-Engineered Building columns, beams, purlins, and wall panels must be fabricated quickly to meet project delivery schedules.",
    challenges: ["Production bottleneck in building structural H-beams manually", "Correcting flange distortion post-welding", "Fast processing of structural plates for joist connections"],
    solutions: ["Integrated H-Beam Assembly and SAW Welding lines running continuously", "CNC Plasma cutters to prepare splice plate connections"],
    recommendedMachines: ["peb-h-beam-welding", "gantry-plasma-cutting"],
  },
  {
    id: "app_13",
    name: "Profile Cutting",
    slug: "profile-cutting",
    icon: "draw",
    tagline: "High-precision shapes from structural steel plates.",
    description: "Creating highly customized steel shapes, gear profiles, and connection rings from plates requires minimal heat-affected zones.",
    challenges: ["Dross and slag build-up on underside profiles", "Hardened cut edges that degrade subsequent drilling tools", "Beveling error on thick cutouts"],
    solutions: ["Fine-focus fiber laser cutting on gantry beds", "High-definition plasma systems with regulated gas proportions"],
    recommendedMachines: ["industrial-pioneer-exchange-table", "gantry-plasma-cutting"],
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
  },
  {
    id: "app_16",
    name: "Steel & Metal Work",
    slug: "steel-metal-work",
    icon: "hardware",
    tagline: "Grills, structural stairs, custom architectural panels.",
    description: "Architectural fabrication integrates customized, complex patterns on copper, brass, stainless steel, and iron.",
    challenges: ["Intricate decorative cut designs without thermal warp", "Cutting reflective yellow metals without back-reflection damage", "Short turnaround for customized architect jobs"],
    solutions: ["High-speed fiber lasers with back-reflection optical isolators", "Integrated software converters accepting CAD DXF profiles directly"],
    recommendedMachines: ["industrial-pioneer-exchange-table", "4in1-fiber-laser-welding"],
  },
  {
    id: "app_17",
    name: "Tank Manufacturing",
    slug: "tank-manufacturing",
    icon: "reorder",
    tagline: "Pressure vessels, chemical silos, storage tanks, and boilers.",
    description: "Cylindrical storage vessels are subjected to internal pressures, requiring high precision in plate rolling and longitudinal seams.",
    challenges: ["Welding long horizontal plate joints uniformly", "Aligning plate edges before welding without gap variances", "Perfect circle rolling and edge preparation"],
    solutions: ["CNC plasma bevel heads to cut circular port flanges", "SAW welding systems adapted for cylindrical tank rotators"],
    recommendedMachines: ["gantry-plasma-cutting", "peb-saw-gantry-welding"],
  },
  {
    id: "app_18",
    name: "Textile Machinery",
    slug: "textile-machinery",
    icon: "texture",
    tagline: "Precision spinning frames, loom brackets, and carding machine parts.",
    description: "Loom and carding structures are high-speed moving mechanisms, where even small weight or balance variances produce damaging vibrations.",
    challenges: ["Massive component counts with multi-axis bracket geometry", "Surface finish must be mirror-smooth to avoid catching threads", "Weight optimization via skeletal sheet structures"],
    solutions: ["High-speed fiber laser cutting for lightweight structural cutouts", "Multi-axis CNC press brakes for complex bracket geometry"],
    recommendedMachines: ["industrial-pioneer-exchange-table", "nadkpress-cnc-press-brake"],
  },
  {
    id: "app_19",
    name: "Tower Manufacturing",
    slug: "tower-manufacturing",
    icon: "radar",
    tagline: "Telecommunication pylons, transmission poles, and structural frames.",
    description: "Wind, electrical transmission, and telecommunication masts require heavy structural angles, thick plate gussets, and high structural safety factors.",
    challenges: ["Processing thick angle iron and structural steel profiles", "Accurate flange plate cutting and multi-hole punching", "High volume assembly alignment"],
    solutions: ["CNC Plasma profiling for thick connector plates", "Hydraulic shearing machines to chop angle bars without edge deformation"],
    recommendedMachines: ["gantry-plasma-cutting", "hydraulic-shearing-machine"],
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
      { label: "Installations", value: "550+" },
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
    id: "bp_01",
    title: "Understanding Fiber Laser Power Requirements for Sheet Metal",
    slug: "laser-power-sheet-metal-guide",
    category: "Fiber Laser",
    heroImage: blogHeroPath("laser-power-sheet-metal-guide"),
    summary: "Selecting the correct laser power is critical for balancing machinery budget with production speed. Read our breakdown on choosing between 3kW, 6kW, 12kW, and 30kW+ configurations.",
    content: "When purchasing a fiber laser cutting machine, one of the most critical decisions is specifying the laser power. ADK offers sources from 1kW to 60kW via RAYCUS, IPG, and MAX PHOTONICS.\n\n### The Relationship Between Power and Speed\nWhile a 3kW laser can cut stainless steel up to 10mm thick, a 12kW source does so at roughly four times the speed. For workshops processing 2mm to 5mm sheets in high volumes, a 6kW laser represents the efficiency sweet spot.\n\n### Assist Gas Selection\nHigh-power lasers (12kW+) cut thick plates efficiently using oxygen, while nitrogen is preferred for thin-to-medium sheets. Compressed air has emerged as a cost-effective alternative for carbon and stainless steels up to 8mm.\n\n### Summary\n- **1kW - 3kW**: Thin sheet profiling, signs, and light brackets.\n- **6kW - 12kW**: Medium-scale job work and structural brackets.\n- **12kW - 30kW+**: Heavy engineering, thick plate, and round-the-clock operations.",
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
    summary: "NADKpress CNC press brakes are versatile, but ADK panel benders excel at cabinet geometries. This article compares setup times, precision, and production yields.",
    content: "Bending sheet metal represents a major manufacturing step. While the hydraulic press brake has been the industry standard for decades, ADK automated panel benders are increasingly adopted in modern smart factories.\n\n### Setup Times and Versatility\nA traditional press brake requires changing dies and punch blocks for varying gauges or radii. ADK panel benders use a universal bending blade adjusting stroke to form varying angles without tooling changes. For box-shaped geometries like doors and cabinets, the panel bender eliminates set-up time completely.\n\n### Component Handling\nOn a press brake, the operator must manually lift and support the sheet during bends. An ADK panel bender clamps the sheet flat; the manipulator rotates it and bending blades form flanges hands-free.\n\n### Comparison\n- **NADKpress Press Brake**: High versatility, 40T–800T, 4/5/7/9 axis, lower capital cost.\n- **ADK Panel Bender**: 3x–5x faster for boxes/cabinets, 0.2s/bend, zero tooling changes, automatic manipulation.",
    date: "July 2, 2026",
    readTime: "7 min read",
    author: "Engineering Dept ADK",
  },
  {
    id: "bp_03",
    title: "CNC Plasma vs. Fiber Laser: When to Choose Which",
    slug: "plasma-vs-fiber-laser-guide",
    category: "Cutting Technology",
    heroImage: blogHeroPath("plasma-vs-fiber-laser-guide"),
    summary: "Topic slot for client editorial — comparing ADK gantry plasma systems with fiber laser cutters for thick plate, mild steel profiling, and mixed-material workshops.",
    content: "This article will be updated when the client confirms the editorial topic and final copy.\n\n### Planned Coverage\n- Material thickness breakpoints where plasma remains cost-effective\n- Hypertherm PMX and MAXPRO plasma source capabilities\n- Fiber laser advantages for thin-to-medium sheet and fine contours\n- Total cost of ownership across power, gas, and consumables\n\n### Contact\nFor immediate guidance on machine selection, contact inquiry1@adkeng.com or call +91 92270 85416.",
    date: "Coming Soon",
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
    title: "550+ Installations Milestone",
    date: "2025",
    type: "MILESTONE",
    description: "Crossed 550+ machine installations nationwide. Received first order for 3000×24000mm table-size laser machine — the largest in ADK's portfolio.",
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
