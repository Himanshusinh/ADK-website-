"use client";

import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useEnquiry } from "@/components/EnquiryContext";
import { CHATBOT_ICON_URL } from "@/lib/media";
import ChatbotPanel, { type ChatMessage } from "@/components/ChatbotPanel";
import { getBotReply, getWelcomeMessage, TYPING_DELAY_MS } from "@/lib/chatbot";

const CHATBOT_ICON_SRC = CHATBOT_ICON_URL;

function createId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export default function ChatbotWidget({
  onOpenChange,
}: {
  onOpenChange?: (open: boolean) => void;
}) {
  const { openEnquiry } = useEnquiry();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  const setOpen = useCallback(
    (open: boolean) => {
      setIsOpen(open);
      onOpenChange?.(open);
    },
    [onOpenChange]
  );

  const openChat = useCallback(() => {
    setOpen(true);
    if (!hasInitialized) {
      setHasInitialized(true);
      setMessages([{ id: createId(), role: "bot", text: getWelcomeMessage() }]);
    }
  }, [hasInitialized, setOpen]);

  const closeChat = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const sendUserMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isTyping) return;

      setMessages((prev) => [...prev, { id: createId(), role: "user", text: trimmed }]);
      setInput("");
      setIsTyping(true);

      await new Promise((resolve) => setTimeout(resolve, TYPING_DELAY_MS));

      const reply = getBotReply(trimmed);
      setMessages((prev) => [...prev, { id: createId(), role: "bot", text: reply }]);
      setIsTyping(false);
    },
    [isTyping]
  );

  const handleQuickChip = useCallback(
    (chip: { label: string; message?: string; action?: "enquiry" }) => {
      if (chip.action === "enquiry") {
        closeChat();
        openEnquiry();
        return;
      }
      if (chip.message) {
        if (!hasInitialized) {
          setHasInitialized(true);
          setMessages([{ id: createId(), role: "bot", text: getWelcomeMessage() }]);
        }
        void sendUserMessage(chip.message);
      }
    },
    [hasInitialized, openEnquiry, sendUserMessage, closeChat]
  );

  const showQuickChips = messages.length <= 1;

  return (
    <>
      <button
        type="button"
        onClick={() => (isOpen ? closeChat() : openChat())}
        aria-label={isOpen ? "Close ADK Assistant" : "Open ADK Assistant"}
        aria-expanded={isOpen}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-primary shadow-[0_4px_24px_rgba(0,0,0,0.15)] hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-250 cursor-pointer overflow-hidden ring-1 ring-black/10"
      >
        {isOpen ? (
          <span className="absolute inset-0 flex items-center justify-center bg-primary">
            <span className="material-symbols-outlined text-white text-[26px]">close</span>
          </span>
        ) : (
          <Image
            src={CHATBOT_ICON_SRC}
            alt="ADK Assistant"
            width={56}
            height={56}
            unoptimized
            className="w-full h-full object-cover rounded-full"
          />
        )}
      </button>

      <ChatbotPanel
        isOpen={isOpen}
        messages={messages}
        isTyping={isTyping}
        input={input}
        showQuickChips={showQuickChips}
        onClose={closeChat}
        onInputChange={setInput}
        onSend={() => void sendUserMessage(input)}
        onQuickChip={handleQuickChip}
      />
    </>
  );
}
