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

const premiumPoints = [
  {
    num: "01",
    tag: "NATURE",
    title: "호수공원 도보 1분",
    subtitle: "자연이 일상이 되는 프리미엄",
    desc: "호수공원 도보권, 사계절 아름다운 수변 산책로와 자연 생태공원이 일상의 쉼터가 됩니다. 호수를 바라보는 조망과 맑은 공기가 만드는 주거의 품격을 경험하세요.",
    bgImage: "/images/premium-nature.jpg",
    features: ["호수공원 도보 1분", "수변 산책로·생태공원", "탁 트인 호수 조망"],
  },
  {
    num: "02",
    tag: "TRANSPORT",
    title: "KTX·SRT 역세권",
    subtitle: "서울까지 빠르게, 전국을 가깝게",
    desc: "천안아산역(KTX/SRT)을 통해 서울 용산까지 약 34분, 수서까지 약 30분. 경부고속도로와 1호선이 인접하여 수도권과 전국 어디든 편리하게 연결됩니다.",
    bgImage: "/images/premium-transport-new.jpg",
    features: ["천안아산역 KTX/SRT", "경부고속도로 인접", "1호선 역세권"],
  },
  {
    num: "03",
    tag: "LIVING",
    title: "풍부한 생활 인프라",
    subtitle: "편리함을 갖춘 완성형 주거",
    desc: "이마트·롯데마트 등 대형마트와 천안시청, 행정복지센터 등 공공시설이 가깝습니다. 단국대병원·천안의료원 등 의료시설과 다양한 편의시설이 쾌적한 생활을 지원합니다.",
    bgImage: "/images/premium-life.jpg",
    features: ["대형마트·편의시설", "공공기관·의료시설", "문화·여가 인프라"],
  },
  {
    num: "04",
    tag: "EDUCATION",
    title: "우수한 교육 환경",
    subtitle: "아이들의 미래를 위한 학세권",
    desc: "천안업성초·중학교가 단지와 인접하고, 가람초·가람중이 가까운 도보 통학권입니다. 공주대 천안캠퍼스, 단국대 등 대학교도 인접해 교육 인프라가 풍부합니다.",
    bgImage: "/images/premium-education.jpg",
    features: ["천안업성초·중 인접", "도보 통학권 확보", "대학교 인접"],
  },
];

const specHighlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "DL이앤씨 시공",
    desc: "글로벌 건설사의 프리미엄 브랜드",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "친환경 설계",
    desc: "자연과 조화로운 단지 배치",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "혁신 평면 설계",
    desc: "실용적이고 넓은 공간 구성",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "프리미엄 커뮤니티",
    desc: "피트니스·라운지 등 입주민 시설",
  },
];

