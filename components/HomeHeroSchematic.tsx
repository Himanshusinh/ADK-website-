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

function Callout({ callout, color }: { callout: HeroCallout; color: "primary" | "secondary" }) {
  const { label, x, y } = callout;

  return (
    <div
      className="pointer-events-none absolute z-20 hidden sm:flex items-center gap-3 bg-surface-container-highest/80 backdrop-blur-md rounded-2xl border border-surface-variant px-4 py-3 shadow-xl hover:scale-105 transition-transform cursor-default whitespace-nowrap"
      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
    >
      <div
        className={`w-2 h-2 rounded-full animate-pulse ${
          color === "primary"
            ? "bg-primary shadow-[0_0_8px_rgba(255,179,177,0.8)]"
            : "bg-secondary shadow-[0_0_8px_rgba(176,199,241,0.8)]"
        }`}
      />
      <span className="font-technical-label text-[11px] uppercase tracking-widest text-on-surface">
        {label}
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
    <div className="w-full relative flex flex-col gap-6">
      {/* Big Active Image Frame */}
      <div className="group relative w-full aspect-[1.4] overflow-visible bg-transparent">
        {/* Decorative floating background elements */}
        <div className="absolute top-[10%] right-[5%] w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[10%] left-[10%] w-48 h-48 bg-secondary/10 rounded-full blur-2xl pointer-events-none"></div>

        {slides.map((slide, idx) => (
          <div
            key={slide.title}
            className={`absolute inset-0 z-10 transition-all duration-700 ease-in-out ${
              idx === activeSlide
                ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
                : "opacity-0 translate-x-6 scale-95 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-full object-contain drop-shadow-2xl z-10 relative hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            {slide.callouts.map((callout, cIdx) => (
              <Callout
                key={`${slide.title}-${callout.label}`}
                callout={callout}
                color={cIdx % 2 === 0 ? "primary" : "secondary"}
              />
            ))}
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-surface-variant bg-surface-container-high/80 backdrop-blur-md text-on-surface opacity-0 transition-opacity group-hover:opacity-100 hover:bg-primary hover:text-on-primary cursor-pointer shadow-md"
          aria-label="Previous image"
        >
          <span className="material-symbols-outlined text-[20px] leading-none">chevron_left</span>
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-surface-variant bg-surface-container-high/80 backdrop-blur-md text-on-surface opacity-0 transition-opacity group-hover:opacity-100 hover:bg-primary hover:text-on-primary cursor-pointer shadow-md"
          aria-label="Next image"
        >
          <span className="material-symbols-outlined text-[20px] leading-none">chevron_right</span>
        </button>
      </div>

      {/* Slide details (positioned cleanly below the image) */}
      <div className="border-t border-surface-variant pt-4">
        <div className="flex items-center justify-between gap-3">
          <a
            href={active.link}
            className="font-display text-card-title text-on-surface hover:text-primary transition-colors flex items-center gap-1.5 group/link uppercase tracking-display"
          >
            {active.title}
            <span className="material-symbols-outlined text-[15px] group-hover/link:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
          <span className="font-technical-label text-[10px] text-primary font-bold tracking-widest bg-primary/10 px-2.5 py-0.5 border border-primary/20 whitespace-nowrap uppercase">
            {active.tag}
          </span>
        </div>
        <p className="font-body-md text-small text-on-surface-variant mt-2 leading-relaxed">
          {active.desc}
        </p>
      </div>

      {/* Selector Mini-Cards */}
      <div className="grid grid-cols-3 gap-4">
        {slides.map((slide, idx) => {
          const isActive = idx === activeSlide;
          return (
            <button
              key={slide.title}
              type="button"
              onClick={() => onSelect(idx)}
              className={`text-left p-4 border transition-all duration-300 flex flex-col justify-between cursor-pointer relative group/btn ${
                isActive
                  ? "bg-surface-container-high border-primary shadow-sm"
                  : "bg-surface-container-low border-surface-variant hover:border-on-surface/30"
              }`}
            >
              <div className="flex justify-between items-center w-full">
                <span className={`font-technical-label text-[10px] font-bold ${isActive ? "text-primary" : "text-on-surface-variant"}`}>
                  0{idx + 1}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                )}
              </div>
              <span className="font-display text-[12px] uppercase tracking-wider text-on-surface font-bold mt-2.5 block group-hover/btn:text-primary transition-colors leading-snug">
                {slide.title.replace(" Cutting", "").replace("CNC ", "")}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
