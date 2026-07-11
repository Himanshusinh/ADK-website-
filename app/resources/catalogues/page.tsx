"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function CataloguesPage() {
  const [downloading, setDownloading] = useState<string | null>(null);

  const catalogues = [
    { name: "ADK Fiber Laser X Series Technical Catalog", size: "4.8 MB", id: "CAT_FL_X" },
    { name: "ADK CNC Press Brake P-Series Spec Sheet", size: "3.2 MB", id: "CAT_PB_P" },
    { name: "ADK Intelligent Panel Bender Center Overview", size: "5.5 MB", id: "CAT_IPB" },
    { name: "ADK Submerged Arc Beam Assembly Line Layout", size: "7.1 MB", id: "CAT_PEB" },
    { name: "ADK Handheld 3-in-1 Laser Welder Operator Manual", size: "2.9 MB", id: "CAT_LW" },
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
    <div className="flex flex-col w-full bg-white animate-fade-in">
      {/* Breadcrumb */}
      <div className="w-full bg-surface-container py-3 px-6 md:px-20 border-b border-charcoal/5">
        <div className="max-w-[1440px] mx-auto flex items-center gap-2 font-mono text-[10px] uppercase text-tertiary">
          <Link href="/resources" className="hover:text-primary transition-colors">
            Resources
          </Link>
          <span>/</span>
          <span className="text-charcoal font-bold">Catalogues</span>
        </div>
      </div>

      {/* Header */}
      <section className="relative bg-surface border-b border-charcoal/10 py-16 px-6 md:px-20 tech-grid">
        <div className="max-w-[1440px] mx-auto">
          <div className="font-mono text-primary text-[10px] uppercase tracking-[0.3em] mb-3">
            [ DOWNLOAD_DIRECTORY ]
          </div>
          <h1 className="font-headline text-[38px] md:text-[50px] text-charcoal uppercase tracking-tighter leading-none mb-6">
            MACHINERY CATALOGUES & SCHEMATICS
          </h1>
          <p className="font-mono text-xs md:text-sm text-tertiary max-w-xl leading-relaxed">
            SYSTEM_FILES: Certified technical schematics, dimension vectors, and machine weight metrics files.
          </p>
        </div>
      </section>

      {/* Catalogues List */}
      <section className="py-20 px-6 md:px-20 max-w-[1440px] mx-auto w-full">
        <div className="border border-charcoal/15 divide-y divide-charcoal/15">
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
                  <h3 className="font-headline text-lg md:text-xl text-charcoal uppercase font-bold">
                    {cat.name}
                  </h3>
                  <span className="font-mono text-[9px] text-tertiary uppercase">
                    FILE_SIZE: {cat.size} &nbsp;//&nbsp; REF: {cat.id}.PDF
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleDownload(cat.id)}
                disabled={downloading !== null}
                className="bg-charcoal text-white font-mono text-[10px] uppercase tracking-widest px-6 py-3 border border-charcoal hover:bg-primary hover:border-primary disabled:bg-tertiary transition-all text-center font-bold cursor-pointer shrink-0"
              >
                {downloading === cat.id ? "[ DOWNLOADING... ]" : "[ DOWNLOAD.PDF ]"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
