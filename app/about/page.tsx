"use client";

import React from "react";
import { teamPhotos, factoryPhotos, companyInfo, timelineEvents } from "@/lib/data";
import { useEnquiry } from "@/components/EnquiryContext";
import Reveal from "@/components/Reveal";
import MediaImage from "@/components/MediaImage";

export default function AboutPage() {
  const { openEnquiry } = useEnquiry();

  const groupPhoto = teamPhotos.find((p) => p.type === "group");
  const leadershipPhotos = teamPhotos.filter((p) => p.type === "portrait");
  const heroFactory = factoryPhotos[0];

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

      {/* Group Photo */}
      {groupPhoto && (
        <Reveal delay={100}>
        <section className="py-12 bg-surface border-y border-border">
          <div className="adk-container">
            <span className="font-mono text-primary text-xs uppercase tracking-widest block mb-4">
              [ TEAM_GROUP ]
            </span>
            <MediaImage
              src={groupPhoto.image}
              alt={groupPhoto.title}
              label={groupPhoto.title}
              icon="groups"
              aspectRatio="wide"
              sublabel={groupPhoto.sublabel}
            />
          </div>
        </section>
        </Reveal>
      )}

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
              aspectRatio="video"
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
