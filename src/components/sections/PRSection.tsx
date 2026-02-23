"use client";

import { useState } from "react";
import ImagePlaceholder from "../ImagePlaceholder";
import SectionBanner from "../SectionBanner";

const subTabs = [
  { id: "news", label: "언론보도" },
  { id: "video", label: "홍보영상" },
];

interface PRSectionProps {
  initialSubTab?: string;
}

export default function PRSection({ initialSubTab }: PRSectionProps) {
  const [activeSubTab, setActiveSubTab] = useState(initialSubTab || "news");

  return (
    <section className="pt-[72px]">
      <SectionBanner
        title="홍 보 센 터"
        subtitle="엘리프 성성호수공원의 최신 소식을 만나보세요."
        fallbackGradient="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700"
      />

      {/* Sub Navigation */}
      <div className="relative">
        <div className="bg-elif-green-dark">
          <div className="max-w-[1200px] mx-auto flex items-center justify-center overflow-x-auto">
            {subTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`relative px-10 py-5 text-[13px] tracking-[0.5px] font-medium transition-all duration-300 whitespace-nowrap
                  ${activeSubTab === tab.id
                    ? "text-elif-lake"
                    : "text-white/30 hover:text-white/55"
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
        <div className="h-px bg-gradient-to-r from-transparent via-elif-lake/25 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {activeSubTab === "news" && (
          <div className="tab-content">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">언론보도</h3>
            <div className="space-y-6 stagger-children">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex gap-6 p-6 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer"
                >
                  <ImagePlaceholder
                    number={36 + i}
                    gradient="gradient-silver"
                    height="h-[120px]"
                    label=""
                    dark
                    className="rounded-md w-[180px] flex-shrink-0"
                  />
                  <div className="flex-1">
                    <span className="text-xs text-elif-lake font-medium">언론보도</span>
                    <h4 className="text-lg font-bold text-gray-900 mt-1">
                      기사 제목 영역 {i}
                    </h4>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                      기사 요약 내용이 들어갈 영역입니다. 실제 기사 내용으로 교체해 주세요.
                    </p>
                    <span className="text-xs text-gray-400 mt-3 block">2025.00.00</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSubTab === "video" && (
          <div className="tab-content">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">홍보영상</h3>
            <p className="text-sm text-gray-500 mb-8">엘리프 성성호수공원의 프리미엄 주거공간을 영상으로 만나보세요.</p>

            {/* 메인 비디오 플레이어 */}
            <div className="bg-[#032820] rounded-2xl overflow-hidden shadow-2xl">
              {/* 상단 골드 악센트 */}
              <div className="h-[2px] bg-gradient-to-r from-transparent via-[#c8baa7] to-transparent" />

              <div className="p-4 md:p-6">
                <div className="w-full rounded-xl aspect-video bg-black/90 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-white/15 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <p className="text-white/30 text-[14px] tracking-wider">홍보영상 준비 중</p>
                    <p className="text-white/15 text-[11px] mt-1 font-mono">/videos/promo.mp4</p>
                  </div>
                </div>
              </div>

              {/* 하단 정보 바 */}
              <div className="px-6 pb-5 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-base tracking-wide">엘리프 성성호수공원 홍보영상</h4>
                  <p className="text-white/40 text-xs mt-1">성성호수공원의 가치 · TBD</p>
                </div>
                <div className="flex items-center gap-1.5 text-[#c8baa7]/60">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs font-medium">FHD 1080p</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
