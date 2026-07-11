import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/lib/data";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({
    category: c.slug,
  }));
}

export default async function CategoryPage(props: CategoryPageProps) {
  const { category: categorySlug } = await props.params;
  const category = categories.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Breadcrumb & Navigation */}
      <div className="w-full bg-surface-container py-3 px-6 md:px-20 border-b border-charcoal/5">
        <div className="max-w-[1440px] mx-auto flex items-center gap-2 font-mono text-[10px] uppercase text-tertiary">
          <Link href="/products" className="hover:text-primary transition-colors">
            Catalogue
          </Link>
          <span>/</span>
          <span className="text-charcoal font-bold">{category.name}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative bg-surface border-b border-charcoal/10 py-16 px-6 md:px-20 tech-grid">
        <div className="max-w-[1440px] mx-auto">
          <div className="font-mono text-primary text-[10px] uppercase tracking-[0.3em] mb-3">
            [ CLASSIFICATION: {category.id} ]
          </div>
          <h1 className="font-headline text-[38px] md:text-[50px] text-charcoal uppercase tracking-tighter leading-none mb-6">
            {category.name}
          </h1>
          <p className="font-sans text-xs md:text-sm text-tertiary max-w-xl leading-relaxed">
            {category.description}
          </p>
        </div>
      </section>

      {/* Models List */}
      <section className="py-20 px-6 md:px-20 max-w-[1440px] mx-auto w-full">
        <h2 className="font-headline text-2xl uppercase mb-8 border-b border-charcoal/10 pb-4 text-charcoal">
          Available Machinery Configurations
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {category.models.map((model) => (
            <div
              key={model.slug}
              className="bg-white border border-charcoal/10 p-6 md:p-8 flex flex-col justify-between shadow-sm hover:border-primary transition-colors group"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-[10px] text-tertiary uppercase">
                    SPEC_ID: {model.id}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-primary bg-primary/5 px-2 py-1 border border-primary/20">
                    {model.status}
                  </span>
                </div>

                <div className="h-64 bg-tech-blue flex items-center justify-center p-6 mb-6 overflow-hidden">
                  <img
                    alt={model.name}
                    className="object-contain h-full w-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                    src={model.image}
                  />
                </div>

                <h3 className="font-headline text-2xl text-charcoal uppercase mb-3 font-bold group-hover:text-primary transition-colors">
                  {model.name}
                </h3>
                <p className="font-sans text-xs text-tertiary leading-relaxed mb-6">
                  {model.tagline}
                </p>

                {/* Tech Specs block */}
                <div className="bg-surface-container p-4 mb-6 border-l-4 border-primary">
                  <span className="font-mono text-[9px] uppercase text-charcoal/40 tracking-wider block mb-3 font-bold">
                    SPECIFICATION_OVERVIEW:
                  </span>
                  <div className="grid grid-cols-2 gap-y-3 font-mono text-[11px]">
                    {Object.entries(model.specsSummary).map(([key, val]) => (
                      <React.Fragment key={key}>
                        <div className="text-tertiary uppercase">{key}:</div>
                        <div className="text-charcoal font-bold text-right">{val}</div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <Link
                  href={`/products/${category.slug}/${model.slug}`}
                  className="border border-charcoal py-3 font-mono text-[11px] uppercase hover:bg-charcoal hover:text-white transition-all tracking-widest text-center font-bold"
                >
                  [ DATA_SHEET ]
                </Link>
                <Link
                  href={`/contact?interest=${model.name}`}
                  className="bg-primary hover:bg-primary-hover text-white py-3 font-mono text-[11px] uppercase transition-all tracking-widest text-center font-bold"
                >
                  [ GET_QUOTE ]
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
