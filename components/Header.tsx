"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEnquiry } from "./EnquiryContext";
import { useTheme } from "./ThemeProvider";
import { productCompactLinks } from "@/lib/navigation";

const navItems = [
  { href: "/products", label: "Products", hasProductsMenu: true },
  { href: "/applications", label: "Applications" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/resources/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/clients", label: "Clients" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
] as const;

function isNavActive(pathname: string, href: string): boolean {
  if (href === "/resources") {
    return (
      pathname === "/resources" ||
      pathname.startsWith("/resources/catalogues") ||
      pathname.startsWith("/resources/faq")
    );
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const { openEnquiry } = useEnquiry();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = mounted && theme === "dark";
  const isHeroPage = pathname === "/";
  const isTransparentHero = !isDark && isHeroPage && !scrolled;
  const isWhiteTextNav = isDark || isTransparentHero;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isTransparentHero
          ? "bg-steel/85 backdrop-blur-md border-b border-white/10 text-white"
          : isDark
          ? "bg-[#0f1112] border-b border-white/10 text-white"
          : "bg-background border-b border-rule text-foreground shadow-xs"
      }`}
    >
      <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-2.5 md:py-3">
        <Link href="/" className="flex min-w-0 items-center" onClick={() => setOpen(false)}>
          <img
            src={isWhiteTextNav ? "/lightlogo.png" : "/darklogo.png"}
            alt="ADK Engineering & Solutions"
            className="h-11 w-auto md:h-14 lg:h-16 object-contain"
            width={240}
            height={64}
          />
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          <nav className="hidden items-center gap-4 xl:gap-6 lg:flex">
            {navItems.map((item) => {
              const active = isNavActive(pathname, item.href);
              if ("hasProductsMenu" in item && item.hasProductsMenu) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`relative inline-flex items-center gap-1 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
                        active
                          ? "text-accent font-bold"
                          : isWhiteTextNav
                          ? "text-white/90 hover:text-white"
                          : "text-foreground hover:text-accent"
                      }`}
                    >
                      {item.label}
                      <span className="material-symbols-outlined text-base">expand_more</span>
                      <span
                        className={`absolute inset-x-0 -bottom-1 h-0.5 origin-left bg-accent transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          active ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </Link>
                    {productsOpen && (
                      <div
                        className={`absolute left-0 top-full z-50 w-[22rem] border py-3 shadow-lg ${
                          isWhiteTextNav
                            ? "border-white/15 bg-[#0f1112] text-white"
                            : "border-rule bg-background text-foreground"
                        }`}
                      >
                        <div className="grid grid-cols-1">
                          {productCompactLinks.map((link) => (
                            <Link
                              key={link.path}
                              href={link.path}
                              className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                                isWhiteTextNav
                                  ? "hover:bg-white/10 hover:text-accent"
                                  : "hover:bg-panel hover:text-accent"
                              }`}
                            >
                              {link.icon ? (
                                <span className="material-symbols-outlined text-lg text-accent">
                                  {link.icon}
                                </span>
                              ) : null}
                              <span className="font-semibold">{link.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
                    active
                      ? "text-accent font-bold"
                      : isWhiteTextNav
                      ? "text-white/90 hover:text-white"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-1 h-0.5 origin-left bg-accent transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 cursor-pointer ${
              isWhiteTextNav
                ? "border-white/30 text-white hover:border-white hover:bg-white/10"
                : "border-rule text-foreground hover:border-foreground hover:bg-panel"
            }`}
          >
            <span className="material-symbols-outlined text-lg">
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </button>

          <button
            onClick={() => openEnquiry("General Machinery Inquiry")}
            className={`hidden rounded-full border px-5 py-2 text-sm font-bold transition-all duration-300 sm:inline-block cursor-pointer ${
              isWhiteTextNav
                ? "border-white text-white hover:bg-accent hover:border-accent hover:text-accent-foreground"
                : "border-foreground text-foreground hover:bg-foreground hover:text-white"
            }`}
          >
            Inquiry
          </button>

          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={`grid h-10 w-10 place-items-center border lg:hidden cursor-pointer ${
              isWhiteTextNav
                ? "border-white/30 text-white"
                : "border-rule-strong text-foreground"
            }`}
          >
            <span className="material-symbols-outlined text-xl">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div
          className={`border-t lg:hidden ${
            isWhiteTextNav
              ? "border-white/10 bg-[#0f1112] text-white"
              : "border-rule bg-background text-foreground"
          }`}
        >
          <nav className="shell flex flex-col py-2">
            {navItems.map((item) => {
              if ("hasProductsMenu" in item && item.hasProductsMenu) {
                return (
                  <div
                    key={item.href}
                    className={`border-b last:border-b-0 ${
                      isWhiteTextNav ? "border-white/10" : "border-rule"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setMobileProductsOpen((v) => !v)}
                      className="flex w-full items-center justify-between py-3 font-display text-lg tracking-tight"
                    >
                      <span>{item.label}</span>
                      <span className="material-symbols-outlined text-xl">
                        {mobileProductsOpen ? "expand_less" : "expand_more"}
                      </span>
                    </button>
                    {mobileProductsOpen && (
                      <div className="pb-3 pl-2">
                        {productCompactLinks.map((link) => (
                          <Link
                            key={link.path}
                            href={link.path}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm font-semibold text-muted-foreground hover:text-accent"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`border-b py-3 font-display text-lg tracking-tight hover:text-accent last:border-b-0 ${
                    isWhiteTextNav
                      ? "border-white/10 text-white"
                      : "border-rule text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={toggleTheme}
                className={`flex items-center gap-2 border px-4 py-2 text-sm font-semibold rounded-full ${
                  isWhiteTextNav
                    ? "border-white/20 text-white"
                    : "border-rule text-foreground"
                }`}
              >
                <span className="material-symbols-outlined text-lg">
                  {isDark ? "light_mode" : "dark_mode"}
                </span>
                <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  openEnquiry("General Machinery Inquiry");
                }}
                className={`flex-1 rounded-full border py-2.5 text-center font-display text-sm font-bold cursor-pointer ${
                  isWhiteTextNav
                    ? "border-white bg-white text-steel"
                    : "border-foreground bg-foreground text-white"
                }`}
              >
                Inquiry
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
