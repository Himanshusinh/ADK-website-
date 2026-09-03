import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories } from "@/lib/data";
import CategoryQuoteSection from "../CategoryQuoteSection";
import ProductMediaSection from "@/components/ProductMediaSection";

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
    title: `${model.name} | ADK Engineering`,
    description: model.tagline,
  };
}

const redesignedImageMap: Record<string, string> = {
  "fiber-laser-cutting": "/ADK product images/fiber laser cutting machine/ChatGPT Image Aug 26, 2026, 12_02_49 PM.png",
  "cnc-plasma-cutting": "/ADK product images/CNC plazma cutting machine/a2afb5aa-7812-4b39-9366-fa29f01a37a0.png",
  "cnc-press-brake": "/ADK product images/CNC Press brake machine/5c7c27c6-c60a-40f0-950b-b929bf24b7b9.png",
  "fiber-laser-welding": "/ADK product images/Fiber Laser Welding machine/aa70e19f-c67a-435d-8b31-b0c10be39751.png",
  "panel-bender": "/ADK product images/Panel Bender/6ccbcbe7-e9c0-469a-9c5d-1c31c2d1f83b.png",
  "peb-machinery": "/ADK product images/PEB Machinery/11449a4d-ca3f-4e66-878a-1ddfea8f62ed.png",
  "shearing-machine": "/ADK product images/Shearing Machine/7c87af1d-c7ab-4576-a291-651722f272d7.png",
  "spares-consumables": "/ADK product images/Spares & Consumables/bcde404d-733c-47eb-bb15-f9642b519dbc.png",
};

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

  const siblings = category.models.filter((m) => m.slug !== model.slug);
  const brochureHref = model.brochureUrl || "/resources";
  const heroImage = redesignedImageMap[category.slug] ?? model.image;

  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* Hero Product Stage — Exact ADK Redesigned Layout */}
      <section className="border-b border-rule">
        <div className="shell grid gap-10 py-10 md:grid-cols-2 md:items-start md:gap-16 md:py-16">
          <div className="aspect-[4/3] bg-white border border-rule flex items-center justify-center p-6 md:p-8">
            <img
              src={heroImage}
              alt={model.name}
              width={1200}
              height={900}
              className="h-full w-full object-contain p-2"
            />
          </div>

          <div>
            <nav className="eyebrow font-mono text-xs uppercase tracking-[0.16em]">
              <Link href="/products" className="hover:text-accent">
                Machines
              </Link>{" "}
              /{" "}
              <Link href={`/products/${category.slug}`} className="hover:text-accent">
                {category.name}
              </Link>{" "}
              / {model.name}
            </nav>
            <h1 className="mt-4 font-display text-4xl leading-[1.03] md:text-6xl font-bold">
              {model.name}
            </h1>
            <p className="mt-5 text-muted-foreground md:text-lg font-sans leading-relaxed">
              {model.tagline} — {model.description}
            </p>
            <p className="mt-6 inline-block border border-foreground px-3 py-1.5 font-mono text-sm font-bold uppercase">
              {model.status}
            </p>
          </div>
        </div>
      </section>

      {/* Processable Materials Badges */}
      {model.materials && model.materials.length > 0 && (
        <section className="py-6 border-b border-rule bg-panel">
          <div className="shell">
            <p className="eyebrow mb-3">Processable materials</p>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {model.materials.map((mat) => (
                <span
                  key={mat}
                  className="border border-rule bg-card px-3 py-1.5 font-semibold text-foreground uppercase"
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features + Specifications Table */}
      <section className="shell py-16 md:py-24 border-b border-rule">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Key Features */}
          <div>
            <h2 className="border-t border-foreground pt-4 font-display text-2xl font-bold">
              Key Features
            </h2>
            <ul className="mt-5 divide-y divide-rule border-y border-rule font-sans text-sm">
              {model.features.map((feat, idx) => (
                <li key={idx} className="flex gap-3 py-3.5 text-muted-foreground">
                  <span className="text-accent font-bold">▸</span>
                  <span className="text-foreground font-medium">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specifications */}
          <div>
            <h2 className="border-t border-foreground pt-4 font-display text-2xl font-bold">
              Technical Specifications
            </h2>
            <dl className="mt-5 divide-y divide-rule border-y border-rule">
              {model.specifications.map((spec, idx) => (
                <div key={idx} className="flex justify-between gap-6 py-3.5 text-sm font-sans">
                  <dt className="text-muted-foreground font-mono text-xs uppercase">{spec.label}</dt>
                  <dd className="text-right font-medium text-foreground">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Sibling Models */}
        {siblings.length > 0 && (
          <div className="mt-16">
            <p className="eyebrow">Other {category.name} models</p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {siblings.map((sib) => (
                <Link
                  key={sib.slug}
                  href={`/products/${category.slug}/${sib.slug}`}
                  className="arrow-slide group hover-lift border border-rule bg-card p-6 flex flex-col justify-between transition-all"
                >
                  <div>
                    <h3 className="font-display text-lg font-bold group-hover:text-accent transition-colors">
                      {sib.name}
                    </h3>
                    <p className="text-xs text-muted-foreground font-sans mt-2 line-clamp-2">
                      {sib.tagline}
                    </p>
                  </div>
                  <span className="mt-4 font-mono text-xs text-accent uppercase block pt-3 border-t border-rule">
                    {sib.status}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Machinery Quote Section & Side Panel */}
      <CategoryQuoteSection categoryName={model.name} />

      {/* Operational Demonstration */}
      <ProductMediaSection model={model} categorySlug={category.slug} />
    </div>
  );
}
