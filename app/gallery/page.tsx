"use client";

import React, { useState } from "react";
import { categories } from "@/lib/data";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"machines" | "installations" | "videos">("machines");

  const machineImages = categories.flatMap((c) =>
    c.models.map((m) => ({
      name: m.name,
      category: c.name,
      url: m.image,
      id: m.id,
    }))
  );

  const installationImages = [
    { title: "Fiber Laser Setup", client: "Sterling Infra", city: "Bengaluru", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjVmy45Wdcg-47h-bK5z5RU9W0abt_yHTY3yiXMp3-6swNoq60WtALnMUTABQVTq71U7fJzCIdxrCl7G7EJxTIkSihb7FtFu2ZUlTQaRM_OLB5wPd8aL5NDPjyc8uKdcaPSzn7bkZ3H2-lGKVqMd50i8LuoUee1PXUb1AO3JfIjcSojclqCiqgnGyHxYFIsRv1V2vdwZDMyZjrSwSTusS2rVdlqfPSpiH5fT21CWvKgJculpd9Doy2uA" },
    { title: "Hydraulic Press Bending Node", client: "Apex Crafters", city: "Pune", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB38iSnXjArEblknQSMqDim07fHM_dRbPA_IDg3F56CTqo_1-gIStXEPrBP8mfv2nMRyrvToNrmVE9lTbu-F9TV49IRWZr1W-4reIbGbN0NMWVBqT1d-El2A6SSRNFWgvX3p6cR2CGDx51KBQtsS_f7NeTVovS13SsaZdXLmw97rd2Zde1Vjnq3a30Jp35TVcSPD9Dcsso8cU90_aGh1X7qEfWUv2ot0IREjCb4_7U0FPboB8T80cCH_A" },
    { title: "Robotic Panel Bender Center", client: "Precision Cabinets", city: "Manesar", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZQwmqr4e-fG8zkgbDfquMEOPCWLRUoP6ClGgI1WQgJlW0SHTY0227I52qRvFC6RWwpJ6xoOz829YKuUfp0PFKd__FOb3YIBzGLpansmaotqKkNCTWbqizLvncH6YikTAeNHHllRY7IHKG28WeX-O0_CphL7Sol08GlbuL_Q_aHiUz2kIpbubDQudMACXCo2NoUJo1R3XhjcGzPkGcRvGSnRz-8u8R3uTcT-UvO77WsywB2CGNWb84Oy1K7DeJrG-SvFo" },
  ];

  const videos = [
    { title: "ADK Fiber Laser X Series Cutting Demo (Stainless Steel 10mm)", duration: "2:45", id: "V_01" },
    { title: "CNC Press Brake Automated Crowning Angle Bend Test", duration: "1:30", id: "V_02" },
    { title: "Intelligent Panel Bender IB-I02 4-Side Folding Loop", duration: "3:15", id: "V_03" },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Page Header */}
      <section className="relative bg-surface border-b border-charcoal/10 py-16 px-6 md:px-20 tech-grid">
        <div className="max-w-[1440px] mx-auto">
          <div className="font-mono text-primary text-[10px] uppercase tracking-[0.3em] mb-3">
            [ MEDIA_ARCHIVE ]
          </div>
          <h1 className="font-headline text-[42px] md:text-[56px] text-charcoal uppercase tracking-tighter leading-none mb-6">
            GALLERY & DEMONSTRATIONS
          </h1>
          <p className="font-mono text-xs md:text-sm text-tertiary max-w-xl leading-relaxed">
            SYSTEM_ARCHIVE: Machinery catalog images, real installation footprints at customer sites,
            and machine calibration videos.
          </p>
        </div>
      </section>

      {/* Tabs Selector */}
      <section className="border-b border-charcoal/10 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex gap-8">
          {(["machines", "installations", "videos"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-mono text-xs uppercase tracking-widest py-5 border-b-2 transition-all cursor-pointer ${
                activeTab === tab
                  ? "text-primary border-primary font-bold"
                  : "text-charcoal/60 border-transparent hover:text-primary"
              }`}
            >
              {tab === "machines"
                ? "Machine Catalog"
                : tab === "installations"
                ? "Client Installations"
                : "Operational Videos"}
            </button>
          ))}
        </div>
      </section>

      {/* Tab Panels */}
      <section className="py-20 px-6 md:px-20 max-w-[1440px] mx-auto w-full min-h-[400px]">
        {activeTab === "machines" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {machineImages.map((m, idx) => (
              <div
                key={idx}
                className="bg-white border border-charcoal/10 p-6 hover:border-primary transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="h-56 bg-tech-blue flex items-center justify-center p-6 mb-4 overflow-hidden">
                    <img
                      alt={m.name}
                      className="object-contain h-full w-full mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                      src={m.url}
                    />
                  </div>
                  <h3 className="font-headline text-lg text-charcoal uppercase font-bold group-hover:text-primary transition-colors">
                    {m.name}
                  </h3>
                </div>
                <span className="font-mono text-[9px] text-tertiary uppercase mt-4 block">
                  CATEGORY: {m.category} {"//"} ID: {m.id}
                </span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "installations" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {installationImages.map((inst, idx) => (
              <div
                key={idx}
                className="bg-white border border-charcoal/10 p-6 hover:border-primary transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="h-56 bg-tech-blue flex items-center justify-center p-6 mb-4 overflow-hidden relative">
                    <img
                      alt={inst.title}
                      className="object-cover h-full w-full border border-charcoal/5 group-hover:scale-105 transition-transform duration-300"
                      src={inst.img}
                    />
                    <div className="absolute bottom-2 right-2 bg-charcoal/80 text-white font-mono text-[8px] px-2 py-0.5 border border-white/10 uppercase">
                      verified_fit
                    </div>
                  </div>
                  <h3 className="font-headline text-lg text-charcoal uppercase font-bold group-hover:text-primary transition-colors">
                    {inst.title}
                  </h3>
                </div>
                <div className="font-mono text-[9px] text-tertiary uppercase mt-4 flex justify-between border-t border-charcoal/5 pt-3">
                  <span>CLIENT: {inst.client}</span>
                  <span>LOCATION: {inst.city}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((vid) => (
              <div
                key={vid.id}
                className="bg-white border border-charcoal/10 p-6 hover:border-primary transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 bg-charcoal flex items-center justify-center relative mb-4 shadow-inner border border-charcoal/20">
                    {/* Visual Blueprint play button grid overlay */}
                    <div className="absolute inset-0 opacity-15 bg-white pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
                    <span className="material-symbols-outlined text-white text-5xl group-hover:text-primary transition-colors cursor-pointer select-none">
                      play_circle
                    </span>
                    <span className="absolute bottom-2 right-2 font-mono text-[9px] bg-black/60 text-white px-2 py-0.5 border border-white/5">
                      {vid.duration}
                    </span>
                  </div>
                  <h3 className="font-headline text-md text-charcoal uppercase font-bold group-hover:text-primary transition-colors leading-snug">
                    {vid.title}
                  </h3>
                </div>
                <span className="font-mono text-[9px] text-tertiary uppercase mt-4 block border-t border-charcoal/5 pt-3">
                  STREAM_PROTOCOL: ADK_DEMO // {vid.id}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
