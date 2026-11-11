"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { trackEvent } from "@/components/scripts/FacebookPixel";

/* Hallmark · component: Header · archetype: N5 Floating Pill */

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out flex items-center justify-between sm:justify-start gap-4 sm:gap-10 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full glass-pill shadow-lg shadow-black/5 ${
        scrolled ? "top-4 scale-[0.98]" : ""
      }`}
      style={{ width: 'min(90vw, 800px)' }}
      aria-label="Primary"
    >
      <a href="#" className="flex-shrink-0 hover:opacity-80 transition-opacity">
        {/* Logo to hơn theo yêu cầu */}
        <Image
          src="/images/LogoNoBakground.png"
          alt="LimoGreen Logo"
          width={220}
          height={60}
          className="h-9 sm:h-12 w-auto object-contain"
        />
      </a>

      <ul className="hidden sm:flex items-center justify-center flex-1 gap-8 text-[14px] font-semibold tracking-wide">
        <li>
          <a href="#why" className="text-ink-muted hover:text-accent transition-colors">Vì sao chọn LimoGreen?</a>
        </li>
        <li>
          <a href="#route" className="text-ink-muted hover:text-accent transition-colors">Lộ trình</a>
        </li>
      </ul>

      <a
        href="tel:0774737474"
        onClick={() => trackEvent("Call_Header")}
        className="flex-shrink-0 text-[14px] font-bold bg-accent text-white px-5 py-2.5 rounded-full hover:bg-black transition-colors active:scale-95 shadow-md shadow-accent/20"
      >
        <span className="hidden sm:inline">Gọi Ngay:</span> 0774 737 474
      </a>
    </nav>
  );
};
