"use client";

import React from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import MediaImage from "@/components/MediaImage";

export default function BlogHubPage() {
  return (
    <div className="flex flex-col w-full bg-surface animate-fade-in">
      <div className="w-full bg-surface-container py-3 border-b border-border/50">
        <div className="adk-container flex items-center gap-2 font-ui text-label uppercase text-tertiary">
          <Link href="/resources" className="hover:text-primary transition-colors">
            Resources
          </Link>
          <span>/</span>
          <span className="text-foreground font-bold">Blog</span>
        </div>
      </div>

      <section className="relative bg-surface border-b border-border py-16 tech-grid">
        <div className="adk-container">
          <h1 className="font-display text-heading text-foreground uppercase tracking-display leading-none mb-6">
            TECHNICAL ARTICLES & JOURNALS
          </h1>
          <p className="font-ui text-label text-tertiary max-w-xl leading-relaxed">
            SYSTEM_BULLETINS: Deep-dives on fiber laser gantry alignments, gas parameters, and active crowning bending loops.
          </p>
        </div>
      </section>

      <section className="py-12 adk-container w-full">
        <p className="font-body text-small text-tertiary leading-relaxed max-w-2xl mb-12">
          Our technical articles are written by ADK&apos;s engineering and R&D teams,
          covering practical guidance on machine selection, parameter optimization,
          and production workflow improvements for sheet metal fabrication.
        </p>
      </section>

      <section className="py-8 adk-container w-full pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/resources/blog/${post.slug}`}
              aria-label={`Read article: ${post.title}`}
              className="bg-card border border-border overflow-hidden flex flex-col justify-between hover:border-primary shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <MediaImage
                src={post.heroImage}
                alt={post.title}
                label={post.title}
                icon="article"
                aspectRatio="video"
                sublabel={post.category ?? "Technical Article"}
                className="border-b border-border"
              />
              <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex justify-between items-center mb-4 font-ui text-label text-tertiary uppercase">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  {post.category && (
                    <span className="font-ui text-label text-primary uppercase block mb-2">
                      {post.category}
                    </span>
                  )}
                  <h3 className="font-display text-subheading text-foreground uppercase font-bold group-hover:text-primary transition-colors mb-4">
                    {post.title}
                  </h3>
                  <p className="font-body text-small text-tertiary leading-relaxed mb-6">
                    {post.summary}
                  </p>
                </div>

                <div className="border-t border-border/50 pt-4 flex justify-between items-center mt-6">
                  <span className="font-ui text-label text-tertiary/75 uppercase">
                    WRITTEN_BY: {post.author}
                  </span>
                  <span className="font-ui text-label text-primary uppercase font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    READ_ARTICLE <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
