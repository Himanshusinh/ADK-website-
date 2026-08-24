"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEnquiry } from "./EnquiryContext";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/gallery", label: "Gallery" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const { openEnquiry } = useEnquiry();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-2.5 md:py-3">
        <Link href="/" className="flex min-w-0 items-center" onClick={() => setOpen(false)}>
          <img
            src="/darklogo.png"
            alt="ADK Engineering & Solutions"
            className="h-11 w-auto md:h-14 lg:h-16 object-contain dark:hidden"
            width={240}
            height={64}
          />
          <img
            src="/lightlogo.png"
            alt="ADK Engineering & Solutions"
            className="h-11 w-auto md:h-14 lg:h-16 object-contain hidden dark:block"
            width={240}
            height={64}
          />
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-2 text-sm font-semibold transition-colors ${active ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-1 h-0.5 origin-left bg-accent transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${active ? "scale-x-100" : "scale-x-0"
                      }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-rule text-foreground transition-all duration-300 hover:border-foreground hover:bg-panel cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Inquiry Button */}
          <button
            onClick={() => openEnquiry("General Machinery Inquiry")}
            className="hidden rounded-full border border-foreground px-5 py-2 text-sm font-bold text-foreground transition-all duration-300 hover:bg-foreground hover:text-white dark:hover:bg-accent dark:hover:border-accent sm:inline-block cursor-pointer"
          >
            Inquiry
          </button>

          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center border border-rule-strong text-foreground lg:hidden cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-rule lg:hidden bg-background">
          <nav className="shell flex flex-col py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-rule py-3 font-display text-lg tracking-tight text-foreground hover:text-accent last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center gap-2 border border-rule px-4 py-2 text-sm font-semibold text-foreground rounded-full"
              >
                <span className="material-symbols-outlined text-lg">
                  {theme === "dark" ? "light_mode" : "dark_mode"}
                </span>
                <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  openEnquiry("General Machinery Inquiry");
                }}
                className="flex-1 rounded-full border border-foreground bg-foreground py-2.5 text-center font-display text-sm font-bold text-white cursor-pointer"
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
