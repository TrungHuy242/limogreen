"use client";

import React, { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { trackEvent } from "@/components/scripts/FacebookPixel";

export const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll < 100) {
        setIsVisible(true);
      } else if (currentScroll > lastScroll + 50) {
        setIsVisible(false);
      } else if (currentScroll < lastScroll - 50) {
        setIsVisible(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div
      className={`fixed bottom-6 right-5 sm:right-7 z-[60] flex flex-col gap-3 items-end transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href="tel:0774737474"
        onClick={() => trackEvent("Call_Floating")}
        className="flex items-center justify-center gap-2.5 bg-white text-ink border border-rule hover:bg-paper-2 w-14 h-14 rounded-full shadow-lg sm:w-auto sm:h-auto sm:px-5 sm:py-3.5 sm:rounded-full transition-all duration-200 active:scale-95"
      >
        <Phone className="w-5 h-5 shrink-0 text-accent" strokeWidth={2.5} />
        <span className="hidden sm:inline font-bold text-[14px] tracking-wide">Gọi Xe</span>
      </a>

      <a
        href="https://zalo.me/84774737474"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("Zalo_Floating")}
        className="flex items-center justify-center gap-2.5 text-white bg-accent hover:bg-black w-14 h-14 rounded-full shadow-xl shadow-accent/30 sm:w-auto sm:h-auto sm:px-5 sm:py-3.5 sm:rounded-full transition-all duration-200 active:scale-95"
      >
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 32 32" fill="currentColor">
          <rect x="2" y="2" width="28" height="28" rx="7" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.9" />
          <text x="7.5" y="24" fontSize="18" fontWeight="bold" fontFamily="sans-serif">Z</text>
        </svg>
        <span className="hidden sm:inline font-bold text-[14px] tracking-wide">Zalo</span>
      </a>
    </div>
  );
};
