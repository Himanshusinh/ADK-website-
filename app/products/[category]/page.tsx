import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories } from "@/lib/data";
import CategoryQuoteSection from "./CategoryQuoteSection";

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
    title: `${category.name} | ADK Engineering`,
    description: category.tagline,
  };
}

const redesignedImageMap: Record<string, string> = {
  "fiber-laser-cutting": "/assets/adk/studio-fiber.png",
  "cnc-plasma-cutting": "/assets/adk/studio-plasma.jpg",
  "cnc-press-brake": "/assets/adk/studio-press.jpg",
  "fiber-laser-welding": "/assets/adk/studio-welder.jpg",
  "panel-bender": "/assets/adk/studio-panel.jpg",
  "peb-machinery": "/assets/adk/studio-peb.jpg",
  "shearing-machine": "/assets/adk/studio-shear.jpg",
  "newly-launched-products": "/new-product-images/iron-worker.webp",
  "spares-consumables": "/images/spares-consumables/consumables.webp",
};

const seriesTagMap: Record<string, string> = {
  "fiber-laser-cutting": "FL series",
  "cnc-plasma-cutting": "PL series",
  "cnc-press-brake": "NADKpress",
  "fiber-laser-welding": "LW series",
  "panel-bender": "PB series",
  "peb-machinery": "PEB line",
  "shearing-machine": "SH series",
  "spares-consumables": "Spares",
};

