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
          className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-container transition-shadow duration-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${SPAN_CLASSES[index] ?? "min-h-[240px]"}`}
        >
          <div className="relative z-10 shrink-0 px-5 pt-5 md:px-6 md:pt-6 transition-opacity duration-300 md:group-hover:opacity-0 md:group-focus-visible:opacity-0">
            <h3 className="font-display text-card-title text-foreground tracking-display">
              {item.name}
            </h3>
            {item.label ? (
              <p className="mt-1 font-ui text-label text-tertiary tracking-ui line-clamp-2">
                {item.label}
              </p>
            ) : null}
          </div>

          {/* Full machine — object-contain never crops */}
          <div className="relative mx-3 mb-3 mt-4 min-h-0 flex-1 overflow-hidden rounded-xl bg-white md:mx-4 md:mb-4">
            <img
              src={item.image}
              alt=""
              className="absolute inset-0 h-full w-full object-contain object-center p-2 md:p-3"
            />
          </div>

          <div className="relative z-10 px-5 pb-5 md:px-6 md:pb-6 lg:hidden">
            <p className="font-body text-small text-tertiary line-clamp-3">
              {item.description}
            </p>
            <span className="mt-3 inline-flex items-center gap-2 font-ui text-label text-primary tracking-ui uppercase">
              Learn More
              <span aria-hidden="true">→</span>
            </span>
          </div>

          <div
            className="pointer-events-none absolute inset-0 z-20 hidden lg:flex flex-col justify-end rounded-2xl bg-black/80 p-6 opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0"
            aria-hidden="true"
          >
            <h3 className="font-display text-card-title text-white tracking-display">
              {item.name}
            </h3>
            <p className="mt-3 font-body text-small text-white/85 line-clamp-4 max-w-prose">
              {item.description}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 font-ui text-label text-white tracking-ui uppercase">
              Learn More
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
