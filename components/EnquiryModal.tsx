"use client";

import React, { useState } from "react";
import { useEnquiry } from "./EnquiryContext";
import { categories, applications } from "@/lib/data";

export default function EnquiryModal() {
  const { isOpen, targetItem, closeEnquiry } = useEnquiry();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [prevTargetItem, setPrevTargetItem] = useState(targetItem);

  if (targetItem !== prevTargetItem) {
    if (targetItem) {
      setInterest(targetItem);
    }
    setPrevTargetItem(targetItem);
  }

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Enquiry submitted:", { name, email, phone, company, interest, message });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setInterest("");
      setMessage("");
      closeEnquiry();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
      <div className="relative w-full max-w-lg bg-surface border border-primary/30 p-8 shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto">
        <button
          onClick={closeEnquiry}
          className="absolute top-4 right-4 text-charcoal/60 hover:text-primary transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="font-mono text-primary text-[10px] tracking-[0.2em] mb-2">
          [ SERVICE_REQUEST_PROTOCOL ]
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <span className="material-symbols-outlined text-6xl text-primary mb-6 animate-bounce">
              check_circle
            </span>
            <h3 className="font-headline text-3xl text-charcoal uppercase mb-4">
              Transmission Complete
            </h3>
            <p className="font-mono text-xs text-tertiary max-w-xs">
              ENQUIRY_STATUS: RECEIVED. <br />
              Our engineering team will contact you within 12 business hours.
            </p>
          </div>
        ) : (
          <>
            <h3 className="font-headline text-3xl text-charcoal uppercase mb-6 tracking-tight">
              Request Technical Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-[10px] uppercase text-tertiary mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-charcoal/15 px-4 py-2 font-sans text-sm focus:outline-none focus:border-primary text-charcoal"
                  placeholder="e.g. John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase text-tertiary mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-charcoal/15 px-4 py-2 font-sans text-sm focus:outline-none focus:border-primary text-charcoal"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase text-tertiary mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-charcoal/15 px-4 py-2 font-sans text-sm focus:outline-none focus:border-primary text-charcoal"
                    placeholder="+91 99999 99999"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase text-tertiary mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-white border border-charcoal/15 px-4 py-2 font-sans text-sm focus:outline-none focus:border-primary text-charcoal"
                    placeholder="Precision Engineering Ltd"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase text-tertiary mb-1">
                    Area of Interest
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full bg-white border border-charcoal/15 px-4 py-2 font-sans text-sm focus:outline-none focus:border-primary text-charcoal h-[38px]"
                  >
                    <option value="">-- SELECT CLASSIFICATION --</option>
                    <optgroup label="MACHINERY CATEGORIES">
                      {categories.map((c) => (
                        <option key={c.slug} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="INDUSTRY APPLICATIONS">
                      {applications.map((a) => (
                        <option key={a.slug} value={`Application: ${a.name}`}>
                          {a.name}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase text-tertiary mb-1">
                  Technical Specifications / Requirements
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white border border-charcoal/15 px-4 py-2 font-sans text-sm focus:outline-none focus:border-primary text-charcoal resize-none"
                  placeholder="Describe your raw material, thickness, bed size requirements, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-white font-mono text-xs uppercase tracking-widest py-4 border border-primary transition-all font-bold cursor-pointer"
              >
                [ TRANSMIT_SPEC_REQUEST ]
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
