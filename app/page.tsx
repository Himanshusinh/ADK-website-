"use client";

import React from "react";
import Link from "next/link";
import { useEnquiry } from "@/components/EnquiryContext";
import { categories, applications, companyInfo, whyChooseAdk, clientMarqueeRowA, clientMarqueeRowB } from "@/lib/data";
import Reveal from "@/components/Reveal";
import ClientLogoMarquee from "@/components/ClientLogoMarquee";

export default function Home() {
  const { openEnquiry } = useEnquiry();

  return (
    <div className="flex flex-col w-full">
      {/* Technical Hero Section */}
      <section className="relative w-full min-h-[650px] md:min-h-[720px] lg:min-h-[760px] bg-surface tech-grid flex items-center overflow-hidden border-b border-border py-16">
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

          <div className="relative flex items-center justify-center w-full">
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-[680px] mx-auto">
              <img
                alt="High-detail machine schematic blueprint asset"
                className="w-full h-auto relative z-10 mix-blend-multiply dark:mix-blend-normal"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOzIemnEm6V7GR2bo2GIhMBDg-NJl725eBjH6It2PL5Sjo3WhVXoleVnbj2RcKOtirLuRswUqVRNvXpHSz2a0kKCw-CTpTVqGVLS7GCKiWDHyrcsm_fQB46p0q66NNXsvVYrOjLtLu818Swx4zkFGA9-Fn2yq50Rx7pQADrf3UTTpD-48Xwfjm7Zxli8zgv18UZ5_YoHFaIvX_LtmhrsF5NXHgkt5MrIIZGMyZ0t623K4ca27FPmHufTV1KZmThJQB2H5pD3sq7CBy5-E"
              />

              {/* Schematic Callouts */}
              <div className="absolute top-[25%] right-0 flex items-center gap-2 z-20">
                <div className="w-16 h-px bg-primary/90"></div>
                <div className="bg-card border border-primary/80 p-2.5 font-ui text-label tracking-ui">
                  Precision 0.01mm
                </div>
              </div>
              <div className="absolute top-[40%] left-0 flex items-center gap-2 z-20">
                <div className="bg-card border border-primary/80 p-2.5 font-ui text-label tracking-ui">
                  Fiber Laser Source
                </div>
                <div className="w-16 h-px bg-primary/90"></div>
              </div>
              <div className="absolute top-[46%] left-[44%] -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none">
                <div
                  className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(157,5,24,0.65)]"
                  aria-hidden="true"
                />
                <div className="w-px h-12 md:h-14 bg-primary/90" />
                <div className="bg-card border border-primary/80 p-2.5 font-ui text-label tracking-ui whitespace-nowrap">
                  CNC_CONTROL_UNIT
                </div>
              </div>
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
