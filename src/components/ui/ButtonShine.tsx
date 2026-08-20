import React from "react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/components/scripts/FacebookPixel";

interface ButtonShineProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  as?: "button" | "a";
  href?: string;
  trackingEvent?: string;
}

export const ButtonShine = ({
  children,
  className,
  as = "button",
  href,
  trackingEvent,
  onClick,
  ...props
}: ButtonShineProps) => {
  const Component = as as any;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (trackingEvent) {
      trackEvent(trackingEvent);
    }
    if (onClick) onClick(e);
  };

  return (
    <Component
      href={href}
      onClick={handleClick}
      className={cn(
        "group relative overflow-hidden inline-flex items-center justify-center gap-2",
        "transition-all duration-300 active:scale-95",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Shine effect */}
      <div
        className="absolute inset-0 z-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)",
        }}
      />
    </Component>
  );
};
