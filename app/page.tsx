"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useEnquiry } from "@/components/EnquiryContext";
import { categories, applications, companyInfo, whyChooseAdk, clientMarqueeRowA, clientMarqueeRowB } from "@/lib/data";
import { BLUEPRINT_SCHEMATIC_URL, resolveImagePath } from "@/lib/media";
import Reveal from "@/components/Reveal";
import ClientLogoMarquee from "@/components/ClientLogoMarquee";

export default function Home() {
  const { openEnquiry } = useEnquiry();

  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const heroSlides = [
    {
      title: "Fiber Laser Cutting",
      src: resolveImagePath("products/fiber-laser-cutting/industrial-pioneer-exchange-table/hero.jpg"),
      desc: "Ultra-high precision cutting systems up to 60kW with exchange table.",
      link: "/products/fiber-laser-cutting",
      tag: "FL_SERIES_60KW",
    },
    {
      title: "CNC Plasma Cutting",
      src: resolveImagePath("products/cnc-plasma-cutting/gantry-plasma-cutting/hero.jpg"),
      desc: "Heavy-duty gantry plasma systems engineered for structural steel fabrication.",
      link: "/products/cnc-plasma-cutting",
      tag: "PLASMA_GANTRY",
    },
    {
      title: "CNC Press Brake",
      src: resolveImagePath("products/cnc-press-brake/nadkpress-cnc-press-brake/hero.jpg"),
      desc: "NADKpress precision bending technology for complex sheet metal operations.",
      link: "/products/cnc-press-brake",
      tag: "PRESS_BRAKE_CNC",
    },
  ];

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
                INITIATE_CATALOGUE
              </button>
              <Link
                href="/resources"
                className="bg-transparent text-tertiary border border-border font-ui text-button uppercase px-9 py-3.5 hover:text-foreground hover:border-foreground/40 transition-colors duration-200 tracking-ui text-center"
              >
                VIEW_SPECS.PDF
              </Link>
            </div>
          </div>

          <div
            className="w-full relative flex flex-col gap-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Big Active Image Area (Transparent background) */}
            <div className="relative w-full aspect-[4/3] flex items-center justify-center p-4 group">
              {heroSlides.map((slide, idx) => (
                <div
                  key={slide.title}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${idx === activeSlide
                      ? "opacity-100 translate-x-0 scale-100 z-10"
                      : "opacity-0 translate-x-8 scale-95 z-0 pointer-events-none"
                    }`}
                >
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="object-contain max-h-full max-w-full transition-transform duration-500 group-hover:scale-105 mix-blend-multiply dark:mix-blend-normal"
                  />
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-surface/90 hover:bg-primary hover:text-white border border-border flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-sm"
                aria-label="Previous image"
              >
                <span className="material-symbols-outlined text-[18px] leading-none">chevron_left</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveSlide((prev) => (prev + 1) % heroSlides.length);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-surface/90 hover:bg-primary hover:text-white border border-border flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-sm"
                aria-label="Next image"
              >
                <span className="material-symbols-outlined text-[18px] leading-none">chevron_right</span>
              </button>
            </div>

            {/* Slide details (positioned cleanly below the image) */}
            <div className="border-t border-border pt-4">
              <div className="flex items-center justify-between gap-4">
                <Link
                  href={heroSlides[activeSlide].link}
                  className="font-display text-[16px] font-bold tracking-wider text-foreground hover:text-primary transition-colors flex items-center gap-1.5 group/link uppercase"
                >
                  {heroSlides[activeSlide].title}
                  <span className="material-symbols-outlined text-[15px] group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
                <span className="font-ui text-[9px] text-primary font-bold tracking-wider bg-primary/10 px-2.5 py-0.5 border border-primary/20 whitespace-nowrap">
                  {heroSlides[activeSlide].tag}
                </span>
              </div>
              <p className="font-body text-small text-tertiary mt-2 leading-relaxed">
                {heroSlides[activeSlide].desc}
              </p>
            </div>

            {/* Selector Mini-Cards */}
            <div className="grid grid-cols-3 gap-4">
              {heroSlides.map((slide, idx) => {
                const isActive = idx === activeSlide;
                return (
                  <button
                    key={slide.title}
                    onClick={() => setActiveSlide(idx)}
                    className={`text-left p-4 border transition-all duration-300 flex flex-col justify-between cursor-pointer relative group/btn ${isActive
                        ? "bg-card border-primary shadow-sm"
                        : "bg-surface border-border hover:border-foreground/30"
                      }`}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span className={`font-ui text-[10px] font-bold ${isActive ? "text-primary" : "text-tertiary"}`}>
                        0{idx + 1}
                      </span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      )}
                    </div>
                    <span className="font-display text-[12px] uppercase tracking-wider text-foreground font-bold mt-2.5 block group-hover/btn:text-primary transition-colors">
                      {slide.title.replace(" Cutting", "").replace(" CNC ", " ")}
                    </span>
                  </button>
                );
              })}
            </div>
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
                    ACCESS_CATALOGUE <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
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
        <section className="py-20 bg-card">
          <div className="adk-container w-full">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-border pb-6">
              <div>
                <h2 className="font-display text-heading text-foreground uppercase tracking-display">
                  Advanced Machinery
                </h2>
              </div>
              <Link
                href="/products"
                className="font-ui text-label text-primary hover:underline mb-2 tracking-ui flex items-center gap-2 font-bold"
              >
                VIEW_COMPLETE_INVENTORY{" "}
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.slice(0, 3).map((category) => {
                const model = category.models[0];
                if (!model) return null;
                return (
                  <div
                    key={model.slug}
                    className="bg-card p-6 border border-border hover:border-primary transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-xl group"
                  >
                    <div className="font-ui text-label text-tertiary mb-4 uppercase tracking-display flex justify-between">
                      <span>SPEC_ID: {model.id}</span>
                      <span className="text-primary font-bold">{model.status}</span>
                    </div>
                    <div className="h-56 mb-6 bg-tech-blue flex items-center justify-center p-6 overflow-hidden">
                      <img
                        className="object-contain h-full w-full mix-blend-multiply dark:mix-blend-normal transition-transform duration-500 group-hover:scale-105"
                        alt={model.name}
                        src={model.image}
                      />
                    </div>
                    <h3 className="font-display text-subheading text-foreground uppercase mb-4 tracking-display group-hover:text-primary transition-colors">
                      {model.name}
                    </h3>

                    {/* Tech Specs block */}
                    <div className="bg-surface-container p-4 mb-6 border-l-4 border-primary">
                      <div className="grid grid-cols-2 gap-y-3 font-ui text-label">
                        {Object.entries(model.specsSummary).map(([key, val]) => (
                          <React.Fragment key={key}>
                            <div className="text-tertiary uppercase">{key}:</div>
                            <div className="text-foreground font-bold text-right">{val}</div>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto space-y-2">
                      <Link
                        href={`/products/${category.slug}/${model.slug}`}
                        className="w-full border border-foreground py-3 font-ui text-label uppercase hover:bg-charcoal hover:text-white transition-all tracking-ui flex items-center justify-center gap-2 text-center"
                      >
                        [ SYSTEM_SCHEMATICS ]
                      </Link>
                      <button
                        onClick={() => openEnquiry(`Quote Request: ${model.name}`)}
                        className="w-full bg-primary hover:bg-primary-hover text-white py-3 font-ui text-label uppercase transition-all tracking-ui flex items-center justify-center gap-2 cursor-pointer font-bold"
                      >
                        [ INQUIRE_FOR_PRICING ]
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
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
                EXPLORE_ALL_SECTORS{" "}
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
                VIEW_ALL_CLIENTS →
              </Link>
            </div>
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
                [ INITIATE_ENQUIRY ]
              </button>
              <Link
                href="/contact"
                className="bg-transparent text-white border border-white/30 font-ui text-label tracking-ui px-10 py-5 hover:bg-card hover:text-foreground transition-all text-center"
              >
                [ CONTACT_OPERATIONS ]
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
