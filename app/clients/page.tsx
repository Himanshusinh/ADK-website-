import Link from "next/link";
import { capabilityHighlights, companyInfo, clientLogos } from "@/lib/data";
import ClientLogoCatalogue from "@/components/ClientLogoCatalogue";

export default function ClientsPage() {
  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Page Header */}
      <section className="relative bg-surface border-b border-border py-16 tech-grid">
        <div className="adk-container">
          <div className="font-mono text-primary text-[10px] uppercase tracking-[0.3em] mb-3">
            [ TRUST_LOG ]
          </div>
          <h1 className="font-headline text-[42px] md:text-[56px] text-foreground uppercase tracking-tighter leading-none mb-6">
            CLIENTS & CAPABILITIES
          </h1>
          <p className="font-mono text-xs md:text-sm text-tertiary max-w-xl leading-relaxed">
            Trusted by {companyInfo.stats.customers} customers including government organizations,
            steel industries, and fabrication leaders across India.
          </p>
        </div>
      </section>

      {/* Capability Highlights */}
      <section className="py-20 adk-container w-full border-b border-border">
        <h2 className="font-headline text-3xl uppercase mb-12 text-foreground text-center">
          Engineering Capabilities Delivered
        </h2>

        <div className="space-y-12">
          {capabilityHighlights.map((cap) => (
            <div
              key={cap.id}
              className="bg-surface border border-border p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-primary transition-colors"
            >
              <div className="lg:col-span-8 space-y-4">
                <span className="font-mono text-primary text-[10px] uppercase tracking-widest block">
                  [ {cap.industry} ]
                </span>
                <h3 className="font-headline text-2xl md:text-3xl text-foreground uppercase font-bold">
                  {cap.title}
                </h3>
                <p className="font-sans text-sm text-tertiary leading-relaxed">
                  {cap.summary}
                </p>
              </div>

              <div className="lg:col-span-4 bg-card border border-border p-6 space-y-6">
                <span className="font-mono text-[9px] uppercase text-foreground/40 tracking-wider font-bold block">
                  KEY_METRICS:
                </span>
                {cap.outcomes.map((m, idx) => (
                  <div key={idx} className="border-l-2 border-primary pl-4">
                    <div className="font-headline text-3xl text-foreground font-bold">{m.value}</div>
                    <div className="font-mono text-[9px] text-tertiary uppercase tracking-wider">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Logos */}
      <section className="py-16 adk-container w-full border-b border-border">
        <h2 className="font-headline text-3xl uppercase mb-4 text-foreground text-center">
          Organizations We Serve
        </h2>
        <p className="font-sans text-sm text-tertiary text-center mb-12 max-w-xl mx-auto">
          Including installations at ISRO and other government sectors, alongside leading
          private sector fabrication and engineering companies.
        </p>
        <ClientLogoCatalogue clients={clientLogos} />
      </section>

      {/* Enquiry CTA */}
      <section className="py-16 bg-charcoal text-white text-center border-t border-primary/30">
        <div className="adk-container">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl uppercase tracking-tighter mb-4">
            Ready to Partner with ADK?
          </h2>
          <p className="font-mono text-xs text-light-gray/60 mb-8 leading-relaxed">
            Join {companyInfo.stats.customers} satisfied customers who trust ADK for precision
            industrial machinery and reliable after-sales support across 8 branch locations.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-hover text-white font-mono text-xs uppercase tracking-widest px-10 py-5 border border-primary transition-all font-bold"
          >
            [ START_A_PROJECT ]
          </Link>
        </div>
        </div>
      </section>
    </div>
  );
}
