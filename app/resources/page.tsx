"use client";

import React from "react";
import Link from "next/link";

export default function ResourcesHubPage() {
  const resourceCategories = [
    {
      title: "Technical Blog",
      desc: "In-depth engineering reviews, laser calibration papers, and metal bending optimization guides.",
      icon: "menu_book",
      path: "/resources/blog",
      btnText: "READ_ARTICLES",
    },
    {
      title: "Machinery Catalogues",
      desc: "Brochures, gantry dimension sheets, and mechanical footprint layout PDF files.",
      icon: "download_for_offline",
      path: "/resources/catalogues",
      btnText: "DOWNLOAD_CATALOGUES",
    },
    {
      title: "FAQ & Support",
      desc: "Answers to common installation setups, lead times, power requisites, and post-sales SLA protocols.",
      icon: "quiz",
      path: "/resources/faq",
      btnText: "RESOLVE_QUESTIONS",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Page Header */}
      <section className="relative bg-surface border-b border-charcoal/10 py-16 px-6 md:px-20 tech-grid">
        <div className="max-w-[1440px] mx-auto">
          <div className="font-mono text-primary text-[10px] uppercase tracking-[0.3em] mb-3">
            [ LIBRARY_ROOT ]
          </div>
          <h1 className="font-headline text-[42px] md:text-[56px] text-charcoal uppercase tracking-tighter leading-none mb-6">
            TECHNICAL RESOURCE CENTER
          </h1>
          <p className="font-mono text-xs md:text-sm text-tertiary max-w-xl leading-relaxed">
            SYSTEM_NODES: Technical journals, standard specifications directories, and FAQ files.
          </p>
        </div>
      </section>

      {/* Resource Sections */}
      <section className="py-20 px-6 md:px-20 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resourceCategories.map((rc) => (
            <div
              key={rc.title}
              className="bg-white border border-charcoal/10 p-6 flex flex-col justify-between hover:border-primary shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <span className="material-symbols-outlined text-[48px] text-charcoal/70 group-hover:text-primary transition-colors mb-6">
                  {rc.icon}
                </span>
                <h3 className="font-headline text-2xl text-charcoal uppercase font-bold mb-3 group-hover:text-primary transition-colors">
                  {rc.title}
                </h3>
                <p className="font-sans text-xs text-tertiary leading-relaxed mb-8">
                  {rc.desc}
                </p>
              </div>

              <Link
                href={rc.path}
                className="w-full bg-charcoal text-white font-mono text-[10px] uppercase tracking-widest py-3 border border-charcoal hover:bg-primary hover:border-primary transition-all text-center block font-bold"
              >
                [ {rc.btnText} ]
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
