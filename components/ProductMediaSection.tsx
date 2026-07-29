"use client";

import React from "react";
import type { ProductModel } from "@/lib/data";
import { getProductImageFallback } from "@/lib/media";
import OptionalImage from "./OptionalImage";
import VideoCard from "./VideoCard";
import MediaPlaceholder from "./MediaPlaceholder";

interface ProductMediaSectionProps {
  model: ProductModel;
  categorySlug: string;
}

export default function ProductMediaSection({ model, categorySlug }: ProductMediaSectionProps) {
  const fallback = getProductImageFallback(categorySlug);
  const galleryImages = model.images ?? [];

  return (
    <section className="py-16 adk-container w-full border-b border-border">
      <div className="mb-10">
        <h2 className="font-display text-subheading uppercase text-foreground border-b border-border pb-3">
          Product Photography
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <div className="bg-tech-blue border border-border p-6 flex items-center justify-center min-h-[220px]">
          <OptionalImage
            src={model.image}
            fallback={fallback}
            alt={`${model.name} — primary`}
            className="object-contain max-h-[200px] w-full mix-blend-multiply dark:mix-blend-normal"
            placeholderLabel={model.name}
          />
        </div>
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className="bg-tech-blue border border-border p-6 flex items-center justify-center min-h-[220px]"
          >
            <OptionalImage
              src={img}
              fallback={fallback}
              alt={`${model.name} — view ${idx + 2}`}
              className="object-contain max-h-[200px] w-full mix-blend-multiply dark:mix-blend-normal"
              placeholderLabel={`${model.name} — gallery ${idx + 1}`}
            />
          </div>
        ))}
      </div>

      <div>
        <h2 className="font-display text-subheading uppercase text-foreground border-b border-border pb-3 mb-8">
          Operational Demonstration
        </h2>
        {model.videoUrl ? (
          <div className="max-w-2xl">
            <VideoCard
              video={{
                id: `${model.id}_demo`,
                title: `${model.name} Demonstration`,
                duration: "—",
                embedUrl: model.videoUrl,
              }}
            />
          </div>
        ) : (
          <MediaPlaceholder
            label={`${model.name} Demo Video`}
            icon="play_circle"
            aspectRatio="video"
            sublabel="Video pending from client — add embedUrl in lib/data.ts"
            className="max-w-2xl"
          />
        )}
      </div>
    </section>
  );
}
