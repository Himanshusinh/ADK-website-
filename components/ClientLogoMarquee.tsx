"use client";

import React from "react";
import type { ClientLogo } from "@/lib/data";

interface ClientLogoMarqueeProps {
  rowA: ClientLogo[];
  rowB: ClientLogo[];
  className?: string;
}

function ClientLogoItem({ client }: { client: ClientLogo }) {
  return (
    <div
      className="client-logo-item flex shrink-0 items-center justify-center px-10 md:px-14 lg:px-16 h-28 md:h-32 lg:h-36"
      title={client.name}
    >
      <img
        src={client.logo}
        alt={client.name}
        className="client-logo-image block h-20 md:h-24 lg:h-28 w-auto max-w-[14rem] md:max-w-[16rem] lg:max-w-[18rem] object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function MarqueeRow({
  clients,
  direction,
  duration,
}: {
  clients: ClientLogo[];
  direction: "left" | "right";
  duration: string;
}) {
  const track = [...clients, ...clients];

  return (
    <div className="adk-marquee-row relative overflow-hidden">
      <div
        className={`adk-marquee-track flex w-max ${direction === "left" ? "adk-marquee-track-left" : "adk-marquee-track-right"}`}
        style={{ animationDuration: duration }}
      >
        {track.map((client, idx) => (
          <ClientLogoItem key={`${client.id}-${idx}`} client={client} />
        ))}
      </div>
    </div>
  );
}

function StaticLogoGrid({ clients }: { clients: ClientLogo[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-8 py-2">
      {clients.map((client) => (
        <ClientLogoItem key={client.id} client={client} />
      ))}
    </div>
  );
}

export default function ClientLogoMarquee({ rowA, rowB, className = "" }: ClientLogoMarqueeProps) {
  const allClients = [...rowA, ...rowB];

  return (
    <div className={className}>
      <div className="adk-marquee-animated space-y-10 md:space-y-12">
        <MarqueeRow clients={rowA} direction="left" duration="90s" />
        <MarqueeRow clients={rowB} direction="right" duration="95s" />
      </div>
      <div className="adk-marquee-static hidden">
        <StaticLogoGrid clients={allClients} />
      </div>
    </div>
  );
}
