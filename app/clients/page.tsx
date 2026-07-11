"use client";

import React from "react";
import { testimonials, caseStudies } from "@/lib/data";

export default function ClientsPage() {
  const clientLogos = [
    "Apex Metal Crafters",
    "Sterling Infrastructures",
    "Precision Cabinets Ltd",
    "Mega Heavy Engineering",
    "Dynamic Sheet Profiles",
    "Gujarat Laser Welders",
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Page Header */}
      <section className="relative bg-surface border-b border-charcoal/10 py-16 px-6 md:px-20 tech-grid">
        <div className="max-w-[1440px] mx-auto">
          <div className="font-mono text-primary text-[10px] uppercase tracking-[0.3em] mb-3">
            [ TRUST_LOG ]
          </div>
          <h1 className="font-headline text-[42px] md:text-[56px] text-charcoal uppercase tracking-tighter leading-none mb-6">
            CLIENTS & CASE STUDIES
          </h1>
          <p className="font-mono text-xs md:text-sm text-tertiary max-w-xl leading-relaxed">
            SYSTEM_LOGS: Verified installation write-ups, engineering yield reports, and company testimonials.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 md:px-20 max-w-[1440px] mx-auto w-full border-b border-charcoal/10">
        <h2 className="font-headline text-3xl uppercase mb-12 text-charcoal text-center">
          Detailed Project Case Studies
        </h2>

        <div className="space-y-16">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-surface border border-charcoal/10 p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-primary transition-colors"
            >
              {/* Writeup columns */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <span className="font-mono text-primary text-[10px] uppercase tracking-widest block mb-2">
                    [ CASE_STUDY // {cs.id} ]
                  </span>
                  <h3 className="font-headline text-2xl md:text-3xl text-charcoal uppercase font-bold">
                    {cs.title}
                  </h3>
                  <span className="font-mono text-[10px] text-tertiary uppercase">
                    CLIENT: {cs.client} &nbsp;//&nbsp; SECTOR: {cs.industry}
                  </span>
                </div>

                <div className="space-y-4 text-sm text-tertiary font-sans leading-relaxed">
                  <p>
                    <strong>Challenge:</strong> {cs.challenge}
                  </p>
                  <p>
                    <strong>Solution:</strong> {cs.solution}
                  </p>
                  <p>
                    <strong>Result:</strong> {cs.result}
                  </p>
                </div>
              </div>

              {/* Metrics callout */}
              <div className="lg:col-span-4 bg-white border border-charcoal/15 p-6 flex flex-col justify-between h-full space-y-6">
                <span className="font-mono text-[9px] uppercase text-charcoal/40 tracking-wider font-bold">
                  YIELD_METRICS:
                </span>
                <div className="space-y-6">
                  {cs.metrics.map((m, idx) => (
                    <div key={idx} className="border-l-2 border-primary pl-4">
                      <div className="font-headline text-3xl text-charcoal font-bold">{m.value}</div>
                      <div className="font-mono text-[9px] text-tertiary uppercase tracking-wider">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-surface border-b border-charcoal/10 px-6 md:px-20 w-full">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-headline text-3xl uppercase mb-12 text-charcoal text-center">
            Client Verification
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white p-8 border border-charcoal/10 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-primary mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-sm font-bold">
                        star
                      </span>
                    ))}
                  </div>
                  <p className="font-sans text-sm text-tertiary italic leading-relaxed mb-6">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>
                <div className="border-t border-charcoal/5 pt-4 flex justify-between items-center">
                  <div>
                    <h5 className="font-headline text-lg text-charcoal uppercase font-bold">
                      {t.name}
                    </h5>
                    <span className="font-mono text-[10px] text-tertiary/75">
                      {t.company} {"//"} {t.role}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-charcoal/10">
                    verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logos grid */}
      <section className="py-16 px-6 md:px-20 max-w-[1440px] mx-auto w-full">
        <h3 className="font-mono text-[10px] uppercase text-charcoal/40 tracking-[0.2em] mb-8 text-center font-bold">
          SUPPORTED_ORGANIZATIONS
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {clientLogos.map((logo, idx) => (
            <div
              key={idx}
              className="border border-charcoal/10 py-6 px-4 bg-surface text-center font-headline text-md text-charcoal/65 font-bold uppercase tracking-wider hover:border-primary transition-colors flex items-center justify-center min-h-[80px]"
            >
              {logo}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
