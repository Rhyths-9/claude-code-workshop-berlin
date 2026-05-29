import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0C0F0A",
        paper: "#FFFFFF",
        pink: "#FF206E",
        yellow: "#FBFF12",
        teal: "#41EAD4",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica Neue", "sans-serif"],
        display: ["Arial Black", "Arial", "sans-serif"],
        mono: ["Courier New", "Courier", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
