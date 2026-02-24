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

export default function HomeSection() {
  const [loaded, setLoaded] = useState(false);
  const about = useInView();
  const features = useInView(0.1);
  const cta = useInView();

  useEffect(() => { setLoaded(true); }, []);

  return (
    <section>
      {/* ══════════ HERO — Cinematic Full Screen ══════════ */}
      <div className="relative h-screen min-h-[700px] flex items-end">
        <Image
          src="/images/hero-lake.jpg"
          alt="호수공원 전경"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

        {/* Hero Content — Bottom Aligned */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-16 pb-20 lg:pb-28">
          <div
            className={`transition-all duration-[1400ms] ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <p className="text-gold/70 text-[11px] tracking-[6px] font-medium uppercase mb-6">
              Upseong Prugio Lakecity
            </p>
            <h1 className="text-white text-[40px] sm:text-[56px] lg:text-[72px] xl:text-[84px] font-extralight leading-[1.05] tracking-tight mb-8">
              호수 위의
              <br />
              <span className="font-light">라이프</span>
            </h1>
            <div className="flex items-center gap-6 mb-10">
              <div className="w-16 h-[1px] bg-gold/50" />
              <p className="text-white/40 text-[14px] font-light tracking-wide">
                호수공원 바로 앞, DL이앤씨 푸르지오
              </p>
            </div>

            <div
              className={`flex flex-wrap items-center gap-4 transition-all duration-[1400ms] delay-500 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <button className="px-10 py-4 bg-white text-navy text-[13px] font-semibold tracking-wider hover:bg-off-white transition-all duration-300">
                관심고객 등록
              </button>
              <a
                href="tel:1844-0981"
                className="px-10 py-4 border border-white/20 text-white/60 text-[13px] font-light tracking-wider hover:text-white hover:border-white/40 transition-all duration-300"
              >
                1844-0981
              </a>
            </div>
          </div>

          {/* Stats Row — Bottom Right */}
          <div
            className={`hidden lg:flex absolute bottom-28 right-16 items-center gap-12 transition-all duration-[1400ms] delay-700 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            {[
              { num: "1,165", label: "총 세대" },
              { num: "29F", label: "최고층" },
              { num: "0분", label: "호수공원" },
            ].map((s, i) => (
              <div key={i} className="text-right">
                <p className="text-white text-[32px] font-extralight tracking-tight">{s.num}</p>
                <p className="text-white/30 text-[11px] tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Hint */}
        <div
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-1000 delay-1000 ${
            loaded ? "opacity-60" : "opacity-0"
          }`}
        >
          <div className="w-[1px] h-10 bg-white/30 scroll-line" />
        </div>
      </div>

      {/* ══════════ ABOUT — Editorial Layout ══════════ */}
      <div ref={about.ref} className="bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 min-h-[80vh]">
            {/* Left: Text */}
            <div className={`lg:col-span-5 flex flex-col justify-center px-8 lg:px-16 py-20 lg:py-32 transition-all duration-[900ms] ${about.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <p className="text-gold text-[10px] tracking-[5px] font-medium uppercase mb-8">About the project</p>
              <h2 className="text-[32px] lg:text-[44px] font-extralight text-charcoal leading-[1.2] tracking-tight mb-8">
                일상이
                <br />
                새로워지다
              </h2>
              <div className="w-10 h-[1px] bg-gold/40 mb-8" />
              <p className="text-cool-gray text-[14px] leading-[2.2] font-light mb-12">
                업성 푸르지오 레이크시티는 호수공원 바로 앞에 위치하여
                탁 트인 호수 조망과 쾌적한 자연환경을 누릴 수 있습니다.
                DL이앤씨 푸르지오 브랜드로 새로운 라이프스타일과
                프리미엄 주거 가치를 제공합니다.
              </p>

              {/* Minimal Stats */}
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

            {/* Right: Image */}
            <div className={`lg:col-span-7 relative min-h-[400px] lg:min-h-0 transition-all duration-[900ms] delay-200 ${about.visible ? "opacity-100" : "opacity-0"}`}>
              <Image
                src="/images/nature-park.jpg"
                alt="호수공원 자연환경"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ FEATURES — Full-width Image Blocks ══════════ */}
      <div ref={features.ref} className="bg-off-white py-28 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className={`mb-20 transition-all duration-700 ${features.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-gold text-[10px] tracking-[5px] font-medium uppercase mb-4">Premium Value</p>
            <h2 className="text-[28px] lg:text-[40px] font-extralight text-charcoal tracking-tight leading-tight">
              걸어서 누리는
              <br />
              완성된 프리미엄
            </h2>
          </div>

          {/* Feature 1 */}
          <div className={`mb-4 transition-all duration-700 delay-100 ${features.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="group relative h-[50vh] min-h-[360px] overflow-hidden">
              <Image
                src="/images/premium-nature.jpg"
                alt="자연중심"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-end p-8 lg:p-14">
                <div>
                  <span className="text-gold/70 text-[10px] tracking-[4px] font-medium uppercase">Nature</span>
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

          {/* Feature 2 & 3 — Side by Side */}
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
                    <span className="text-gold/60 text-[10px] tracking-[4px] font-medium uppercase">{f.tag}</span>
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
            <Image
              src="/images/premium-education.jpg"
              alt="교육중심"
              fill
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-end justify-end p-8 lg:p-14 text-right">
              <div>
                <span className="text-gold/60 text-[10px] tracking-[4px] font-medium uppercase">Education</span>
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

      {/* ══════════ CTA — Clean Minimal ══════════ */}
      <div ref={cta.ref} className="bg-navy py-28 lg:py-36">
        <div className={`max-w-[600px] mx-auto px-6 text-center transition-all duration-700 ${cta.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold/40 text-[10px] tracking-[5px] font-medium uppercase mb-6">Contact</p>
          <h2 className="text-white text-[36px] lg:text-[48px] font-extralight tracking-tight mb-4">분양문의</h2>
          <div className="w-8 h-[1px] bg-gold/30 mx-auto mb-8" />
          <p className="text-white/25 text-[13px] font-light mb-12 leading-relaxed">
            업성 푸르지오 레이크시티에 대해<br />
            자세한 상담을 받아보세요.
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
    </section>
  );
}
