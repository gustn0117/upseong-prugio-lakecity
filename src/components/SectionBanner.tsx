"use client";

import Image from "next/image";

interface SectionBannerProps {
  title: string;
  subtitle: string;
  fallbackGradient: string;
  bgImage?: string;
}

export default function SectionBanner({
  title,
  subtitle,
  fallbackGradient,
  bgImage,
}: SectionBannerProps) {
  return (
    <div className={`relative h-[360px] lg:h-[420px] overflow-hidden flex items-center justify-center ${!bgImage ? fallbackGradient : ""}`}>
      {/* Background Image */}
      {bgImage && (
        <>
          <Image
            src={bgImage}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-elif-green-dark/60 via-elif-green-dark/20 to-elif-green-dark/70" />
        </>
      )}

      {/* Wave pattern overlay */}
      <div className="absolute inset-0 pattern-waves opacity-20" />
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-elif-green/20 via-transparent to-elif-green/20" />

      {/* SVG wave curve at bottom */}
      <div className="absolute -bottom-1 left-0 right-0 h-20 z-[1]">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,80 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,80 Z" fill="#FAFAF7" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* English label */}
        <p className="banner-sub-animate text-elif-lake text-[11px] sm:text-[12px] font-semibold tracking-[5px] uppercase mb-4 opacity-80">
          ELIF SUNGSUNG
        </p>
        {/* Title */}
        <h2
          className="banner-title-animate text-white text-[34px] lg:text-[48px] font-light tracking-[14px] lg:tracking-[18px] drop-shadow-lg"
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          {title}
        </h2>
        {/* Decorative line */}
        <div className="banner-sub-animate flex items-center justify-center gap-3 mt-6 mb-4">
          <span className="w-8 h-[1px] bg-elif-lake/50" />
          <span className="w-1.5 h-1.5 rounded-full bg-elif-lake/70" />
          <span className="w-8 h-[1px] bg-elif-lake/50" />
        </div>
      </div>

      {/* Subtitle */}
      <p
        className="banner-sub-animate absolute bottom-16 lg:bottom-20 text-white/70 text-[13px] sm:text-[14px] text-center w-full z-10 tracking-wider drop-shadow"
        style={{ fontFamily: "'Noto Serif KR', serif" }}
      >
        {subtitle}
      </p>
    </div>
  );
}
