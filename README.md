# LimoGreen

Landing page cho dịch vụ xe điện VinFast VF8 tuyến **Đà Nẵng – Huế – Quảng Trị** (và ngược lại). Hotline / Zalo: **0933 737 474**.

Bản đang chạy: https://limogreen.vercel.app

## Công nghệ

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4 (màu và animation khai báo trong `src/app/globals.css`)
- lucide-react cho icon
- Deploy trên Vercel

## Chạy thử trên máy

```bash
npm install
npm run dev
```

Mở http://localhost:3000.

Các lệnh khác: `npm run build`, `npm run start`, `npm run lint`.

## Cấu trúc

```
src/
  app/
    layout.tsx            # metadata SEO, JSON-LD, Facebook Pixel
    page.tsx              # ghép các section
    robots.ts, sitemap.ts # robots.txt và sitemap.xml
    icon.png, apple-icon.png, opengraph-image.png
  components/
    sections/             # Header, Hero, Features, Route, Footer, nút nổi Gọi/Zalo
    scripts/FacebookPixel.tsx
  lib/seo.ts              # SITE_URL và schema LocalBusiness
public/images/            # logo, ảnh xe, QR Zalo
```

## Cấu hình

| Việc cần làm | Ở đâu |
| --- | --- |
| Bật Facebook Pixel | Thêm biến môi trường `NEXT_PUBLIC_FB_PIXEL_ID` trên Vercel (Settings → Environment Variables), rồi redeploy. Chưa có biến này thì Pixel không được tải. |
| Đổi sang tên miền riêng | Sửa `SITE_URL` trong `src/lib/seo.ts`. |
| Đổi số điện thoại / Zalo | Tìm `0933737474` trong `src/components/sections` và `src/lib/seo.ts`. |
