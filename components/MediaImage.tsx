"use client";

import React, { useState } from "react";
import MediaPlaceholder from "./MediaPlaceholder";

interface MediaImageProps {
  src?: string;
  alt: string;
  label: string;
  icon?: string;
  aspectRatio?: "video" | "square" | "portrait" | "wide";
  sublabel?: string;
  className?: string;
  objectFit?: "cover" | "contain";
}

export default function MediaImage({
  src,
  alt,
  label,
  icon = "image",
  aspectRatio = "video",
  sublabel,
  className = "",
  objectFit = "cover",
}: MediaImageProps) {
  const [failed, setFailed] = useState(!src);

  if (!src || failed) {
    return (
      <MediaPlaceholder
        label={label}
        icon={icon}
        aspectRatio={aspectRatio}
        sublabel={sublabel ?? "Photo pending from client"}
        className={className}
      />
    );
  }

  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    wide: "aspect-[16/7]",
  };

  return (
    <div className={`relative w-full ${aspectClasses[aspectRatio]} overflow-hidden ${className} ${objectFit === "contain" ? "bg-card border border-border" : ""}`}>
      <img
        alt={alt}
        src={src}
        className={`w-full h-full ${objectFit === "contain" ? "object-contain" : "object-cover"}`}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
