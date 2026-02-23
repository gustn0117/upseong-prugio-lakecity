"use client";

interface SectionBannerProps {
  title: string;
  subtitle: string;
  fallbackGradient: string;
}

export default function SectionBanner({
  title,
  subtitle,
  fallbackGradient,
}: SectionBannerProps) {
  return (
    <div className={`relative h-[320px] lg:h-[360px] overflow-hidden flex items-center justify-center ${fallbackGradient}`}>
      {/* Wave pattern overlay */}
      <div className="absolute inset-0 pattern-waves opacity-30" />
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-elif-green/30 via-transparent to-elif-green/30" />

      {/* SVG wave curve at bottom */}
      <div className="absolute -bottom-1 left-0 right-0 h-20 z-[1]">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,80 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,80 Z" fill="#FAFAF7" />
        </svg>
      </div>

      {/* Title */}
      <div className="relative z-10 text-center px-6">
        <h2
          className="banner-title-animate text-white text-[34px] lg:text-[44px] font-light tracking-[14px] lg:tracking-[18px]"
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          {title}
        </h2>
      </div>

      {/* Subtitle */}
      <p
        className="banner-sub-animate absolute bottom-16 lg:bottom-20 text-white/60 text-[13px] text-center w-full z-10 tracking-wider"
        style={{ fontFamily: "'Noto Serif KR', serif" }}
      >
        {subtitle}
      </p>
    </div>
  );
}
