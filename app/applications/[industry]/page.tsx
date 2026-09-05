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
    title: `${app.name} Manufacturing Solutions | ADK Engineering`,
    description: app.tagline,
  };
}

export default async function IndustryPage(props: IndustryPageProps) {
  const { industry: industrySlug } = await props.params;
  const app = applications.find((a) => a.slug === industrySlug);

  if (!app) {
    notFound();
  }

  const recommendedModels = categories
    .flatMap((c) => c.models.map((m) => ({ ...m, categorySlug: c.slug })))
    .filter(
      (m) =>
        app.recommendedMachines.includes(m.id) ||
        app.recommendedMachines.includes(m.slug)
    );

  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* Breadcrumb Header */}
      <div className="w-full border-b border-rule bg-background py-3">
        <div className="shell flex items-center gap-2 eyebrow text-[10px] text-muted-foreground">
          <Link href="/applications" className="hover:text-accent">
            Applications
          </Link>
          <span>/</span>
          <span className="text-foreground font-bold">{app.name} Sector</span>
        </div>
      </div>

      {/* Header — Exact ADK Redesigned Industry Header */}
      <section className="border-b border-rule panel">
        <div className="shell py-16 md:py-24 grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">Sector application</p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl font-bold">
              {app.name}
            </h1>
            <span className="mt-6 block h-0.5 w-10 bg-accent" />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg font-sans">
              {app.tagline || app.description}
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden border border-rule bg-steel">
            <img
              src={app.heroImage}
              alt={`${app.name} manufacturing on ADK machines`}
              width={1200}
              height={750}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Challenges & Solutions */}
      <section className="shell py-16 md:py-24 border-b border-rule grid grid-cols-1 lg:grid-cols-12 gap-14">
        <div className="lg:col-span-7 space-y-12">
          <div>
            <h2 className="border-t border-foreground pt-4 font-display text-2xl font-bold mb-6">
              Sector Manufacturing Challenges
            </h2>
            <ul className="space-y-4 font-sans text-sm text-muted-foreground divide-y divide-rule border-y border-rule">
              {app.challenges.map((challenge, idx) => (
                <li key={idx} className="py-4 flex gap-4">
                  <span className="font-mono text-xs font-bold text-accent">0{idx + 1}</span>
                  <span className="text-foreground font-medium">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="border-t border-foreground pt-4 font-display text-2xl font-bold mb-6">
              Calibrated Machinery Solutions
            </h2>
            <ul className="space-y-4 font-sans text-sm text-muted-foreground divide-y divide-rule border-y border-rule">
              {app.solutions.map((solution, idx) => (
                <li key={idx} className="py-4 flex gap-4">
                  <span className="font-mono text-xs font-bold text-accent">✓</span>
                  <span className="text-foreground font-medium">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-panel border border-rule p-6 md:p-8 sticky top-24">
            <p className="eyebrow mb-2">Sector Consultation</p>
            <h3 className="font-display text-2xl font-bold mb-6 tracking-tight">
              Request {app.name} Consultation
            </h3>
            <IndustryEnquiryForm industryName={app.name} />
          </div>
        </div>
      </section>

      {/* Recommended Machines */}
      {recommendedModels.length > 0 && (
        <section className="shell py-16 md:py-24 border-b border-rule">
          <p className="eyebrow mb-2">Machine Configurations</p>
          <h2 className="font-display text-3xl font-bold mb-10">
            Recommended Machinery for {app.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendedModels.map((model) => (
              <div
                key={model.slug}
                className="arrow-slide group hover-lift bg-card border border-rule p-8 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex justify-between items-center mb-4 font-mono text-xs">
                    <span className="text-muted-foreground">{model.id}</span>
                    <span className="text-accent font-bold font-mono text-[0.7rem] tracking-wider uppercase">ADK Series</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {model.name}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mt-2">
                    {model.tagline}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6 border-t border-rule pt-4">
                  <Link
                    href={`/products/${model.categorySlug}/${model.slug}`}
                    className="border border-foreground py-3 font-display text-xs uppercase hover:bg-steel hover:text-steel-foreground transition-all text-center font-bold"
                  >
                    View Specs
                  </Link>
                  <Link
                    href={`/contact?interest=Industry: ${app.name} - Model: ${model.name}`}
                    className="btn-sweep bg-accent text-accent-foreground py-3 font-display text-xs uppercase text-center font-bold"
                  >
                    Get Quote
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
