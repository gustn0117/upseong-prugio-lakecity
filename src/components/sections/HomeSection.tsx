"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";

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

/* 카운트업 애니메이션 */
function useCountUp(end: number, duration = 2000, trigger = false) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!trigger || started.current) return;
    started.current = true;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(end * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, end, duration]);
  return count;
}

export default function HomeSection() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const sec1 = useInView(0.12);
  const sec2 = useInView(0.08);
  const sec3 = useInView(0.12);
  const sec4 = useInView(0.12);
  const sec5 = useInView(0.12);
  const sec6 = useInView(0.12);

  const count126 = useCountUp(126, 2000, sec5.visible);
  const count50 = useCountUp(50, 1800, sec5.visible);
  const count59 = useCountUp(59, 1600, sec5.visible);

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
          style={{ transform: `scale(1.1) translateY(${scrollY * 0.12}px)` }}
        >
          <Image
            src="/images/hero-rendering.jpg"
            alt="중앙하이츠 갈산역 센트럴 조감도"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/50 to-[#0a1628]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-[#0a1628]/40" />

        {/* Subtle Vignette */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(10,22,40,0.4) 100%)'
        }} />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
            <div
              className={`max-w-[700px] transition-all duration-[1500ms] ease-out ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              {/* Badge */}
              <div className="flex items-center gap-3 mb-10">
                <span className="inline-block w-14 h-[1px] bg-gradient-to-r from-gold to-gold/0" />
                <span className="text-gold/90 text-[12px] tracking-[5px] font-light uppercase">
                  Premium Residence
                </span>
              </div>

              {/* Main Quote */}
              <div className="mb-8">
                <p className="text-white/50 text-[15px] lg:text-[17px] font-light tracking-wider mb-6" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                  &ldquo; 갈산역 &lsquo;0분&rsquo;의 가치, 중앙하이츠에서 누린다 &rdquo;
                </p>
                <h1 className="text-white">
                  <span className="block text-[36px] lg:text-[50px] xl:text-[58px] font-extralight leading-[1.15] tracking-[-0.02em]">
                    걸어서 누리는
                  </span>
                  <span className="block text-[36px] lg:text-[50px] xl:text-[58px] font-bold leading-[1.15] tracking-[-0.02em] mt-2">
                    완성된 <span className="text-gold">프리미엄</span>
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p
                className={`text-white/45 text-[14px] lg:text-[15px] leading-[2] mb-12 max-w-[480px] font-light transition-all duration-[1500ms] delay-300 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                내집앞 갈산역 초역세권, 내집앞 수변공원 초공세권
                <br />
                총 126세대 / 일반분양 50세대 / 59type 단일
              </p>

              {/* Brand Name */}
              <div
                className={`flex items-center gap-4 mb-14 transition-all duration-[1500ms] delay-500 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <span className="inline-block px-4 py-1.5 border border-gold/50 text-gold/90 text-[11px] font-medium tracking-[3px]">
                  갈산역
                </span>
                <span className="text-white text-[26px] lg:text-[30px] font-bold tracking-[-0.01em]">
                  중앙하이츠센트럴
                </span>
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-wrap items-center gap-4 transition-all duration-[1500ms] delay-700 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <button className="group flex items-center gap-3 px-10 py-4.5 bg-gold hover:bg-gold-light text-white text-[13px] font-semibold tracking-[1px] uppercase transition-all duration-500 hover:shadow-xl hover:shadow-gold/15">
                  관심고객 사전등록
                  <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <a
                  href="tel:1800-5636"
                  className="flex items-center gap-2.5 px-7 py-4.5 border border-white/20 text-white/70 hover:border-gold/50 hover:text-gold text-[13px] font-medium tracking-[1px] transition-all duration-500"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  1800-5636
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-[1500ms] delay-[1200ms] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-white/30 text-[10px] tracking-[4px] uppercase font-light">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent scroll-indicator" />
        </div>

        {/* Side Info Bar */}
        <div className="absolute right-8 lg:right-14 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6">
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/15 to-transparent" />
          <span className="text-white/25 text-[10px] tracking-[3px] font-light" style={{ writingMode: 'vertical-rl' }}>1800-5636</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/15 to-transparent" />
        </div>
      </div>

      {/* ===== Key Info Strip ===== */}
      <div className="relative bg-[#0e1d33] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-[#0e1d33] to-navy" />
        <div className="relative max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4">
          {[
            { label: "위치", value: "인천 부평구 부평대로 258", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
            { label: "총 세대수", value: "126세대 (일반 50세대)", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
            { label: "타입", value: "59type 단일", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
            { label: "분양문의", value: "1800-5636", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
          ].map((item, i) => (
            <div
              key={i}
              className="group flex items-center gap-4 px-8 py-6 border-r border-white/[0.06] last:border-r-0 border-b lg:border-b-0 hover:bg-white/[0.03] transition-all duration-500 cursor-default"
            >
              <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:border-gold/40 transition-all duration-500">
                <svg className="w-4.5 h-4.5 text-gold/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>
              <div>
                <p className="text-white/30 text-[10px] tracking-[2px] font-light uppercase">{item.label}</p>
                <p className="text-white/90 text-[14px] font-medium mt-1 group-hover:text-gold transition-colors duration-500">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
        {/* 하단 골드 라인 */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      </div>

      {/* ===== 0분의 가치 - 초역세권 · 초공세권 ===== */}
      <div ref={sec1.ref} className="relative py-32 lg:py-40 bg-[#fafaf8] overflow-hidden">
        {/* 배경 대형 텍스트 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="text-[200px] lg:text-[320px] font-black text-black/[0.02] tracking-tight leading-none">0</span>
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
          {/* 섹션 타이틀 */}
          <div className={`text-center mb-24 transition-all duration-[1000ms] ${sec1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <span className="text-gold/80 text-[11px] tracking-[6px] font-light uppercase">Value of Zero</span>
            <h2 className="text-[28px] lg:text-[40px] font-bold text-gray-900 mt-6 leading-tight tracking-[-0.02em]">
              갈산역 <span className="text-navy">「0분」</span>의 가치
            </h2>
            <p className="text-gray-400 text-[15px] font-light mt-4">중앙하이츠에서 누린다</p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold/30" />
              <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
              <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold/30" />
            </div>
          </div>

          {/* 초역세권 / 초공세권 양쪽 카드 */}
          <div className={`grid md:grid-cols-2 gap-[1px] bg-gray-200 mb-24 overflow-hidden transition-all duration-[1000ms] delay-200 ${sec1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            {/* 초역세권 */}
            <div className="group relative bg-[#111d32] p-12 lg:p-16 overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-gold/[0.02] rounded-full blur-xl" />
              <span className="absolute top-8 right-10 text-[140px] font-black text-white/[0.02] leading-none select-none">0</span>
              <div className="relative">
                <span className="inline-block px-3.5 py-1 bg-gold/10 text-gold text-[10px] tracking-[4px] font-medium">STATION</span>
                <p className="text-white/40 text-[13px] mt-6 mb-2 font-light tracking-wide">내집앞 갈산역</p>
                <h3 className="text-white text-[34px] lg:text-[40px] font-bold leading-tight tracking-[-0.02em]">
                  초역세권
                </h3>
                <div className="w-14 h-[1px] bg-gradient-to-r from-gold to-gold/0 mt-7 mb-8" />
                <p className="text-white/45 text-[14px] leading-[2.2] font-light">
                  단지 바로 앞에서 이용가능한 지하철,
                  <br />
                  인천1호선 갈산역 도보 1분!
                  <br />
                  서울7호선 직결운행으로 서울 주요 업무지구까지
                </p>
                <div className="mt-12 flex items-center gap-5">
                  <span className="inline-flex items-center justify-center w-[72px] h-[72px] rounded-full border border-gold/40 text-gold text-[28px] font-light group-hover:bg-gold/5 transition-all duration-700">
                    0
                  </span>
                  <div>
                    <span className="text-white/60 text-[16px] font-medium">분</span>
                    <p className="text-white/25 text-[11px] mt-1 tracking-wide font-light">거리의 역세권</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 초공세권 */}
            <div className="group relative bg-[#f0f4ee] p-12 lg:p-16 overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-green-600/[0.03] rounded-full blur-xl" />
              <span className="absolute top-8 right-10 text-[140px] font-black text-green-800/[0.03] leading-none select-none">1</span>
              <div className="relative">
                <span className="inline-block px-3.5 py-1 bg-green-700/8 text-green-700 text-[10px] tracking-[4px] font-medium">NATURE</span>
                <p className="text-gray-400 text-[13px] mt-6 mb-2 font-light tracking-wide">내집앞 수변공원</p>
                <h3 className="text-gray-900 text-[34px] lg:text-[40px] font-bold leading-tight tracking-[-0.02em]">
                  초공세권
                </h3>
                <div className="w-14 h-[1px] bg-gradient-to-r from-green-600 to-green-600/0 mt-7 mb-8" />
                <p className="text-gray-500/80 text-[14px] leading-[2.2] font-light">
                  걸어서 누리는 수변공원과 생태하천을 통한
                  <br />
                  쾌적한 자연환경,
                  <br />
                  단지에서 나오면 바로 펼쳐지는 갈산천수변공원
                </p>
                <div className="mt-12 flex items-center gap-5">
                  <span className="inline-flex items-center justify-center w-[72px] h-[72px] rounded-full border border-green-600/40 text-green-700 text-[28px] font-light group-hover:bg-green-600/5 transition-all duration-700">
                    1
                  </span>
                  <div>
                    <span className="text-gray-600 text-[16px] font-medium">분</span>
                    <p className="text-gray-400 text-[11px] mt-1 tracking-wide font-light">거리의 공세권</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 설명 텍스트 */}
          <div className={`text-center max-w-[600px] mx-auto transition-all duration-[1000ms] delay-400 ${sec1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <p className="text-gray-400 text-[14px] leading-[2.4] tracking-wide font-light">
              단지 바로 앞에서 이용가능한 지하철,
              <br />
              걸어서 누리는 수변공원과 생태하천을 통한 쾌적한 자연환경,
              <br />
              앞마당에 펼쳐진 중심상업지구를 통한 완벽한 생활인프라
            </p>
          </div>
        </div>
      </div>

      {/* ===== PREMIUM 4 Highlights ===== */}
      <div ref={sec2.ref} className="bg-[#0a1525] py-32 lg:py-40 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className={`text-center mb-20 transition-all duration-[1000ms] ${sec2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <span className="text-gold/70 text-[11px] tracking-[6px] font-light uppercase">Premium 4</span>
            <h2 className="text-[28px] lg:text-[38px] font-bold text-white mt-6 leading-tight tracking-[-0.02em]">
              걸어서 누리는 완성된 프리미엄
            </h2>
            <div className="flex items-center justify-center gap-4 mt-8">
              <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
              <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold/20" />
            </div>
          </div>

          {/* 비대칭 레이아웃: 좌측 대형 + 우측 2개 스택 */}
          <div className={`grid lg:grid-cols-12 gap-3 transition-all duration-[1000ms] delay-200 ${sec2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            {/* 메인 카드 - 교통중심 (좌측 대형) */}
            <div className="lg:col-span-7 group relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] lg:min-h-[560px] overflow-hidden">
              <div className="absolute inset-0 bg-[#0d1f35]">
                <Image
                  src="/images/premium-transport.jpg"
                  alt="교통중심"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-50">
                  <div className="w-14 h-14 rounded-xl border-2 border-dashed border-white/15 flex items-center justify-center">
                    <svg className="w-7 h-7 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="bg-white/8 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/8">
                    <p className="text-white/60 text-[11px] font-mono">/images/premium-transport.jpg</p>
                    <p className="text-white/30 text-[10px] font-mono text-center mt-0.5">800 x 560 px</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              {/* 넘버링 */}
              <span className="absolute top-8 right-10 text-[120px] font-black text-white/[0.04] leading-none select-none">01</span>
              <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-gold/60 text-[10px] tracking-[4px] font-light uppercase">Transportation</span>
                </div>
                <div>
                  <span className="inline-block px-3.5 py-1 bg-gold text-white text-[10px] font-bold tracking-[2px] uppercase mb-5">
                    도보 0분
                  </span>
                  <h3 className="text-white text-[30px] lg:text-[38px] font-bold mb-4 tracking-[-0.02em]">교통중심</h3>
                  <p className="text-white/50 text-[14px] leading-[1.9] max-w-[420px] font-light">
                    갈산역 도보 1분! 인천1호선 운행 시 7호선 직결운행으로
                    <br />서울 4대 중심 업무지구까지 한 번에
                  </p>
                </div>
              </div>
            </div>

            {/* 우측 2개 스택 */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {/* 자연중심 */}
              <div className="group relative flex-1 min-h-[270px] overflow-hidden">
                <div className="absolute inset-0 bg-[#0d1f35]">
                  <Image
                    src="/images/premium-nature.jpg"
                    alt="자연중심"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-50">
                    <div className="w-12 h-12 rounded-xl border-2 border-dashed border-white/15 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="bg-white/8 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/8">
                      <p className="text-white/60 text-[11px] font-mono">/images/premium-nature.jpg</p>
                      <p className="text-white/30 text-[10px] font-mono text-center mt-0.5">560 x 270 px</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <span className="absolute top-5 right-7 text-[80px] font-black text-white/[0.04] leading-none select-none">02</span>
                <div className="absolute inset-0 p-7 lg:p-9 flex flex-col justify-between">
                  <span className="text-gold/60 text-[10px] tracking-[4px] font-light uppercase">Nature</span>
                  <div>
                    <span className="inline-block px-3 py-0.5 bg-gold text-white text-[10px] font-bold tracking-[2px] uppercase mb-3">
                      도보 1분
                    </span>
                    <h3 className="text-white text-[24px] lg:text-[28px] font-bold mb-2 tracking-[-0.02em]">자연중심</h3>
                    <p className="text-white/45 text-[13px] leading-[1.8] font-light">갈산천수변공원까지 1분! 자연친화적 주거환경</p>
                  </div>
                </div>
              </div>

              {/* 생활중심 */}
              <div className="group relative flex-1 min-h-[270px] overflow-hidden">
                <div className="absolute inset-0 bg-[#0d1f35]">
                  <Image
                    src="/images/premium-living.jpg"
                    alt="생활중심"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-50">
                    <div className="w-12 h-12 rounded-xl border-2 border-dashed border-white/15 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="bg-white/8 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/8">
                      <p className="text-white/60 text-[11px] font-mono">/images/premium-living.jpg</p>
                      <p className="text-white/30 text-[10px] font-mono text-center mt-0.5">560 x 270 px</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <span className="absolute top-5 right-7 text-[80px] font-black text-white/[0.04] leading-none select-none">03</span>
                <div className="absolute inset-0 p-7 lg:p-9 flex flex-col justify-between">
                  <span className="text-gold/60 text-[10px] tracking-[4px] font-light uppercase">Living</span>
                  <div>
                    <span className="inline-block px-3 py-0.5 bg-gold text-white text-[10px] font-bold tracking-[2px] uppercase mb-3">
                      도보 2분
                    </span>
                    <h3 className="text-white text-[24px] lg:text-[28px] font-bold mb-2 tracking-[-0.02em]">생활중심</h3>
                    <p className="text-white/45 text-[13px] leading-[1.8] font-light">롯데마트, 부평문화의거리 등 풍부한 생활 인프라</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 하단 교육중심 - 풀 와이드 배너 */}
          <div className={`mt-3 group relative h-[240px] lg:h-[280px] overflow-hidden transition-all duration-[1000ms] delay-400 ${sec2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="absolute inset-0 bg-[#0d1f35]">
              <Image
                src="/images/premium-edu.jpg"
                alt="교육중심"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                sizes="100vw"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-50">
                <div className="w-12 h-12 rounded-xl border-2 border-dashed border-white/15 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="bg-white/8 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/8">
                  <p className="text-white/60 text-[11px] font-mono">/images/premium-edu.jpg</p>
                  <p className="text-white/30 text-[10px] font-mono text-center mt-0.5">1400 x 280 px</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/60" />
            <span className="absolute top-6 right-10 text-[100px] font-black text-white/[0.04] leading-none select-none">04</span>
            <div className="absolute inset-0 p-8 lg:p-12 flex items-end lg:items-center">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
                <div>
                  <span className="text-gold/60 text-[10px] tracking-[4px] font-light uppercase">Education</span>
                  <div className="flex items-center gap-5 mt-3">
                    <span className="inline-block px-3 py-0.5 bg-gold text-white text-[10px] font-bold tracking-[2px] uppercase">
                      도보 10분
                    </span>
                    <h3 className="text-white text-[26px] lg:text-[32px] font-bold tracking-[-0.02em]">교육중심</h3>
                  </div>
                </div>
                <p className="text-white/45 text-[14px] leading-[1.9] font-light mt-4 lg:mt-0 max-w-[400px]">
                  갈산초, 부평동중, 부평여고 등 우수한 교육 환경과 학원가가 가까이
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 교통 인프라 ===== */}
      <div ref={sec3.ref} className="relative bg-[#111d32] py-28 lg:py-36 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className={`text-center mb-20 transition-all duration-[1000ms] ${sec3.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <span className="text-gold/70 text-[11px] tracking-[6px] font-light uppercase">Transportation</span>
            <h2 className="text-[28px] lg:text-[36px] font-bold text-white mt-6 tracking-[-0.02em]">
              더 넓은 세상을 잇는 교통인프라
            </h2>
            <p className="text-white/30 text-[13px] mt-4 font-light tracking-wide">인천1호선 · 서울7호선 · GTX-B</p>
          </div>

          <div className="grid md:grid-cols-3 gap-[1px] bg-white/[0.06]">
            {[
              {
                num: "01",
                title: "갈산역 이용",
                desc: "사당역까지 바로 갈산역 이용",
                sub: "인천1호선 갈산역 도보 1분",
                accent: "from-blue-400"
              },
              {
                num: "02",
                title: "부평구청역 이용",
                desc: "1정거장, 약 도보 5분이면 서울7호선 부평구청역 이용",
                sub: "서울7호선 환승",
                accent: "from-emerald-400"
              },
              {
                num: "03",
                title: "부평역 이용",
                desc: "3정거장이면 서해라인 GTX-B(시행예정) 부평역 이용",
                sub: "GTX-B 노선 수혜",
                accent: "from-gold"
              },
            ].map((item, i) => (
              <div
                key={item.num}
                className={`relative p-10 lg:p-12 bg-[#111d32] group hover:bg-[#152540] transition-all duration-700 ${sec3.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: sec3.visible ? `${300 + i * 150}ms` : "0ms" }}
              >
                {/* 상단 그라데이션 라인 */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.accent} to-transparent opacity-60`} />
                <span className="text-gold/10 text-[72px] font-black absolute top-6 right-8 leading-none select-none group-hover:text-gold/20 transition-colors duration-700">{item.num}</span>
                <h3 className="text-white text-[20px] font-bold mb-4 mt-2 tracking-[-0.01em]">{item.title}</h3>
                <p className="text-white/45 text-[14px] leading-[1.8] mb-7 font-light">{item.desc}</p>
                <span className="inline-block px-4 py-1.5 bg-white/[0.04] border border-white/[0.08] text-gold/80 text-[11px] tracking-wide font-medium">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>

          {/* Quick Access Points */}
          <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/[0.06] transition-all duration-[1000ms] delay-500 ${sec3.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            {[
              { label: "경인고속도로", value: "IC 부평" },
              { label: "수도권제1순환", value: "중동IC" },
              { label: "인천1호선", value: "갈산역" },
              { label: "서울7호선", value: "부평구청역" },
            ].map((item, i) => (
              <div key={i} className="group text-center py-7 bg-[#111d32] hover:bg-[#152540] transition-all duration-500">
                <p className="text-white/20 text-[10px] tracking-[2px] uppercase font-light">{item.label}</p>
                <p className="text-white/80 text-[15px] font-semibold mt-2 group-hover:text-gold transition-colors duration-500">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== 생활 인프라 ===== */}
      <div ref={sec4.ref} className="py-28 lg:py-36 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className={`text-center mb-20 transition-all duration-[1000ms] ${sec4.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <span className="text-gold/70 text-[11px] tracking-[6px] font-light uppercase">Living Infra</span>
            <h2 className="text-[28px] lg:text-[36px] font-bold text-gray-900 mt-6 tracking-[-0.02em]">
              앞마당에 펼쳐진 완벽한 생활인프라
            </h2>
            <p className="text-gray-400 text-[13px] mt-4 font-light tracking-wide">
              중심상업지구를 통한 풍부한 생활편의시설
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "쇼핑",
                icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
                color: "bg-gold",
                borderColor: "border-gold/20",
                items: ["롯데마트 부평점", "부평역지하상가", "부평중앙시장", "부평문화의거리"],
              },
              {
                category: "교육",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                color: "bg-navy",
                borderColor: "border-navy/15",
                items: ["갈산초등학교", "부평동중학교", "부평여자고등학교", "인천부평고등학교"],
              },
              {
                category: "편의/의료",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5",
                color: "bg-emerald-600",
                borderColor: "border-emerald-600/15",
                items: ["부평구청", "부평경찰서", "인천의료원", "부평세림병원"],
              },
            ].map((group, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden border ${group.borderColor} hover:shadow-lg transition-all duration-700 hover:-translate-y-1 ${sec4.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: sec4.visible ? `${300 + i * 150}ms` : "0ms" }}
              >
                <div className={`h-[2px] ${group.color}`} />
                <div className="p-9">
                  <div className="flex items-center gap-3.5 mb-8">
                    <div className={`w-11 h-11 rounded-lg ${group.color} flex items-center justify-center`}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={group.icon} />
                      </svg>
                    </div>
                    <h3 className="text-[18px] font-bold text-gray-900 tracking-[-0.01em]">{group.category}</h3>
                  </div>
                  <ul className="space-y-4">
                    {group.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3.5 text-[14px] text-gray-500 font-light">
                        <span className="w-1 h-1 rounded-full bg-gold/50 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== About Section - 브랜드 ===== */}
      <div ref={sec5.ref} className="relative py-32 lg:py-40 bg-[#f8f7f4] overflow-hidden">
        {/* 배경 장식 */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute top-32 right-0 w-[500px] h-[500px] bg-gold/[0.015] rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-0 w-[400px] h-[400px] bg-navy/[0.015] rounded-full blur-3xl" />

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-center">
            {/* Text Content */}
            <div className={`transition-all duration-[1000ms] ${sec5.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
              <span className="text-gold/70 text-[11px] tracking-[6px] font-light uppercase">About</span>
              <h2 className="text-[32px] lg:text-[44px] font-bold text-gray-900 mt-6 mb-7 leading-[1.2] tracking-[-0.02em]">
                삶의 중심이
                <br />
                <span className="text-navy">된다.</span>
              </h2>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-20 h-[1px] bg-gradient-to-r from-gold to-gold/0" />
              </div>
              <p className="text-gray-500 text-[14px] leading-[2.2] mb-5 font-light">
                중앙하이츠 갈산역 센트럴은 갈산역 도보 1분의 초역세권에 위치하여
                인천1호선은 물론 서울7호선 직결운행으로 서울 주요 업무지구까지 한 번에 연결됩니다.
              </p>
              <p className="text-gray-500 text-[14px] leading-[2.2] mb-14 font-light">
                갈산천수변공원을 품은 자연친화적 주거환경과 롯데마트, 부평중앙시장 등
                풍부한 생활 인프라가 걸어서 누리는 완성된 프리미엄을 선사합니다.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { num: count126, unit: "세대", desc: "총 세대수" },
                  { num: count50, unit: "세대", desc: "일반분양" },
                  { num: count59, unit: "type", desc: "단일 평면" },
                  { num: 0, unit: "분", desc: "갈산역 초역세권", static: true },
                ].map((stat, i) => (
                  <div key={i} className="py-5 border-l border-gold/20 pl-6 hover:border-gold/50 transition-colors duration-500">
                    <p className="text-navy text-[34px] font-bold leading-none tracking-[-0.02em]">
                      {stat.static ? "0" : stat.num}
                      <span className="text-gold/70 text-[13px] font-light ml-1.5">{stat.unit}</span>
                    </p>
                    <p className="text-gray-400 text-[11px] mt-2.5 tracking-[1px] font-light uppercase">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <div className={`relative transition-all duration-[1000ms] delay-300 ${sec5.visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/hero-rendering.jpg"
                  alt="중앙하이츠 갈산역 센트럴"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-[#111d32] text-white p-8 lg:p-10 shadow-2xl max-w-[280px]">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-[1px] bg-gold/50" />
                  <p className="text-gold/80 text-[10px] tracking-[4px] font-light uppercase">Location</p>
                </div>
                <p className="text-[17px] font-bold leading-[1.6] tracking-[-0.01em]">
                  갈산역 초역세권
                  <br />
                  수변공원 초공세권
                </p>
              </div>
              {/* Decorative Frame */}
              <div className="absolute -top-6 -right-6 w-full h-full border border-gold/10 -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* ===== CTA Section ===== */}
      <div ref={sec6.ref} className="relative py-28 lg:py-36 bg-[#0a1525] overflow-hidden">
        {/* 배경 */}
        <div className="absolute inset-0 opacity-[0.06]">
          <Image
            src="/images/hero-rendering.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1525]/80 to-[#0a1525]" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

        <div className={`relative max-w-[700px] mx-auto px-6 text-center transition-all duration-[1000ms] ${sec6.visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"}`}>
          <span className="text-gold/60 text-[11px] tracking-[6px] font-light uppercase">Contact</span>
          <h2 className="text-white text-[32px] lg:text-[42px] font-bold mt-6 mb-5 tracking-[-0.02em]">분양문의</h2>
          <p className="text-white/35 text-[14px] mb-12 leading-relaxed font-light">
            중앙하이츠 갈산역 센트럴에 대한
            <br className="sm:hidden" /> 자세한 상담을 받아보세요.
          </p>
          <a
            href="tel:1800-5636"
            className="group inline-flex items-center gap-4 px-14 py-5 bg-gold hover:bg-gold-light text-white text-[20px] font-bold tracking-[2px] transition-all duration-500 hover:shadow-2xl hover:shadow-gold/15"
          >
            <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            1800-5636
          </a>
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-white/20 text-[12px] font-light tracking-wide">
            <span>시행 | 배조아파트소규모재건축사업조합</span>
            <span>시공/분양 | 중앙건설산업(주)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
