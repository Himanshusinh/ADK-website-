import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import { EnquiryProvider } from "@/components/EnquiryContext";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ADK Engineering & Solutions | Precision Industrial Machinery",
  description:
    "Premium industrial engineering solutions. Over 16 years of excellence in high-speed fiber laser cutting systems, CNC plasma cutting, CNC press brakes, intelligent panel benders, and fabrication machinery.",
  keywords: [
    "Fiber Laser Cutting Machine",
    "CNC Plasma Cutting",
    "CNC Press Brake",
    "Panel Bender",
    "Pre-Engineered Building Machinery",
    "Shearing Machine",
    "Industrial Machinery Ahmedabad",
    "ADK Engineering",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-surface">
        <EnquiryProvider>
          <Header />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
          <EnquiryModal />
          <WhatsAppButton />
        </EnquiryProvider>
      </body>
    </html>
  );
}
