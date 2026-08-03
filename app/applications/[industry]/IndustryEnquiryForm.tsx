"use client";

import React, { useState } from "react";
import { postForm } from "@/lib/submitForm";

interface IndustryEnquiryFormProps {
  industryName: string;
}

export default function IndustryEnquiryForm({ industryName }: IndustryEnquiryFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await postForm("/api/forms/enquiry", {
        name,
        email,
        phone,
        company,
        interest: `${industryName} Sector`,
        message,
        source: "industry-application",
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setMessage("");
      }, 3000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {submitted ? (
        <div className="flex flex-col items-center justify-center py-8 text-center bg-card border border-border p-4">
          <span className="material-symbols-outlined text-5xl text-primary mb-4 animate-bounce">
            check_circle
          </span>
          <h4 className="font-display text-subheading text-foreground uppercase mb-2">Request received</h4>
          <p className="font-ui text-label text-tertiary">
            Thank you. Our application engineer will reach out to schedule a technical call.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-ui text-label uppercase text-tertiary mb-1">
              Manufacturing Sector
            </label>
            <input
              type="text"
              readOnly
              value={`${industryName} Sector`}
              className="w-full bg-tech-blue border border-border px-4 py-2 font-ui text-label text-foreground outline-none select-none font-bold"
            />
          </div>

          <div>
            <label className="block font-ui text-label uppercase text-tertiary mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full bg-card border border-border px-4 py-2 font-body text-small focus:outline-none focus:border-primary text-foreground"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-ui text-label uppercase text-tertiary mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@company.com"
                className="w-full bg-card border border-border px-4 py-2 font-body text-small focus:outline-none focus:border-primary text-foreground"
              />
            </div>
            <div>
              <label className="block font-ui text-label uppercase text-tertiary mb-1">
                Phone
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91..."
                className="w-full bg-card border border-border px-4 py-2 font-body text-small focus:outline-none focus:border-primary text-foreground"
              />
            </div>
          </div>

          <div>
            <label className="block font-ui text-label uppercase text-tertiary mb-1">
              Company Name
            </label>
            <input
              type="text"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company Ltd"
              className="w-full bg-card border border-border px-4 py-2 font-body text-small focus:outline-none focus:border-primary text-foreground"
            />
          </div>

          <div>
            <label className="block font-ui text-label uppercase text-tertiary mb-1">
              Describe Manufacturing Bottlenecks / Requirements
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe what components you bend/cut, thickness requirements, daily target numbers..."
              className="w-full bg-card border border-border px-4 py-2 font-body text-small focus:outline-none focus:border-primary text-foreground resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-primary hover:bg-primary-hover text-white font-ui text-label tracking-ui py-3 border border-primary transition-all font-bold cursor-pointer disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Schedule Consultation"}
          </button>
        </form>
      )}
    </div>
  );
}
