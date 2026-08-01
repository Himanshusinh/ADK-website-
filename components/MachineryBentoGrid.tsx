import Link from "next/link";

export interface MachineryBentoItem {
  slug: string;
  name: string;
  description: string;
  image: string;
  href: string;
  label?: string;
}

const SPAN_CLASSES = [
  "min-h-[320px] md:min-h-[280px] lg:min-h-0 lg:row-span-2",
  "min-h-[240px] md:min-h-[260px]",
  "min-h-[240px] md:min-h-[260px]",
  "min-h-[240px] md:min-h-[260px]",
  "min-h-[240px] md:min-h-[260px]",
  "min-h-[240px] md:min-h-[260px] lg:col-span-2",
] as const;

interface MachineryBentoGridProps {
  items: MachineryBentoItem[];
}

export default function MachineryBentoGrid({ items }: MachineryBentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 md:gap-5 lg:h-[580px]">
      {items.map((item, index) => (
        <Link
          key={item.slug}
          href={item.href}
          className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white dark:bg-card transition-all duration-300 hover:border-primary hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${SPAN_CLASSES[index] ?? "min-h-[240px]"}`}
        >
          <div className="relative z-10 shrink-0 px-5 pt-5 md:px-6 md:pt-6">
            <h3 className="font-display text-card-title text-foreground tracking-display group-hover:text-primary transition-colors">
              {item.name}
            </h3>
            {item.label ? (
              <p className="mt-1 font-ui text-label text-tertiary tracking-ui line-clamp-2">
                {item.label}
              </p>
            ) : null}
          </div>

          <div className="relative mx-3 mb-3 mt-4 min-h-0 flex-1 overflow-hidden rounded-xl border border-border/60 bg-white dark:bg-tech-blue md:mx-4 md:mb-4">
            <img
              src={item.image}
              alt=""
              className="absolute inset-0 h-full w-full object-contain object-center p-2 md:p-3 mix-blend-multiply dark:mix-blend-normal"
            />
          </div>

          <div className="relative z-10 px-5 pb-5 md:px-6 md:pb-6">
            <p className="font-body text-small text-tertiary line-clamp-3">
              {item.description}
            </p>
            <span className="mt-3 inline-flex items-center gap-2 font-ui text-label text-primary tracking-ui uppercase">
              Learn More
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
