"use client";

import React, { useEffect, useRef } from "react";
import { QUICK_CHIPS } from "@/lib/chatbot";

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
    <div className="space-y-1.5">
      {lines.map((line, lineIndex) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={lineIndex} className="h-2" aria-hidden="true" />;
        }

        if (trimmed.startsWith("•")) {
          return (
            <p key={lineIndex} className="text-[13px] leading-[1.55] text-foreground/88 pl-0.5">
              {formatInline(trimmed)}
            </p>
          );
        }

        return (
          <p key={lineIndex} className="text-[13px] leading-[1.55] text-foreground/90">
            {formatInline(line)}
          </p>
        );
      })}
    </div>
  );
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

  return (
    <>
      <div
        className="fixed inset-0 z-55 bg-black/25 backdrop-blur-[1px] md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-label="ADK Assistant chat"
        className="fixed bottom-32 right-4 sm:right-6 z-60 flex flex-col w-[min(100vw-2rem,380px)] h-[min(72vh,540px)] bg-card border border-primary/20 shadow-[0_12px_48px_rgba(0,0,0,0.14)] chatbot-panel-enter overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-border/40 shrink-0 bg-card">
          <div className="min-w-0">
            <div className="font-mono text-primary text-[9px] tracking-[0.2em] uppercase">
              [ ADK_ASSISTANT ]
            </div>
            <div className="flex items-center gap-2 mt-1">
              <p className="font-sans text-[13px] font-medium text-foreground leading-none">
                Engineering Support
              </p>
              <span className="inline-flex items-center gap-1 font-mono text-[8px] uppercase tracking-wider text-tertiary">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                Online
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 w-7 h-7 flex items-center justify-center text-foreground/40 hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-pointer chatbot-icon-btn"
            aria-label="Close chat"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Message thread */}
        <div className="chatbot-thread flex-1 overflow-y-auto px-3 py-4 space-y-4 min-h-0">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col gap-1 ${msg.role === "user" ? "items-end" : "items-start"} chatbot-message`}
            >
              <span
                className={`font-mono text-[8px] uppercase tracking-[0.16em] text-tertiary/80 px-0.5 ${
                  msg.role === "user" ? "text-right" : "text-left"
                }`}
              >
                {msg.role === "user" ? "Operator" : "ADK"}
              </span>

              {msg.role === "user" ? (
                <div className="chatbot-bubble-user">
                  <p className="font-sans text-[13px] leading-[1.5] text-foreground text-right">
                    {msg.text}
                  </p>
                </div>
              ) : (
                <div className="chatbot-bubble-bot font-sans">{formatBotText(msg.text)}</div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex flex-col items-start gap-1 chatbot-message">
              <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-tertiary/80 px-0.5">
                ADK
              </span>
              <div className="chatbot-bubble-typing" aria-label="Assistant is typing">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce [animation-delay:0ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce [animation-delay:140ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce [animation-delay:280ms]" />
                </div>
              </div>
            </div>
          )}

          {showQuickChips && !isTyping && (
            <div className="flex flex-wrap gap-2 pt-1 chatbot-message">
              {QUICK_CHIPS.map((chip) => (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => onQuickChip(chip)}
                  className="chatbot-chip-pill font-sans cursor-pointer"
                >
                  {chip.label}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input + footer */}
        <div className="shrink-0 border-t border-border/40 bg-card pt-3 pb-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSend();
            }}
          >
            <div className="chatbot-input-wrap">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => onInputChange(e.target.value)}
                placeholder="Ask about products, service, quotations..."
                className="flex-1 min-w-0 bg-transparent text-[13px] text-foreground placeholder:text-tertiary/55 focus:outline-none py-2 font-sans"
                aria-label="Chat message"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="shrink-0 w-8 h-8 flex items-center justify-center rounded-sm bg-primary text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all duration-200 hover:bg-primary-hover chatbot-send-btn"
                aria-label="Send message"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_upward</span>
              </button>
            </div>
          </form>

          <div className="px-4 pt-2 pb-1 text-center">
            <p className="font-sans text-[10px] text-tertiary/65">Need human assistance?</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-0.5 font-sans text-[11px] text-tertiary/75 hover:text-primary transition-colors duration-200"
            >
              Talk on WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
