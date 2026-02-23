"use client";

import { useState } from "react";
import ElifLogo from "../ElifLogo";
import SectionBanner from "../SectionBanner";

const subTabs = [
  { id: "overview", label: "사업개요" },
  { id: "brand", label: "브랜드 소개" },
  { id: "directions", label: "오시는길" },
];

interface BusinessSectionProps {
  initialSubTab?: string;
}

export default function BusinessSection({ initialSubTab }: BusinessSectionProps) {
  const [activeSubTab, setActiveSubTab] = useState(initialSubTab || "overview");

  return (
    <section className="pt-[72px]">
      <SectionBanner
        title="사 업 안 내"
        subtitle="엘리프 성성호수공원의 사업 정보를 확인하세요."
        fallbackGradient="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500"
      />

      {/* Sub Navigation */}
      <div className="relative">
        <div className="bg-[#0c1320]">
          <div className="max-w-[1200px] mx-auto flex items-center justify-center overflow-x-auto">
            {subTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`relative px-10 py-5 text-[13px] tracking-[0.5px] font-medium transition-all duration-300 whitespace-nowrap
                  ${activeSubTab === tab.id
                    ? "text-elif-beige"
                    : "text-white/30 hover:text-white/55"
                  }
                `}
              >
                {tab.label}
                {activeSubTab === tab.id && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-elif-beige rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-elif-beige/25 to-transparent" />
      </div>

      {/* Content */}
      {activeSubTab === "overview" && (
        <div className="tab-content">
          {/* 프로젝트 네임 바 */}
          <div className="bg-elif-green">
            <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-10 lg:py-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-px bg-elif-beige/60" />
                  <span className="text-elif-beige/70 text-[10px] tracking-[4px] font-medium uppercase">Project Overview</span>
                </div>
                <h3 className="text-white text-[24px] lg:text-[32px] font-bold leading-tight" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                  엘리프 성성호수공원
                </h3>
                <p className="text-white/35 text-[13px] mt-2 tracking-wide">
                  충남 천안시 서북구 일대
                </p>
              </div>
              <div className="flex items-center gap-6 lg:gap-8">
                {[
                  { num: "TBD", unit: "세대", label: "총 세대수" },
                  { num: "TBD", unit: "세대", label: "일반분양" },
                  { num: "TBD", unit: "TYPE", label: "평면구성" },
                  { num: "0", unit: "분", label: "호수공원" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="flex items-baseline justify-center gap-0.5">
                      <span className="text-white text-[28px] lg:text-[34px] font-bold leading-none" style={{ fontFamily: "'Noto Serif KR', serif" }}>{item.num}</span>
                      <span className="text-elif-beige/60 text-[11px] font-medium">{item.unit}</span>
                    </div>
                    <p className="text-white/25 text-[10px] tracking-[1px] mt-1.5 uppercase">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 메인 콘텐츠 */}
          <div className="bg-gray-50/50">
            <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-16 lg:py-24">

              {/* 조감도 이미지 */}
              <div className="mb-14">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-1 h-5 bg-elif-beige rounded-full" />
                  <h4 className="text-elif-green text-[15px] font-bold tracking-wide" style={{ fontFamily: "'Noto Serif KR', serif" }}>조감도</h4>
                </div>
                <div className="relative p-3 lg:p-4 bg-white rounded-lg border border-gray-200/80 shadow-sm">
                  {/* 골드 코너 장식 */}
                  <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-elif-beige/40 rounded-tl-lg" />
                  <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-elif-beige/40 rounded-tr-lg" />
                  <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-elif-beige/40 rounded-bl-lg" />
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-elif-beige/40 rounded-br-lg" />
                  <div className="relative overflow-hidden rounded">
                    <div className="relative aspect-[16/9]">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#054438] via-[#0a5e4d] to-[#065240] flex items-center justify-center">
                        <div className="text-center">
                          <svg className="w-14 h-14 text-white/15 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <p className="text-white/30 text-[13px] tracking-wider">투시도 이미지 예정</p>
                          <p className="text-white/15 text-[11px] mt-1 font-mono">/images/perspective.jpg · 1200×675px</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-[11px] mt-3 text-center tracking-wide">
                  * 상기 투시도는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.
                </p>
              </div>

              {/* 사업 정보 테이블 */}
              <div data-animate className="bg-white overflow-hidden rounded-lg border border-gray-200/80 shadow-sm">
                <div className="bg-elif-green/[0.03] px-6 lg:px-8 py-4 border-b border-gray-200/80 flex items-center gap-3">
                  <span className="w-1 h-5 bg-elif-beige rounded-full" />
                  <h4 className="text-elif-green text-[15px] font-bold tracking-wide" style={{ fontFamily: "'Noto Serif KR', serif" }}>사업 정보</h4>
                </div>
                {[
                  { label: "사업명", value: "엘리프 성성호수공원", highlight: true },
                  { label: "위치", value: "충남 천안시 서북구 일대" },
                  { label: "규모", value: "TBD" },
                  { label: "일반분양", value: "TBD" },
                  { label: "타입", value: "TBD" },
                  { label: "공급면적", value: "TBD" },
                  { label: "전용면적", value: "TBD" },
                  { label: "주거공용면적", value: "TBD" },
                  { label: "기타공용면적", value: "TBD" },
                  { label: "대지지분", value: "TBD" },
                ].map((item, i) => (
                  <div key={i} className={`flex ${i > 0 ? "border-t border-gray-100" : ""} ${item.highlight ? "bg-elif-beige/[0.03]" : i % 2 === 1 ? "bg-gray-50/40" : "bg-white"} hover:bg-elif-beige/[0.02] transition-colors duration-200`}>
                    <div className="w-[130px] lg:w-[170px] flex-shrink-0 px-6 py-3.5 flex items-center border-r border-gray-100">
                      <span className="text-[13px] text-elif-green font-semibold tracking-wide">{item.label}</span>
                    </div>
                    <div className="flex-1 px-6 py-3.5 flex items-center">
                      <span className={`text-[14px] ${item.highlight ? "text-elif-green font-bold" : "text-gray-600"}`}>{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* 면적 정보 */}
              <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200/80 rounded-lg overflow-hidden stagger-children">
                {[
                  { label: "공급면적", value: "TBD", unit: "㎡" },
                  { label: "전용면적", value: "TBD", unit: "㎡" },
                  { label: "주거공용", value: "TBD", unit: "㎡" },
                  { label: "기타공용", value: "TBD", unit: "㎡" },
                ].map((item, i) => (
                  <div key={i} className={`group relative bg-white p-6 text-center hover:bg-elif-green/[0.02] transition-colors duration-300 ${i < 3 ? "border-r border-gray-200/80" : ""} ${i < 2 ? "border-b lg:border-b-0 border-gray-200/80" : i === 2 ? "border-b lg:border-b-0 border-gray-200/80" : ""}`}>
                    <p className="text-gray-400 text-[10px] tracking-[2px] uppercase font-medium mb-3">{item.label}</p>
                    <div className="flex items-baseline justify-center gap-0.5">
                      <span className="text-elif-green text-[22px] font-bold leading-none group-hover:text-elif-beige transition-colors duration-300" style={{ fontFamily: "'Noto Serif KR', serif" }}>{item.value}</span>
                      <span className="text-gray-300 text-[11px] ml-0.5">{item.unit}</span>
                    </div>
                    <div className="w-5 h-px bg-elif-beige/30 mx-auto mt-3 group-hover:w-8 transition-all duration-300" />
                  </div>
                ))}
              </div>

              {/* 시행/시공 정보 카드 */}
              <div data-animate className="mt-14">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-1 h-5 bg-elif-beige rounded-full" />
                  <h4 className="text-elif-green text-[15px] font-bold tracking-wide" style={{ fontFamily: "'Noto Serif KR', serif" }}>시행 · 시공</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {[
                    { role: "시공", company: "계룡건설산업(주)", desc: "품격 있는 시공 퀄리티", accent: "bg-elif-green" },
                  ].map((item, i) => (
                    <div key={i} className="group bg-white rounded-lg border border-gray-200/80 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                      <div className={`h-1 ${item.accent}`} />
                      <div className="p-6">
                        <span className="text-elif-beige text-[10px] tracking-[3px] font-semibold uppercase">{item.role}</span>
                        <h5 className="text-elif-green text-[15px] font-bold mt-2.5 group-hover:text-elif-beige transition-colors duration-300" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                          {item.company}
                        </h5>
                        <p className="text-gray-400 text-[12px] mt-2">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 안내 */}
              <div className="flex items-center justify-center gap-4 mt-16 mb-4">
                <span className="w-12 h-px bg-gray-200" />
                <span className="w-1 h-1 bg-elif-beige/40 rotate-45" />
                <span className="w-12 h-px bg-gray-200" />
              </div>
              <p className="text-gray-300 text-[11px] text-center tracking-wide">
                * 상기 내용은 인허가 과정에서 변경될 수 있으며, 자세한 사항은 분양홍보관에서 확인하시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === "directions" && (
        <div className="tab-content bg-white">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-16 lg:py-20">

            {/* 섹션 헤더 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-px bg-elif-beige" />
                <span className="text-elif-beige text-[10px] tracking-[4px] font-medium uppercase">Directions</span>
              </div>
              <h3 className="text-elif-green text-[24px] lg:text-[28px] font-bold" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                오시는길
              </h3>
              <p className="text-gray-400 text-[14px] mt-2">충남 천안시 서북구 일대</p>
            </div>

            {/* 지도 */}
            <div data-animate className="mb-10">
              <div className="relative overflow-hidden rounded-lg border border-gray-200 shadow-sm bg-gray-50">
                {/* 지도 이미지 — /images/map-directions.jpg (권장: 1200x600px) */}
                <div className="relative h-[300px] sm:h-[400px] lg:h-[480px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#e8e0d0] via-[#f0ebe3] to-[#e5ddd0] flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-14 h-14 text-gray-400/40 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-gray-500/60 text-[13px] tracking-wider">약도 이미지 예정</p>
                      <p className="text-gray-400/40 text-[11px] mt-1 font-mono">/images/map-directions.jpg · 1200×600px</p>
                    </div>
                  </div>
                  {/* 하단 주소 오버레이 */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                    <div className="flex items-end justify-between gap-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-elif-beige/90 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <p className="text-white text-[13px] font-medium">충남 천안시 서북구 일대</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-3">
                <p className="text-gray-300 text-[11px] mr-auto">외부 지도에서 상세 위치를 확인할 수 있습니다.</p>
                <a
                  href="https://map.naver.com/p/search/%EC%B6%A9%EB%82%A8%20%EC%B2%9C%EC%95%88%EC%8B%9C%20%EC%84%9C%EB%B6%81%EA%B5%AC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#03C75A]/10 text-[#03C75A] text-[11px] font-semibold hover:bg-[#03C75A]/15 transition-colors"
                >
                  <span className="w-3.5 h-3.5 bg-[#03C75A] rounded-sm flex items-center justify-center text-white text-[8px] font-black">N</span>
                  네이버 지도
                </a>
                <a
                  href="https://map.kakao.com/?q=%EC%B6%A9%EB%82%A8%20%EC%B2%9C%EC%95%88%EC%8B%9C%20%EC%84%9C%EB%B6%81%EA%B5%AC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FEE500]/15 text-[#B8960A] text-[11px] font-semibold hover:bg-[#FEE500]/25 transition-colors"
                >
                  <span className="w-3.5 h-3.5 bg-[#FEE500] rounded-sm flex items-center justify-center text-[#3C1E1E] text-[8px] font-black">K</span>
                  카카오맵
                </a>
              </div>
            </div>

            {/* 교통 안내 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1 h-5 bg-elif-beige rounded-full" />
                <h4 className="text-elif-green text-[15px] font-bold tracking-wide" style={{ fontFamily: "'Noto Serif KR', serif" }}>교통 안내</h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 stagger-children">
                {[
                  {
                    title: "광역교통",
                    items: [
                      { badge: "KTX/SRT", color: "bg-[#7CA8D5]", desc: "천안아산역", highlight: "차량 이용" },
                      { badge: "지하철", color: "bg-[#6B8E4E]", desc: "TBD", highlight: "TBD" },
                    ],
                  },
                  {
                    title: "버스",
                    items: [
                      { badge: "간선", color: "bg-[#3366CC]", desc: "TBD", highlight: "정류장 인접" },
                      { badge: "마을", color: "bg-[#55B555]", desc: "TBD", highlight: "TBD" },
                    ],
                  },
                  {
                    title: "자가용",
                    items: [
                      { badge: "고속도로", color: "bg-[#E85050]", desc: "TBD", highlight: "TBD" },
                      { badge: "주요도로", color: "bg-[#FF9933]", desc: "TBD", highlight: "TBD" },
                    ],
                  },
                ].map((card, i) => (
                  <div key={i} className="rounded-lg border border-gray-200 p-5">
                    <h5 className="text-elif-green text-[13px] font-bold tracking-wide mb-4">{card.title}</h5>
                    <div className="space-y-2.5">
                      {card.items.map((item, j) => (
                        <div key={j} className="flex items-start gap-2.5">
                          <span className={`${item.color} text-white text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wide flex-shrink-0 mt-0.5`}>
                            {item.badge}
                          </span>
                          <div className="flex-1 min-w-0">
                            <span className="text-gray-500 text-[12px]">{item.desc}</span>
                            <span className="text-elif-green font-bold text-[12px] ml-1.5">{item.highlight}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 분양홍보관 안내 */}
            <div data-animate className="overflow-hidden rounded-lg border border-gray-200">
              <div className="bg-gray-50 px-6 py-3.5 border-b border-gray-200 flex items-center gap-3">
                <span className="w-1 h-4 bg-elif-beige rounded-full" />
                <h4 className="text-elif-green text-[14px] font-bold" style={{ fontFamily: "'Noto Serif KR', serif" }}>분양홍보관 안내</h4>
              </div>
              {[
                { label: "주소", value: "충남 천안시 서북구 일대" },
                { label: "분양문의", value: "1800-0000", isPhone: true },
                { label: "운영시간", value: "평일 10:00 ~ 18:00 / 주말·공휴일 10:00 ~ 17:00" },
              ].map((item, i) => (
                <div key={i} className={`flex ${i > 0 ? "border-t border-gray-100" : ""}`}>
                  <div className="w-[120px] lg:w-[150px] flex-shrink-0 px-5 py-3.5 flex items-center bg-gray-50/60 border-r border-gray-100">
                    <span className="text-[12px] text-elif-green font-semibold">{item.label}</span>
                  </div>
                  <div className="flex-1 px-5 py-3.5 flex items-center">
                    {item.isPhone ? (
                      <a href="tel:18000000" className="text-[13px] text-elif-green font-bold hover:text-elif-beige transition-colors flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-elif-beige" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[13px] text-gray-600">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-300 text-[11px] text-center tracking-wide mt-10">
              * 분양홍보관 운영시간은 사정에 따라 변경될 수 있습니다. 방문 전 전화 문의를 권장합니다.
            </p>
          </div>
        </div>
      )}

      {activeSubTab === "brand" && (
        <div className="tab-content">
          {/* 브랜드 히어로 */}
          <div className="relative bg-[#060a14] overflow-hidden">
            {/* 배경 장식 */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-elif-beige/[0.03] to-transparent rounded-full" />
              <div className="absolute top-0 left-0 w-full h-full opacity-[0.015]" style={{
                backgroundImage: `linear-gradient(rgba(200,186,167,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(200,186,167,0.5) 1px, transparent 1px)`,
                backgroundSize: '80px 80px'
              }} />
            </div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-elif-beige/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-elif-beige/20 to-transparent" />

            <div className="relative max-w-[1100px] mx-auto px-6 lg:px-12 py-24 lg:py-36">
              {/* 코너 장식 */}
              <div className="absolute top-8 left-8 lg:top-12 lg:left-12 w-16 h-16 border-t border-l border-elif-beige/15" />
              <div className="absolute top-8 right-8 lg:top-12 lg:right-12 w-16 h-16 border-t border-r border-elif-beige/15" />
              <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 w-16 h-16 border-b border-l border-elif-beige/15" />
              <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 w-16 h-16 border-b border-r border-elif-beige/15" />

              <div className="max-w-[700px] mx-auto text-center">
                <div className="flex items-center justify-center gap-3 mb-10">
                  <span className="w-12 h-px bg-gradient-to-r from-transparent to-elif-beige/40" />
                  <span className="text-elif-beige/60 text-[10px] tracking-[6px] font-medium uppercase">Brand Identity</span>
                  <span className="w-12 h-px bg-gradient-to-l from-transparent to-elif-beige/40" />
                </div>
                <div className="flex justify-center mb-10">
                  <ElifLogo white size="xl" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-10">
                  <span className="w-6 h-px bg-elif-beige/30" />
                  <span className="w-1.5 h-1.5 bg-elif-beige/50 rotate-45" />
                  <span className="w-6 h-px bg-elif-beige/30" />
                </div>
                <p className="text-white/40 text-[14px] lg:text-[15px] leading-[2.2] tracking-wide">
                  계룡건설산업이 선보이는 프리미엄 주거 브랜드 엘리프
                  <br />
                  LIFE의 스펠링을 ELIF로 변형하여
                  <br />
                  삶을 다르게 보고, 일상을 새롭게 만들어 갑니다
                </p>
              </div>
            </div>
          </div>

          {/* 브랜드 핵심 수치 */}
          <div className="bg-elif-green">
            <div className="max-w-[1100px] mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4" data-animate>
                {[
                  { num: "0", unit: "분", label: "호수공원 도보", sub: "자연 프리미엄" },
                  { num: "TBD", unit: "세대", label: "총 세대수", sub: "프리미엄 규모" },
                  { num: "TBD", unit: "㎡", label: "전용면적", sub: "TBD" },
                  { num: "TBD", unit: "층", label: "최고층수", sub: "TBD" },
                ].map((item, i) => (
                  <div key={i} className={`relative py-8 lg:py-10 text-center ${i < 3 ? "border-r border-white/[0.06]" : ""} ${i < 2 ? "border-b lg:border-b-0 border-white/[0.06]" : i === 2 ? "border-b lg:border-b-0 border-white/[0.06]" : ""}`}>
                    <div className="flex items-baseline justify-center gap-0.5">
                      <span className="text-white text-[32px] lg:text-[40px] font-bold leading-none" style={{ fontFamily: "'Noto Serif KR', serif" }}>{item.num}</span>
                      <span className="text-elif-beige/70 text-[12px] font-medium ml-0.5">{item.unit}</span>
                    </div>
                    <p className="text-white/50 text-[12px] font-medium mt-2 tracking-wide">{item.label}</p>
                    <p className="text-white/20 text-[10px] mt-1 tracking-[2px] uppercase">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 브랜드 슬로건 */}
          <div className="relative bg-[#f8f7f4] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-elif-beige/15 to-transparent" />
            <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
              <div data-animate className="text-center mb-20">
                <span className="text-elif-beige text-[10px] tracking-[6px] font-medium uppercase">Brand Slogan</span>
                <div className="mt-8 mb-8">
                  <p className="text-elif-green/30 text-[14px] tracking-[3px] mb-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>&ldquo;</p>
                  <h3 className="text-elif-green text-[22px] lg:text-[30px] font-bold leading-[1.6]" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                    성성호수공원 앞,
                    <br />
                    엘리프에서 누리다
                  </h3>
                  <p className="text-elif-green/30 text-[14px] tracking-[3px] mt-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>&rdquo;</p>
                </div>
                <div className="flex items-center justify-center gap-2 mb-5">
                  <span className="w-8 h-px bg-elif-beige/30" />
                  <span className="w-1 h-1 bg-elif-beige/40 rotate-45" />
                  <span className="w-8 h-px bg-elif-beige/30" />
                </div>
                <p className="text-gray-400 text-[13px] tracking-[2px]">
                  일상을 새롭게 하다, 엘리프
                </p>
              </div>

              {/* 4대 프리미엄 카피 */}
              <div data-animate className="space-y-0 mb-24">
                {[
                  { num: "01", label: "자연", eng: "NATURE", copy: "성성호수공원 바로 앞에서 탁 트인 호수 조망과 자연을 누리다", highlight: "호수공원 도보 0분" },
                  { num: "02", label: "교통", eng: "TRANSPORT", copy: "편리한 광역교통망으로 천안 주요 지역까지 빠르게 연결되다", highlight: "우수한 교통 접근성" },
                  { num: "03", label: "생활", eng: "LIFESTYLE", copy: "주변 상업시설과 생활 인프라로 편리한 일상을 누리다", highlight: "풍부한 생활 인프라" },
                  { num: "04", label: "교육", eng: "EDUCATION", copy: "도보권 내 초·고등학교 설립 예정으로 우수한 교육환경을 누리다", highlight: "학교 설립 예정" },
                ].map((item, i) => (
                  <div key={i} className={`group flex items-stretch border-b border-gray-200/80 ${i === 0 ? "border-t" : ""}`}>
                    {/* 넘버링 */}
                    <div className="hidden md:flex w-[80px] flex-shrink-0 items-center justify-center border-r border-gray-200/80">
                      <span className="text-elif-beige/30 text-[28px] font-light" style={{ fontFamily: "'Noto Serif KR', serif" }}>{item.num}</span>
                    </div>
                    {/* 라벨 */}
                    <div className="hidden lg:flex w-[140px] flex-shrink-0 items-center justify-center border-r border-gray-200/80 px-4">
                      <div className="text-center">
                        <p className="text-elif-green text-[14px] font-bold">{item.label}</p>
                        <p className="text-gray-300 text-[9px] tracking-[2px] uppercase mt-0.5">{item.eng}</p>
                      </div>
                    </div>
                    {/* 카피 */}
                    <div className="flex-1 flex items-center px-6 lg:px-8 py-6 lg:py-7">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5 lg:hidden">
                          <span className="text-elif-beige/40 text-[14px] font-light">{item.num}</span>
                          <span className="text-elif-green text-[13px] font-bold">{item.label}</span>
                        </div>
                        <p className="text-gray-600 text-[14px] leading-[1.8]">{item.copy}</p>
                      </div>
                    </div>
                    {/* 하이라이트 */}
                    <div className="hidden sm:flex w-[180px] flex-shrink-0 items-center justify-center border-l border-gray-200/80 px-4">
                      <span className="text-elif-beige text-[12px] font-semibold tracking-wide group-hover:text-elif-green transition-colors duration-300">{item.highlight}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* 시행/시공 정보 */}
              <div data-animate>
                <div className="text-center mb-10">
                  <span className="text-elif-beige text-[10px] tracking-[6px] font-medium uppercase">Project Partners</span>
                  <h3 className="text-elif-green text-[22px] lg:text-[28px] font-bold mt-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                    시행 · 시공
                  </h3>
                  <div className="w-10 h-[2px] bg-elif-beige mx-auto mt-5" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 stagger-children">
                  {[
                    { role: "시공", company: "계룡건설산업(주)", desc: "품격 있는 시공 퀄리티", accent: "bg-elif-green" },
                  ].map((item, i) => (
                    <div key={i} className="group bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className={`h-1 ${item.accent}`} />
                      <div className="p-7 text-center">
                        <span className="text-elif-beige text-[10px] tracking-[3px] font-semibold uppercase">{item.role}</span>
                        <h5 className="text-elif-green text-[15px] font-bold mt-3 group-hover:text-elif-beige transition-colors duration-300 whitespace-pre-line" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                          {item.company}
                        </h5>
                        <p className="text-gray-400 text-[12px] mt-2">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 안내 */}
              <div className="flex items-center justify-center gap-4 mt-16 mb-4">
                <span className="w-12 h-px bg-gray-200" />
                <span className="w-1 h-1 bg-elif-beige/40 rotate-45" />
                <span className="w-12 h-px bg-gray-200" />
              </div>
              <p className="text-gray-300 text-[11px] text-center tracking-wide">
                * 상기 내용은 인허가 과정에서 변경될 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
