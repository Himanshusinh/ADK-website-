import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { applications, categories } from "@/lib/data";
import { getApplicationHeroFallback } from "@/lib/media";
import OptionalImage from "@/components/OptionalImage";
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
        <div className="adk-container flex items-center gap-2 font-ui text-label uppercase text-tertiary">
          <Link href="/applications" className="hover:text-primary transition-colors">
            Applications
          </Link>
          <span>/</span>
          <span className="text-foreground font-bold">{app.name} Sector</span>
        </div>
      </div>

      {/* Hero Header — 21:9 cinematic band (clamped for mobile / ultrawide) */}
      <section className="relative w-full overflow-hidden border-b border-border h-[clamp(300px,42.857vw,560px)]">
        <div className="absolute inset-0">
          <OptionalImage
            src={app.heroImage}
            fallback={getApplicationHeroFallback()}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            placeholderLabel={app.name}
            containerClassName="absolute inset-0 h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/15 to-transparent" />
        </div>
        <div className="relative adk-container flex h-full items-center py-10 md:py-12">
          <div className="max-w-2xl min-w-0">
            <div className="mb-3 flex items-center gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/25 bg-white/10 backdrop-blur-sm"
                aria-hidden
              >
                <span className="material-symbols-outlined text-[22px] text-primary leading-none">
                  {app.icon}
                </span>
              </div>
              <p className="font-ui text-label uppercase tracking-[0.14em] text-primary">
                Sector application
              </p>
            </div>
            <h1 className="font-display text-heading text-white uppercase tracking-display leading-[1.05] mb-4">
              {app.name}
            </h1>
            <p className="font-body text-small md:text-body text-white/80 max-w-xl leading-relaxed mb-6">
              {app.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-ui text-label uppercase tracking-wider text-white/55">
              <span>{recommendedModels.length} calibrated systems</span>
              <span className="hidden sm:inline text-white/25" aria-hidden>
                /
              </span>
              <Link
                href="#recommended-machinery"
                className="text-white/80 hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                View machinery
                <span className="material-symbols-outlined text-[14px]">arrow_downward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-16 adk-container w-full border-b border-border">
        <div className="max-w-3xl">
          <h2 className="font-display text-subheading uppercase mb-4 text-foreground">
            Industry Context
          </h2>
          <p className="font-body text-small text-tertiary leading-relaxed">
            {app.description}
          </p>
        </div>
      </section>

      {/* Core Challenges & Solutions */}
      <section className="py-20 adk-container w-full grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-border">
        {/* Challenges & Solutions Columns */}
        <div className="lg:col-span-7 space-y-10">
          <div>
            <h2 className="font-display text-subheading uppercase mb-6 text-foreground flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">report_problem</span>
              Sector Manufacturing Challenges
            </h2>
            <ul className="space-y-4 font-body text-small text-tertiary list-inside list-decimal">
              {app.challenges.map((challenge, idx) => (
                <li key={idx} className="pl-2 border-l border-primary/30">
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-subheading uppercase mb-6 text-foreground flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">task_alt</span>
              Calibrated Machinery Solutions
            </h2>
            <ul className="space-y-4 font-body text-small text-tertiary list-inside list-disc">
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
            <h3 className="font-display text-subheading text-foreground uppercase mb-6 tracking-display">
              Request Sector Consultation
            </h3>
            <IndustryEnquiryForm industryName={app.name} />
          </div>
        </div>
      </section>

      {/* Recommended Machines */}
      {recommendedModels.length > 0 && (
        <section id="recommended-machinery" className="py-20 adk-container w-full scroll-mt-28">
          <h2 className="font-display text-subheading uppercase mb-10 text-foreground text-center">
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
                    <span className="font-ui text-label text-tertiary">SPEC_ID: {model.id}</span>
                    <span className="font-ui text-label text-primary font-bold">{model.status}</span>
                  </div>
                  <h3 className="font-display text-card-title text-foreground uppercase font-bold group-hover:text-primary transition-colors">
                    {model.name}
                  </h3>
                  <p className="font-body text-small text-tertiary leading-relaxed mt-2">
                    {model.tagline}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6 border-t border-border/50 pt-4">
                  <Link
                    href={`/products/${model.categorySlug}/${model.slug}`}
                    className="border border-foreground py-2.5 font-ui text-label uppercase hover:bg-charcoal hover:text-white transition-all tracking-ui text-center font-bold"
                  >
                    [ SCHEMATICS ]
                  </Link>
                  <Link
                    href={`/contact?interest=Industry: ${app.name} - Model: ${model.name}`}
                    className="bg-primary hover:bg-primary-hover text-white py-2.5 font-ui text-label uppercase transition-all tracking-ui text-center font-bold"
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
          <h2 className="font-display text-subheading uppercase mb-4 text-foreground">
            Typical {app.name} Fabrication Workflow
          </h2>
          <p className="font-body text-small text-tertiary leading-relaxed mb-6">
            A typical {app.name.toLowerCase()} manufacturing workflow begins with precision sheet profiling,
            followed by controlled bending or welding operations. ADK machines are calibrated to handle
            the specific material grades, thickness ranges, and tolerance requirements common in this sector.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-ui text-label">
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
