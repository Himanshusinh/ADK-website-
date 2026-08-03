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
  const groupPhoto = teamPhotos.find((p) => p.type === "group") || teamPhotos[0];

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
          <h1 className="font-display text-heading text-foreground uppercase tracking-display leading-none mb-6">
            WHO WE ARE & WHAT WE DO
          </h1>
          <p className="font-ui text-label text-tertiary max-w-xl leading-relaxed">
            {companyInfo.tagline} — Over {companyInfo.stats.yearsExperience} years delivering
            fiber laser, CNC plasma, press brake, and PEB machinery across India.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <Reveal>
        <section className="py-20 adk-container w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-subheading text-foreground uppercase mb-6 tracking-display">
              Pioneering Precision Metal Machinery
            </h2>
            <div className="space-y-4 font-body text-small text-tertiary leading-relaxed">
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
            <div className="absolute top-4 right-4 font-ui text-label text-foreground/40">
              Facility overview
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

      {/* Leadership / Team */}
      <Reveal delay={100}>
        <section className="py-20 bg-surface border-y border-border">
          <div className="adk-container">
            <div className="mb-12 border-b border-border pb-6">
              <h2 className="font-display text-subheading text-foreground uppercase tracking-display">
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
                  <h3 className="font-display text-card-title text-foreground uppercase font-bold group-hover:text-primary transition-colors">
                    {member.role}
                  </h3>
                  <span className="font-ui text-label text-tertiary uppercase mt-1 block">
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
            <h2 className="font-display text-subheading text-foreground uppercase tracking-display">
              Factory & Facility
            </h2>
            <p className="font-body text-small text-tertiary mt-4 max-w-2xl leading-relaxed">
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
              <h2 className="font-display text-subheading text-foreground uppercase tracking-display">
                Our Manufacturing Prowess
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreCapabilities.map((cap) => (
                <div key={cap.title} className="bg-card p-6 border border-border flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-card-title text-foreground uppercase mb-3 font-bold border-b border-primary/20 pb-2">
                      {cap.title}
                    </h3>
                    <p className="font-body text-small text-tertiary leading-relaxed">
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
            <h2 className="font-display text-heading text-foreground uppercase tracking-display">
              Our Journey & Milestones
            </h2>
          </div>

          <div className="relative border-l border-primary/30 ml-4 md:ml-32 space-y-12">
            {timelineEvents.map((evt) => (
              <div key={evt.year} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-primary border border-primary rounded-full"></div>
                <div className="hidden md:block absolute -left-36 top-0 w-28 text-right font-display text-subheading text-primary font-bold tracking-display">
                  {evt.year}
                </div>
                <div>
                  <span className="font-display text-card-title text-foreground uppercase font-bold md:hidden block mb-1 text-primary">
                    {evt.year} - {evt.title}
                  </span>
                  <h3 className="font-display text-card-title text-foreground uppercase font-bold hidden md:block mb-2">
                    {evt.title}
                  </h3>
                  <p className="font-ui text-label text-tertiary max-w-2xl leading-relaxed">
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
              <h2 className="font-display text-heading uppercase tracking-display mb-8 leading-none">
                HAVE A PROJECT SPECIFICATION?
              </h2>
              <p className="font-ui text-label text-light-gray/60 mb-10 leading-relaxed max-w-md mx-auto">
                Discuss customized bed dimensions, laser capacities, or complete line automation with our engineering leads.
              </p>
              <button
                onClick={() => openEnquiry("Engineering Discussion Requested")}
                className="bg-primary hover:bg-primary-hover text-white font-ui text-label tracking-ui px-10 py-5 border border-primary transition-all font-bold cursor-pointer"
              >
                Discuss Specification
              </button>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
