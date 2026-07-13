"use client";

import React from "react";
import Link from "next/link";
import { applications } from "@/lib/data";

export default function ApplicationsHubPage() {
  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Page Header */}
      <section className="relative bg-surface border-b border-border py-16 tech-grid">
        <div className="adk-container">
          <div className="font-mono text-primary text-[10px] uppercase tracking-[0.3em] mb-3">
            [ SYSTEM_INTEGRATION_PROTOCOLS ]
          </div>
          <h1 className="font-headline text-[42px] md:text-[56px] text-foreground uppercase tracking-tighter leading-none mb-6">
            INDUSTRIES SERVED
          </h1>
          <p className="font-mono text-xs md:text-sm text-tertiary max-w-xl leading-relaxed">
            SYSTEM_INTEGRATION: Highly customized machine solutions, calibration settings, and cutting
            parameters optimized for specific industrial applications.
          </p>
        </div>
      </section>

      {/* Grid of 19 Industries */}
      <section className="py-20 adk-container w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {applications.map((app) => (
            <Link
              key={app.slug}
              href={`/applications/${app.slug}`}
              className="bg-card border border-border p-6 flex flex-col justify-between items-center text-center shadow-sm hover:border-primary hover:shadow-lg transition-all duration-300 group min-h-[180px]"
            >
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-4xl text-foreground/70 group-hover:text-primary transition-colors mb-4">
                  {app.icon}
                </span>
                <h3 className="font-headline text-lg text-foreground uppercase font-bold tracking-tight group-hover:text-primary transition-colors">
                  {app.name}
                </h3>
                <p className="font-mono text-[9px] text-tertiary mt-2 line-clamp-2 leading-relaxed">
                  {app.tagline}
                </p>
              </div>
              
              <div className="font-mono text-[9px] text-primary mt-4 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                SYSTEM_DETAILS <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
