"use client";

import React from "react";
import Link from "next/link";
import { applications } from "@/lib/data";
import { applicationHeroPath, getApplicationHeroFallback } from "@/lib/media";
import OptionalImage from "@/components/OptionalImage";

export default function ApplicationsHubPage() {
  const hubHero = applicationHeroPath("_hub");

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Page Header — 21:9 cinematic band (clamped for mobile / ultrawide) */}
      <section className="relative w-full overflow-hidden border-b border-border h-[clamp(300px,42.857vw,560px)]">
        <div className="absolute inset-0">
          <OptionalImage
            src={hubHero}
            fallback={getApplicationHeroFallback()}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            placeholderLabel="Industries Served"
            containerClassName="absolute inset-0 h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/15 to-transparent" />
        </div>
        <div className="relative adk-container flex h-full items-center py-10 md:py-12">
          <div className="max-w-2xl min-w-0">
            <div className="mb-3 flex items-center gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/25 bg-white/10 backdrop-blur-sm"
                aria-hidden
              >
                <span className="material-symbols-outlined text-[22px] text-primary leading-none">
                  category
                </span>
              </div>
              <p className="font-ui text-label uppercase tracking-[0.14em] text-primary">
                Industry catalogue
              </p>
            </div>
            <h1 className="font-display text-heading text-white uppercase tracking-display leading-[1.05] mb-4">
              Industries served
            </h1>
            <p className="font-body text-small md:text-body text-white/80 max-w-xl leading-relaxed mb-6">
              Custom machine solutions, calibration settings, and cutting parameters tuned to each
              industrial sector.
            </p>
            <p className="font-ui text-label uppercase tracking-wider text-white/55">
              {applications.length} sectors mapped
            </p>
          </div>
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
                <h3 className="font-display text-card-title text-foreground uppercase font-bold tracking-display group-hover:text-primary transition-colors">
                  {app.name}
                </h3>
                <p className="font-ui text-label text-tertiary mt-2 line-clamp-2 leading-relaxed">
                  {app.tagline}
                </p>
              </div>

              <div className="font-ui text-label text-primary mt-4 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                SYSTEM_DETAILS <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
