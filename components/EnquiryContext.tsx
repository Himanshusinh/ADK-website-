"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface EnquiryContextType {
  isOpen: boolean;
  targetItem: string;
  openEnquiry: (item?: string) => void;
  closeEnquiry: () => void;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [targetItem, setTargetItem] = useState("");

  const openEnquiry = (item = "") => {
    setTargetItem(item);
    setIsOpen(true);
  };

  const closeEnquiry = () => {
    setIsOpen(false);
    setTargetItem("");
  };

  return (
    <EnquiryContext.Provider value={{ isOpen, targetItem, openEnquiry, closeEnquiry }}>
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error("useEnquiry must be used within an EnquiryProvider");
  }
  return context;
}
