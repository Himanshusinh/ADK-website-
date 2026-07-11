"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEnquiry } from "./EnquiryContext";

export default function Header() {
  const pathname = usePathname();
  const { openEnquiry } = useEnquiry();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Applications", path: "/applications" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-charcoal/10 bg-white/95 backdrop-blur-sm">
      {/* Top Utility Bar */}
      <div className="w-full bg-surface-container py-2 px-6 md:px-20 border-b border-charcoal/5">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 font-mono text-[11px] text-charcoal">
              <span className="material-symbols-outlined text-[14px]">call</span>
              <span>+91 63526 44186</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-charcoal">
              <span className="material-symbols-outlined text-[14px]">mail</span>
              <span>inquiry1@adkeng.com</span>
            </div>
          </div>
          <div className="hidden lg:block font-mono text-[10px] uppercase tracking-[0.2em] text-charcoal/40">
            SYSTEM_STATUS: OPERATIONAL // PRECISION_V_1.0.4
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="w-full">
        <div className="flex justify-between items-center w-full px-6 md:px-20 py-4 max-w-[1440px] mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              alt="ADK Engineering & Solutions"
              className="h-10 md:h-12 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC02yPbv_g8Oda-vZHalFmvlIPpe-cnTtOEiw2Wz1kmkk3UmvwwT8dKlkMv6tJIE0OSZPqjhaPntcz9QJX0SSX4kyqtPWiP5tlHT8DeeGXHYCMJ23hP6O-Tqp8VUXZTvdNyLYfavY6EGrrgXnPhs_G81LDpphx769XflpGp2uh_kF377tW7zRSRsVJu65nL8JFesrWB_h7L3JVxLyttWL-wteQLGlNGbemoFLQ3-7vdbll1t5IMvV0vB2n4R8-RGCpZB7c"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 mx-auto relative">
            {navItems.map((item, idx) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-mono text-[12px] uppercase tracking-widest transition-colors pb-1 hover:text-primary ${
                  isActive(item.path)
                    ? "text-primary border-b-2 border-primary"
                    : "text-charcoal"
                }`}
              >
                {`0${idx + 1}. ${item.label}`}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Burger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => openEnquiry()}
              className="bg-primary text-white font-mono text-[11px] font-bold uppercase tracking-widest px-5 py-3 border border-primary hover:bg-transparent hover:text-primary transition-all whitespace-nowrap cursor-pointer"
            >
              [ GET_QUOTE ]
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-charcoal flex items-center justify-center p-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-white border-t border-charcoal/10 py-6 px-6 space-y-4 flex flex-col shadow-inner animate-fade-in">
          {navItems.map((item, idx) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-mono text-sm uppercase tracking-widest transition-colors py-2 block ${
                isActive(item.path) ? "text-primary font-bold" : "text-charcoal"
              }`}
            >
              {`0${idx + 1}. ${item.label}`}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
