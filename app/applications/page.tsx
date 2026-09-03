"use client";

import React from "react";
import Link from "next/link";
import { applications } from "@/lib/data";
import { useEnquiry } from "@/components/EnquiryContext";
import Reveal from "@/components/Reveal";

export default function ApplicationsHubPage() {
  const { openEnquiry } = useEnquiry();

  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* Header — Exact ADK Redesigned Header */}
      <section className="border-b border-rule panel">
        <div className="shell py-16 md:py-24">
          <p className="eyebrow">Applications</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl font-bold">
            14+ Key industries, one common question: will it run a full shift?
          </h1>
          <span className="mt-6 block h-0.5 w-10 bg-accent" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg font-sans">
            Our machines are specified around the parts you make. These are the sectors where over 850 machines we have delivered are working today.
          </p>
        </div>
      </section>

      {/* Grid of Industry Cards */}
      <section className="shell py-16 md:py-24 border-b border-rule">
        <div className="grid gap-8 md:grid-cols-2">
          {applications.map((a, i) => {
            return (
              <Reveal key={a.slug} delay={(i % 2) * 90} className="h-full">
                <article className="arrow-slide group hover-lift flex h-full flex-col panel border border-rule transition-all">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={a.heroImage}
                      alt={`${a.name} parts made on ADK machines`}
                      loading={i < 2 ? "eager" : "lazy"}
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-steel/90 via-steel/30 to-transparent" />
                    <h2 className="absolute right-6 bottom-6 left-8 font-display text-2xl text-steel-foreground font-bold transition-transform duration-500 group-hover:-translate-y-1 md:text-3xl">
                      {a.name}
                    </h2>
                  </div>
                  <div className="flex flex-1 flex-col p-8 md:p-10">
                    <p className="leading-relaxed text-muted-foreground font-sans text-sm">
                      {a.tagline || a.description}
                    </p>

                    <div className="mt-6 pt-6 border-t border-rule flex items-center justify-between">
                      <Link
                        href={`/applications/${a.slug}`}
                        className="font-mono text-xs font-bold text-foreground group-hover:text-accent uppercase tracking-wider flex items-center gap-2"
                      >
                        Explore Application Solutions
                        <span className="arrow">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Quote Banner */}
      <section className="border-y border-rule bg-steel text-steel-foreground">
        <div className="shell grid gap-10 py-16 md:grid-cols-[1.4fr_auto] md:items-end md:py-24">
          <div>
            <h2 className="max-w-2xl font-display text-3xl leading-tight md:text-4xl font-bold">
              Send us a part drawing.
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-steel-muted font-sans">
              We will tell you which machine cuts it, how long a cycle takes and what it costs to run.
            </p>
          </div>
          <button
            onClick={() => openEnquiry("Drawing Review Inquiry")}
            className="btn-sweep inline-block bg-accent px-7 py-4 text-center font-display text-base font-bold tracking-tight text-accent-foreground cursor-pointer shadow-[var(--shadow-lift)]"
          >
            Request a quote
          </button>
        </div>
      </section>
    </div>
  );
}
