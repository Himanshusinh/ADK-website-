"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEnquiry } from "./EnquiryContext";
import { categories, applications } from "@/lib/data";
import {
  type MegaMenuId,
  primaryNav,
  productCompactLinks,
  solutionsCompactLinks,
  companyCorporateLinks,
  companyResourceLinks,
  isNavItemActive,
  formatNavIndex,
} from "@/lib/navigation";
import ThemeToggle from "./ThemeToggle";

const OPEN_DELAY = 80;
const CLOSE_DELAY = 200;
const FEATURED_INDUSTRY_COUNT = 8;

function navDesktopLinkClass(active: boolean, withGap = false) {
  return `group font-mono text-[10px] xl:text-[11px] uppercase tracking-widest transition-colors duration-200 inline-flex items-center border-b-2 pb-1 leading-none ${
    withGap ? "gap-1.5 " : ""
  }${
    active
      ? "border-primary text-foreground"
      : "border-transparent text-foreground hover:border-primary"
  }`;
}

function NavIndexLabel({ index, label, active }: { index: number; label: string; active: boolean }) {
  return (
    <span className="inline-flex items-center leading-none">
      <span className="text-foreground/35 dark:text-foreground tabular-nums">{formatNavIndex(index)}</span>
      <span className={`ml-2 ${active ? "text-primary" : "text-foreground group-hover:text-primary"}`}>{label}</span>
    </span>
  );
}

