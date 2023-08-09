/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 2s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
// marquee keyframes and animation info:
// https://olavihaapala.fi/2021/02/23/modern-marquee.html
// https://jackwhiting.co.uk/posts/creating-a-marquee-with-tailwind/
