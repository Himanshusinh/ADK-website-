"use client";

import Image from "next/image";

export default function WhatsAppButton() {
  const phoneNumber = "916352644186";
  const message = encodeURIComponent(
    "Hello ADK Engineering! I would like to inquire about your machinery configurations."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer overflow-hidden"
      title="Chat with ADK on WhatsApp"
      aria-label="Chat with ADK on WhatsApp"
    >
      <Image
        src="/images/wp_logo.jpg"
        alt="WhatsApp"
        width={56}
        height={56}
        className="w-full h-full object-cover"
      />
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-0 group-hover:animate-ping pointer-events-none" />
    </a>
  );
}
