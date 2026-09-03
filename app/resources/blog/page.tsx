"use client";

import React from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function BlogHubPage() {
  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* Breadcrumb */}
      <div className="w-full border-b border-rule bg-background py-3">
        <div className="shell flex items-center gap-2 eyebrow text-[10px] text-muted-foreground">
          <Link href="/resources" className="hover:text-accent">
            Resources
          </Link>
          <span>/</span>
          <span className="text-foreground font-bold">Blog</span>
        </div>
      </div>

      {/* Header — Exact ADK Redesigned Header */}
      <section className="border-b border-rule panel">
        <div className="shell py-16 md:py-24">
          <p className="eyebrow text-accent">Technical Articles</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl font-bold uppercase tracking-tight">
            Engineering & Parameter Guides
          </h1>
          <span className="mt-6 block h-0.5 w-10 bg-accent" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg font-sans">
            Deep-dives on fiber laser gantry alignments, assist gas selection, and active crowning bending loops.
          </p>
        </div>
      </section>

      <section className="shell py-16 md:py-24 border-b border-rule">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 2) * 90}>
              <Link
                href={`/resources/blog/${post.slug}`}
                className="arrow-slide group hover-lift flex flex-col panel border border-rule transition-all h-full"
              >
                <div className="aspect-[16/9] overflow-hidden border-b border-rule bg-steel relative">
                  <img
                    src={post.heroImage ?? "/redesigned/workshop.jpg"}
                    alt={post.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 eyebrow text-accent border border-accent/40 bg-background/80 px-2 py-1">
                    {post.category ?? "Technical"}
                  </span>
                </div>
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex justify-between items-center mb-3 font-mono text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed mt-3">
                      {post.summary}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-rule flex justify-between items-center text-xs font-mono">
                    <span className="text-muted-foreground">By {post.author}</span>
                    <span className="font-bold text-foreground group-hover:text-accent flex items-center gap-1">
                      Read article <span className="arrow">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
