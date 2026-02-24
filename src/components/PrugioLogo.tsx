"use client";

interface PrugioLogoProps {
  white?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  showSub?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { main: "text-[18px]", sub: "text-[8px]", line: "w-4 mx-1.5", tracking: "tracking-[5px]" },
  md: { main: "text-[24px]", sub: "text-[9px]", line: "w-5 mx-2", tracking: "tracking-[6px]" },
  lg: { main: "text-[32px]", sub: "text-[10px]", line: "w-6 mx-2", tracking: "tracking-[8px]" },
  xl: { main: "text-[44px] lg:text-[52px]", sub: "text-[11px] lg:text-[12px]", line: "w-8 mx-2.5", tracking: "tracking-[10px]" },
};

export default function PrugioLogo({
  white = false,
  size = "md",
  showSub = true,
  className = "",
}: PrugioLogoProps) {
  const s = sizeMap[size];
  const mainColor = white ? "text-white" : "text-navy";
  const lineColor = white ? "bg-gold/40" : "bg-gold/60";
  const subColor = white ? "text-white/40" : "text-cool-gray";

  return (
    <div className={`flex items-center ${className}`}>
      <span
        className={`${s.main} font-semibold ${s.tracking} ${mainColor} leading-none`}
      >
        PRUGIO
      </span>
      {showSub && (
        <>
          <span className={`${s.line} h-[1px] ${lineColor}`} />
          <span className={`${s.sub} ${subColor} tracking-[2px] font-medium`}>
            LAKECITY
          </span>
        </>
      )}
    </div>
  );
}
