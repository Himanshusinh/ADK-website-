"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useEnquiry } from "@/components/EnquiryContext";
import Reveal from "@/components/Reveal";
import ClientLogoMarquee from "@/components/ClientLogoMarquee";
import { clientMarqueeRowA, clientMarqueeRowB } from "@/lib/data";

/* —————————————————————————————————————————————————————————————————————————— */
/* Data Definitions matching adk-engineering-site                            */
/* —————————————————————————————————————————————————————————————————————————— */

const principles = [
  {
    eyebrow: "Mission",
    title: "After-sales is how the company was founded.",
    body: "Installation, training, spares and a same-day call — not a department bolted on after the crate is opened.",
  },
  {
    eyebrow: "Vision",
    title: "Machines that earn their keep after the first year.",
    body: "Supplied and configured to your exact specifications, serviced nationwide from ten regional offices.",
  },
  {
    eyebrow: "Slogan",
    title: "Crafting precision, shaping tomorrow.",
    body: "Fiber laser, plasma, press brake, welding, panel and PEB lines — one service support number.",
  },
];

const familyLineup = [
  { model: "Fiber laser cutting", slug: "fiber-laser-cutting", image: "/assets/adk/studio-fiber.png" },
  { model: "CNC plasma cutting", slug: "cnc-plasma-cutting", image: "/assets/adk/studio-plasma.jpg" },
  { model: "CNC press brake", slug: "cnc-press-brake", image: "/assets/adk/studio-press.jpg" },
  { model: "Fiber laser welding", slug: "fiber-laser-welding", image: "/assets/adk/studio-welder.jpg" },
  { model: "Panel bender", slug: "panel-bender", image: "/assets/adk/studio-panel.jpg" },
  { model: "PEB machinery", slug: "peb-machinery", image: "/assets/adk/studio-peb.jpg" },
  { model: "Hydraulic shears", slug: "shearing-machine", image: "/assets/adk/studio-shear.jpg" },
];

