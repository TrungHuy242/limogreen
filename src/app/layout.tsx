import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FacebookPixel from "@/components/scripts/FacebookPixel";
import { defaultSchema } from "@/lib/gemini-hooks";

const inter = Inter({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "LimoGreen – Xe Điện Cao Cấp Tuyến Đà Nẵng – Quảng Trị | 0774 737 474",
  description:
    "LimoGreen – Dịch vụ xe điện cao cấp VinFast VF8 tuyến Đà Nẵng – Quảng Trị. Đưa đón tận nơi, 0 khí thải, hỗ trợ 24/7. Đặt xe: 0774 737 474.",
  keywords: [
    "xe điện Đà Nẵng Quảng Trị",
    "LimoGreen",
    "VinFast VF8",
    "đặt xe điện",
    "xe cao cấp liên tỉnh",
  ],
  openGraph: {
    title: "LimoGreen – Xe Điện Cao Cấp Đà Nẵng – Quảng Trị",
    description:
      "Hành trình xanh, trải nghiệm sang trọng. VinFast VF8 – Đưa đón tận nơi. Gọi: 0774 737 474",
    url: "https://limogreen.vn",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <FacebookPixel />
        {/* Dynamic JSON-LD Schema (Ready for Gemini hook integration) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(defaultSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased mesh-bg text-gray-800`}>
        {children}
      </body>
    </html>
  );
}
