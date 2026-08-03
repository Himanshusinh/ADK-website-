import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories, applications, companyInfo } from "@/lib/data";
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

  const siblings = category.models.filter((m) => m.slug !== model.slug);
  const brochureHref = model.brochureUrl || "/resources/catalogues";

  const relatedApps = applications.filter((app) => {
    if (model.applications?.includes(app.slug)) return true;
    return (
      app.recommendedMachines.includes(model.id) ||
      app.recommendedMachines.includes(model.slug)
    );
  });

  return (
    <div className="flex flex-col w-full bg-surface animate-fade-in">
      <div className="w-full bg-surface-container py-3 border-b border-border/50">
        <div className="adk-container flex items-center gap-2 font-ui text-label uppercase text-tertiary">
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

      {/* Product-forward hero */}
      <section className="py-12 md:py-16 adk-container w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 border-b border-border">
        <div className="relative border border-border bg-white dark:bg-card min-h-[320px] md:min-h-[420px] flex items-center justify-center p-6 md:p-10">
          <span className="absolute left-4 top-4 font-ui text-label font-bold text-primary bg-primary/5 px-2 py-1 border border-primary/20">
            {model.status}
          </span>
          <OptionalImage
            src={model.image}
            fallback={getProductImageFallback(category.slug)}
            alt={model.name}
            className="object-contain max-h-[360px] w-auto mix-blend-multiply dark:mix-blend-normal"
            placeholderLabel={model.name}
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="border-l-4 border-primary pl-6">
            <p className="font-ui text-label text-tertiary uppercase tracking-ui mb-2">
              {category.name} · {model.id}
            </p>
            <h1 className="font-display text-heading text-foreground uppercase tracking-display leading-none mb-4">
              {model.name}
            </h1>
            <p className="font-body text-small text-tertiary mb-2 leading-relaxed font-medium">
              {model.tagline}
            </p>
            <p className="font-body text-small text-tertiary mb-8 leading-relaxed">
              {model.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#enquiry"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-ui text-label px-9 py-3.5 transition-colors tracking-ui font-bold uppercase"
            >
              Get Quote
            </a>
            <Link
              href={brochureHref}
              className="inline-flex items-center justify-center gap-2 border border-foreground text-foreground font-ui text-label px-9 py-3.5 hover:bg-charcoal hover:text-white transition-colors tracking-ui font-bold uppercase"
            >
              <span className="material-symbols-outlined text-[16px] leading-none">download</span>
              Download Catalogue
            </Link>
          </div>
          <p className="font-ui text-label text-tertiary mt-4">
            Call{" "}
            <a
              href={`tel:${companyInfo.generalPhones[0].replace(/\s/g, "")}`}
              className="text-foreground hover:text-primary transition-colors"
            >
              {companyInfo.generalPhones[0]}
            </a>
          </p>
        </div>
      </section>

      {/* Materials */}
      {model.materials && model.materials.length > 0 && (
        <section className="py-10 border-b border-border bg-surface-container/40">
          <div className="adk-container w-full">
            <h2 className="font-display text-card-title text-foreground uppercase tracking-display mb-4">
              Materials You Can Process
            </h2>
            <div className="flex flex-wrap gap-2">
              {model.materials.map((mat) => (
                <span
                  key={mat}
                  className="font-ui text-label uppercase tracking-ui text-foreground border border-border bg-card px-3 py-1.5"
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features + Specs + Enquiry */}
      <section className="py-16 md:py-20 adk-container w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-7 space-y-14">
          <div>
            <h2 className="font-display text-subheading uppercase mb-6 border-b border-border pb-3 text-foreground">
              Key Features
            </h2>
            <ul className="space-y-3">
              {model.features.map((feat, idx) => (
                <li key={idx} className="flex gap-3 font-body text-small text-tertiary leading-relaxed">
                  <span className="text-primary shrink-0 mt-0.5">▸</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-subheading uppercase mb-6 border-b border-border pb-3 text-foreground">
              Technical Specifications
            </h2>
            <div className="border border-border">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container font-ui text-label text-foreground uppercase border-b border-border">
                    <th className="py-3 px-4 w-1/2">Parameter</th>
                    <th className="py-3 px-4 w-1/2">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {model.specifications.map((spec, idx) => (
                    <tr key={idx} className="font-body text-small text-tertiary hover:bg-tech-blue/20">
                      <td className="py-3 px-4 font-semibold">{spec.label}</td>
                      <td className="py-3 px-4 font-ui text-label text-foreground">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {relatedApps.length > 0 && (
            <div>
              <h2 className="font-display text-subheading uppercase mb-6 border-b border-border pb-3 text-foreground">
                Industries & Applications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedApps.map((app) => (
                  <Link
                    key={app.slug}
                    href={`/applications/${app.slug}`}
                    className="p-4 border border-border hover:border-primary flex items-center justify-between group transition-colors bg-card"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="material-symbols-outlined text-foreground group-hover:text-primary transition-colors shrink-0">
                        {app.icon}
                      </span>
                      <span className="font-display text-card-title text-foreground uppercase font-bold group-hover:text-primary transition-colors truncate">
                        {app.name}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-[16px] text-tertiary group-hover:translate-x-1 transition-transform shrink-0">
                      arrow_forward
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {siblings.length > 0 && (
            <div>
              <h2 className="font-display text-subheading uppercase mb-6 border-b border-border pb-3 text-foreground">
                Other {category.name} Models
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {siblings.map((sib) => (
                  <Link
                    key={sib.slug}
                    href={`/products/${category.slug}/${sib.slug}`}
                    className="p-4 border border-border hover:border-primary transition-colors bg-card group"
                  >
                    <span className="font-display text-card-title text-foreground uppercase font-bold group-hover:text-primary transition-colors block">
                      {sib.name}
                    </span>
                    <span className="font-body text-small text-tertiary mt-1 block line-clamp-2">
                      {sib.tagline}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-5" id="enquiry">
          <div className="bg-surface border border-primary/20 p-6 sticky top-28">
            <h3 className="font-display text-subheading text-foreground uppercase mb-6 tracking-display">
              Request Machinery Quote
            </h3>
            <ModelEnquiryForm modelName={model.name} />
          </div>
        </div>
      </section>

      <ProductMediaSection model={model} categorySlug={category.slug} />
    </div>
  );
}
