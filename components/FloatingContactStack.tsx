import ChatbotWidget from "@/components/ChatbotWidget";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function FloatingContactStack() {
  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-center gap-3">
      <ChatbotWidget />
      <WhatsAppButton />
    </div>
  );
}
