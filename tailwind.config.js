/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: "#100014",
        primaryYellow: "#ffd500",
        lavender: "#6e40a9",
      },
      fontFamily: {
        sans: [
          "var(--font-raleway)",
          "Arial",
          "Impact",
          "Gill Sans",
          "Helvetica",
          "sans-serif",
        ],
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(15em, 1fr))",
      },
      gridTemplateRows: {
        fluid: "repeat(auto-fit, minmax(20em, 1f))",
      },
      boxShadow: {
        neu: "6px 6px 12px #1a061f;",
        light: "6px 6px 12px #dcdcdc",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};
