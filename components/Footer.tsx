"use client";

import React from "react";
import Link from "next/link";
import { categories, companyInfo, branches, contactDepartments } from "@/lib/data";
import { ADK_LOGO_URL } from "@/lib/media";
import FooterNewsletterForm from "@/components/FooterNewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16 border-t border-primary/30 mt-auto">
      <div className="adk-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <img
              alt="ADK Engineering Logo"
              className="h-9 w-auto mb-6 brightness-0 invert object-contain"
              src={ADK_LOGO_URL}
            />
            <p className="font-mono text-[12px] text-light-gray/60 leading-relaxed mb-8 max-w-sm">
              {companyInfo.tagline}. Over {companyInfo.stats.yearsExperience} years of excellence in
              fiber laser cutting, CNC plasma, press brakes, and fabrication machinery across India.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-primary hover:bg-white/5 transition-all text-white"
              >
                <span className="material-symbols-outlined text-[20px]">public</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-primary hover:bg-white/5 transition-all text-white"
              >
                <span className="material-symbols-outlined text-[20px]">hub</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-primary hover:bg-white/5 transition-all text-white"
              >
                <span className="material-symbols-outlined text-[20px]">monitoring</span>
              </a>
            </div>
          </div>

          {/* Capabilities / Products */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] mb-6 text-primary font-bold">
              Capabilities
            </h4>
            <ul className="space-y-3 font-mono text-[11px] text-light-gray/80">
              {categories.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link href={`/products/${c.slug}`} className="hover:text-primary transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] mb-6 text-primary font-bold">
              Site Nodes
            </h4>
            <ul className="space-y-3 font-mono text-[11px] text-light-gray/80">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary transition-colors">
                  Media Gallery
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-primary transition-colors">
                  Technical Library
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-primary transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Operations Center */}
          <div className="lg:col-span-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] mb-6 text-primary font-bold">
              Operations Center
            </h4>
            <div className="space-y-4 font-mono text-[11px] text-light-gray/80">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                  location_on
                </span>
                <span>
                  <strong>Corporate Office:</strong>
                  <br />
                  {companyInfo.corporateAddress}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                  factory
                </span>
                <span>
                  <strong>Works:</strong>
                  <br />
                  {companyInfo.worksAddress}
                </span>
              </div>
              {contactDepartments.map((dept) => (
                <div key={dept.label} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                    {dept.label.includes("Service") ? "support_agent" : dept.label.includes("Spares") ? "inventory_2" : "call"}
                  </span>
                  <span>
                    <strong>{dept.label}:</strong> {dept.phones.join(" / ")}
                    <br />
                    {dept.emails.join(" / ")}
                  </span>
                </div>
              ))}
              <div className="flex items-start gap-3 pt-2 border-t border-white/5">
                <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                  hub
                </span>
                <span>
                  <strong>Branches:</strong> {branches.map((b) => b.city).join(" | ")}
                </span>
              </div>
            </div>

            {/* Newsletter Bulletins */}
            <div className="mt-8 border-t border-white/5 pt-6">
              <h5 className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3 font-bold">
                SYSTEM_UPDATES
              </h5>
              <p className="font-mono text-[11px] text-light-gray/50 mb-3">
                Receive engineering alerts and catalog releases.
              </p>
              <FooterNewsletterForm />
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-center md:justify-end gap-4">
          <div className="font-mono text-[10px] text-light-gray/40 text-center md:text-right" suppressHydrationWarning>
            © {new Date().getFullYear()} ADK Engineering & Solutions. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
