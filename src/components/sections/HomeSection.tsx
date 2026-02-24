"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import PrugioLogo from "../PrugioLogo";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function HomeSection() {
  const [loaded, setLoaded] = useState(false);

  const sec1 = useInView();
  const sec2 = useInView();
  const sec5 = useInView();
  const sec6 = useInView();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative">
      {/* ===== Hero Section ===== */}
      <div className="relative h-[100vh] min-h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-lake.jpg"
            alt="호수공원 전경"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Single clean overlay */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
            <div
              className={`max-w-[700px] transition-all duration-[1200ms] ease-out ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Label */}
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-block w-10 h-[1px] bg-gold" />
                <span className="text-gold/80 text-[11px] tracking-[4px] font-medium uppercase">
                  Premium Residence
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-white mb-8">
                <span className="block text-[36px] lg:text-[52px] xl:text-[60px] font-extralight leading-[1.15] tracking-tight">
                  자연과 함께하는
                </span>
                <span className="block text-[36px] lg:text-[52px] xl:text-[60px] font-light leading-[1.15] tracking-tight mt-2">
                  프리미엄 주거
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className={`text-white/50 text-[14px] lg:text-[15px] leading-[2] mb-12 max-w-[440px] font-light transition-all duration-[1200ms] delay-300 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                호수공원 바로 앞, 자연과 도심이 하나 되는 프리미엄
                <br />
                DL이앤씨가 선보이는 새로운 주거 라이프
              </p>

              {/* Brand */}
              <div
                className={`transition-all duration-[1200ms] delay-500 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <PrugioLogo white size="xl" />
              </div>

              {/* CTA Buttons */}
              <div
                className={`mt-12 flex flex-wrap items-center gap-4 transition-all duration-[1200ms] delay-700 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <button className="group flex items-center gap-3 px-8 py-4 bg-gold hover:bg-gold-light text-white text-[13px] font-semibold tracking-wider transition-all duration-300 rounded-sm">
                  관심고객 사전등록
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <a
                  href="tel:1844-0981"
                  className="flex items-center gap-2 px-6 py-4 border border-white/20 text-white/70 hover:text-white hover:border-white/40 text-[13px] font-medium tracking-wider transition-all duration-300 rounded-sm"
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
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-white/30 text-[10px] tracking-[3px] uppercase font-light">Scroll</span>
          <div className="w-[1px] h-8 bg-white/20 scroll-line" />
        </div>
      </div>

      {/* ===== Key Info Strip ===== */}
      <div className="relative bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4">
          {[
            { label: "위치", value: "충남 천안시 서북구 일대" },
            { label: "총 세대수", value: "TBD" },
            { label: "타입", value: "TBD" },
            { label: "분양문의", value: "1844-0981" },
          ].map((item, i) => (
            <div
              key={i}
              className="group px-8 py-7 border-r border-b lg:border-b-0 border-gray-100 last:border-r-0 hover:bg-off-white transition-all duration-300 cursor-default"
            >
              <p className="text-gold text-[10px] tracking-[3px] font-medium uppercase">{item.label}</p>
              <p className="text-dark-gray text-[15px] font-semibold mt-2.5 group-hover:text-navy transition-colors duration-300">{item.value}</p>
              <div className="w-4 h-px bg-gold/30 mt-3 group-hover:w-8 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* ===== About Section ===== */}
      <div ref={sec5.ref} className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text Content */}
            <div className={`transition-all duration-[800ms] ${sec5.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <span className="text-gold text-[11px] tracking-[4px] font-medium">ABOUT</span>
              <h2 className="text-[30px] lg:text-[40px] font-light text-charcoal mt-4 mb-6 leading-tight tracking-tight">
                일상이 새로워지다
              </h2>
              <div className="w-12 h-[1px] bg-gold/50 mb-8" />
              <p className="text-cool-gray text-[15px] leading-[2] mb-4 font-light">
                업성 푸르지오 레이크시티는 호수공원 바로 앞에 위치하여
                탁 트인 호수공원 조망과 쾌적한 자연환경을 누릴 수 있습니다.
              </p>
              <p className="text-cool-gray text-[15px] leading-[2] mb-10 font-light">
                DL이앤씨가 선보이는 푸르지오 브랜드로
                새로운 라이프스타일과 프리미엄 주거 가치를 제공합니다.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: "TBD", unit: "세대", desc: "총 세대수" },
                  { num: "TBD", unit: "세대", desc: "일반분양" },
                  { num: "TBD", unit: "type", desc: "평면구성" },
                  { num: "0", unit: "분", desc: "호수공원 도보" },
                ].map((stat, i) => (
                  <div key={i} className="py-4 border-l border-gold/30 pl-5">
                    <p className="text-navy text-[28px] font-light leading-none">
                      {stat.num}
                      <span className="text-gold text-[13px] font-medium ml-1">{stat.unit}</span>
                    </p>
                    <p className="text-cool-gray text-[12px] mt-2 tracking-wide font-light">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <div className={`relative transition-all duration-[800ms] delay-300 ${sec5.visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src="/images/nature-park.jpg"
                  alt="호수공원 자연환경"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 0분의 가치 - 호수공원 앞 ===== */}
      <div ref={sec1.ref} className="relative py-28 lg:py-36 bg-off-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          {/* Section Title */}
          <div className={`text-center mb-20 transition-all duration-[800ms] ${sec1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-gold text-[11px] tracking-[4px] font-medium">VALUE OF ZERO</span>
            <h2 className="text-[28px] lg:text-[38px] font-light text-charcoal mt-4 leading-tight tracking-tight">
              호수공원 앞, 푸르지오에서 누리다
            </h2>
            <div className="w-10 h-[1px] bg-gold/40 mx-auto mt-6" />
          </div>

          {/* Two Cards */}
          <div className={`grid md:grid-cols-2 gap-px bg-gray-200 mb-20 transition-all duration-[800ms] delay-200 ${sec1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Lake Park */}
            <div className="bg-navy p-10 lg:p-14">
              <span className="text-gold text-[10px] tracking-[3px] font-medium">LAKE PARK</span>
              <p className="text-white/40 text-[13px] mt-5 mb-1 font-light">내집앞 호수공원</p>
              <h3 className="text-white text-[30px] lg:text-[36px] font-light leading-tight tracking-tight">
                호수공원 앞
              </h3>
              <div className="w-10 h-[1px] bg-gold/40 mt-6 mb-7" />
              <p className="text-white/40 text-[14px] leading-[2] font-light">
                호수공원 바로 앞에 위치하여
                <br />
                탁 트인 호수공원 조망!
                <br />
                자연과 함께하는 힐링 라이프
              </p>
              <div className="mt-10 flex items-baseline gap-2">
                <span className="text-gold text-[40px] font-extralight">0</span>
                <span className="text-white/50 text-[14px] font-light">분 거리의 역세권</span>
              </div>
            </div>

            {/* Nature */}
            <div className="bg-white p-10 lg:p-14">
              <span className="text-gold text-[10px] tracking-[3px] font-medium">NATURE</span>
              <p className="text-cool-gray text-[13px] mt-5 mb-1 font-light">자연과 함께</p>
              <h3 className="text-charcoal text-[30px] lg:text-[36px] font-light leading-tight tracking-tight">
                에코 라이프
              </h3>
              <div className="w-10 h-[1px] bg-gold/40 mt-6 mb-7" />
              <p className="text-cool-gray text-[14px] leading-[2] font-light">
                호수공원의 풍요로운 자연환경,
                <br />
                도심 속에서 누리는 쾌적한 힐링,
                <br />
                단지에서 나오면 바로 펼쳐지는 호수공원
              </p>
              <div className="mt-10 flex items-baseline gap-2">
                <span className="text-gold text-[40px] font-extralight">1</span>
                <span className="text-cool-gray text-[14px] font-light">분 거리의 공세권</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className={`text-center max-w-[600px] mx-auto transition-all duration-[800ms] delay-400 ${sec1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-cool-gray text-[14px] leading-[2.2] font-light">
              호수공원 바로 앞에서 누리는 탁 트인 자연 조망,
              <br />
              편리한 교통과 풍부한 생활 인프라,
              <br />
              푸르지오만의 차별화된 프리미엄 주거 라이프
            </p>
          </div>
        </div>
      </div>

      {/* ===== PREMIUM 4 Highlights ===== */}
      <div ref={sec2.ref} className="relative bg-white py-28 lg:py-36 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className={`text-center mb-20 transition-all duration-[800ms] ${sec2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-gold text-[11px] tracking-[4px] font-medium">PREMIUM 4</span>
            <h2 className="text-[28px] lg:text-[38px] font-light text-charcoal mt-4 leading-tight tracking-tight">
              걸어서 누리는 완성된 프리미엄
            </h2>
            <div className="w-10 h-[1px] bg-gold/40 mx-auto mt-6" />
          </div>

          {/* 4 Cards */}
          <div className={`grid md:grid-cols-2 gap-4 transition-all duration-[800ms] delay-200 ${sec2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {[
              {
                num: "01",
                badge: "도보 0분",
                tag: "TRANSPORTATION",
                title: "교통중심",
                desc: "편리한 광역교통망과 우수한 도로 접근성으로 천안 주요 지역까지 빠르게 연결",
                bgImage: "/images/premium-transport-new.jpg",
              },
              {
                num: "02",
                badge: "도보 1분",
                tag: "NATURE",
                title: "자연중심",
                desc: "호수공원 바로 앞! 탁 트인 호수 조망과 풍요로운 자연환경의 힐링 라이프",
                bgImage: "/images/premium-nature.jpg",
              },
              {
                num: "03",
                badge: "도보 2분",
                tag: "LIVING",
                title: "생활중심",
                desc: "대형마트, 상업시설 등 편리한 생활 인프라가 가까이",
                bgImage: "/images/premium-life.jpg",
              },
              {
                num: "04",
                badge: "도보 10분",
                tag: "EDUCATION",
                title: "교육중심",
                desc: "도보권 내 초·고등학교 설립 예정, 우수한 교육 환경",
                bgImage: "/images/premium-education.jpg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`group relative h-[320px] overflow-hidden rounded-sm cursor-default ${sec2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: sec2.visible ? `${200 + i * 100}ms` : "0ms", transitionDuration: "800ms" }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={item.bgImage}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-gold/70 text-[10px] tracking-[3px] font-medium">{item.tag}</span>
                    <span className="text-white/10 text-[48px] font-extralight leading-none">{item.num}</span>
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 border border-gold/40 text-gold text-[10px] font-medium tracking-[1px] rounded-sm mb-4">
                      {item.badge}
                    </span>
                    <h3 className="text-white text-[24px] lg:text-[28px] font-light tracking-tight mb-2">{item.title}</h3>
                    <p className="text-white/50 text-[13px] leading-[1.8] max-w-[380px] font-light">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CTA Section ===== */}
      <div ref={sec6.ref} className="relative py-28 lg:py-36 bg-navy overflow-hidden">
        <div className={`relative max-w-[800px] mx-auto px-6 text-center transition-all duration-[800ms] ${sec6.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-gold/60 text-[11px] tracking-[4px] font-medium">CONTACT</span>
          <h2 className="text-white text-[32px] lg:text-[44px] font-extralight mt-4 mb-4 tracking-tight">분양문의</h2>
          <p className="text-white/30 text-[14px] mb-12 leading-relaxed font-light">
            업성 푸르지오 레이크시티에 대해
            <br className="sm:hidden" /> 자세한 상담을 받아보세요.
          </p>
          <a
            href="tel:1844-0981"
            className="group inline-flex items-center gap-3 px-12 py-5 bg-white text-navy text-[20px] font-semibold tracking-wider transition-all duration-300 hover:bg-off-white rounded-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            1844-0981
          </a>
          <div className="mt-10 text-white/15 text-[13px] font-light">
            <span>시공 | DL이앤씨</span>
          </div>
        </div>
      </div>
    </section>
  );
}
