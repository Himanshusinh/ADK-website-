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
  recommendedMachines: string[]; // Model slugs
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
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

// -------------------------------------------------------------
// DATA ARRAYS
// -------------------------------------------------------------

export const categories: ProductCategory[] = [
  {
    id: "cat_01",
    name: "Fiber Laser Cutting",
    slug: "fiber-laser-cutting",
    icon: "flare",
    tagline: "High-speed and high-precision fiber laser sheet metal processing.",
    description: "Our fiber laser cutting machines represent the pinnacle of speed and efficiency. Designed with robust gantry systems and cutting-edge fiber sources from 1kW up to 12kW, they deliver flawless tolerances on stainless steel, carbon steel, aluminum, brass, and copper.",
    models: [
      {
        id: "FL-X01",
        name: "ADK Fiber Laser X Series",
        slug: "adk-fl-x01",
        tagline: "Standard Industrial High-Speed Laser Cutter",
        description: "The ADK Fiber Laser X Series is our flagship model, built for round-the-clock industrial fabrication. Featuring a dual-drive gantry structure, rapid shuttle table exchange, and intelligent autofocus cutting head, it delivers maximum uptime and top-tier speed.",
        status: "IN_STOCK",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjVmy45Wdcg-47h-bK5z5RU9W0abt_yHTY3yiXMp3-6swNoq60WtALnMUTABQVTq71U7fJzCIdxrCl7G7EJxTIkSihb7FtFu2ZUlTQaRM_OLB5wPd8aL5NDPjyc8uKdcaPSzn7bkZ3H2-lGKVqMd50i8LuoUee1PXUb1AO3JfIjcSojclqCiqgnGyHxYFIsRv1V2vdwZDMyZjrSwSTusS2rVdlqfPSpiH5fT21CWvKgJculpd9Doy2uA",
        specsSummary: {
          "Power_Range": "1kW - 12kW",
          "Bed_Dimension": "6000 x 2500 mm",
          "Accel_Speed": "1.2G"
        },
        features: [
          "Dual-shuttle exchange table for continuous material feeding",
          "Aviation-grade aluminum gantry for high stiffness and speed",
          "Raytools/Precitec autofocus laser head",
          "Intelligent smoke evacuation system with localized dampers"
        ],
        specifications: [
          { label: "Laser Source Power", value: "1000W / 2000W / 3000W / 6000W / 12000W" },
          { label: "Working Table Size", value: "3000x1500mm / 4000x2000mm / 6000x2500mm" },
          { label: "X/Y Axis Positioning Accuracy", value: "±0.03 mm" },
          { label: "X/Y Axis Reposition Accuracy", value: "±0.02 mm" },
          { label: "Max. Linkage Speed", value: "120 m/min" },
          { label: "Max. Acceleration", value: "1.2G" },
          { label: "Cooling Method", value: "Dual temperature industrial water chiller" }
        ]
      },
      {
        id: "FL-U02",
        name: "ADK Fiber Laser Ultra Series",
        slug: "adk-fl-ultra",
        tagline: "Ultra-High Power Sheet & Plate Processing",
        description: "Engineered specifically for heavy fabrication shops, the Ultra Series supports power levels from 12kW to 30kW. It handles thick plates of carbon steel and stainless steel with zero taper and exceptional surface finish, eliminating the need for secondary grinding.",
        status: "CUSTOM",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjVmy45Wdcg-47h-bK5z5RU9W0abt_yHTY3yiXMp3-6swNoq60WtALnMUTABQVTq71U7fJzCIdxrCl7G7EJxTIkSihb7FtFu2ZUlTQaRM_OLB5wPd8aL5NDPjyc8uKdcaPSzn7bkZ3H2-lGKVqMd50i8LuoUee1PXUb1AO3JfIjcSojclqCiqgnGyHxYFIsRv1V2vdwZDMyZjrSwSTusS2rVdlqfPSpiH5fT21CWvKgJculpd9Doy2uA",
        specsSummary: {
          "Power_Range": "12kW - 30kW",
          "Bed_Dimension": "8000 x 2500 mm",
          "Accel_Speed": "1.5G"
        },
        features: [
          "Ultra-high power anti-burn structural protection",
          "Segmented bed design for high-duty heat dissipation",
          "Direct-drive servo system with helical racks",
          "Carbon-fiber reinforced gantry structure"
        ],
        specifications: [
          { label: "Laser Source Power", value: "12000W - 30000W" },
          { label: "Working Table Size", value: "8000x2500mm / 12000x3000mm" },
          { label: "X/Y Axis Positioning Accuracy", value: "±0.05 mm" },
          { label: "X/Y Axis Reposition Accuracy", value: "±0.03 mm" },
          { label: "Max. Linkage Speed", value: "140 m/min" },
          { label: "Max. Acceleration", value: "1.5G" },
          { label: "Cutting Capacity", value: "Carbon Steel up to 80mm, Stainless up to 100mm" }
        ]
      }
    ]
  },
  {
    id: "cat_02",
    name: "CNC Plasma Cutting",
    slug: "cnc-plasma-cutting",
    icon: "precision_manufacturing",
    tagline: "Heavy-duty plasma cutting for thick structural and construction steel.",
    description: "Designed for massive structural components, shipyards, and heavy machinery parts. Our CNC Plasma systems utilize top-tier plasma torches and robust mechanical bases to cut materials up to 150mm thick with high accuracy and reduced bevel angles.",
    models: [
      {
        id: "PL-HD02",
        name: "ADK CNC Plasma HD Series",
        slug: "adk-plasma-hd02",
        tagline: "Heavy Duty Industrial Plasma Cutting Machine",
        description: "The HD Series is a workhorse for structural engineering and steel profiling. Incorporating high-definition plasma technology and integrated water tables, it delivers clean cuts with minimal slag and a highly reduced heat-affected zone.",
        status: "READY",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjVmy45Wdcg-47h-bK5z5RU9W0abt_yHTY3yiXMp3-6swNoq60WtALnMUTABQVTq71U7fJzCIdxrCl7G7EJxTIkSihb7FtFu2ZUlTQaRM_OLB5wPd8aL5NDPjyc8uKdcaPSzn7bkZ3H2-lGKVqMd50i8LuoUee1PXUb1AO3JfIjcSojclqCiqgnGyHxYFIsRv1V2vdwZDMyZjrSwSTusS2rVdlqfPSpiH5fT21CWvKgJculpd9Doy2uA",
        specsSummary: {
          "Source_Power": "130A - 400A",
          "Bevel_Angles": "±45 degrees",
          "Working_Bed": "6000 x 3000 mm"
        },
        features: [
          "5-Axis bevel cutting head for complex edge preparations",
          "Integrated water/downdraft smoke control table",
          "High-definition Hypertherm plasma source compatibility",
          "Automatic collision protection and height control"
        ],
        specifications: [
          { label: "Plasma Source Options", value: "Hypertherm HPR130XD / HPR260XD / HPR400XD" },
          { label: "Effective Cutting Area", value: "6000 x 3000 mm (Customizable up to 24000mm length)" },
          { label: "Bevel Range", value: "A, V, Y, X, K bevel angles up to ±45°" },
          { label: "Max Cutting Speed", value: "8000 mm/min" },
          { label: "Repeatability Accuracy", value: "±0.15 mm" },
          { label: "Controller System", value: "Industrial CNC Controller with built-in Nesting Software" }
        ]
      }
    ]
  },
  {
    id: "cat_03",
    name: "CNC Press Brake",
    slug: "cnc-press-brake",
    icon: "architecture",
    tagline: "Precision hydraulic press brakes for complex sheet metal bending.",
    description: "Achieve repeatable, highly precise bends on sheet metal of any length or thickness. Our CNC Press Brakes are equipped with advanced multi-axis backgauges, active crowning systems, and dynamic angle measurements to counter spring-back.",
    models: [
      {
        id: "PB-P04",
        name: "CNC Press Brake P-Series",
        slug: "cnc-press-brake-p-series",
        tagline: "Standard Multi-Axis CNC Bending Machine",
        description: "The CNC Press Brake P-Series offers a versatile solution for standard-to-advanced bending needs. Built with a rigid mono-block steel frame and featuring 4+1 to 8+1 axes of control, it handles everything from simple panels to complex multi-step profiles.",
        status: "READY",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB38iSnXjArEblknQSMqDim07fHM_dRbPA_IDg3F56CTqo_1-gIStXEPrBP8mfv2nMRyrvToNrmVE9lTbu-F9TV49IRWZr1W-4reIbGbN0NMWVBqT1d-El2A6SSRNFWgvX3p6cR2CGDx51KBQtsS_f7NeTVovS13SsaZdXLmw97rd2Zde1Vjnq3a30Jp35TVcSPD9Dcsso8cU90_aGh1X7qEfWUv2ot0IREjCb4_7U0FPboB8T80cCH_A",
        specsSummary: {
          "Press_Force": "40T - 800T",
          "Bending_Len": "6000 mm MAX",
          "Axis_Conf": "4+1 to 8+1"
        },
        features: [
          "Electro-hydraulic synchro control of Y1, Y2 ram positions",
          "Wila-style mechanical crowning system to eliminate bending error",
          "CNC-controlled X, R, Z1, Z2 backgauge axes",
          "Delem DA66T / DA69T 3D graphics controller"
        ],
        specifications: [
          { label: "Bending Force", value: "40 Ton to 800 Ton" },
          { label: "Bending Length", value: "1250 mm to 6000 mm" },
          { label: "Distance Between Housings", value: "1000 mm to 5100 mm" },
          { label: "Throat Depth", value: "400 mm to 600 mm" },
          { label: "Stroke Length", value: "200 mm to 400 mm" },
          { label: "Backgauge Travel Range", value: "X: 800mm, R: 250mm, Z1/Z2 auto control" },
          { label: "Safety System", value: "Laser safe optical guard block (DSP/LazerSafe)" }
        ]
      }
    ]
  },
  {
    id: "cat_04",
    name: "Fiber Laser Welding",
    slug: "fiber-laser-welding",
    icon: "flare",
    tagline: "Handheld and automated laser welding for ultra-clean, high-strength joints.",
    description: "Replaces traditional TIG and MIG welding with speeds up to 10x faster. Our handheld and robotic fiber laser welders create strong, aesthetically pleasing welds requiring virtually no post-weld cleanup or polishing.",
    models: [
      {
        id: "LW-H03",
        name: "ADK Handheld Laser Welder",
        slug: "adk-laser-welder-h03",
        tagline: "Handheld 3-in-1 Laser Welding, Cleaning, and Cutting System",
        description: "The ADK 3-in-1 welder is an extremely flexible workshop tool. With options for 1.5kW and 2.0kW, it can weld steel, stainless steel, aluminum, and copper. It features a quick-swap head for surface cleaning and sheet cutting tasks.",
        status: "IN_STOCK",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjVmy45Wdcg-47h-bK5z5RU9W0abt_yHTY3yiXMp3-6swNoq60WtALnMUTABQVTq71U7fJzCIdxrCl7G7EJxTIkSihb7FtFu2ZUlTQaRM_OLB5wPd8aL5NDPjyc8uKdcaPSzn7bkZ3H2-lGKVqMd50i8LuoUee1PXUb1AO3JfIjcSojclqCiqgnGyHxYFIsRv1V2vdwZDMyZjrSwSTusS2rVdlqfPSpiH5fT21CWvKgJculpd9Doy2uA",
        specsSummary: {
          "Laser_Power": "1.5kW / 2.0kW",
          "Welding_Speed": "0 - 120 mm/s",
          "Laser_Source": "Continuous Fiber"
        },
        features: [
          "Wobble welding gun with adjustable spot width (0 - 5mm)",
          "Integrated automatic wire feeder",
          "Advanced touch safety system - only fires on contact with metal",
          "Built-in parameter presets for stainless, carbon steel, and aluminum"
        ],
        specifications: [
          { label: "Output Power", value: "1500W / 2000W" },
          { label: "Laser Wavelength", value: "1080 nm" },
          { label: "Fiber Cable Length", value: "10 m standard (Option for 15m)" },
          { label: "Welding Speed Range", value: "0 - 120 mm/s" },
          { label: "Welding Gap Requirement", value: "≤ 1.2 mm" },
          { label: "Operating Ambient Humidity", value: "< 70% without condensation" },
          { label: "Power Input", value: "AC 220V Single Phase / 380V Three Phase" }
        ]
      }
    ]
  },
  {
    id: "cat_05",
    name: "PEB Machinery",
    slug: "peb-machinery",
    icon: "factory",
    tagline: "Turnkey equipment for fabricating Pre-Engineered Building steel components.",
    description: "Highly automated production machinery for H-beams, structural columns, and roof panels. Our PEB assembly lines increase yield and reduce production bottlenecks in large structural steel facilities.",
    models: [
      {
        id: "PEB-BM",
        name: "ADK Beam Assembly & Welding Machine",
        slug: "adk-peb-beam-welder",
        tagline: "Integrated H-Beam Assembly, Welding, and Straightening Line",
        description: "The H-Beam assembly line consolidates the three main steps of structural steel production: mechanical alignment, submerged arc welding (SAW), and flange straightening. It dramatically improves structural alignment tolerances.",
        status: "CUSTOM",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZQwmqr4e-fG8zkgbDfquMEOPCWLRUoP6ClGgI1WQgJlW0SHTY0227I52qRvFC6RWwpJ6xoOz829YKuUfp0PFKd__FOb3YIBzGLpansmaotqKkNCTWbqizLvncH6YikTAeNHHllRY7IHKG28WeX-O0_CphL7Sol08GlbuL_Q_aHiUz2kIpbubDQudMACXCo2NoUJo1R3XhjcGzPkGcRvGSnRz-8u8R3uTcT-UvO77WsywB2CGNWb84Oy1K7DeJrG-SvFo",
        specsSummary: {
          "Web_Height": "200 - 1500 mm",
          "Flange_Width": "150 - 800 mm",
          "Welding_Speed": "0.15 - 1.5 m/min"
        },
        features: [
          "Heavy duty hydraulic centering jaws",
          "Dual Submerged Arc Welding (SAW) torches for synchronous welding",
          "High power hydraulic straightening rollers for flange distortion",
          "Centralized hydraulic power packs and PLC screen control"
        ],
        specifications: [
          { label: "Web Height Range", value: "200 - 1500 mm" },
          { label: "Flange Width Range", value: "150 - 800 mm" },
          { label: "Workpiece Thickness", value: "Web: 6 - 32 mm, Flange: 6 - 40 mm" },
          { label: "Beam Length Capacity", value: "4000 - 15000 mm" },
          { label: "Welding Speed", value: "0.15 - 1.5 m/min (Inverter controlled)" },
          { label: "Flux Recovery System", value: "Automatic recovery pump & cyclone separator" }
        ]
      }
    ]
  },
  {
    id: "cat_06",
    name: "Shearing Machine",
    slug: "shearing-machine",
    icon: "architecture",
    tagline: "Hydraulic swing beam and guillotine shears for rapid plate preparation.",
    description: "Robust, heavy-cutting shears featuring adjustable blade gaps and CNC backgauges. Designed for maximum mechanical life and minimum distortion when processing structural steel plates.",
    models: [
      {
        id: "SH-H02",
        name: "ADK Hydraulic Guillotine Shear",
        slug: "adk-shearing-h02",
        tagline: "Hydraulic Plate Guillotine with Variable Rake Angle",
        description: "The ADK Guillotine Shear provides straight, twist-free cuts across varying sheet thicknesses. A variable rake angle adjustment feature reduces metal distortion and extends blade sharpness.",
        status: "READY",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB38iSnXjArEblknQSMqDim07fHM_dRbPA_IDg3F56CTqo_1-gIStXEPrBP8mfv2nMRyrvToNrmVE9lTbu-F9TV49IRWZr1W-4reIbGbN0NMWVBqT1d-El2A6SSRNFWgvX3p6cR2CGDx51KBQtsS_f7NeTVovS13SsaZdXLmw97rd2Zde1Vjnq3a30Jp35TVcSPD9Dcsso8cU90_aGh1X7qEfWUv2ot0IREjCb4_7U0FPboB8T80cCH_A",
        specsSummary: {
          "Max_Thickness": "6 mm - 25 mm",
          "Cutting_Length": "3200 mm - 6000 mm",
          "Rake_Angle": "0.5° - 3° Adjustable"
        },
        features: [
          "Variable blade gap adjustment according to sheet thickness",
          "High stroke rate with hydraulic accumulation support",
          "Hold-down cylinders with soft plastic pads to protect polished sheets",
          "Heavy duty ballscrew backgauge with 0.05mm positioning accuracy"
        ],
        specifications: [
          { label: "Max Cutting Thickness", value: "6 mm / 12 mm / 16 mm / 20 mm / 25 mm" },
          { label: "Max Cutting Length", value: "3200 mm / 4000 mm / 6000 mm" },
          { label: "Rake Angle", value: "0.5° to 3.0° customizable" },
          { label: "Strokes Per Minute", value: "8 - 18 strokes/min" },
          { label: "Backgauge Speed", value: "150 mm/s" },
          { label: "Power Output", value: "7.5 kW to 37 kW" }
        ]
      }
    ]
  },
  {
    id: "cat_07",
    name: "Panel Bender",
    slug: "panel-bender",
    icon: "architecture",
    tagline: "High-speed intelligent panel benders for automatic box-type profiles.",
    description: "Fully automated, servo-controlled panel bending centers. Complete bending loops on all four sides of a sheet occur without manual rotation, speeding up box and drawer fabrication by 300%.",
    models: [
      {
        id: "IB-I02",
        name: "Intelligent Bending Center",
        slug: "adk-panel-bender-i02",
        tagline: "Fully Automatic Servo Panel Bending Machine",
        description: "The ADK Intelligent Panel Bender Center utilizes state-of-the-art servo axes for automated component manipulation. An operator simply places the flat blank; the machine automatically measures, feeds, rotates, and bends complex cabinets in under a minute.",
        status: "CUSTOM",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZQwmqr4e-fG8zkgbDfquMEOPCWLRUoP6ClGgI1WQgJlW0SHTY0227I52qRvFC6RWwpJ6xoOz829YKuUfp0PFKd__FOb3YIBzGLpansmaotqKkNCTWbqizLvncH6YikTAeNHHllRY7IHKG28WeX-O0_CphL7Sol08GlbuL_Q_aHiUz2kIpbubDQudMACXCo2NoUJo1R3XhjcGzPkGcRvGSnRz-8u8R3uTcT-UvO77WsywB2CGNWb84Oy1K7DeJrG-SvFo",
        specsSummary: {
          "Cycle_Time": "0.2s / Bend",
          "Max_Radius": "250 mm",
          "Operation": "Fully Auto"
        },
        features: [
          "Universal bending blade - no tooling changes needed between bends",
          "Rotary manipulator with automatic sheet centering and alignment",
          "Built-in angle correction sensors to counter elastic springback",
          "Cloud-linked diagnostic and offline programming interface"
        ],
        specifications: [
          { label: "Bending Speed", value: "0.2 seconds per bend" },
          { label: "Max Sheet Size", value: "2000 x 2000 mm / 2500 x 1400 mm" },
          { label: "Min Sheet Size", value: "350 x 140 mm" },
          { label: "Max Bending Height", value: "200 mm / 250 mm" },
          { label: "Max Thickness Capacity", value: "Steel: 2.0 mm, Stainless: 1.5 mm, Alum: 2.5 mm" },
          { label: "Total Servo Axes", value: "15 Axes (All synchronized)" }
        ]
      }
    ]
  },
  {
    id: "cat_08",
    name: "Spares & Consumables",
    slug: "spares-consumables",
    icon: "precision_manufacturing",
    tagline: "High-grade components, optical elements, and nozzles for fiber lasers.",
    description: "Minimize down-time with premium replacement components. We stock certified protective windows, ceramic rings, focus nozzles, and filtration cartridges to keep your equipment running at peak accuracy.",
    models: [
      {
        id: "SP-Lenses",
        name: "Fiber Laser Protective Windows",
        slug: "adk-spares-protective-lenses",
        tagline: "High Threshold Fused Silica Laser Protective Lenses",
        description: "Made from premium imported quartz crystal, our protective windows withstand laser beams up to 30kW. AR coatings applied on both sides ensure maximum light transmission and minimal absorption.",
        status: "IN_STOCK",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjVmy45Wdcg-47h-bK5z5RU9W0abt_yHTY3yiXMp3-6swNoq60WtALnMUTABQVTq71U7fJzCIdxrCl7G7EJxTIkSihb7FtFu2ZUlTQaRM_OLB5wPd8aL5NDPjyc8uKdcaPSzn7bkZ3H2-lGKVqMd50i8LuoUee1PXUb1AO3JfIjcSojclqCiqgnGyHxYFIsRv1V2vdwZDMyZjrSwSTusS2rVdlqfPSpiH5fT21CWvKgJculpd9Doy2uA",
        specsSummary: {
          "Transmission": "> 99.9%",
          "Laser_Power": "1kW - 30kW",
          "Material": "Fused Silica"
        },
        features: [
          "Ultra-low absorption window body prevents thermal focus drift",
          "Dust-free cleanroom packaged for direct installation",
          "Coated with high-damage threshold antireflective thin films"
        ],
        specifications: [
          { label: "Material", value: "Imported Fused Silica (Corning / Heraeus)" },
          { label: "Diameter Options", value: "27.9mm / 30mm / 37mm / 50mm" },
          { label: "Thickness Options", value: "4.1mm / 5mm / 7mm" },
          { label: "Laser Power Support", value: "Up to 30000 Watts" },
          { label: "Wavelength Support", value: "1064 - 1080 nm" },
          { label: "Surface Quality", value: "10-5 Scratch-Dig" }
        ]
      }
    ]
  }
];