export default function PremiumSection() {
  const sec1 = useInView();
  const sec2 = useInView();
  const sec3 = useInView();

  return (
    <section className="pt-[80px]">
      <SectionBanner
        title="프 리 미 엄"
        subtitle="자연과 함께하는 프리미엄 주거를 만나보세요."
        fallbackGradient="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600"
        bgImage="/images/banner-premium.jpg"
      />

      {/* ===== 헤드라인 ===== */}
      <div className="bg-[#FAFAF7]">
        <div
          ref={sec1.ref}
          className={`max-w-[1100px] mx-auto px-6 pt-20 pb-16 text-center transition-all duration-700 ${sec1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-prugio-blue text-[13px] font-semibold tracking-[4px] uppercase mb-4">PREMIUM</p>
          <h2
            className="text-[26px] sm:text-[32px] lg:text-[38px] font-light text-gray-900 leading-snug"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            당신의 일상에<br />
            <span className="font-bold">특별한 가치</span>를 더하다
          </h2>
          <p className="mt-5 text-[14px] sm:text-[15px] text-gray-500 leading-relaxed max-w-[460px] mx-auto">
            호수공원, 교통, 교육, 생활이 어우러진<br className="hidden sm:inline" />
            프리미엄 주거의 새로운 기준
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-prugio-gold/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-prugio-gold/60" />
            <span className="w-8 h-[1px] bg-prugio-gold/40" />
          </div>
        </div>
      </div>

      {/* ===== PREMIUM 4 포인트 (이미지 + 텍스트 교차 배치) ===== */}
      <div className="bg-[#FAFAF7] pb-10">
        <div className="max-w-[1100px] mx-auto px-6 space-y-8">
          {premiumPoints.map((item, i) => {
            const sec = useInView(0.1);
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                ref={sec.ref}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm transition-all duration-700 ${sec.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                {/* 이미지 */}
                <div className="relative lg:w-[45%] h-[260px] sm:h-[300px] lg:h-auto lg:min-h-[380px] flex-shrink-0">
                  <Image
                    src={item.bgImage}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
                  <div className={`absolute inset-0 hidden lg:block ${isEven ? "bg-gradient-to-r from-transparent to-black/10" : "bg-gradient-to-l from-transparent to-black/10"}`} />
                  {/* 넘버 배지 */}
                  <div className="absolute top-5 left-5 flex items-center gap-2">
                    <span className="w-10 h-10 rounded-full bg-prugio-blue/90 text-white text-[14px] font-bold flex items-center justify-center backdrop-blur-sm">
                      {item.num}
                    </span>
                    <span className="text-white/80 text-[11px] font-semibold tracking-[3px] uppercase bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* 텍스트 */}
                <div className="flex-1 px-8 py-8 lg:px-10 lg:py-10 flex flex-col justify-center">
                  <p className="text-prugio-gold text-[12px] font-bold tracking-[3px] uppercase mb-2">{item.tag}</p>
                  <h3
                    className="text-[22px] sm:text-[26px] font-bold text-gray-900 mb-1"
                    style={{ fontFamily: "'Noto Serif KR', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-gray-400 mb-5">{item.subtitle}</p>
                  <p className="text-[13.5px] text-gray-600 leading-[1.9] mb-6">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((f, fi) => (
                      <span key={fi} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-prugio-blue/[0.06] text-prugio-blue text-[12px] font-medium rounded-full">
                        <svg className="w-3 h-3 text-prugio-blue/60" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== 그라데이션 전환 ===== */}
      <div className="h-20 bg-gradient-to-b from-[#FAFAF7] to-prugio-blue-dark" />

      {/* ===== 스펙 하이라이트 ===== */}
      <div className="bg-prugio-blue-dark relative overflow-hidden">
        <div className="absolute inset-0 pattern-waves opacity-10" />
        <div
          ref={sec2.ref}
          className={`max-w-[1000px] mx-auto px-6 py-20 transition-all duration-700 ${sec2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="text-center mb-14">
            <p className="text-prugio-gold text-[12px] font-semibold tracking-[4px] uppercase mb-3">WHY PRUGIO</p>
            <h2
              className="text-[24px] sm:text-[30px] text-white font-light"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              푸르지오가 <span className="font-bold">특별한 이유</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {specHighlights.map((item, i) => (
              <div
                key={i}
                className={`text-center p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-500 ${sec2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: sec2.visible ? `${i * 100}ms` : "0ms" }}
              >
                <div className="w-14 h-14 rounded-xl bg-prugio-gold/15 flex items-center justify-center text-prugio-gold mx-auto mb-4">
                  {item.icon}
                </div>
                <h4 className="text-[15px] text-white font-bold mb-1.5">{item.title}</h4>
                <p className="text-[12.5px] text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="relative bg-prugio-blue-dark overflow-hidden">
        <div className="absolute inset-0 pattern-waves opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-prugio-blue-dark via-prugio-blue/30 to-prugio-blue-dark" />
        <div
          ref={sec3.ref}
          className={`relative max-w-[700px] mx-auto px-6 py-20 text-center transition-all duration-700 ${sec3.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-prugio-gold text-[13px] font-semibold tracking-[3px] mb-4">CONTACT US</p>
          <h2
            className="text-[24px] sm:text-[30px] text-white font-light mb-4"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            지금 바로 <span className="font-bold">상담</span>받아보세요
          </h2>
          <p className="text-white/50 text-[14px] mb-8">분양 관련 자세한 상담을 도와드리겠습니다.</p>
          <a
            href="tel:1844-0981"
            className="inline-flex items-center gap-3 px-10 py-4 bg-prugio-gold text-white rounded-full text-[16px] font-bold tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            1844-0981
          </a>
        </div>
      </div>
    </section>
  );
}
