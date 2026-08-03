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
          {/* Product hero — large, centered, no drop shadow */}
          <div className="absolute inset-0 flex items-center justify-center px-3 pb-3 pt-12 md:px-4 md:pb-4 md:pt-14">
            <img
              src={item.image}
              alt=""
              className="max-h-full max-w-full w-full scale-[1.08] object-contain object-center mix-blend-normal transition-transform duration-300 ease-out group-hover:scale-[1.12]"
            />
          </div>

          {/* Default title — minimal */}
          <div className="absolute inset-x-0 top-0 z-10 p-4 md:p-5 transition-opacity duration-300 lg:group-hover:opacity-0">
            <h3 className="font-display text-base md:text-lg font-medium text-foreground tracking-normal">
              {item.name}
            </h3>
          </div>

          {/* Hover / mobile: dark fade + white copy */}
          <div className="absolute inset-0 z-20 flex flex-col justify-end bg-black/0 p-4 md:p-5 transition-colors duration-300 ease-out max-lg:bg-black/60 lg:group-hover:bg-black/70 lg:group-focus-visible:bg-black/70">
            <div className="translate-y-0 opacity-100 transition-all duration-300 ease-out lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100">
              <h3 className="font-display text-base md:text-lg font-medium text-white tracking-normal mb-2">
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
