import Link from "next/link";
import { categories } from "@/lib/data";
import { getProductImageFallback } from "@/lib/media";
import OptionalImage from "@/components/OptionalImage";

export default function ProductsHubPage() {
  return (
    <div className="flex flex-col w-full bg-surface">
      <section className="relative bg-surface border-b border-border py-16 tech-grid">
        <div className="adk-container">
          <h1 className="font-display text-heading text-foreground uppercase tracking-display leading-none mb-6">
            Machinery Catalogue
          </h1>
          <p className="font-body text-small text-tertiary max-w-xl leading-relaxed">
            Fiber laser cutting, CNC plasma, press brakes, welding, PEB lines, panel benders, and
            genuine spares — browse by category and request a quote.
          </p>
        </div>
      </section>

      <section className="py-20 adk-container w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((c) => {
            const thumb = c.models[0]?.image ?? "";
            const fallback = getProductImageFallback(c.slug);

            return (
              <div
                key={c.slug}
                className="bg-card border border-border hover:border-primary flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden"
              >
                <div>
                  <Link
                    href={`/products/${c.slug}`}
                    className="relative block aspect-16/10 bg-white dark:bg-tech-blue border-b border-border overflow-hidden"
                  >
                    <OptionalImage
                      src={thumb}
                      fallback={fallback}
                      alt={c.name}
                      className="absolute inset-0 h-full w-full object-contain p-4 mix-blend-multiply dark:mix-blend-normal transition-transform duration-500 group-hover:scale-105"
                      placeholderLabel={c.name}
                      containerClassName="absolute inset-0"
                    />
                  </Link>

                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-ui text-label text-tertiary uppercase">
                        {c.models.length} model{c.models.length === 1 ? "" : "s"}
                      </span>
                      <span className="material-symbols-outlined text-4xl text-foreground/70 group-hover:text-primary transition-colors">
                        {c.icon}
                      </span>
                    </div>
                    <h3 className="font-display text-subheading text-foreground uppercase mb-3 font-bold group-hover:text-primary transition-colors">
                      {c.name}
                    </h3>
                    <p className="font-body text-small text-tertiary leading-relaxed mb-6">
                      {c.tagline}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 px-6 pb-6">
                  <div className="border-t border-border/50 pt-4">
                    <span className="font-ui text-label uppercase text-foreground/40 tracking-wider block mb-2">
                      Configurations
                    </span>
                    <ul className="space-y-1.5">
                      {c.models.map((m) => (
                        <li key={m.slug}>
                          <Link
                            href={`/products/${c.slug}/${m.slug}`}
                            className="font-ui text-label text-tertiary hover:text-primary flex items-center justify-between gap-2"
                          >
                            <span className="truncate">{m.name}</span>
                            <span className="font-ui text-label bg-tech-blue text-foreground px-1.5 py-0.5 border border-border/50 font-bold shrink-0">
                              {m.status}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/products/${c.slug}`}
                    className="w-full border border-foreground py-3 font-ui text-label uppercase hover:bg-charcoal hover:text-white transition-all tracking-ui flex items-center justify-center gap-1.5 text-center cursor-pointer font-bold"
                  >
                    Explore category{" "}
                    <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
