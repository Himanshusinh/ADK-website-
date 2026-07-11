"use client";

import React from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

export default function BlogHubPage() {
  return (
    <div className="flex flex-col w-full bg-white animate-fade-in">
      {/* Breadcrumb */}
      <div className="w-full bg-surface-container py-3 px-6 md:px-20 border-b border-charcoal/5">
        <div className="max-w-[1440px] mx-auto flex items-center gap-2 font-mono text-[10px] uppercase text-tertiary">
          <Link href="/resources" className="hover:text-primary transition-colors">
            Resources
          </Link>
          <span>/</span>
          <span className="text-charcoal font-bold">Blog</span>
        </div>
      </div>

      {/* Header */}
      <section className="relative bg-surface border-b border-charcoal/10 py-16 px-6 md:px-20 tech-grid">
        <div className="max-w-[1440px] mx-auto">
          <div className="font-mono text-primary text-[10px] uppercase tracking-[0.3em] mb-3">
            [ JOURNAL_DIRECTORY ]
          </div>
          <h1 className="font-headline text-[38px] md:text-[50px] text-charcoal uppercase tracking-tighter leading-none mb-6">
            TECHNICAL ARTICLES & JOURNALS
          </h1>
          <p className="font-mono text-xs md:text-sm text-tertiary max-w-xl leading-relaxed">
            SYSTEM_BULLETINS: Deep-dives on fiber laser gantry alignments, gas parameters, and active crowning bending loops.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-6 md:px-20 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.slug}
              className="bg-white border border-charcoal/10 p-6 md:p-8 flex flex-col justify-between hover:border-primary shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="flex justify-between items-center mb-4 font-mono text-[9px] text-tertiary uppercase">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-headline text-2xl text-charcoal uppercase font-bold group-hover:text-primary transition-colors mb-4">
                  {post.title}
                </h3>
                <p className="font-sans text-xs text-tertiary leading-relaxed mb-6">
                  {post.summary}
                </p>
              </div>

              <div className="border-t border-charcoal/5 pt-4 flex justify-between items-center mt-6">
                <span className="font-mono text-[9px] text-tertiary/75 uppercase">
                  WRITTEN_BY: {post.author}
                </span>
                <Link
                  href={`/resources/blog/${post.slug}`}
                  className="font-mono text-[10px] text-primary uppercase font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1"
                >
                  READ_ARTICLE <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
