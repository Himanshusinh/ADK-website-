import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories } from "@/lib/data";
import { getProductImageFallback } from "@/lib/media";
import OptionalImage from "@/components/OptionalImage";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({
    category: c.slug,
  }));
}

export async function generateMetadata(props: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await props.params;
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return {};
  return {
    title: `${category.name} Machines`,
    description: `${category.tagline} Browse ADK ${category.name.toLowerCase()} models with specifications, brochures, and enquiry options. ${category.models.length} configurations available.`,
    keywords: [category.name, "ADK Engineering", "Ahmedabad", "India"],
  };
}

export default async function CategoryPage(props: CategoryPageProps) {
  const { category: categorySlug } = await props.params;
  const category = categories.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const siblingCategories = categories.filter((c) => c.slug !== category.slug);

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Breadcrumb & Navigation */}
      <div className="w-full bg-surface-container py-3 border-b border-border/50">
        <div className="adk-container flex items-center justify-between gap-4 font-ui text-label uppercase text-tertiary">
          <div className="flex items-center gap-2 min-w-0">
            <Link href="/products" className="hover:text-primary transition-colors shrink-0">
              Catalogue
            </Link>
            <span>/</span>
            <span className="text-foreground font-bold truncate">{category.name}</span>
          </div>
          <Link
            href="/products"
            className="hover:text-primary transition-colors shrink-0 flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[14px]">arrow_back</span>
            Back to catalogue
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative bg-surface border-b border-border py-16 tech-grid">
        <div className="adk-container">
          <h1 className="font-display text-heading text-foreground uppercase tracking-display leading-none mb-6">
            {category.name}
          </h1>
          <p className="font-body text-small text-tertiary max-w-xl leading-relaxed">
            {category.description}
          </p>
        </div>
      </section>

      {/* Sibling categories */}
      {siblingCategories.length > 0 && (
        <div className="w-full border-b border-border/50 bg-surface">
          <div className="adk-container py-4 flex flex-col sm:flex-row sm:items-center gap-3 font-ui text-label uppercase">
            <span className="text-foreground/40 tracking-wider shrink-0">OTHER_CATEGORIES:</span>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {siblingCategories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/products/${c.slug}`}
                  className="text-tertiary hover:text-primary border-b border-transparent hover:border-primary transition-colors"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Models List */}
      <section className="py-20 adk-container w-full">
        <h2 className="font-display text-subheading uppercase mb-4 border-b border-border pb-4 text-foreground">
          Available Machinery Configurations
        </h2>
        <p className="font-body text-small text-tertiary mb-8 max-w-2xl leading-relaxed">
          {category.tagline} Each model below includes full technical specifications,
          downloadable data sheets, and direct enquiry options.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {category.models.map((model) => {
            const modelHref = `/products/${category.slug}/${model.slug}`;

            return (
              <div
                key={model.slug}
                className="bg-card border border-border p-6 md:p-8 flex flex-col justify-between shadow-sm hover:border-primary transition-colors group"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-ui text-label text-tertiary uppercase">
                      SPEC_ID: {model.id}
                    </span>
                    <span className="font-ui text-label font-bold text-primary bg-primary/5 px-2 py-1 border border-primary/20">
                      {model.status}
                    </span>
                  </div>

                  <Link
                    href={modelHref}
                    className="h-64 bg-tech-blue flex items-center justify-center p-6 mb-6 overflow-hidden"
                  >
                    <OptionalImage
                      src={model.image}
                      fallback={getProductImageFallback(category.slug)}
                      alt={model.name}
                      className="object-contain h-full w-full mix-blend-multiply dark:mix-blend-normal group-hover:scale-105 transition-transform duration-500"
                      placeholderLabel={model.name}
                    />
                  </Link>

                  <Link href={modelHref}>
                    <h3 className="font-display text-subheading text-foreground uppercase mb-3 font-bold group-hover:text-primary transition-colors">
                      {model.name}
                    </h3>
                  </Link>
                  <p className="font-body text-small text-tertiary leading-relaxed mb-6">
                    {model.tagline}
                  </p>

                  {/* Tech Specs block */}
                  <div className="bg-surface-container p-4 mb-6 border-l-4 border-primary">
                    <span className="font-ui text-label uppercase text-foreground/40 tracking-wider block mb-3 font-bold">
                      SPECIFICATION_OVERVIEW:
                    </span>
                    <div className="grid grid-cols-2 gap-y-3 font-ui text-label">
                      {Object.entries(model.specsSummary).map(([key, val]) => (
                        <React.Fragment key={key}>
                          <div className="text-tertiary uppercase">{key}:</div>
                          <div className="text-foreground font-bold text-right">{val}</div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <Link
                    href={modelHref}
                    className="border border-foreground py-3 font-ui text-label uppercase hover:bg-charcoal hover:text-white transition-all tracking-ui text-center font-bold"
                  >
                    [ VIEW_SPECS ]
                  </Link>
                  <Link
                    href={`/contact?interest=${model.name}`}
                    className="bg-primary hover:bg-primary-hover text-white py-3 font-ui text-label uppercase transition-all tracking-ui text-center font-bold"
                  >
                    [ GET_QUOTE ]
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Category Comparison Highlights */}
      <section className="py-16 adk-container w-full border-t border-border">
        <h2 className="font-display text-subheading uppercase mb-8 text-foreground">
          Category Comparison Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {category.models.map((model) => (
            <div key={model.slug} className="bg-surface border border-border p-6 hover:border-primary transition-colors">
              <h3 className="font-display text-card-title text-foreground uppercase font-bold mb-3">{model.name}</h3>
              <div className="space-y-2 font-ui text-label">
                {Object.entries(model.specsSummary).map(([key, val]) => (
                  <div key={key} className="flex justify-between border-b border-border/50 pb-1">
                    <span className="text-tertiary uppercase">{key}</span>
                    <span className="text-foreground font-bold">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="py-16 bg-charcoal text-white text-center">
        <div className="adk-container">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-subheading uppercase tracking-display mb-4">
            Need a Custom {category.name} Configuration?
          </h2>
          <p className="font-ui text-label text-light-gray/60 mb-8 leading-relaxed">
            Discuss bed dimensions, power levels, and automation options with our engineering team.
          </p>
          <Link
            href={`/contact?interest=${encodeURIComponent(category.name)}`}
            className="inline-block bg-primary hover:bg-primary-hover text-white font-ui text-label tracking-ui px-10 py-5 border border-primary transition-all font-bold"
          >
            [ REQUEST_CATEGORY_QUOTE ]
          </Link>
        </div>
        </div>
      </section>
    </div>
  );
}
