"use client";

import React from "react";
import Link from "next/link";
import { useEnquiry } from "@/components/EnquiryContext";

export default function CataloguesPage() {
  const { openEnquiry } = useEnquiry();

  const catalogues = [
    { name: "Industrial Pioneer Series — Exchange Table Fiber Laser", size: "4.8 MB", id: "CAT_FL_PIONEER" },
    { name: "Futuristic Laser Series — Large Format (up to 24m)", size: "5.5 MB", id: "CAT_FL_FUTURISTIC" },
    { name: "NADKpress CNC Press Brake Technical Data Sheet", size: "3.2 MB", id: "CAT_PB_NADK" },
    { name: "ADK Panel Bender Series (PB1400P–PB2500P)", size: "4.1 MB", id: "CAT_PB_PANEL" },
    { name: "Gantry CNC Plasma Cutting Machine Catalogue", size: "3.8 MB", id: "CAT_PL_GANTRY" },
    { name: "4-in-1 Fiber Laser Welding Machine Overview", size: "2.9 MB", id: "CAT_LW_4IN1" },
    { name: "PEB H-Beam Welding & SAW Gantry Line", size: "7.1 MB", id: "CAT_PEB" },
  ];

  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* Breadcrumb */}
      <div className="w-full border-b border-rule bg-background py-3">
        <div className="shell flex items-center gap-2 eyebrow text-[10px] text-muted-foreground">
          <Link href="/resources" className="hover:text-accent">
            Resources
          </Link>
          <span>/</span>
          <span className="text-foreground font-bold">Catalogues</span>
        </div>
      </div>

      {/* Header — Exact ADK Redesigned Header */}
      <section className="border-b border-rule panel">
        <div className="shell py-16 md:py-24">
          <p className="eyebrow">Catalogues & Specs</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl font-bold">
            Machinery specification sheets in print.
          </h1>
          <span className="mt-6 block h-0.5 w-10 bg-accent" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg font-sans">
            Technical schematics, dimension sheets, electrical load specs, and foundation layout drawings.
          </p>
        </div>
      </section>

      {/* Catalogues List */}
      <section className="shell py-16 md:py-24 border-b border-rule">
        <ul className="divide-y divide-rule border-y border-rule">
          {catalogues.map((cat) => (
            <li
              key={cat.id}
              className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-panel transition-colors"
            >
              <div className="min-w-0">
                <h3 className="font-display text-xl font-bold text-foreground truncate">
                  {cat.name}
                </h3>
                <span className="font-mono text-xs text-muted-foreground uppercase mt-1 block">
                  SIZE: {cat.size} · REF: {cat.id}
                </span>
              </div>

              <button
                onClick={() => openEnquiry(`Download Request: ${cat.name}`)}
                className="btn-sweep inline-flex items-center gap-2 bg-accent text-accent-foreground font-display text-xs font-bold uppercase px-6 py-3 shrink-0 cursor-pointer shadow-[var(--shadow-lift)]"
              >
                <span className="material-symbols-outlined text-sm">download</span>
                Request PDF
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
