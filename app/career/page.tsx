"use client";

import React, { useState } from "react";
import { careerPositions } from "@/lib/data";

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Job application submitted:", { selectedJob, name, email, phone, resume: resume?.name });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setPhone("");
      setSelectedJob("");
      setResume(null);
    }, 3000);
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Page Header */}
      <section className="relative bg-surface border-b border-charcoal/10 py-16 px-6 md:px-20 tech-grid">
        <div className="max-w-[1440px] mx-auto">
          <div className="font-mono text-primary text-[10px] uppercase tracking-[0.3em] mb-3">
            [ TALENT_NODE ]
          </div>
          <h1 className="font-headline text-[42px] md:text-[56px] text-charcoal uppercase tracking-tighter leading-none mb-6">
            CAREERS AT ADK
          </h1>
          <p className="font-mono text-xs md:text-sm text-tertiary max-w-xl leading-relaxed">
            SYSTEM_VACANCIES: Join our research labs and operations crew to build next-generation industrial laser systems and multi-axis bending mechanics.
          </p>
        </div>
      </section>

      {/* Culture Summary */}
      <section className="py-20 px-6 md:px-20 max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-charcoal/10">
        <div>
          <span className="font-mono text-primary text-xs uppercase tracking-widest block mb-4">
            [ 01_CULTURE ]
          </span>
          <h2 className="font-headline text-3xl md:text-4xl text-charcoal uppercase mb-6 font-bold">
            Engineering a High-Performance Future
          </h2>
          <div className="space-y-4 text-sm text-tertiary font-sans leading-relaxed">
            <p>
              At ADK, we believe in hands-on mechatronics and rigorous structural testing. Our team includes
              laser physicists, control software architects, mechatronics designers, and field installation experts.
            </p>
            <p>
              We foster a collaborative workshop environment where new kinematics ideas are compiled, tested, and shipped
              daily. We values analytical troubleshooting and proactive customer support.
            </p>
          </div>
        </div>
        <div className="bg-tech-blue border border-charcoal/10 p-8 flex flex-col justify-center border-l-4 border-primary">
          <h3 className="font-headline text-xl text-charcoal uppercase mb-3 font-bold">What We Offer</h3>
          <ul className="space-y-2 font-mono text-xs text-tertiary list-inside list-disc">
            <li>State-of-the-art gantry assembly laboratories</li>
            <li>Direct mentorship from senior controls software architects</li>
            <li>Comprehensive medical coverage and housing allowances</li>
            <li>Flexible project schedules with clear growth metrics</li>
          </ul>
        </div>
      </section>

      {/* Vacancies & Apply Form */}
      <section className="py-20 px-6 md:px-20 max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Jobs List */}
        <div className="lg:col-span-7 space-y-10">
          <h2 className="font-headline text-3xl uppercase mb-8 text-charcoal border-b border-charcoal/10 pb-4">
            Open Positions
          </h2>

          <div className="space-y-8">
            {careerPositions.map((job) => (
              <div key={job.id} className="border border-charcoal/15 p-6 hover:border-primary transition-colors bg-surface">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-headline text-2xl text-charcoal uppercase font-bold">
                      {job.title}
                    </h3>
                    <div className="font-mono text-[9px] text-tertiary uppercase mt-1">
                      DEPT: {job.department} &nbsp;//&nbsp; EXP: {job.experience}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedJob(job.title)}
                    className="bg-primary hover:bg-primary-hover text-white font-mono text-[10px] uppercase px-4 py-2 border border-primary transition-all font-bold cursor-pointer"
                  >
                    [ APPLY ]
                  </button>
                </div>
                <p className="font-sans text-xs text-tertiary leading-relaxed mt-4">
                  {job.description}
                </p>

                {/* Requirements */}
                <div className="mt-4 border-t border-charcoal/5 pt-4">
                  <span className="font-mono text-[9px] uppercase text-charcoal/40 tracking-wider font-bold block mb-2">
                    JOB_REQUIREMENTS:
                  </span>
                  <ul className="space-y-1.5 font-sans text-xs text-tertiary list-inside list-disc">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="lg:col-span-5">
          <div className="bg-surface border border-primary/20 p-6 sticky top-28">
            <h3 className="font-headline text-2xl text-charcoal uppercase mb-6 tracking-tight">
              Submit Application
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center bg-white border border-charcoal/10 p-4">
                <span className="material-symbols-outlined text-5xl text-primary mb-4 animate-bounce">
                  check_circle
                </span>
                <h4 className="font-headline text-2xl text-charcoal uppercase mb-2">Upload Successful</h4>
                <p className="font-mono text-[10px] text-tertiary">
                  REGISTRATION: OK // CV: VERIFIED <br />
                  Our talent acquisition team will review your CV.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-[9px] uppercase text-tertiary mb-1">
                    Select Position
                  </label>
                  <select
                    required
                    value={selectedJob}
                    onChange={(e) => setSelectedJob(e.target.value)}
                    className="w-full bg-white border border-charcoal/15 px-4 py-2 font-sans text-xs focus:outline-none focus:border-primary text-charcoal h-[38px]"
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
                      placeholder="email@domain.com"
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
                    Upload CV (PDF format)
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
                    className="w-full bg-white border border-charcoal/15 px-4 py-2 font-mono text-xs focus:outline-none text-charcoal"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover text-white font-mono text-xs uppercase tracking-widest py-3 border border-primary transition-all font-bold cursor-pointer"
                >
                  [ UPLOAD_CV_APPLICATION ]
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
