import type { Metadata } from "next";
import "./globals.css";
import ScrollAnimations from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title: "업성 푸르지오 레이크시티 | 호수공원 앞 프리미엄 주거",
  description: "업성 푸르지오 레이크시티 - 호수공원 앞, 자연과 함께하는 프리미엄 주거. DL이앤씨가 선보이는 새로운 라이프스타일",
  keywords: "푸르지오, 레이크시티, 업성동, DL이앤씨, 아파트, 분양, 천안, 프리미엄, 호수공원",
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
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800;900&family=Noto+Serif+KR:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ScrollAnimations />
        {children}
      </body>
    </html>
  );
}
