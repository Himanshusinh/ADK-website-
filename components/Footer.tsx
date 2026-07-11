"use client";

import React, { useState } from "react";
import Link from "next/link";
import { categories } from "@/lib/data";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="bg-charcoal text-white py-16 px-6 md:px-20 border-t border-primary/30 mt-auto">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <img
              alt="ADK Engineering Logo"
              className="h-9 w-auto mb-6 brightness-0 invert object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC02yPbv_g8Oda-vZHalFmvlIPpe-cnTtOEiw2Wz1kmkk3UmvwwT8dKlkMv6tJIE0OSZPqjhaPntcz9QJX0SSX4kyqtPWiP5tlHT8DeeGXHYCMJ23hP6O-Tqp8VUXZTvdNyLYfavY6EGrrgXnPhs_G81LDpphx769XflpGp2uh_kF377tW7zRSRsVJu65nL8JFesrWB_h7L3JVxLyttWL-wteQLGlNGbemoFLQ3-7vdbll1t5IMvV0vB2n4R8-RGCpZB7c"
            />
            <p className="font-mono text-[12px] text-light-gray/60 leading-relaxed mb-8 max-w-sm">
              Premium industrial engineering solutions. Over 16 years of excellence in precision
              machinery, automated fabrication systems, and global support structures.
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
                  <strong>HQ & Factory:</strong> Plot No. 12, GIDC Industrial Estate,
                  <br />
                  Vatva, Ahmedabad, Gujarat, India - 382445
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                  support_agent
                </span>
                <span>
                  <strong>Hotline:</strong> +91 63526 44186
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                  mail
                </span>
                <span>
                  <strong>Inquiries:</strong> inquiry1@adkeng.com
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
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={subscribed ? "SUBSCRIPTION_ACTIVE" : "ENTER_USER_EMAIL"}
                  disabled={subscribed}
                  className="bg-white/5 border border-white/10 px-4 py-3 font-mono text-xs w-full focus:outline-none focus:border-primary text-white disabled:opacity-80"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-hover px-5 text-xs text-white font-mono font-bold transition-colors cursor-pointer"
                >
                  {subscribed ? "OK" : "JOIN"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Coordinates & Copyright Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-[10px] text-light-gray/40 text-center md:text-left">
            COORD_DATA: 23.0225° N, 72.5714° E <br className="md:hidden" />
            &nbsp;// STATUS: CALIBRATION_OPTIMAL // STABLE_SYS_LINK
          </div>
          <div className="font-mono text-[10px] text-light-gray/40 text-center md:text-right">
            © {new Date().getFullYear()} ADK Engineering & Solutions. All rights reserved.
            <br />
            Architected & Redesigned by Wildmind AI.
          </div>
        </div>
      </div>
    </footer>
  );
}
