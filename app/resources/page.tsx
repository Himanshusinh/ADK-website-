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
    <div className="flex flex-col w-full bg-surface">
      {/* Page Header */}
      <section className="relative bg-surface border-b border-border py-16 tech-grid">
        <div className="adk-container">
          <div className="font-mono text-primary text-[10px] uppercase tracking-[0.3em] mb-3">
            [ LIBRARY_ROOT ]
          </div>
          <h1 className="font-headline text-[42px] md:text-[56px] text-foreground uppercase tracking-tighter leading-none mb-6">
            TECHNICAL RESOURCE CENTER
          </h1>
          <p className="font-mono text-xs md:text-sm text-tertiary max-w-xl leading-relaxed">
            SYSTEM_NODES: Technical journals, standard specifications directories, and FAQ files.
          </p>
        </div>
      </section>

      {/* Resource Sections */}
      <section className="py-20 adk-container w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resourceCategories.map((rc) => (
            <div
              key={rc.title}
              className="bg-card border border-border p-6 flex flex-col justify-between hover:border-primary shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <span className="material-symbols-outlined text-[48px] text-foreground/70 group-hover:text-primary transition-colors mb-6">
                  {rc.icon}
                </span>
                <h3 className="font-headline text-2xl text-foreground uppercase font-bold mb-3 group-hover:text-primary transition-colors">
                  {rc.title}
                </h3>
                <p className="font-sans text-xs text-tertiary leading-relaxed mb-8">
                  {rc.desc}
                </p>
              </div>

              <Link
                href={rc.path}
                className="w-full bg-charcoal text-white font-mono text-[10px] uppercase tracking-widest py-3 border border-foreground hover:bg-primary hover:border-primary transition-all text-center block font-bold"
              >
                [ {rc.btnText} ]
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-16 bg-charcoal text-white text-center border-t border-primary/30">
        <div className="adk-container">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl uppercase tracking-tighter mb-4">
            Need Technical Assistance?
          </h2>
          <p className="font-mono text-xs text-light-gray/60 mb-8 leading-relaxed">
            Our engineering team can help with machine selection, parameter tuning guides,
            and installation planning documentation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-hover text-white font-mono text-xs uppercase tracking-widest px-10 py-5 border border-primary transition-all font-bold"
          >
            [ CONTACT_ENGINEERING ]
          </Link>
        </div>
        </div>
      </section>
    </div>
  );
}
