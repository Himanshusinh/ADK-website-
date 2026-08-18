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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-5 lg:h-[580px]">
      {items.map((item, index) => (
        <Link
          key={item.slug}
          href={item.href}
          className={`arrow-slide group hover-lift relative overflow-hidden panel border border-rule transition-all duration-300 ${SPAN_CLASSES[index] ?? "min-h-[240px]"}`}
        >
          {/* Product hero */}
          <div className="absolute inset-0 flex items-center justify-center p-6 pt-12 md:pt-14">
            <img
              src={item.image}
              alt={item.name}
              className="max-h-full max-w-full w-full object-contain object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />
          </div>

          {/* Minimal eyebrow & header overlay */}
          <div className="absolute inset-x-0 top-0 z-10 p-5 bg-gradient-to-b from-background/90 via-background/50 to-transparent">
            <p className="eyebrow text-accent">0{index + 1}</p>
            <h3 className="font-display text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-accent">
              {item.name}
            </h3>
          </div>

          {/* Hover / focus slide overlay */}
          <div className="absolute inset-0 z-20 flex flex-col justify-end bg-gradient-to-t from-steel via-steel/80 to-transparent p-6 text-steel-foreground opacity-0 transition-opacity duration-400 ease-out group-hover:opacity-100 focus-visible:opacity-100">
            <div className="translate-y-2 transition-transform duration-400 ease-out group-hover:translate-y-0">
              <p className="eyebrow text-accent mb-1">0{index + 1}</p>
              <h3 className="font-display text-xl font-bold mb-2">
                {item.name}
              </h3>
              <p className="font-sans text-sm text-steel-muted line-clamp-2 leading-relaxed">
                {item.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 font-display text-sm font-bold text-accent">
                Explore machine
                <span className="arrow">→</span>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
