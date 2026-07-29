import React from "react";

interface MediaPlaceholderProps {
  label: string;
  icon?: string;
  aspectRatio?: "video" | "square" | "portrait" | "wide";
  className?: string;
  sublabel?: string;
}

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
};

export default function MediaPlaceholder({
  label,
  icon = "image",
  aspectRatio = "video",
  className = "",
  sublabel,
}: MediaPlaceholderProps) {
  return (
    <div
      className={`relative w-full ${aspectClasses[aspectRatio]} bg-tech-blue border border-border tech-grid flex flex-col items-center justify-center overflow-hidden group ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 border border-dashed border-border m-3 pointer-events-none" />
      <span className="material-symbols-outlined text-4xl text-foreground/25 group-hover:text-primary/40 transition-colors mb-2">
        {icon}
      </span>
      <span className="font-ui text-label tracking-ui text-foreground/50 text-center px-4">
        {label}
      </span>
      {sublabel && (
        <span className="font-ui text-label uppercase tracking-wider text-tertiary/60 text-center px-4 mt-1">
          {sublabel}
        </span>
      )}
      <div className="absolute top-2 left-2 font-ui text-label text-foreground/30 uppercase">
        PLACEHOLDER
      </div>
    </div>
  );
}
