"use client";

import React, { FormEvent } from "react";
import Link from "next/link";
import { categories, companyInfo, branches, contactDepartments } from "@/lib/data";

const companyLinks = [
  { href: "/applications", label: "Applications" },
  { href: "/about", label: "About Us" },
  { href: "/resources", label: "Resources" },
  { href: "/gallery", label: "Gallery" },
  { href: "/clients", label: "Clients & Cases" },
  { href: "/career", label: "Careers" },
  { href: "/news", label: "News & Events" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Footer() {
  function onSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <footer className="mt-0 bg-steel text-steel-foreground">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.35fr_1fr_1fr_1.2fr] md:py-20">
        <div>
          <img
            src="/lightlogo.png"
            alt={companyInfo.name}
            className="h-10 w-auto object-contain"
            width={200}
            height={56}
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-steel-muted">
            {companyInfo.tagline}. Over {companyInfo.stats.yearsExperience} years of excellence in fiber laser cutting, CNC plasma, press brakes, and fabrication machinery.
          </p>
          <p className="mt-6 text-sm text-steel-muted font-mono uppercase tracking-wider text-xs">Engineering alerts & catalogue releases</p>
          <form onSubmit={onSubscribe} className="mt-3 flex max-w-sm gap-2">
            <label className="sr-only" htmlFor="footer-email">
              Email
            </label>
            <input
              id="footer-email"
              type="email"
              required
              placeholder="Your email"
              className="min-w-0 flex-1 border border-white/25 bg-transparent px-3.5 py-2.5 text-sm text-steel-foreground outline-none placeholder:text-steel-muted focus:border-accent"
            />
            <button
              type="submit"
              className="shrink-0 bg-white px-4 py-2.5 text-sm font-semibold text-steel transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
            >
              Join
            </button>
          </form>
        </div>

        <nav className="text-sm">
          <p className="eyebrow text-steel-muted">Machines</p>
          <ul className="mt-5 space-y-3 font-sans">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/products/${c.slug}`}
                  className="text-steel-muted transition-colors hover:text-steel-foreground"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="text-sm">
          <p className="eyebrow text-steel-muted">Company</p>
          <ul className="mt-5 space-y-3 font-sans">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-steel-muted transition-colors hover:text-steel-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <p className="eyebrow text-steel-muted">Operations</p>
          <ul className="mt-5 space-y-4 text-steel-muted font-sans">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-base shrink-0 mt-0.5 text-accent">call</span>
              <span>
                <a
                  href={`tel:${companyInfo.generalPhones[0]}`}
                  className="transition-colors hover:text-steel-foreground block font-medium"
                >
                  {companyInfo.generalPhones[0]}
                </a>
                <span className="block text-xs text-steel-muted">Inquiry &amp; sales</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-base shrink-0 mt-0.5 text-accent">support_agent</span>
              <span>
                <a
                  href="tel:+919510041629"
                  className="transition-colors hover:text-steel-foreground block font-medium"
                >
                  +91 95100 41629
                </a>
                <span className="block text-xs text-steel-muted">Service, 24 hours</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-base shrink-0 mt-0.5 text-accent">mail</span>
              <a
                href={`mailto:${companyInfo.generalEmails[0]}`}
                className="transition-colors hover:text-steel-foreground font-medium"
              >
                {companyInfo.generalEmails[0]}
              </a>
            </li>
            <li className="leading-relaxed text-xs">
              <span className="font-semibold text-steel-foreground">Corporate:</span> {companyInfo.corporateAddress}
            </li>
            <li className="leading-relaxed text-xs">
              <span className="font-semibold text-steel-foreground">Works:</span> {companyInfo.worksAddress}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-steel-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} ADK Engineering Pvt Ltd. {companyInfo.name}, Ahmedabad.
          </p>
          <p>Works: Santej, Gujarat.</p>
        </div>
      </div>
    </footer>
  );
}

