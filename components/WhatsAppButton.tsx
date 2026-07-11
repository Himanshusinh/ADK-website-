"use client";

import React from "react";

export default function WhatsAppButton() {
  const phoneNumber = "916352644186"; // ADK Hotline: +91 63526 44186
  const message = encodeURIComponent("Hello ADK Engineering! I would like to inquire about your machinery configurations.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-2xl hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
      title="Chat with ADK on WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        className="w-7 h-7 text-white fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.806-9.799.002-2.597-1.002-5.039-2.83-6.87-1.83-1.832-4.27-2.834-6.864-2.835-5.412 0-9.816 4.394-9.819 9.803-.001 1.554.437 3.076 1.267 4.414l-.977 3.564 3.654-.959c1.391.802 2.766 1.218 4.268 1.226zM17.65 14.77c-.31-.155-1.837-.905-2.12-.108-.285.103-.55.285-.802.583-.25.297-.502.66-.751.58-.25-.078-.71-.24-1.353-.815-.5-.447-.838-.999-.937-1.168-.1-.17-.01-.26.076-.345.078-.076.17-.2.256-.3.085-.1.114-.17.17-.34.058-.17.03-.32-.015-.42-.043-.1-.384-.925-.526-1.272-.14-.336-.28-.29-.384-.296-.1-.005-.213-.006-.328-.006-.114 0-.3.043-.456.213-.157.17-.6.586-.6 1.428s.614 1.64 1.01 2.19c.396.55 2.023 3.09 4.9 4.335.684.296 1.22.473 1.636.604.688.22 1.314.19 1.808.116.55-.082 1.837-.751 2.095-1.44.256-.69.256-1.282.18-1.4-.075-.118-.284-.19-.594-.344z" />
      </svg>

      {/* Ripple Animation Indicator */}
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-0 group-hover:animate-ping pointer-events-none"></span>
    </a>
  );
}
