import Link from "next/link";

export interface MachineryBentoItem {
  slug: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

const SPAN_CLASSES = [
  "min-h-[340px] lg:min-h-0 lg:row-span-2",
  "min-h-[240px]",
  "min-h-[240px]",
  "min-h-[240px]",
  "min-h-[240px]",
  "min-h-[240px] lg:col-span-2",
] as const;

interface MachineryBentoGridProps {
  items: MachineryBentoItem[];
}

export default function MachineryBentoGrid({ items }: MachineryBentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-5 lg:h-[560px]">
      {items.map((item, index) => (
        <Link
          key={item.slug}
          href={item.href}
          className={`group relative overflow-hidden rounded-[18px] border border-border bg-white dark:bg-card shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${SPAN_CLASSES[index] ?? "min-h-[240px]"}`}
        >
          {/* Product hero */}
          <div className="absolute inset-0 flex items-end justify-center px-5 pb-5 pt-14 md:px-6 md:pb-6 md:pt-16">
            <img
              src={item.image}
              alt=""
              className="max-h-full max-w-full w-full object-contain object-bottom mix-blend-multiply dark:mix-blend-normal drop-shadow-sm transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            />
          </div>

          {/* Soft vignette — theme aware */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/50 dark:from-card/90 dark:to-card/40"
            aria-hidden
          />

          {/* Default title */}
          <div className="absolute inset-x-0 top-0 z-10 p-5 md:p-6 transition-opacity duration-300 lg:group-hover:opacity-0">
            <h3 className="font-display text-[clamp(1.15rem,1.5vw,1.5rem)] font-bold text-foreground tracking-tight">
              {item.name}
            </h3>
          </div>

          {/* Hover / mobile: dark fade + white copy */}
          <div className="absolute inset-0 z-20 flex flex-col justify-end bg-black/0 p-5 md:p-6 transition-colors duration-300 ease-out max-lg:bg-black/60 lg:group-hover:bg-black/70 lg:group-focus-visible:bg-black/70">
            <div className="translate-y-0 opacity-100 transition-all duration-300 ease-out lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100">
              <h3 className="font-display text-[clamp(1.15rem,1.5vw,1.5rem)] font-bold text-white tracking-tight mb-2">
                {item.name}
              </h3>
              <p className="font-body text-[15px] font-normal leading-snug text-white/85 line-clamp-2 max-w-prose">
                {item.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 font-ui text-[15px] font-medium text-white transition-colors duration-300 group-hover:text-primary">
                Explore
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
