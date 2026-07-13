"use client";

import MediaImage from "@/components/MediaImage";

interface BlogHeroImageProps {
  src?: string;
  title: string;
  category?: string;
}

export default function BlogHeroImage({ src, title, category }: BlogHeroImageProps) {
  return (
    <MediaImage
      src={src}
      alt={title}
      label={title}
      icon="article"
      aspectRatio="video"
      sublabel={category ?? "Hero image pending from client"}
      className="mb-10"
    />
  );
}
