"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEnquiry } from "./EnquiryContext";
import { categories, applications } from "@/lib/data";
import { ADK_LOGO_URL } from "@/lib/media";
import {
  type MegaMenuId,
  type NavItem,
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

function NavChevron({ open, visible = true }: { open?: boolean; visible?: boolean }) {
  if (!visible) return null;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      className={`size-2.5 shrink-0 self-center transition-all duration-200 ${
        open
          ? "rotate-180 text-primary"
          : "text-foreground/35 group-hover:text-primary"
      }`}
      fill="none"
    >
      <path
        d="M2.5 4.5 6 8 9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NavIndexLabel({ index, label, active }: { index: number; label: string; active: boolean }) {
  return (
    <span className="inline-flex items-center leading-none">
      <span className="text-foreground/35 dark:text-foreground tabular-nums">{formatNavIndex(index)}</span>
      <span className={`ml-2 ${active ? "text-primary" : "text-foreground group-hover:text-primary"}`}>{label}</span>
    </span>
  );
}

function DesktopNavItem({
  index,
  item,
  active,
  isMegaOpen,
  onMegaEnter,
  onMegaFocus,
}: {
  index: number;
  item: NavItem;
  active: boolean;
  isMegaOpen: boolean;
  onMegaEnter: (mega: MegaMenuId) => void;
  onMegaFocus: (mega: MegaMenuId) => void;
}) {
  const hasMega = !!item.mega;

  return (
    <div
      className="relative inline-flex flex-col items-stretch shrink-0"
      onMouseEnter={hasMega ? () => onMegaEnter(item.mega!) : undefined}
      onFocusCapture={hasMega ? () => onMegaFocus(item.mega!) : undefined}
    >
      <Link
        href={item.path}
        className="group inline-flex flex-col items-stretch font-ui text-nav tracking-ui text-foreground transition-colors duration-200 leading-none"
        aria-expanded={hasMega ? isMegaOpen : undefined}
        aria-haspopup={hasMega ? "true" : undefined}
      >
        <span className="inline-flex items-center gap-1.5 h-5 leading-none">
          <NavIndexLabel index={index} label={item.label} active={active} />
          <NavChevron open={isMegaOpen} visible={hasMega} />
        </span>
        <span
          className={`adk-nav-underline w-full transition-colors duration-200 ${
            active ? "bg-primary" : "bg-transparent group-hover:bg-primary"
          }`}
          aria-hidden="true"
        />
      </Link>
    </div>
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
          <span className="font-ui text-button font-semibold tracking-ui text-foreground uppercase group-hover:text-primary transition-colors">
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
            <div className="flex items-center gap-2 font-ui text-label text-foreground">
              <span className="material-symbols-outlined text-[14px] leading-none">call</span>
              <span>+91 63526 44186</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 font-ui text-label text-foreground">
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
              className="h-9 md:h-10 w-auto object-contain dark:hidden"
              src="/darklogo.png"
            />
            <img
              alt="ADK Engineering & Solutions"
              className="h-9 md:h-10 w-auto object-contain hidden dark:block"
              src="/lightlogo.png"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden min-[1200px]:flex flex-1 justify-center items-center [gap:var(--adk-nav-gap)] relative">
            {primaryNav.map((item, idx) => {
              const isMegaOpen = activeMega === item.mega;
              const active = isNavItemActive(pathname, item) || isMegaOpen;

              return (
                <DesktopNavItem
                  key={item.path}
                  index={idx}
                  item={item}
                  active={active}
                  isMegaOpen={isMegaOpen}
                  onMegaEnter={handleMegaEnter}
                  onMegaFocus={handleMegaFocus}
                />
              );
            })}
          </div>

          {/* CTA & Mobile Burger */}
          <div className="flex items-center gap-3 shrink-0 ml-auto min-[1200px]:ml-[var(--adk-nav-cta-gap)]">
            <button
              onClick={() => openEnquiry()}
              className="bg-primary text-white font-ui text-button font-medium tracking-ui px-4 xl:px-5 py-2 border border-primary hover:bg-transparent hover:text-primary transition-all duration-200 whitespace-nowrap cursor-pointer"
            >
              Get Quote
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
                    <span className="font-ui text-button font-bold tracking-ui text-primary uppercase">
                      Product Categories
                    </span>
                    <Link
                      href="/products"
                      onClick={closeMega}
                      className="font-ui text-label font-medium uppercase text-primary hover:underline tracking-ui flex items-center gap-1"
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
                        <span className="material-symbols-outlined text-xl text-foreground group-hover:text-primary transition-colors shrink-0">
                          {cat.icon}
                        </span>
                        <div>
                          <h4 className="text-ui-strong text-foreground group-hover:text-primary transition-colors">
                            {cat.name}
                          </h4>
                          <p className="font-body text-small font-normal text-tertiary/90 mt-1.5 leading-relaxed line-clamp-2 normal-case">
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
                    <span className="font-ui text-label tracking-ui text-primary font-semibold uppercase">
                      Industries Served
                    </span>
                    <Link
                      href="/applications"
                      onClick={closeMega}
                      className="font-ui text-label font-medium uppercase text-primary hover:underline tracking-ui flex items-center gap-1"
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
                          <span className="text-ui-strong text-foreground group-hover:text-primary transition-colors">
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
                        <span className="text-ui-strong text-foreground group-hover:text-primary transition-colors">
                          {app.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {activeMega === "more" && (
                <div>
                  <span className="font-ui text-label tracking-ui text-primary font-semibold uppercase block mb-6 border-b border-border pb-4">
                    Corporate & Resources
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <span className="font-ui text-label tracking-ui text-tertiary block mb-3">
                        Corporate
                      </span>
                      <CompactNavLinks links={companyCorporateLinks} onNavigate={closeMega} />
                    </div>
                    <div>
                      <span className="font-ui text-label tracking-ui text-tertiary block mb-3">
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
                    className={`group w-full flex items-center justify-between font-ui text-button tracking-ui transition-colors duration-200 py-3 border-b-2 cursor-pointer ${
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
                            className="font-ui text-label text-primary py-1 block"
                          >
                            View All Products
                          </Link>
                          {categories.map((cat) => (
                            <Link
                              key={cat.slug}
                              href={`/products/${cat.slug}`}
                              onClick={closeMobileMenu}
                              className="font-ui text-label text-tertiary hover:text-primary py-1 flex items-center gap-2"
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
                              className="font-ui text-label text-tertiary hover:text-primary py-1 flex items-center gap-2"
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
                              className="font-ui text-label text-tertiary hover:text-primary py-1 flex items-center gap-2 pl-2"
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
                              className="font-ui text-label text-tertiary hover:text-primary py-1 flex items-center gap-2"
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
                              className="font-ui text-label text-tertiary hover:text-primary py-1 flex items-center gap-2"
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
                className={`group font-ui text-button tracking-ui transition-colors duration-200 py-3 block border-b-2 ${
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
