"use client";

import React, { useState } from "react";
import Link from "next/link";
import { companyInfo, branches } from "@/lib/data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    material: "",
    thickness: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* Page Header — Exact ADK Redesigned Header */}
      <section className="border-b border-rule panel">
        <div className="shell py-16 md:py-24">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl font-bold">
            Tell us what you cut and how thick.
          </h1>
          <span className="mt-6 block h-0.5 w-10 bg-accent" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg font-sans">
            A quote names a machine size, a price and a delivery week. An engineer replies within 6 working hours.
          </p>
        </div>
      </section>

      {/* Form & Sidebar Grid */}
      <section className="shell py-16 md:py-24 border-b border-rule">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.8fr)] lg:gap-24">
          {/* Quote Form */}
          <div className="bg-background border border-rule p-6 md:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <span className="material-symbols-outlined text-5xl text-accent">check_circle</span>
                <h3 className="mt-4 font-display text-2xl font-bold">Inquiry Received</h3>
                <p className="mt-2 text-sm text-muted-foreground font-sans max-w-md mx-auto">
                  Thank you, {formData.name}. An ADK sales engineer will review your material and thickness requirements and call you back within 6 working hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 font-mono text-xs uppercase tracking-widest text-accent font-bold cursor-pointer"
                >
                  Submit another inquiry →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <p className="eyebrow text-accent">Machinery Quote Form</p>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Shah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-rule bg-card px-4 py-3 text-sm font-sans text-foreground focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-rule bg-card px-4 py-3 text-sm font-sans text-foreground focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-rule bg-card px-4 py-3 text-sm font-sans text-foreground focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-2">
                      Company / Workshop Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Precision Components"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full border border-rule bg-card px-4 py-3 text-sm font-sans text-foreground focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-2">
                      Material Type
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mild Steel / Stainless / Aluminum"
                      value={formData.material}
                      onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                      className="w-full border border-rule bg-card px-4 py-3 text-sm font-sans text-foreground focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-2">
                      Thickness Range
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1 mm to 20 mm"
                      value={formData.thickness}
                      onChange={(e) => setFormData({ ...formData, thickness: e.target.value })}
                      className="w-full border border-rule bg-card px-4 py-3 text-sm font-sans text-foreground focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-muted-foreground mb-2">
                    Production Requirements / Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us your bed size preference, monthly volume, or existing machinery..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-rule bg-card px-4 py-3 text-sm font-sans text-foreground focus:border-accent focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-sweep w-full bg-accent py-4 text-center font-display text-sm font-bold uppercase tracking-wider text-accent-foreground shadow-[var(--shadow-lift)] cursor-pointer"
                >
                  Send Quote Request
                </button>
              </form>
            )}
          </div>

          {/* Contact Details Sidebar Panel */}
          <aside className="space-y-8 panel p-8 md:p-10 border border-rule">
            <div>
              <p className="eyebrow">Talk to someone now</p>
              <div className="mt-4 space-y-3 text-sm font-sans">
                <a
                  href="tel:+919909953637"
                  className="flex items-center gap-3 transition-colors duration-300 hover:text-accent font-semibold"
                >
                  <span className="material-symbols-outlined text-base">call</span>
                  +91 99099 53637
                  <span className="text-muted-foreground font-normal">· Sales Inquiry</span>
                </a>
                <a
                  href="tel:+919227085416"
                  className="flex items-center gap-3 transition-colors duration-300 hover:text-accent font-semibold"
                >
                  <span className="material-symbols-outlined text-base">call</span>
                  +91 92270 85416
                </a>
                <a
                  href="tel:+919510041629"
                  className="flex items-center gap-3 transition-colors duration-300 hover:text-accent font-semibold"
                >
                  <span className="material-symbols-outlined text-base">build</span>
                  +91 95100 41629
                  <span className="text-muted-foreground font-normal">· Service Support</span>
                </a>
                <a
                  href="https://wa.me/919909953637"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 transition-colors duration-300 hover:text-accent font-semibold"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  WhatsApp Chat
                </a>
                <a
                  href="mailto:info@adkeng.com"
                  className="flex items-center gap-3 transition-colors duration-300 hover:text-accent"
                >
                  <span className="material-symbols-outlined text-base">mail</span>
                  info@adkeng.com
                </a>
                <a
                  href="mailto:service@adkeng.com"
                  className="flex items-center gap-3 transition-colors duration-300 hover:text-accent"
                >
                  <span className="material-symbols-outlined text-base">mail</span>
                  service@adkeng.com
                </a>
                <a
                  href="mailto:spares@adkeng.com"
                  className="flex items-center gap-3 transition-colors duration-300 hover:text-accent"
                >
                  <span className="material-symbols-outlined text-base">mail</span>
                  spares@adkeng.com
                </a>
              </div>
            </div>

            <div className="border-t border-rule pt-6">
              <p className="eyebrow">Head Office</p>
              <p className="mt-3 flex gap-3 text-sm text-muted-foreground font-sans leading-relaxed">
                <span className="material-symbols-outlined text-base shrink-0 mt-0.5 text-accent">location_on</span>
                {companyInfo.corporateAddress}
              </p>
            </div>

            <div className="border-t border-rule pt-6">
              <p className="eyebrow">Works & Test Bay</p>
              <img
                src="/assets/workshop.jpg"
                alt="ADK Experience Center"
                width={800}
                height={500}
                className="mt-4 w-full border border-rule object-cover"
              />
              <p className="mt-3 flex gap-3 text-sm text-muted-foreground font-sans leading-relaxed">
                <span className="material-symbols-outlined text-base shrink-0 mt-0.5 text-accent">location_on</span>
                {companyInfo.worksAddress}
              </p>
              <p className="mt-3 text-sm text-muted-foreground font-sans">
                Come and cut your own samples. Bring the plate, we will run it on our floor.
              </p>
            </div>

            <div className="border-t border-rule pt-6">
              <p className="eyebrow">Service Branches</p>
              <p className="mt-3 text-sm text-muted-foreground font-sans leading-relaxed">
                {branches.map((b) => b.city).join(" · ")}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
