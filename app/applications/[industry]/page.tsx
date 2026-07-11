import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { applications, categories } from "@/lib/data";
import IndustryEnquiryForm from "./IndustryEnquiryForm";

interface IndustryPageProps {
  params: Promise<{ industry: string }>;
}

export async function generateStaticParams() {
  return applications.map((app) => ({
    industry: app.slug,
  }));
}

export default async function IndustryPage(props: IndustryPageProps) {
  const { industry: industrySlug } = await props.params;
  const app = applications.find((a) => a.slug === industrySlug);

  if (!app) {
    notFound();
  }

  // Resolve recommended machinery models from codes/slugs
  const recommendedModels = categories
    .flatMap((c) => c.models)
    .filter(
      (m) =>
        app.recommendedMachines.includes(m.id) ||
        app.recommendedMachines.includes(m.slug)
    );

  return (
    <div className="flex flex-col w-full bg-white animate-fade-in">
      {/* Breadcrumb & Navigation */}
      <div className="w-full bg-surface-container py-3 px-6 md:px-20 border-b border-charcoal/5">
        <div className="max-w-[1440px] mx-auto flex items-center gap-2 font-mono text-[10px] uppercase text-tertiary">
          <Link href="/applications" className="hover:text-primary transition-colors">
            Applications
          </Link>
          <span>/</span>
          <span className="text-charcoal font-bold">{app.name} Sector</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative bg-surface border-b border-charcoal/10 py-16 px-6 md:px-20 tech-grid">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="font-mono text-primary text-[10px] uppercase tracking-[0.3em] mb-3">
              [ SECTOR_PROFILE: {app.id} ]
            </div>
            <h1 className="font-headline text-[38px] md:text-[50px] text-charcoal uppercase tracking-tighter leading-none mb-4">
              {app.name} Manufacturing
            </h1>
            <p className="font-sans text-xs md:text-sm text-tertiary max-w-xl leading-relaxed">
              {app.tagline}
            </p>
          </div>
          <span className="material-symbols-outlined text-[64px] text-primary bg-white border border-charcoal/10 p-4 shadow-sm">
            {app.icon}
          </span>
        </div>
      </section>

      {/* Core Challenges & Solutions */}
      <section className="py-20 px-6 md:px-20 max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-charcoal/10">
        {/* Challenges & Solutions Columns */}
        <div className="lg:col-span-7 space-y-10">
          <div>
            <h2 className="font-headline text-2xl uppercase mb-6 text-charcoal flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">report_problem</span>
              Sector Manufacturing Challenges
            </h2>
            <ul className="space-y-4 font-sans text-sm text-tertiary list-inside list-decimal">
              {app.challenges.map((challenge, idx) => (
                <li key={idx} className="pl-2 border-l border-primary/30">
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-headline text-2xl uppercase mb-6 text-charcoal flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">task_alt</span>
              Calibrated Machinery Solutions
            </h2>
            <ul className="space-y-4 font-sans text-sm text-tertiary list-inside list-disc">
              {app.solutions.map((solution, idx) => (
                <li key={idx} className="pl-2 border-l border-primary/30">
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dynamic Context Enquiry Form */}
        <div className="lg:col-span-5">
          <div className="bg-surface border border-primary/20 p-6 sticky top-28">
            <h3 className="font-headline text-2xl text-charcoal uppercase mb-6 tracking-tight">
              Request Sector Consultation
            </h3>
            <IndustryEnquiryForm industryName={app.name} />
          </div>
        </div>
      </section>

      {/* Recommended Machines */}
      {recommendedModels.length > 0 && (
        <section className="py-20 px-6 md:px-20 max-w-[1440px] mx-auto w-full">
          <h2 className="font-headline text-2xl uppercase mb-10 text-charcoal text-center">
            Recommended Machinery Configurations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {recommendedModels.map((model) => (
              <div
                key={model.slug}
                className="bg-white border border-charcoal/10 p-6 flex flex-col justify-between hover:border-primary transition-colors group"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-[9px] text-tertiary">SPEC_ID: {model.id}</span>
                    <span className="text-[10px] font-mono text-primary font-bold">{model.status}</span>
                  </div>
                  <h3 className="font-headline text-xl text-charcoal uppercase font-bold group-hover:text-primary transition-colors">
                    {model.name}
                  </h3>
                  <p className="font-sans text-xs text-tertiary leading-relaxed mt-2">
                    {model.tagline}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6 border-t border-charcoal/5 pt-4">
                  {/* Category slug resolution */}
                  <Link
                    href={`/products/fiber-laser-cutting/${model.slug}`} // Note: default link wrapper, path fallback is handled by router or data parameters
                    className="border border-charcoal py-2.5 font-mono text-[10px] uppercase hover:bg-charcoal hover:text-white transition-all tracking-widest text-center font-bold"
                  >
                    [ SCHEMATICS ]
                  </Link>
                  <Link
                    href={`/contact?interest=Industry: ${app.name} - Model: ${model.name}`}
                    className="bg-primary hover:bg-primary-hover text-white py-2.5 font-mono text-[10px] uppercase transition-all tracking-widest text-center font-bold"
                  >
                    [ GET_QUOTE ]
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
