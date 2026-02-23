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
        "elif-green": "#2D5A45",
        "elif-green-light": "#3D7A5C",
        "elif-green-dark": "#1E3D30",
        "elif-beige": "#C4B49A",
        "elif-sand": "#C4B49A",
        "elif-lake": "#6B9DAB",
        "elif-lake-light": "#8FB8C4",
        "elif-sky": "#B4CED6",
        "elif-sage": "#B5C4A8",
        "elif-lime": "#B5C4A8",
        "elif-moss": "#8BA07A",
        "elif-stone": "#E8E2D8",
        "elif-cream": "#F5F2EC",
        "elif-bark": "#6B5E4F",
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
