
"use client";

import { useEffect, useState } from "react";

export default function FooterNewsletterForm() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };

  if (!mounted) {
    return (
      <div className="flex animate-pulse" aria-hidden="true">
        <div className="bg-surface-container border border-border px-4 py-3 font-body text-small font-normal w-full text-on-surface-variant/40 normal-case">
          Enter your email
        </div>
        <div className="bg-primary px-5 py-3 font-ui text-label text-on-primary font-semibold tracking-ui uppercase">Join</div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubscribe} className="flex" suppressHydrationWarning>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        disabled={subscribed}
        autoComplete="email"
        className="bg-surface-container border border-border px-4 py-3 font-body text-small w-full focus:outline-none focus:border-primary text-on-surface disabled:opacity-80 normal-case placeholder-on-surface-variant/40"
      />
      <button
        type="submit"
        className="bg-primary hover:bg-primary-hover px-5 font-ui text-label text-on-primary font-semibold tracking-ui transition-colors cursor-pointer uppercase"
      >
        {subscribed ? "OK" : "Join"}
      </button>
    </form>
  );
}
