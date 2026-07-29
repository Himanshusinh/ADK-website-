"use client";

import { useState, useSyncExternalStore } from "react";
import { postForm } from "@/lib/submitForm";

interface ContactEnquiryFormProps {
  defaultInterest?: string;
}

const emptySubscribe = () => () => {};

function FormSkeleton() {
  return (
    <div className="space-y-4" aria-hidden="true">
      {["name", "email-phone", "company", "interest", "message"].map((key) => (
        <div key={key} className={key === "email-phone" ? "grid grid-cols-2 gap-4" : ""}>
          {key === "email-phone" ? (
            <>
              <div className="h-9 bg-card border border-border" />
              <div className="h-9 bg-card border border-border" />
            </>
          ) : (
            <div className={`bg-card border border-border ${key === "message" ? "h-20" : "h-9"}`} />
          )}
        </div>
      ))}
      <div className="h-10 bg-primary/20 border border-primary/30" />
    </div>
  );
}

export default function ContactEnquiryForm({ defaultInterest = "" }: ContactEnquiryFormProps) {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [interest, setInterest] = useState(defaultInterest);
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

  if (!mounted) {
    return <FormSkeleton />;
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center bg-card border border-border p-4">
        <span className="material-symbols-outlined text-5xl text-primary mb-4 animate-bounce">
          check_circle
        </span>
        <h4 className="font-display text-subheading text-foreground uppercase mb-2">Transmission Success</h4>
        <p className="font-ui text-label text-tertiary">
          REGIST_STATUS: ACTIVE // ID: RECEIVED <br />
          A coordinator will call you back within 6 business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" suppressHydrationWarning>
      <div>
        <label className="block font-ui text-label uppercase text-tertiary mb-1">Your Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
          autoComplete="name"
          className="w-full bg-card border border-border px-4 py-2 font-body text-small focus:outline-none focus:border-primary text-foreground"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-ui text-label uppercase text-tertiary mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@company.com"
            autoComplete="email"
            className="w-full bg-card border border-border px-4 py-2 font-body text-small focus:outline-none focus:border-primary text-foreground"
          />
        </div>
        <div>
          <label className="block font-ui text-label uppercase text-tertiary mb-1">Phone</label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91..."
            autoComplete="tel"
            className="w-full bg-card border border-border px-4 py-2 font-body text-small focus:outline-none focus:border-primary text-foreground"
          />
        </div>
      </div>

      <div>
        <label className="block font-ui text-label uppercase text-tertiary mb-1">Company</label>
        <input
          type="text"
          required
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company Name"
          autoComplete="organization"
          className="w-full bg-card border border-border px-4 py-2 font-body text-small focus:outline-none focus:border-primary text-foreground"
        />
      </div>

      <div>
        <label className="block font-ui text-label uppercase text-tertiary mb-1">
          Interest Description
        </label>
        <input
          type="text"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          placeholder="e.g. ADK 3015C Industrial Pioneer Series"
          className="w-full bg-card border border-border px-4 py-2 font-body text-small focus:outline-none focus:border-primary text-foreground"
        />
      </div>

      <div>
        <label className="block font-ui text-label uppercase text-tertiary mb-1">Enquiry Details</label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter custom specifications or query requirements..."
          className="w-full bg-card border border-border px-4 py-2 font-body text-small focus:outline-none focus:border-primary text-foreground resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-primary hover:bg-primary-hover text-white font-ui text-label tracking-ui py-3 border border-primary transition-all font-bold cursor-pointer disabled:opacity-60"
      >
        {submitting ? "[ TRANSMITTING... ]" : "[ INITIATE_TECHNICAL_REQUEST ]"}
      </button>
    </form>
  );
}
