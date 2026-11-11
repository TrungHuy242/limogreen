import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FacebookPixel from "@/components/scripts/FacebookPixel";
import { SITE_URL, localBusinessSchema } from "@/lib/seo";

const inter = Inter({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "LimoGreen – Xe Điện Cao Cấp Đà Nẵng – Huế – Quảng Trị | 0933 737 474",
  description:
    "LimoGreen – Dịch vụ xe điện cao cấp VinFast VF8 tuyến Đà Nẵng – Huế – Quảng Trị và ngược lại. Đưa đón tận nơi, 0 khí thải, hỗ trợ 24/7. Đặt xe: 0933 737 474.",
  keywords: [
    "xe điện Đà Nẵng Quảng Trị",
    "xe Đà Nẵng Huế",
    "xe Huế Quảng Trị",
    "LimoGreen",
    "VinFast VF8",
    "đặt xe điện",
    "xe cao cấp liên tỉnh",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LimoGreen – Xe Điện Cao Cấp Đà Nẵng – Huế – Quảng Trị",
    description:
      "Hành trình xanh, trải nghiệm sang trọng. VinFast VF8 – Đưa đón tận nơi. Gọi: 0933 737 474",
    url: "/",
    siteName: "LimoGreen",
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased text-gray-800`}>
        {children}
      </body>
    </html>
  );
}
