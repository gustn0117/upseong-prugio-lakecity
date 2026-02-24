"use client";

import { useEffect, useState, useRef } from "react";
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

interface HomeSectionProps {
  onTabChange?: (tabId: string) => void;
}

export default function HomeSection({ onTabChange }: HomeSectionProps) {
  const [loaded, setLoaded] = useState(false);
  const about = useInView();
  const features = useInView(0.1);
  const cta = useInView();

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToContent = () => {
    const el = document.getElementById("home-content");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
      {/* ══════════════════════════════════════════════
          INTRO SCREEN — Elegant Centered Splash
          ══════════════════════════════════════════════ */}
      <div className="relative h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden">

        {/* Background Image */}
        <Image
          src="/images/hero-lake.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />

        {/* Cream Overlay */}
        <div className="absolute inset-0 bg-[#F5F3EF]/[0.88]" />

        {/* Subtle Dot Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(circle, #0F1B2D 0.5px, transparent 0.5px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Thin Horizontal Lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, #0F1B2D, #0F1B2D 1px, transparent 1px, transparent 120px)",
          }}
        />

        {/* Decorative Corner Photo Strips */}
        <div className={`absolute top-8 left-8 lg:top-14 lg:left-14 w-[120px] h-[160px] sm:w-[140px] sm:h-[180px] lg:w-[180px] lg:h-[240px] overflow-hidden transition-all duration-[1800ms] delay-[600ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>
          <Image src="/images/nature-park.jpg" alt="" fill className="object-cover" sizes="180px" />
          <div className="absolute inset-0 bg-[#F5F3EF]/30" />
          <div className="absolute inset-0 border border-white/40" />
        </div>
        <div className={`absolute bottom-20 right-8 lg:bottom-24 lg:right-14 w-[100px] h-[140px] sm:w-[120px] sm:h-[160px] lg:w-[160px] lg:h-[220px] overflow-hidden transition-all duration-[1800ms] delay-[800ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <Image src="/images/lake-view.jpg" alt="" fill className="object-cover" sizes="160px" />
          <div className="absolute inset-0 bg-[#F5F3EF]/30" />
          <div className="absolute inset-0 border border-white/40" />
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] lg:w-[620px] lg:h-[620px] rounded-full border border-navy/[0.05] animate-[spin_120s_linear_infinite]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] lg:w-[520px] lg:h-[520px] rounded-full border border-navy/[0.07]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full border border-navy/[0.04] animate-[spin_90s_linear_infinite_reverse]" />
        </div>

        {/* Decorative Gold Corner Accents */}
        <div className="absolute top-10 right-10 lg:top-16 lg:right-16 pointer-events-none">
          <div className="w-12 h-12 lg:w-16 lg:h-16 border-t border-r border-gold/20" />
        </div>
        <div className="absolute bottom-24 left-10 lg:bottom-28 lg:left-16 pointer-events-none">
          <div className="w-12 h-12 lg:w-16 lg:h-16 border-b border-l border-gold/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          {/* Building Icon */}
          <div className={`mb-8 transition-all duration-[1200ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
            <svg className="w-14 h-14 text-navy/30" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1}>
              <rect x="18" y="12" width="28" height="44" rx="1" />
              <rect x="8" y="28" width="10" height="28" rx="1" />
              <rect x="46" y="28" width="10" height="28" rx="1" />
              <line x1="24" y1="20" x2="28" y2="20" />
              <line x1="24" y1="26" x2="28" y2="26" />
              <line x1="24" y1="32" x2="28" y2="32" />
              <line x1="24" y1="38" x2="28" y2="38" />
              <line x1="36" y1="20" x2="40" y2="20" />
              <line x1="36" y1="26" x2="40" y2="26" />
              <line x1="36" y1="32" x2="40" y2="32" />
              <line x1="36" y1="38" x2="40" y2="38" />
              <rect x="28" y="46" width="8" height="10" />
              <line x1="12" y1="34" x2="14" y2="34" />
              <line x1="12" y1="40" x2="14" y2="40" />
              <line x1="50" y1="34" x2="52" y2="34" />
              <line x1="50" y1="40" x2="52" y2="40" />
            </svg>
          </div>

          {/* Main English Title */}
          <h1
            className={`text-navy text-[36px] sm:text-[48px] lg:text-[60px] tracking-[12px] sm:tracking-[16px] lg:tracking-[22px] leading-none transition-all duration-[1400ms] delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ fontWeight: 200 }}
          >
            PRUGIO
          </h1>

          {/* Subtitle line with decorations */}
          <div className={`flex items-center gap-4 mt-5 mb-6 transition-all duration-[1400ms] delay-400 ${loaded ? "opacity-100" : "opacity-0"}`}>
            <span className="w-10 sm:w-16 h-[1px] bg-navy/20" />
            <span className="text-navy/50 text-[12px] sm:text-[14px] tracking-[6px] sm:tracking-[10px] font-light">
              레 이 크 시 티
            </span>
            <span className="w-10 sm:w-16 h-[1px] bg-navy/20" />
          </div>

          {/* Description */}
          <p className={`text-navy/40 text-[13px] sm:text-[14px] tracking-[2px] font-light mb-2 transition-all duration-[1400ms] delay-600 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
            호수공원 앞 · 프리미엄 주거단지
          </p>
          <p className={`text-navy/25 text-[10px] sm:text-[11px] tracking-[4px] uppercase font-light mb-14 transition-all duration-[1400ms] delay-700 ${loaded ? "opacity-100" : "opacity-0"}`}>
            Lake Park Premium Residence · DL E&amp;C
          </p>

          {/* Enter Button */}
          <button
            onClick={scrollToContent}
            className={`px-16 sm:px-20 py-4 sm:py-5 border border-navy/15 text-navy/50 text-[11px] sm:text-[12px] tracking-[5px] sm:tracking-[6px] uppercase font-light rounded-[4px] hover:bg-navy hover:text-white hover:border-navy transition-all duration-500 backdrop-blur-sm cursor-pointer ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: loaded ? "900ms" : "0ms" }}
          >
            ENTER
          </button>
        </div>

        {/* Bottom Nav */}
        <div className={`absolute bottom-0 left-0 right-0 border-t border-navy/[0.06] py-5 backdrop-blur-sm bg-white/20 transition-all duration-[1400ms] delay-[1100ms] ${loaded ? "opacity-100" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap px-6">
            {[
              { id: "business", label: "사업개요", en: "OVERVIEW" },
              { id: "location", label: "입지환경", en: "LOCATION" },
              { id: "premium", label: "프리미엄", en: "PREMIUM" },
              { id: "register", label: "관심고객", en: "REGISTER" },
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => onTabChange?.(item.id)}
                className="group flex items-center gap-2 text-navy/30 hover:text-navy/60 transition-colors duration-300"
              >
                {i > 0 && <span className="text-navy/10 mr-2 hidden sm:inline">·</span>}
                <span className="text-[10px] sm:text-[11px] tracking-[3px] uppercase font-light">{item.en}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          MAIN CONTENT — Below the Fold
          ══════════════════════════════════════════════ */}
      <div id="home-content">

        {/* Hero Image Section */}
        <div className="relative h-[70vh] min-h-[500px]">
          <Image
            src="/images/hero-lake.jpg"
            alt="호수공원 전경"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-[1400px] mx-auto w-full px-8 lg:px-16 pb-16 lg:pb-24">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-gold/60 text-[10px] tracking-[5px] uppercase mb-3">Upseong Prugio Lakecity</p>
                  <h2 className="text-white text-[32px] sm:text-[44px] lg:text-[56px] font-extralight leading-[1.1] tracking-tight">
                    호수 위의<br />라이프
                  </h2>
                </div>
                <div className="hidden lg:flex items-center gap-10">
                  {[
                    { num: "1,165", label: "총 세대" },
                    { num: "29F", label: "최고층" },
                    { num: "0분", label: "호수공원" },
                  ].map((s, i) => (
                    <div key={i} className="text-right">
                      <p className="text-white text-[28px] font-extralight tracking-tight">{s.num}</p>
                      <p className="text-white/25 text-[10px] tracking-wider mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════ ABOUT ══════════ */}
        <div ref={about.ref} className="bg-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 min-h-[80vh]">
              <div className={`lg:col-span-5 flex flex-col justify-center px-8 lg:px-16 py-20 lg:py-32 transition-all duration-[900ms] ${about.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
                <p className="text-gold text-[10px] tracking-[5px] font-medium uppercase mb-8">About</p>
                <h2 className="text-[32px] lg:text-[44px] font-extralight text-charcoal leading-[1.2] tracking-tight mb-8">
                  일상이<br />새로워지다
                </h2>
                <div className="w-10 h-[1px] bg-gold/40 mb-8" />
                <p className="text-cool-gray text-[14px] leading-[2.2] font-light mb-12">
                  업성 푸르지오 레이크시티는 호수공원 바로 앞에 위치하여
                  탁 트인 호수 조망과 쾌적한 자연환경을 누릴 수 있습니다.
                  DL이앤씨 푸르지오 브랜드로 새로운 라이프스타일과
                  프리미엄 주거 가치를 제공합니다.
                </p>
                <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    { num: "1,165", label: "총 세대수" },
                    { num: "5", label: "개동" },
                    { num: "84·111", label: "㎡ 타입" },
                    { num: "0분", label: "호수공원" },
                  ].map((s, i) => (
                    <div key={i}>
                      <p className="text-navy text-[28px] font-extralight tracking-tight">{s.num}</p>
                      <p className="text-cool-gray/60 text-[11px] tracking-wider mt-1 font-light">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`lg:col-span-7 relative min-h-[400px] lg:min-h-0 transition-all duration-[900ms] delay-200 ${about.visible ? "opacity-100" : "opacity-0"}`}>
                <Image src="/images/nature-park.jpg" alt="호수공원" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
              </div>
            </div>
          </div>
        </div>

        {/* ══════════ FEATURES ══════════ */}
        <div ref={features.ref} className="bg-[#FAFAF8] py-28 lg:py-40">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
            <div className={`mb-20 transition-all duration-700 ${features.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="text-gold text-[10px] tracking-[5px] font-medium uppercase mb-4">Premium Value</p>
              <h2 className="text-[28px] lg:text-[40px] font-extralight text-charcoal tracking-tight leading-tight">
                걸어서 누리는<br />완성된 프리미엄
              </h2>
            </div>

            {/* Feature 1 — Large */}
            <div className={`mb-4 transition-all duration-700 delay-100 ${features.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="group relative h-[50vh] min-h-[360px] overflow-hidden">
                <Image src="/images/premium-nature.jpg" alt="자연중심" fill className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]" sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-end p-8 lg:p-14">
                  <div>
                    <span className="text-gold/70 text-[10px] tracking-[4px] uppercase">Nature</span>
                    <h3 className="text-white text-[28px] lg:text-[36px] font-extralight tracking-tight mt-2">자연중심</h3>
                    <p className="text-white/40 text-[13px] font-light mt-3 max-w-[400px] leading-relaxed">
                      호수공원 바로 앞! 탁 트인 호수 조망과 풍요로운 자연환경의 힐링 라이프
                    </p>
                    <div className="flex items-center gap-3 mt-5">
                      <span className="text-gold text-[24px] font-extralight">01</span>
                      <div className="w-8 h-[1px] bg-gold/40" />
                      <span className="text-white/30 text-[11px] tracking-wider">도보 1분</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 & 3 */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {[
                { img: "/images/premium-transport-new.jpg", tag: "Transport", title: "교통중심", desc: "편리한 광역교통망과 우수한 도로 접근성", num: "02", badge: "KTX 역세권" },
                { img: "/images/premium-life.jpg", tag: "Living", title: "생활중심", desc: "대형마트, 상업시설 등 편리한 생활 인프라", num: "03", badge: "도보 2분" },
              ].map((f, i) => (
                <div
                  key={i}
                  className={`group relative h-[45vh] min-h-[300px] overflow-hidden transition-all duration-700 ${features.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${200 + i * 150}ms` }}
                >
                  <Image src={f.img} alt={f.title} fill className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]" sizes="50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-end p-7 lg:p-10">
                    <div>
                      <span className="text-gold/60 text-[10px] tracking-[4px] uppercase">{f.tag}</span>
                      <h3 className="text-white text-[24px] lg:text-[28px] font-extralight tracking-tight mt-2">{f.title}</h3>
                      <p className="text-white/35 text-[12px] font-light mt-2 leading-relaxed">{f.desc}</p>
                      <div className="flex items-center gap-3 mt-4">
                        <span className="text-gold text-[20px] font-extralight">{f.num}</span>
                        <div className="w-6 h-[1px] bg-gold/30" />
                        <span className="text-white/25 text-[10px] tracking-wider">{f.badge}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature 4 */}
            <div className={`group relative h-[40vh] min-h-[280px] overflow-hidden transition-all duration-700 delay-500 ${features.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <Image src="/images/premium-education.jpg" alt="교육중심" fill className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-end justify-end p-8 lg:p-14 text-right">
                <div>
                  <span className="text-gold/60 text-[10px] tracking-[4px] uppercase">Education</span>
                  <h3 className="text-white text-[28px] lg:text-[36px] font-extralight tracking-tight mt-2">교육중심</h3>
                  <p className="text-white/35 text-[13px] font-light mt-3 max-w-[400px] leading-relaxed">
                    도보권 내 초·고등학교 설립 예정, 우수한 교육 환경
                  </p>
                  <div className="flex items-center justify-end gap-3 mt-5">
                    <span className="text-white/25 text-[10px] tracking-wider">도보 10분</span>
                    <div className="w-6 h-[1px] bg-gold/30" />
                    <span className="text-gold text-[20px] font-extralight">04</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════ CTA ══════════ */}
        <div ref={cta.ref} className="bg-navy py-28 lg:py-36">
          <div className={`max-w-[600px] mx-auto px-6 text-center transition-all duration-700 ${cta.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-gold/40 text-[10px] tracking-[5px] uppercase mb-6">Contact</p>
            <h2 className="text-white text-[36px] lg:text-[48px] font-extralight tracking-tight mb-4">분양문의</h2>
            <div className="w-8 h-[1px] bg-gold/30 mx-auto mb-8" />
            <p className="text-white/25 text-[13px] font-light mb-12 leading-relaxed">
              업성 푸르지오 레이크시티에 대해<br />자세한 상담을 받아보세요.
            </p>
            <a
              href="tel:1844-0981"
              className="inline-block px-16 py-5 bg-white text-navy text-[18px] font-semibold tracking-widest hover:bg-off-white transition-all duration-300"
            >
              1844-0981
            </a>
            <p className="text-white/10 text-[11px] mt-10 tracking-wider">시공 DL이앤씨</p>
          </div>
        </div>
      </div>
    </section>
  );
}
