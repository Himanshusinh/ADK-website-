"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", { name, email, phone, company, interest, message });
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
  };

  const branches = [
    { city: "Pune", address: "Gate No. 230, Chakan Ind. Area, Phase II, Chakan, Pune, MH 410501", phone: "+91 98230 45671", email: "pune@adkeng.com" },
    { city: "Bengaluru", address: "Plot 42A, Peenya Industrial Area, Bengaluru, KA 560058", phone: "+91 80234 56789", email: "blr@adkeng.com" },
    { city: "Chennai", address: "DP No. 12, SIDCO Industrial Estate, Ambattur, Chennai, TN 600058", phone: "+91 44265 43210", email: "chennai@adkeng.com" },
    { city: "New Delhi", address: "F-90/2, Okhla Industrial Area Phase I, New Delhi 110020", phone: "+91 11416 09876", email: "delhi@adkeng.com" },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Page Header */}
      <section className="relative bg-surface border-b border-charcoal/10 py-16 px-6 md:px-20 tech-grid">
        <div className="max-w-[1440px] mx-auto">
          <div className="font-mono text-primary text-[10px] uppercase tracking-[0.3em] mb-3">
            [ CONTACT_NODES ]
          </div>
          <h1 className="font-headline text-[42px] md:text-[56px] text-charcoal uppercase tracking-tighter leading-none mb-6">
            CONTACT OPERATIONS
          </h1>
          <p className="font-mono text-xs md:text-sm text-tertiary max-w-xl leading-relaxed">
            SYSTEM_OPERATIONS: Reach out directly to our Vatva HQ assembly floor, schedule onsite installation diagnostics,
            or contact local branch engineers.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 md:px-20 max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Addresses & Map */}
        <div className="lg:col-span-7 space-y-10">
          <div>
            <h2 className="font-headline text-2xl uppercase mb-6 text-charcoal flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">location_on</span>
              Headquarters & Assembly Unit
            </h2>
            <div className="bg-surface border border-charcoal/10 p-6 font-mono text-xs text-tertiary space-y-4">
              <p>
                <strong>ADK Engineering & Solutions</strong> <br />
                Plot No. 12, GIDC Industrial Estate, <br />
                Vatva, Ahmedabad, Gujarat, India - 382445
              </p>
              <p>
                <strong>Hotline:</strong> +91 63526 44186 <br />
                <strong>Sales:</strong> inquiry1@adkeng.com
              </p>
            </div>
          </div>

          {/* Branch Operations */}
          <div>
            <h2 className="font-headline text-2xl uppercase mb-6 text-charcoal flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">hub</span>
              Regional Operation Hubs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {branches.map((b) => (
                <div key={b.city} className="border border-charcoal/15 p-6 hover:border-primary transition-colors bg-white">
                  <h3 className="font-headline text-xl text-charcoal uppercase font-bold border-b border-primary/20 pb-2 mb-3">
                    {b.city} Branch
                  </h3>
                  <div className="font-mono text-[10px] text-tertiary space-y-2">
                    <p>{b.address}</p>
                    <p className="border-t border-charcoal/5 pt-2">
                      <strong>Phone:</strong> {b.phone} <br />
                      <strong>Email:</strong> {b.email}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Map Embed Placeholder */}
          <div>
            <h2 className="font-headline text-2xl uppercase mb-6 text-charcoal flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">map</span>
              Satellite Gantry Tracking
            </h2>
            <div className="w-full h-80 bg-tech-blue border border-charcoal/10 flex flex-col items-center justify-center p-6 relative">
              <div className="absolute inset-0 opacity-15 bg-white pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(27,28,28,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(27,28,28,0.1) 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
              <span className="material-symbols-outlined text-5xl text-primary mb-3">
                satellite_alt
              </span>
              <span className="font-mono text-[10px] text-charcoal font-bold uppercase tracking-widest text-center">
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
            <h3 className="font-headline text-2xl text-charcoal uppercase mb-6 tracking-tight">
              Direct Enquiry Form
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center bg-white border border-charcoal/10 p-4">
                <span className="material-symbols-outlined text-5xl text-primary mb-4 animate-bounce">
                  check_circle
                </span>
                <h4 className="font-headline text-2xl text-charcoal uppercase mb-2">Transmission Success</h4>
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
                    Company
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company Name"
                    className="w-full bg-white border border-charcoal/15 px-4 py-2 font-sans text-xs focus:outline-none focus:border-primary text-charcoal"
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
                    placeholder="e.g. Model X Series Laser Cutter"
                    className="w-full bg-white border border-charcoal/15 px-4 py-2 font-sans text-xs focus:outline-none focus:border-primary text-charcoal"
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
                    className="w-full bg-white border border-charcoal/15 px-4 py-2 font-sans text-xs focus:outline-none focus:border-primary text-charcoal resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover text-white font-mono text-xs uppercase tracking-widest py-3 border border-primary transition-all font-bold cursor-pointer"
                >
                  [ INITIATE_TECHNICAL_REQUEST ]
                </button>
              </form>
            )}
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
