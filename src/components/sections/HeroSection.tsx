"use client";

import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-paper">
      
      {/* Nền xanh cong như trong Poster (Dải cong bên phải/dưới ảnh xe) */}
      <div 
        className="absolute bottom-0 right-0 w-full md:w-[65%] h-[70%] md:h-full bg-accent rounded-tl-[100px] sm:rounded-tl-[200px] lg:rounded-tl-[300px] -z-10"
        style={{
          boxShadow: "-20px -20px 60px rgba(22, 101, 52, 0.1)"
        }}
      />
      {/* Phố cảnh / background Cầu Rồng mờ đằng sau mảng màu xanh */}
      <div 
        className="absolute bottom-0 right-0 w-full md:w-[65%] h-[70%] md:h-full rounded-tl-[100px] sm:rounded-tl-[200px] lg:rounded-tl-[300px] -z-10 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80')" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Cột trái: Nội dung giống poster */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            
            <div className="bg-accent text-white font-bold px-6 py-2 rounded-full mb-6 text-sm uppercase tracking-wider shadow-md">
              Chạy Chuyến
            </div>
            
            <h1 className="font-black text-ink leading-[1.1] mb-6 text-4xl sm:text-5xl lg:text-6xl flex flex-col gap-2">
              <span>ĐÀ NẴNG</span>
              <div className="flex items-center justify-center md:justify-start gap-4 text-accent">
                <span className="w-12 h-1 bg-accent rounded-full" />
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.71 11.71-3 3a1 1 0 0 1-1.42 0l-3-3a1 1 0 0 1 1.42-1.42L11 13.59V8a1 1 0 0 1 2 0v5.59l1.29-1.29a1 1 0 0 1 1.42 1.42z"/></svg>
                <span className="w-12 h-1 bg-accent rounded-full" />
              </div>
              <span>QUẢNG TRỊ</span>
            </h1>
            
            <p className="text-ink-muted font-bold text-xl uppercase mb-8">Và Ngược Lại</p>
            
            {/* Box Đưa đón tận nơi */}
            <div className="bg-[#E8F3EB] border border-accent/20 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-sm w-full max-w-sm mb-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-lg font-black text-ink uppercase">Đưa Đón Tận Nơi</div>
                <div className="text-sm font-medium text-ink-muted">Nhanh chóng - An toàn - Tiện nghi</div>
              </div>
            </div>

          </div>

          {/* Cột phải: Ảnh Xe */}
          <div className="relative flex items-center justify-center mt-10 md:mt-0">
            <div className="relative w-full max-w-[800px] animate-float-car">
              <Image
                src="/images/Xe.png"
                alt="Xe điện VinFast VF8 màu trắng của LimoGreen"
                width={800}
                height={600}
                className="w-full h-auto object-contain relative z-10 drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
