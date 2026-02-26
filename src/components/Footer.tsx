"use client";

import PrugioLogo from "./PrugioLogo";

interface FooterProps {
  onTabChange?: (tabId: string) => void;
}

export default function Footer({ onTabChange }: FooterProps) {
  const handleNav = (tabId: string) => {
    if (onTabChange) {
      onTabChange(tabId);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#111111] text-gray-400">
      {/* Top CTA Bar */}
      <div className="bg-navy">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-white text-[20px] font-light tracking-wide">관심고객 사전등록</p>
            <p className="text-white/30 text-[13px] mt-2 font-light">빠른 상담을 위해 지금 바로 등록하세요</p>
          </div>
          <button
            onClick={() => handleNav("register")}
            className="group flex items-center gap-3 px-8 py-3 border border-white/15 text-white/80 hover:bg-white hover:text-navy text-[13px] font-medium tracking-wider transition-all duration-300 rounded-sm"
          >
            등록하기
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Brand */}
          <div className="max-w-[360px]">
            <div className="mb-6">
              <PrugioLogo white size="sm" className="opacity-60" />
            </div>
            <p className="text-[13px] leading-[1.8] text-gray-600 font-light">
              호수공원 앞,
              <br />
              자연과 함께하는 프리미엄 주거
            </p>
            <div className="mt-6 flex items-center gap-2">
              <svg className="w-4 h-4 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-[18px] font-semibold text-white/80 tracking-wider">1844-0981</span>
            </div>
            <div className="mt-8 text-[12px] text-gray-700">
              <p><span className="text-gray-600">시공</span> 대우건설</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[11px] font-medium text-white/30 tracking-[3px] uppercase mb-6">바로가기</h4>
            <ul className="flex flex-wrap gap-x-10 gap-y-3.5">
              {[
                { id: "business", label: "사업개요" },
                { id: "location", label: "입지환경" },
                { id: "premium", label: "프리미엄" },
                { id: "register", label: "관심고객등록" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="text-[13px] text-gray-600 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.05]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-gray-700">
            &copy; 2025 업성 푸르지오 레이크시티. All rights reserved.
          </p>
          <p className="text-[11px] text-gray-700 max-w-[600px] text-center md:text-right leading-relaxed">
            본 제작물에 사용된 이미지 및 내용, 문구 등은 소비자의 이해를 돕기 위해 제작 또는 표기된 것으로
            실제와 차이가 있으며, 본 제작물상의 설계 내용은 향후 인허가 과정에서 변동될 수 있습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
