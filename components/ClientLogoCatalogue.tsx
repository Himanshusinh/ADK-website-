import type { ClientLogo } from "@/lib/data";

interface ClientLogoCatalogueProps {
  clients: ClientLogo[];
  className?: string;
}

export default function ClientLogoCatalogue({ clients, className = "" }: ClientLogoCatalogueProps) {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-border border border-border ${className}`}
    >
      {clients.map((client) => (
        <div
          key={client.id}
          className="client-catalogue-item group flex min-h-[10.5rem] md:min-h-[12rem] flex-col items-center justify-center bg-card p-6 md:p-8 transition-colors hover:bg-surface-container"
          title={client.name}
        >
          <img
            src={client.logo}
            alt={client.name}
            className="client-logo-image h-16 md:h-20 w-full max-w-[11rem] object-contain"
            loading="lazy"
            decoding="async"
          />
          <span className="mt-4 font-ui text-label uppercase tracking-wider text-tertiary text-center leading-tight line-clamp-2 opacity-0 transition-opacity group-hover:opacity-100">
            {client.name}
          </span>
        </div>
      ))}
    </div>
  );
}
