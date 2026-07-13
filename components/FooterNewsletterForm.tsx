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
      <div className="flex" aria-hidden="true">
        <div className="bg-white/5 border border-white/10 px-4 py-3 font-mono text-xs w-full text-light-gray/30">
          ENTER_USER_EMAIL
        </div>
        <div className="bg-primary px-5 py-3 text-xs text-white font-mono font-bold">JOIN</div>
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
        placeholder="ENTER_USER_EMAIL"
        disabled={subscribed}
        autoComplete="email"
        className="bg-white/5 border border-white/10 px-4 py-3 font-mono text-xs w-full focus:outline-none focus:border-primary text-white disabled:opacity-80"
      />
      <button
        type="submit"
        className="bg-primary hover:bg-primary-hover px-5 text-xs text-white font-mono font-bold transition-colors cursor-pointer"
      >
        {subscribed ? "OK" : "JOIN"}
      </button>
    </form>
  );
}
