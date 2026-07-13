"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`flex items-center justify-center w-9 h-9 border border-border hover:border-primary hover:text-primary text-foreground transition-colors cursor-pointer ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className="material-symbols-outlined text-[20px]">
        {isDark ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}
