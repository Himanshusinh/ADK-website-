"use client";

import React from "react";
import Link from "next/link";
import { useEnquiry } from "@/components/EnquiryContext";
import { catalogueItems } from "@/lib/catalogues";

export default function CataloguesPage() {
  const { openEnquiry } = useEnquiry();

  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      <div className="w-full border-b border-rule bg-background py-3">
        <div className="shell flex items-center gap-2 eyebrow text-[10px] text-muted-foreground">
          <Link href="/resources" className="hover:text-accent">
            Resources
          </Link>
          <span>/</span>
          <span className="text-foreground font-bold">Catalogues</span>
        </div>
      </div>

      <section className="border-b border-rule panel">
        <div className="shell py-16 md:py-24">
          <p className="eyebrow">Catalogues & Specs</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl font-bold">
            Machinery specification sheets in print.
          </h1>
          <span className="mt-6 block h-0.5 w-10 bg-accent" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg font-sans">
            Titles match the ADK print catalogue series. Request a PDF and our team will send the latest sheet —
            technical schematics, dimension data, and foundation notes.
          </p>
        </div>
      </section>

      <section className="shell py-16 md:py-24 border-b border-rule">
        <ul className="divide-y divide-rule border-y border-rule">
          {catalogueItems.map((cat) => (
            <li
              key={cat.id}
              className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-panel transition-colors"
            >
              <div className="min-w-0">
                <h3 className="font-display text-xl font-bold text-foreground">
                  {cat.name}
                </h3>
                <span className="font-mono text-xs text-muted-foreground uppercase mt-1 block">
                  SIZE: {cat.size} · REF: {cat.id}
                  {cat.brochureAlias ? ` · ${cat.brochureAlias}` : ""}
                </span>
                {cat.categorySlug ? (
                  <Link
                    href={`/products/${cat.categorySlug}`}
                    className="mt-2 inline-block text-sm font-semibold text-accent hover:underline"
                  >
                    View product range →
                  </Link>
                ) : null}
              </div>

              <button
                type="button"
                onClick={() => openEnquiry(`Download Request: ${cat.name}`)}
                className="btn-sweep inline-flex items-center gap-2 bg-accent text-accent-foreground font-display text-xs font-bold uppercase px-6 py-3 shrink-0 cursor-pointer shadow-[var(--shadow-lift)]"
              >
                <span className="material-symbols-outlined text-sm">download</span>
                Request PDF
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
