"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import ElifLogo from "../ElifLogo";

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
  const [scrollY, setScrollY] = useState(0);

  const sec1 = useInView();
  const sec2 = useInView();
  const sec5 = useInView();
  const sec6 = useInView();

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative">
      {/* ===== Hero Section ===== */}
      <div className="relative h-[100vh] min-h-[700px] overflow-hidden">
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <Image
            src="/images/hero-lake.jpg"
            alt="성성호수공원 전경"
            fill
            priority
            className="object-cover scale-110"
            sizes="100vw"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f17]/75 via-[#162B22]/55 to-[#1E3D30]/40" />
        </div>

        {/* Secondary Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f17]/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f17]/60 via-transparent to-[#0a1f17]/20" />

        {/* Subtle Vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(10,31,23,0.4) 100%)' }} />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
            <div
              className={`max-w-[700px] transition-all duration-[1200ms] ease-out ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Badge */}
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-block w-12 h-[1px] bg-elif-lake" />
                <span className="text-elif-lake text-[13px] tracking-[4px] font-medium uppercase">
                  Premium Residence
                </span>
              </div>

              {/* Main Quote */}
              <div className="mb-6">
                <p className="text-white/50 text-[15px] lg:text-[17px] font-light tracking-wide mb-5" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                  &ldquo; 성성호수공원 앞, 엘리프에서 누리다 &rdquo;
                </p>
                <h1 className="text-white">
                  <span className="block text-[38px] lg:text-[54px] xl:text-[64px] font-extralight leading-[1.15] tracking-tight">
                    자연과 함께하는
                  </span>
                  <span className="block text-[38px] lg:text-[54px] xl:text-[64px] font-bold leading-[1.15] tracking-tight mt-2">
                    프리미엄 <span className="text-elif-lake">주거</span>
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p
                className={`text-white/50 text-[14px] lg:text-[15px] leading-[1.9] mb-10 max-w-[480px] transition-all duration-[1200ms] delay-300 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                성성호수공원 바로 앞, 자연과 도심이 하나 되는 프리미엄
                <br />
                계룡건설산업이 선보이는 새로운 주거 라이프
              </p>

              {/* Brand Name */}
              <div
                className={`transition-all duration-[1200ms] delay-500 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <ElifLogo white size="xl" />
              </div>

              {/* CTA Buttons */}
              <div
                className={`mt-12 flex flex-wrap items-center gap-4 transition-all duration-[1200ms] delay-700 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <button className="group flex items-center gap-3 px-8 py-4 bg-elif-lake/90 hover:bg-elif-lake text-white text-[14px] font-semibold tracking-wider transition-all duration-300 hover:gap-5 rounded-full">
                  관심고객 사전등록
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <a
                  href="tel:1800-0000"
                  className="flex items-center gap-2 px-6 py-4 border border-white/25 text-white/70 hover:border-white/50 hover:text-white text-[14px] font-medium tracking-wider transition-all duration-300 rounded-full backdrop-blur-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  1800-0000
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
          <span className="text-white/30 text-[10px] tracking-[3px] uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent scroll-indicator" />
        </div>

        {/* Side Info Bar */}
        <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6">
          <div className="w-[1px] h-16 bg-white/15" />
          <span className="text-white/30 text-[11px] tracking-[2px] writing-vertical">1800-0000</span>
          <div className="w-[1px] h-16 bg-white/15" />
        </div>
      </div>

      {/* ===== Key Info Strip ===== */}
      <div className="relative bg-elif-green text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(201,169,110,0.3) 35px, rgba(201,169,110,0.3) 36px)`
        }} />
        <div className="relative max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4">
          {[
            { label: "위치", value: "충남 천안시 서북구 일대" },
            { label: "총 세대수", value: "TBD" },
            { label: "타입", value: "TBD" },
            { label: "분양문의", value: "1800-0000" },
          ].map((item, i) => (
            <div
              key={i}
              className="group px-8 py-7 border-r border-b lg:border-b-0 border-white/[0.06] last:border-r-0 hover:bg-white/[0.03] transition-all duration-300 cursor-default"
            >
              <p className="text-elif-lake/50 text-[10px] tracking-[3px] font-medium uppercase">{item.label}</p>
              <p className="text-white text-[15px] font-semibold mt-2.5 group-hover:text-elif-lake transition-colors duration-300">{item.value}</p>
              <div className="w-4 h-px bg-elif-lake/20 mt-3 group-hover:w-8 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* ===== About Section ===== */}
      <div ref={sec5.ref} className="relative py-28 lg:py-36 bg-elif-cream overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-elif-lake/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-elif-green/[0.02] rounded-full blur-3xl" />

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text Content */}
            <div className={`transition-all duration-[800ms] ${sec5.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <span className="text-elif-lake text-[13px] tracking-[4px] font-medium">ABOUT</span>
              <h2 className="text-[32px] lg:text-[44px] font-bold text-gray-900 mt-4 mb-6 leading-tight" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                일상이 새로워 <span className="text-elif-green">지다.</span>
              </h2>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-16 h-[2px] bg-elif-lake" />
                <div className="w-2 h-2 rounded-full bg-elif-lake/40" />
              </div>
              <p className="text-gray-500 text-[15px] leading-[1.9] mb-4">
                엘리프 성성호수공원은 성성호수공원 바로 앞에 위치하여
                탁 트인 호수공원 조망과 쾌적한 자연환경을 누릴 수 있습니다.
              </p>
              <p className="text-gray-500 text-[15px] leading-[1.9] mb-10">
                계룡건설산업이 선보이는 엘리프 브랜드로
                새로운 라이프스타일과 프리미엄 주거 가치를 제공합니다.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: "TBD", unit: "세대", desc: "총 세대수" },
                  { num: "TBD", unit: "세대", desc: "일반분양" },
                  { num: "TBD", unit: "type", desc: "평면구성" },
                  { num: "0", unit: "분", desc: "호수공원 도보" },
                ].map((stat, i) => (
                  <div key={i} className="py-5 border-l-2 border-elif-lake/30 pl-5 hover:border-elif-lake transition-colors duration-300">
                    <p className="text-elif-green text-[32px] font-bold leading-none">
                      {stat.num}
                      <span className="text-elif-lake text-[14px] font-medium ml-1">{stat.unit}</span>
                    </p>
                    <p className="text-gray-400 text-[12px] mt-2 tracking-wide">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <div className={`relative transition-all duration-[800ms] delay-300 ${sec5.visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <div className="relative aspect-[4/5] overflow-hidden shadow-2xl rounded-2xl">
                <Image
                  src="/images/nature-park.jpg"
                  alt="성성호수공원 자연환경"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-elif-green/40 via-transparent to-transparent" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-elif-green text-white p-7 lg:p-9 shadow-2xl max-w-[280px] rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-[1px] bg-elif-lake" />
                  <p className="text-elif-lake text-[11px] tracking-[3px] font-semibold">LOCATION</p>
                </div>
                <p className="text-[18px] font-bold leading-snug">
                  성성호수공원 앞
                  <br />
                  프리미엄 주거
                </p>
              </div>
              {/* Decorative Organic Blob */}
              <div className="absolute -top-5 -right-5 w-40 h-40 bg-elif-lake/10 rounded-full blur-2xl organic-blob gentle-float -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* ===== Gallery Section - 호수공원 뷰 ===== */}
      <div className="relative bg-white py-24 lg:py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-elif-lake text-[12px] tracking-[5px] font-medium">LAKE PARK VIEW</span>
            <h2 className="text-[28px] lg:text-[38px] font-bold text-gray-900 mt-4 leading-tight" style={{ fontFamily: "'Noto Serif KR', serif" }}>
              호수공원의 사계
            </h2>
            <div className="flex items-center justify-center gap-3 mt-5">
              <span className="w-10 h-[1px] bg-elif-lake/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-elif-lake" />
              <span className="w-10 h-[1px] bg-elif-lake/40" />
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Large Image */}
            <div className="md:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden group">
              <Image
                src="/images/lake-view.jpg"
                alt="호수공원 전경"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-[11px] tracking-[2px] font-medium rounded-full mb-2">PANORAMA</span>
                <p className="text-white text-[20px] lg:text-[24px] font-bold">탁 트인 호수공원 조망</p>
              </div>
            </div>

            {/* Right Column - 2 stacked images */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden group">
                <Image
                  src="/images/about-nature.jpg"
                  alt="자연 풍경"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-[11px] tracking-[2px] font-medium rounded-full mb-1.5">NATURE</span>
                  <p className="text-white text-[17px] font-bold">자연이 선사하는 힐링</p>
                </div>
              </div>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden group">
                <Image
                  src="/images/hero-lake.jpg"
                  alt="호수 풍경"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-[11px] tracking-[2px] font-medium rounded-full mb-1.5">LAKE</span>
                  <p className="text-white text-[17px] font-bold">호수가 있는 일상</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 0분의 가치 - 호수공원 앞 ===== */}
      <div ref={sec1.ref} className="relative py-28 lg:py-36 bg-[#f8f8f5] overflow-hidden">
        {/* 배경 대형 텍스트 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="text-[180px] lg:text-[280px] font-black text-gray-100/50 tracking-tight leading-none">0</span>
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
          {/* 섹션 타이틀 */}
          <div className={`text-center mb-20 transition-all duration-[800ms] ${sec1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="text-elif-lake text-[13px] tracking-[4px] font-medium">VALUE OF ZERO</span>
            <h2 className="text-[30px] lg:text-[42px] font-bold text-gray-900 mt-4 leading-tight" style={{ fontFamily: "'Noto Serif KR', serif" }}>
              성성호수공원 앞,
              <br />
              엘리프에서 누리다
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="w-12 h-[1px] bg-elif-lake/40" />
              <span className="w-2 h-2 rounded-full bg-elif-lake" />
              <span className="w-12 h-[1px] bg-elif-lake/40" />
            </div>
          </div>

          {/* 초역세권 / 초공세권 양쪽 카드 */}
          <div className={`grid md:grid-cols-2 gap-0 mb-20 transition-all duration-[800ms] delay-200 ${sec1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {/* 호수공원 앞 */}
            <div className="group relative bg-elif-green p-10 lg:p-14 overflow-hidden rounded-l-2xl rounded-t-2xl md:rounded-t-none md:rounded-l-2xl">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-elif-lake/[0.03] rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-elif-lake/[0.03] rounded-full" />
              <span className="absolute top-6 right-8 text-[120px] font-black text-white/[0.03] leading-none">0</span>
              <div className="relative">
                <span className="inline-block px-3 py-1 bg-elif-lake/10 text-elif-lake text-[11px] tracking-[3px] font-semibold rounded-full">LAKE PARK</span>
                <p className="text-white/50 text-[14px] mt-5 mb-1">내집앞 호수공원</p>
                <h3 className="text-white text-[36px] lg:text-[42px] font-bold leading-tight" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                  호수공원 앞
                </h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-elif-lake to-elif-lake/0 mt-6 mb-7" />
                <p className="text-white/55 text-[14px] leading-[2]">
                  성성호수공원 바로 앞에 위치하여
                  <br />
                  탁 트인 호수공원 조망!
                  <br />
                  자연과 함께하는 힐링 라이프
                </p>
                <div className="mt-10 flex items-center gap-4">
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-elif-lake/60 text-elif-lake text-[24px] font-bold group-hover:bg-elif-lake/10 transition-all duration-500">
                    0
                  </span>
                  <div>
                    <span className="text-white/70 text-[15px] font-semibold">분</span>
                    <p className="text-white/35 text-[12px] mt-0.5">거리의 역세권</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 에코 라이프 */}
            <div className="group relative bg-[#eef3ee] p-10 lg:p-14 overflow-hidden rounded-b-2xl md:rounded-b-none md:rounded-r-2xl">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-green-600/[0.04] rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-600/[0.04] rounded-full" />
              <span className="absolute top-6 right-8 text-[120px] font-black text-green-800/[0.04] leading-none">1</span>
              <div className="relative">
                <span className="inline-block px-3 py-1 bg-green-700/10 text-green-700 text-[11px] tracking-[3px] font-semibold rounded-full">NATURE</span>
                <p className="text-gray-500 text-[14px] mt-5 mb-1">자연과 함께</p>
                <h3 className="text-gray-900 text-[36px] lg:text-[42px] font-bold leading-tight" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                  에코 라이프
                </h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-green-600 to-green-600/0 mt-6 mb-7" />
                <p className="text-gray-500 text-[14px] leading-[2]">
                  성성호수공원의 풍요로운 자연환경,
                  <br />
                  도심 속에서 누리는 쾌적한 힐링,
                  <br />
                  단지에서 나오면 바로 펼쳐지는 호수공원
                </p>
                <div className="mt-10 flex items-center gap-4">
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-green-600/60 text-green-700 text-[24px] font-bold group-hover:bg-green-600/10 transition-all duration-500">
                    1
                  </span>
                  <div>
                    <span className="text-gray-700 text-[15px] font-semibold">분</span>
                    <p className="text-gray-400 text-[12px] mt-0.5">거리의 공세권</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 설명 텍스트 */}
          <div className={`text-center max-w-[700px] mx-auto transition-all duration-[800ms] delay-400 ${sec1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="text-gray-400 text-[15px] leading-[2.2] tracking-wide">
              성성호수공원 바로 앞에서 누리는 탁 트인 자연 조망,
              <br />
              편리한 교통과 풍부한 생활 인프라,
              <br />
              엘리프만의 차별화된 프리미엄 주거 라이프
            </p>
          </div>
        </div>
      </div>

      {/* ===== PREMIUM 4 Highlights ===== */}
      <div ref={sec2.ref} className="relative bg-elif-green-dark py-28 lg:py-36 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 pattern-waves opacity-10" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className={`text-center mb-20 transition-all duration-[800ms] ${sec2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="text-elif-lake text-[12px] tracking-[5px] font-medium">PREMIUM 4</span>
            <h2 className="text-[30px] lg:text-[40px] font-bold text-white mt-5 leading-tight" style={{ fontFamily: "'Noto Serif KR', serif" }}>
              걸어서 누리는 완성된 프리미엄
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="w-12 h-[1px] bg-elif-lake/30" />
              <span className="w-1.5 h-1.5 rounded-full bg-elif-lake" />
              <span className="w-12 h-[1px] bg-elif-lake/30" />
            </div>
          </div>

          {/* 4개 카드 그리드 */}
          <div className={`grid md:grid-cols-2 gap-4 transition-all duration-[800ms] delay-200 ${sec2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {[
              {
                num: "01",
                badge: "도보 0분",
                tag: "TRANSPORTATION",
                title: "교통중심",
                desc: "편리한 광역교통망과 우수한 도로 접근성으로 천안 주요 지역까지 빠르게 연결",
                gradient: "from-[#1a3a2c] to-[#2a5a42]",
                icon: (
                  <svg className="w-8 h-8 text-elif-lake/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                ),
              },
              {
                num: "02",
                badge: "도보 1분",
                tag: "NATURE",
                title: "자연중심",
                desc: "성성호수공원 바로 앞! 탁 트인 호수 조망과 풍요로운 자연환경의 힐링 라이프",
                bgImage: "/images/lake-view.jpg",
                icon: (
                  <svg className="w-8 h-8 text-elif-lake/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
              {
                num: "03",
                badge: "도보 2분",
                tag: "LIVING",
                title: "생활중심",
                desc: "대형마트, 상업시설 등 편리한 생활 인프라가 가까이",
                gradient: "from-[#2a4a3a] to-[#3a6a52]",
                icon: (
                  <svg className="w-8 h-8 text-elif-lake/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
              {
                num: "04",
                badge: "도보 10분",
                tag: "EDUCATION",
                title: "교육중심",
                desc: "도보권 내 초·고등학교 설립 예정, 우수한 교육 환경",
                gradient: "from-[#1e3830] to-[#2e5845]",
                icon: (
                  <svg className="w-8 h-8 text-elif-lake/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`group relative h-[340px] overflow-hidden cursor-default rounded-xl ${sec2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: sec2.visible ? `${200 + i * 100}ms` : "0ms", transitionDuration: "800ms" }}
              >
                {/* Background - Image or Gradient */}
                <div className="absolute inset-0">
                  {"bgImage" in item && item.bgImage ? (
                    <>
                      <Image
                        src={item.bgImage}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f17]/80 via-[#0a1f17]/30 to-[#0a1f17]/10" />
                    </>
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${"gradient" in item ? item.gradient : "from-elif-green-dark to-elif-green"}`}>
                      {/* Subtle pattern */}
                      <div className="absolute inset-0 opacity-5 pattern-leaves" />
                      {/* Icon decoration */}
                      <div className="absolute top-8 right-8 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                        {item.icon}
                      </div>
                    </div>
                  )}
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f17]/60 via-transparent to-transparent" />

                {/* Numbering */}
                <span className="absolute top-5 right-7 text-[80px] font-black text-white/[0.04] leading-none select-none">{item.num}</span>

                {/* Content */}
                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-elif-lake/70 text-[10px] tracking-[4px] font-medium">{item.tag}</span>
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-elif-lake/90 text-white text-[10px] font-bold tracking-[1px] rounded-full mb-4">
                      {item.badge}
                    </span>
                    <h3 className="text-white text-[26px] lg:text-[30px] font-bold mb-2">{item.title}</h3>
                    <p className="text-white/55 text-[13px] leading-[1.8] max-w-[400px]">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CTA Section ===== */}
      <div ref={sec6.ref} className="relative py-28 lg:py-36 overflow-hidden">
        {/* Full background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/nature-park.jpg"
            alt="자연 배경"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-elif-green/80" />
          <div className="absolute inset-0 pattern-waves opacity-15" />
        </div>

        <div className={`relative max-w-[800px] mx-auto px-6 text-center transition-all duration-[800ms] ${sec6.visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-elif-lake/50" />
            <p className="text-elif-lake text-[13px] tracking-[4px] font-medium">CONTACT</p>
            <span className="w-8 h-[1px] bg-elif-lake/50" />
          </div>
          <h2 className="text-white text-[36px] lg:text-[50px] font-bold mb-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>분양문의</h2>
          <p className="text-white/40 text-[15px] mb-12 leading-relaxed">
            엘리프 성성호수공원에 대해
            <br className="sm:hidden" /> 자세한 상담을 받아보세요.
          </p>
          <a
            href="tel:1800-0000"
            className="group inline-flex items-center gap-3 px-14 py-5 bg-white text-elif-green text-[22px] font-bold tracking-wider transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:scale-[1.02] rounded-full"
          >
            <svg className="w-6 h-6 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            1800-0000
          </a>
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-white/20 text-[13px]">
            <span>시공 | 계룡건설산업(주)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
