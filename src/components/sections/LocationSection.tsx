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

const locationAdvantages = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "성성호수공원",
    desc: "도보 1분 거리 호수공원\n자연과 함께하는 프리미엄 생활",
    highlight: "도보 1분",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    title: "교육 인프라",
    desc: "천안업성초·중학교 인접\n공주대 천안캠퍼스, 단국대 근접",
    highlight: "학세권",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "광역 교통",
    desc: "천안아산역(KTX/SRT) 이용 편리\n경부고속도로·1호선 인접",
    highlight: "KTX 역세권",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "산업 · 생활",
    desc: "삼성SDI·삼성디스플레이 인접\n이마트·롯데마트 등 생활 편의",
    highlight: "직주근접",
  },
];

const nearbySpots = [
  { category: "자연", items: [
    { name: "성성호수공원", time: "도보 1분" },
    { name: "노태근린공원", time: "도보 5분" },
    { name: "어린이공원", time: "도보 3분" },
  ]},
  { category: "교육", items: [
    { name: "천안업성초등학교", time: "도보 5분" },
    { name: "중학교(예정)", time: "도보 3분" },
    { name: "가람초·가람중", time: "차량 5분" },
  ]},
  { category: "교통", items: [
    { name: "천안아산역(KTX)", time: "차량 15분" },
    { name: "1호선(정차역)", time: "차량 10분" },
    { name: "경부고속도로", time: "차량 10분" },
  ]},
  { category: "생활", items: [
    { name: "삼성디스플레이시티", time: "차량 5분" },
    { name: "이마트·롯데마트", time: "차량 10분" },
    { name: "천안시청·행복센터", time: "차량 15분" },
  ]},
];

export default function LocationSection() {
  const sec1 = useInView();
  const sec2 = useInView();
  const sec3 = useInView();
  const sec4 = useInView();

  return (
    <section className="pt-[72px]">
      <SectionBanner
        title="입지환경"
        subtitle="호수공원 앞, 최적의 입지를 만나보세요."
        fallbackGradient="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500"
        bgImage="/images/banner-location.jpg"
      />

      {/* ===== Headline ===== */}
      <div className="bg-white">
        <div
          ref={sec1.ref}
          className={`max-w-[1100px] mx-auto px-6 pt-20 pb-16 text-center transition-all duration-700 ${sec1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-gold text-[11px] font-medium tracking-[4px] uppercase mb-4">LOCATION</p>
          <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-light text-charcoal leading-snug tracking-tight">
            호수공원을 품은 프리미엄,<br />
            주거의 품격을 새롭게 세우다
          </h2>
          <p className="mt-5 text-[14px] sm:text-[15px] text-cool-gray leading-relaxed max-w-[500px] mx-auto font-light">
            호수공원과 교육, 산업단지를 아우르는 입지 위에<br className="hidden sm:inline" />
            주거의 가치가 균형 있게 완성됩니다.
          </p>
          <div className="w-10 h-[1px] bg-gold/40 mx-auto mt-8" />
        </div>
      </div>

      {/* ===== 4 Advantages ===== */}
      <div className="bg-white">
        <div
          ref={sec2.ref}
          className="max-w-[1100px] mx-auto px-6 pb-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {locationAdvantages.map((item, i) => (
              <div
                key={i}
                className={`group bg-off-white rounded-sm p-7 border border-gray-100 hover:border-gold/30 transition-all duration-500 ${sec2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: sec2.visible ? `${i * 120}ms` : "0ms" }}
              >
                <div className="w-12 h-12 rounded-sm bg-navy/[0.06] flex items-center justify-center text-navy mb-5 group-hover:bg-navy group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <span className="inline-block px-2.5 py-1 bg-gold/10 text-gold text-[10px] font-medium rounded-sm mb-3 tracking-wide">
                  {item.highlight}
                </span>
                <h3 className="text-[16px] font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-[13px] text-cool-gray leading-relaxed whitespace-pre-line font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Location Map ===== */}
      <div className="bg-off-white border-t border-gray-100">
        <div
          ref={sec3.ref}
          className={`max-w-[1200px] mx-auto px-6 py-20 transition-all duration-700 ${sec3.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="text-center mb-12">
            <p className="text-gold text-[11px] font-medium tracking-[4px] uppercase mb-3">PREMIUM LOCATION MAP</p>
            <h2 className="text-[24px] sm:text-[30px] text-charcoal font-light tracking-tight">
              업성 푸르지오 레이크시티 입지 안내
            </h2>
          </div>

          <div className="relative rounded-sm overflow-hidden border border-gray-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/location-map.jpg"
              alt="업성 푸르지오 레이크시티 입지 안내도"
              className="w-full h-auto block"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-4">
              <p className="text-white/70 text-[11px] font-light">* 본 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있습니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Infrastructure ===== */}
      <div className="bg-white border-t border-gray-100">
        <div
          ref={sec4.ref}
          className={`max-w-[1100px] mx-auto px-6 py-20 transition-all duration-700 ${sec4.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="text-center mb-14">
            <p className="text-gold text-[11px] font-medium tracking-[4px] uppercase mb-3">INFRASTRUCTURE</p>
            <h2 className="text-[24px] sm:text-[30px] text-charcoal font-light tracking-tight">
              풍부한 생활 인프라
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbySpots.map((group, gi) => (
              <div
                key={gi}
                className={`bg-off-white rounded-sm overflow-hidden border border-gray-100 transition-all duration-500 ${sec4.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: sec4.visible ? `${gi * 120}ms` : "0ms" }}
              >
                <div className="bg-navy px-5 py-3.5">
                  <span className="text-white text-[13px] font-medium tracking-wide">{group.category}</span>
                </div>
                <div className="divide-y divide-gray-100">
                  {group.items.map((item, ii) => (
                    <div key={ii} className="px-5 py-4 flex items-center justify-between hover:bg-white transition-colors">
                      <span className="text-[13px] text-dark-gray font-light">{item.name}</span>
                      <span className="text-[11px] text-navy font-medium bg-navy/[0.06] px-2.5 py-1 rounded-sm whitespace-nowrap">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[12px] text-cool-gray mt-10 font-light">
            * 거리 및 소요시간은 네이버 지도 기준이며, 교통 상황에 따라 달라질 수 있습니다.
          </p>

          {/* CTA */}
          <div className="mt-16 bg-navy rounded-sm p-10 sm:p-12 text-center">
            <p className="text-gold/60 text-[11px] font-medium tracking-[3px] mb-3">CONTACT US</p>
            <h3 className="text-white text-[22px] sm:text-[26px] font-extralight mb-3 tracking-tight">
              입지 관련 상담 문의
            </h3>
            <p className="text-white/30 text-[13px] mb-7 font-light">현장 방문 및 상세 입지 안내를 도와드리겠습니다.</p>
            <a
              href="tel:1844-0981"
              className="inline-flex items-center gap-3 px-9 py-3.5 bg-white text-navy rounded-sm text-[15px] font-semibold tracking-wider hover:bg-off-white transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              1844-0981
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
