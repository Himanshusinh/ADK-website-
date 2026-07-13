import { branches, categories, companyInfo, contactDepartments, faqs } from "@/lib/data";

export const TYPING_DELAY_MS = 300;

export const QUICK_CHIPS = [
  { id: "laser", label: "Fiber Laser", message: "Tell me about fiber laser cutting machines" },
  { id: "quote", label: "Get Quote", action: "enquiry" as const },
  { id: "service", label: "Service", message: "How do I contact service and support?" },
  { id: "branches", label: "Branches", message: "Where are your branch offices?" },
];

const GREETING_PATTERN =
  /^(hi|hello|hey|help|start|good\s*(morning|afternoon|evening)|namaste)\b/i;

function normalize(text: string): string {
  return text.toLowerCase().trim();
}

export function getWelcomeMessage(): string {
  return `Hello!

I can help you with:

• Product Selection
• Machine Comparison
• Service & Installation
• Spare Parts
• Quotations

How can I help today?`;
}

function matchFaq(message: string): string | null {
  const words = message.split(/\W+/).filter((w) => w.length > 4);
  for (const faq of faqs) {
    const questionWords = faq.question
      .toLowerCase()
      .split(/\W+/)
      .filter((w) => w.length > 4);
    if (words.some((w) => questionWords.some((qw) => qw.includes(w) || w.includes(qw)))) {
      return faq.answer;
    }
  }
  return null;
}

function matchCategory(message: string): string | null {
  const categoryKeywords: { slug: string; terms: string[] }[] = [
    { slug: "fiber-laser-cutting", terms: ["fiber laser", "laser cutting", "laser machine", "laser"] },
    { slug: "cnc-plasma-cutting", terms: ["plasma", "hypertherm"] },
    { slug: "cnc-press-brake", terms: ["press brake", "nadkpress", "bending", "brake"] },
    { slug: "fiber-laser-welding", terms: ["welding", "welder", "weld"] },
    { slug: "peb-machinery", terms: ["peb", "pre-engineered", "structural steel"] },
    { slug: "panel-bender", terms: ["panel bender", "panel bending"] },
  ];

  for (const { slug, terms } of categoryKeywords) {
    if (terms.some((term) => message.includes(term))) {
      const cat = categories.find((c) => c.slug === slug);
      if (!cat) continue;
      const modelList = cat.models
        .slice(0, 3)
        .map((m) => `• ${m.name}`)
        .join("\n");
      return `**${cat.name}**\n${cat.tagline}\n\n${cat.description}\n\nKey models:\n${modelList}\n\nBrowse full catalogue: /products/${cat.slug}`;
    }
  }
  return null;
}

export function getBotReply(message: string): string {
  const m = normalize(message);

  if (!m) {
    return getWelcomeMessage();
  }

  if (GREETING_PATTERN.test(m) || m === "help" || m.includes("what can you")) {
    return getWelcomeMessage();
  }

  if (
    m.includes("quote") ||
    m.includes("price") ||
    m.includes("pricing") ||
    m.includes("enquiry") ||
    m.includes("inquiry") ||
    m.includes("cost")
  ) {
    const sales = contactDepartments[0];
    return `For a custom machinery quote, share your material specs, thickness range, and production volume. Use **Get quote** in the chat or our enquiry form — our sales team responds within 6 business hours.

**Sales:** ${sales.emails[0]}
**Phone:** ${sales.phones.join(" / ")}`;
  }

  if (
    m.includes("contact") ||
    m.includes("phone") ||
    m.includes("email") ||
    m.includes("call") ||
    m.includes("reach")
  ) {
    const sales = contactDepartments[0];
    return `**Contact ADK**

**Sales:** ${sales.phones.join(" / ")}
${sales.emails.join(" / ")}

**General:** ${companyInfo.generalPhones.join(" / ")}
${companyInfo.generalEmails.join(" / ")}`;
  }

  if (
    m.includes("branch") ||
    m.includes("office") ||
    m.includes("location") ||
    m.includes("where are you") ||
    m.includes("branches")
  ) {
    return `ADK branch offices: ${branches.map((b) => b.city).join(", ")}.

**Corporate:** ${companyInfo.corporateAddress}
**Works:** ${companyInfo.worksAddress}`;
  }

  if (
    m.includes("service") ||
    m.includes("support") ||
    m.includes("spare") ||
    m.includes("repair") ||
    m.includes("maintenance") ||
    m.includes("after-sales") ||
    m.includes("installation") ||
    m.includes("training")
  ) {
    const service = contactDepartments[1];
    const spares = contactDepartments[2];
    const faqAnswer = matchFaq(m);
    if (faqAnswer) return faqAnswer;
    return `**After-Sales & Service**
${service.phones.join(" / ")}
${service.emails.join(", ")}

**Spares & Consumables**
${spares.phones.join(" / ")}
${spares.emails.join(", ")}`;
  }

  const faqAnswer = matchFaq(m);
  if (faqAnswer) return faqAnswer;

  const categoryAnswer = matchCategory(m);
  if (categoryAnswer) return categoryAnswer;

  return `I'm not sure about that in demo mode. Try asking about our product lines, service support, branch offices, or request a quote.

**Direct assistance:** inquiry1@adkeng.com | +91 63526 44186 (WhatsApp available below).`;
}
