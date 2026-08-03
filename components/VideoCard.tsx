"use client";

import React, { useState } from "react";
import type { VideoItem } from "@/lib/data";
import MediaImage from "./MediaImage";
import MediaPlaceholder from "./MediaPlaceholder";

interface VideoCardProps {
  video: VideoItem;
  className?: string;
}

export default function VideoCard({ video, className = "" }: VideoCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handlePlay = () => {
    if (video.embedUrl) {
      setIsOpen(true);
    }
  };

  return (
    <>
      <div
        className={`bg-card border border-border p-6 hover:border-primary transition-colors group flex flex-col justify-between ${className}`}
      >
        <div>
          <div className="mb-4 relative">
            {video.embedUrl ? (
              <button
                type="button"
                onClick={handlePlay}
                className="w-full relative cursor-pointer group/play"
                aria-label={`Play video: ${video.title}`}
              >
                <MediaImage
                  src={video.thumbnail}
                  alt={video.title}
                  label={video.title}
                  icon="play_circle"
                  aspectRatio="video"
                  sublabel={`Duration: ${video.duration}`}
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover/play:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-5xl text-white">play_circle</span>
                </span>
              </button>
            ) : (
              <MediaPlaceholder
                label={video.title}
                icon="play_circle"
                aspectRatio="video"
                sublabel={`Duration: ${video.duration} — video pending from client`}
              />
            )}
            <span className="absolute bottom-2 right-2 font-ui text-label bg-black/60 text-white px-2 py-0.5 border border-white/5">
              {video.duration}
            </span>
          </div>
          <h3 className="font-display text-card-title text-foreground uppercase font-bold group-hover:text-primary transition-colors leading-snug">
            {video.title}
          </h3>
        </div>
        <span className="font-ui text-label text-tertiary uppercase mt-4 block border-t border-border/50 pt-3">
          Demo video · {video.id}
        </span>
      </div>

      {isOpen && video.embedUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={video.title}
        >
          <div className="relative w-full max-w-4xl bg-charcoal border border-primary/30">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 text-white font-ui text-label hover:text-primary cursor-pointer"
            >
              Close
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={video.embedUrl}
                title={video.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
