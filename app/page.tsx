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
        { label: "CNC_CONTROL_UNIT", x: 30, y: 48, align: "left", length: 88 },
        { label: "LASER CUTTING HEAD", x: 51, y: 46, align: "top", length: 44 },
        { label: "PRECISION 0.01MM", x: 62, y: 56, align: "right", length: 96 },
      ],
    },
    {
      title: "CNC Plasma Cutting",
      src: withCloudinaryBackgroundRemoval(resolveImagePath("home/hero-plasma.jpg")),
      desc: "Heavy-duty gantry plasma systems engineered for structural steel fabrication.",
      link: "/products/cnc-plasma-cutting",
      tag: "Plasma Gantry",
      callouts: [
        { label: "GANTRY STRUCTURE", x: 40, y: 38, align: "left", length: 100 },
        { label: "PLASMA TORCH", x: 50, y: 46, align: "top", length: 64 },
        { label: "THICK PLATE READY", x: 66, y: 54, align: "right", length: 88 },
      ],
    },
    {
      title: "CNC Press Brake",
      src: withCloudinaryBackgroundRemoval(resolveImagePath("home/hero-press-brake.jpg")),
      desc: "NADKpress precision bending technology for complex sheet metal operations.",
      link: "/products/cnc-press-brake",
      tag: "Press Brake CNC",
      callouts: [
        { label: "SERVO MAIN DRIVE", x: 34, y: 28, align: "top", length: 52 },
        { label: "MULTI-AXIS BACKGAUGE", x: 52, y: 60, align: "bottom", length: 72 },
        { label: "DSP LASER GUARD", x: 32, y: 46, align: "left", length: 92 },
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
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[90vh] bg-surface/40 backdrop-blur-[2px] flex flex-col justify-center overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 70% 30%, rgba(255, 179, 177, 0.15) 0%, transparent 60%)",
          }}
        ></div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 20% 80%, rgba(176, 199, 241, 0.1) 0%, transparent 50%)",
          }}
        ></div>
        <div className="adk-container w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
          {/* Typography Left */}
          <div className="lg:col-span-5 flex flex-col gap-6 relative z-20">
            <div className="inline-flex items-center gap-3 bg-surface-container rounded-full px-4 py-2 w-max border border-border">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="font-ui text-label text-on-surface/80 uppercase tracking-widest">
                ADK_SYS_01 // Gantry System
              </span>
            </div>
            <h1 className="font-display text-[48px] sm:text-[64px] lg:text-[76px] text-foreground uppercase leading-[0.95] tracking-tighter">
              Crafting
              <br />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Precision
              </span>
              <br />
              Shaping
              <br />
              Tomorrow.
            </h1>
            <div className="bg-surface-container/50 backdrop-blur-sm rounded-3xl p-6 border border-border shadow-lg max-w-md">
              <ul className="space-y-3 font-ui text-label text-on-surface-variant uppercase tracking-wider">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[16px]">flare</span>
                  Fiber Laser Cutting up to 60kW
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[16px]">precision_manufacturing</span>
                  CNC Plasma Systems
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[16px]">architecture</span>
                  Press Brakes &amp; Panel Benders
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[16px]">public</span>
                  {companyInfo.stats.installations}+ Installations Across India
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <button
                onClick={() => openEnquiry("General Catalogue Inquiry")}
                className="w-full sm:w-auto bg-primary text-on-primary rounded-full font-ui text-button uppercase tracking-widest px-8 py-4 hover:bg-primary-hover transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 cursor-pointer font-bold"
              >
                Request Catalogue
              </button>
              <Link
                href="/resources"
                className="w-full sm:w-auto bg-surface-container border border-border rounded-full text-foreground font-ui text-button uppercase tracking-widest px-8 py-4 hover:bg-surface-container-high transition-all hover:-translate-y-0.5 text-center font-bold animate-duration-150"
              >
                View Specs
              </Link>
            </div>
          </div>
          {/* Image Right */}
          <div className="lg:col-span-7 relative h-full flex items-center justify-center min-h-[420px] lg:min-h-[500px]">
            <div
              className="relative w-full aspect-[1.4] max-w-[800px]"
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
        </div>
      </section>

      {/* STATISTICS BAR */}
      <Reveal delay={100}>
        <section className="w-full bg-surface-container-lowest/50 backdrop-blur-[2px] py-16 border-y border-border">
          <div className="adk-container w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center justify-center text-center px-4 bg-surface-container/30 rounded-3xl p-6 border border-border hover:bg-surface-container/50 transition-colors">
                <span className="font-ui text-label uppercase text-on-surface-variant tracking-widest mb-3">
                  Happy_Customers
                </span>
                <span className="font-display text-stat text-primary bg-clip-text text-transparent bg-gradient-to-br from-primary to-primary-hover font-bold">
                  {companyInfo.stats.customers}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center text-center px-4 bg-surface-container/30 rounded-3xl p-6 border border-border hover:bg-surface-container/50 transition-colors">
                <span className="font-ui text-label uppercase text-on-surface-variant tracking-widest mb-3">
                  Operating_Exp
                </span>
                <span className="font-display text-stat text-secondary bg-clip-text text-transparent bg-gradient-to-br from-secondary to-secondary/80 font-bold">
                  {companyInfo.stats.yearsExperience}+{" "}
                  <span className="font-ui text-subheading text-on-surface-variant align-middle font-normal">YRS</span>
                </span>
              </div>
              <div className="flex flex-col items-center justify-center text-center px-4 bg-surface-container/30 rounded-3xl p-6 border border-border hover:bg-surface-container/50 transition-colors">
                <span className="font-ui text-label uppercase text-on-surface-variant tracking-widest mb-3">
                  Installations
                </span>
                <span className="font-display text-stat text-tertiary bg-clip-text text-transparent bg-gradient-to-br from-tertiary to-tertiary-container font-bold">
                  {companyInfo.stats.installations}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center text-center px-4 bg-surface-container/30 rounded-3xl p-6 border border-border hover:bg-surface-container/50 transition-colors">
                <span className="font-ui text-label uppercase text-on-surface-variant tracking-widest mb-3">
                  Branch_Offices
                </span>
                <span className="font-display text-stat text-primary bg-clip-text text-transparent bg-gradient-to-br from-primary to-primary-hover font-bold">
                  08
                </span>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* MACHINE CLASSIFICATION */}
      <Reveal>
        <section className="w-full py-20 bg-background/30 backdrop-blur-[1px] border-b border-border">
          <div className="adk-container w-full">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 pb-6 border-b border-border">
              <div>
                <h2 className="font-display text-heading text-on-surface uppercase mb-3 tracking-tight">
                  Machine Classification
                </h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>
              <p className="font-ui text-label text-on-surface-variant uppercase tracking-widest max-w-sm text-right bg-surface-container p-4 rounded-2xl border border-border">
                Standardized industrial machinery categories for precision manufacturing environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.slice(0, 4).map((c, idx) => {
                const isEven = idx % 2 === 0;
                const isThird = idx === 2;
                const accentColor = isThird ? "tertiary" : (isEven ? "primary" : "secondary");
                const bgAccentClass = isThird ? "bg-tertiary/5" : (isEven ? "bg-primary/5" : "bg-secondary/5");
                const bgHoverAccentClass = isThird ? "group-hover:bg-tertiary/10" : (isEven ? "group-hover:bg-primary/10" : "group-hover:bg-secondary/10");
                const borderHoverClass = isThird ? "hover:border-tertiary/50" : (isEven ? "hover:border-primary/50" : "hover:border-secondary/50");
                const textHoverClass = isThird ? "group-hover:text-tertiary" : (isEven ? "group-hover:text-primary" : "group-hover:text-secondary");
                const btnHoverClass = isThird ? "hover:bg-tertiary hover:text-on-tertiary" : (isEven ? "hover:bg-primary hover:text-on-primary" : "hover:bg-secondary hover:text-on-secondary");

                return (
                  <Link
                    key={c.slug}
                    href={`/products/${c.slug}`}
                    className={`group relative bg-surface-container rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-${accentColor}/10 transition-all duration-500 flex flex-col h-full min-h-[360px] overflow-hidden border border-border/60 ${borderHoverClass} hover:-translate-y-2`}
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 ${bgAccentClass} rounded-bl-full transition-colors ${bgHoverAccentClass}`}></div>
                    <div className="flex justify-between items-start mb-12 relative z-10">
                      <div className={`w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center border border-border group-hover:border-${accentColor}/50 transition-colors group-hover:scale-110 duration-300`}>
                        <span className={`material-symbols-outlined text-on-surface ${textHoverClass} transition-colors`}>
                          {c.icon}
                        </span>
                      </div>
                      <span className="font-ui text-label text-on-surface-variant bg-surface px-2.5 py-1 rounded-full">
                        SR_0{idx + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-subheading text-on-surface uppercase leading-tight mb-4 relative z-10">
                      {c.name.split(" ").map((word, wIdx) => (
                        <React.Fragment key={word}>
                          {word}
                          {wIdx === 1 ? <br /> : " "}
                        </React.Fragment>
                      ))}
                    </h3>
                    <p className="font-body text-small text-on-surface-variant mb-8 flex-grow relative z-10 leading-relaxed">
                      {c.tagline}
                    </p>
                    <div className={`inline-flex items-center justify-center gap-2 font-ui text-label uppercase text-on-surface bg-surface border border-border rounded-full py-3 px-4 transition-colors mt-auto w-full relative z-10 ${btnHoverClass}`}>
                      Access Catalogue <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ADVANCED MACHINERY GALLERY */}
      <Reveal delay={100}>
        <section className="w-full py-20 bg-surface-container/40 backdrop-blur-[2px] relative">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
          <div className="adk-container w-full relative z-10">
            <div className="flex justify-between items-end mb-12 pb-6 border-b border-border">
              <h2 className="font-display text-heading text-on-surface uppercase tracking-tight">
                Advanced Machinery
              </h2>
              <Link
                href="/products"
                className="hidden md:inline-flex items-center gap-2 font-ui text-label uppercase text-primary bg-primary/10 px-4 py-2 border border-primary/20 rounded-full hover:bg-primary/25 transition-colors"
              >
                View Full Inventory <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
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

      {/* WHY CHOOSE ADK */}
      <Reveal delay={100}>
        <section className="w-full py-20 bg-background/30 backdrop-blur-[1px] relative overflow-hidden">
          <div className="absolute right-[-10%] top-1/4 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="adk-container w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
              <div className="lg:col-span-1 flex flex-col gap-6">
                <h2 className="font-display text-heading text-on-surface uppercase tracking-tight">
                  Why Choose ADK
                </h2>
                <div className="bg-surface-container rounded-3xl p-6 border border-border relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary"></div>
                  <p className="font-ui text-label text-on-surface uppercase tracking-widest leading-relaxed">
                    Your machine is your capital — we keep it running with precision service and proven engineering.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyChooseAdk.map((item, idx) => {
                  const isPrimaryAccent = idx % 2 === 0;
                  return (
                    <div
                      key={item.title}
                      className="flex gap-6 bg-surface-container rounded-3xl p-6 border border-border hover:bg-surface-container-high transition-colors group"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center border border-border shadow-inner">
                          <span
                            className={`material-symbols-outlined text-[28px] ${isPrimaryAccent ? "text-primary" : "text-secondary"
                              }`}
                          >
                            {item.icon}
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="font-ui text-label text-on-surface-variant bg-surface px-2.5 py-1 rounded-full">
                            ADV_0{idx + 1}
                          </span>
                          <h4 className="font-display text-card-title uppercase text-on-surface font-bold">
                            {item.title}
                          </h4>
                        </div>
                        <p className="font-body text-small text-on-surface-variant leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Featured Applications Section */}
      <Reveal delay={100}>
        <section className="py-20 bg-background/30 backdrop-blur-[1px] border-t border-border">
          <div className="adk-container w-full">
            <div className="mb-12 border-b border-border pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="font-display text-heading text-on-surface uppercase tracking-tight">
                  Industries Served
                </h2>
              </div>
              <Link
                href="/applications"
                className="font-ui text-label text-primary hover:underline mb-2 tracking-widest flex items-center gap-2 font-bold uppercase"
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
                  className="bg-surface-container p-6 border border-border hover:border-primary hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group rounded-2xl"
                >
                  <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary transition-colors mb-4">
                    {app.icon}
                  </span>
                  <h4 className="font-display text-card-title text-on-surface uppercase tracking-wider font-bold group-hover:text-primary transition-colors">
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
        <section className="py-20 bg-surface/30 backdrop-blur-[1px]">
          <div className="adk-container w-full">
            <div className="mb-12 border-b border-border pb-6 text-center max-w-xl mx-auto">
              <h2 className="font-display text-heading text-on-surface uppercase tracking-tight">
                Trusted by Industry Leaders
              </h2>
              <p className="font-body text-small text-on-surface-variant mt-4">
                {companyInfo.stats.customers} installations including ISRO, Bajaj Steel, and leading fabrication companies.
              </p>
            </div>

            <ClientLogoMarquee rowA={clientMarqueeRowA} rowB={clientMarqueeRowB} />
            <div className="text-center mt-8">
              <Link
                href="/clients"
                className="font-ui text-label text-primary hover:underline tracking-widest font-bold uppercase"
              >
                View All Clients →
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 10 Years of ADK */}
      <Reveal delay={100}>
        <section className="py-20 bg-surface/30 backdrop-blur-[1px] border-y border-border">
          <div className="adk-container w-full">
            <div className="mb-10 flex flex-col gap-3 border-b border-border pb-5 md:flex-row md:items-end md:justify-between">
              <h2 className="font-display text-heading text-on-surface uppercase tracking-tight">
                10 Years of ADK
              </h2>
              <p className="font-ui text-label text-on-surface-variant uppercase max-w-sm leading-relaxed md:text-right tracking-widest">
                A decade of precision machinery, service, and trust.
              </p>
            </div>
            <DecadeVideo />
          </div>
        </section>
      </Reveal>

      {/* Enquiry CTA Strip */}
      <Reveal delay={100}>
        <section className="w-full bg-surface-container/50 backdrop-blur-[2px] py-24 relative overflow-hidden border-t border-border shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none"></div>
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10 bg-surface/80 backdrop-blur-xl p-12 rounded-[2.5rem] border border-border shadow-2xl">
            <h2 className="font-display text-heading uppercase mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-on-surface to-on-surface-variant">
              Request a Custom Machinery Quote
            </h2>
            <p className="font-ui text-label text-on-surface-variant uppercase tracking-widest mb-10 max-w-xl mx-auto leading-relaxed">
              Share your material specifications, production volume, and facility requirements.
              Our engineering team will respond within 6 business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => openEnquiry("General Machinery Enquiry")}
                className="bg-primary text-on-primary rounded-full font-ui text-button uppercase tracking-widest px-10 py-5 hover:bg-primary-hover hover:-translate-y-1 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 w-full sm:w-auto cursor-pointer font-bold"
              >
                Start Enquiry
              </button>
              <Link
                href="/contact"
                className="bg-surface-container border border-border rounded-full text-on-surface font-ui text-button uppercase tracking-widest px-10 py-5 hover:bg-surface-container-high hover:-translate-y-1 transition-all w-full sm:w-auto text-center flex items-center justify-center font-bold"
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
