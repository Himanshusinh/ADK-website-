"use client";

import React from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useEnquiry } from "@/components/EnquiryContext";
import { catalogueItems } from "@/lib/catalogues";

const familyLineup = [
  { model: "Fiber laser cutting", slug: "fiber-laser-cutting", image: "/assets/adk/studio-fiber.jpg" },
  { model: "CNC plasma cutting", slug: "cnc-plasma-cutting", image: "/assets/adk/studio-plasma.jpg" },
  { model: "CNC press brake", slug: "cnc-press-brake", image: "/assets/adk/studio-press.jpg" },
  { model: "Fiber laser welding", slug: "fiber-laser-welding", image: "/assets/adk/studio-welder.jpg" },
  { model: "Panel bender", slug: "panel-bender", image: "/assets/adk/studio-panel.jpg" },
  { model: "PEB machinery", slug: "peb-machinery", image: "/assets/adk/studio-peb.jpg" },
  { model: "Hydraulic shears", slug: "shearing-machine", image: "/assets/adk/studio-shear.jpg" },
];

const news = [
  {
    date: "JANUARY 2025",
    title: "ADK installs 30 kW fiber laser cutting cell in Nagpur",
    body: "Heavy plate cutting capability expanded up to 50 mm mild steel for industrial equipment manufacturers.",
  },
  {
    date: "NOVEMBER 2024",
    title: "New 24-meter table machine bed completed & delivered",
    body: "Custom fabrication for extra-large structural plates engineered for shipbuilding and infrastructure projects.",
  },
  {
    date: "SEPTEMBER 2024",
    title: "Ten service hubs now operational across India",
    body: "Dedicated service engineers and spare parts hubs across Ahmedabad, Pune, Nashik, Nagpur, Kolhapur, Indore, Jaipur, Kolkata, Bhopal, and Hubli.",
  },
];

export default function ResourcesPage() {
  const { openEnquiry } = useEnquiry();

  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* Page Header — Exact ADK Redesigned Header */}
      <section className="border-b border-rule panel">
        <div className="shell py-16 md:py-24">
          <p className="eyebrow">Resources</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl font-bold">
            Catalogues, photographs and what is happening at the works.
          </h1>
          <span className="mt-6 block h-0.5 w-10 bg-accent" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg font-sans">
            Everything a purchase team usually asks for before a site visit.
          </p>
        </div>
      </section>

      {/* Catalogues Section */}
      <section className="shell py-16 md:py-24 border-b border-rule">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Catalogues</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">Specifications in print.</h2>
          </div>
          <Link
            href="/resources/catalogues"
            className="link-underline font-mono text-xs uppercase tracking-widest font-bold text-accent"
          >
            View all catalogues →
          </Link>
        </div>
        <ul className="mt-10 divide-y divide-rule border-y border-rule">
          {catalogueItems.slice(0, 6).map((c) => (
            <li
              key={c.id}
              className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-7"
            >
              <div className="min-w-0">
                <p className="truncate font-display text-xl font-bold">{c.name}</p>
                <p className="text-sm text-muted-foreground font-sans mt-1">
                  {c.size} · PDF
                  {c.brochureAlias ? ` · ${c.brochureAlias}` : ""}
                </p>
              </div>
              <button
                type="button"
                onClick={() => openEnquiry(`Download Request: ${c.name}`)}
                className="arrow-slide inline-flex shrink-0 items-center gap-2 border border-rule px-5 py-2.5 text-sm font-semibold transition-colors duration-500 hover:border-foreground hover:text-accent cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">download</span>
                Request PDF
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Machine Gallery Section */}
      <section className="border-b border-rule panel py-16 md:py-24">
        <div className="shell">
          <p className="eyebrow">Gallery</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">The families we build.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {familyLineup.map((item, i) => (
              <Reveal key={item.slug} delay={(i % 3) * 80} className="h-full">
                <Link
                  href={`/products/${item.slug}`}
                  className="arrow-slide group hover-lift flex flex-col panel h-full border border-rule transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden p-6 bg-white flex items-center justify-center border-b border-rule">
                    <img
                      src={item.image}
                      alt={item.model}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="h-full w-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-6 pt-6 pb-7">
                    <p className="eyebrow">ADK series</p>
                    <h3 className="mt-2.5 font-display text-xl leading-tight transition-colors duration-500 group-hover:text-accent font-bold">
                      {item.model}
                    </h3>
                    <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-foreground group-hover:text-accent">
                      Learn more
                      <span className="arrow">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="shell py-16 md:py-24 border-b border-rule">
        <p className="eyebrow">News</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">From ADK Engineering.</h2>
        <ul className="mt-10 divide-y divide-rule border-y border-rule">
          {news.map((n) => (
            <li key={n.title} className="grid gap-2 py-8 md:grid-cols-[10rem_1fr] md:gap-10">
              <p className="font-mono text-sm text-muted-foreground">{n.date}</p>
              <div>
                <h3 className="font-display text-xl font-bold">{n.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground font-sans leading-relaxed">{n.body}</p>
              </div>
            </li>
          ))}
        </ul>
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
