"use client";

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { useEnquiry } from "@/components/EnquiryContext";
import Reveal from "@/components/Reveal";
import ClientLogoMarquee from "@/components/ClientLogoMarquee";
import { clientMarqueeRowA, clientMarqueeRowB } from "@/lib/data";

/* —————————————————————————————————————————————————————————————————————————— */
/* Data Definitions matching adk-engineering-site                            */
/* —————————————————————————————————————————————————————————————————————————— */

const productCategories = [
  {
    id: "sheet-laser",
    label: "Sheet laser",
    slug: "fiber-laser-cutting",
    title: "Fiber laser cutting",
    blurb:
      "Exchange-table, single-pallet and 24 m plate lasers to 60 kW. ±0.03 mm, 100 m/min, RAYCUS / IPG / MAX sources.",
    lineup: "hero",
  },
  {
    id: "plasma",
    label: "Plasma",
    slug: "cnc-plasma-cutting",
    title: "CNC plasma cutting",
    blurb:
      "Gantry, table and portable systems with Hypertherm sources for thick plate and structural steel.",
    lineup: "hero",
  },
  {
    id: "press-brake",
    label: "Press brake",
    slug: "cnc-press-brake",
    title: "CNC press brake",
    blurb: "40 T to 800 T. Servo main drive, DSP laser guard, mechanical crowning, 4 to 9 axis.",
    lineup: "hero",
  },
  {
    id: "welding",
    label: "Welding",
    slug: "fiber-laser-welding",
    title: "Fiber laser welding",
    blurb: "4-in-1 handheld fiber welding: weld, clean, cut and wire feed from one source.",
    lineup: "forming",
  },
  {
    id: "panel-bender",
    label: "Panel bender",
    slug: "panel-bender",
    title: "Panel benders",
    blurb: "Universal die, 0.2 seconds per bend, no tooling changes. Panels to 2500 mm.",
    lineup: "forming",
  },
  {
    id: "peb",
    label: "PEB line",
    slug: "peb-machinery",
    title: "PEB machinery",
    blurb: "H-beam welding and SAW gantry systems for pre-engineered buildings.",
    lineup: "forming",
  },
  {
    id: "shearing",
    label: "Shearing",
    slug: "shearing",
    title: "Hydraulic shears",
    blurb: "Plate preparation and edge trimming before the laser or the brake.",
    lineup: "shear",
  },
];

const heroLineup = [
  {
    model: "Fiber laser cutting",
    note: "1 kW – 60 kW",
    slug: "fiber-laser-cutting",
    image: "/assets/adk/studio-fiber.jpg",
  },
  {
    model: "CNC plasma cutting",
    note: "Gantry · Hypertherm",
    slug: "cnc-plasma-cutting",
    image: "/assets/adk/studio-plasma.jpg",
  },
  {
    model: "CNC press brake",
    note: "40 T – 800 T",
    slug: "cnc-press-brake",
    image: "/assets/adk/studio-press.jpg",
  },
];

const formingLineup = [
  {
    model: "Fiber laser welding",
    note: "4-in-1 weld / clean / cut",
    slug: "fiber-laser-welding",
    image: "/assets/adk/studio-welder.jpg",
  },
  {
    model: "Panel bender",
    note: "0.2 s per bend",
    slug: "panel-bender",
    image: "/assets/adk/studio-panel.jpg",
  },
  {
    model: "PEB machinery",
    note: "H-beam welding and SAW gantry",
    slug: "peb-machinery",
    image: "/assets/adk/studio-peb.jpg",
  },
];

const shearCard = {
  model: "Hydraulic shears",
  note: "Plate preparation",
  slug: "shearing",
  image: "/assets/adk/studio-shear.jpg",
};

const customerCases = [
  {
    company: "ISRO",
    mark: "ISRO",
    city: "Government sector",
    headline: "Launch-vehicle assembly floors running ADK lasers on ground-support parts",
    image: "/assets/case-cutting-bay.jpg",
  },
  {
    company: "Bajaj Steel Industries",
    mark: "BAJAJ STEEL",
    city: "Nagpur",
    headline: "A steel major running ADK cutting and forming in production, not on a demo stand",
    image: "/assets/case-factory-dusk.jpg",
  },
  {
    company: "ADK 30 kW cell",
    mark: "30 kW",
    city: "India, 2023",
    headline: "India’s first 30 kW fiber laser cutting machine, installed by ADK",
    image: "/assets/case-heavy-plate.jpg",
  },
  {
    company: "24 m table",
    mark: "24000 mm",
    city: "Santej works",
    headline: "First order for a 3000 × 24000 mm table — plate that does not fit a standard bed",
    image: "/assets/case-furniture-shop.jpg",
  },
];

