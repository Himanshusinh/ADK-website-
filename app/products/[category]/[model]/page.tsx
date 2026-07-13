import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories, applications } from "@/lib/data";
import { getProductImageFallback } from "@/lib/media";
import OptionalImage from "@/components/OptionalImage";
import ProductMediaSection from "@/components/ProductMediaSection";
import ModelEnquiryForm from "./ModelEnquiryForm";

interface ModelPageProps {
  params: Promise<{ category: string; model: string }>;
}

export async function generateStaticParams() {
  const params: { category: string; model: string }[] = [];
  categories.forEach((cat) => {
    cat.models.forEach((m) => {
      params.push({
        category: cat.slug,
        model: m.slug,
      });
    });
  });
  return params;
}

export async function generateMetadata(props: ModelPageProps): Promise<Metadata> {
  const { category: categorySlug, model: modelSlug } = await props.params;
  const category = categories.find((c) => c.slug === categorySlug);
  const model = category?.models.find((m) => m.slug === modelSlug);
  if (!model || !category) return {};
  return {
    title: `${model.name}`,
    description: `${model.tagline}. ${model.description.slice(0, 140)}… Specs, brochure download, and quote enquiry for ADK ${category.name}.`,
    keywords: [model.name, category.name, "ADK Engineering", model.id],
  };
}

export default async function ModelPage(props: ModelPageProps) {
  const { category: categorySlug, model: modelSlug } = await props.params;

  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) {
    notFound();
  }

  const model = category.models.find((m) => m.slug === modelSlug);
  if (!model) {
    notFound();
  }

  // Find applications that recommend this model
  const relatedApps = applications.filter((app) =>
    app.recommendedMachines.includes(model.id) || app.recommendedMachines.includes(model.slug)
  );

  return (
    <div className="flex flex-col w-full bg-surface animate-fade-in">
      {/* Breadcrumb & Navigation */}
      <div className="w-full bg-surface-container py-3 border-b border-border/50">
        <div className="adk-container flex items-center gap-2 font-mono text-[10px] uppercase text-tertiary">
          <Link href="/products" className="hover:text-primary transition-colors">
            Catalogue
          </Link>
          <span>/</span>
          <Link href={`/products/${category.slug}`} className="hover:text-primary transition-colors">
            {category.name}
          </Link>
          <span>/</span>
          <span className="text-foreground font-bold">{model.name}</span>
        </div>
      </div>

      {/* Hero Showcase */}
      <section className="py-16 adk-container w-full grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-border">
        {/* Visual schematic view */}
        <div className="bg-tech-blue border border-border p-8 flex flex-col justify-between relative min-h-[400px]">
          <div className="font-mono text-[9px] text-tertiary uppercase">
            SCHEMATIC_VIEW: {model.id} {"//"} AXIS_CALIBRATED
          </div>
          <div className="flex items-center justify-center py-6">
            <OptionalImage
              src={model.image}
              fallback={getProductImageFallback(category.slug)}
              alt={model.name}
              className="object-contain max-h-[300px] w-auto mix-blend-multiply dark:mix-blend-normal"
              placeholderLabel={model.name}
            />
          </div>
          <div className="flex justify-between items-center font-mono text-[9px] text-tertiary/60">
            <span>COORD_CALIBRATION: STABLE</span>
            <span>SYSTEM_CAPACITY: OK</span>
          </div>
        </div>

        {/* Title, specifications & download */}
        <div className="flex flex-col justify-between">
          <div className="border-l-4 border-primary pl-6">
            <span className="font-mono text-primary text-[10px] uppercase tracking-[0.25em] block mb-2">
              [ SPEC_ID: {model.id} ]
            </span>
            <h1 className="font-headline text-[38px] md:text-[48px] text-foreground uppercase tracking-tighter leading-none mb-4">
              {model.name}
            </h1>
            <p className="font-sans text-sm text-tertiary mb-6 leading-relaxed">
              {model.description}
            </p>
          </div>

          {/* Model Features Bullet points */}
          <div className="my-6">
            <h3 className="font-mono text-[10px] uppercase text-foreground/50 tracking-wider block mb-3 font-bold">
              KEY_SYSTEM_FEATURES:
            </h3>
            <ul className="space-y-2 text-xs text-tertiary font-mono list-inside list-disc">
              {model.features.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
            <a
              href="/resources/catalogues"
              className="bg-charcoal text-white font-mono text-xs uppercase px-8 py-4 hover:bg-primary transition-colors tracking-[0.15em] flex items-center justify-center gap-2 text-center"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              DOWNLOAD_DATA_SHEET.PDF
            </a>
            <span className="text-[10px] font-mono text-tertiary/60 flex items-center justify-center text-center">
              FILE_SIZE: 4.8MB // SHA_256 VALIDATED
            </span>
          </div>
        </div>
      </section>

      <ProductMediaSection model={model} categorySlug={category.slug} />

      {/* Specifications Table & Enquiry Form */}
      <section className="py-20 adk-container w-full grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Spec Table */}
        <div className="lg:col-span-7">
          <h2 className="font-headline text-2xl uppercase mb-8 border-b border-border pb-3 text-foreground">
            Technical Parameter Calibration
          </h2>
          <div className="border border-border">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container font-mono text-[10px] text-foreground uppercase border-b border-border">
                  <th className="py-3 px-4 w-1/2">Technical Parameter</th>
                  <th className="py-3 px-4 w-1/2">Calibrated Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {model.specifications.map((spec, idx) => (
                  <tr key={idx} className="font-sans text-xs text-tertiary hover:bg-tech-blue/20">
                    <td className="py-3 px-4 font-semibold">{spec.label}</td>
                    <td className="py-3 px-4 font-mono text-[11px] text-foreground">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Related Applications */}
          {relatedApps.length > 0 && (
            <div className="mt-12">
              <h3 className="font-headline text-xl uppercase mb-6 text-foreground">
                Optimized For Sectors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedApps.map((app) => (
                  <Link
                    key={app.slug}
                    href={`/applications/${app.slug}`}
                    className="p-4 border border-border hover:border-primary flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-foreground group-hover:text-primary transition-colors">
                        {app.icon}
                      </span>
                      <span className="font-headline text-md text-foreground uppercase font-bold group-hover:text-primary transition-colors">
                        {app.name}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-[16px] text-tertiary group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Enquiry form (Client component wrapper) */}
        <div className="lg:col-span-5">
          <div className="bg-surface border border-primary/20 p-6 sticky top-28">
            <h3 className="font-headline text-2xl text-foreground uppercase mb-6 tracking-tight">
              Request Machinery Quote
            </h3>
            <ModelEnquiryForm modelName={model.name} />
          </div>
        </div>
      </section>
    </div>
  );
}
