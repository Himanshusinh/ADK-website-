import Link from "next/link";

export interface MachineryBentoItem {
  slug: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

interface MachineryBentoGridProps {
  items: MachineryBentoItem[];
}

export default function MachineryBentoGrid({ items }: MachineryBentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => {
        // Staggered grid spanning:
        // Index 0: span 1
        // Index 1: span 2
        // Index 2: span 2
        // Index 3: span 1
        // Index 4: span 1
        // Index 5: span 2
        const isColSpan2 = index === 1 || index === 2 || index === 5;
        const colSpanClass = isColSpan2 ? "lg:col-span-2" : "col-span-1";

        return (
          <Link
            key={item.slug}
            href={item.href}
            className={`bg-surface rounded-[2rem] overflow-hidden shadow-lg border border-surface-variant group flex flex-col hover:shadow-xl hover:border-primary/30 transition-all duration-300 relative ${colSpanClass}`}
          >
            {/* Bento Card Header */}
            <div className="p-6 border-b border-surface-variant flex justify-between items-center bg-surface-container-high/50 backdrop-blur-md relative z-10">
              <h4 className="font-button-text text-button-text uppercase text-on-surface font-bold tracking-wider">
                {item.name}
              </h4>
              <span className="font-technical-label text-[10px] text-on-surface-variant bg-surface-container px-2.5 py-1 rounded-full">
                INV_0{index + 1}
              </span>
            </div>

            {/* Bento Card Body */}
            <div className="p-8 flex-grow flex items-center justify-center bg-gradient-to-br from-surface to-surface-container-low min-h-[300px] relative overflow-hidden">
              <div
                className={`absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${
                  index % 2 === 0 ? "bg-primary/5" : "bg-secondary/5"
                }`}
              />
              <img
                src={item.image}
                alt={item.name}
                className="max-h-[230px] max-w-[85%] object-contain z-10 group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-xl mix-blend-multiply dark:mix-blend-normal"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
