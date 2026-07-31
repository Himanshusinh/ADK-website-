"use client";

import React, { useState } from "react";
import { categories, installationPhotos, factoryPhotos, videoItems } from "@/lib/data";
import { getProductImageFallback } from "@/lib/media";
import OptionalImage from "@/components/OptionalImage";
import MediaImage from "@/components/MediaImage";
import VideoCard from "@/components/VideoCard";
import Reveal from "@/components/Reveal";

type GalleryTab = "machines" | "installations" | "factory" | "videos";

const TAB_LABELS: Record<GalleryTab, string> = {
  machines: "Machine Catalog",
  installations: "Client Installations",
  factory: "Factory & Infrastructure",
  videos: "Operational Videos",
};

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<GalleryTab>("machines");

  const machineImages = categories.flatMap((c) =>
    c.models.map((m) => ({
      name: m.name,
      category: c.name,
      categorySlug: c.slug,
      url: m.image,
      id: m.id,
    }))
  );

  return (
    <div className="flex flex-col w-full bg-surface">
      <section className="relative bg-surface border-b border-border py-16 tech-grid">
        <div className="adk-container">
          <h1 className="font-display text-heading text-foreground uppercase tracking-display leading-none mb-6">
            GALLERY & DEMONSTRATIONS
          </h1>
          <p className="font-ui text-label text-tertiary max-w-xl leading-relaxed">
            SYSTEM_ARCHIVE: Machinery catalog images, real installation footprints at customer sites,
            factory infrastructure, and machine calibration videos.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="adk-container flex flex-wrap gap-4 md:gap-8">
          {(Object.keys(TAB_LABELS) as GalleryTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-ui text-label tracking-ui py-5 border-b-2 transition-all cursor-pointer ${
                activeTab === tab
                  ? "text-primary border-primary font-bold"
                  : "text-foreground/60 border-transparent hover:text-primary"
              }`}
            >
              {TAB_LABELS[tab]}
            </button>
          ))}
        </div>
      </section>

      <Reveal>
      <section className="py-20 adk-container w-full min-h-[400px]">
        {activeTab === "machines" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {machineImages.map((m) => (
              <div
                key={m.id}
                className="bg-card border border-border p-6 hover:border-primary transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="h-56 bg-tech-blue flex items-center justify-center p-6 mb-4 overflow-hidden">
                    <OptionalImage
                      src={m.url}
                      fallback={getProductImageFallback(m.categorySlug)}
                      alt={m.name}
                      className="object-contain h-full w-full mix-blend-multiply dark:mix-blend-normal group-hover:scale-105 transition-transform duration-300"
                      placeholderLabel={m.name}
                    />
                  </div>
                  <h3 className="font-display text-card-title text-foreground uppercase font-bold group-hover:text-primary transition-colors">
                    {m.name}
                  </h3>
                </div>
                <span className="font-ui text-label text-tertiary uppercase mt-4 block">
                  CATEGORY: {m.category} {"//"} ID: {m.id}
                </span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "installations" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {installationPhotos.map((inst) => (
              <div
                key={inst.id}
                className="bg-card border border-border p-6 hover:border-primary transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 overflow-hidden relative">
                    <MediaImage
                      src={inst.image}
                      alt={inst.title}
                      label={inst.title}
                      icon="location_city"
                      aspectRatio="video"
                      sublabel={`${inst.client} — ${inst.city}`}
                    />
                    <div className="absolute bottom-2 right-2 bg-charcoal/80 text-white font-ui text-label px-2 py-0.5 border border-white/10 uppercase">
                      verified_fit
                    </div>
                  </div>
                  <h3 className="font-display text-card-title text-foreground uppercase font-bold group-hover:text-primary transition-colors">
                    {inst.title}
                  </h3>
                </div>
                <div className="font-ui text-label text-tertiary uppercase mt-4 flex justify-between border-t border-border/50 pt-3">
                  <span>CLIENT: {inst.client}</span>
                  <span>LOCATION: {inst.city}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "factory" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {factoryPhotos.map((photo) => (
              <div
                key={photo.id}
                className="bg-card border border-border p-6 hover:border-primary transition-colors group"
              >
                <MediaImage
                  src={photo.image}
                  alt={photo.title}
                  label={photo.title}
                  icon="factory"
                  aspectRatio="video"
                  sublabel={photo.sublabel}
                  className="mb-4"
                />
                <h3 className="font-display text-card-title text-foreground uppercase font-bold group-hover:text-primary transition-colors">
                  {photo.title}
                </h3>
              </div>
            ))}
          </div>
        )}

          {activeTab === "videos" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videoItems.map((vid) => (
                <VideoCard key={vid.id} video={vid} />
              ))}
            </div>
          )}
        </section>
      </Reveal>
    </div>
  );
}