export default async function CategoryPage(props: CategoryPageProps) {
  const { category: categorySlug } = await props.params;
  const category = categories.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const seriesTag = seriesTagMap[category.slug] ?? "ADK series";
  const heroImage = redesignedImageMap[category.slug] ?? "/assets/adk/studio-fiber.png";
  const siblingCategories = categories.filter((c) => c.slug !== category.slug);

  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* Product Category Hero — Exact ADK Redesigned Layout */}
      <section className="border-b border-rule">
        <div className="shell grid gap-10 py-10 md:grid-cols-2 md:items-start md:gap-16 md:py-16">
          <div className="aspect-[4/3] bg-white border border-rule flex items-center justify-center p-6 md:p-8">
            <img
              src={heroImage}
              alt={category.name}
              width={1200}
              height={900}
              className="h-full w-full object-contain p-2"
            />
          </div>

          <div>
            <nav className="eyebrow">
              <Link href="/products" className="hover:text-accent">
                Machines
              </Link>{" "}
              / {seriesTag}
            </nav>
            <h1 className="mt-4 font-display text-4xl leading-[1.03] md:text-6xl font-bold">
              {category.name}
            </h1>
            <p className="mt-5 text-muted-foreground md:text-lg font-sans leading-relaxed">
              {category.description}
            </p>
            <p className="mt-6 inline-block border border-foreground px-3 py-1.5 font-mono text-sm">
              {category.models.length} Configurations Available
            </p>
          </div>
        </div>
      </section>

      {/* Visual Product Grid Section */}
      <section className="shell py-12 md:py-16 border-b border-rule">
        <div className="flex flex-col gap-2">
          <p className="eyebrow text-accent">Available Lineup</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold">
            {category.name} Models & Components
          </h2>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {category.models.map((m) => (
            <div
              key={m.slug}
              className="group flex flex-col border border-rule bg-card overflow-hidden hover:border-foreground transition-all duration-300 shadow-sm"
            >
              <Link
                href={`/products/${category.slug}/${m.slug}`}
                className="aspect-[4/3] bg-white p-6 relative overflow-hidden flex items-center justify-center border-b border-rule block"
              >
                <img
                  src={m.image}
                  alt={m.name}
                  width={600}
                  height={450}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="p-6 flex flex-1 flex-col justify-between">
                <div>
                  <Link href={`/products/${category.slug}/${m.slug}`}>
                    <h3 className="font-display text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-accent transition-colors">
                      {m.name}
                    </h3>
                  </Link>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground font-sans line-clamp-2">
                    {m.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-rule flex items-center justify-between font-mono text-xs">
                  <Link
                    href={`/products/${category.slug}/${m.slug}`}
                    className="font-bold text-accent hover:underline flex items-center gap-1"
                  >
                    View Specs →
                  </Link>
                  <Link
                    href={`/contact?product=${encodeURIComponent(m.name)}`}
                    className="btn-sweep bg-accent text-accent-foreground font-display text-[0.7rem] font-bold uppercase px-3.5 py-1.5 shadow-sm hover:scale-[1.03] transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[0.85rem]">mail</span>
                    Inquiry
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Models & Specifications Section */}
      <section className="shell py-16 md:py-24 border-b border-rule">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Models Column */}
          <div>
            <h2 className="border-t border-foreground pt-4 font-display text-2xl font-bold">
              Full Lineup Listing
            </h2>
            <ul className="mt-5 divide-y divide-rule border-y border-rule">
              {category.models.map((m) => (
                <li key={m.slug} className="flex flex-col gap-2 py-4">
                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-6">
                    <Link
                      href={`/products/${category.slug}/${m.slug}`}
                      className="font-mono text-sm font-semibold hover:text-accent transition-colors block"
                    >
                      {m.name}
                    </Link>
                    <span className="text-sm text-muted-foreground sm:text-right font-sans">{m.tagline}</span>
                  </div>

                  {/* Specifications Chips */}
                  {m.specsSummary && (
                    <ul className="flex flex-wrap gap-1.5 mt-1">
                      {Object.entries(m.specsSummary).slice(0, 4).map(([key, val]) => (
                        <li
                          key={key}
                          className="border border-rule px-2 py-0.5 font-mono text-[0.6875rem] tracking-wide text-muted-foreground"
                        >
                          {val}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Key Specs Column */}
          <div>
            <h2 className="border-t border-foreground pt-4 font-display text-2xl font-bold">
              Specifications
            </h2>
            <dl className="mt-5 divide-y divide-rule border-y border-rule">
              {category.models[0] &&
                Object.entries(category.models[0].specsSummary).map(([key, val]) => (
                  <div key={key} className="flex justify-between gap-6 py-4 text-sm font-sans">
                    <dt className="text-muted-foreground font-mono text-xs uppercase">{key.replace(/_/g, " ")}</dt>
                    <dd className="text-right font-medium text-foreground">{val}</dd>
                  </div>
                ))}
            </dl>
            <p className="mt-6 text-sm text-muted-foreground font-sans">
              Specifications vary by model. We will confirm exact figures against your part drawings.
            </p>
          </div>
        </div>

        {/* Series Compare Grid if multiple models */}
        {category.models.length > 1 && (
          <div className="mt-14">
            <p className="eyebrow">Series at a glance</p>
            <div className="mt-5 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
              {category.models.slice(0, 6).map((m) => (
                <div key={m.slug} className="bg-card p-6">
                  <p className="font-display text-xl font-bold">{m.name}</p>
                  <dl className="mt-4 space-y-2 font-sans text-sm">
                    {Object.entries(m.specsSummary).slice(0, 3).map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-3 text-sm">
                        <dt className="text-muted-foreground font-mono text-xs uppercase">{k.replace(/_/g, " ")}</dt>
                        <dd className="text-right font-medium text-foreground">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Typically Bought By */}
        <div className="mt-14">
          <p className="eyebrow">Typically bought by</p>
          <ul className="mt-3 flex flex-wrap gap-2 font-sans text-sm">
            {[
              "Sheet Metal Job Shops",
              "Automotive Ancillaries",
              "Heavy Structural Fabrication",
              "Control Panel Manufacturers",
              "Steel Furniture Works",
              "PEB Contractors",
            ].map((use) => (
              <li key={use} className="border border-rule bg-card px-3 py-1.5 text-sm font-medium">
                {use}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quote Form & Side Panel Section */}
      <CategoryQuoteSection categoryName={category.name} />

      {/* Other Machine Families */}
      {siblingCategories.length > 0 && (
        <section className="shell py-16 md:py-24">
          <p className="eyebrow">Other machines</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {siblingCategories.map((c) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                className="font-display text-lg tracking-tight hover:text-accent font-bold"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
