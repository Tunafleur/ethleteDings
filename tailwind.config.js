/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    fontFamily: {
      sans: ["FIFAnybody", "Inter", "sans-serif"],
    },

    colors: {
      gg_black: "#000",
      gg_white: "#fff",
      gg_purple: "#ae6fff",
      gg_light_2: "#798191",
      gg_light_3: "#9BA1AE",
      gg_dark_2: "#19222d",
      gg_dark_3: "#1F2937",
    },
    extend: {},
  },
  plugins: [],
};
