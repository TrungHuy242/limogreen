"use client";

import React from "react";
import Image from "next/image";
import { Shield, Clock, Heart } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="bg-accent text-white px-4 py-8 rounded-t-3xl sm:rounded-t-[3rem] shadow-2xl relative z-20 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row flex-wrap items-center justify-between gap-8 text-center lg:text-left">
        
        {/* Logo & Slogan trái */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Image
            src="/images/LogoNoBakground.png"
            alt="LimoGreen Logo"
            width={200}
            height={55}
            className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
          />
          <div className="hidden sm:block w-px h-10 bg-white/30" />
          <div>
            <p className="text-sm text-white/90 font-medium tracking-wide">Đi xanh – Sống xanh – Tương lai xanh</p>
          </div>
        </div>

        {/* Slogan giữa (Chữ ký/Slogan cong) */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-2 mx-4">
          <h3 className="font-display text-xl sm:text-2xl italic font-semibold tracking-tight text-white/90">
            Hành trình xanh – Trải nghiệm êm ái!
          </h3>
        </div>

        {/* 3 Cam kết bên phải */}
        <div className="flex flex-wrap justify-center lg:justify-end gap-6 sm:gap-10">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-white/90" />
            <span className="text-xs sm:text-sm font-bold uppercase leading-tight text-left">An Toàn<br/>Là Trên Hết</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-white/90" />
            <span className="text-xs sm:text-sm font-bold uppercase leading-tight text-left">Đúng Giờ<br/>Đúng Hẹn</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-white/90" />
            <span className="text-xs sm:text-sm font-bold uppercase leading-tight text-left">Tận Tâm<br/>Phục Vụ</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
