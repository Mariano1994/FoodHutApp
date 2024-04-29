/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        huge: "12rem",
      },

      colors: {
        base: "#191919",
        primary: "#f54748",
        secondary: "#FDC55E",
        alt: "#E5E5E5",
        gradient: "rgba(245, 71, 72, 0.3)",
      },
    },
  },
  plugins: [],
};
