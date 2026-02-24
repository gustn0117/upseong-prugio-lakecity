"use client";

import SectionBanner from "../SectionBanner";

function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center py-32 lg:py-40">
      <div className="w-16 h-16 rounded-full bg-elif-cream flex items-center justify-center mb-6">
        <svg className="w-7 h-7 text-elif-lake" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <p className="text-gray-400 text-[15px] font-medium tracking-wide">준비중입니다</p>
      <p className="text-gray-300 text-[13px] mt-2">확정 후 업데이트 예정</p>
    </div>
  );
}

export default function LocationSection() {
  return (
    <section className="pt-[80px]">
      <SectionBanner
        title="입 지 환 경"
        subtitle="성성호수공원 앞, 최적의 입지를 만나보세요."
        fallbackGradient="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500"
      />

      <div className="max-w-[1200px] mx-auto px-6">
        <ComingSoon />
      </div>
    </section>
  );
}
