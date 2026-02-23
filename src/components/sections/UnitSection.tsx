"use client";

import { useState } from "react";
import ImagePlaceholder from "../ImagePlaceholder";
import SectionBanner from "../SectionBanner";

const subTabs = [
  { id: "floorplan", label: "평면안내" },
  { id: "vr", label: "VR영상" },
];

interface UnitSectionProps {
  initialSubTab?: string;
}

export default function UnitSection({ initialSubTab }: UnitSectionProps) {
  const [activeSubTab, setActiveSubTab] = useState(initialSubTab || "floorplan");

  return (
    <section className="pt-[72px]">
      <SectionBanner
        title="세 대 안 내"
        subtitle="엘리프 성성호수공원의 세대 정보를 확인하세요."
        bgImage="/images/banner.jpg"
        fallbackGradient="bg-gradient-to-r from-stone-700 via-stone-600 to-stone-500"
      />

      {/* Sub Navigation */}
      <div className="relative">
        <div className="bg-[#041f18]">
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
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {activeSubTab === "floorplan" && (
          <div className="tab-content">
            {/* ── Two-Column Layout: Floor Plan + Spec Sidebar ── */}
            <div className="flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden shadow-xl border border-gray-100">

              {/* Left: Floor Plan Image */}
              <div className="flex-1 relative bg-white p-8 md:p-12 lg:p-14">
                {/* Corner frame decorations */}
                <div className="absolute top-6 left-6 w-10 h-10 border-t border-l border-elif-beige/20" />
                <div className="absolute top-6 right-6 lg:hidden w-10 h-10 border-t border-r border-elif-beige/20" />
                <div className="absolute bottom-6 left-6 w-10 h-10 border-b border-l border-elif-beige/20" />
                <div className="absolute bottom-6 right-6 lg:hidden w-10 h-10 border-b border-r border-elif-beige/20" />

                <ImagePlaceholder
                  number={28}
                  gradient="gradient-silver"
                  height="h-[400px] md:h-[520px] lg:h-[580px]"
                  label="TBD 평면도"
                  dark={false}
                  className="rounded-md"
                />
              </div>

              {/* Right: Spec Sidebar */}
              <div className="w-full lg:w-[340px] xl:w-[380px] bg-gradient-to-b from-[#032820] to-elif-green flex-shrink-0">
                {/* Type Header */}
                <div className="px-8 pt-10 pb-8 border-b border-white/[0.06]">
                  <p className="text-elif-beige/50 text-[10px] tracking-[4px] font-medium uppercase mb-3">TYPE</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-white text-[42px] font-bold leading-none" style={{ fontFamily: "'Noto Serif KR', serif" }}>TBD</span>
                    <span className="text-white/30 text-[16px]">㎡</span>
                  </div>
                  <p className="text-white/25 text-[12px] mt-3 tracking-wide">TBD</p>
                </div>

                {/* Key Areas */}
                <div className="grid grid-cols-2 border-b border-white/[0.06]">
                  <div className="px-8 py-7 border-r border-white/[0.06]">
                    <p className="text-elif-beige/40 text-[9px] tracking-[2px] uppercase font-medium mb-2">공급면적</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-white text-[24px] font-bold leading-none" style={{ fontFamily: "'Noto Serif KR', serif" }}>TBD</span>
                      <span className="text-white/20 text-[11px]">㎡</span>
                    </div>
                  </div>
                  <div className="px-8 py-7">
                    <p className="text-elif-beige/40 text-[9px] tracking-[2px] uppercase font-medium mb-2">전용면적</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-elif-beige text-[24px] font-bold leading-none" style={{ fontFamily: "'Noto Serif KR', serif" }}>TBD</span>
                      <span className="text-elif-beige/30 text-[11px]">㎡</span>
                    </div>
                  </div>
                </div>

                {/* Detail Specs - Vertical List */}
                <div className="divide-y divide-white/[0.06]">
                  {[
                    { label: "주거공용면적", value: "TBD" },
                    { label: "기타공용면적", value: "TBD" },
                    { label: "대지지분", value: "TBD" },
                    { label: "전용률", value: "TBD" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between px-8 py-4">
                      <span className="text-white/30 text-[12px]">{item.label}</span>
                      <span className="text-white/70 text-[13px] font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* Room Composition */}
                <div className="px-8 pt-7 pb-8 border-t border-white/[0.06] mt-auto">
                  <p className="text-elif-beige/40 text-[9px] tracking-[3px] uppercase font-medium mb-5">ROOM</p>
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { num: "3", label: "방" },
                      { num: "2", label: "욕실" },
                      { num: "1", label: "거실" },
                      { num: "1", label: "주방" },
                    ].map((room, i) => (
                      <div key={i} className="text-center">
                        <span className="text-white text-[22px] font-bold leading-none block" style={{ fontFamily: "'Noto Serif KR', serif" }}>{room.num}</span>
                        <span className="text-white/30 text-[11px] block mt-1.5">{room.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Space Features - Full Width Bar ── */}
            <div className="mt-14 relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-elif-beige/50 text-[10px] tracking-[4px] font-medium uppercase">SPACE DESIGN</span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {[
                  { num: "01", title: "남향 위주 배치", copy: "채광과 통풍을 극대화한 남향 중심 단지 설계로 사계절 쾌적한 주거 환경" },
                  { num: "02", title: "3BAY 광폭 설계", copy: "개방감 있는 거실과 분리된 침실 공간, 모든 방에 자연 채광 확보" },
                  { num: "03", title: "알파 수납 공간", copy: "드레스룸, 팬트리 등 풍부한 수납 설계로 깔끔한 생활 공간 실현" },
                ].map((item, i) => (
                  <div key={i} className={`group relative p-8 md:p-10 ${i < 2 ? "md:border-r border-gray-100" : ""} hover:bg-[#faf9f7] transition-colors duration-300`}>
                    <span className="text-elif-beige/25 text-[11px] tracking-[2px] font-medium">{item.num}</span>
                    <h5 className="text-elif-green text-[16px] font-bold mt-3 mb-3 group-hover:text-elif-beige transition-colors duration-300" style={{ fontFamily: "'Noto Serif KR', serif" }}>{item.title}</h5>
                    <p className="text-gray-400 text-[13px] leading-[1.9]">{item.copy}</p>
                    <div className="w-6 h-px bg-elif-beige/20 mt-5 group-hover:w-10 transition-all duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSubTab === "vr" && (
          <div className="tab-content">
            <div className="text-center mb-10">
              <p className="text-elif-beige/60 text-[11px] tracking-[4px] font-medium uppercase mb-4">VIRTUAL REALITY</p>
              <h3 className="text-[32px] md:text-[38px] font-bold text-gray-900 tracking-tight" style={{ fontFamily: "'Noto Serif KR', serif" }}>VR 영상</h3>
              <div className="w-12 h-px bg-elif-beige/40 mx-auto mt-5 mb-5" />
              <p className="text-gray-400 text-[14px]">360° VR 영상으로 미리 만나보는 엘리프 성성호수공원</p>
            </div>

            {/* VR Video Embed Area */}
            <div className="max-w-[900px] mx-auto">
              <div className="relative bg-gradient-to-b from-elif-green to-[#054438] rounded-2xl overflow-hidden shadow-2xl">
                {/* Video Placeholder */}
                <div className="relative aspect-video flex flex-col items-center justify-center">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, white 20px, white 21px)`,
                  }} />

                  {/* Play Button */}
                  <div className="relative z-10 flex flex-col items-center gap-5">
                    <div className="w-20 h-20 rounded-full border-2 border-elif-beige/40 flex items-center justify-center bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-elif-beige/60 transition-all duration-300 cursor-pointer group">
                      <svg className="w-8 h-8 text-elif-beige ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <p className="text-white/70 text-[14px] font-medium tracking-wide">VR 영상 준비중</p>
                      <p className="text-white/30 text-[12px] mt-1">360° 파노라마 뷰로 제공 예정</p>
                    </div>
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-elif-beige/20" />
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-elif-beige/20" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-elif-beige/20" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-elif-beige/20" />
                </div>
              </div>

              {/* VR Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200 rounded-lg overflow-hidden mt-8 stagger-children">
                {[
                  { num: "360°", title: "파노라마 뷰", desc: "실제 모델하우스를 360도로 둘러볼 수 있습니다" },
                  { num: "ALL", title: "PC / 모바일", desc: "어디서든 편하게 VR 투어를 체험하세요" },
                  { num: "VR", title: "실감형 체험", desc: "VR 기기로 더욱 몰입감 있는 체험 가능" },
                ].map((item, i) => (
                  <div key={i} className={`group bg-white p-6 text-center hover:bg-elif-green/[0.02] transition-colors duration-300 ${i < 2 ? "border-b md:border-b-0 md:border-r border-gray-200" : ""}`}>
                    <span className="text-elif-beige/60 text-[11px] tracking-[3px] font-medium">{item.num}</span>
                    <h4 className="text-elif-green text-[15px] font-bold mt-2 mb-1.5 group-hover:text-elif-beige transition-colors duration-300" style={{ fontFamily: "'Noto Serif KR', serif" }}>{item.title}</h4>
                    <p className="text-gray-400 text-[12px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
