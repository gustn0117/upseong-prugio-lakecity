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
        "elif-green": "#054438",
        "elif-green-light": "#0a5e4d",
        "elif-beige": "#C8BAA7",
        "elif-lime": "#DADDB9",
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
