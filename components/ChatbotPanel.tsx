"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { QUICK_CHIPS } from "@/lib/chatbot";
import { CHATBOT_ICON_URL } from "@/lib/media";

const CHATBOT_AVATAR = CHATBOT_ICON_URL;

export interface ChatMessage {
  id: string;
  role: "user" | "bot";
  text: string;
}

function formatInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, partIndex) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={partIndex} className="font-medium text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <React.Fragment key={partIndex}>{part}</React.Fragment>;
  });
}

function formatBotText(text: string): React.ReactNode {
  const lines = text.split("\n");

  return (
    <div className="space-y-1">
      {lines.map((line, lineIndex) => {
        const trimmed = line.trim();
        if (!trimmed) return null;

        if (trimmed.startsWith("•")) {
          return (
            <p key={lineIndex} className="font-body text-small leading-relaxed text-foreground/90">
              {formatInline(trimmed)}
            </p>
          );
        }

        return (
          <p key={lineIndex} className="font-body text-small leading-relaxed text-foreground/90">
            {formatInline(line)}
          </p>
        );
      })}
    </div>
  );
}

/** Split bot copy into stacked bubbles like a conversational UI */
function splitBotBubbles(text: string): string[] {
  const trimmed = text.trim();
  if (!trimmed) return [];

  if (trimmed.startsWith("Hello!")) {
    const blocks = trimmed.split(/\n\n+/);
    if (blocks.length >= 2) {
      return [blocks[0], blocks.slice(1).join("\n\n")];
    }
  }

  const paragraphs = trimmed.split(/\n\n+/).filter(Boolean);
  return paragraphs.length > 0 ? paragraphs : [trimmed];
}

interface ChatbotPanelProps {
  isOpen: boolean;
  messages: ChatMessage[];
  isTyping: boolean;
  input: string;
  showQuickChips: boolean;
  onClose: () => void;
  onInputChange: (value: string) => void;
  onSend: () => void;
  onQuickChip: (chip: { label: string; message?: string; action?: "enquiry" }) => void;
}

function BotAvatar() {
  return (
    <Image
      src={CHATBOT_AVATAR}
      alt=""
      width={32}
      height={32}
      unoptimized
      className="w-8 h-8 shrink-0 rounded-full object-cover ring-1 ring-border/40"
      aria-hidden="true"
    />
  );
}

export default function ChatbotPanel({
  isOpen,
  messages,
  isTyping,
  input,
  showQuickChips,
  onClose,
  onInputChange,
  onSend,
  onQuickChip,
}: ChatbotPanelProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const whatsappUrl =
    "https://wa.me/916352644186?text=" +
    encodeURIComponent("Hello ADK Engineering! I would like to speak with your team.");

  const lastBotMessageId = [...messages].reverse().find((m) => m.role === "bot")?.id;

  return (
    <>
      <div
        className="fixed inset-0 z-55 bg-black/10"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-label="ADK Assistant chat"
        onClick={(e) => e.stopPropagation()}
        className="fixed bottom-32 right-4 sm:right-6 z-60 flex flex-col w-[min(100vw-2rem,400px)] h-[min(72vh,560px)] bg-card rounded-lg border border-border/50 shadow-[0_16px_48px_rgba(0,0,0,0.12)] chatbot-panel-enter overflow-hidden"
      >
        {/* Header — avatar + title + status */}
        <header className="chatbot-header flex items-center gap-3 px-4 py-3.5 shrink-0">
          <BotAvatar />
          <div className="flex-1 min-w-0">
            <p className="font-ui text-button text-white leading-tight truncate">
              ADK Assistant
            </p>
            <p className="flex items-center gap-1.5 mt-0.5 font-ui text-label text-white/80">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" aria-hidden="true" />
              Online now
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer"
            aria-label="Close chat"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </header>

        {/* Message thread */}
        <div className="chatbot-thread flex-1 overflow-y-auto px-4 py-5 min-h-0">
          <div className="flex flex-col gap-5">
            {messages.map((msg, index) => {
              const isLastBotWithChips =
                showQuickChips && !isTyping && msg.role === "bot" && msg.id === lastBotMessageId;

              if (msg.role === "user") {
                return (
                  <div key={msg.id} className="flex justify-end chatbot-message">
                    <div className="chatbot-bubble-user">
                      <p className="font-body text-small leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                );
              }

              const bubbles = splitBotBubbles(msg.text);
              const showSenderLabel =
                index === 0 || messages[index - 1]?.role !== "bot";

              return (
                <div key={msg.id} className="flex gap-2.5 items-start chatbot-message">
                  {showSenderLabel ? (
                    <BotAvatar />
                  ) : (
                    <div className="w-8 shrink-0" aria-hidden="true" />
                  )}

                  <div className="flex flex-col gap-2 min-w-0 flex-1 max-w-[calc(100%-2.5rem)]">
                    {showSenderLabel && (
                      <span className="font-ui text-label text-tertiary pl-0.5">ADK Assistant</span>
                    )}

                    <div className="flex flex-col gap-2">
                      {bubbles.map((bubble, bubbleIndex) => (
                        <div key={bubbleIndex} className="chatbot-bubble-bot font-body">
                          {bubbleIndex === 0 && bubble === "Hello!" ? (
                            <p className="font-body text-small leading-relaxed text-foreground/90">{bubble}</p>
                          ) : (
                            formatBotText(bubble)
                          )}
                        </div>
                      ))}
                    </div>

                    {isLastBotWithChips && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {QUICK_CHIPS.map((chip) => (
                          <button
                            key={chip.id}
                            type="button"
                            onClick={() => onQuickChip(chip)}
                            className="chatbot-chip-outline font-ui text-button cursor-pointer"
                          >
                            {chip.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex gap-2.5 items-start chatbot-message">
                <BotAvatar />
                <div className="flex flex-col gap-2 min-w-0">
                  <span className="font-body text-label text-tertiary pl-0.5">ADK Assistant</span>
                  <div className="chatbot-bubble-bot" aria-label="Assistant is typing">
                    <div className="flex items-center gap-1.5 py-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary/50 animate-bounce [animation-delay:0ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary/50 animate-bounce [animation-delay:140ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary/50 animate-bounce [animation-delay:280ms]" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div ref={messagesEndRef} className="h-1" />
        </div>

        {/* Input footer */}
        <footer className="shrink-0 border-t border-border/40 bg-card">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSend();
            }}
            className="flex items-center gap-2 px-4 py-3.5"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => onInputChange(e.target.value)}
              placeholder="Reply to ADK Assistant..."
              className="flex-1 min-w-0 bg-transparent text-small text-foreground placeholder:text-tertiary/50 focus:outline-none font-body"
              aria-label="Chat message"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="shrink-0 w-8 h-8 flex items-center justify-center text-primary disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer transition-opacity duration-200 hover:opacity-80"
              aria-label="Send message"
            >
              <span className="material-symbols-outlined text-[22px]">send</span>
            </button>
          </form>

          <div className="flex items-center justify-between gap-3 px-4 pb-3">
            <span className="font-ui text-label tracking-ui text-tertiary/55 uppercase">
              ADK Engineering
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-label text-tertiary/70 hover:text-primary transition-colors duration-200 whitespace-nowrap"
            >
              WhatsApp →
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
