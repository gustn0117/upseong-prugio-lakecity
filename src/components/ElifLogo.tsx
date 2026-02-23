"use client";

interface ElifLogoProps {
  white?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  showSub?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { main: "text-[20px]", sub: "text-[8px]", gap: "gap-0.5", tracking: "tracking-[6px]" },
  md: { main: "text-[28px]", sub: "text-[10px]", gap: "gap-1", tracking: "tracking-[8px]" },
  lg: { main: "text-[36px]", sub: "text-[11px]", gap: "gap-1", tracking: "tracking-[10px]" },
  xl: { main: "text-[48px] lg:text-[56px]", sub: "text-[12px] lg:text-[13px]", gap: "gap-1.5", tracking: "tracking-[12px]" },
};

export default function ElifLogo({
  white = false,
  size = "md",
  showSub = true,
  className = "",
}: ElifLogoProps) {
  const s = sizeMap[size];
  const mainColor = white ? "text-white" : "text-elif-green";
  const accentColor = white ? "text-white" : "text-elif-green";
  const dotColor = "text-[#C9A96E]";
  const subColor = white ? "text-white/50" : "text-gray-400";

  return (
    <div className={`flex flex-col ${s.gap} ${className}`}>
      <div className="flex items-baseline">
        <span
          className={`${s.main} font-bold ${s.tracking} ${mainColor} leading-none`}
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          EL
        </span>
        <span
          className={`${s.main} font-bold ${s.tracking} ${accentColor} leading-none`}
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          IF
        </span>
        <span
          className={`${dotColor} leading-none ml-0.5`}
          style={{ fontSize: size === "xl" ? "10px" : size === "lg" ? "8px" : "6px" }}
        >
          ●
        </span>
      </div>
      {showSub && (
        <span className={`${s.sub} ${subColor} tracking-[3px] font-medium`}>
          성성호수공원
        </span>
      )}
    </div>
  );
}
