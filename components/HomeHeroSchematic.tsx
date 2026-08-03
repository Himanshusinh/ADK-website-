"use client";

import React from "react";

export interface HeroCallout {
  label: string;
  /** Anchor X on the product stage (0–100) */
  x: number;
  /** Anchor Y on the product stage (0–100) */
  y: number;
  /** Direction the label sits away from the machine */
  align: "left" | "right" | "top" | "bottom";
  /** Leader length in px (uneven by design) */
  length: number;
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

/* Theme-invariant premium chip */
const labelClass =
  "shrink-0 bg-white/90 backdrop-blur-[2px] border border-primary/50 px-2 py-0.5 font-ui text-[9px] uppercase tracking-[0.14em] text-primary whitespace-nowrap";

function Callout({ callout }: { callout: HeroCallout }) {
  const { label, x, y, align, length } = callout;

  if (align === "left") {
    return (
      <div
        className="pointer-events-none absolute z-20 hidden sm:flex items-center"
        style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-100%, -50%)" }}
      >
        <span className={labelClass}>{label}</span>
        <span className="h-px bg-primary/70 shrink-0" style={{ width: length }} aria-hidden />
        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" aria-hidden />
      </div>
    );
  }

  if (align === "right") {
    return (
      <div
        className="pointer-events-none absolute z-20 hidden sm:flex items-center"
        style={{ left: `${x}%`, top: `${y}%`, transform: "translate(0, -50%)" }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" aria-hidden />
        <span className="h-px bg-primary/70 shrink-0" style={{ width: length }} aria-hidden />
        <span className={labelClass}>{label}</span>
      </div>
    );
  }

  if (align === "top") {
    return (
      <div
        className="pointer-events-none absolute z-20 hidden sm:flex flex-col items-center"
        style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -100%)" }}
      >
        <span className={labelClass}>{label}</span>
        <span className="w-px bg-primary/70 shrink-0" style={{ height: length }} aria-hidden />
        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" aria-hidden />
      </div>
    );
  }

  return (
    <div
      className="pointer-events-none absolute z-20 hidden sm:flex flex-col items-center"
      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, 0)" }}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" aria-hidden />
      <span className="w-px bg-primary/70 shrink-0" style={{ height: length }} aria-hidden />
      <span className={labelClass}>{label}</span>
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
      <div className="group relative w-full aspect-[4/3] overflow-visible bg-transparent">
        {slides.map((slide, idx) => (
          <div
            key={slide.title}
            className={`absolute inset-0 z-0 transition-all duration-700 ease-in-out ${
              idx === activeSlide
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-6 scale-95 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 flex items-center justify-center p-10 md:p-14 lg:p-16">
              <img
                src={slide.src}
                alt={slide.title}
                className="object-contain max-h-[78%] max-w-[72%] mix-blend-normal"
              />
            </div>
            {slide.callouts.map((callout) => (
              <Callout key={`${slide.title}-${callout.label}`} callout={callout} />
            ))}
          </div>
        ))}

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-30 flex h-8 w-8 items-center justify-center border border-border bg-surface/80 backdrop-blur-sm text-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:border-primary hover:text-primary cursor-pointer"
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
          className="absolute right-2 top-1/2 -translate-y-1/2 z-30 flex h-8 w-8 items-center justify-center border border-border bg-surface/80 backdrop-blur-sm text-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:border-primary hover:text-primary cursor-pointer"
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
