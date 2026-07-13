"use client";

import React from "react";
import Link from "next/link";
import { categories } from "@/lib/data";

export default function ProductsHubPage() {
  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Page Header */}
      <section className="relative bg-surface border-b border-border py-16 tech-grid">
        <div className="adk-container">
          <div className="font-mono text-primary text-[10px] uppercase tracking-[0.3em] mb-3">
            [ EQUIPMENT_CLASSIFICATION ]
          </div>
          <h1 className="font-headline text-[42px] md:text-[56px] text-foreground uppercase tracking-tighter leading-none mb-6">
            MACHINERY CATALOGUE
          </h1>
          <p className="font-mono text-xs md:text-sm text-tertiary max-w-xl leading-relaxed">
            SYSTEM_INVENTORY: Industrial sheet metal fabrication systems, CNC cutting nodes, active
            bending centers, and high-strength welding systems.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 adk-container w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((c, idx) => (
            <div
              key={c.slug}
              className="bg-card border border-border hover:border-primary flex flex-col justify-between p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-[10px] text-primary">NODE_0{idx + 1}</span>
                  <span className="material-symbols-outlined text-4xl text-foreground/70 group-hover:text-primary transition-colors">
                    {c.icon}
                  </span>
                </div>
                <h3 className="font-headline text-2xl text-foreground uppercase mb-3 font-bold group-hover:text-primary transition-colors">
                  {c.name}
                </h3>
                <p className="font-sans text-xs text-tertiary leading-relaxed mb-6">
                  {c.tagline}
                </p>
              </div>
              
              <div className="space-y-4">
                {/* List of Models within this category */}
                <div className="border-t border-border/50 pt-4">
                  <span className="font-mono text-[9px] uppercase text-foreground/40 tracking-wider block mb-2">
                    AVAILABLE_CONFIGURATIONS:
                  </span>
                  <ul className="space-y-1.5">
                    {c.models.map((m) => (
                      <li key={m.slug}>
                        <Link
                          href={`/products/${c.slug}/${m.slug}`}
                          className="font-mono text-[10px] text-tertiary hover:text-primary flex items-center justify-between"
                        >
                          <span>- {m.name}</span>
                          <span className="text-[9px] bg-tech-blue text-foreground px-1.5 py-0.5 rounded border border-border/50 font-bold">
                            {m.status}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/products/${c.slug}`}
                  className="w-full border border-foreground py-3 font-mono text-[10px] uppercase hover:bg-charcoal hover:text-white transition-all tracking-widest flex items-center justify-center gap-1.5 text-center cursor-pointer block font-bold"
                >
                  EXPLORE_CATEGORY <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
