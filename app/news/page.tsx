"use client";

import React from "react";
import { newsEvents } from "@/lib/data";

export default function NewsEventsPage() {
  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Page Header */}
      <section className="relative bg-surface border-b border-border py-16 tech-grid">
        <div className="adk-container">
          <h1 className="font-display text-heading text-foreground uppercase tracking-display leading-none mb-6">
            NEWS & EVENTS
          </h1>
          <p className="font-ui text-label text-tertiary max-w-xl leading-relaxed">
            SYSTEM_BROADCAST: Official announcements regarding upcoming machinery trade fairs, new product launches,
            and company operational updates.
          </p>
        </div>
      </section>

      {/* Milestone Banner */}
      <section className="py-12 bg-primary/5 border-b border-border">
        <div className="adk-container text-center">
          <p className="font-display text-card-title text-foreground uppercase font-bold">
            Celebrating 10 Years of Precision & Innovation
          </p>
          <p className="font-body text-small text-tertiary mt-2 max-w-lg mx-auto">
            From a bold vision in 2015 to becoming a trusted engineering partner across India&apos;s fabrication industry.
          </p>
        </div>
      </section>

      {/* Chronological List */}
      <section className="py-20 mx-auto w-full max-w-[1000px] px-[var(--adk-container-padding)]">
        <div className="space-y-12">
          {newsEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-card border border-border p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between hover:border-primary transition-colors group"
            >
              <div className="flex items-start gap-4">
                {/* Event type icon */}
                <span className="material-symbols-outlined text-4xl text-primary bg-primary/5 p-3 border border-primary/25">
                  {evt.type === "TRADE_FAIR"
                    ? "storefront"
                    : evt.type === "LAUNCH"
                    ? "rocket_launch"
                    : "emoji_events"}
                </span>

                <div>
                  <span className="font-ui text-label text-primary tracking-label block mb-1">
                    {evt.type} &nbsp;//&nbsp; {evt.date}
                  </span>
                  <h3 className="font-display text-subheading text-foreground uppercase font-bold group-hover:text-primary transition-colors leading-snug">
                    {evt.title}
                  </h3>
                  {evt.location && (
                    <span className="font-ui text-label text-tertiary uppercase flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-[12px]">location_on</span>
                      {evt.location}
                    </span>
                  )}
                  <p className="font-body text-small text-tertiary leading-relaxed mt-4">
                    {evt.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
