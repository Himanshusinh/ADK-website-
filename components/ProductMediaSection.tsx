"use client";

import React, { useState } from "react";
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
  const slides = Array.from(
    new Set([model.image, ...(model.images ?? [])].filter(Boolean)),
  );
  const [active, setActive] = useState(0);
  const count = slides.length;
  const current = slides[active] ?? slides[0];

  const goPrev = () => setActive((i) => (i - 1 + count) % count);
  const goNext = () => setActive((i) => (i + 1) % count);

  return (
    <section className="py-16 adk-container w-full border-b border-border">
      <div className="mx-auto mb-16 w-full max-w-4xl">
        <div className="mb-10">
          <h2 className="font-display text-subheading uppercase text-foreground border-b border-border pb-3">
            Product Photography
          </h2>
        </div>

        {count === 0 ? (
          <MediaPlaceholder
            label={model.name}
            icon="image"
            aspectRatio="video"
            sublabel="Photos pending from client"
          />
        ) : (
          <div>
            <div className="relative bg-white dark:bg-tech-blue border border-border rounded-2xl overflow-hidden">
              <div className="relative aspect-[16/10] w-full">
                <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8 min-h-0">
                  <OptionalImage
                    key={current}
                    src={current}
                    fallback={fallback}
                    alt={`${model.name} — view ${active + 1}`}
                    className="max-h-full max-w-full h-full w-full object-contain mix-blend-multiply dark:mix-blend-normal"
                    placeholderLabel={model.name}
                    containerClassName="w-full h-full"
                  />
                </div>
              </div>

              {count > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous product photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center border border-border bg-card/90 text-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next product photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center border border-border bg-card/90 text-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                  </button>
                </>
              ) : null}
            </div>

            {count > 1 ? (
              <div className="mt-4 flex flex-col gap-4">
                <div className="flex items-center justify-center gap-2" role="tablist" aria-label="Product photo slides">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      role="tab"
                      aria-selected={idx === active}
                      aria-label={`Show photo ${idx + 1}`}
                      onClick={() => setActive(idx)}
                      className={`h-2 w-2 rounded-full transition-colors cursor-pointer ${
                        idx === active ? "bg-primary" : "bg-border hover:bg-tertiary"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex justify-center gap-2 overflow-x-auto pb-1">
                  {slides.map((src, idx) => (
                    <button
                      key={`${src}-${idx}`}
                      type="button"
                      onClick={() => setActive(idx)}
                      aria-label={`Thumbnail ${idx + 1}`}
                      className={`relative shrink-0 h-16 w-24 overflow-hidden rounded-lg border bg-white dark:bg-tech-blue p-1.5 transition-colors cursor-pointer ${
                        idx === active
                          ? "border-primary"
                          : "border-border hover:border-tertiary"
                      }`}
                    >
                      <OptionalImage
                        src={src}
                        fallback={fallback}
                        alt=""
                        className="object-contain h-full w-full mix-blend-multiply dark:mix-blend-normal"
                        placeholderLabel={`${idx + 1}`}
                        containerClassName="h-full w-full"
                      />
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>

      <div className="mx-auto w-full max-w-4xl">
        <h2 className="font-display text-subheading uppercase text-foreground border-b border-border pb-3 mb-8">
          Operational Demonstration
        </h2>
        {model.videoUrl ? (
          <VideoCard
            video={{
              id: `${model.id}_demo`,
              title: `${model.name} Demonstration`,
              duration: "—",
              embedUrl: model.videoUrl,
            }}
          />
        ) : (
          <MediaPlaceholder
            label={`${model.name} Demo Video`}
            icon="play_circle"
            aspectRatio="video"
            sublabel="Video pending from client — add embedUrl in lib/data.ts"
          />
        )}
      </div>
    </section>
  );
}
