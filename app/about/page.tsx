"use client";

import React from "react";
import { useEnquiry } from "@/components/EnquiryContext";

export default function AboutPage() {
  const { openEnquiry } = useEnquiry();

  const timelineEvents = [
    { year: "2015", title: "Company Foundation", desc: "Established ADK Engineering in Ahmedabad, starting with CNC plasma retrofitting services." },
    { year: "2018", title: "First Fiber Laser Assembly", desc: "Designed and assembled our first local 1.5kW fiber laser cutting gantry." },
    { year: "2021", title: "Facility Expansion & Press Brakes", desc: "Moved to our Vatva industrial unit and launched the CNC Press Brake P-Series." },
    { year: "2024", title: "Intelligent Panel Bending", desc: "Introduced full servo panel bending systems for automated cabinet manufacturing." },
    { year: "2026", title: "Ultra High Power Systems", desc: "Launched our 30kW fiber laser cutters and achieved 750+ units installed nationwide." },
  ];

  const coreCapabilities = [
    { title: "Gantry Kinematics", desc: "Mechanical alignment tolerances within 0.02mm using aviation-grade aluminum castings and gantry dual-drives." },
    { title: "Optical Laser Calibration", desc: "Precision laser path setup using high-power collimation and autofocus fiber assemblies." },
    { title: "Hydraulic Crown Systems", desc: "Active deflection compensation in press brakes ensuring straight angle folds across the entire plate length." },
    { title: "Software Calibration", desc: "Advanced CNC interfaces (DA66T, CypCut) calibrated directly for automatic sheet nesting." },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Page Header */}
      <section className="relative bg-surface border-b border-charcoal/10 py-16 px-6 md:px-20 tech-grid">
        <div className="max-w-[1440px] mx-auto">
          <div className="font-mono text-primary text-[10px] uppercase tracking-[0.3em] mb-3">
            [ CLASSIFICATION: ADK_PROFILE ]
          </div>
          <h1 className="font-headline text-[42px] md:text-[56px] text-charcoal uppercase tracking-tighter leading-none mb-6">
            WHO WE ARE & WHAT WE DO
          </h1>
          <p className="font-mono text-xs md:text-sm text-tertiary max-w-xl leading-relaxed">
            SYSTEM_OVERVIEW: Over 16 years of expertise delivering high-accuracy, reliable metal
            fabrication systems tailored for heavy engineering and precision sheet metal industries.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-6 md:px-20 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="font-mono text-primary text-xs uppercase tracking-widest block mb-4">
            [ 01_OVERVIEW ]
          </span>
          <h2 className="font-headline text-3xl md:text-4xl text-charcoal uppercase mb-6 tracking-tight">
            Pioneering Precision Metal Machinery
          </h2>
          <div className="space-y-4 text-tertiary text-sm leading-relaxed font-sans">
            <p>
              ADK Engineering & Solutions was founded on a simple engineering premise: that high-end
              industrial machines should not carry prohibitive cost barriers. By combining local gantry
              fabrication, precise servo tuning, and global laser sources, we build workhorses that run
              non-stop.
            </p>
            <p>
              From single job-shops to massive multi-national engineering plants, our systems are built
              for extreme gantry stiffness and longevity. We do not compromise on build quality, using
              premium structural frames and stress-relieved steel plates.
            </p>
          </div>
        </div>
        <div className="bg-tech-blue border border-charcoal/10 p-8 relative flex items-center justify-center">
          <div className="absolute top-4 right-4 font-mono text-[9px] text-charcoal/40">
            SEC_ID: ADK_FACILITY_BLUEPRINT
          </div>
          <img
            alt="ADK Factory & Infrastructure"
            className="w-full h-auto object-cover max-h-[350px] border border-charcoal/5"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOzIemnEm6V7GR2bo2GIhMBDg-NJl725eBjH6It2PL5Sjo3WhVXoleVnbj2RcKOtirLuRswUqVRNvXpHSz2a0kKCw-CTpTVqGVLS7GCKiWDHyrcsm_fQB46p0q66NNXsvVYrOjLtLu818Swx4zkFGA9-Fn2yq50Rx7pQADrf3UTTpD-48Xwfjm7Zxli8zgv18UZ5_YoHFaIvX_LtmhrsF5NXHgkt5MrIIZGMyZ0t623K4ca27FPmHufTV1KZmThJQB2H5pD3sq7CBy5-E"
          />
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-surface border-y border-charcoal/10 px-6 md:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-12 border-b border-charcoal/10 pb-6">
            <span className="font-mono text-primary text-xs uppercase tracking-widest block mb-3">
              [ 02_ENGINEERING_CAPABILITIES ]
            </span>
            <h2 className="font-headline text-3xl md:text-4xl text-charcoal uppercase tracking-tight">
              Our Manufacturing Prowess
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreCapabilities.map((cap) => (
              <div key={cap.title} className="bg-white p-6 border border-charcoal/10 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline text-xl text-charcoal uppercase mb-3 font-bold border-b border-primary/20 pb-2">
                    {cap.title}
                  </h3>
                  <p className="font-sans text-xs text-tertiary leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
                <span className="material-symbols-outlined text-3xl text-charcoal/10 self-end mt-4">
                  developer_board
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 md:px-20 max-w-[1440px] mx-auto">
        <div className="mb-16 text-center max-w-xl mx-auto">
          <span className="font-mono text-primary text-xs uppercase tracking-widest block mb-3">
            [ 03_CHRONOLOGY ]
          </span>
          <h2 className="font-headline text-[36px] md:text-[46px] text-charcoal uppercase tracking-tighter">
            Our Journey & Milestones
          </h2>
        </div>

        <div className="relative border-l border-primary/30 ml-4 md:ml-32 space-y-12">
          {timelineEvents.map((evt) => (
            <div key={evt.year} className="relative pl-8 md:pl-12">
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-primary border border-primary rounded-full"></div>
              
              {/* Year callout on left for md+ */}
              <div className="hidden md:block absolute -left-36 top-0 w-28 text-right font-headline text-2xl text-primary font-bold tracking-tight">
                {evt.year}
              </div>

              <div>
                <span className="font-headline text-xl text-charcoal uppercase font-bold md:hidden block mb-1 text-primary">
                  {evt.year} - {evt.title}
                </span>
                <h3 className="font-headline text-xl text-charcoal uppercase font-bold hidden md:block mb-2">
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

      {/* CTA section */}
      <section className="py-20 bg-charcoal text-white border-t border-primary/30 text-center px-6">
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
      </section>
    </div>
  );
}
