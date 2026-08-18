"use client";

import React from "react";
import Link from "next/link";
import { capabilityHighlights, clientLogos } from "@/lib/data";
import ClientLogoCatalogue from "@/components/ClientLogoCatalogue";
import Reveal from "@/components/Reveal";
import { useEnquiry } from "@/components/EnquiryContext";

export default function ClientsPage() {
  const { openEnquiry } = useEnquiry();

  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* Page Header — Exact ADK Redesigned Header */}
      <section className="border-b border-rule panel">
        <div className="shell py-16 md:py-24">
          <p className="eyebrow">Clients</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl font-bold">
            Shops that run ADK on the floor.
          </h1>
          <span className="mt-6 block h-0.5 w-10 bg-accent" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg font-sans">
            From ISRO and Bajaj Steel to 750+ fabrication job shops across India — the machines stay after the first year.
          </p>
        </div>
      </section>

      {/* Capability Highlights / Case Outcomes */}
      <section className="shell py-16 md:py-24 border-b border-rule">
        <p className="eyebrow">Engineering performance</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">Capabilities delivered.</h2>

        <div className="mt-10 space-y-8">
          {capabilityHighlights.map((cap) => (
            <Reveal key={cap.id}>
              <div className="arrow-slide group hover-lift border border-rule bg-card p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start transition-all">
                <div className="lg:col-span-8 space-y-4">
                  <p className="eyebrow">{cap.industry}</p>
                  <h3 className="font-display text-2xl text-foreground font-bold transition-colors group-hover:text-accent">
                    {cap.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {cap.summary}
                  </p>
                </div>

                <div className="lg:col-span-4 bg-panel border border-rule p-6 space-y-4">
                  <span className="eyebrow block">Key outcome metrics</span>
                  {cap.outcomes.map((m, idx) => (
                    <div key={idx} className="border-l-2 border-accent pl-4">
                      <div className="font-display text-2xl text-foreground font-bold">{m.value}</div>
                      <div className="font-mono text-xs text-muted-foreground uppercase">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="py-16 md:py-24 border-b border-rule bg-background">
        <div className="shell mb-12 text-center max-w-2xl mx-auto">
          <p className="eyebrow">Organizations</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">Trusted industry partners.</h2>
          <p className="mt-4 font-sans text-sm text-muted-foreground leading-relaxed">
            Including installations at ISRO, Bajaj Steel, and 750+ fabrication shops across India.
          </p>
        </div>

        <div className="shell">
          <ClientLogoCatalogue clients={clientLogos} />
        </div>
      </section>

      {/* Quote Banner */}
      <section className="border-y border-rule bg-steel text-steel-foreground">
        <div className="shell grid gap-10 py-16 md:grid-cols-[1.4fr_auto] md:items-end md:py-24">
          <div>
            <h2 className="max-w-2xl font-display text-3xl leading-tight md:text-4xl font-bold">
              Ready to partner with ADK Engineering?
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-steel-muted font-sans">
              Discuss machine specifications, laser capacities, and bed dimensions with our team.
            </p>
          </div>
          <button
            onClick={() => openEnquiry("Client Partnership Inquiry")}
            className="btn-sweep inline-block bg-accent px-7 py-4 text-center font-display text-base font-bold tracking-tight text-accent-foreground cursor-pointer shadow-[var(--shadow-lift)]"
          >
            Start a project
          </button>
        </div>
      </section>
    </div>
  );
}