const capabilities = [
  { id: "cnc", title: "CNC control unit", image: "/assets/tech-cnc.jpg" },
  { id: "laser-head", title: "Laser cutting head", image: "/assets/tech-laser-head.jpg" },
  { id: "precision", title: "Precision ±0.03 mm", image: "/assets/tech-precision.jpg" },
  { id: "gantry", title: "Gantry structure", image: "/assets/tech-gantry.jpg" },
  { id: "plasma-torch", title: "Plasma torch", image: "/assets/tech-plasma-torch.jpg" },
  { id: "thick-plate", title: "Thick plate ready", image: "/assets/tech-thick-plate.jpg" },
  { id: "servo", title: "Servo main drive", image: "/assets/tech-servo.jpg" },
  { id: "backgauge", title: "Multi-axis backgauge", image: "/assets/tech-backgauge.jpg" },
  { id: "dsp-guard", title: "DSP laser guard", image: "/assets/tech-dsp-guard.jpg" },
];

const whyChoose = [
  {
    title: "Experienced service team",
    body: "Engineers with 16+ years in laser calibration, CNC controls and hydraulic press-brake tuning.",
  },
  {
    title: "Always deliver more",
    body: "On-site training and post-installation calibration included with every machine.",
  },
  {
    title: "24/7 online support",
    body: "Remote diagnostics at service@adkeng.com and +91 95100 41629.",
  },
  {
    title: "On-time delivery",
    body: "Lead times from order confirmation to ex-factory dispatch, stated up front.",
  },
  {
    title: "PAN India presence",
    body: "Eight offices: Ahmedabad, Pune, Nashik, Nagpur, Kolhapur, Indore, Kolkata, Bhopal.",
  },
  {
    title: "After-sales as capital",
    body: "Installation, training, spares and upgrades — your machine is your capital.",
  },
];

const stats = [
  { value: "750+", n: 750, suffix: "+", label: "Customers across India" },
  { value: "550+", n: 550, suffix: "+", label: "Installations on the floor" },
  { value: "16+", n: 16, suffix: "+", label: "Years of operating experience" },
  { value: "8", n: 8, suffix: "", label: "Branch offices with service engineers" },
];

/* —————————————————————————————————————————————————————————————————————————— */
/* Main Home Component                                                        */
/* —————————————————————————————————————————————————————————————————————————— */

