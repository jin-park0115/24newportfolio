/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jejumyeongjo: ["Jeju Myeongjo", "serif"],
        jejugothic: ["JejuGothic", "sans-serif"],
        leeseoyun: ["LeeSeoyun", "sans-serif"],
      },
      colors: {
        primary: "#208E6b",
        second: "#001f3f",
      },
      boxShadow: {
        custom: "0 0 .5rem 0 rgba(68, 68, 68, .4)",
      },
      screens: {
        mobileS: "320px",
        mobileM: "375px",
        mobileL: "425px",
        tablet: "768px",
        laptop: "1024px",
        laptopL: "1440px",
        desktop: "1920px",
      },
    },
  },
  plugins: [],
};