function CompactNavLinks({
  links,
  onNavigate,
}: {
  links: { label: string; path: string; icon?: string }[];
  onNavigate: () => void;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {links.map((link) => (
        <Link
          key={`${link.path}-${link.label}`}
          href={link.path}
          onClick={onNavigate}
          className="p-3 border border-border hover:border-primary hover:bg-tech-blue/30 transition-all group flex items-center gap-2"
        >
          {link.icon && (
            <span className="material-symbols-outlined text-lg text-foreground/70 group-hover:text-primary transition-colors shrink-0">
              {link.icon}
            </span>
          )}
          <span className="font-headline text-xs text-foreground uppercase font-bold group-hover:text-primary transition-colors">
            {link.label}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const { openEnquiry } = useEnquiry();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaState, setMegaState] = useState<{ mega: MegaMenuId; path: string } | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<MegaMenuId | null>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const activeMega = megaState && megaState.path === pathname ? megaState.mega : null;
  const featuredIndustries = applications.slice(0, FEATURED_INDUSTRY_COUNT);
  const closeMega = () => setMegaState(null);

  const clearTimers = useCallback(() => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const handleMegaEnter = (mega: MegaMenuId) => {
    clearTimers();
    openTimer.current = setTimeout(() => setMegaState({ mega, path: pathname }), OPEN_DELAY);
  };

  const handleMegaLeave = () => {
    clearTimers();
    closeTimer.current = setTimeout(() => setMegaState(null), CLOSE_DELAY);
  };

  const handleMegaFocus = (mega: MegaMenuId) => {
    clearTimers();
    setMegaState({ mega, path: pathname });
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMegaState(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const toggleMobileAccordion = (mega: MegaMenuId) => {
    setMobileAccordion((prev) => (prev === mega ? null : mega));
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-card/95 backdrop-blur-sm">
      {/* Top Utility Bar */}
      <div className="w-full bg-surface-container py-1.5 border-b border-border/50">
        <div className="adk-container flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 font-mono text-[11px] text-foreground">
              <span className="material-symbols-outlined text-[14px] leading-none">call</span>
              <span>+91 63526 44186</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-foreground">
              <span className="material-symbols-outlined text-[14px] leading-none">mail</span>
              <span>inquiry1@adkeng.com</span>
            </div>
          </div>
          <ThemeToggle className="flex min-[1200px]:hidden" />
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav ref={navRef} className="w-full relative" onMouseLeave={handleMegaLeave}>
        <div className="adk-container flex items-center min-h-[var(--adk-header-main-height)] py-2">
          <Link href="/" className="flex items-center shrink-0 mr-[var(--adk-logo-nav-gap)]">
            <img
              alt="ADK Engineering & Solutions"
              className="h-9 md:h-10 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC02yPbv_g8Oda-vZHalFmvlIPpe-cnTtOEiw2Wz1kmkk3UmvwwT8dKlkMv6tJIE0OSZPqjhaPntcz9QJX0SSX4kyqtPWiP5tlHT8DeeGXHYCMJ23hP6O-Tqp8VUXZTvdNyLYfavY6EGrrgXnPhs_G81LDpphx769XflpGp2uh_kF377tW7zRSRsVJu65nL8JFesrWB_h7L3JVxLyttWL-wteQLGlNGbemoFLQ3-7vdbll1t5IMvV0vB2n4R8-RGCpZB7c"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden min-[1200px]:flex flex-1 justify-center items-center [gap:var(--adk-nav-gap)] relative">
            {primaryNav.map((item, idx) => {
              const hasMega = !!item.mega;
              const isMegaOpen = activeMega === item.mega;
              const active = isNavItemActive(pathname, item) || isMegaOpen;

              if (hasMega) {
                return (
                  <div
                    key={item.path}
                    className="relative"
                    onMouseEnter={() => handleMegaEnter(item.mega!)}
                    onFocus={() => handleMegaFocus(item.mega!)}
                  >
                    <Link
                      href={item.path}
                      className={navDesktopLinkClass(active, true)}
                      aria-expanded={isMegaOpen}
                      aria-haspopup="true"
                    >
                      <NavIndexLabel index={idx} label={item.label} active={active} />
                      <span
                        className={`material-symbols-outlined text-[10px] leading-none shrink-0 transition-all duration-200 ${
                          isMegaOpen
                            ? "rotate-180 text-primary"
                            : "text-foreground/35 group-hover:text-primary"
                        }`}
                      >
                        expand_more
                      </span>
                    </Link>
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={navDesktopLinkClass(active)}
                >
                  <NavIndexLabel index={idx} label={item.label} active={active} />
                </Link>
              );
            })}
          </div>

          {/* CTA & Mobile Burger */}
          <div className="flex items-center gap-3 shrink-0 ml-auto min-[1200px]:ml-[var(--adk-nav-cta-gap)]">
            <button
              onClick={() => openEnquiry()}
              className="bg-primary text-white font-mono text-[10px] xl:text-[11px] font-bold uppercase tracking-widest px-4 xl:px-5 py-2 border border-primary hover:bg-transparent hover:text-primary transition-all duration-200 whitespace-nowrap cursor-pointer"
            >
              [ GET_QUOTE ]
            </button>
            <ThemeToggle className="hidden min-[1200px]:flex" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-[1200px]:hidden text-foreground flex items-center justify-center p-1 cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu Panels */}
        {activeMega && (
          <div
            className="hidden min-[1200px]:block absolute left-0 right-0 top-full bg-card border-b border-border shadow-lg animate-scale-in z-50"
            onMouseEnter={() => clearTimers()}
            onMouseLeave={handleMegaLeave}
          >
            <div className="adk-container py-8">
              {activeMega === "products" && (
                <div>
                  <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold">
                      [ PRODUCT_CATEGORIES // 8 FAMILIES ]
                    </span>
                    <Link
                      href="/products"
                      onClick={closeMega}
                      className="font-mono text-[10px] uppercase text-primary hover:underline tracking-widest flex items-center gap-1"
                    >
                      View All Products
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </Link>
                  </div>

                  {/* Compact panel: 1200–1699px */}
                  <div className="min-[1700px]:hidden">
                    <CompactNavLinks links={productCompactLinks} onNavigate={closeMega} />
                  </div>

                  {/* Full panel: ≥1700px */}
                  <div className="hidden min-[1700px]:grid grid-cols-2 xl:grid-cols-4 gap-4">
                    {categories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/products/${cat.slug}`}
                        onClick={closeMega}
                        className="p-4 border border-border hover:border-primary hover:bg-tech-blue/30 transition-all group flex items-start gap-3"
                      >
                        <span className="material-symbols-outlined text-2xl text-foreground group-hover:text-primary transition-colors shrink-0">
                          {cat.icon}
                        </span>
                        <div>
                          <h4 className="font-headline text-sm text-foreground uppercase font-bold group-hover:text-primary transition-colors">
                            {cat.name}
                          </h4>
                          <p className="font-mono text-[9px] text-tertiary mt-1 leading-relaxed line-clamp-2">
                            {cat.tagline}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {activeMega === "solutions" && (
                <div>
                  <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold">
                      [ INDUSTRIES_SERVED // 19 SECTORS ]
                    </span>
                    <Link
                      href="/applications"
                      onClick={closeMega}
                      className="font-mono text-[10px] uppercase text-primary hover:underline tracking-widest flex items-center gap-1"
                    >
                      View All Applications
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </Link>
                  </div>

                  {/* Compact panel: 1200–1699px */}
                  <div className="min-[1700px]:hidden space-y-4">
                    <CompactNavLinks links={solutionsCompactLinks} onNavigate={closeMega} />
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-border">
                      {featuredIndustries.map((app) => (
                        <Link
                          key={app.slug}
                          href={`/applications/${app.slug}`}
                          onClick={closeMega}
                          className="p-2 border border-border/50 hover:border-primary hover:bg-tech-blue/30 transition-all group flex items-center gap-2"
                        >
                          <span className="material-symbols-outlined text-base text-foreground/70 group-hover:text-primary transition-colors shrink-0">
                            {app.icon}
                          </span>
                          <span className="font-headline text-[10px] text-foreground uppercase font-bold group-hover:text-primary transition-colors">
                            {app.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Full panel: ≥1700px */}
                  <div className="hidden min-[1700px]:grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
                    {applications.map((app) => (
                      <Link
                        key={app.slug}
                        href={`/applications/${app.slug}`}
                        onClick={closeMega}
                        className="p-3 border border-border/50 hover:border-primary hover:bg-tech-blue/30 transition-all group flex items-center gap-2"
                      >
                        <span className="material-symbols-outlined text-lg text-foreground/70 group-hover:text-primary transition-colors shrink-0">
                          {app.icon}
                        </span>
                        <span className="font-headline text-xs text-foreground uppercase font-bold group-hover:text-primary transition-colors">
                          {app.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {activeMega === "more" && (
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold block mb-6 border-b border-border pb-4">
                    [ MORE // CORPORATE & RESOURCES ]
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-tertiary block mb-3">
                        Corporate
                      </span>
                      <CompactNavLinks links={companyCorporateLinks} onNavigate={closeMega} />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-tertiary block mb-3">
                        Resources
                      </span>
                      <CompactNavLinks links={companyResourceLinks} onNavigate={closeMega} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="min-[1200px]:hidden w-full bg-card border-t border-border py-6 px-[var(--adk-container-padding)] space-y-1 flex flex-col shadow-inner animate-fade-in max-h-[80vh] overflow-y-auto">
          {primaryNav.map((item, idx) => {
            const itemActive = isNavItemActive(pathname, item);

            if (item.mega) {
              const isOpen = mobileAccordion === item.mega;
              return (
                <div key={item.path}>
                  <button
                    onClick={() => toggleMobileAccordion(item.mega!)}
                    className={`group w-full flex items-center justify-between font-mono text-sm uppercase tracking-widest transition-colors duration-200 py-3 border-b-2 cursor-pointer ${
                      itemActive
                        ? "border-primary font-bold"
                        : "border-transparent hover:border-primary"
                    }`}
                  >
                    <span>
                      <span className="text-foreground/35 dark:text-foreground tabular-nums">{formatNavIndex(idx)}</span>
                      <span className={`ml-2 ${itemActive ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
                        {item.label}
                      </span>
                    </span>
                    <span
                      className={`material-symbols-outlined text-[16px] text-foreground/40 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pl-4 pb-3 space-y-2 animate-fade-in">
                      {item.mega === "products" && (
                        <>
                          <Link
                            href="/products"
                            onClick={closeMobileMenu}
                            className="font-mono text-xs uppercase text-primary py-1 block"
                          >
                            View All Products
                          </Link>
                          {categories.map((cat) => (
                            <Link
                              key={cat.slug}
                              href={`/products/${cat.slug}`}
                              onClick={closeMobileMenu}
                              className="font-mono text-xs uppercase text-tertiary hover:text-primary py-1 flex items-center gap-2"
                            >
                              <span className="material-symbols-outlined text-[14px]">{cat.icon}</span>
                              {cat.name}
                            </Link>
                          ))}
                        </>
                      )}
                      {item.mega === "solutions" && (
                        <>
                          {solutionsCompactLinks.map((link) => (
                            <Link
                              key={`${link.path}-${link.label}`}
                              href={link.path}
                              onClick={closeMobileMenu}
                              className="font-mono text-xs uppercase text-tertiary hover:text-primary py-1 flex items-center gap-2"
                            >
                              {link.icon && (
                                <span className="material-symbols-outlined text-[14px]">{link.icon}</span>
                              )}
                              {link.label}
                            </Link>
                          ))}
                          {applications.map((app) => (
                            <Link
                              key={app.slug}
                              href={`/applications/${app.slug}`}
                              onClick={closeMobileMenu}
                              className="font-mono text-xs uppercase text-tertiary hover:text-primary py-1 flex items-center gap-2 pl-2"
                            >
                              <span className="material-symbols-outlined text-[14px]">{app.icon}</span>
                              {app.name}
                            </Link>
                          ))}
                        </>
                      )}
                      {item.mega === "more" && (
                        <>
                          {companyCorporateLinks.map((link) => (
                            <Link
                              key={link.path}
                              href={link.path}
                              onClick={closeMobileMenu}
                              className="font-mono text-xs uppercase text-tertiary hover:text-primary py-1 flex items-center gap-2"
                            >
                              {link.icon && (
                                <span className="material-symbols-outlined text-[14px]">{link.icon}</span>
                              )}
                              {link.label}
                            </Link>
                          ))}
                          {companyResourceLinks.map((link) => (
                            <Link
                              key={link.path}
                              href={link.path}
                              onClick={closeMobileMenu}
                              className="font-mono text-xs uppercase text-tertiary hover:text-primary py-1 flex items-center gap-2"
                            >
                              {link.icon && (
                                <span className="material-symbols-outlined text-[14px]">{link.icon}</span>
                              )}
                              {link.label}
                            </Link>
                          ))}
                        </>
                      )}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={closeMobileMenu}
                className={`group font-mono text-sm uppercase tracking-widest transition-colors duration-200 py-3 block border-b-2 ${
                  itemActive
                    ? "border-primary font-bold"
                    : "border-transparent hover:border-primary"
                }`}
              >
                <span className="text-foreground/35 dark:text-foreground tabular-nums">{formatNavIndex(idx)}</span>
                <span className={`ml-2 ${itemActive ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
