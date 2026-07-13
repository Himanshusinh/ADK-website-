"use client";

import { useState } from "react";
import ChatbotWidget from "@/components/ChatbotWidget";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function FloatingContactStack() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div
      className={`fixed bottom-6 right-4 sm:right-6 flex flex-col items-center gap-3 ${
        chatOpen ? "z-[70]" : "z-50"
      }`}
    >
      <ChatbotWidget onOpenChange={setChatOpen} />
      <WhatsAppButton />
    </div>
  );
}
