import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "prugio-blue": "#1E4A6E",
        "prugio-blue-light": "#2B6A94",
        "prugio-blue-dark": "#132F47",
        "prugio-beige": "#C4B49A",
        "prugio-sand": "#C4B49A",
        "prugio-gold": "#C9A96E",
        "prugio-gold-light": "#D4B87A",
        "prugio-sky": "#7EB4D2",
        "prugio-sage": "#8BAAB5",
        "prugio-lime": "#8BAAB5",
        "prugio-moss": "#6B96A8",
        "prugio-stone": "#E8E2D8",
        "prugio-cream": "#F5F2EC",
        "prugio-bark": "#4F5E6B",
      },
      fontFamily: {
        sans: ["Pretendard", "Noto Sans KR", "sans-serif"],
        serif: ["Noto Serif KR", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
