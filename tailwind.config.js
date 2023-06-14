/** @type {import('tailwindcss').Config} */
module.exports = {
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
        sans: ["var(--font-raleway)", "Arial", "sans-serif"],
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(15em, 1fr))",
      },
    },
  },
  plugins: [],
};
