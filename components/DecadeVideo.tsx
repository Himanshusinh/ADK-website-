"use client";

import React, { useEffect, useRef, useState } from "react";
import { ADK_DECADE_VIDEO_POSTER, ADK_DECADE_VIDEO_URL } from "@/lib/media";

export default function DecadeVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [coarsePointer, setCoarsePointer] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      setCoarsePointer(coarse.matches);
      setReduceMotion(motion.matches);
    };
    sync();
    coarse.addEventListener("change", sync);
    motion.addEventListener("change", sync);
    return () => {
      coarse.removeEventListener("change", sync);
      motion.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (el) el.muted = muted;
  }, [muted]);

  const play = () => {
    const el = videoRef.current;
    if (!el) return;
    void el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  };

  const pause = () => {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    setPlaying(false);
  };

  const toggle = () => {
    if (playing) pause();
    else play();
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMuted((prev) => !prev);
  };

  const canHoverPlay = !coarsePointer && !reduceMotion;

  return (
    <div
      className={`group relative w-full aspect-video overflow-hidden border border-border bg-charcoal transition-transform duration-500 ease-out ${
        canHoverPlay ? "hover:scale-[1.01]" : ""
      }`}
      onMouseEnter={() => {
        if (canHoverPlay) play();
      }}
      onMouseLeave={() => {
        if (canHoverPlay) pause();
      }}
      onClick={() => {
        if (!canHoverPlay) toggle();
      }}
      role={canHoverPlay ? undefined : "button"}
      tabIndex={canHoverPlay ? undefined : 0}
      onKeyDown={(e) => {
        if (!canHoverPlay && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          toggle();
        }
      }}
      aria-label={playing ? "Pause decade celebration video" : "Play decade celebration video"}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={ADK_DECADE_VIDEO_URL}
        poster={ADK_DECADE_VIDEO_POSTER}
        muted={muted}
        playsInline
        loop
        preload="metadata"
        aria-hidden
      />

      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent transition-opacity duration-500 ${
          playing ? "opacity-40" : "opacity-85"
        }`}
        aria-hidden
      />

      <div className="pointer-events-none absolute left-4 top-4 md:left-6 md:top-6 z-10">
        <span className="font-ui text-label text-primary tracking-ui uppercase border border-primary/40 bg-black/30 backdrop-blur-sm px-2.5 py-1">
            10 Years · 2015–2025
        </span>
      </div>

      <button
        type="button"
        onClick={toggleMute}
        className="absolute right-4 top-4 md:right-6 md:top-6 z-20 flex h-10 w-10 items-center justify-center border border-white/25 bg-black/45 text-white backdrop-blur-sm transition-colors hover:border-primary hover:text-primary cursor-pointer"
        aria-label={muted ? "Unmute video" : "Mute video"}
      >
        <span className="material-symbols-outlined text-[22px] leading-none">
          {muted ? "volume_off" : "volume_up"}
        </span>
      </button>

      <div
        className={`pointer-events-none absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-400 ${
          playing ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-[0_8px_28px_rgba(214,40,40,0.45)]">
          <span className="material-symbols-outlined text-[40px] leading-none ml-0.5">
            play_arrow
          </span>
        </span>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-4 md:p-6">
        <div
          className={`max-w-md transition-opacity duration-500 ${
            playing ? "opacity-70" : "opacity-100"
          }`}
        >
          <h3 className="font-display text-subheading md:text-heading text-white uppercase tracking-display leading-none">
            A Decade of Precision
          </h3>
          <p className="font-body text-small text-white/75 mt-2 leading-relaxed">
            Celebrating 10 years of engineering, installations, and partnerships across India.
          </p>
        </div>
        <span
          className={`font-ui text-label text-white/55 uppercase tracking-ui shrink-0 transition-opacity duration-400 ${
            playing ? "opacity-0" : "opacity-100"
          }`}
        >
            {coarsePointer || reduceMotion ? "Tap to play" : "Hover to play"}
        </span>
      </div>
    </div>
  );
}
