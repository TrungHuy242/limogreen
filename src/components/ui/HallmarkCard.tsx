"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface HallmarkCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const HallmarkCard = ({
  children,
  className,
  ...props
}: HallmarkCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative bg-[oklch(22%_0.02_155)] rounded-2xl p-7 transition-all duration-300 ease-out",
        "group overflow-hidden border border-transparent",
        className
      )}
      style={{
        boxShadow: `0 0 0 1px var(--color-rule) inset`,
      }}
      {...props}
    >
      {/* CSS Mask gradient border (Hallmark style) */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          padding: "1px",
          background: `linear-gradient(135deg, var(--color-accent), transparent 60%)`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      {/* Mouse track glow */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-plus-lighter"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, var(--color-accent-glow) 0%, transparent 50%)`,
        }}
      />
      
      <div className="relative z-10">{children}</div>
    </div>
  );
};
