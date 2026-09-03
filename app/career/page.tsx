"use client";

import React, { useState } from "react";
import { careerPositions, careerApplicationEmail } from "@/lib/data";
import { postForm } from "@/lib/submitForm";

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await postForm("/api/forms/career", {
        selectedJob,
        name,
        email,
        phone,
        resume: resume ? { name: resume.name, size: resume.size, type: resume.type } : null,
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setEmail("");
        setPhone("");
        setSelectedJob("");
        setResume(null);
      }, 3000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* Header — Exact ADK Redesigned Header */}
      <section className="border-b border-rule panel">
        <div className="shell py-16 md:py-24">
          <p className="eyebrow">Careers</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl font-bold">
            Build machines with us in Ahmedabad.
          </h1>
          <span className="mt-6 block h-0.5 w-10 bg-accent" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg font-sans">
            Join our engineering, sales, and service teams in Ahmedabad. Direct applications welcome at {careerApplicationEmail}.
          </p>
        </div>
      </section>

      {/* Vacancies & Apply Form */}
      <section className="shell py-16 md:py-24 border-b border-rule grid grid-cols-1 lg:grid-cols-12 gap-14">
        {/* Jobs List */}
        <div className="lg:col-span-7 space-y-10">
          <p className="eyebrow">Open positions</p>
          <h2 className="font-display text-3xl font-bold">
            Current Vacancies
          </h2>

          <div className="space-y-8">
            {careerPositions.map((job) => (
              <div key={job.id} className="arrow-slide group hover-lift border border-rule bg-card overflow-hidden transition-all shadow-sm">
                {job.image && (
                  <div className="aspect-[16/9] w-full overflow-hidden bg-steel border-b border-rule relative">
                    <img
                      src={job.image}
                      alt={job.title}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 eyebrow text-accent border border-accent/40 bg-background/90 px-2.5 py-1">
                      {job.department}
                    </span>
                  </div>
                )}
                <div className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {job.title}
                      </h3>
                      <div className="font-mono text-xs text-accent uppercase tracking-wider mt-1 font-bold">
                        EXP: {job.experience} · {job.location}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedJob(job.title);
                        const formElem = document.getElementById("application-form");
                        if (formElem) formElem.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="btn-sweep bg-accent text-accent-foreground font-display text-xs font-bold uppercase px-6 py-3 shrink-0 cursor-pointer shadow-[var(--shadow-lift)]"
                    >
                      Apply now
                    </button>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mt-4">
                    {job.description}
                  </p>

                  <div className="mt-6 border-t border-rule pt-4 font-sans text-xs text-muted-foreground">
                    <span className="eyebrow text-foreground block mb-2 font-bold">Key Requirements:</span>
                    <ul className="space-y-1.5 list-disc list-inside">
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="lg:col-span-5" id="application-form">
          <div className="bg-panel border border-rule p-6 md:p-8 sticky top-24">
            <p className="eyebrow mb-2">Direct application</p>
            <h3 className="font-display text-2xl font-bold mb-6 tracking-tight">
              Submit Application
            </h3>

            {submitted ? (
              <div className="py-8 text-center bg-card border border-rule p-6">
                <span className="material-symbols-outlined text-4xl text-accent mb-2">
                  check_circle
                </span>
                <h4 className="font-display text-lg font-bold uppercase mb-2">Application Received</h4>
                <p className="font-sans text-xs text-muted-foreground">
                  Our HR & Engineering team will review your details and reach out within 3 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
                <div>
                  <label className="block font-mono text-xs uppercase text-muted-foreground mb-1 font-bold">
                    Select Position
                  </label>
                  <select
                    required
                    value={selectedJob}
                    onChange={(e) => setSelectedJob(e.target.value)}
                    className="w-full bg-card border border-rule px-4 py-2.5 text-sm focus:outline-none focus:border-accent text-foreground"
                  >
                    <option value="">-- SELECT POSITION --</option>
                    {careerPositions.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase text-muted-foreground mb-1 font-bold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Full Name"
                    className="w-full bg-card border border-rule px-4 py-2.5 text-sm focus:outline-none focus:border-accent text-foreground"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs uppercase text-muted-foreground mb-1 font-bold">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@domain.com"
                      className="w-full bg-card border border-rule px-4 py-2.5 text-sm focus:outline-none focus:border-accent text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase text-muted-foreground mb-1 font-bold">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91..."
                      className="w-full bg-card border border-rule px-4 py-2.5 text-sm focus:outline-none focus:border-accent text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase text-muted-foreground mb-1 font-bold">
                    Upload Resume / CV (PDF)
                  </label>
                  <input
                    type="file"
                    required
                    accept=".pdf"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setResume(e.target.files[0]);
                      }
                    }}
                    className="w-full bg-card border border-rule px-4 py-2 text-xs text-muted-foreground focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-sweep w-full bg-accent text-accent-foreground font-display text-sm font-bold uppercase tracking-wider py-3.5 mt-2 cursor-pointer disabled:opacity-60"
                >
                  {submitting ? "Submitting…" : "Submit Application"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
