"use client";

import React from "react";
import { newsEvents } from "@/lib/data";
import Reveal from "@/components/Reveal";
import { useEnquiry } from "@/components/EnquiryContext";

export default function NewsEventsPage() {
  const { openEnquiry } = useEnquiry();

  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* Header — Exact ADK Redesigned News Header */}
      <section className="border-b border-rule panel">
        <div className="shell py-16 md:py-24">
          <p className="eyebrow">News & Events</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl font-bold">
            From ADK Engineering & trade exhibitions.
          </h1>
          <span className="mt-6 block h-0.5 w-10 bg-accent" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg font-sans">
            Official announcements on machinery trade fairs, new product launches, and operational milestones.
          </p>
        </div>
      </section>

      {/* Chronological List */}
      <section className="shell py-16 md:py-24 border-b border-rule">
        <ul className="divide-y divide-rule border-y border-rule">
          {newsEvents.map((evt) => (
            <li key={evt.id} className="grid gap-4 py-8 md:grid-cols-[12rem_1fr] md:gap-10 items-start">
              <div>
                <p className="font-mono text-xs text-accent font-bold uppercase">{evt.date}</p>
                {evt.location && (
                  <p className="font-mono text-[10px] text-muted-foreground uppercase mt-1">
                    {evt.location}
                  </p>
                )}
              </div>

              <div>
                <span className="eyebrow text-muted-foreground block mb-1">
                  {evt.type}
                </span>
                <h3 className="font-display text-xl font-bold text-foreground leading-snug">
                  {evt.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mt-3">
                  {evt.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Quote Banner */}
      <section className="border-y border-rule bg-steel text-steel-foreground">
        <div className="shell grid gap-10 py-16 md:grid-cols-[1.4fr_auto] md:items-end md:py-24">
          <div>
            <h2 className="max-w-2xl font-display text-3xl leading-tight md:text-4xl font-bold">
              Meet our team at the next expo.
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-steel-muted font-sans">
              Schedule an exclusive live demonstration on our fiber laser or CNC press brake booth.
            </p>
          </div>
          <button
            onClick={() => openEnquiry("Expo Demonstration Request")}
            className="btn-sweep inline-block bg-accent px-7 py-4 text-center font-display text-base font-bold tracking-tight text-accent-foreground cursor-pointer shadow-[var(--shadow-lift)]"
          >
            Book demo pass
          </button>
        </div>
      </section>
    </div>
  );
}
