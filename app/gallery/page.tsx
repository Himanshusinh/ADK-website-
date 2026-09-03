"use client";

import React, { useState } from "react";
import Link from "next/link";
import { categories, installationPhotos, factoryPhotos, videoItems } from "@/lib/data";
import VideoCard from "@/components/VideoCard";
import Reveal from "@/components/Reveal";
import { useEnquiry } from "@/components/EnquiryContext";

type GalleryTab = "machines" | "installations" | "factory" | "videos";

const TAB_LABELS: Record<GalleryTab, string> = {
  machines: "Machine catalogue",
  installations: "Client installations",
  factory: "Experience Center",
  videos: "Operational videos",
};

export default function GalleryPage() {
  const { openEnquiry } = useEnquiry();
  const [activeTab, setActiveTab] = useState<GalleryTab>("machines");

  const machineImages = categories.flatMap((c) =>
    c.models.map((m) => ({
      name: m.name,
      category: c.name,
      categorySlug: c.slug,
      url: m.image,
      id: m.id,
      slug: m.slug,
    }))
  );

  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* Page Header — Exact ADK Redesigned Header */}
      <section className="border-b border-rule panel">
        <div className="shell py-16 md:py-24">
          <p className="eyebrow">Gallery</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl font-bold">
            Shop floor photographs, installations, and operational video.
          </h1>
          <span className="mt-6 block h-0.5 w-10 bg-accent" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg font-sans">
            Real machine footprints across Indian fabrication shops and at our Experience Center in Ahmedabad.
          </p>
        </div>
      </section>

      {/* Filter Tabs Bar */}
      <section className="shell py-12 md:py-16 border-b border-rule">
        <div className="-mx-5 mb-8 overflow-x-auto px-5">
          <div className="flex min-w-max gap-8 border-b border-rule">
            {(Object.keys(TAB_LABELS) as GalleryTab[]).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative pb-4 text-sm font-medium whitespace-nowrap transition-colors duration-500 cursor-pointer ${
                  activeTab === tab
                    ? "text-foreground font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {TAB_LABELS[tab]}
                <span
                  className={`absolute inset-x-0 -bottom-px h-0.5 origin-left bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    activeTab === tab ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Content */}
        <Reveal key={activeTab}>
          {activeTab === "machines" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {machineImages.map((m) => (
                <Link
                  key={m.id}
                  href={`/products/${m.categorySlug}/${m.slug}`}
                  className="arrow-slide group hover-lift flex flex-col panel border border-rule transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden p-6 bg-white flex items-center justify-center border-b border-rule">
                    <img
                      src={m.url}
                      alt={m.name}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="h-full w-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-6 pt-6 pb-7">
                    <p className="eyebrow">{m.category}</p>
                    <h3 className="mt-2.5 font-display text-xl font-bold leading-tight transition-colors duration-500 group-hover:text-accent">
                      {m.name}
                    </h3>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-accent">
                      View machine
                      <span className="arrow">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {activeTab === "installations" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {installationPhotos.map((inst) => (
                <div
                  key={inst.id}
                  className="group hover-lift flex flex-col panel border border-rule transition-all overflow-hidden"
                >
                  <div className="aspect-video bg-steel overflow-hidden border-b border-rule relative">
                    <img
                      src={inst.image ?? "/assets/case-cutting-bay.jpg"}
                      alt={inst.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-6 pt-6 pb-7">
                    <p className="eyebrow">{inst.city}</p>
                    <h3 className="mt-2.5 font-display text-xl font-bold leading-tight">
                      {inst.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground font-sans">{inst.client}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "factory" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {factoryPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="group hover-lift flex flex-col panel border border-rule transition-all overflow-hidden"
                >
                  <div className="aspect-video bg-steel overflow-hidden border-b border-rule">
                    <img
                      src={photo.image ?? "/assets/workshop.jpg"}
                      alt={photo.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-6 pt-6 pb-7">
                    <p className="eyebrow">Experience Center</p>
                    <h3 className="mt-2.5 font-display text-xl font-bold leading-tight">
                      {photo.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "videos" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videoItems.map((vid) => (
                <VideoCard key={vid.id} video={vid} />
              ))}
            </div>
          )}
        </Reveal>
      </section>

      {/* Quote Banner */}
      <section className="border-y border-rule bg-steel text-steel-foreground">
        <div className="shell grid gap-10 py-16 md:grid-cols-[1.4fr_auto] md:items-end md:py-24">
          <div>
            <h2 className="max-w-2xl font-display text-3xl leading-tight md:text-4xl font-bold">
              Want to see a machine live on your cut job?
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-steel-muted font-sans">
              Visit our Experience Center in Ahmedabad or schedule a video demonstration session with an application engineer.
            </p>
          </div>
          <button
            onClick={() => openEnquiry("Live Video Demonstration Request")}
            className="btn-sweep inline-block bg-accent px-7 py-4 text-center font-display text-base font-bold tracking-tight text-accent-foreground cursor-pointer shadow-[var(--shadow-lift)]"
          >
            Request live demo
          </button>
        </div>
      </section>
    </div>
  );
}
