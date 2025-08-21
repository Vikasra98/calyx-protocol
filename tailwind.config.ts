import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      animation: {
        spinSlow: "spin 5s linear infinite",
        spinFast: "spin 1s linear infinite"
      },
      colors: {
        primary: "#12291E",
        accent: "#E59B73"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"], // Inter for body
        libre: ["var(--font-libre-baskerville)", "serif"] // Libre for headings
      }
    }
  },
  plugins: []
};
export default config;
