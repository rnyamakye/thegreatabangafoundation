/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [],
};
