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

const locationAdvantages = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "성성호수공원",
    desc: "도보 1분 거리 호수공원\n자연과 함께하는 프리미엄 생활",
    highlight: "도보 1분",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    title: "교육 인프라",
    desc: "천안업성초·중학교 인접\n공주대 천안캠퍼스, 단국대 근접",
    highlight: "학세권",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "광역 교통",
    desc: "천안아산역(KTX/SRT) 이용 편리\n경부고속도로·1호선 인접",
    highlight: "KTX 역세권",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <section className="pt-[80px]">
      <SectionBanner
        title="입 지 환 경"
        subtitle="성성호수공원 앞, 최적의 입지를 만나보세요."
        fallbackGradient="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500"
      />

      {/* ===== 헤드라인 섹션 ===== */}
      <div className="bg-[#FAFAF7]">
        <div
          ref={sec1.ref}
          className={`max-w-[1100px] mx-auto px-6 pt-20 pb-16 text-center transition-all duration-700 ${sec1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-elif-green text-[13px] font-semibold tracking-[4px] uppercase mb-4">LOCATION</p>
          <h2
            className="text-[26px] sm:text-[32px] lg:text-[38px] font-light text-gray-900 leading-snug"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            호수공원을 품은 프리미엄,<br />
            <span className="font-bold">주거의 품격</span>을 새롭게 세우다
          </h2>
          <p className="mt-5 text-[14px] sm:text-[15px] text-gray-500 leading-relaxed max-w-[500px] mx-auto">
            호수공원과 교육, 산업단지를 아우르는 입지 위에<br className="hidden sm:inline" />
            주거의 가치가 균형 있게 완성됩니다.
          </p>
          <div className="mt-8 w-14 h-[2px] bg-elif-lake/60 mx-auto rounded-full" />
        </div>
      </div>

      {/* ===== 4대 입지 강점 카드 ===== */}
      <div className="bg-[#FAFAF7]">
        <div
          ref={sec2.ref}
          className="max-w-[1100px] mx-auto px-6 pb-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {locationAdvantages.map((item, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${sec2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: sec2.visible ? `${i * 120}ms` : "0ms" }}
              >
                <div className="w-14 h-14 rounded-xl bg-elif-green/8 flex items-center justify-center text-elif-green mb-5 group-hover:bg-elif-green group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <span className="inline-block px-2.5 py-1 bg-elif-lake/10 text-elif-lake text-[11px] font-bold rounded-full mb-3 tracking-wide">
                  {item.highlight}
                </span>
                <h3 className="text-[17px] font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed whitespace-pre-line">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== 그라데이션 전환 ===== */}
      <div className="h-20 bg-gradient-to-b from-[#FAFAF7] to-elif-green-dark" />

      {/* ===== 입지 지도 섹션 ===== */}
      <div className="bg-elif-green-dark">
        <div
          ref={sec3.ref}
          className={`max-w-[1200px] mx-auto px-6 py-20 transition-all duration-700 ${sec3.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="text-center mb-12">
            <p className="text-elif-lake text-[12px] font-semibold tracking-[4px] uppercase mb-3">PREMIUM LOCATION MAP</p>
            <h2
              className="text-[24px] sm:text-[30px] text-white font-light"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              <span className="font-bold">엘리프 성성호수공원</span> 입지 안내
            </h2>
          </div>

          {/* 지도 이미지 */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <div className="relative w-full" style={{ paddingBottom: "75%" }}>
              <Image
                src="/images/69923b1f7d9c7_1920.JPG"
                alt="엘리프 성성호수공원 입지 안내도"
                fill
                className="object-contain bg-[#f0ede6]"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            {/* 하단 그라데이션 */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-5 flex items-end justify-between">
              <p className="text-white/70 text-[12px]">* 본 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있습니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 그라데이션 전환 ===== */}
      <div className="h-16 bg-gradient-to-b from-elif-green-dark to-[#FAFAF7]" />

      {/* ===== 주변 인프라 상세 ===== */}
      <div className="bg-[#FAFAF7]">
        <div
          ref={sec4.ref}
          className={`max-w-[1100px] mx-auto px-6 pt-10 pb-24 transition-all duration-700 ${sec4.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="text-center mb-14">
            <p className="text-elif-green text-[13px] font-semibold tracking-[4px] uppercase mb-3">INFRASTRUCTURE</p>
            <h2
              className="text-[24px] sm:text-[30px] text-gray-900 font-light"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              풍부한 <span className="font-bold">생활 인프라</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbySpots.map((group, gi) => (
              <div
                key={gi}
                className={`bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 ${sec4.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: sec4.visible ? `${gi * 120}ms` : "0ms" }}
              >
                <div className="bg-elif-green px-5 py-3.5 flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    {gi === 0 && (
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    )}
                    {gi === 1 && (
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    )}
                    {gi === 2 && (
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                    {gi === 3 && (
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    )}
                  </div>
                  <span className="text-white text-[14px] font-bold tracking-wide">{group.category}</span>
                </div>
                <div className="divide-y divide-gray-50">
                  {group.items.map((item, ii) => (
                    <div key={ii} className="px-5 py-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
                      <span className="text-[13px] text-gray-700">{item.name}</span>
                      <span className="text-[12px] text-elif-green font-semibold bg-elif-green/8 px-2.5 py-1 rounded-full whitespace-nowrap">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 하단 안내 문구 */}
          <p className="text-center text-[12px] text-gray-400 mt-10">
            * 거리 및 소요시간은 네이버 지도 기준이며, 교통 상황에 따라 달라질 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
