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
        gradient: "rgba(253, 197, 94, 0.1)",
      },
      boxShadow: {
        "3xl": "0px 0px 12px -3px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
