"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HomeSection() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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
          className="absolute inset-0 scale-110"
          style={{ transform: `scale(1.1) translateY(${scrollY * 0.15}px)` }}
        >
          <Image
            src="/images/hero-rendering.jpg"
            alt="갈산역 중앙하이츠 조감도"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/85 via-[#0a1628]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-[#0a1628]/30" />

        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
            <div
              className={`max-w-[650px] transition-all duration-[1200ms] ease-out ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Badge */}
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-block w-12 h-[1px] bg-gold" />
                <span className="text-gold text-[13px] tracking-[4px] font-medium uppercase">
                  Premium Residence
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-white mb-6">
                <span className="block text-[42px] lg:text-[56px] xl:text-[64px] font-extralight leading-[1.15] tracking-tight">
                  프리미엄 주거의
                </span>
                <span className="block text-[42px] lg:text-[56px] xl:text-[64px] font-bold leading-[1.15] tracking-tight mt-1">
                  새로운 기준
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className={`text-white/70 text-[15px] lg:text-[17px] leading-[1.8] mb-10 max-w-[480px] transition-all duration-[1200ms] delay-300 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                갈산역세권의 뛰어난 입지 위에
                <br />
                품격 있는 주거 공간을 완성합니다.
              </p>

              {/* Brand Name */}
              <div
                className={`flex items-center gap-4 transition-all duration-[1200ms] delay-500 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <span className="inline-block px-4 py-1.5 border border-gold/60 text-gold text-[12px] font-medium tracking-[3px]">
                  갈산역
                </span>
                <span className="text-white text-[28px] lg:text-[32px] font-bold tracking-tight">
                  중앙하이츠
                </span>
              </div>

              {/* CTA Button */}
              <div
                className={`mt-12 transition-all duration-[1200ms] delay-700 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <button className="group flex items-center gap-3 px-8 py-4 bg-gold/90 hover:bg-gold text-white text-[14px] font-semibold tracking-wider transition-all duration-300 hover:gap-5">
                  관심고객 사전등록
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
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
          <span className="text-white/40 text-[11px] tracking-[3px] uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent scroll-indicator" />
        </div>

        {/* Side Info Bar */}
        <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6">
          <div className="w-[1px] h-16 bg-white/20" />
          <span className="text-white/40 text-[11px] tracking-[2px] writing-vertical">1688-0458</span>
          <div className="w-[1px] h-16 bg-white/20" />
        </div>
      </div>

      {/* ===== Key Info Strip ===== */}
      <div className="relative bg-navy text-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4">
          {[
            { label: "위치", value: "갈산역세권", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
            { label: "규모", value: "지하2층~지상20층", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
            { label: "세대수", value: "총 128세대", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
            { label: "문의전화", value: "1688-0458", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-8 py-6 border-r border-white/10 last:border-r-0 border-b lg:border-b-0 hover:bg-white/5 transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>
              <div>
                <p className="text-white/50 text-[11px] tracking-wider font-medium">{item.label}</p>
                <p className="text-white text-[15px] font-semibold mt-0.5">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== About Section ===== */}
      <div className="relative py-24 lg:py-32 bg-white overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1a2744 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text Content */}
            <div>
              <span className="text-gold text-[13px] tracking-[4px] font-medium">ABOUT</span>
              <h2 className="text-[32px] lg:text-[40px] font-bold text-gray-900 mt-4 mb-6 leading-tight">
                도심 속 프리미엄
                <br />
                <span className="text-navy">라이프스타일</span>
              </h2>
              <div className="w-16 h-[2px] bg-gold mb-8" />
              <p className="text-gray-500 text-[15px] leading-[1.9] mb-8">
                갈산역 중앙하이츠는 뛰어난 교통 인프라와 풍부한 생활 편의시설을 갖춘
                프리미엄 주거 단지입니다. 입주민의 삶의 질을 한 차원 높이는
                특별한 공간을 만들어갑니다.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: "128", unit: "세대", desc: "프리미엄 주거공간" },
                  { num: "20", unit: "층", desc: "랜드마크 설계" },
                  { num: "2", unit: "개동", desc: "101동 · 102동" },
                  { num: "3", unit: "타입", desc: "다양한 평면 구성" },
                ].map((stat, i) => (
                  <div key={i} className="py-4 border-l-2 border-gold/30 pl-5">
                    <p className="text-navy text-[28px] font-bold">
                      {stat.num}
                      <span className="text-gold text-[14px] font-medium ml-1">{stat.unit}</span>
                    </p>
                    <p className="text-gray-400 text-[12px] mt-1">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/hero-rendering.jpg"
                  alt="갈산역 중앙하이츠"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-navy text-white p-6 lg:p-8 shadow-2xl max-w-[260px]">
                <p className="text-gold text-[12px] tracking-[3px] font-medium mb-2">LOCATION</p>
                <p className="text-[18px] font-bold leading-snug">
                  갈산역세권
                  <br />
                  중심입지
                </p>
              </div>
              {/* Decorative Frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold/20 -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* ===== Features Highlights ===== */}
      <div className="bg-[#f8f7f4] py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-gold text-[13px] tracking-[4px] font-medium">PREMIUM</span>
            <h2 className="text-[28px] lg:text-[36px] font-bold text-gray-900 mt-4">
              특별한 가치를 담다
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                title: "역세권 프리미엄",
                desc: "갈산역 도보 거리의 뛰어난 교통 접근성으로 편리한 출퇴근과 생활이 가능합니다."
              },
              {
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                title: "프리미엄 커뮤니티",
                desc: "입주민 전용 피트니스, 커뮤니티 라운지 등 품격 있는 생활 편의시설을 제공합니다."
              },
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "안심 설계",
                desc: "최신 보안 시스템과 안전 설계로 입주민의 안전하고 쾌적한 생활을 보장합니다."
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group bg-white p-10 hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gold/20 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-navy/10 transition-colors">
                  <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-[18px] font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-[14px] leading-[1.8]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
