"use client";

import React, { useState } from "react";

interface ModelEnquiryFormProps {
  modelName: string;
}

export default function ModelEnquiryForm({ modelName }: ModelEnquiryFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Model-specific enquiry submitted:", { modelName, name, email, phone, company, message });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setMessage("");
    }, 3000);
  };

  return (
    <div>
      {submitted ? (
        <div className="flex flex-col items-center justify-center py-8 text-center bg-white border border-charcoal/10 p-4">
          <span className="material-symbols-outlined text-5xl text-primary mb-4 animate-bounce">
            check_circle
          </span>
          <h4 className="font-headline text-2xl text-charcoal uppercase mb-2">Transmission Success</h4>
          <p className="font-mono text-[10px] text-tertiary">
            REQUEST_TYPE: M-SPECIFIC // ID: RECEIVED <br />
            Our regional manager will email technical documents shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-mono text-[9px] uppercase text-tertiary mb-1">
              Selected Configuration
            </label>
            <input
              type="text"
              readOnly
              value={modelName}
              className="w-full bg-tech-blue border border-charcoal/10 px-4 py-2 font-mono text-xs text-charcoal outline-none select-none font-bold"
            />
          </div>

          <div>
            <label className="block font-mono text-[9px] uppercase text-tertiary mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full bg-white border border-charcoal/15 px-4 py-2 font-sans text-xs focus:outline-none focus:border-primary text-charcoal"
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
                className="w-full bg-white border border-charcoal/15 px-4 py-2 font-sans text-xs focus:outline-none focus:border-primary text-charcoal"
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
                className="w-full bg-white border border-charcoal/15 px-4 py-2 font-sans text-xs focus:outline-none focus:border-primary text-charcoal"
              />
            </div>
          </div>

          <div>
            <label className="block font-mono text-[9px] uppercase text-tertiary mb-1">
              Company Name
            </label>
            <input
              type="text"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company Ltd"
              className="w-full bg-white border border-charcoal/15 px-4 py-2 font-sans text-xs focus:outline-none focus:border-primary text-charcoal"
            />
          </div>

          <div>
            <label className="block font-mono text-[9px] uppercase text-tertiary mb-1">
              Requirements Summary
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Thickness range, power, custom material details..."
              className="w-full bg-white border border-charcoal/15 px-4 py-2 font-sans text-xs focus:outline-none focus:border-primary text-charcoal resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-hover text-white font-mono text-xs uppercase tracking-widest py-3 border border-primary transition-all font-bold cursor-pointer"
          >
            [ GET_MACHINERY_QUOTE ]
          </button>
        </form>
      )}
    </div>
  );
}
