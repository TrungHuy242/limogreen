import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { RouteSection } from "@/components/sections/RouteSection";
import { FooterSection } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/sections/FloatingButtons";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      
      {/* N5 Floating Nav */}
      <Header />
      
      {/* Sections */}
      <HeroSection />
      
      {/* 
        Marquee Hero rule: "Below the fold the page becomes something else (a list, a grid, prose)." 
        Chúng ta đặt Features (Bento Grid) ngay dưới Hero để show tính năng.
      */}
      <FeaturesSection />
      
      <RouteSection />
      
      {/* Ft5 Statement Footer */}
      <FooterSection />

      {/* Floating Buttons (Call & Zalo) */}
      <FloatingButtons />

    </main>
  );
}
