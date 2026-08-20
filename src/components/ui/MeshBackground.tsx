"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const MeshBackground = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[-1] pointer-events-none bg-[#f8fafc]",
        className
      )}
    >
      {/* Mesh Gradients */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 15% 15%, rgba(34,197,94,0.09) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 5%,  rgba(134,239,172,0.06) 0%, transparent 45%),
            radial-gradient(ellipse at 60% 85%, rgba(21,128,61,0.07) 0%, transparent 50%),
            radial-gradient(ellipse at 5% 70%,  rgba(74,222,128,0.05) 0%, transparent 45%),
            radial-gradient(ellipse at 95% 50%, rgba(34,197,94,0.04) 0%, transparent 40%)
          `,
        }}
      />
      {/* Static electric light streaks */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            125deg,
            transparent 0%,
            transparent 49.8%,
            rgba(34,197,94,0.025) 49.9%,
            rgba(34,197,94,0.025) 50.1%,
            transparent 50.2%,
            transparent 100%
          )`,
          backgroundSize: "200px 200px",
        }}
      />
    </div>
  );
};
