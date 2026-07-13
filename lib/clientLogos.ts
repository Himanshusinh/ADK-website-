import { clientLogoPath } from "./media";

export interface ClientLogo {
  id: string;
  name: string;
  slug: string;
  logo: string;
  /** Public source URL for audit (optional) */
  logoSource?: string;
}

/** Client logos scraped from https://www.adkeng.com/client.php (order preserved). */
const CLIENT_LOGO_ENTRIES: { file: string; name: string; slug: string }[] = [
  { file: "ace.jpg", name: "Ace", slug: "ace" },
  { file: "af.jpg", name: "AF", slug: "af" },
  { file: "ambica-thepress.jpg", name: "Ambica Thepress", slug: "ambica-thepress" },
  { file: "asrech.jpg", name: "Asrech", slug: "asrech" },
  { file: "atlantis.jpg", name: "Atlantis", slug: "atlantis" },
  { file: "bajaj-steel.jpg", name: "Bajaj Steel Industries", slug: "bajaj-steel" },
  { file: "bharat-automotive.jpg", name: "Bharat Automotive", slug: "bharat-automotive" },
  { file: "bhoomi-eng.jpg", name: "Bhoomi Engineering", slug: "bhoomi-eng" },
  { file: "bramhanee.jpg", name: "Bramhanee", slug: "bramhanee" },
  { file: "castomech.jpg", name: "Cast Mech Technology", slug: "castomech" },
  { file: "chicago-blower.jpg", name: "Chicago Blower", slug: "chicago-blower" },
  { file: "choice.jpg", name: "Choice", slug: "choice" },
  { file: "columbia.jpg", name: "Columbia", slug: "columbia" },
  { file: "digvijay.jpg", name: "Digvijay Engineers", slug: "digvijay" },
  { file: "endeavour-intelligent.jpg", name: "Endeavour Intelligent", slug: "endeavour-intelligent" },
  { file: "energy-mission.jpg", name: "Energy Mission", slug: "energy-mission" },
  { file: "gec.jpg", name: "GEC", slug: "gec" },
  { file: "gpd.jpg", name: "GPD", slug: "gpd" },
  { file: "impress-eng.jpg", name: "Impress Engineers", slug: "impress-eng" },
  { file: "isro.jpg", name: "ISRO (Indian Space Research Organisation)", slug: "isro" },
  { file: "jk.jpg", name: "J.K. Foundry", slug: "jk" },
  { file: "laxmi.jpg", name: "Laxmi", slug: "laxmi" },
  { file: "m-k-&-sons.jpg", name: "M K & Sons", slug: "m-k-sons" },
  { file: "manish-agro.jpg", name: "Manish Agro", slug: "manish-agro" },
  { file: "mech-fab.jpg", name: "Mech Fab", slug: "mech-fab" },
  { file: "metbuild.jpg", name: "MetBuild", slug: "metbuild" },
  { file: "navyug-industries.jpg", name: "Navyug Industries", slug: "navyug-industries" },
  { file: "new-fab-eng.jpg", name: "New Fab Engineering", slug: "new-fab-eng" },
  { file: "new-laxmi.jpg", name: "New Laxmi", slug: "new-laxmi" },
  { file: "nfe.jpg", name: "NFE", slug: "nfe" },
  { file: "onkar-engg.jpg", name: "Onkar Engineering", slug: "onkar-engg" },
  { file: "pe.jpg", name: "PE", slug: "pe" },
  { file: "power-high-engineers.jpg", name: "Power High Engineers", slug: "power-high-engineers" },
  { file: "rainbow-art.jpg", name: "Rainbow Art", slug: "rainbow-art" },
  { file: "ri.jpg", name: "RI", slug: "ri" },
  { file: "shilp-logo.jpg", name: "Shilp", slug: "shilp" },
  { file: "sibipl.jpg", name: "Sibipl", slug: "sibipl" },
  { file: "slidewell.jpg", name: "Slidewell", slug: "slidewell" },
  { file: "swastik.jpg", name: "Swastik", slug: "swastik" },
  { file: "swathi-engineers.jpg", name: "Swathi Engineers", slug: "swathi-engineers" },
  { file: "synergy.jpg", name: "Synergy", slug: "synergy" },
  { file: "techflow.jpg", name: "Techflow", slug: "techflow" },
  { file: "thermochem.jpg", name: "Thermochem", slug: "thermochem" },
  { file: "trimech.jpg", name: "Trimech", slug: "trimech" },
  { file: "tripti.jpg", name: "Tripti", slug: "tripti" },
  { file: "vasundhra.jpg", name: "Vasundhra", slug: "vasundhra" },
  { file: "veg.jpg", name: "VEG", slug: "veg" },
  { file: "vertex.jpg", name: "Vertex", slug: "vertex" },
  { file: "visa electrofab.jpg", name: "Visa Electrofab", slug: "visa-electrofab" },
  { file: "waken.jpg", name: "Waken", slug: "waken" },
];

export const clientLogos: ClientLogo[] = CLIENT_LOGO_ENTRIES.map((entry, index) => ({
  id: `cl_${String(index + 1).padStart(2, "0")}`,
  name: entry.name,
  slug: entry.slug,
  logo: clientLogoPath(entry.file),
}));

const marqueeSplit = Math.ceil(clientLogos.length / 2);

export const clientMarqueeRowA = clientLogos.slice(0, marqueeSplit);
export const clientMarqueeRowB = clientLogos.slice(marqueeSplit);
