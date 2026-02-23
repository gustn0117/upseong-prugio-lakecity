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
    <div className={`relative h-[280px] overflow-hidden flex items-center justify-center ${fallbackGradient}`}>
      {/* 물결 패턴 */}
      <div className="absolute inset-0 pattern-waves opacity-40" />
      {/* 부드러운 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-r from-elif-green/30 via-elif-lake/10 to-elif-green/30" />
      {/* 하단 웨이브 커브 */}
      <div className="absolute -bottom-1 left-0 right-0 h-16 z-[1]">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,60 L0,20 Q360,0 720,20 Q1080,40 1440,20 L1440,60 Z" fill="#FAFAF7" />
        </svg>
      </div>
      <div className="relative z-10 text-center">
        <h2 className="banner-title-animate text-white text-[38px] font-light tracking-[16px]" style={{ fontFamily: "'Noto Serif KR', serif" }}>
          {title}
        </h2>
      </div>
      <p className="banner-sub-animate absolute bottom-12 text-white/70 text-[13px] text-center w-full z-10 tracking-wide" style={{ fontFamily: "'Noto Serif KR', serif" }}>
        {subtitle}
      </p>
    </div>
  );
}
