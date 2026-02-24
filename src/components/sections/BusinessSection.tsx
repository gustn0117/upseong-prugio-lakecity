"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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

const typeInfo = [
  { type: "84㎡A", exclusive: "84.9800㎡", count: "468세대", ratio: 40.2 },
  { type: "84㎡B", exclusive: "84.9556㎡", count: "348세대", ratio: 29.9 },
  { type: "111㎡", exclusive: "111.9760㎡", count: "349세대", ratio: 29.9 },
];

export default function BusinessSection() {
  const hero = useInView();
  const info = useInView();
  const types = useInView();

  return (
    <section className="pt-[72px]">
      {/* ══════════ HERO BANNER — Full width image ══════════ */}
      <div className="relative h-[50vh] min-h-[340px]">
        <Image src="/images/banner-business.jpg" alt="" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gold/60 text-[10px] tracking-[5px] font-medium uppercase mb-4">Project Overview</p>
            <h1 className="text-white text-[36px] lg:text-[52px] font-extralight tracking-tight">사업개요</h1>
          </div>
        </div>
      </div>

      {/* ══════════ BIG NUMBERS — Horizontal ══════════ */}
      <div ref={hero.ref} className="bg-white border-b border-gray-100">
        <div className={`max-w-[1200px] mx-auto px-6 lg:px-16 py-20 transition-all duration-700 ${hero.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
            {[
              { num: "29", unit: "층", label: "최고 층수" },
              { num: "5", unit: "개동", label: "동 수" },
              { num: "1,165", unit: "세대", label: "총 세대수" },
              { num: "1.38", unit: "대", label: "세대당 주차" },
            ].map((item, i) => (
              <div key={i} className={`transition-all duration-500 ${hero.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex items-baseline gap-1">
                  <span className="text-[48px] lg:text-[64px] font-extralight text-charcoal leading-none tracking-tight">{item.num}</span>
                  <span className="text-gold text-[14px] font-medium">{item.unit}</span>
                </div>
                <p className="text-cool-gray text-[12px] tracking-wider mt-2 font-light">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════ PROJECT INFO — Clean Two Column ══════════ */}
      <div ref={info.ref} className="bg-off-white">
        <div className={`max-w-[1200px] mx-auto px-6 lg:px-16 py-20 lg:py-28 transition-all duration-700 ${info.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left — Title & Description */}
            <div>
              <p className="text-gold text-[10px] tracking-[5px] font-medium uppercase mb-6">Details</p>
              <h2 className="text-[28px] lg:text-[36px] font-extralight text-charcoal tracking-tight leading-tight mb-8">
                호수공원의 새로운
                <br />
                랜드마크
              </h2>
              <div className="w-10 h-[1px] bg-gold/40 mb-8" />
              <p className="text-cool-gray text-[14px] leading-[2.2] font-light">
                자연과 도시가 조화를 이루는 프리미엄 주거단지.
                1,165세대의 대규모 커뮤니티가 호수공원 앞에 완성됩니다.
                DL이앤씨의 기술력과 푸르지오의 브랜드 가치가
                새로운 주거 라이프를 선사합니다.
              </p>
            </div>

            {/* Right — Data Table */}
            <div>
              <div className="divide-y divide-gray-200">
                {[
                  { label: "사업명", value: "업성 푸르지오 레이크시티" },
                  { label: "사업지", value: "충청남도 천안시 서북구 업성동 368-7" },
                  { label: "사업규모", value: "최고 29층 / 5개동" },
                  { label: "세대수", value: "1,165세대" },
                  { label: "주차대수", value: "세대당 1.38대 (법정 1.16대)" },
                  { label: "시공사", value: "DL이앤씨" },
                ].map((row, i) => (
                  <div key={i} className="flex py-5 first:pt-0">
                    <span className="w-[100px] flex-shrink-0 text-gold text-[11px] tracking-wider font-medium pt-0.5">{row.label}</span>
                    <span className="text-dark-gray text-[14px] font-light">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ UNIT TYPES — Minimal Cards ══════════ */}
      <div ref={types.ref} className="bg-white">
        <div className={`max-w-[1200px] mx-auto px-6 lg:px-16 py-20 lg:py-28 transition-all duration-700 ${types.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold text-[10px] tracking-[5px] font-medium uppercase mb-4">Unit Types</p>
          <h2 className="text-[28px] lg:text-[36px] font-extralight text-charcoal tracking-tight mb-16">타입별 세대 안내</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            {typeInfo.map((t, i) => (
              <div key={i} className="bg-white p-8 lg:p-10">
                <span className="text-navy text-[28px] lg:text-[32px] font-extralight tracking-tight">{t.type}</span>
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-cool-gray text-[10px] tracking-wider uppercase mb-1 font-medium">전용면적</p>
                    <p className="text-dark-gray text-[15px]">{t.exclusive}</p>
                  </div>
                  <div>
                    <p className="text-cool-gray text-[10px] tracking-wider uppercase mb-1 font-medium">세대수</p>
                    <p className="text-dark-gray text-[15px]">{t.count}</p>
                  </div>
                  <div>
                    <p className="text-cool-gray text-[10px] tracking-wider uppercase mb-1 font-medium">구성비율</p>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex-1 h-[3px] bg-gray-100">
                        <div className="h-full bg-navy transition-all duration-1000" style={{ width: types.visible ? `${t.ratio}%` : "0%" }} />
                      </div>
                      <span className="text-navy text-[13px] font-medium">{t.ratio}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-cool-gray text-[11px] mt-12 font-light">
            * 상기 내용은 인허가 과정에서 변경될 수 있습니다.
          </p>
        </div>
      </div>

      {/* ══════════ CTA ══════════ */}
      <div className="bg-navy py-20">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <p className="text-white/20 text-[10px] tracking-[5px] uppercase mb-4">Contact</p>
          <h3 className="text-white text-[24px] font-extralight tracking-tight mb-6">분양 상담 문의</h3>
          <a
            href="tel:1844-0981"
            className="inline-block px-12 py-4 bg-white text-navy text-[15px] font-semibold tracking-widest hover:bg-off-white transition-all duration-300"
          >
            1844-0981
          </a>
        </div>
      </div>
    </section>
  );
}
