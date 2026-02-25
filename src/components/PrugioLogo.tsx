"use client";

interface PrugioLogoProps {
  white?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  showSub?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { main: "text-[16px]", sub: "text-[8px]", line: "w-3 mx-1.5", tracking: "tracking-[4px]" },
  md: { main: "text-[20px]", sub: "text-[9px]", line: "w-4 mx-2", tracking: "tracking-[5px]" },
  lg: { main: "text-[28px]", sub: "text-[10px]", line: "w-5 mx-2", tracking: "tracking-[6px]" },
  xl: { main: "text-[40px] lg:text-[48px]", sub: "text-[11px] lg:text-[12px]", line: "w-6 mx-2.5", tracking: "tracking-[8px]" },
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
        className={`${s.main} font-extralight ${s.tracking} ${mainColor} leading-none`}
      >
        PRUGIO
      </span>
      {showSub && (
        <>
          <span className={`${s.line} h-[1px] ${lineColor}`} />
          <span className={`${s.sub} ${subColor} tracking-[2px] font-light`}>
            LAKECITY
          </span>
        </>
      )}
    </div>
  );
}
