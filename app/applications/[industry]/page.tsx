import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
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

export async function generateMetadata(props: IndustryPageProps): Promise<Metadata> {
  const { industry: industrySlug } = await props.params;
  const app = applications.find((a) => a.slug === industrySlug);
  if (!app) return {};
  return {
    title: `${app.name} Manufacturing Solutions`,
    description: `${app.tagline} ADK machinery solutions for ${app.name.toLowerCase()} — challenges, recommended machines, and sector consultation.`,
    keywords: [app.name, "sheet metal", "ADK Engineering", "industrial machinery"],
  };
}

export default async function IndustryPage(props: IndustryPageProps) {
  const { industry: industrySlug } = await props.params;
  const app = applications.find((a) => a.slug === industrySlug);

  if (!app) {
    notFound();
  }

  // Resolve recommended machinery models from codes/slugs with category info
  const recommendedModels = categories
    .flatMap((c) => c.models.map((m) => ({ ...m, categorySlug: c.slug })))
    .filter(
      (m) =>
        app.recommendedMachines.includes(m.id) ||
        app.recommendedMachines.includes(m.slug)
    );

  return (
    <div className="flex flex-col w-full bg-surface animate-fade-in">
      {/* Breadcrumb & Navigation */}
      <div className="w-full bg-surface-container py-3 border-b border-border/50">
        <div className="adk-container flex items-center gap-2 font-mono text-[10px] uppercase text-tertiary">
          <Link href="/applications" className="hover:text-primary transition-colors">
            Applications
          </Link>
          <span>/</span>
          <span className="text-foreground font-bold">{app.name} Sector</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative bg-surface border-b border-border py-16 tech-grid">
        <div className="adk-container flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="font-mono text-primary text-[10px] uppercase tracking-[0.3em] mb-3">
              [ SECTOR_PROFILE: {app.id} ]
            </div>
            <h1 className="font-headline text-[38px] md:text-[50px] text-foreground uppercase tracking-tighter leading-none mb-4">
              {app.name} Manufacturing
            </h1>
            <p className="font-sans text-xs md:text-sm text-tertiary max-w-xl leading-relaxed">
              {app.tagline}
            </p>
          </div>
          <span className="material-symbols-outlined text-[64px] text-primary bg-card border border-border p-4 shadow-sm">
            {app.icon}
          </span>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-16 adk-container w-full border-b border-border">
        <div className="max-w-3xl">
          <span className="font-mono text-primary text-xs uppercase tracking-widest block mb-3">
            [ SECTOR_OVERVIEW ]
          </span>
          <h2 className="font-headline text-2xl uppercase mb-4 text-foreground">
            Industry Context
          </h2>
          <p className="font-sans text-sm text-tertiary leading-relaxed">
            {app.description}
          </p>
        </div>
      </section>

      {/* Core Challenges & Solutions */}
      <section className="py-20 adk-container w-full grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-border">
        {/* Challenges & Solutions Columns */}
        <div className="lg:col-span-7 space-y-10">
          <div>
            <h2 className="font-headline text-2xl uppercase mb-6 text-foreground flex items-center gap-2">
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
            <h2 className="font-headline text-2xl uppercase mb-6 text-foreground flex items-center gap-2">
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
            <h3 className="font-headline text-2xl text-foreground uppercase mb-6 tracking-tight">
              Request Sector Consultation
            </h3>
            <IndustryEnquiryForm industryName={app.name} />
          </div>
        </div>
      </section>

      {/* Recommended Machines */}
      {recommendedModels.length > 0 && (
        <section className="py-20 adk-container w-full">
          <h2 className="font-headline text-2xl uppercase mb-10 text-foreground text-center">
            Recommended Machinery Configurations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {recommendedModels.map((model) => (
              <div
                key={model.slug}
                className="bg-card border border-border p-6 flex flex-col justify-between hover:border-primary transition-colors group"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-[9px] text-tertiary">SPEC_ID: {model.id}</span>
                    <span className="text-[10px] font-mono text-primary font-bold">{model.status}</span>
                  </div>
                  <h3 className="font-headline text-xl text-foreground uppercase font-bold group-hover:text-primary transition-colors">
                    {model.name}
                  </h3>
                  <p className="font-sans text-xs text-tertiary leading-relaxed mt-2">
                    {model.tagline}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6 border-t border-border/50 pt-4">
                  <Link
                    href={`/products/${model.categorySlug}/${model.slug}`}
                    className="border border-foreground py-2.5 font-mono text-[10px] uppercase hover:bg-charcoal hover:text-white transition-all tracking-widest text-center font-bold"
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

      {/* Sample Use Case */}
      <section className="py-16 adk-container w-full border-t border-border">
        <div className="bg-surface border border-border p-8 md:p-10 border-l-4 border-primary">
          <span className="font-mono text-primary text-[10px] uppercase tracking-widest block mb-3">
            [ SAMPLE_USE_CASE ]
          </span>
          <h2 className="font-headline text-2xl uppercase mb-4 text-foreground">
            Typical {app.name} Fabrication Workflow
          </h2>
          <p className="font-sans text-sm text-tertiary leading-relaxed mb-6">
            A typical {app.name.toLowerCase()} manufacturing workflow begins with precision sheet profiling,
            followed by controlled bending or welding operations. ADK machines are calibrated to handle
            the specific material grades, thickness ranges, and tolerance requirements common in this sector.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-[10px]">
            <div className="bg-card p-4 border border-border">
              <span className="text-primary font-bold block mb-1">STEP_01</span>
              <span className="text-tertiary">Material profiling & cutting</span>
            </div>
            <div className="bg-card p-4 border border-border">
              <span className="text-primary font-bold block mb-1">STEP_02</span>
              <span className="text-tertiary">Forming, bending, or welding</span>
            </div>
            <div className="bg-card p-4 border border-border">
              <span className="text-primary font-bold block mb-1">STEP_03</span>
              <span className="text-tertiary">Quality inspection & dispatch</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
