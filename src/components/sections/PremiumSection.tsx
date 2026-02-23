"use client";

import { useState } from "react";
import ImagePlaceholder from "../ImagePlaceholder";
import SectionBanner from "../SectionBanner";

const subTabs = [
  { id: "location", label: "입지환경" },
  { id: "premium4", label: "프리미엄 4" },
];

interface PremiumSectionProps {
  initialSubTab?: string;
}

export default function PremiumSection({ initialSubTab }: PremiumSectionProps) {
  const [activeSubTab, setActiveSubTab] = useState(initialSubTab || "location");

  return (
    <section className="pt-[80px]">
      <SectionBanner
        title="프 리 미 엄"
        subtitle="자연과 함께하는 프리미엄 주거를 만나보세요."
        fallbackGradient="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600"
      />

      {/* Sub Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto flex items-center justify-center overflow-x-auto">
          {subTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`relative px-8 py-4 text-[13px] tracking-[0.5px] font-medium transition-all duration-300 whitespace-nowrap
                ${activeSubTab === tab.id
                  ? "text-elif-green font-bold"
                  : "text-gray-400 hover:text-gray-600"
                }
              `}
            >
              {tab.label}
              {activeSubTab === tab.id && (
                <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-elif-lake rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div>
        {activeSubTab === "location" && (
          <div className="tab-content">
            {/* Location Hero */}
            <div className="relative h-[70vh] min-h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-elif-green via-elif-green-light to-elif-lake/40" />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-[1400px] mx-auto px-6 w-full">
                  <div className="max-w-[500px]">
                    <span className="text-elif-beige text-[12px] tracking-[4px] font-medium mb-4 block">LOCATION</span>
                    <h3 className="text-white text-[36px] lg:text-[44px] font-bold leading-tight mb-4">
                      성성호수공원 앞!
                      <br />
                      호수공원의 가치
                    </h3>
                    <p className="text-white/70 text-[15px] leading-relaxed">
                      내집앞 성성호수공원, 자연과 함께하는 프리미엄 주거
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-1 left-0 right-0 h-16 z-10"><svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-full"><path d="M0,60 L0,20 Q360,0 720,20 Q1080,40 1440,20 L1440,60 Z" fill="white" /></svg></div>
            </div>

            {/* 교통 인프라 섹션 */}
            <div data-animate className="bg-white">
              <div className="max-w-[1100px] mx-auto px-6 py-24 lg:py-32">
                {/* 섹션 헤더 */}
                <div className="text-center mb-20">
                  <span className="text-elif-beige text-[11px] tracking-[6px] font-medium uppercase">Infrastructure</span>
                  <h3 className="text-elif-green text-[26px] lg:text-[36px] font-bold mt-5 leading-tight" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                    천안의 핵심 생활 허브
                  </h3>
                  <div className="w-12 h-[2px] bg-elif-beige mx-auto mt-6" />
                  <p className="text-gray-400 text-[14px] mt-5 tracking-wide">
                    성성호수공원과 함께하는 쾌적한 교통 인프라
                  </p>
                </div>

                {/* 교통 노선 — 심플 리스트 */}
                <div className="space-y-0 mb-24">
                  {[
                    { num: "01", line: "성성호수공원", station: "호수공원 앞", time: "도보 5분", desc: "성성호수공원 도보 5분의 쾌적한 자연환경 프리미엄" },
                    { num: "02", line: "천안아산KTX", station: "천안아산역", time: "차량 15분", desc: "천안아산KTX역 차량 15분, 서울 수도권 빠른 접근" },
                    { num: "03", line: "수도권전철 1호선", station: "천안역", time: "차량 10분", desc: "수도권전철 1호선 천안역, 광역교통망 수혜" },
                  ].map((item, i) => (
                    <div key={i} className="group border-b border-gray-100 first:border-t hover:bg-gray-50/60 transition-all duration-300">
                      <div className="flex items-center py-8 lg:py-10 gap-6 lg:gap-10 relative">
                        {/* 좌측 골드 악센트 (hover) */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 group-hover:h-10 bg-elif-beige transition-all duration-300 rounded-full" />
                        {/* 번호 */}
                        <span className="text-gray-200 text-[32px] lg:text-[40px] font-bold leading-none w-14 flex-shrink-0 text-center group-hover:text-elif-beige/30 transition-colors duration-300 pl-3" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                          {item.num}
                        </span>
                        {/* 노선 + 역 */}
                        <div className="flex-1 min-w-0">
                          <p className="text-elif-beige text-[11px] tracking-[3px] font-medium mb-1.5">{item.line}</p>
                          <h4 className="text-elif-green text-[18px] lg:text-[22px] font-bold group-hover:tracking-wide transition-all duration-300" style={{ fontFamily: "'Noto Serif KR', serif" }}>{item.station}</h4>
                          <p className="text-gray-400 text-[13px] mt-2 hidden lg:block">{item.desc}</p>
                        </div>
                        {/* 소요시간 */}
                        <div className="text-right flex-shrink-0">
                          <p className="text-elif-green text-[22px] lg:text-[28px] font-bold leading-none group-hover:text-elif-beige transition-colors duration-300" style={{ fontFamily: "'Noto Serif KR', serif" }}>{item.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 위치도 */}
                <div data-animate className="mb-24">
                  <div className="text-center mb-12">
                    <span className="text-elif-beige text-[11px] tracking-[6px] font-medium uppercase">Location Map</span>
                    <h3 className="text-elif-green text-[22px] lg:text-[28px] font-bold mt-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                      위치도
                    </h3>
                    <div className="w-10 h-[2px] bg-elif-beige mx-auto mt-5" />
                  </div>
                  <div className="relative">
                    <div className="h-[350px] sm:h-[420px] lg:h-[520px] overflow-hidden border border-gray-200/60 shadow-sm">
                      <div className="w-full h-full bg-gradient-to-br from-[#e8e0d0] via-[#f0ebe3] to-[#e5ddd0] flex items-center justify-center" style={{minHeight: '400px'}}>
                        <div className="text-center">
                          <svg className="w-14 h-14 text-gray-400/40 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <p className="text-gray-500/50 text-[13px] tracking-wider">위치도 이미지 예정</p>
                          <p className="text-gray-400/40 text-[11px] mt-1 font-mono">/images/location.jpg</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-[11px] text-center mt-4 tracking-wide">
                      * 본 위치도는 소비자의 이해를 돕기 위한 것으로, 실제와 다소 차이가 있을 수 있습니다.
                    </p>
                  </div>
                </div>

                {/* 구분 장식 */}
                <div className="flex items-center justify-center gap-4 mb-24">
                  <span className="w-16 h-px bg-gray-200" />
                  <span className="w-1.5 h-1.5 bg-elif-beige/40 rotate-45" />
                  <span className="w-16 h-px bg-gray-200" />
                </div>

                {/* 주변 인프라 */}
                <div data-animate className="mb-6">
                  <div className="text-center mb-14">
                    <span className="text-elif-beige text-[11px] tracking-[6px] font-medium uppercase">Surrounding</span>
                    <h3 className="text-elif-green text-[22px] lg:text-[28px] font-bold mt-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                      풍부한 생활 인프라
                    </h3>
                    <div className="w-10 h-[2px] bg-elif-beige mx-auto mt-5" />
                  </div>

                  <div className="bg-gray-50/60 rounded-sm py-12 px-6 lg:px-10">
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-8 lg:gap-y-10 stagger-children">
                      {[
                        { name: "논천안IC", sub: "빠른 접근", category: "도로" },
                        { name: "천안아산역", sub: "차량 15분", category: "교통" },
                        { name: "이마트", sub: "차량 약 5분", category: "쇼핑" },
                        { name: "성성호수공원", sub: "도보 5분", category: "공원" },
                        { name: "불당상업지구", sub: "차량 약 10분", category: "쇼핑" },
                        { name: "천안시청", sub: "차량 약 10분", category: "관공서" },
                        { name: "호수공원산책로", sub: "도보 5분", category: "공원" },
                        { name: "천안종합운동장", sub: "인접", category: "체육" },
                        { name: "천안IC", sub: "빠른 접근", category: "도로" },
                        { name: "천안역", sub: "차량 약 10분", category: "교통" },
                      ].map((item, i) => (
                        <div key={i} className="text-center group cursor-default">
                          <p className="text-elif-green text-[14px] font-bold group-hover:text-elif-beige transition-colors duration-300">{item.name}</p>
                          <p className="text-gray-400 text-[12px] mt-1">{item.sub}</p>
                          <div className="w-4 h-px bg-elif-beige/30 mx-auto mt-3 group-hover:w-6 group-hover:bg-elif-beige/50 transition-all duration-300" />
                          <p className="text-gray-300 text-[10px] mt-2 tracking-[2px] uppercase">{item.category}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSubTab === "premium4" && (
          <div className="tab-content">
            {/* Premium 4 — Grand Header */}
            <div className="relative bg-elif-green-dark overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-elif-beige/[0.04] to-transparent rounded-full" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-elif-beige/30 to-transparent" />
              </div>

              <div className="relative max-w-[1200px] mx-auto px-6 pt-24 pb-16 lg:pt-32 lg:pb-20">
                <div className="text-center">
                  <div className="inline-flex items-center gap-4 mb-8">
                    <span className="w-12 h-px bg-elif-beige/40" />
                    <span className="text-elif-beige/70 text-[11px] tracking-[6px] font-medium uppercase">Premium Value</span>
                    <span className="w-12 h-px bg-elif-beige/40" />
                  </div>
                  <h3 className="text-white text-[40px] lg:text-[56px] font-bold leading-none mb-2" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                    프리미엄 <span className="text-elif-lake">4</span>
                  </h3>
                  <div className="w-16 h-[2px] bg-elif-beige mx-auto mt-6 mb-6 premium4-line" />
                  <p className="text-white/40 text-[15px] lg:text-[17px] tracking-wide" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                    자연과 함께하는 프리미엄 주거
                  </p>
                  <p className="text-white/25 text-[13px] mt-3 tracking-[1px]">
                    엘리프 성성호수공원, 삶의 중심이 되다
                  </p>
                </div>
              </div>
            </div>

            {/* Premium 4 — Feature Cards (alternating magazine layout) */}
            <div className="bg-elif-green-dark py-10 lg:py-16 space-y-10 lg:space-y-16">
              {[
                {
                  num: "01",
                  badge: "도보 5분",
                  category: "교통중심",
                  title: "천안아산KTX · 천안역\n광역 교통의 가치",
                  desc: "천안아산KTX역 차량 15분, 수도권전철 1호선 천안역 차량 10분! 수도권과 빠르게 연결되는 광역 교통 인프라를 누리세요.",
                  highlights: ["천안아산KTX역", "수도권전철 1호선", "천안IC 인접"],
                  placeholderNum: 12,
                  gradient: "gradient-premium",
                  imageSrc: "",
                },
                {
                  num: "02",
                  badge: "도보 5분",
                  category: "자연중심",
                  title: "성성호수공원\n자연과 함께하는 일상",
                  desc: "성성호수공원까지 도보 5분! 단지에서 나오면 펼쳐지는 호수공원의 자연친화적 주거환경. 호수공원 산책로와 녹지가 단지를 감싸는 쾌적한 녹지 프리미엄",
                  highlights: ["성성호수공원", "호수공원 산책로", "자연친화 주거"],
                  placeholderNum: 9,
                  gradient: "gradient-aerial",
                  imageSrc: "",
                },
                {
                  num: "03",
                  badge: "차량 10분",
                  category: "생활중심",
                  title: "불당상업지구 · 이마트\n완벽한 생활 인프라",
                  desc: "불당상업지구, 이마트 등 풍부한 생활편의시설이 차량 약 10분 거리에! 일상의 편리함을 누리는 완벽한 생활 인프라",
                  highlights: ["이마트", "불당상업지구", "천안시청"],
                  placeholderNum: 10,
                  gradient: "gradient-night",
                  imageSrc: "",
                },
                {
                  num: "04",
                  badge: "차량 10분",
                  category: "교육중심",
                  title: "천안 교육 인프라\n교육의 미래를 품다",
                  desc: "우수한 학군과 교육 인프라가 가까이. 자녀 교육에 최적화된 교육환경을 갖추고 있습니다.",
                  highlights: ["우수 학군", "교육 특화", "최적 교육환경"],
                  placeholderNum: 11,
                  gradient: "gradient-hero",
                  imageSrc: "",
                },
              ].map((item, i) => {
                const isReversed = i % 2 === 1;
                return (
                  <div key={i} className="premium4-card">
                    <div className={`max-w-[1400px] mx-auto flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} min-h-[420px] lg:min-h-[500px] group`}>
                      {/* Image Area */}
                      <div className={`relative lg:w-[55%] premium4-image-area rounded-xl overflow-hidden ${isReversed ? "premium4-blend-left" : "premium4-blend-right"}`}>
                        <ImagePlaceholder
                          number={item.placeholderNum}
                          gradient={item.gradient}
                          height="h-[300px] lg:h-full"
                          label={`${item.category} 이미지`}
                        />
                        {/* Number overlay */}
                        <div className={`absolute top-5 ${isReversed ? "right-5" : "left-5"} z-10`}>
                          <span className="text-white/[0.07] text-[100px] lg:text-[140px] font-black leading-none select-none" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                            {item.num}
                          </span>
                        </div>
                        {/* Badge */}
                        <div className={`absolute bottom-5 ${isReversed ? "right-5" : "left-5"} z-10`}>
                          <span className="bg-elif-lake/90 backdrop-blur-sm text-elif-green-dark text-[11px] font-bold px-4 py-2 tracking-[1px]">
                            {item.badge}
                          </span>
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className={`lg:w-[45%] flex items-center ${isReversed ? "lg:pr-14 lg:pl-8" : "lg:pl-14 lg:pr-8"} px-6 py-12 lg:py-0`}>
                        <div className="w-full max-w-[480px]">
                          {/* Number + Category */}
                          <div className="flex items-center gap-3 mb-7">
                            <span className="text-elif-beige/30 text-[13px] font-bold tracking-wider" style={{ fontFamily: "'Noto Serif KR', serif" }}>{item.num}</span>
                            <span className="w-6 h-px bg-elif-beige/40" />
                            <span className="text-elif-beige text-[11px] tracking-[4px] font-medium uppercase">{item.category}</span>
                          </div>

                          {/* Title */}
                          <h4 className="text-white text-[24px] lg:text-[30px] font-bold leading-[1.4] mb-6 whitespace-pre-line" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                            {item.title}
                          </h4>

                          {/* Accent line */}
                          <div className="w-10 h-[2px] bg-gradient-to-r from-elif-beige/60 to-transparent mb-6" />

                          {/* Description */}
                          <p className="text-white/45 text-[14px] lg:text-[15px] leading-[1.9] mb-8">
                            {item.desc}
                          </p>

                          {/* Highlight tags */}
                          <div className="flex flex-wrap gap-2.5">
                            {item.highlights.map((tag, j) => (
                              <span key={j} className="text-[11px] text-elif-lake/70 border border-elif-lake/15 bg-elif-lake/[0.04] px-3.5 py-1.5 tracking-[0.5px] rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 카드 간 구분 — 얇은 골드 라인 */}
                    {i < 3 && (
                      <div className="max-w-[800px] mx-auto py-1">
                        <div className="h-px bg-gradient-to-r from-transparent via-elif-beige/10 to-transparent" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Summary Strip */}
            <div className="bg-elif-green-dark border-t border-white/[0.04]">
              <div className="max-w-[1200px] mx-auto px-6 py-16 lg:py-20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
                  {[
                    { time: "5분", label: "성성호수공원", sub: "자연" },
                    { time: "10분", label: "천안역", sub: "교통" },
                    { time: "10분", label: "불당상업지구", sub: "생활" },
                    { time: "10분", label: "교육 인프라", sub: "교육" },
                  ].map((item, i) => (
                    <div key={i} className="text-center group">
                      <div className="text-elif-lake text-[28px] lg:text-[36px] font-bold leading-none mb-2" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                        {item.time}
                      </div>
                      <div className="w-6 h-px bg-elif-lake/30 mx-auto mb-3 group-hover:w-10 transition-all duration-300" />
                      <div className="text-white/80 text-[14px] font-medium mb-1">{item.label}</div>
                      <div className="text-white/30 text-[11px] tracking-[2px] uppercase">{item.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
