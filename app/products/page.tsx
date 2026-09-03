"use client";

import React, { useState } from "react";
import Link from "next/link";
import { categories } from "@/lib/data";
import { useEnquiry } from "@/components/EnquiryContext";
import Reveal from "@/components/Reveal";

const seriesMap: Record<string, string> = {
  "fiber-laser-cutting": "FL series",
  "cnc-plasma-cutting": "PL series",
  "cnc-press-brake": "PB series",
  "fiber-laser-welding": "LW series",
  "panel-bender": "PB-P series",
  "peb-machinery": "PEB line",
  "shearing-machine": "SH series",
  "spares-consumables": "Spares",
};

const categoryTitleMap: Record<string, string> = {
  "fiber-laser-cutting": "FIBER LASER CUTTING MACHINE",
  "cnc-plasma-cutting": "CNC PLASMA CUTTING MACHINE",
  "cnc-press-brake": "CNC PRESS BRAKE MACHINE",
  "panel-bender": "PANEL BENDER MACHINE",
  "fiber-laser-welding": "LASER WELDING MACHINE",
  "peb-machinery": "PEB MACHINERY",
  "shearing-machine": "HYDRAULIC SHEARING MACHINE",
  "spares-consumables": "SPARES & CONSUMABLES",
};

const categorySummaryMap: Record<string, string> = {
  "fiber-laser-cutting": "Exchange-table, single-pallet, tube, and tube+plate lasers from 1 kW to 60 kW.",
  "cnc-plasma-cutting": "Gantry, table, and portable CNC plasma with Hypertherm sources.",
  "cnc-press-brake": "40 T to 800 T, 4 / 5 / 7 / 9 axis, servo main drive and DSP laser guard.",
  "fiber-laser-welding": "4-in-1 welding, cleaning, cutting and wire feeding from one source.",
  "panel-bender": "Universal-die panel benders — 0.2 seconds per bend, no tooling changes.",
  "peb-machinery": "H-beam welding and SAW gantry systems for pre-engineered buildings.",
  "shearing-machine": "Hydraulic shears for plate preparation and edge trimming.",
  "spares-consumables": "High-durability nozzles, focusing lenses, protective windows, and consumables.",
};

const categoryImageMap: Record<string, string> = {
  "fiber-laser-cutting": "/ADK product images/fiber laser cutting machine/ChatGPT Image Aug 26, 2026, 12_02_49 PM.png",
  "cnc-plasma-cutting": "/ADK product images/CNC plazma cutting machine/a2afb5aa-7812-4b39-9366-fa29f01a37a0.png",
  "cnc-press-brake": "/ADK product images/CNC Press brake machine/5c7c27c6-c60a-40f0-950b-b929bf24b7b9.png",
  "fiber-laser-welding": "/ADK product images/Fiber Laser Welding machine/aa70e19f-c67a-435d-8b31-b0c10be39751.png",
  "panel-bender": "/ADK product images/Panel Bender/6ccbcbe7-e9c0-469a-9c5d-1c31c2d1f83b.png",
  "peb-machinery": "/ADK product images/PEB Machinery/11449a4d-ca3f-4e66-878a-1ddfea8f62ed.png",
  "shearing-machine": "/ADK product images/Shearing Machine/7c87af1d-c7ab-4576-a291-651722f272d7.png",
  "spares-consumables": "/ADK product images/Spares & Consumables/bcde404d-733c-47eb-bb15-f9642b519dbc.png",
};

export default function ProductsIndexPage() {
  const { openEnquiry } = useEnquiry();
  const [activeFilter, setActiveFilter] = useState("All machines");

  const filters = [
    "All machines",
    ...categories.map((c) => seriesMap[c.slug] || c.name),
  ];

  const shownCategories =
    activeFilter === "All machines"
      ? categories
      : categories.filter(
          (c) => (seriesMap[c.slug] || c.name) === activeFilter
        );

  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* Page Header — Exact ADK Redesigned Header */}
      <section className="border-b border-rule panel">
        <div className="shell py-16 md:py-24">
          <p className="eyebrow">Machines</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl font-bold">
            Eight machine families, sized for the work you already have.
          </h1>
          <span className="mt-6 block h-0.5 w-10 bg-accent" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg font-sans">
            Fiber laser (FL series), CNC plasma (PL series), CNC press brakes (PB series), laser welding (LW series), panel benders, PEB lines, shears and genuine spares. Tell us the material and thickness and we will quote the right machine.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Product Grid */}
      <section className="shell py-16 md:py-24 border-b border-rule">
        <div className="-mx-5 mb-12 overflow-x-auto px-5">
          <div className="flex min-w-max gap-8 border-b border-rule">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className={`relative pb-4 text-sm font-medium whitespace-nowrap transition-colors duration-500 cursor-pointer ${
                  activeFilter === f
                    ? "text-foreground font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
                <span
                  className={`absolute inset-x-0 -bottom-px h-0.5 origin-left bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    activeFilter === f ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shownCategories.map((c, i) => {
            const seriesTag = seriesMap[c.slug] || "ADK series";
            const cardTitle = categoryTitleMap[c.slug] || c.name;
            const cardSummary = categorySummaryMap[c.slug] || c.tagline || c.description;
            const img = categoryImageMap[c.slug] || "/assets/adk/studio-fiber.jpg";

            return (
              <Reveal key={c.slug} delay={(i % 3) * 90} className="h-full">
                <Link
                  href={`/products/${c.slug}`}
                  className="arrow-slide group hover-lift flex flex-col panel h-full border border-rule transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden p-6 bg-white flex items-center justify-center border-b border-rule">
                    <img
                      src={img}
                      alt={cardTitle}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="h-full w-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-6 pt-6 pb-7">
                    <p className="eyebrow">{seriesTag}</p>
                    <h3 className="mt-2.5 font-display text-xl leading-tight transition-colors duration-500 group-hover:text-accent font-bold">
                      {cardTitle}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground font-sans line-clamp-3">
                      {cardSummary}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-accent">
                      Learn more
                      <span className="arrow">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Quote CTA Banner */}
      <section className="border-y border-rule bg-steel text-steel-foreground">
        <div className="shell grid gap-10 py-16 md:grid-cols-[1.4fr_auto] md:items-end md:py-24">
          <div>
            <h2 className="max-w-2xl font-display text-3xl leading-tight md:text-4xl font-bold">
              Tell us what you cut. We will quote the right machine.
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-steel-muted font-sans">
              Send the material and thickness you work with and we will come back with a machine size, a price and a delivery date.
            </p>
          </div>
          <button
            onClick={() => openEnquiry("General Machinery Enquiry")}
            className="btn-sweep inline-block bg-accent px-7 py-4 text-center font-display text-base font-bold tracking-tight text-accent-foreground cursor-pointer shadow-[var(--shadow-lift)]"
          >
            Request a quote
          </button>
        </div>
      </section>
    </div>
  );
}
