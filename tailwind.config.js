const { violet, blackA, mauve, green } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        huge: "12rem",
      },

      colors: {
        ...mauve,
        ...violet,
        ...green,
        ...blackA,
        base: "#191919",
        primary: "#f54748",
        secondary: "#FDC55E",
        alt: "#E5E5E5",
        gradient: "rgba(253, 197, 94, 0.1)",
      },
      boxShadow: {
        "3xl": "0px 0px 12px -3px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        contentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
