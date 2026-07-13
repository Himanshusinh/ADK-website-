"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { companyInfo, branches, contactDepartments } from "@/lib/data";
import { postForm } from "@/lib/submitForm";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const interestParam = searchParams.get("interest") || "";
  const [interest, setInterest] = useState(interestParam);
  const [prevInterestParam, setPrevInterestParam] = useState(interestParam);

  if (interestParam !== prevInterestParam) {
    setInterest(interestParam);
    setPrevInterestParam(interestParam);
  }

  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await postForm("/api/forms/contact", {
        name,
        email,
        phone,
        company,
        interest,
        message,
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setInterest("");
        setMessage("");
      }, 3000);
    } finally {
      setSubmitting(false);
    }
  };

  const branchCities = branches;

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Page Header */}
      <section className="relative bg-surface border-b border-border py-16 tech-grid">
        <div className="adk-container">
          <div className="font-mono text-primary text-[10px] uppercase tracking-[0.3em] mb-3">
            [ CONTACT_NODES ]
          </div>
          <h1 className="font-headline text-[42px] md:text-[56px] text-foreground uppercase tracking-tighter leading-none mb-6">
            CONTACT OPERATIONS
          </h1>
          <p className="font-mono text-xs md:text-sm text-tertiary max-w-xl leading-relaxed">
            Reach our Ahmedabad corporate office and Santej works, or contact department-wise
            for inquiries, service, and spares across 8 branch locations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 adk-container w-full grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Addresses & Map */}
        <div className="lg:col-span-7 space-y-10">
          <div>
            <h2 className="font-headline text-2xl uppercase mb-6 text-foreground flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">location_on</span>
              Corporate Office & Works
            </h2>
            <div className="bg-surface border border-border p-6 font-mono text-xs text-tertiary space-y-4">
              <p>
                <strong>{companyInfo.name}</strong>
                <br />
                <strong>Corporate:</strong> {companyInfo.corporateAddress}
              </p>
              <p>
                <strong>Works:</strong> {companyInfo.worksAddress}
              </p>
              <p>
                <strong>General:</strong> {companyInfo.generalPhones.join(" / ")} <br />
                {companyInfo.generalEmails.join(" / ")}
              </p>
            </div>
          </div>

          {/* Department Contacts */}
          <div>
            <h2 className="font-headline text-2xl uppercase mb-6 text-foreground flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">support_agent</span>
              Department Contacts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {contactDepartments.map((dept) => (
                <div key={dept.label} className="border border-border p-6 hover:border-primary transition-colors bg-card">
                  <h3 className="font-headline text-lg text-foreground uppercase font-bold border-b border-primary/20 pb-2 mb-3">
                    {dept.label}
                  </h3>
                  <div className="font-mono text-[10px] text-tertiary space-y-2">
                    <p>{dept.phones.join(" / ")}</p>
                    <p className="border-t border-border/50 pt-2">
                      {dept.emails.join(" / ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Branch Operations */}
          <div>
            <h2 className="font-headline text-2xl uppercase mb-6 text-foreground flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">hub</span>
              Branch Locations
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {branchCities.map((b) => (
                <div key={b.city} className="border border-border p-4 hover:border-primary transition-colors bg-card text-center">
                  <h3 className="font-headline text-lg text-foreground uppercase font-bold">
                    {b.city}
                  </h3>
                  <span className="font-mono text-[9px] text-tertiary uppercase mt-1 block">
                    ADK Branch Office
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Map Embed Placeholder */}
          <div>
            <h2 className="font-headline text-2xl uppercase mb-6 text-foreground flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">map</span>
              Satellite Gantry Tracking
            </h2>
            <div className="w-full h-80 bg-tech-blue border border-border flex flex-col items-center justify-center p-6 relative">
              <div className="absolute inset-0 opacity-15 bg-card pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(27,28,28,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(27,28,28,0.1) 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
              <span className="material-symbols-outlined text-5xl text-primary mb-3">
                satellite_alt
              </span>
              <span className="font-mono text-[10px] text-foreground font-bold uppercase tracking-widest text-center">
                GOOGLE_MAPS_STABLE_FEED
              </span>
              <span className="font-mono text-[9px] text-tertiary/75 uppercase text-center mt-2">
                COORD: 23.0225° N, 72.5714° E // PRECISION_CALIBRATED
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-5">
          <div className="bg-surface border border-primary/20 p-6 sticky top-28">
            <h3 className="font-headline text-2xl text-foreground uppercase mb-6 tracking-tight">
              Direct Enquiry Form
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center bg-card border border-border p-4">
                <span className="material-symbols-outlined text-5xl text-primary mb-4 animate-bounce">
                  check_circle
                </span>
                <h4 className="font-headline text-2xl text-foreground uppercase mb-2">Transmission Success</h4>
                <p className="font-mono text-[10px] text-tertiary">
                  REGIST_STATUS: ACTIVE // ID: RECEIVED <br />
                  A coordinator will call you back within 6 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-[9px] uppercase text-tertiary mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name"
                    className="w-full bg-card border border-border px-4 py-2 font-sans text-xs focus:outline-none focus:border-primary text-foreground"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[9px] uppercase text-tertiary mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@company.com"
                      className="w-full bg-card border border-border px-4 py-2 font-sans text-xs focus:outline-none focus:border-primary text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[9px] uppercase text-tertiary mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91..."
                      className="w-full bg-card border border-border px-4 py-2 font-sans text-xs focus:outline-none focus:border-primary text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[9px] uppercase text-tertiary mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company Name"
                    className="w-full bg-card border border-border px-4 py-2 font-sans text-xs focus:outline-none focus:border-primary text-foreground"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[9px] uppercase text-tertiary mb-1">
                    Interest Description
                  </label>
                  <input
                    type="text"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    placeholder="e.g. ADK 3015C Industrial Pioneer Series"
                    className="w-full bg-card border border-border px-4 py-2 font-sans text-xs focus:outline-none focus:border-primary text-foreground"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[9px] uppercase text-tertiary mb-1">
                    Enquiry Details
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter custom specifications or query requirements..."
                    className="w-full bg-card border border-border px-4 py-2 font-sans text-xs focus:outline-none focus:border-primary text-foreground resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary hover:bg-primary-hover text-white font-mono text-xs uppercase tracking-widest py-3 border border-primary transition-all font-bold cursor-pointer disabled:opacity-60"
                >
                  {submitting ? "[ TRANSMITTING... ]" : "[ INITIATE_TECHNICAL_REQUEST ]"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Service Promise */}
      <section className="py-16 bg-surface border-t border-border">
        <div className="adk-container grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <span className="material-symbols-outlined text-3xl text-primary mb-3 block">support_agent</span>
            <h3 className="font-headline text-lg text-foreground uppercase font-bold mb-2">Technical Assistance</h3>
            <p className="font-sans text-xs text-tertiary">Remote diagnostics and on-site engineer deployment within 24 hours.</p>
          </div>
          <div className="text-center p-6">
            <span className="material-symbols-outlined text-3xl text-primary mb-3 block">inventory_2</span>
            <h3 className="font-headline text-lg text-foreground uppercase font-bold mb-2">Spare Parts</h3>
            <p className="font-sans text-xs text-tertiary">Common consumables stocked at regional hubs for immediate dispatch.</p>
          </div>
          <div className="text-center p-6">
            <span className="material-symbols-outlined text-3xl text-primary mb-3 block">handshake</span>
            <h3 className="font-headline text-lg text-foreground uppercase font-bold mb-2">Customer Care</h3>
            <p className="font-sans text-xs text-tertiary">Dedicated account managers for installation, training, and annual calibration.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[500px]">
        <div className="font-mono text-xs uppercase text-primary animate-pulse">[ COMPILING_CONTACT_INTERFACE... ]</div>
      </div>
    }>
      <ContactFormContent />
    </Suspense>
  );
}
