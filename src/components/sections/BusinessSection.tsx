"use client";

import { useEffect, useRef, useState } from "react";
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
  { label: "사업명", value: "엘리프 성성호수공원" },
  { label: "사업지", value: "충청남도 천안시 서북구 업성동 368-7" },
  { label: "사업규모", value: "최고 29층 / 5개동" },
  { label: "세대수", value: "1,165세대" },
  { label: "주차대수", value: "세대당 1.38대 (법정 1.16대)" },
  { label: "시공사", value: "계룡건설산업(주)" },
];

const highlights = [
  {
    num: "29",
    unit: "층",
    label: "최고 층수",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    num: "5",
    unit: "개동",
    label: "동 수",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    num: "1,165",
    unit: "세대",
    label: "총 세대수",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    num: "1.38",
    unit: "대",
    label: "세대당 주차",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

const typeInfo = [
  { type: "84㎡A", supply: "84.9800㎡", exclusive: "84.9800㎡", count: "468세대" },
  { type: "84㎡B", supply: "84.9556㎡", exclusive: "84.9556㎡", count: "348세대" },
  { type: "111㎡", supply: "111.9760㎡", exclusive: "111.9760㎡", count: "349세대" },
];

export default function BusinessSection() {
  const sec1 = useInView();
  const sec2 = useInView();
  const sec3 = useInView();
  const sec4 = useInView();

  return (
    <section className="pt-[80px]">
      <SectionBanner
        title="사 업 개 요"
        subtitle="엘리프 성성호수공원의 사업 정보를 확인하세요."
        fallbackGradient="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500"
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
            자연과 도시가 조화로운 프리미엄 주거단지
          </p>
          <div className="mt-8 w-14 h-[2px] bg-elif-lake/60 mx-auto rounded-full" />
        </div>
      </div>

      {/* ===== 하이라이트 숫자 4개 ===== */}
      <div className="bg-[#FAFAF7]">
        <div
          ref={sec2.ref}
          className="max-w-[900px] mx-auto px-6 pb-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm transition-all duration-500 ${sec2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: sec2.visible ? `${i * 100}ms` : "0ms" }}
              >
                <div className="w-12 h-12 rounded-xl bg-elif-green/8 flex items-center justify-center text-elif-green mx-auto mb-4">
                  {item.icon}
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span
                    className="text-[32px] lg:text-[36px] font-bold text-gray-900"
                    style={{ fontFamily: "'Noto Serif KR', serif" }}
                  >
                    {item.num}
                  </span>
                  <span className="text-[14px] text-gray-500 font-medium">{item.unit}</span>
                </div>
                <p className="text-[13px] text-gray-400 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== 그라데이션 전환 ===== */}
      <div className="h-20 bg-gradient-to-b from-[#FAFAF7] to-elif-green-dark" />

      {/* ===== 사업개요 테이블 ===== */}
      <div className="bg-elif-green-dark">
        <div
          ref={sec3.ref}
          className={`max-w-[900px] mx-auto px-6 py-20 transition-all duration-700 ${sec3.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="text-center mb-12">
            <p className="text-elif-lake text-[12px] font-semibold tracking-[4px] uppercase mb-3">DETAILS</p>
            <h2
              className="text-[24px] sm:text-[30px] text-white font-light"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              사업 <span className="font-bold">상세 정보</span>
            </h2>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10">
            {overviewData.map((row, i) => (
              <div
                key={i}
                className={`flex border-b border-white/[0.06] last:border-b-0 ${i % 2 === 0 ? "bg-white/[0.03]" : "bg-transparent"}`}
              >
                <div className="w-[130px] sm:w-[160px] flex-shrink-0 px-6 py-5 flex items-center">
                  <span className="text-[13px] sm:text-[14px] text-elif-lake font-semibold tracking-wide">{row.label}</span>
                </div>
                <div className="flex-1 px-6 py-5 flex items-center border-l border-white/[0.06]">
                  <span className="text-[13px] sm:text-[14px] text-white/80">{row.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== 그라데이션 전환 ===== */}
      <div className="h-16 bg-gradient-to-b from-elif-green-dark to-[#FAFAF7]" />

      {/* ===== 타입별 면적 ===== */}
      <div className="bg-[#FAFAF7]">
        <div
          ref={sec4.ref}
          className={`max-w-[900px] mx-auto px-6 pt-10 pb-24 transition-all duration-700 ${sec4.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="text-center mb-12">
            <p className="text-elif-green text-[13px] font-semibold tracking-[4px] uppercase mb-3">UNIT TYPES</p>
            <h2
              className="text-[24px] sm:text-[30px] text-gray-900 font-light"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              타입별 <span className="font-bold">세대 안내</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {typeInfo.map((t, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${sec4.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: sec4.visible ? `${i * 120}ms` : "0ms" }}
              >
                <div className="bg-elif-green px-5 py-4 text-center">
                  <span className="text-white text-[20px] font-bold tracking-wide">{t.type}</span>
                </div>
                <div className="p-6 space-y-4">
                  <div className="text-center">
                    <p className="text-[12px] text-gray-400 mb-1">공급면적</p>
                    <p className="text-[15px] text-gray-800 font-semibold">{t.supply}</p>
                  </div>
                  <div className="h-px bg-gray-100" />
                  <div className="text-center">
                    <p className="text-[12px] text-gray-400 mb-1">전용면적</p>
                    <p className="text-[15px] text-gray-800 font-semibold">{t.exclusive}</p>
                  </div>
                  <div className="h-px bg-gray-100" />
                  <div className="text-center">
                    <p className="text-[12px] text-gray-400 mb-1">세대수</p>
                    <p className="text-[18px] text-elif-green font-bold">{t.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[12px] text-gray-400 mt-10">
            * 상기 내용은 인허가 과정에서 변경될 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
