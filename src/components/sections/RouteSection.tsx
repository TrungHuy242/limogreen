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
              Lộ Trình Tuyến
            </div>
            
            <div className="w-full relative pl-8 pr-4 pb-4">
              {/* Vertical Dashed Line */}
              <div className="absolute left-[39px] top-2 bottom-[30px] w-0.5 border-l-2 border-dashed border-rule"></div>

              {/* Point 1 */}
              <div className="relative mb-7">
                <div className="absolute -left-[14px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-accent shadow-sm z-10"></div>
                <div className="pl-6">
                  <h4 className="text-[17px] font-black text-ink uppercase tracking-tight">Đà Nẵng</h4>
                  <p className="text-[13px] text-ink-muted leading-relaxed mt-1 font-medium">Sân bay, Bến xe, Nội thành, Liên Chiểu</p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="relative mb-7">
                <div className="absolute -left-[14px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#0284C7] shadow-sm z-10"></div>
                <div className="pl-6">
                  <h4 className="text-[17px] font-black text-ink uppercase tracking-tight">Huế</h4>
                  <p className="text-[13px] text-ink-muted leading-relaxed mt-1 font-medium">Phú Lộc, Phú Bài, Trung tâm TP Huế</p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="relative">
                <div className="absolute -left-[14px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#EF4444] shadow-sm z-10"></div>
                <div className="pl-6">
                  <h4 className="text-[17px] font-black text-ink uppercase tracking-tight">Quảng Trị</h4>
                  <p className="text-[13px] text-ink-muted leading-relaxed mt-1 font-medium">Hải Lăng, TX Quảng Trị, TP Đông Hà</p>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-bold text-ink-muted mt-2 mb-6 uppercase text-center w-full tracking-wider bg-paper-2 py-2 rounded-lg inline-flex justify-center items-center gap-2 border border-rule/50">
              <ArrowRight className="w-3 h-3" /> Chiều ngược lại tương tự
            </div>

            <div className="w-full bg-[#E8F3EB] border border-accent/20 rounded-xl p-4 flex items-start gap-4">
              <Car className="w-8 h-8 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-ink uppercase mb-1.5 text-[15px]">Đưa Đón Tận Nơi</h4>
                <p className="text-[13px] text-ink-muted leading-relaxed font-medium">Tài xế đón/trả tận nhà tại các điểm trong nội thành và lân cận.</p>
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
