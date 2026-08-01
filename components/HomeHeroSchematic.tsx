"use client";

import React from "react";

export interface HeroCallout {
  label: string;
  /** Approximate anchor on the product stage */
  side: "left" | "right" | "bottom";
}

export interface HomeHeroSlide {
  title: string;
  src: string;
  desc: string;
  link: string;
  tag: string;
  callouts: HeroCallout[];
}

interface HomeHeroSchematicProps {
  slides: HomeHeroSlide[];
  activeSlide: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}

function Callout({ callout }: { callout: HeroCallout }) {
  if (callout.side === "left") {
    return (
      <div className="pointer-events-none absolute left-3 top-[28%] z-20 hidden sm:flex items-center max-w-[42%]">
        <span className="shrink-0 bg-white dark:bg-card border border-primary px-2 py-1 font-ui text-[9px] md:text-label uppercase tracking-wider text-primary whitespace-nowrap">
          {callout.label}
        </span>
        <span className="h-px w-8 md:w-12 bg-primary shrink-0" aria-hidden />
        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" aria-hidden />
      </div>
    );
  }

  if (callout.side === "right") {
    return (
      <div className="pointer-events-none absolute right-3 top-[34%] z-20 hidden sm:flex items-center max-w-[42%] flex-row-reverse">
        <span className="shrink-0 bg-white dark:bg-card border border-primary px-2 py-1 font-ui text-[9px] md:text-label uppercase tracking-wider text-primary whitespace-nowrap">
          {callout.label}
        </span>
        <span className="h-px w-8 md:w-12 bg-primary shrink-0" aria-hidden />
        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" aria-hidden />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 hidden sm:flex -translate-x-1/2 flex-col items-center">
      <span className="h-6 w-px bg-primary" aria-hidden />
      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" aria-hidden />
      <span className="mt-1 bg-white dark:bg-card border border-primary px-2 py-1 font-ui text-[9px] md:text-label uppercase tracking-wider text-primary whitespace-nowrap">
        {callout.label}
      </span>
    </div>
  );
}

export default function HomeHeroSchematic({
  slides,
  activeSlide,
  onPrev,
  onNext,
  onSelect,
}: HomeHeroSchematicProps) {
  const active = slides[activeSlide];

  return (
    <div className="w-full relative flex flex-col gap-4">
      <div className="relative w-full aspect-[4/3] overflow-hidden border border-border bg-white dark:bg-tech-blue tech-grid group">
        {slides.map((slide, idx) => (
          <div
            key={slide.title}
            className={`absolute inset-0 flex items-center justify-center p-6 md:p-10 transition-all duration-700 ease-in-out ${
              idx === activeSlide
                ? "opacity-100 translate-x-0 scale-100 z-10"
                : "opacity-0 translate-x-6 scale-95 z-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.title}
              className="object-contain max-h-full max-w-full mix-blend-multiply dark:mix-blend-normal"
            />
          </div>
        ))}

        {active.callouts.map((callout) => (
          <Callout key={`${active.title}-${callout.label}`} callout={callout} />
        ))}

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-30 flex h-8 w-8 items-center justify-center border border-border bg-white/90 dark:bg-card/90 text-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:border-primary hover:text-primary cursor-pointer"
          aria-label="Previous image"
        >
          <span className="material-symbols-outlined text-[18px] leading-none">chevron_left</span>
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-30 flex h-8 w-8 items-center justify-center border border-border bg-white/90 dark:bg-card/90 text-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:border-primary hover:text-primary cursor-pointer"
          aria-label="Next image"
        >
          <span className="material-symbols-outlined text-[18px] leading-none">chevron_right</span>
        </button>
      </div>

      <div className="border-t border-border pt-3">
        <div className="flex items-baseline justify-between gap-3">
          <a
            href={active.link}
            className="font-display text-card-title text-foreground hover:text-primary transition-colors uppercase tracking-display"
          >
            {active.title}
            <span className="material-symbols-outlined ml-1 align-middle text-[16px]">arrow_forward</span>
          </a>
          <span className="font-ui text-label text-primary border border-primary/30 px-2 py-0.5 whitespace-nowrap">
            {active.tag}
          </span>
        </div>
        <p className="font-body font-normal text-small text-tertiary mt-2 leading-relaxed max-w-prose">
          {active.desc}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        {slides.map((slide, idx) => {
          const isActive = idx === activeSlide;
          return (
            <button
              key={slide.title}
              type="button"
              onClick={() => onSelect(idx)}
              className={`text-left px-3 py-3 border transition-colors cursor-pointer bg-white dark:bg-card ${
                isActive
                  ? "border-primary"
                  : "border-border hover:border-foreground/25"
              }`}
            >
              <span
                className={`font-ui text-label block ${
                  isActive ? "text-primary" : "text-tertiary"
                }`}
              >
                0{idx + 1}
              </span>
              <span className="font-display text-[11px] uppercase tracking-wider text-foreground mt-1.5 block leading-snug">
                {slide.title.replace(" Cutting", "").replace("CNC ", "")}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
