"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function CataloguesPage() {
  const [downloading, setDownloading] = useState<string | null>(null);

  const catalogues = [
    { name: "Industrial Pioneer Series — Exchange Table Fiber Laser", size: "4.8 MB", id: "CAT_FL_PIONEER" },
    { name: "Futuristic Laser Series — Large Format (up to 24m)", size: "5.5 MB", id: "CAT_FL_FUTURISTIC" },
    { name: "NADKpress CNC Press Brake Technical Data Sheet", size: "3.2 MB", id: "CAT_PB_NADK" },
    { name: "ADK Panel Bender Series (PB1400P–PB2500P)", size: "4.1 MB", id: "CAT_PB_PANEL" },
    { name: "Gantry CNC Plasma Cutting Machine Catalogue", size: "3.8 MB", id: "CAT_PL_GANTRY" },
    { name: "4-in-1 Fiber Laser Welding Machine Overview", size: "2.9 MB", id: "CAT_LW_4IN1" },
    { name: "PEB H-Beam Welding & SAW Gantry Line", size: "7.1 MB", id: "CAT_PEB" },
  ];

  const handleDownload = (id: string) => {
    setDownloading(id);
    setTimeout(() => {
      setDownloading(null);
      // Simulate file download by opening a blank page or similar
      alert(`Download simulated successfully for ${id}.pdf!`);
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full bg-surface animate-fade-in">
      {/* Breadcrumb */}
      <div className="w-full bg-surface-container py-3 border-b border-border/50">
        <div className="adk-container flex items-center gap-2 font-ui text-label uppercase text-tertiary">
          <Link href="/resources" className="hover:text-primary transition-colors">
            Resources
          </Link>
          <span>/</span>
          <span className="text-foreground font-bold">Catalogues</span>
        </div>
      </div>

      {/* Header */}
      <section className="relative bg-surface border-b border-border py-16 tech-grid">
        <div className="adk-container">
          <h1 className="font-display text-heading text-foreground uppercase tracking-display leading-none mb-6">
            Machinery Catalogues
          </h1>
          <p className="font-body text-small text-tertiary max-w-xl leading-relaxed">
            Technical schematics, dimension sheets, and machine documentation.
          </p>
        </div>
      </section>

      {/* Catalogues List */}
      <section className="py-20 adk-container w-full">
        <div className="border border-border divide-y divide-border">
          {catalogues.map((cat) => (
            <div
              key={cat.id}
              className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-tech-blue/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-4xl text-primary shrink-0 mt-1">
                  picture_as_pdf
                </span>
                <div>
                  <h3 className="font-display text-card-title text-foreground uppercase font-bold">
                    {cat.name}
                  </h3>
                  <span className="font-ui text-label text-tertiary uppercase">
                    Size: {cat.size} · Ref: {cat.id}
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleDownload(cat.id)}
                disabled={downloading !== null}
                className="bg-charcoal text-white font-ui text-label tracking-ui px-6 py-3 border border-foreground hover:bg-primary hover:border-primary disabled:bg-tertiary transition-all text-center font-bold cursor-pointer shrink-0"
              >
                {downloading === cat.id ? "Downloading…" : "Download PDF"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Download Info */}
      <section className="py-12 bg-surface border-t border-border">
        <div className="adk-container">
          <p className="font-body text-small text-tertiary leading-relaxed max-w-2xl">
            All catalogues include dimensional schematics, weight metrics, power requirements,
            and foundation layout drawings. For custom configurations not listed here,
            contact our engineering team for a tailored specification document.
          </p>
        </div>
      </section>
    </div>
  );
}
