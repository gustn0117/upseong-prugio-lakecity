"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionBanner from "../SectionBanner";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const overviewData = [
  { label: "사업명", value: "엘리프 성성호수공원", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { label: "사업지", value: "충청남도 천안시 서북구 업성동 368-7", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
  { label: "사업규모", value: "최고 29층 / 5개동", icon: "M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
  { label: "세대수", value: "1,165세대", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  { label: "주차대수", value: "세대당 1.38대 (법정 1.16대)", icon: "M5 13l4 4L19 7" },
  { label: "시공사", value: "계룡건설산업(주)", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
];

const highlights = [
  { num: "29", unit: "층", label: "최고 층수" },
  { num: "5", unit: "개동", label: "동 수" },
  { num: "1,165", unit: "세대", label: "총 세대수" },
  { num: "1.38", unit: "대", label: "세대당 주차" },
];

const typeInfo = [
  { type: "84㎡A", exclusive: "84.9800㎡", count: "468세대", ratio: 40.2 },
  { type: "84㎡B", exclusive: "84.9556㎡", count: "348세대", ratio: 29.9 },
  { type: "111㎡", exclusive: "111.9760㎡", count: "349세대", ratio: 29.9 },
];

export default function BusinessSection() {
  const sec1 = useInView();
  const sec2 = useInView();
  const sec3 = useInView();
  const sec4 = useInView();
  const sec5 = useInView();

  return (
    <section className="pt-[80px]">
      <SectionBanner
        title="사 업 개 요"
        subtitle="엘리프 성성호수공원의 사업 정보를 확인하세요."
        fallbackGradient="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500"
        bgImage="/images/banner-business.jpg"
      />

      {/* ===== 헤드라인 ===== */}
      <div className="bg-[#FAFAF7]">
        <div
          ref={sec1.ref}
          className={`max-w-[1100px] mx-auto px-6 pt-20 pb-16 text-center transition-all duration-700 ${sec1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-elif-green text-[13px] font-semibold tracking-[4px] uppercase mb-4">PROJECT OVERVIEW</p>
          <h2
            className="text-[26px] sm:text-[32px] lg:text-[38px] font-light text-gray-900 leading-snug"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            성성호수공원의 새로운 랜드마크,<br />
            <span className="font-bold">엘리프 성성호수공원</span>
          </h2>
          <p className="mt-5 text-[14px] sm:text-[15px] text-gray-500 leading-relaxed max-w-[480px] mx-auto">
            자연과 도시가 조화를 이루는 프리미엄 주거단지<br />
            1,165세대의 대규모 커뮤니티가 완성됩니다.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-elif-lake/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-elif-lake/60" />
            <span className="w-8 h-[1px] bg-elif-lake/40" />
          </div>
        </div>
      </div>

      {/* ===== 하이라이트 숫자 4개 ===== */}
      <div className="bg-[#FAFAF7]">
        <div ref={sec2.ref} className="max-w-[1000px] mx-auto px-6 pb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-2xl p-7 text-center border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group ${sec2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: sec2.visible ? `${i * 100}ms` : "0ms" }}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-b-full bg-elif-green/60 group-hover:w-20 group-hover:bg-elif-green transition-all duration-300" />
                <div className="flex items-baseline justify-center gap-1 mt-2">
                  <span
                    className="text-[34px] lg:text-[40px] font-bold text-gray-900"
                    style={{ fontFamily: "'Noto Serif KR', serif" }}
                  >
                    {item.num}
                  </span>
                  <span className="text-[14px] text-elif-green font-semibold">{item.unit}</span>
                </div>
                <p className="text-[13px] text-gray-400 mt-2 tracking-wide">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== 그라데이션 전환 ===== */}
      <div className="h-24 bg-gradient-to-b from-[#FAFAF7] to-elif-green-dark" />

      {/* ===== 사업개요 상세 ===== */}
      <div className="bg-elif-green-dark relative overflow-hidden">
        <div className="absolute inset-0 pattern-waves opacity-10" />
        <div
          ref={sec3.ref}
          className={`relative max-w-[900px] mx-auto px-6 py-20 transition-all duration-700 ${sec3.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="text-center mb-14">
            <p className="text-elif-lake text-[12px] font-semibold tracking-[4px] uppercase mb-3">DETAILS</p>
            <h2
              className="text-[24px] sm:text-[30px] text-white font-light"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              사업 <span className="font-bold">상세 정보</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {overviewData.map((row, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 p-5 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-300 ${sec3.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: sec3.visible ? `${i * 80}ms` : "0ms" }}
              >
                <div className="w-10 h-10 rounded-lg bg-elif-lake/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-elif-lake" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={row.icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] text-elif-lake font-semibold tracking-wider mb-1">{row.label}</p>
                  <p className="text-[14px] text-white/90 font-medium leading-relaxed">{row.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== 그라데이션 전환 ===== */}
      <div className="h-20 bg-gradient-to-b from-elif-green-dark to-[#FAFAF7]" />

      {/* ===== 타입별 면적 ===== */}
      <div className="bg-[#FAFAF7]">
        <div
          ref={sec4.ref}
          className={`max-w-[900px] mx-auto px-6 pt-10 pb-12 transition-all duration-700 ${sec4.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="text-center mb-14">
            <p className="text-elif-green text-[13px] font-semibold tracking-[4px] uppercase mb-3">UNIT TYPES</p>
            <h2
              className="text-[24px] sm:text-[30px] text-gray-900 font-light"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              타입별 <span className="font-bold">세대 안내</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {typeInfo.map((t, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 group ${sec4.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: sec4.visible ? `${i * 120}ms` : "0ms" }}
              >
                <div className="relative bg-elif-green px-5 py-5 text-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-elif-green-dark/30 to-transparent" />
                  <div className="absolute inset-0 pattern-waves opacity-10" />
                  <span className="relative text-white text-[24px] font-bold tracking-wide" style={{ fontFamily: "'Noto Serif KR', serif" }}>{t.type}</span>
                </div>
                <div className="p-6 space-y-5">
                  <div className="text-center">
                    <p className="text-[11px] text-gray-400 font-medium tracking-wider uppercase mb-1.5">전용면적</p>
                    <p className="text-[16px] text-gray-800 font-bold">{t.exclusive}</p>
                  </div>
                  <div className="h-px bg-gray-100" />
                  <div className="text-center">
                    <p className="text-[11px] text-gray-400 font-medium tracking-wider uppercase mb-1.5">세대수</p>
                    <p className="text-[22px] text-elif-green font-bold" style={{ fontFamily: "'Noto Serif KR', serif" }}>{t.count}</p>
                  </div>
                  {/* 비율 바 */}
                  <div>
                    <div className="flex justify-between text-[11px] text-gray-400 mb-1.5">
                      <span>구성 비율</span>
                      <span className="text-elif-green font-semibold">{t.ratio}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-elif-green to-elif-green-light rounded-full transition-all duration-1000"
                        style={{ width: sec4.visible ? `${t.ratio}%` : "0%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="bg-[#FAFAF7]">
        <div
          ref={sec5.ref}
          className={`max-w-[700px] mx-auto px-6 pb-24 pt-8 text-center transition-all duration-700 ${sec5.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="bg-elif-green rounded-2xl p-10 sm:p-12 relative overflow-hidden">
            <div className="absolute inset-0 pattern-waves opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-elif-green-dark/20 to-transparent" />
            <div className="relative">
              <p className="text-elif-lake text-[12px] font-semibold tracking-[3px] mb-3">CONTACT US</p>
              <h3
                className="text-white text-[22px] sm:text-[26px] font-light mb-3"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                분양 상담 <span className="font-bold">문의</span>
              </h3>
              <p className="text-white/50 text-[13px] mb-7">자세한 분양 정보와 상담을 도와드리겠습니다.</p>
              <a
                href="tel:1844-0981"
                className="inline-flex items-center gap-3 px-9 py-3.5 bg-white text-elif-green rounded-full text-[15px] font-bold tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                1844-0981
              </a>
            </div>
          </div>
          <p className="text-[12px] text-gray-400 mt-8">
            * 상기 내용은 인허가 과정에서 변경될 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
