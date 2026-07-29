import type { Metadata } from "next";
import Script from "next/script";
import { Bebas_Neue, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ADK_LOGO_URL } from "@/lib/media";
import EnquiryModal from "@/components/EnquiryModal";
import { EnquiryProvider } from "@/components/EnquiryContext";
import FloatingContactStack from "@/components/FloatingContactStack";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";
import { companyInfo } from "@/lib/data";

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('adk-theme');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  } catch (e) {}
})();
`;

const fontDisplay = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--adk-font-display",
});

const fontUi = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--adk-font-ui",
});

const fontBody = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--adk-font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(companyInfo.website),
  title: {
    default: "ADK Engineering & Solutions | Fiber Laser, CNC Plasma & Press Brake",
    template: "%s | ADK Engineering & Solutions",
  },
  description:
    "ADK Engineering & Solutions — India's trusted manufacturer of fiber laser cutting machines (up to 60KW), CNC plasma cutters, NADKpress press brakes, panel benders, PEB machinery, and laser welders. 750+ installations, 8 branch offices.",
  keywords: [
    "Fiber Laser Cutting Machine India",
    "CNC Plasma Cutting Machine",
    "CNC Press Brake Ahmedabad",
    "NADKpress Press Brake",
    "Panel Bender Machine",
    "PEB Machinery",
    "Fiber Laser Welding Machine",
    "ADK Engineering",
    "Sheet Metal Machinery Gujarat",
    "Industrial Laser Cutter 30KW",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: companyInfo.website,
    siteName: companyInfo.name,
    title: "ADK Engineering & Solutions | Crafting Precision, Shaping Tomorrow",
    description:
      "Premium sheet metal machinery — fiber laser cutting, CNC plasma, press brakes, panel benders, PEB systems. 750+ installations across India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADK Engineering & Solutions",
    description:
      "Fiber laser cutting, CNC plasma, press brakes & PEB machinery. 750+ installations across India.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: ADK_LOGO_URL,
    shortcut: ADK_LOGO_URL,
    apple: ADK_LOGO_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: companyInfo.name,
      url: companyInfo.website,
      description: companyInfo.overview,
      email: companyInfo.generalEmails,
      telephone: companyInfo.generalPhones,
      foundingDate: String(companyInfo.founded),
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "A-503/504, Empire Business Hub, Science City Road, Sola",
          addressLocality: "Ahmedabad",
          postalCode: "380060",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "2100/2, Santej-Khatraj Road, Near Gayatri Farm, Santej",
          addressLocality: "Ahmedabad",
          postalCode: "382722",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      name: companyInfo.name,
      url: companyInfo.website,
      telephone: "+91-63526-44186",
      email: "inquiry1@adkeng.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "A-503/504, Empire Business Hub, Science City Road, Sola",
        addressLocality: "Ahmedabad",
        postalCode: "380060",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      areaServed: "IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontUi.variable} ${fontBody.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block"
        />
      </head>
      <body className="font-body min-h-full flex flex-col bg-surface text-foreground">
        <Script id="adk-theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <Script
          id="adk-json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <CustomCursor />
          <EnquiryProvider>
            <Header />
            <main className="flex-grow flex flex-col">{children}</main>
            <Footer />
            <EnquiryModal />
            <FloatingContactStack />
          </EnquiryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
