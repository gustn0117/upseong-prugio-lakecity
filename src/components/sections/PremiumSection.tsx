"use client";

import { useState } from "react";
import SectionBanner from "../SectionBanner";

const subTabs = [
  { id: "location", label: "입지환경" },
  { id: "premium4", label: "프리미엄 4" },
];

interface PremiumSectionProps {
  initialSubTab?: string;
}

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

      <div className="max-w-[1200px] mx-auto px-6">
        <ComingSoon />
      </div>
    </section>
  );
}
