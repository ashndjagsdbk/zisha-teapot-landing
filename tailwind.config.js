/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F4EFE7",
        warm: "#E8DED1",
        sand: "#D8CABA",
        ink: "#1F1D1A",
        ash: "#4F4841",
        mist: "#81766C",
        clay: "#7A4A38",
        terracotta: "#9B6248",
        copper: "#B5795B",
        tea: "#B88A4A",
        teaLight: "#D2AA6D",
        pine: "#5F716B",
        sage: "#A7B1AA"
      },
      fontFamily: {
        sans: [
          "Inter",
          "HarmonyOS Sans SC",
          "Noto Sans SC",
          "PingFang SC",
          "Microsoft YaHei",
          "sans-serif"
        ],
        serif: [
          "Noto Serif SC",
          "Source Han Serif SC",
          "Songti SC",
          "SimSun",
          "serif"
        ]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(31, 29, 26, 0.10)",
        innerGlow: "inset 0 1px 0 rgba(255,255,255,0.32)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 10%, rgba(184,138,74,0.16), transparent 24%), radial-gradient(circle at 80% 0%, rgba(95,113,107,0.14), transparent 26%), linear-gradient(135deg, rgba(244,239,231,0.98), rgba(232,222,209,0.92))"
      }
    }
  },
  plugins: []
};
