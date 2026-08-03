"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useEnquiry } from "@/components/EnquiryContext";
import { categories, applications, companyInfo, whyChooseAdk, clientMarqueeRowA, clientMarqueeRowB } from "@/lib/data";
import { BLUEPRINT_SCHEMATIC_URL, resolveImagePath, productHeroPath, withCloudinaryBackgroundRemoval } from "@/lib/media";
import Reveal from "@/components/Reveal";
import ClientLogoMarquee from "@/components/ClientLogoMarquee";
import MachineryBentoGrid from "@/components/MachineryBentoGrid";
import HomeHeroSchematic, { type HomeHeroSlide } from "@/components/HomeHeroSchematic";
import DecadeVideo from "@/components/DecadeVideo";

export default function Home() {
  const { openEnquiry } = useEnquiry();

  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const heroSlides: HomeHeroSlide[] = [
    {
      title: "Fiber Laser Cutting",
      // Fiber asset rejects bg-removal transforms (400); already a dark cutout PNG
      src: resolveImagePath("home/hero-fiber-laser.jpg"),
      desc: "Ultra-high precision cutting systems up to 60kW with exchange table.",
      link: "/products/fiber-laser-cutting",
      tag: "FL Series 60kW",
      callouts: [
        { label: "CNC_CONTROL_UNIT", x: 22, y: 42, align: "left", length: 88 },
        { label: "LASER CUTTING HEAD", x: 54, y: 30, align: "top", length: 56 },
        { label: "PRECISION 0.01MM", x: 78, y: 54, align: "right", length: 96 },
      ],
    },
    {
      title: "CNC Plasma Cutting",
      src: withCloudinaryBackgroundRemoval(resolveImagePath("home/hero-plasma.jpg")),
      desc: "Heavy-duty gantry plasma systems engineered for structural steel fabrication.",
      link: "/products/cnc-plasma-cutting",
      tag: "Plasma Gantry",
      callouts: [
        { label: "GANTRY STRUCTURE", x: 34, y: 30, align: "left", length: 100 },
        { label: "PLASMA TORCH", x: 50, y: 34, align: "top", length: 64 },
        { label: "THICK PLATE READY", x: 72, y: 56, align: "right", length: 88 },
      ],
    },
    {
      title: "CNC Press Brake",
      src: withCloudinaryBackgroundRemoval(resolveImagePath("home/hero-press-brake.jpg")),
      desc: "NADKpress precision bending technology for complex sheet metal operations.",
      link: "/products/cnc-press-brake",
      tag: "Press Brake CNC",
      callouts: [
        { label: "SERVO MAIN DRIVE", x: 32, y: 22, align: "top", length: 52 },
        { label: "MULTI-AXIS BACKGAUGE", x: 50, y: 62, align: "bottom", length: 72 },
        { label: "DSP LASER GUARD", x: 24, y: 48, align: "left", length: 92 },
      ],
    },
  ];

  const homeMachineImage: Record<string, string> = {
    "fiber-laser-cutting": resolveImagePath("home/hero-fiber-laser.jpg"),
    "cnc-plasma-cutting": resolveImagePath("home/hero-plasma.jpg"),
    "cnc-press-brake": resolveImagePath("home/hero-press-brake.jpg"),
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered, heroSlides.length]);

  return (
    <div className="flex flex-col w-full">
      {/* Technical Hero Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[580px] lg:min-h-[620px] bg-surface tech-grid flex items-center overflow-hidden border-b border-border pt-8 pb-16 lg:pt-10 lg:pb-20">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="adk-container h-full border-x border-on-surface/5"></div>
        </div>
        <div className="relative z-10 adk-container w-full grid grid-cols-1 lg:grid-cols-[minmax(0,47%)_minmax(0,53%)] gap-10 lg:gap-12 items-center">
          <div className="border-l-4 border-primary pl-6 md:pl-9">
            <h1 className="font-display text-hero text-foreground uppercase mb-8 tracking-display">
              Crafting <br />
              Precision <br />
              Shaping Tomorrow.
            </h1>
            <ul
              className="font-ui text-label text-tertiary space-y-2.5 max-w-md border-t border-border pt-7 mb-10"
              role="list"
            >
              <li className="flex gap-2">
                <span className="text-primary shrink-0">▸</span>
                <span>Fiber Laser Cutting up to 60kW</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary shrink-0">▸</span>
                <span>CNC Plasma Systems</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary shrink-0">▸</span>
                <span>Press Brakes &amp; Panel Benders</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary shrink-0">▸</span>
                <span>{companyInfo.stats.installations} Installations Across India</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-5">
              <button
                onClick={() => openEnquiry("General Catalogue Inquiry")}
                className="bg-charcoal text-white border border-charcoal font-ui text-button uppercase font-bold px-9 py-3.5 hover:bg-primary hover:border-primary transition-colors duration-200 tracking-ui cursor-pointer"
              >
                Request Catalogue
              </button>
              <Link
                href="/resources"
                className="bg-transparent text-tertiary border border-border font-ui text-button uppercase px-9 py-3.5 hover:text-foreground hover:border-foreground/40 transition-colors duration-200 tracking-ui text-center"
              >
                View Specs
              </Link>
            </div>
          </div>

          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <HomeHeroSchematic
              slides={heroSlides}
              activeSlide={activeSlide}
              onPrev={() =>
                setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
              }
              onNext={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)}
              onSelect={setActiveSlide}
            />
          </div>
        </div>
      </section>

      {/* Grid Categories */}
      <Reveal>
        <section className="py-20 bg-card">
          <div className="adk-container w-full">
            <div className="mb-12 border-b border-border pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="font-display text-heading text-foreground uppercase tracking-display leading-none">
                  Machine Classification
                </h2>
              </div>
              <div className="font-ui text-label text-tertiary uppercase max-w-[280px] leading-relaxed border-l border-primary pl-5">
                Standardized industrial machinery categories for precision manufacturing environments.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
              {categories.slice(0, 4).map((c, idx) => (
                <Link
                  key={c.slug}
                  href={`/products/${c.slug}`}
                  className="p-10 border-r border-b border-border group hover:bg-tech-blue transition-all duration-300 flex flex-col justify-between min-h-[280px]"
                >
                  <div>
                    <div className="font-ui text-label text-primary mb-6">SR_0{idx + 1}</div>
                    <span className="material-symbols-outlined text-[48px] text-foreground mb-6 group-hover:text-primary transition-colors">
                      {c.icon}
                    </span>
                    <h3 className="font-display text-subheading text-foreground uppercase mb-3 group-hover:text-primary transition-colors">
                      {c.name}
                    </h3>
                    <p className="font-body text-small text-tertiary leading-relaxed">
                      {c.tagline}
                    </p>
                  </div>
                  <div className="font-ui text-label text-primary group-hover:translate-x-1 transition-transform mt-4 flex items-center gap-1">
                    Access Catalogue <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Metrics Bar */}
      <Reveal delay={100}>
        <section className="py-16 bg-surface-container border-y border-border">
          <div className="adk-container w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center md:border-r border-border last:border-0 px-4">
                <div className="font-ui text-label uppercase text-tertiary mb-3 tracking-ui">
                  Happy_Customers
                </div>
                <div className="font-display text-stat text-foreground font-bold">
                  {companyInfo.stats.customers}
                </div>
              </div>
              <div className="text-center md:border-r border-border last:border-0 px-4">
                <div className="font-ui text-label uppercase text-tertiary mb-3 tracking-ui">
                  Operating_Exp
                </div>
                <div className="font-display text-stat text-foreground font-bold">
                  {companyInfo.stats.yearsExperience} <span className="font-ui text-button align-middle font-normal">YRS</span>
                </div>
              </div>
              <div className="text-center md:border-r border-border last:border-0 px-4">
                <div className="font-ui text-label uppercase text-tertiary mb-3 tracking-ui">
                  Installations
                </div>
                <div className="font-display text-stat text-foreground font-bold">
                  {companyInfo.stats.installations}
                </div>
              </div>
              <div className="text-center px-4">
                <div className="font-ui text-label uppercase text-tertiary mb-3 tracking-ui">
                  Branch_Offices
                </div>
                <div className="font-display text-stat text-foreground font-bold">
                  08
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Featured Machinery Showcases */}
      <Reveal delay={100}>
        <section className="py-20 bg-surface border-y border-border">
          <div className="adk-container w-full">
            <div className="mb-10 flex flex-col gap-3 border-b border-border pb-5 md:flex-row md:items-end md:justify-between">
              <h2 className="font-display text-heading text-foreground uppercase tracking-display leading-none">
                Advanced Machinery
              </h2>
              <Link
                href="/products"
                className="font-ui text-label text-primary hover:text-primary-hover tracking-ui flex items-center gap-2 transition-colors shrink-0"
              >
                View Full Inventory{" "}
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>

            <MachineryBentoGrid
              items={(
                [
                  "cnc-press-brake",
                  "cnc-plasma-cutting",
                  "fiber-laser-cutting",
                  "fiber-laser-welding",
                  "panel-bender",
                  "peb-machinery",
                ] as const
              )
                .map((slug) => {
                  const category = categories.find((c) => c.slug === slug);
                  if (!category) return null;
                  const model = category.models[0];
                  return {
                    slug: category.slug,
                    name: category.name,
                    description: category.tagline,
                    image:
                      homeMachineImage[category.slug] ??
                      (model ? productHeroPath(category.slug, model.slug) : ""),
                    href: `/products/${category.slug}`,
                  };
                })
                .filter((item): item is NonNullable<typeof item> => Boolean(item))}
            />
          </div>
        </section>
      </Reveal>

      {/* Why Choose ADK */}
      <Reveal delay={100}>
        <section className="py-20 bg-surface border-y border-border">
          <div className="adk-container w-full">
            <div className="mb-12 border-b border-border pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="font-display text-heading text-foreground uppercase tracking-display">
                  Why Choose ADK
                </h2>
              </div>
              <p className="font-ui text-label text-tertiary uppercase max-w-[280px] leading-relaxed border-l border-primary pl-5">
                Your machine is your capital — we keep it running with precision service and proven engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseAdk.map((item, idx) => (
                <div
                  key={item.title}
                  className="bg-card p-6 border border-border hover:border-primary hover-lift transition-all group"
                >
                  <span className="material-symbols-outlined text-3xl text-foreground group-hover:text-primary transition-colors mb-4 block">
                    {item.icon}
                  </span>
                  <h3 className="font-display text-card-title text-foreground uppercase font-bold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-small text-tertiary leading-relaxed">
                    {item.description}
                  </p>
                  <span className="font-ui text-label text-primary/50 mt-3 block">
                    ADV_0{idx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Featured Applications Section */}
      <Reveal delay={100}>
        <section className="py-20 bg-card border-t border-border">
          <div className="adk-container w-full">
            <div className="mb-12 border-b border-border pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="font-display text-heading text-foreground uppercase tracking-display">
                  Industries Served
                </h2>
              </div>
              <Link
                href="/applications"
                className="font-ui text-label text-primary hover:underline mb-2 tracking-ui flex items-center gap-2 font-bold"
              >
                Explore All Sectors{" "}
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {applications.slice(0, 6).map((app) => (
                <Link
                  key={app.slug}
                  href={`/applications/${app.slug}`}
                  className="bg-card p-6 border border-border hover:border-primary hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
                >
                  <span className="material-symbols-outlined text-4xl text-foreground/75 group-hover:text-primary transition-colors mb-4">
                    {app.icon}
                  </span>
                  <h4 className="font-display text-card-title text-foreground uppercase tracking-display font-bold group-hover:text-primary transition-colors">
                    {app.name}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Trusted Customers */}
      <Reveal delay={100}>
        <section className="py-20 bg-surface">
          <div className="adk-container w-full">
            <div className="mb-12 border-b border-border pb-6 text-center max-w-xl mx-auto">
              <h2 className="font-display text-heading text-foreground uppercase tracking-display">
                Trusted by Industry Leaders
              </h2>
              <p className="font-body text-small text-tertiary mt-4">
                {companyInfo.stats.customers} installations including ISRO, Bajaj Steel, and leading fabrication companies.
              </p>
            </div>

            <ClientLogoMarquee rowA={clientMarqueeRowA} rowB={clientMarqueeRowB} />
            <div className="text-center mt-8">
              <Link
                href="/clients"
                className="font-ui text-label text-primary hover:underline tracking-ui font-bold"
              >
                View All Clients →
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 10 Years of ADK */}
      <Reveal delay={100}>
        <section className="py-20 bg-surface border-y border-border">
          <div className="adk-container w-full">
            <div className="mb-10 flex flex-col gap-3 border-b border-border pb-5 md:flex-row md:items-end md:justify-between">
              <h2 className="font-display text-heading text-foreground uppercase tracking-display leading-none">
                10 Years of ADK
              </h2>
              <p className="font-ui text-label text-tertiary uppercase max-w-sm leading-relaxed md:text-right">
                A decade of precision machinery, service, and trust.
              </p>
            </div>
            <DecadeVideo />
          </div>
        </section>
      </Reveal>

      {/* Enquiry CTA Strip */}
      <Reveal delay={100}>
        <section className="py-20 bg-charcoal text-white border-t border-primary/30">
          <div className="adk-container w-full text-center">
            <h2 className="font-display text-heading uppercase tracking-display mb-6 leading-none">
              Request a Custom Machinery Quote
            </h2>
            <p className="font-ui text-label text-light-gray/60 mb-10 leading-relaxed max-w-lg mx-auto">
              Share your material specifications, production volume, and facility requirements.
              Our engineering team will respond within 6 business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openEnquiry("General Machinery Enquiry")}
                className="bg-primary hover:bg-primary-hover text-white font-ui text-label tracking-ui px-10 py-5 border border-primary transition-all font-bold cursor-pointer"
              >
                Start Enquiry
              </button>
              <Link
                href="/contact"
                className="bg-transparent text-white border border-white/30 font-ui text-label tracking-ui px-10 py-5 hover:bg-card hover:text-foreground transition-all text-center"
              >
                Contact Operations
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
