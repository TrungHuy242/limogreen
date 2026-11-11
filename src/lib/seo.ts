// Domain chính thức của web. Khi có tên miền riêng (vd: limogreen.vn) chỉ cần đổi ở đây.
export const SITE_URL = "https://limogreen.vercel.app";

// JSON-LD LocalBusiness cho Google
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "LimoGreen – Xe Điện Cao Cấp",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image.png`,
  logo: `${SITE_URL}/images/LogoNoBakground.png`,
  telephone: "+84933737474",
  description:
    "Dịch vụ xe điện cao cấp VinFast VF8 tuyến Đà Nẵng – Huế – Quảng Trị và ngược lại. Đưa đón tận nơi, hỗ trợ 24/7.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Đà Nẵng",
    addressCountry: "VN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: ["https://zalo.me/84933737474"],
  areaServed: [
    { "@type": "City", name: "Đà Nẵng" },
    { "@type": "City", name: "Huế" },
    { "@type": "City", name: "Quảng Trị" },
  ],
};
