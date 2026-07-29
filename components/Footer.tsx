"use client";

import React from "react";
import Link from "next/link";
import { categories, companyInfo, branches, contactDepartments } from "@/lib/data";
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC02yPbv_g8Oda-vZHalFmvlIPpe-cnTtOEiw2Wz1kmkk3UmvwwT8dKlkMv6tJIE0OSZPqjhaPntcz9QJX0SSX4kyqtPWiP5tlHT8DeeGXHYCMJ23hP6O-Tqp8VUXZTvdNyLYfavY6EGrrgXnPhs_G81LDpphx769XflpGp2uh_kF377tW7zRSRsVJu65nL8JFesrWB_h7L3JVxLyttWL-wteQLGlNGbemoFLQ3-7vdbll1t5IMvV0vB2n4R8-RGCpZB7c"
            />
            <p className="font-body text-small text-light-gray/60 leading-relaxed mb-8 max-w-sm">
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
            <h4 className="font-ui text-label tracking-ui mb-6 text-primary font-semibold uppercase">
              Capabilities
            </h4>
            <ul className="space-y-3 font-ui text-label font-medium tracking-ui text-light-gray/80 uppercase">
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
            <h4 className="font-ui text-label tracking-ui mb-6 text-primary font-semibold uppercase">
              Site Nodes
            </h4>
            <ul className="space-y-3 font-ui text-label font-medium tracking-ui text-light-gray/80 uppercase">
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
            <h4 className="font-ui text-label tracking-ui mb-6 text-primary font-semibold uppercase">
              Operations Center
            </h4>
            <div className="space-y-4 font-ui text-label font-medium tracking-ui text-light-gray/80">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                  location_on
                </span>
                <span>
                  <span className="text-white font-semibold">Corporate Office:</span>
                  <br />
                  {companyInfo.corporateAddress}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                  factory
                </span>
                <span>
                  <span className="text-white font-semibold">Works:</span>
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
                    <span className="text-white font-semibold">{dept.label}:</span> {dept.phones.join(" / ")}
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
                  <span className="text-white font-semibold">Branches:</span> {branches.map((b) => b.city).join(" | ")}
                </span>
              </div>
            </div>

            {/* Newsletter Bulletins */}
            <div className="mt-8 border-t border-white/5 pt-6">
              <h5 className="font-ui text-label tracking-ui text-primary mb-3 font-semibold uppercase">
                System Updates
              </h5>
              <p className="font-body text-small font-normal text-light-gray/60 mb-3 normal-case">
                Receive engineering alerts and catalog releases.
              </p>
              <FooterNewsletterForm />
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-center md:justify-end gap-4">
          <div className="font-body text-small font-normal tracking-ui text-light-gray/50 text-center md:text-right normal-case" suppressHydrationWarning>
            © {new Date().getFullYear()} ADK Engineering & Solutions. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
