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
    <div className="flex flex-col w-full bg-white animate-fade-in">
      {/* Breadcrumb */}
      <div className="w-full bg-surface-container py-3 px-6 md:px-20 border-b border-charcoal/5">
        <div className="max-w-[1440px] mx-auto flex items-center gap-2 font-mono text-[10px] uppercase text-tertiary">
          <Link href="/resources" className="hover:text-primary transition-colors">
            Resources
          </Link>
          <span>/</span>
          <span className="text-charcoal font-bold">FAQ</span>
        </div>
      </div>

      {/* Header */}
      <section className="relative bg-surface border-b border-charcoal/10 py-16 px-6 md:px-20 tech-grid">
        <div className="max-w-[1440px] mx-auto">
          <div className="font-mono text-primary text-[10px] uppercase tracking-[0.3em] mb-3">
            [ QUERY_PROTOCOL ]
          </div>
          <h1 className="font-headline text-[38px] md:text-[50px] text-charcoal uppercase tracking-tighter leading-none mb-6">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="font-mono text-xs md:text-sm text-tertiary max-w-xl leading-relaxed">
            SYSTEM_SUPPORT: Standard operation replies regarding machine shipping timelines, on-site calibration
            training, and service level agreements (SLAs).
          </p>
        </div>
      </section>

      {/* Accordion FAQ */}
      <section className="py-20 px-6 md:px-20 max-w-[900px] mx-auto w-full">
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-charcoal/15 bg-surface hover:border-primary transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left p-6 flex justify-between items-center font-headline text-lg md:text-xl text-charcoal uppercase font-bold cursor-pointer select-none"
              >
                <span>{faq.question}</span>
                <span className="material-symbols-outlined text-primary text-2xl transition-transform duration-300">
                  {openIdx === idx ? "remove" : "add"}
                </span>
              </button>
              
              {openIdx === idx && (
                <div className="px-6 pb-6 pt-2 font-sans text-xs md:text-sm text-tertiary border-t border-charcoal/10 leading-relaxed animate-fade-in bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