export const applications: IndustryApplication[] = [
  {
    id: "app_01",
    name: "Aerospace",
    slug: "aerospace",
    icon: "flight",
    tagline: "High-grade components with micro-tolerances for aircraft assemblies.",
    description: "Aerospace manufacturing demands the absolute highest levels of reliability and certification. Material thicknesses vary from thin ducting sheets to thick titanium structural components.",
    challenges: [
      "No-taper profiles for complex aluminum alloys",
      "Extremely tight material traceability and repeatability",
      "Thermal stress minimization in heat-treated components"
    ],
    solutions: [
      "Use of dynamic gantry lasers with autofocus sensors that calibrate heights based on the sheet topology",
      "Closed-loop servo-controlled press brakes that maintain bend tolerances within 0.05 degrees"
    ],
    recommendedMachines: ["adk-fl-x01", "cnc-press-brake-p-series"]
  },
  {
    id: "app_02",
    name: "Agriculture",
    slug: "agriculture",
    icon: "agriculture",
    tagline: "Tough structural components for harvesting machinery and tractors.",
    description: "Agricultural implements are exposed to high vibrations and friction. Bending and cutting must accommodate high-tensile steels and thick carbon plating.",
    challenges: [
      "Cracking at bend zones of high-yield-strength plates",
      "Heavy rust and oxidation scale on storage-yard sheets",
      "Consistent weld joints on thick-walled structures"
    ],
    solutions: [
      "Guillotine shearing with variable rake and blade gap adjusters to prepare clean plate edges",
      "High-definition plasma cutting on dedicated water tables to control distortion on scaled plates"
    ],
    recommendedMachines: ["adk-plasma-hd02", "adk-shearing-h02"]
  },
  {
    id: "app_03",
    name: "Automobile",
    slug: "automobile",
    icon: "directions_car",
    tagline: "High-throughput sheet fabrication for chassis and interior panels.",
    description: "Automobile parts manufacturing requires extreme repeatability and integration into fully automated robotic assemblies.",
    challenges: [
      "Short cycle times for complex panel forming",
      "Integration with robotic welding lines",
      "High surface finish requirements for body parts"
    ],
    solutions: [
      "Servo-driven panel benders that bend multiple profiles in under 20 seconds",
      "Laser cutting lines with integrated shuttle tables for non-stop feeding"
    ],
    recommendedMachines: ["adk-panel-bender-i02", "adk-fl-x01"]
  },
  {
    id: "app_04",
    name: "Chemical Plant",
    slug: "chemical-plant",
    icon: "science",
    tagline: "Stainless steel tank fabrication and pipe profiling for corrosive environments.",
    description: "Vessels and heat exchangers for chemical processing must withstand high temperatures and acidic attacks, necessitating thick stainless steel and specialized alloys.",
    challenges: [
      "Complex weld bevel preparations on heavy curved plates",
      "Contamination-free sheet metal profiling (specifically iron contamination in stainless steel)",
      "High quality welding with zero micro-cracks or voids"
    ],
    solutions: [
      "5-axis beveling plasma heads to generate V/K bevel preparation profiles",
      "High-density fiber laser welding for robust joints without structural embrittlement"
    ],
    recommendedMachines: ["adk-plasma-hd02", "adk-laser-welder-h03"]
  },
  {
    id: "app_05",
    name: "Control Panel",
    slug: "control-panel",
    icon: "settings",
    tagline: "Precision enclosures, junction boxes, and cabinet structures.",
    description: "Electrical enclosures require IP-rated dust and water protection, making accurate side-wall dimensions and door flanges critical.",
    challenges: [
      "Multi-bend profiles requiring frequent tooling adjustments on traditional press brakes",
      "Handling scratch-sensitive galvanized and pre-painted sheets",
      "Consistent door flange alignments"
    ],
    solutions: [
      "Universal bending tools on panel benders that form box shapes automatically",
      "Autofocus lasers that cut ventilation patterns and cabinet holes at high speeds"
    ],
    recommendedMachines: ["adk-panel-bender-i02", "adk-fl-x01"]
  },
  {
    id: "app_06",
    name: "Elevators",
    slug: "elevators",
    icon: "swap_vert",
    tagline: "Precision cabin panel bending, bracket structures, and guide rails.",
    description: "Elevator cabin doors and panels demand cosmetically perfect finishes and smooth, soundless movements, meaning high dimensional tolerances are vital.",
    challenges: [
      "Visible press brake tooling marks on mirror-finish stainless steel panels",
      "Tight parallel door flange requirements",
      "High-volume small brackets manufacturing"
    ],
    solutions: [
      "Intelligent Panel Bending Center with soft-touch clamps that eliminate mechanical scratches",
      "Fiber Laser Cutting with protective nitrogen assist gases to keep edges bright and scale-free"
    ],
    recommendedMachines: ["adk-panel-bender-i02", "adk-fl-x01"]
  },
  {
    id: "app_07",
    name: "Food Machinery",
    slug: "food-machinery",
    icon: "restaurant",
    tagline: "Sanitary stainless steel containers and processing equipment.",
    description: "Food grade steel requires weld regions to be completely smooth and pit-free to prevent bacterial accumulation.",
    challenges: [
      "Time-consuming post-weld grinding and polishing on stainless steel joints",
      "Intricate slicing patterns for hopper and feeder systems",
      "High reflectivity processing"
    ],
    solutions: [
      "Fiber Laser Welders that make narrow, clean weld lines without burning adjacent panels",
      "High-transmission fiber optics that cut pure copper, brass, and SS sheets without back-reflection damage"
    ],
    recommendedMachines: ["adk-laser-welder-h03", "adk-fl-x01"]
  },
  {
    id: "app_08",
    name: "Heavy Fabrication",
    slug: "heavy-fabrication",
    icon: "handyman",
    tagline: "Thick plate processing, heavy duty weld beveling, and massive beams.",
    description: "Heavy engineering plants assemble railway bridges, cranes, and earthmovers where reliability of structural welds is a matter of safety.",
    challenges: [
      "Beveling and cutting plates up to 50mm thick",
      "High-power structural welding with thick wires",
      "Material handling and alignment of multi-ton steel sections"
    ],
    solutions: [
      "High-tonnage CNC Press Brakes with hydraulic crowning to prevent center-bend decay",
      "Submerged Arc Welded (SAW) H-beam lines to automatically construct structural pillars"
    ],
    recommendedMachines: ["cnc-press-brake-p-series", "adk-peb-beam-welder"]
  },
  {
    id: "app_09",
    name: "Hydraulic Machinery",
    slug: "hydraulic-machinery",
    icon: "plumbing",
    tagline: "Base frames, oil tanks, and manifold bracket fabrications.",
    description: "Base frames for hydraulic systems require rigid structures to handle mechanical torque and support heavy hydraulic pumps.",
    challenges: [
      "Weld joint leakages in high pressure hydraulic tanks",
      "Precise alignment of pump mounting holes on structural bases",
      "Thick structural frame profile cutting"
    ],
    solutions: [
      "Direct CNC profiling of mounting holes using high gantry lasers",
      "Precision bending of tank sidewalls to reduce overall weld seams"
    ],
    recommendedMachines: ["adk-fl-x01", "cnc-press-brake-p-series"]
  },
  {
    id: "app_10",
    name: "Job Work",
    slug: "job-work",
    icon: "work",
    tagline: "Flexible job-shop systems designed to swap materials quickly.",
    description: "Job shops face changing profiles: thin aluminum in the morning, 20mm structural plates in the afternoon. Flexibility is their survival metric.",
    challenges: [
      "Frequent setup and tear-down times",
      "Diverse material stock management",
      "Quick nesting generation to maximize sheet yield"
    ],
    solutions: [
      "Fiber laser systems with automatic nozzle changers and shuttle beds",
      "User-friendly controller screens with built-in auto-nesting databases"
    ],
    recommendedMachines: ["adk-fl-x01", "cnc-press-brake-p-series"]
  },
  {
    id: "app_11",
    name: "Material Handling",
    slug: "material-handling",
    icon: "conveyor_belt",
    tagline: "Conveyor frames, rack beams, and automated warehousing chassis.",
    description: "Warehousing systems use structural channels, sheets, and tubes assembled in large quantities to sustain static cargo loads.",
    challenges: [
      "High-volume repetitive cuts of structural channels",
      "Consistent hole pitches along long structural profiles",
      "Precision structural corner welds"
    ],
    solutions: [
      "Fiber laser cutting with custom rotary pipe fixtures",
      "High rake angle shearing machines to chop structural bars cleanly"
    ],
    recommendedMachines: ["adk-fl-x01", "adk-shearing-h02"]
  },
  {
    id: "app_12",
    name: "PEB",
    slug: "peb",
    icon: "domain",
    tagline: "High-yield fabrication machinery for Pre-Engineered Building components.",
    description: "Pre-Engineered Building columns, beams, purlins, and wall panels must be fabricated quickly to meet project delivery schedules.",
    challenges: [
      "Production bottleneck in building structural H-beams manually",
      "Correcting flange distortion post-welding",
      "Fast processing of structural plates for joist connections"
    ],
    solutions: [
      "Integrated Beam Assembly, Welding, and Straightening lines that run continuously",
      "CNC Plasma Bevel cutters to prepare splice plate connections"
    ],
    recommendedMachines: ["adk-peb-beam-welder", "adk-plasma-hd02"]
  },
  {
    id: "app_13",
    name: "Profile Cutting",
    slug: "profile-cutting",
    icon: "draw",
    tagline: "High-precision shapes from structural steel plates.",
    description: "Creating highly customized steel shapes, gear profiles, and connection rings from plates requires minimal heat-affected zones.",
    challenges: [
      "Dross and slag build-up on underside profiles",
      "Hardened cut edges that degrade subsequent drilling tools",
      "Beveling error on thick cutouts"
    ],
    solutions: [
      "Fine-focus fiber laser cutting on gantry beds",
      "High-definition plasma systems with gas console settings that regulate nitrogen and oxygen proportions"
    ],
    recommendedMachines: ["adk-fl-x01", "adk-plasma-hd02"]
  },
  {
    id: "app_14",
    name: "Road Construction",
    slug: "road-construction",
    icon: "construction",
    tagline: "Asphalt mixers, heavy rollers, and machinery frameworks.",
    description: "Roadwork equipment is built to handle constant shock, requiring highly robust steel profiles and high-integrity weld fillets.",
    challenges: [
      "Processing thick wear-resistant steels (e.g. Hardox plate)",
      "High force requirements to bend heavy structural wear plates",
      "Precision bevel joints for massive cylinders"
    ],
    solutions: [
      "Ultra-high power fiber lasers (20kW+) capable of cutting high-hard alloys",
      "Tonnage-boosted Press Brakes with specialized hard-insert tooling"
    ],
    recommendedMachines: ["adk-fl-ultra", "cnc-press-brake-p-series"]
  },
  {
    id: "app_15",
    name: "Steel Furniture",
    slug: "steel-furniture",
    icon: "chair",
    tagline: "Office cabinets, lockers, shelving units, and table support rails.",
    description: "Furniture items demand light weight, structural stability, and a clean, cosmetic surface for paint or chrome plating.",
    challenges: [
      "Welding thin-gauge sheets (0.8 - 1.2mm) without burn-through or buckling",
      "High volume folding setups",
      "Clean edges without micro-burrs"
    ],
    solutions: [
      "Intelligent Panel Benders to fold cabinets on all 4 sides automatically",
      "Laser welding systems running with wire feeding to create joint fillets"
    ],
    recommendedMachines: ["adk-panel-bender-i02", "adk-laser-welder-h03"]
  },
  {
    id: "app_16",
    name: "Steel & Metal Work",
    slug: "steel-metal-work",
    icon: "hardware",
    tagline: "Grills, structural stairs, custom architectural panels.",
    description: "Architectural fabrication integrates customized, complex patterns on copper, brass, stainless steel, and iron.",
    challenges: [
      "Intricate decorative cut designs without thermal warp",
      "Cutting reflective yellow metals without retro-reflection damage to laser modules",
      "Short turnaround for customized architect jobs"
    ],
    solutions: [
      "High-speed fiber lasers equipped with back-reflection optical isolators",
      "Integrated software converters that accept CAD DXF profiles directly at the machine screen"
    ],
    recommendedMachines: ["adk-fl-x01", "adk-laser-welder-h03"]
  },
  {
    id: "app_17",
    name: "Tank Manufacturing",
    slug: "tank-manufacturing",
    icon: "reorder",
    tagline: "Pressure vessels, chemical silos, storage tanks, and boilers.",
    description: "Cylindrical storage vessels are subjected to internal pressures, requiring high precision in plate rolling and longitudinal seams.",
    challenges: [
      "Welding long horizontal plate joints uniformly",
      "Aligning plate edges before welding without gap variances",
      "Perfect circle rolling and edge preparation"
    ],
    solutions: [
      "5-axis CNC plasma bevel heads to cut circular port flanges and prepare welding bevels",
      "Continuous H-Beam SAW style tracking system adapted for cylindrical tank rotators"
    ],
    recommendedMachines: ["adk-plasma-hd02", "adk-peb-beam-welder"]
  },
  {
    id: "app_18",
    name: "Textile Machinery",
    slug: "textile-machinery",
    icon: "texture",
    tagline: "Precision spinning frames, loom brackets, and carding machine parts.",
    description: "Loom and carding structures are high-speed moving mechanisms, where even small weight or balance variances produce damaging vibrations.",
    challenges: [
      "Massive component counts with multi-axis bracket geometry",
      "Surface finish must be mirror-smooth to avoid catching silk/cotton threads",
      "Weight optimization via skeletal sheet structures"
    ],
    solutions: [
      "High-speed fiber laser cutting to create light-weight structural cutouts",
      "Multi-axis CNC Press Brakes to build complex bracket geometry without assembly seams"
    ],
    recommendedMachines: ["adk-fl-x01", "cnc-press-brake-p-series"]
  },
  {
    id: "app_19",
    name: "Tower Manufacturing",
    slug: "tower-manufacturing",
    icon: "radar",
    tagline: "Telecommunication pylons, transmission poles, and structural frames.",
    description: "Wind, electrical transmission, and telecommunication masts require heavy structural angles, thick plate gussets, and high structural safety factors.",
    challenges: [
      "Processing thick angle iron and structural steel profiles",
      "Accurate flange plate cutting and multi-hole punching in structural steel plates",
      "High volume assembly alignment"
    ],
    solutions: [
      "CNC Plasma profiling for thick connector plates",
      "Heavy duty hydraulic shearing machines to chop angle bars without edge deformation"
    ],
    recommendedMachines: ["adk-plasma-hd02", "adk-shearing-h02"]
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "cs_01",
    client: "Sterling Infrastructures",
    industry: "Pre-Engineered Buildings (PEB)",
    title: "Overcoming PEB Bottlenecks with Automated H-Beam Assembly",
    challenge: "Sterling was manually fabricating H-beams, which limited output to 12 beams per day. Flange distortions were common, requiring lengthy manual torch-straightening.",
    solution: "Installed the ADK Integrated H-Beam Assembly & Welding Line, combining assembly, submerged arc welding, and hydraulic straightening into a single system.",
    result: "Production capacity surged to 48 beams per day. Flange alignment defects were completely eliminated, reducing assembly rework to 0%.",
    metrics: [
      { label: "Production Boost", value: "400%" },
      { label: "Rework Cost", value: "0%" },
      { label: "Setup Time", value: "-80%" }
    ]
  },
  {
    id: "cs_02",
    client: "Precision Cabinets Ltd.",
    industry: "Control Panel & Enclosures",
    title: "Transitioning to Intelligent Bending for Electrical Cabinets",
    challenge: "Using conventional press brakes, operators spent significant time rotating heavy cabinets and tweaking backgauge axes. This caused long cycle times and operator fatigue.",
    solution: "Deployed the ADK Intelligent Panel Bender Center (IB-I02) featuring full servo automatic rotation and a universal bending tool.",
    result: "Average box bending cycle time dropped from 3.5 minutes to 28 seconds. Scratch rates on pre-painted sheets dropped to zero, and one operator now manages the entire workflow.",
    metrics: [
      { label: "Cycle Time Drop", value: "87%" },
      { label: "Operator Count", value: "1 (was 3)" },
      { label: "Component Yield", value: "99.8%" }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t_01",
    name: "Rajesh Patel",
    company: "Apex Metal Crafters",
    role: "Managing Director",
    content: "Our ADK Fiber Laser has been running 20 hours a day for two years without a single laser module fault. The speed is phenomenal, and the local service support is highly responsive.",
    rating: 5
  },
  {
    id: "t_02",
    name: "Vikram Shah",
    company: "Mega Heavy Engineering",
    role: "VP of Operations",
    content: "The custom PEB welding line ADK designed and installed transformed our workshop layout. We eliminated structural bottlenecks and now meet tight construction schedules.",
    rating: 5
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "bp_01",
    title: "Understanding Fiber Laser Power Requirements for Sheet Metal",
    slug: "laser-power-sheet-metal-guide",
    summary: "Selecting the correct laser power is critical for balancing machinery budget with production speed. Read our technical breakdown on choosing between 3kW, 6kW, and 12kW.",
    content: "When purchasing a fiber laser cutting machine, one of the most critical decisions is specifying the laser power. With options ranging from 1kW to over 30kW, making the wrong choice can lead to bottlenecks or unnecessary capital expenditure.\n\n### The Relationship Between Power and Speed\nWhile a 3kW laser can cut stainless steel up to 10mm thick, a 12kW source does so at roughly four times the speed. If your workshop primarily processes 2mm to 5mm sheets in high volumes, a 6kW laser represents the efficiency sweet spot, offering rapid cutting speeds using nitrogen or compressed air assist gas.\n\n### Assist Gas Selection\nThe choice of laser power also dictates your assist gas consumption. High-power lasers (12kW+) cut thick plates efficiently using oxygen, while nitrogen is the preferred choice for thin-to-medium sheets to achieve a clean, oxide-free edge. In recent years, high-pressure compressed air has emerged as a cost-effective alternative for carbon and stainless steels up to 8mm, provided the laser power is sufficient to melt the material rapidly.\n\n### Summary\n- **1kW - 3kW**: Ideal for thin sheet profiling, signs, and light brackets.\n- **6kW - 12kW**: The sweet spot for medium-scale job work and structural brackets.\n- **12kW+**: Built for heavy engineering, thick plate profiling, and high-volume round-the-clock operations.",
    date: "July 8, 2026",
    readTime: "5 min read",
    author: "Technical Team ADK"
  },
  {
    id: "bp_02",
    title: "Press Brake vs. Panel Bender: Choosing the Right Bending Tech",
    slug: "press-brake-vs-panel-bender",
    summary: "Traditional press brakes are versatile, but automated panel benders excel at cabinet geometries. This article compares setup times, precision, and production yields.",
    content: "Bending sheet metal represents a major manufacturing step. While the hydraulic press brake has been the industry standard for decades, automated panel benders are increasingly adopted in modern smart factories. Here is how they compare.\n\n### Setup Times and Versatility\nA traditional press brake requires changing dies and punch blocks whenever shifting between material gauges or bend radii. In contrast, a panel bender utilizes a universal bending blade that adjusts its stroke to form varying angles, bends, and radii without tooling changes. If your product lineup consists of diverse, customized brackets, the press brake remains superior due to its vertical clearance. However, for box-shaped geometries like doors, cabinets, and trays, the panel bender eliminates set-up time completely.\n\n### Component Handling\nOn a press brake, the operator must manually lift and support the sheet as it rotates upwards during a bend. This limit becomes physically demanding for larger sheets (e.g. 2-meter panels) and can cause safety hazards or sheet buckling. An automatic panel bender clamps the sheet flat on a table; the manipulator rotates it, and the bending blades swing up and down to form the flanges. This hands-free operation keeps operators safe and prevents component damage.\n\n### Comparison Table\n- **Press Brake**: High vertical versatility, lower capital cost, requires manual tool setup.\n- **Panel Bender**: 3x to 5x faster cycle times for boxes/cabinets, zero tooling changes, automatic manipulation, higher initial investment.",
    date: "July 2, 2026",
    readTime: "7 min read",
    author: "Engineering Dept ADK"
  }
];

export const faqs: FaqItem[] = [
  {
    question: "What is the typical lead time for an ADK Fiber Laser machine?",
    answer: "For standard bed sizes and power configurations (such as the ADK Fiber Laser X Series 3kW or 6kW), our typical ex-factory delivery time is 45 to 60 days. Customized sizes or ultra-high-power units (12kW+) require 75 to 90 days for gantry assembly and source testing."
  },
  {
    question: "Do you provide on-site installation and operator training?",
    answer: "Yes, every ADK machine purchase includes on-site mechanical installation, optical calibration, and a comprehensive 5-day training program for your operators. We cover safety protocols, parameter tuning for varying materials, nesting software usage, and routine preventive maintenance."
  },
  {
    question: "How is after-sales service and spare parts support managed?",
    answer: "We operate 8 service hubs globally. We guarantee on-site engineer deployment within 24 hours of a critical issue report. Furthermore, we maintain a robust inventory of common consumables (protective windows, nozzles, ceramics, gas adapters) at our hubs, ready for immediate dispatch."
  },
  {
    question: "Can your panel benders handle pre-painted or galvanized sheets without scratching?",
    answer: "Absolutely. Our Intelligent Panel Bending Centers are equipped with polyurethane holding clamps and a synchronized sheet feeding table. Since the sheet is held firmly and the bending blades swing rather than slide against the surface, there is zero cosmetic scraping, making it ideal for finished electrical cabinets."
  }
];

export const careerPositions: CareerPosition[] = [
  {
    id: "job_01",
    title: "Field Service Engineer (CNC / Laser)",
    department: "After-Sales Support",
    location: "Ahmedabad, Gujarat",
    experience: "3 - 5 Years",
    description: "We are seeking a proactive Field Service Engineer to oversee the installation, commissioning, and diagnostic repair of our fiber laser cutters and CNC press brakes at customer sites.",
    requirements: [
      "Diploma or Bachelor's degree in Electrical/Mechanical/Mechatronics engineering",
      "Hands-on experience with servo systems, hydraulic pumps, and gantry alignments",
      "Familiarity with laser cutting parameter tuning and CNC controllers (Delem, Cybelec, CypCut)",
      "Willingness to travel frequently across regional industrial clusters"
    ]
  },
  {
    id: "job_02",
    title: "CNC Controls Software Engineer",
    department: "Research & Development",
    location: "Ahmedabad, Gujarat",
    experience: "4 - 8 Years",
    description: "Join our R&D group to develop and optimize automated motion algorithms, kinematic controllers, and automatic nesting integration for our next-generation intelligent panel benders.",
    requirements: [
      "Strong coding skills in C++/C# and PLC programming (Beckhoff, Siemens, or Omron)",
      "Understanding of multi-axis kinematics and coordinate transformations",
      "Experience with EtherCAT protocols and servo parameter optimizations",
      "Knowledge of CAD/CAM geometry parsers (DXF/G-code compilation)"
    ]
  }
];

export const newsEvents: NewsEvent[] = [
  {
    id: "ne_01",
    title: "Exhibiting at IMTEX 2026",
    date: "August 20 - 26, 2026",
    location: "BIEC, Bengaluru",
    type: "TRADE_FAIR",
    description: "We are demonstrating our new 12kW Fiber Laser X-Series with automatic gantry loading and the Intelligent Panel Bender IB-I02 in Hall 3, Booth B104. Join us for live demonstration sessions."
  },
  {
    id: "ne_02",
    title: "Launch of 30kW Ultra Power Gantry Laser",
    date: "June 15, 2026",
    type: "LAUNCH",
    description: "We have officially launched the Ultra Series 30,000 Watt fiber laser cutting system, engineered to cut heavy plates up to 80mm with nitrogen and compressed air."
  }
];
