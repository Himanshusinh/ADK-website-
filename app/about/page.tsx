"use client";

import React, { useState, useEffect } from "react";
import { teamPhotos, factoryPhotos, companyInfo, timelineEvents } from "@/lib/data";
import { useEnquiry } from "@/components/EnquiryContext";
import Reveal from "@/components/Reveal";
import { teamPhotoPath } from "@/lib/media";
import MediaImage from "@/components/MediaImage";

export default function AboutPage() {
  const { openEnquiry } = useEnquiry();

  const leadershipPhotos = teamPhotos.filter((p) => p.type === "portrait");
  const heroFactory = factoryPhotos[0];

  const teamSlides = [
    {
      src: teamPhotoPath("img1.jpg"),
      title: "ADK Workshop Group",
      sublabel: "Factory works team",
    },
    {
      src: teamPhotoPath("img2.jpg"),
      title: "ADK Core Engineering Group",
      sublabel: "Precision development unit",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered, teamSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamSlides.length) % teamSlides.length);
  };

  const coreCapabilities = [
    { title: "Pre-Sale Consultation", desc: "Personalized consultations to understand your requirements and recommend tailored sheet metal solutions that drive success and efficiency." },
    { title: "Installation & Training", desc: "Experienced engineers ensure seamless installation and setup. Comprehensive training programs equip your team for maximum productivity." },
    { title: "Ongoing Maintenance", desc: "Routine inspections, repairs, and upgrades by skilled technicians to ensure consistent reliability and optimal performance." },
    { title: "Spare Parts & Upgrades", desc: "Comprehensive inventory of spare parts for quick delivery. Upgrade packages keep your machinery aligned with the latest innovations." },
  ];

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Page Header */}
      <section className="relative bg-surface border-b border-border py-16 tech-grid">
        <div className="adk-container">
          <div className="font-mono text-primary text-[10px] uppercase tracking-[0.3em] mb-3">
            [ CLASSIFICATION: ADK_PROFILE ]
          </div>
          <h1 className="font-headline text-[42px] md:text-[56px] text-foreground uppercase tracking-tighter leading-none mb-6">
            WHO WE ARE & WHAT WE DO
          </h1>
          <p className="font-mono text-xs md:text-sm text-tertiary max-w-xl leading-relaxed">
            {companyInfo.tagline} — Over {companyInfo.stats.yearsExperience} years delivering
            fiber laser, CNC plasma, press brake, and PEB machinery across India.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <Reveal>
        <section className="py-20 adk-container w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-primary text-xs uppercase tracking-widest block mb-4">
              [ 01_OVERVIEW ]
            </span>
            <h2 className="font-headline text-3xl md:text-4xl text-foreground uppercase mb-6 tracking-tight">
              Pioneering Precision Metal Machinery
            </h2>
            <div className="space-y-4 text-tertiary text-sm leading-relaxed font-sans">
              <p>
                {companyInfo.overview}
              </p>
              <p>
                At ADK, our dedication to customer satisfaction extends far beyond the point of sale.
                After-sales service is a philosophy rooted in everything we do — from installation and
                training to ongoing maintenance, technical support, and spare parts availability.
              </p>
            </div>
          </div>
          <div className="bg-tech-blue border border-border p-8 relative flex items-center justify-center">
            <div className="absolute top-4 right-4 font-mono text-[9px] text-foreground/40">
              SEC_ID: ADK_FACILITY_BLUEPRINT
            </div>
            <MediaImage
              src={heroFactory?.image}
              alt={heroFactory?.title ?? "ADK Factory & Infrastructure"}
              label={heroFactory?.title ?? "ADK Factory & Infrastructure"}
              icon="factory"
              aspectRatio="wide"
              sublabel={heroFactory?.sublabel}
              className="max-h-[350px] border border-border/50"
            />
          </div>
        </section>
      </Reveal>

      {/* Group Photos Slider */}
      <Reveal delay={100}>
        <section className="py-12 bg-surface border-y border-border">
          <div className="adk-container">
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-primary text-xs uppercase tracking-widest">
                [ TEAM_GROUP_SESSIONS // GALLERY ]
              </span>
              <span className="font-mono text-foreground/40 text-[10px]">
                SLIDE {String(currentSlide + 1).padStart(2, "0")} // {String(teamSlides.length).padStart(2, "0")}
              </span>
            </div>

            <div
              className="relative w-full aspect-[16/9] md:aspect-[16/7] overflow-hidden border border-border group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Slides */}
              {teamSlides.map((slide, idx) => (
                <div
                  key={slide.src}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                >
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle bottom gradient and title info */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white flex flex-col justify-end z-20">
                    <h3 className="font-headline text-lg md:text-xl uppercase font-bold text-primary">
                      {slide.title}
                    </h3>
                    <p className="font-mono text-[10px] md:text-xs text-white/70 mt-1">
                      {slide.sublabel}
                    </p>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-primary text-white p-2 border border-white/10 hover:border-primary transition-all cursor-pointer opacity-0 group-hover:opacity-100"
                aria-label="Previous slide"
              >
                <span className="material-symbols-outlined leading-none block">chevron_left</span>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-primary text-white p-2 border border-white/10 hover:border-primary transition-all cursor-pointer opacity-0 group-hover:opacity-100"
                aria-label="Next slide"
              >
                <span className="material-symbols-outlined leading-none block">chevron_right</span>
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-6 right-6 z-30 flex gap-2">
                {teamSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2.5 h-2.5 rounded-full border transition-all cursor-pointer ${idx === currentSlide
                      ? "bg-primary border-primary scale-110"
                      : "bg-white/30 border-white/20 hover:bg-white/60"
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Leadership / Team */}
      <Reveal delay={100}>
        <section className="py-20 bg-surface border-y border-border">
          <div className="adk-container">
            <div className="mb-12 border-b border-border pb-6">
              <span className="font-mono text-primary text-xs uppercase tracking-widest block mb-3">
                [ 02_LEADERSHIP ]
              </span>
              <h2 className="font-headline text-3xl md:text-4xl text-foreground uppercase tracking-tight">
                Our Leadership Team
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadershipPhotos.map((member) => (
                <div
                  key={member.id}
                  className="bg-card border border-border p-6 hover:border-primary hover-lift transition-all group text-center"
                >
                  <MediaImage
                    src={member.image}
                    alt={member.title}
                    label={member.title}
                    icon="person"
                    aspectRatio="portrait"
                    sublabel="Photo pending from client"
                    className="mb-4"
                  />
                  <h3 className="font-headline text-lg text-foreground uppercase font-bold group-hover:text-primary transition-colors">
                    {member.role}
                  </h3>
                  <span className="font-mono text-[9px] text-tertiary uppercase mt-1 block">
                    {member.department}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Facility & Infrastructure */}
      <Reveal delay={100}>
        <section className="py-20 adk-container w-full">
          <div className="mb-12 border-b border-border pb-6">
            <span className="font-mono text-primary text-xs uppercase tracking-widest block mb-3">
              [ 03_INFRASTRUCTURE ]
            </span>
            <h2 className="font-headline text-3xl md:text-4xl text-foreground uppercase tracking-tight">
              Factory & Facility
            </h2>
            <p className="font-sans text-sm text-tertiary mt-4 max-w-2xl leading-relaxed">
              Our Santej works at {companyInfo.worksAddress} houses gantry assembly lines,
              optical calibration labs, hydraulic press brake test bays, and R&D controls division.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {factoryPhotos.slice(1).map((photo) => (
              <MediaImage
                key={photo.id}
                src={photo.image}
                alt={photo.title}
                label={photo.title}
                icon="factory"
                aspectRatio="portrait"
                objectFit="contain"
                sublabel={photo.sublabel}
              />
            ))}
          </div>
        </section>
      </Reveal>

      {/* Core Capabilities */}
      <Reveal delay={100}>
        <section className="py-20 bg-surface border-y border-border">
          <div className="adk-container">
            <div className="mb-12 border-b border-border pb-6">
              <span className="font-mono text-primary text-xs uppercase tracking-widest block mb-3">
                [ 02_ENGINEERING_CAPABILITIES ]
              </span>
              <h2 className="font-headline text-3xl md:text-4xl text-foreground uppercase tracking-tight">
                Our Manufacturing Prowess
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreCapabilities.map((cap) => (
                <div key={cap.title} className="bg-card p-6 border border-border flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline text-xl text-foreground uppercase mb-3 font-bold border-b border-primary/20 pb-2">
                      {cap.title}
                    </h3>
                    <p className="font-sans text-xs text-tertiary leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-3xl text-foreground/10 self-end mt-4">
                    developer_board
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Timeline Section */}
      <Reveal delay={100}>
        <section className="py-20 adk-container w-full">
          <div className="mb-16 text-center max-w-xl mx-auto">
            <span className="font-mono text-primary text-xs uppercase tracking-widest block mb-3">
              [ 03_CHRONOLOGY ]
            </span>
            <h2 className="font-headline text-[36px] md:text-[46px] text-foreground uppercase tracking-tighter">
              Our Journey & Milestones
            </h2>
          </div>

          <div className="relative border-l border-primary/30 ml-4 md:ml-32 space-y-12">
            {timelineEvents.map((evt) => (
              <div key={evt.year} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-primary border border-primary rounded-full"></div>
                <div className="hidden md:block absolute -left-36 top-0 w-28 text-right font-headline text-2xl text-primary font-bold tracking-tight">
                  {evt.year}
                </div>
                <div>
                  <span className="font-headline text-xl text-foreground uppercase font-bold md:hidden block mb-1 text-primary">
                    {evt.year} - {evt.title}
                  </span>
                  <h3 className="font-headline text-xl text-foreground uppercase font-bold hidden md:block mb-2">
                    {evt.title}
                  </h3>
                  <p className="font-mono text-xs text-tertiary max-w-2xl leading-relaxed">
                    {evt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* CTA section */}
      <Reveal delay={100}>
        <section className="py-20 bg-charcoal text-white border-t border-primary/30 text-center">
          <div className="adk-container">
            <div className="max-w-2xl mx-auto">
              <div className="font-mono text-primary text-[10px] uppercase tracking-[0.2em] mb-4">
                [ CONNECT_NODE: ENGINEERS ]
              </div>
              <h2 className="font-headline text-[36px] md:text-[46px] uppercase tracking-tighter mb-8 leading-none">
                HAVE A PROJECT SPECIFICATION?
              </h2>
              <p className="font-mono text-xs text-light-gray/60 mb-10 leading-relaxed max-w-md mx-auto">
                Discuss customized bed dimensions, laser capacities, or complete line automation with our engineering leads.
              </p>
              <button
                onClick={() => openEnquiry("Engineering Discussion Requested")}
                className="bg-primary hover:bg-primary-hover text-white font-mono text-xs uppercase tracking-widest px-10 py-5 border border-primary transition-all font-bold cursor-pointer"
              >
                [ DISCUSS_SPECIFICATION ]
              </button>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
