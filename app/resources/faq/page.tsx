"use client";

import React, { useState } from "react";
import Link from "next/link";
import { faqs } from "@/lib/data";
import { useEnquiry } from "@/components/EnquiryContext";

export default function FAQPage() {
  const { openEnquiry } = useEnquiry();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* Breadcrumb */}
      <div className="w-full border-b border-rule bg-background py-3">
        <div className="shell flex items-center gap-2 eyebrow text-[10px] text-muted-foreground">
          <Link href="/resources" className="hover:text-accent">
            Resources
          </Link>
          <span>/</span>
          <span className="text-foreground font-bold">FAQ</span>
        </div>
      </div>

      {/* Header — Exact ADK Redesigned Header */}
      <section className="border-b border-rule panel">
        <div className="shell py-16 md:py-24">
          <p className="eyebrow">FAQ</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl font-bold">
            Frequently asked questions.
          </h1>
          <span className="mt-6 block h-0.5 w-10 bg-accent" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg font-sans">
            Answers on machine shipping timelines, on-site calibration, training, and service level agreements (SLAs).
          </p>
        </div>
      </section>

      {/* Accordion FAQ */}
      <section className="shell py-16 md:py-24 border-b border-rule max-w-4xl">
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-rule bg-card hover:border-accent transition-colors"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left p-6 flex justify-between items-center font-display text-lg font-bold cursor-pointer select-none"
              >
                <span>{faq.question}</span>
                <span className="font-mono text-xl text-accent font-bold">
                  {openIdx === idx ? "−" : "+"}
                </span>
              </button>

              {openIdx === idx && (
                <div className="px-6 pb-6 pt-2 font-sans text-sm text-muted-foreground border-t border-rule leading-relaxed bg-panel">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Quote Banner */}
      <section className="border-y border-rule bg-steel text-steel-foreground">
        <div className="shell grid gap-10 py-16 md:grid-cols-[1.4fr_auto] md:items-end md:py-24">
          <div>
            <h2 className="max-w-2xl font-display text-3xl leading-tight md:text-4xl font-bold">
              Still have questions about a machine?
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-steel-muted font-sans">
              Talk directly with our engineering leads about lead times, custom bed sizes, or power requirements.
            </p>
          </div>
          <button
            onClick={() => openEnquiry("General Inquiry")}
            className="btn-sweep inline-block bg-accent px-7 py-4 text-center font-display text-base font-bold tracking-tight text-accent-foreground cursor-pointer shadow-[var(--shadow-lift)]"
          >
            Contact engineering
          </button>
        </div>
      </section>
    </div>
  );
}
