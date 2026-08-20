"use client";

import React from "react";
import { CheckCircle2, MapPin, ArrowRight, Car, QrCode, Phone } from "lucide-react";
import { trackEvent } from "@/components/scripts/FacebookPixel";
import Image from "next/image";

export const RouteSection = () => {
  return (
    <section id="route" className="py-20 bg-paper px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-sm border border-rule overflow-hidden">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-10 divide-y md:divide-y-0 md:divide-x divide-rule">
          
          {/* Cột 1: Vì sao chọn LimoGreen */}
          <div className="flex flex-col">
            <div className="bg-accent text-white font-bold px-6 py-2 rounded-full mb-8 inline-flex self-start uppercase text-sm tracking-wide">
              Vì Sao Chọn LimoGreen?
            </div>
            <ul className="space-y-4">
              {[
                "Xe điện cao cấp, sạch sẽ, hiện đại",
                "Tài xế chuyên nghiệp, tận tâm",
                "Đúng giờ – Linh hoạt – Giá hợp lý",
                "Đưa đón tận nơi theo yêu cầu",
                "Hỗ trợ 24/7 – Luôn sẵn sàng phục vụ"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="bg-[#E8F3EB] rounded-full p-0.5 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-ink-muted text-sm md:text-[15px] leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 2: Lộ trình chính */}
          <div className="flex flex-col items-center pt-8 md:pt-0">
            <div className="bg-accent text-white font-bold px-6 py-2 rounded-full mb-8 inline-flex uppercase text-sm tracking-wide">
              Lộ Trình Chính
            </div>
            
            <div className="flex items-center justify-center gap-4 w-full mb-8">
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-ink mb-2" />
                <span className="font-bold text-sm uppercase">Đà Nẵng</span>
              </div>
              <div className="flex-1 flex flex-col items-center px-2">
                <div className="w-full border-t border-dashed border-ink-muted/50 relative flex justify-center">
                  <div className="absolute -top-3.5 bg-accent text-white rounded-full p-1 border-4 border-white">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <span className="text-xs font-semibold text-ink mt-4 uppercase">Và Ngược Lại</span>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-ink mb-2" />
                <span className="font-bold text-sm uppercase">Quảng Trị</span>
              </div>
            </div>

            <div className="w-full bg-[#F4F9F5] rounded-xl p-5 flex items-start gap-4">
              <Car className="w-8 h-8 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-ink uppercase mb-2">Đưa Đón Tận Nơi</h4>
                <ul className="space-y-1 text-sm text-ink-muted list-disc ml-4 marker:text-accent">
                  <li>Trong nội thành Đà Nẵng, Quảng Trị</li>
                  <li>Các huyện, thị xã lân cận</li>
                  <li>Theo yêu cầu của khách hàng</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cột 3: Liên hệ đặt xe */}
          <div className="flex flex-col items-center pt-8 md:pt-0">
            <div className="bg-accent text-white font-bold px-6 py-2 rounded-full mb-6 inline-flex uppercase text-sm tracking-wide">
              Liên Hệ Đặt Xe
            </div>
            
            <a 
              href="tel:0774737474"
              onClick={() => trackEvent("Call_Card")}
              className="flex items-center gap-3 text-accent hover:opacity-80 transition-opacity mb-2"
            >
              <div className="bg-accent rounded-full p-2">
                <Phone className="w-7 h-7 text-white fill-white" />
              </div>
              <span className="font-black text-3xl tracking-tight">0774 737 474</span>
            </a>
            <p className="text-sm text-ink-muted font-medium mb-8">(Zalo / Điện thoại)</p>

            <div className="flex items-center gap-6 w-full justify-center">
              <div className="bg-white p-2 rounded-xl border border-rule shadow-sm overflow-hidden flex items-center justify-center">
                <Image src="/images/QRZalo.png" alt="LimoGreen Zalo QR Code" width={110} height={110} className="object-contain" />
              </div>
              <div className="text-sm font-medium text-ink-muted italic leading-relaxed">
                Quét QR<br />để kết nối Zalo<br />và đặt xe ngay!
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
