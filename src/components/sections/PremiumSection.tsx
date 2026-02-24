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

const premiumPoints = [
  {
    num: "01",
    tag: "Nature",
    title: "호수공원 도보 1분",
    subtitle: "자연이 일상이 되는 프리미엄",
    desc: "호수공원 도보권, 사계절 아름다운 수변 산책로와 자연 생태공원이 일상의 쉼터가 됩니다. 호수를 바라보는 조망과 맑은 공기가 만드는 주거의 품격을 경험하세요.",
    bgImage: "/images/premium-nature.jpg",
    features: ["호수공원 도보 1분", "수변 산책로·생태공원", "탁 트인 호수 조망"],
  },
  {
    num: "02",
    tag: "Transport",
    title: "KTX·SRT 역세권",
    subtitle: "서울까지 빠르게, 전국을 가깝게",
    desc: "천안아산역(KTX/SRT)을 통해 서울 용산까지 약 34분, 수서까지 약 30분. 경부고속도로와 1호선이 인접하여 수도권과 전국 어디든 편리하게 연결됩니다.",
    bgImage: "/images/premium-transport-new.jpg",
    features: ["천안아산역 KTX/SRT", "경부고속도로 인접", "1호선 역세권"],
  },
  {
    num: "03",
    tag: "Living",
    title: "풍부한 생활 인프라",
    subtitle: "편리함을 갖춘 완성형 주거",
    desc: "이마트·롯데마트 등 대형마트와 천안시청, 행정복지센터 등 공공시설이 가깝습니다. 단국대병원·천안의료원 등 의료시설과 다양한 편의시설이 쾌적한 생활을 지원합니다.",
    bgImage: "/images/premium-life.jpg",
    features: ["대형마트·편의시설", "공공기관·의료시설", "문화·여가 인프라"],
  },
  {
    num: "04",
    tag: "Education",
    title: "우수한 교육 환경",
    subtitle: "아이들의 미래를 위한 학세권",
    desc: "천안업성초·중학교가 단지와 인접하고, 가람초·가람중이 가까운 도보 통학권입니다. 공주대 천안캠퍼스, 단국대 등 대학교도 인접해 교육 인프라가 풍부합니다.",
    bgImage: "/images/premium-education.jpg",
    features: ["천안업성초·중 인접", "도보 통학권 확보", "대학교 인접"],
  },
];

export default function PremiumSection() {
  const hero = useInView();
  const why = useInView();

  return (
    <section className="pt-[72px]">
      {/* ══════════ HERO ══════════ */}
      <div className="relative h-[50vh] min-h-[340px]">
        <Image src="/images/banner-premium.jpg" alt="" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gold/60 text-[10px] tracking-[5px] font-medium uppercase mb-4">Premium</p>
            <h1 className="text-white text-[36px] lg:text-[52px] font-extralight tracking-tight">프리미엄</h1>
          </div>
        </div>
      </div>

      {/* ══════════ INTRO ══════════ */}
      <div ref={hero.ref} className="bg-white">
        <div className={`max-w-[900px] mx-auto px-6 lg:px-16 py-20 lg:py-28 text-center transition-all duration-700 ${hero.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-[26px] lg:text-[38px] font-extralight text-charcoal leading-snug tracking-tight">
            당신의 일상에
            <br />
            특별한 가치를 더하다
          </h2>
          <div className="w-10 h-[1px] bg-gold/40 mx-auto mt-8 mb-8" />
          <p className="text-cool-gray text-[14px] leading-[2] font-light max-w-[480px] mx-auto">
            호수공원, 교통, 교육, 생활이 어우러진
            프리미엄 주거의 새로운 기준
          </p>
        </div>
      </div>

      {/* ══════════ PREMIUM POINTS — Alternating Full-bleed ══════════ */}
      {premiumPoints.map((item, i) => {
        const sec = useInView(0.1);
        const isOdd = i % 2 !== 0;
        return (
          <div key={i} ref={sec.ref} className="bg-white">
            <div className={`max-w-[1400px] mx-auto transition-all duration-[800ms] ${sec.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className={`grid lg:grid-cols-12 min-h-[70vh] ${isOdd ? "" : ""}`}>
                {/* Image Side */}
                <div className={`relative min-h-[340px] lg:min-h-0 ${isOdd ? "lg:col-start-7 lg:col-end-13 lg:row-start-1" : "lg:col-span-7"}`}>
                  <Image
                    src={item.bgImage}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>

                {/* Text Side */}
                <div className={`flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-24 ${isOdd ? "lg:col-start-1 lg:col-end-7 lg:row-start-1" : "lg:col-span-5"}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-gold text-[32px] font-extralight">{item.num}</span>
                    <div className="w-8 h-[1px] bg-gold/30" />
                    <span className="text-gold/60 text-[10px] tracking-[4px] font-medium uppercase">{item.tag}</span>
                  </div>

                  <h3 className="text-[26px] lg:text-[32px] font-extralight text-charcoal tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-cool-gray text-[13px] mb-6 font-light">{item.subtitle}</p>
                  <p className="text-dark-gray text-[13px] leading-[2] mb-8 font-light">{item.desc}</p>

                  <div className="space-y-2">
                    {item.features.map((f, fi) => (
                      <div key={fi} className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-gold" />
                        <span className="text-cool-gray text-[12px] font-light">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Divider */}
            {i < premiumPoints.length - 1 && <div className="max-w-[1400px] mx-auto px-6 lg:px-16"><div className="h-[1px] bg-gray-100" /></div>}
          </div>
        );
      })}

      {/* ══════════ WHY PRUGIO — Clean Grid ══════════ */}
      <div ref={why.ref} className="bg-off-white border-t border-gray-100">
        <div className={`max-w-[1200px] mx-auto px-6 lg:px-16 py-20 lg:py-28 transition-all duration-700 ${why.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold text-[10px] tracking-[5px] font-medium uppercase mb-4">Why Prugio</p>
          <h2 className="text-[28px] lg:text-[36px] font-extralight text-charcoal tracking-tight mb-16">푸르지오가 특별한 이유</h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {[
              { title: "DL이앤씨 시공", desc: "글로벌 건설사의 프리미엄 브랜드" },
              { title: "친환경 설계", desc: "자연과 조화로운 단지 배치" },
              { title: "혁신 평면", desc: "실용적이고 넓은 공간 구성" },
              { title: "프리미엄 커뮤니티", desc: "피트니스·라운지 등 입주민 시설" },
            ].map((item, i) => (
              <div key={i} className="bg-off-white p-8">
                <span className="text-gold text-[24px] font-extralight">{String(i + 1).padStart(2, "0")}</span>
                <h4 className="text-charcoal text-[15px] font-semibold mt-4 mb-2">{item.title}</h4>
                <p className="text-cool-gray text-[12px] leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════ CTA ══════════ */}
      <div className="bg-navy py-20">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <p className="text-white/20 text-[10px] tracking-[5px] uppercase mb-4">Contact</p>
          <h3 className="text-white text-[24px] font-extralight tracking-tight mb-6">지금 바로 상담받아보세요</h3>
          <a
            href="tel:1844-0981"
            className="inline-block px-12 py-4 bg-gold text-white text-[15px] font-semibold tracking-widest hover:bg-gold-light transition-all duration-300"
          >
            1844-0981
          </a>
        </div>
      </div>
    </section>
  );
}
