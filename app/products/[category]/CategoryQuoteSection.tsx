"use client";

import React, { useState } from "react";

export default function CategoryQuoteSection({ categoryName }: { categoryName: string }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    thickness: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="border-t border-rule">
      <div className="shell grid items-start gap-10 py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.75fr)] lg:gap-24 md:py-24">
        <div className="bg-background border border-rule p-6 md:p-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Get a price for this machine
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground font-sans">
            Material, thickness and a timeline. Enough for an engineer to quote properly.
          </p>

          {submitted ? (
            <div className="mt-8 border border-rule bg-card p-8 text-center">
              <span className="material-symbols-outlined text-4xl text-accent">check_circle</span>
              <h3 className="mt-3 font-display text-2xl font-bold">Quote Request Sent</h3>
              <p className="mt-2 text-sm text-muted-foreground font-sans">
                Thank you. An engineer will call you back within 6 working hours with exact machine pricing and delivery date.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5 font-sans">
              <div>
                <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Shah"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-rule bg-card px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-rule bg-card px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-rule bg-card px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                  Material & Thickness
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mild steel 12 mm / Stainless steel 6 mm"
                  value={formData.thickness}
                  onChange={(e) => setFormData({ ...formData, thickness: e.target.value })}
                  className="w-full border border-rule bg-card px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                  Notes / Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Target machine size, bed size or monthly volume..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full border border-rule bg-card px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="btn-sweep w-full bg-accent py-4 text-center font-display text-sm font-bold uppercase tracking-wider text-accent-foreground shadow-[var(--shadow-lift)] cursor-pointer"
              >
                Request Quote
              </button>
            </form>
          )}
        </div>

        <aside className="panel p-8 md:p-10 border border-rule">
          <p className="eyebrow">This machine</p>
          <p className="mt-4 font-display text-2xl font-bold">{categoryName}</p>
          <p className="mt-3 text-sm text-muted-foreground font-sans">
            ADK Engineering & Solutions · Ahmedabad, India
          </p>
          <p className="mt-6 text-sm text-muted-foreground font-sans leading-relaxed">
            An engineer replies within 6 working hours with a size, a price and a delivery week.
          </p>
        </aside>
      </div>
    </section>
  );
}
