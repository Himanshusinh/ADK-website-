"use client";

import React, { useState } from "react";
import Link from "next/link";
import { faqs } from "@/lib/data";

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="flex flex-col w-full bg-surface animate-fade-in">
      {/* Breadcrumb */}
      <div className="w-full bg-surface-container py-3 border-b border-border/50">
        <div className="adk-container flex items-center gap-2 font-ui text-label uppercase text-tertiary">
          <Link href="/resources" className="hover:text-primary transition-colors">
            Resources
          </Link>
          <span>/</span>
          <span className="text-foreground font-bold">FAQ</span>
        </div>
      </div>

      {/* Header */}
      <section className="relative bg-surface border-b border-border py-16 tech-grid">
        <div className="adk-container">
          <h1 className="font-display text-heading text-foreground uppercase tracking-display leading-none mb-6">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="font-ui text-label text-tertiary max-w-xl leading-relaxed">
            SYSTEM_SUPPORT: Standard operation replies regarding machine shipping timelines, on-site calibration
            training, and service level agreements (SLAs).
          </p>
        </div>
      </section>

      {/* Accordion FAQ */}
      <section className="py-20 mx-auto w-full max-w-[900px] px-[var(--adk-container-padding)]">
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-border bg-surface hover:border-primary transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left p-6 flex justify-between items-center font-display text-card-title text-foreground uppercase font-bold cursor-pointer select-none"
              >
                <span>{faq.question}</span>
                <span className="material-symbols-outlined text-primary text-2xl transition-transform duration-300">
                  {openIdx === idx ? "remove" : "add"}
                </span>
              </button>
              
              {openIdx === idx && (
                <div className="px-6 pb-6 pt-2 font-body text-small text-tertiary border-t border-border leading-relaxed animate-fade-in bg-card">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-charcoal text-white text-center border-t border-primary/30">
        <div className="adk-container">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-subheading uppercase tracking-display mb-4">
            Still Have Questions?
          </h2>
          <p className="font-ui text-label text-light-gray/60 mb-8 leading-relaxed">
            Our support team is available 24/7 for technical queries, lead time confirmations, and service requests.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-hover text-white font-ui text-label tracking-ui px-10 py-5 border border-primary transition-all font-bold"
          >
            [ CONTACT_SUPPORT ]
          </Link>
        </div>
        </div>
      </section>
    </div>
  );
}
