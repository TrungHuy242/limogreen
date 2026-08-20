"use client";

import React from "react";
import { Armchair, Zap, Wind, ShieldCheck, Briefcase } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    { icon: Armchair, title: "Ghế Ngồi Rộng Rãi" },
    { icon: Zap, title: "Xe Điện Êm Ái" },
    { icon: Wind, title: "Điều Hòa Mát Lạnh" },
    { icon: ShieldCheck, title: "An Toàn Tuyệt Đối" },
    { icon: Briefcase, title: "Hành Lý Thoải Mái" },
  ];

  return (
    <section id="features" className="relative z-20 -mt-10 sm:-mt-16 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 sm:p-10 border border-rule">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-rule">
          {features.map((item, idx) => (
            <div key={idx} className={`flex flex-col items-center justify-center text-center gap-3 pt-6 sm:pt-0 px-2 ${idx === 0 ? "pt-0" : ""}`}>
              <div className="w-14 h-14 bg-[#E8F3EB] rounded-xl flex items-center justify-center border border-accent/10">
                <item.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold text-ink uppercase max-w-[120px]">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