const timeline = [
  {
    year: "2015",
    title: "Founded in Ahmedabad",
    body: "Founded in Ahmedabad to build cutting and forming machinery with local engineering support.",
  },
  {
    year: "2017",
    title: "100 machines on the floor",
    body: "Reached a hundred installations across Gujarat and Maharashtra.",
  },
  {
    year: "2019",
    title: "Press-brake and PEB lines",
    body: "Expanded the catalogue to press brakes and pre-engineered building lines.",
  },
  {
    year: "2021",
    title: "Eight service branches",
    body: "Established resident service teams in Pune, Nashik, Nagpur, Kolhapur, Indore, Kolkata and Bhopal.",
  },
  {
    year: "2023",
    title: "30 kW fiber laser cell",
    body: "Installed India’s first 30 kW fiber laser cutting machine.",
  },
  {
    year: "2025",
    title: "24 m table laser and 850+ installations",
    body: "Crossed 850 installations and delivered a 3000 × 24000 mm heavy-plate machine bed.",
  },
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

const branches = [
  { city: "Ahmedabad", role: "Headquarters & Experience Center" },
  { city: "Pune", role: "Maharashtra Service Branch" },
  { city: "Nashik", role: "Service Office" },
  { city: "Nagpur", role: "Vidarbha Service Branch" },
  { city: "Kolhapur", role: "Service Office" },
  { city: "Indore", role: "Madhya Pradesh Branch" },
  { city: "Kolkata", role: "East India Branch" },
  { city: "Bhopal", role: "Service Office" },
];

/* —───────────────────────────────────────────────────────────────────────── */
/* Main About Page Component                                                 */
/* —───────────────────────────────────────────────────────────────────────── */

export default function AboutPage() {
  const { openEnquiry } = useEnquiry();

  /* Principles tab switcher */
  const [principleIndex, setPrincipleIndex] = useState(0);
  const activePrinciple = principles[principleIndex];

  /* Timeline rail switcher */
  const [timelineIndex, setTimelineIndex] = useState(timeline.length - 1);
  const activeTimeline = timeline[timelineIndex];

  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* —————————————————————————————————————————————————————————————————— */}
      {/* 1. HERO SECTION                                                    */}
      {/* —————————————————————————————————————————————————————————————————— */}
      <section className="relative isolate overflow-hidden bg-steel text-steel-foreground border-b border-rule">
        <img
          src="/assets/about-works-hero.jpg"
          alt="ADK About Works Hero"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 -z-10 bg-steel/60" />
        <div className="shell flex min-h-[78svh] flex-col items-center justify-center py-24 text-center md:min-h-[88svh] md:py-32 z-10">
          <p className="eyebrow text-accent font-mono text-xs tracking-[0.18em]">About</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] md:text-6xl font-bold">
            Who we are and what we do.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-steel-muted md:text-lg font-sans leading-relaxed">
            Founded in 2015 in Ahmedabad. ADK supplies and services fiber laser, CNC plasma,
            CNC press brake, welding, PEB and panel-bending machines. 850+ installations,
            including government work at ISRO.
          </p>
          <div className="mt-14 grid w-full max-w-3xl gap-10 border-t border-white/15 pt-10 sm:grid-cols-3">
            <div>
              <p className="font-display text-4xl leading-none md:text-5xl font-bold">850+</p>
              <p className="mt-3 text-sm text-steel-muted font-sans">Customers across India</p>
            </div>
            <div>
              <p className="font-display text-4xl leading-none md:text-5xl font-bold">850+</p>
              <p className="mt-3 text-sm text-steel-muted font-sans">Installations on the floor</p>
            </div>
            <div>
              <p className="font-display text-4xl leading-none md:text-5xl font-bold">10</p>
              <p className="mt-3 text-sm text-steel-muted font-sans">Branch offices with service engineers</p>
            </div>
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————————— */}
      {/* 2. PRINCIPLE RAIL (Mission / Vision / Slogan)                      */}
      {/* —————————————————————————————————————————————————————————————————— */}
      <section className="py-16 md:py-24 border-b border-rule bg-background">
        <div className="shell max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-6 border-b border-rule pb-4">
            {principles.map((p, i) => (
              <button
                key={p.eyebrow}
                type="button"
                onClick={() => setPrincipleIndex(i)}
                className={`relative pb-2 font-mono text-xs uppercase tracking-[0.16em] transition-colors cursor-pointer ${i === principleIndex ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {p.eyebrow}
                {i === principleIndex && (
                  <span className="absolute inset-x-0 -bottom-[17px] mx-auto h-0.5 w-8 bg-accent" />
                )}
              </button>
            ))}
          </div>
          {activePrinciple && (
            <Reveal key={activePrinciple.eyebrow} className="mt-10">
              <h2 className="font-display text-3xl leading-tight md:text-4xl font-bold">
                {activePrinciple.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground font-sans md:text-lg leading-relaxed">
                {activePrinciple.body}
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————————— */}
      {/* 3. EXPERIENCE CENTER VIDEO SECTION                                 */}
      {/* —————————————————————————————————————————————————————————————————— */}
      <section className="border-b border-rule bg-steel text-steel-foreground">
        <div className="shell grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="eyebrow text-accent">Experience &amp; Service Hub</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight">
              A decade of engineering excellence.
            </h2>
            <p className="mt-5 max-w-lg text-steel-muted font-sans leading-relaxed">
              Optical calibration, testing bays, demonstration setup and dedicated controls bench at our Ahmedabad facility. Every machine is run and thoroughly inspected before dispatch.
            </p>
          </div>
          <div>
            <div className="relative aspect-video w-full overflow-hidden bg-steel border border-white/20">
              <img
                src="/assets/workshop.jpg"
                alt="ADK Experience Center"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-steel/40">
                <span className="material-symbols-outlined text-6xl text-white">play_circle</span>
              </div>
            </div>
            <p className="mt-3 text-sm text-steel-muted font-sans">10 years · 2015–2025.</p>
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————————— */}
      {/* 4. MACHINE FAMILIES WE BUILD                                       */}
      {/* —————————————————————————————————————————————————————————————————— */}
      <section className="py-16 md:py-24 border-b border-rule bg-background">
        <div className="shell">
          <Reveal className="text-center">
            <p className="eyebrow text-accent">Machines</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold">The machine families we offer.</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground font-sans">
              Our comprehensive machinery range: fiber laser cutting, CNC plasma, CNC press brakes, laser welding, panel benders, PEB lines, and shearing machines.
            </p>
          </Reveal>
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

      {/* —————————————————————————————————————————————————————————————————— */}
      {/* 5. MILESTONE RAIL (Company Timeline)                               */}
      {/* —————————————————————————————————————————————————————————————————— */}
      <section className="border-b border-rule panel py-16 md:py-24">
        <div className="shell max-w-3xl mx-auto text-center">
          <p className="eyebrow text-accent">Journey</p>
          <div className="mt-8 flex items-center justify-center gap-6 overflow-x-auto pb-4">
            {timeline.map((entry, i) => (
              <button
                key={entry.year}
                type="button"
                onClick={() => setTimelineIndex(i)}
                className={`font-display text-2xl md:text-4xl transition-colors cursor-pointer ${i === timelineIndex
                    ? "text-foreground font-bold underline decoration-accent underline-offset-8"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {entry.year}
              </button>
            ))}
          </div>
          {activeTimeline && (
            <Reveal key={activeTimeline.year} className="mt-10">
              <p className="font-mono text-sm text-muted-foreground">{activeTimeline.year}</p>
              <h3 className="mt-2 font-display text-3xl md:text-4xl font-bold">{activeTimeline.title}</h3>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg font-sans leading-relaxed">
                {activeTimeline.body}
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————————— */}
      {/* 6. YOUR MACHINE IS YOUR CAPITAL                                    */}
      {/* —————————————————————————————————————————————————————————————————— */}
      <section className="py-16 md:py-24 border-b border-rule bg-background">
        <div className="shell">
          <Reveal className="text-center">
            <p className="eyebrow text-accent">Your machine is your capital</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold">
              Service that shows up after the crate is opened.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 80} className="bg-card p-8">
                <h3 className="font-display text-xl font-bold">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground font-sans leading-relaxed">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————————— */}
      {/* 7. CLIENTS SECTION                                                 */}
      {/* —————————————————————————————————————————————————————————————————— */}
      <section className="py-16 md:py-24 border-b border-rule bg-background">
        <div className="shell text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow text-accent">Clients</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold">Shops that run ADK on the floor.</h2>
          <p className="mt-4 text-muted-foreground font-sans">
            From ISRO and Bajaj Steel to job-work houses across India — the machines stay after the first year.
          </p>
        </div>
        <ClientLogoMarquee rowA={clientMarqueeRowA} rowB={clientMarqueeRowB} />
      </section>

      {/* —————————————————————————————————————————————————————————————————— */}
      {/* 8. BRANCH NETWORK                                                  */}
      {/* —————————————————————————————————————————————————————————————————— */}
      <section className="border-b border-rule panel py-16 md:py-24">
        <div className="shell">
          <p className="eyebrow text-accent">Branch network</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">Eight offices. One number to start.</h2>
          <div className="mt-10 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {branches.map((b) => (
              <div key={b.city} className="bg-card p-6">
                <p className="font-display text-2xl font-bold">{b.city}</p>
                <p className="mt-1 text-sm text-muted-foreground font-sans">{b.role}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground font-sans">
            Head office: A-503/504, Empire Business Hub, Nr. Shukan Mall, Science City Road, Sola, Ahmedabad 380060, Gujarat.
          </p>
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
    </div>
  );
}