export default function Home() {
  const { openEnquiry } = useEnquiry();

  /* Product Showcase Tab state */
  const [activeTab, setActiveTab] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const category = productCategories[activeTab];
  const cards =
    category?.lineup === "hero"
      ? heroLineup
      : category?.lineup === "forming"
        ? formingLineup
        : [shearCard];

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const place = () => {
      const btn = list.querySelectorAll("button")[activeTab] as HTMLButtonElement | undefined;
      if (!btn) return;
      setIndicator({ left: btn.offsetLeft, width: btn.offsetWidth });
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [activeTab]);

  /* Customer Cases Carousel state */
  const [caseIndex, setCaseIndex] = useState(0);
  const currentCase = customerCases[caseIndex];

  /* Tech Capability Carousel state */
  const [techIndex, setTechIndex] = useState(0);

  /* Presence KPI active state */
  const [hotKpi, setHotKpi] = useState(1);

  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* —————————————————————————————————————————————————————————————————— */}
      {/* 1. HERO SECTION                                                    */}
      {/* —————————————————————————————————————————————————————————————————— */}
      <section className="relative isolate overflow-hidden bg-steel text-steel-foreground border-b border-rule">
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-65"
          src="/assets/hero-machine.jpg"
          alt="ADK Machine Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-steel via-steel/55 to-steel/15 md:bg-gradient-to-r md:from-steel md:via-steel/50 md:to-transparent" />
        <div className="shell relative flex min-h-[82svh] flex-col justify-end py-16 md:min-h-[90svh] md:py-24 z-10">
          <p className="eyebrow text-accent font-mono text-xs tracking-[0.18em]">
            Ahmedabad · since 2015
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.6rem] leading-[0.98] md:text-7xl font-bold text-steel-foreground tracking-tight">
            Crafting precision.
            <br />
            Shaping tomorrow.
          </h1>
          <p className="mt-6 max-w-xl text-base text-steel-muted md:text-lg font-sans leading-relaxed">
            Fiber laser cutting to 60 kW, CNC plasma, NADKpress brakes, 4-in-1 welding, panel
            benders and PEB lines. Built at Santej. Serviced from eight offices.
          </p>
          <ul className="mt-6 space-y-1 text-sm text-steel-muted font-sans">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>Fiber laser cutting up to 60 kW</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>CNC plasma systems · Hypertherm</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>Press brakes and panel benders</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>550+ installations across India</span>
            </li>
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <button
              onClick={() => openEnquiry("General Machinery Inquiry")}
              className="btn-sweep bg-accent px-7 py-4 font-display text-base font-bold tracking-tight text-accent-foreground shadow-[var(--shadow-lift)] cursor-pointer"
            >
              Request a quote
            </button>
            <Link
              href="/products"
              className="border border-white/30 px-7 py-4 font-display text-base font-bold tracking-tight text-steel-foreground transition-colors duration-300 hover:border-white hover:text-white text-center"
            >
              View specs
            </Link>
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————————— */}
      {/* 2. PRODUCT SHOWCASE SECTION (Category Tabs & Studio Machine Cards) */}
      {/* —————————————————————————————————————————————————————————————————— */}
      <section className="border-b border-rule bg-background">
        <div className="shell py-16 md:py-24">
          <div
            ref={listRef}
            className="relative flex gap-7 overflow-x-auto border-b border-rule pb-4 md:gap-10"
          >
            {productCategories.map((cat, i) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(i)}
                className={`shrink-0 text-sm font-medium transition-colors duration-300 cursor-pointer ${i === activeTab ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {cat.label}
              </button>
            ))}
            <span
              className="tab-indicator"
              style={{ left: indicator.left, width: indicator.width }}
            />
          </div>

          {category && (
            <Reveal key={`${category.id}-band`} className="mt-8">
              <div className="flex flex-col gap-6 bg-steel px-8 py-8 text-steel-foreground md:flex-row md:items-end md:justify-between md:px-10 md:py-9">
                <div className="max-w-2xl">
                  <h2 className="font-display text-3xl leading-tight md:text-4xl font-bold">
                    {category.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-steel-muted md:text-base font-sans">
                    {category.blurb}
                  </p>
                </div>
                <Link
                  href={`/products/${category.slug}`}
                  className="link-underline inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-accent hover:text-white font-display"
                >
                  Learn more
                  <span className="arrow">→</span>
                </Link>
              </div>
            </Reveal>
          )}

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, i) => (
              <Reveal key={`${category.id}-${card.slug}-${i}`} delay={i * 80} className="h-full">
                <Link
                  href={`/products/${card.slug}`}
                  className="group relative block aspect-16/10 overflow-hidden bg-card border border-rule hover-lift"
                >
                  <p className="absolute top-0 left-0 z-10 px-6 pt-6 text-sm font-display font-semibold text-muted-foreground transition-colors duration-500 group-hover:text-accent">
                    {card.model}
                    <span className="mt-2 block h-px w-8 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                  </p>
                  <div className="h-full w-full p-6 pt-14 pb-8 flex items-center justify-center bg-white border-b border-rule">
                    <img
                      src={card.image}
                      alt={card.model}
                      width={1600}
                      height={900}
                      className="h-full w-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                  <span className="absolute right-5 bottom-5 z-10 inline-flex items-center gap-2 text-sm font-semibold text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more
                    <span className="arrow">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————————— */}
      {/* 3. OUTSTANDING CUSTOMER CASES CAROUSEL                             */}
      {/* —————————————————————————————————————————————————————————————————— */}
      <section className="overflow-hidden py-16 md:py-24 border-b border-rule bg-card">
        <div className="shell">
          <div className="mb-4 flex justify-center gap-3">
            <button
              type="button"
              className="carousel-arrow cursor-pointer"
              aria-label="Previous case"
              onClick={() =>
                setCaseIndex((prev) => (prev - 1 + customerCases.length) % customerCases.length)
              }
            >
              <span className="material-symbols-outlined text-lg">chevron_left</span>
            </button>
            <button
              type="button"
              className="carousel-arrow cursor-pointer"
              aria-label="Next case"
              onClick={() => setCaseIndex((prev) => (prev + 1) % customerCases.length)}
            >
              <span className="material-symbols-outlined text-lg">chevron_right</span>
            </button>
          </div>
          <Reveal className="text-center">
            <h2 className="font-display text-3xl leading-tight md:text-5xl font-bold">
              Outstanding customer cases
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground font-sans">
              Machines that earn their keep after the first year — including work at ISRO and Bajaj Steel.
            </p>
          </Reveal>

          {currentCase && (
            <div className="mt-12 max-w-5xl mx-auto">
              <article className="grid min-h-[22rem] overflow-hidden bg-background border border-rule md:grid-cols-2 md:min-h-[26rem] shadow-sm">
                <div className="relative min-h-[14rem] overflow-hidden md:min-h-0 bg-steel">
                  <img
                    src={currentCase.image}
                    alt={currentCase.company}
                    width={1600}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center px-8 py-10 md:px-12">
                  <p className="font-display text-sm tracking-[0.18em] text-accent font-bold">
                    {currentCase.mark}
                  </p>
                  <h3 className="mt-6 font-display text-2xl leading-snug md:text-3xl font-bold">
                    "{currentCase.headline}"
                  </h3>
                  <p className="mt-4 text-sm text-muted-foreground font-sans">{currentCase.city}</p>
                  <Link
                    href="/applications"
                    className="link-underline mt-10 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent font-display"
                  >
                    Learn more
                    <span className="arrow">→</span>
                  </Link>
                </div>
              </article>
            </div>
          )}
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————————— */}
      {/* 4. CORE TECHNOLOGIES CAROUSEL                                       */}
      {/* —————————————————————————————————————————————————————————————————— */}
      <section className="border-b border-rule py-16 md:py-24 bg-background">
        <div className="shell">
          <div className="mb-4 flex justify-center gap-3">
            <button
              type="button"
              className="carousel-arrow cursor-pointer"
              aria-label="Previous capability"
              onClick={() =>
                setTechIndex((prev) => (prev - 1 + capabilities.length) % capabilities.length)
              }
            >
              <span className="material-symbols-outlined text-lg">chevron_left</span>
            </button>
            <button
              type="button"
              className="carousel-arrow cursor-pointer"
              aria-label="Next capability"
              onClick={() => setTechIndex((prev) => (prev + 1) % capabilities.length)}
            >
              <span className="material-symbols-outlined text-lg">chevron_right</span>
            </button>
          </div>
          <Reveal className="text-center">
            <h2 className="font-display text-3xl leading-tight md:text-5xl font-bold">Core technologies</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground font-sans">
              CNC control, laser heads, Hypertherm plasma, servo drives and DSP guards — the hardware
              on ADK machines.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((offset) => {
              const cap = capabilities[(techIndex + offset) % capabilities.length];
              return (
                <figure key={cap.id} className="group relative aspect-[4/5] overflow-hidden border border-rule bg-steel">
                  <img
                    src={cap.image}
                    alt={cap.title}
                    width={1200}
                    height={1500}
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-steel via-steel/20 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-6 text-center font-display text-xl text-steel-foreground font-bold">
                    {cap.title}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————————— */}
      {/* 5. PRESENCE SECTION (Service Network Across India)                 */}
      {/* —————————————————————————————————————————————————————————————————— */}
      <section className="relative isolate overflow-hidden bg-steel text-steel-foreground border-b border-rule">
        <img
          src="/assets/presence-india-night.jpg"
          alt="ADK Presence India Night"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-steel/90 via-steel/55 to-steel/30" />

        <div className="shell py-20 md:py-28">
          <p className="eyebrow text-accent">Service network</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight md:text-6xl font-bold">
            ADK across India
          </h2>
          <p className="mt-5 max-w-lg text-steel-muted font-sans leading-relaxed">
            Built in Santej. Serviced from eight offices — so a breakdown call is answered the same
            day, not from a distant headquarters.
          </p>

          <div className="mt-14 grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <button
                key={s.label}
                type="button"
                className="text-left cursor-pointer"
                onMouseEnter={() => setHotKpi(i)}
                onFocus={() => setHotKpi(i)}
              >
                <p
                  className={`kpi-rule inline-block font-display text-5xl leading-none text-steel-foreground md:text-6xl font-bold ${hotKpi === i ? "is-active" : ""
                    }`}
                >
                  {s.value}
                </p>
                <p className="mt-4 max-w-[12rem] text-sm text-steel-muted font-sans">{s.label}</p>
              </button>
            ))}
          </div>

          <Link
            href="/about"
            className="link-underline mt-14 inline-flex items-center gap-2 text-sm font-semibold text-steel-foreground hover:text-accent font-display"
          >
            How we service machines
            <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————————— */}
      {/* 6. TRUSTED CLIENTS MARQUEE                                         */}
      {/* —————————————————————————————————————————————————————————————————— */}
      <section className="py-16 md:py-24 border-b border-rule bg-background">
        <div className="shell mb-12 text-center max-w-2xl mx-auto">
          <p className="eyebrow text-accent">CLIENTS</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold uppercase tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 font-sans text-sm text-muted-foreground leading-relaxed">
            750+ installations including ISRO, Bajaj Steel, and leading fabrication companies across India.
          </p>
        </div>

        <ClientLogoMarquee rowA={clientMarqueeRowA} rowB={clientMarqueeRowB} />

        <div className="text-center mt-10">
          <Link
            href="/clients"
            className="link-underline font-mono text-xs uppercase tracking-widest font-bold text-accent"
          >
            View All Clients →
          </Link>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————————— */}
      {/* 7. WHY CHOOSE ADK SECTION                                          */}
      {/* —————————————————————————————————————————————————————————————————— */}
      <section className="border-b border-rule bg-background">
        <div className="shell py-20 md:py-28">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl leading-tight md:text-5xl font-bold">Why choose ADK</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground font-sans">
              Your machine is your capital — we keep it running.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 80} className="bg-background p-8">
                <h3 className="font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground font-sans">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————————— */}
      {/* 8. IN-DEPTH PRODUCT KNOWLEDGE ACTION TILES                         */}
      {/* —————————————————————————————————————————————————————————————————— */}
      <section className="border-b border-rule panel">
        <div className="shell py-20 md:py-28">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl leading-tight md:text-5xl font-bold">
              In-depth product knowledge
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground font-sans">
              Catalogues, an engineer, or a quote — without waiting for a sales call.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            <Link
              href="/resources"
              className="arrow-slide group flex h-full flex-col items-center gap-5 border border-rule bg-card px-8 py-16 text-center transition-colors duration-500 hover:border-foreground"
            >
              <span className="material-symbols-outlined text-3xl text-accent">description</span>
              <span className="font-display text-xl font-bold tracking-tight">Download catalogue</span>
              <span className="text-sm text-muted-foreground font-sans">Specifications in print</span>
              <span className="arrow text-lg font-bold">→</span>
            </Link>
            <Link
              href="/contact"
              className="arrow-slide group flex h-full flex-col items-center gap-5 border border-rule bg-card px-8 py-16 text-center transition-colors duration-500 hover:border-foreground"
            >
              <span className="material-symbols-outlined text-3xl text-accent">headset_mic</span>
              <span className="font-display text-xl font-bold tracking-tight">Talk to an engineer</span>
              <span className="text-sm text-muted-foreground font-sans">Same-day response</span>
              <span className="arrow text-lg font-bold">→</span>
            </Link>
            <button
              onClick={() => openEnquiry("General Machinery Enquiry")}
              className="arrow-slide group flex h-full flex-col items-center gap-5 border border-rule bg-card px-8 py-16 text-center transition-colors duration-500 hover:border-foreground cursor-pointer text-left w-full"
            >
              <span className="material-symbols-outlined text-3xl text-accent">currency_rupee</span>
              <span className="font-display text-xl font-bold tracking-tight">Get a quote</span>
              <span className="text-sm text-muted-foreground font-sans">Machine, price, delivery date</span>
              <span className="arrow text-lg font-bold">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————————— */}
      {/* 9. QUOTE CTA BANNER                                                 */}
      {/* —————————————————————————————————————————————————————————————————— */}
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

      {/* —————————————————————————————————————————————————————————————————— */}
      {/* 10. TAGLINE BANNER                                                 */}
      {/* —————————————————————————————————————————————————————————————————— */}
      <section className="py-16 md:py-20 border-b border-rule bg-background">
        <p className="text-center font-display text-2xl font-bold tracking-tight">
          Crafting precision, shaping tomorrow.
        </p>
      </section>
    </div>
  );
}
