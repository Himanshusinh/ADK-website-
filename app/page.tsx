"use client";

import React from "react";
import Link from "next/link";
import { useEnquiry } from "@/components/EnquiryContext";
import { categories, applications, testimonials } from "@/lib/data";

export default function Home() {
  const { openEnquiry } = useEnquiry();

  return (
    <div className="flex flex-col w-full">
      {/* Technical Hero Section */}
      <section className="relative w-full min-h-[650px] md:min-h-[750px] bg-surface tech-grid flex items-center overflow-hidden border-b border-charcoal/10 py-16">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="h-full w-full border-x border-on-surface/5 max-w-[1440px] mx-auto"></div>
        </div>
        <div className="relative z-10 w-full px-6 md:px-20 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="border-l-4 border-primary pl-6 md:pl-10">
            <div className="font-mono text-primary text-xs md:text-sm uppercase tracking-[0.3em] mb-4">
              [ SCHEMATIC_REF: ADK_V3 ]
            </div>
            <h1 className="font-headline text-[48px] leading-[1.05] md:text-[68px] text-charcoal uppercase mb-6 tracking-tighter">
              Precision <br />
              Engineering <br />
              Architecture.
            </h1>
            <p className="font-mono text-xs md:text-sm text-tertiary mb-10 max-w-md leading-relaxed border-t border-charcoal/10 pt-6">
              SYSTEM_OVERVIEW: High-performance fiber laser cutting, CNC plasma cutting, and CNC press
              brakes engineered for extreme tolerances and industrial reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => openEnquiry("General Catalogue Inquiry")}
                className="bg-charcoal text-white font-mono text-[13px] uppercase px-8 py-4 hover:bg-primary transition-colors tracking-[0.15em] cursor-pointer"
              >
                INITIATE_CATALOGUE
              </button>
              <Link
                href="/resources"
                className="bg-transparent text-charcoal border border-charcoal font-mono text-[13px] uppercase px-8 py-4 hover:bg-charcoal hover:text-white transition-colors tracking-[0.15em] text-center"
              >
                VIEW_SPECS.PDF
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg bg-transparent">
              <img
                alt="High-detail machine schematic blueprint asset"
                className="w-full h-auto relative z-10 mix-blend-multiply"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOzIemnEm6V7GR2bo2GIhMBDg-NJl725eBjH6It2PL5Sjo3WhVXoleVnbj2RcKOtirLuRswUqVRNvXpHSz2a0kKCw-CTpTVqGVLS7GCKiWDHyrcsm_fQB46p0q66NNXsvVYrOjLtLu818Swx4zkFGA9-Fn2yq50Rx7pQADrf3UTTpD-48Xwfjm7Zxli8zgv18UZ5_YoHFaIvX_LtmhrsF5NXHgkt5MrIIZGMyZ0t623K4ca27FPmHufTV1KZmThJQB2H5pD3sq7CBy5-E"
              />

              {/* Schematic Callouts */}
              <div className="absolute top-[25%] -right-[2%] flex items-center gap-2 z-20">
                <div className="w-12 h-px bg-primary"></div>
                <div className="bg-white border border-primary p-2 font-mono text-[9px] uppercase tracking-widest shadow-sm">
                  Precision 0.01mm
                </div>
              </div>
              <div className="absolute top-[40%] -left-[5%] flex items-center gap-2 z-20">
                <div className="bg-white border border-primary p-2 font-mono text-[9px] uppercase tracking-widest shadow-sm">
                  Fiber Laser Source
                </div>
                <div className="w-12 h-px bg-primary"></div>
              </div>
              <div className="absolute bottom-[10%] left-[20%] flex flex-col items-center gap-1 z-20">
                <div className="w-px h-12 bg-primary"></div>
                <div className="bg-white border border-primary p-2 font-mono text-[9px] uppercase tracking-widest shadow-sm">
                  CNC_CONTROL_UNIT
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-6 md:left-20 hidden lg:block font-mono text-[10px] text-tertiary/40">
          COORD_DATA: 23.0225° N, 72.5714° E <br />
          STATUS: SYSTEM_READY // CALIBRATION_OPTIMAL
        </div>
      </section>

      {/* Grid Categories */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 md:px-20 max-w-[1440px] mx-auto">
          <div className="mb-12 border-b border-charcoal/10 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-mono text-primary text-xs uppercase tracking-widest block mb-3">
                [ 01_CATEGORIES ]
              </span>
              <h2 className="font-headline text-[38px] md:text-[52px] text-charcoal uppercase tracking-tighter leading-none">
                Machine Classification
              </h2>
            </div>
            <div className="font-mono text-[11px] text-tertiary uppercase max-w-[280px] leading-relaxed border-l border-primary pl-5">
              Standardized industrial machinery categories for precision manufacturing environments.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-charcoal/10">
            {categories.slice(0, 4).map((c, idx) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                className="p-10 border-r border-b border-charcoal/10 group hover:bg-tech-blue transition-all duration-300 flex flex-col justify-between min-h-[280px]"
              >
                <div>
                  <div className="font-mono text-[10px] text-primary mb-6">SR_0{idx + 1}</div>
                  <span className="material-symbols-outlined text-[48px] text-charcoal mb-6 group-hover:text-primary transition-colors">
                    {c.icon}
                  </span>
                  <h3 className="font-headline text-2xl text-charcoal uppercase mb-3 group-hover:text-primary transition-colors">
                    {c.name}
                  </h3>
                  <p className="font-sans text-[13px] text-tertiary leading-relaxed">
                    {c.tagline}
                  </p>
                </div>
                <div className="font-mono text-[10px] text-primary group-hover:translate-x-1 transition-transform mt-4 flex items-center gap-1">
                  ACCESS_CATALOGUE <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="py-16 bg-surface-container border-y border-charcoal/10">
        <div className="w-full px-6 md:px-20 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:border-r border-charcoal/10 last:border-0 px-4">
              <div className="font-mono text-[10px] uppercase text-tertiary mb-3 tracking-widest">
                Installed_Units
              </div>
              <div className="font-headline text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold">
                750+
              </div>
            </div>
            <div className="text-center md:border-r border-charcoal/10 last:border-0 px-4">
              <div className="font-mono text-[10px] uppercase text-tertiary mb-3 tracking-widest">
                Operating_Exp
              </div>
              <div className="font-headline text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold">
                16+ <span className="text-xl md:text-2xl font-mono align-middle font-normal">YRS</span>
              </div>
            </div>
            <div className="text-center md:border-r border-charcoal/10 last:border-0 px-4">
              <div className="font-mono text-[10px] uppercase text-tertiary mb-3 tracking-widest">
                SLA_Support
              </div>
              <div className="font-headline text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold">
                24/7
              </div>
            </div>
            <div className="text-center px-4">
              <div className="font-mono text-[10px] uppercase text-tertiary mb-3 tracking-widest">
                Service_Nodes
              </div>
              <div className="font-headline text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold">
                08
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Machinery Showcases */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 md:px-20 max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-charcoal/10 pb-6">
            <div>
              <span className="font-mono text-primary text-xs uppercase tracking-widest block mb-3">
                [ 02_EQUIPMENT ]
              </span>
              <h2 className="font-headline text-[38px] md:text-[52px] text-charcoal uppercase tracking-tighter">
                Advanced Machinery
              </h2>
            </div>
            <Link
              href="/products"
              className="font-mono text-xs uppercase text-primary hover:underline mb-2 tracking-widest flex items-center gap-2 font-bold"
            >
              VIEW_COMPLETE_INVENTORY{" "}
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.slice(0, 3).map((category) => {
              const model = category.models[0];
              if (!model) return null;
              return (
                <div
                  key={model.slug}
                  className="bg-white p-6 border border-charcoal/10 hover:border-primary transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-xl group"
                >
                  <div className="font-mono text-[9px] text-tertiary mb-4 uppercase tracking-tighter flex justify-between">
                    <span>SPEC_ID: {model.id}</span>
                    <span className="text-primary font-bold">{model.status}</span>
                  </div>
                  <div className="h-56 mb-6 bg-tech-blue flex items-center justify-center p-6 overflow-hidden">
                    <img
                      className="object-contain h-full w-full mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                      alt={model.name}
                      src={model.image}
                    />
                  </div>
                  <h3 className="font-headline text-2xl text-charcoal uppercase mb-4 tracking-tight group-hover:text-primary transition-colors">
                    {model.name}
                  </h3>

                  {/* Tech Specs block */}
                  <div className="bg-surface-container p-4 mb-6 border-l-4 border-primary">
                    <div className="grid grid-cols-2 gap-y-3 font-mono text-[11px]">
                      {Object.entries(model.specsSummary).map(([key, val]) => (
                        <React.Fragment key={key}>
                          <div className="text-tertiary uppercase">{key}:</div>
                          <div className="text-charcoal font-bold text-right">{val}</div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto space-y-2">
                    <Link
                      href={`/products/${category.slug}/${model.slug}`}
                      className="w-full border border-charcoal py-3 font-mono text-[11px] uppercase hover:bg-charcoal hover:text-white transition-all tracking-widest flex items-center justify-center gap-2 text-center"
                    >
                      [ SYSTEM_SCHEMATICS ]
                    </Link>
                    <button
                      onClick={() => openEnquiry(`Quote Request: ${model.name}`)}
                      className="w-full bg-primary hover:bg-primary-hover text-white py-3 font-mono text-[11px] uppercase transition-all tracking-widest flex items-center justify-center gap-2 cursor-pointer font-bold"
                    >
                      [ INQUIRE_FOR_PRICING ]
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Applications Section */}
      <section className="py-20 bg-surface border-t border-charcoal/10">
        <div className="w-full px-6 md:px-20 max-w-[1440px] mx-auto">
          <div className="mb-12 border-b border-charcoal/10 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-primary text-xs uppercase tracking-widest block mb-3">
                [ 03_SYSTEM_INTEGRATION ]
              </span>
              <h2 className="font-headline text-[38px] md:text-[52px] text-charcoal uppercase tracking-tighter">
                Industries Served
              </h2>
            </div>
            <Link
              href="/applications"
              className="font-mono text-xs uppercase text-primary hover:underline mb-2 tracking-widest flex items-center gap-2 font-bold"
            >
              EXPLORE_ALL_SECTORS{" "}
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {applications.slice(0, 6).map((app) => (
              <Link
                key={app.slug}
                href={`/applications/${app.slug}`}
                className="bg-white p-6 border border-charcoal/10 hover:border-primary hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
              >
                <span className="material-symbols-outlined text-4xl text-charcoal/75 group-hover:text-primary transition-colors mb-4">
                  {app.icon}
                </span>
                <h4 className="font-headline text-lg text-charcoal uppercase tracking-tight font-bold group-hover:text-primary transition-colors">
                  {app.name}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 md:px-20 max-w-[1440px] mx-auto">
          <div className="mb-12 border-b border-charcoal/10 pb-6 text-center max-w-xl mx-auto">
            <span className="font-mono text-primary text-xs uppercase tracking-widest block mb-3">
              [ 04_FEEDBACK ]
            </span>
            <h2 className="font-headline text-[38px] md:text-[52px] text-charcoal uppercase tracking-tighter">
              Client Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-surface p-8 border border-charcoal/10 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-primary mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-sm font-bold">
                        star
                      </span>
                    ))}
                  </div>
                  <p className="font-sans text-sm text-tertiary italic leading-relaxed mb-6">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>
                <div className="border-t border-charcoal/5 pt-4 flex justify-between items-center">
                  <div>
                    <h5 className="font-headline text-lg text-charcoal uppercase font-bold">
                      {t.name}
                    </h5>
                    <span className="font-mono text-[10px] text-tertiary/75">
                      {t.company} {"//"} {t.role}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-charcoal/10">
                    format_quote
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
