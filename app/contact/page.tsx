"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { companyInfo, branches, contactDepartments } from "@/lib/data";
import ContactEnquiryForm from "@/components/ContactEnquiryForm";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const interestParam = searchParams.get("interest") || "";

  const branchCities = branches;

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Page Header */}
      <section className="relative bg-surface border-b border-border py-16 tech-grid">
        <div className="adk-container">
          <h1 className="font-display text-heading text-foreground uppercase tracking-display leading-none mb-6">
            CONTACT OPERATIONS
          </h1>
          <p className="font-ui text-label text-tertiary max-w-xl leading-relaxed">
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
            <h2 className="font-display text-subheading uppercase mb-6 text-foreground flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">location_on</span>
              Corporate Office & Works
            </h2>
            <div className="bg-surface border border-border p-6 font-ui text-label text-tertiary space-y-4">
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
            <h2 className="font-display text-subheading uppercase mb-6 text-foreground flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">support_agent</span>
              Department Contacts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {contactDepartments.map((dept) => (
                <div key={dept.label} className="border border-border p-6 hover:border-primary transition-colors bg-card">
                  <h3 className="font-display text-card-title text-foreground uppercase font-bold border-b border-primary/20 pb-2 mb-3">
                    {dept.label}
                  </h3>
                  <div className="font-ui text-label text-tertiary space-y-2">
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
            <h2 className="font-display text-subheading uppercase mb-6 text-foreground flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">hub</span>
              Branch Locations
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {branchCities.map((b) => (
                <div key={b.city} className="border border-border p-4 hover:border-primary transition-colors bg-card text-center">
                  <h3 className="font-display text-card-title text-foreground uppercase font-bold">
                    {b.city}
                  </h3>
                  <span className="font-ui text-label text-tertiary uppercase mt-1 block">
                    ADK Branch Office
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Google Maps — corporate office location */}
          <div>
            <h2 className="font-display text-subheading uppercase mb-6 text-foreground flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">map</span>
              Location Map
            </h2>
            <div className="w-full aspect-[4/3] min-h-[320px] border border-border overflow-hidden bg-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.6535736714864!2d72.51097991122774!3d23.07315887905137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d9e82fc63a3%3A0xb4bf21d5446a4d9f!2sADK%20Engineering%20%26%20Solutions!5e0!3m2!1sen!2sin!4v1783942317606!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="ADK Engineering & Solutions — Google Maps"
                className="w-full h-full min-h-[320px]"
              />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-5">
          <div className="bg-surface border border-primary/20 p-6 sticky top-28">
            <h3 className="font-display text-subheading text-foreground uppercase mb-6 tracking-display">
              Direct Enquiry Form
            </h3>
            <ContactEnquiryForm key={interestParam} defaultInterest={interestParam} />
          </div>
        </div>
      </section>

      {/* Service Promise */}
      <section className="py-16 bg-surface border-t border-border">
        <div className="adk-container grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <span className="material-symbols-outlined text-3xl text-primary mb-3 block">support_agent</span>
            <h3 className="font-display text-card-title text-foreground uppercase font-bold mb-2">Technical Assistance</h3>
            <p className="font-body text-small text-tertiary">Remote diagnostics and on-site engineer deployment within 24 hours.</p>
          </div>
          <div className="text-center p-6">
            <span className="material-symbols-outlined text-3xl text-primary mb-3 block">inventory_2</span>
            <h3 className="font-display text-card-title text-foreground uppercase font-bold mb-2">Spare Parts</h3>
            <p className="font-body text-small text-tertiary">Common consumables stocked at regional hubs for immediate dispatch.</p>
          </div>
          <div className="text-center p-6">
            <span className="material-symbols-outlined text-3xl text-primary mb-3 block">handshake</span>
            <h3 className="font-display text-card-title text-foreground uppercase font-bold mb-2">Customer Care</h3>
            <p className="font-body text-small text-tertiary">Dedicated account managers for installation, training, and annual calibration.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[500px]">
          <div className="font-body text-small text-primary animate-pulse">
            Loading contact form...
          </div>
        </div>
      }
    >
      <ContactFormContent />
    </Suspense>
  );
}
