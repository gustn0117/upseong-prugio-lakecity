import type { Metadata } from "next";
import "./globals.css";
import ScrollAnimations from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title: "업성 푸르지오 레이크시티 | 호수공원 앞 프리미엄 주거",
  description: "천안 업성동, 호수공원 바로 앞 프리미엄 주거단지. 대우건설 시공, 푸르지오 브랜드. 분양문의 1844-0981",
  keywords: "업성 푸르지오, 레이크시티, 천안 아파트, 호수공원, 대우건설, 푸르지오, 분양",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="font-sans antialiased">
        <ScrollAnimations />
        {children}
      </body>
    </html>
  );
}
