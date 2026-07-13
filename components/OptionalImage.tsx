"use client";

import React, { useState } from "react";
import MediaPlaceholder from "./MediaPlaceholder";

interface OptionalImageProps {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
  placeholderLabel?: string;
  containerClassName?: string;
}

export default function OptionalImage({
  src,
  fallback,
  alt,
  className = "object-contain h-full w-full dark:mix-blend-normal",
  placeholderLabel,
  containerClassName = "",
}: OptionalImageProps) {
  const [failed, setFailed] = useState(false);
  const [usedFallback, setUsedFallback] = useState(false);

  if (failed && usedFallback) {
    return (
      <MediaPlaceholder
        label={placeholderLabel ?? alt}
        icon="image"
        aspectRatio="video"
        sublabel="Photo pending from client"
        className={containerClassName}
      />
    );
  }

  const activeSrc = usedFallback ? fallback : src;

  return (
    <img
      alt={alt}
      className={className}
      src={activeSrc}
      onError={() => {
        if (!usedFallback && fallback) {
          setUsedFallback(true);
        } else {
          setFailed(true);
        }
      }}
    />
  );
}
