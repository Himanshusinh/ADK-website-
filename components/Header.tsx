"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEnquiry } from "./EnquiryContext";

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
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-2.5 md:py-3">
        <Link href="/" className="flex min-w-0 items-center" onClick={() => setOpen(false)}>
          <img
            src="/darklogo.png"
            alt="ADK Engineering & Solutions"
            className="h-8 w-auto md:h-9 object-contain dark:hidden"
            width={180}
            height={48}
          />
          <img
            src="/lightlogo.png"
            alt="ADK Engineering & Solutions"
            className="h-8 w-auto md:h-9 object-contain hidden dark:block"
            width={180}
            height={48}
          />
        </Link>

        <div className="flex items-center gap-2 md:gap-6">
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`link-underline text-sm font-semibold transition-colors ${
                    active ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

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
            <button
              onClick={() => {
                setOpen(false);
                openEnquiry("General Machinery Inquiry");
              }}
              className="mt-4 rounded-full border border-foreground bg-foreground py-3 text-center font-display text-sm font-bold text-white cursor-pointer"
            >
              Inquiry
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

