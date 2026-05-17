import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#11100e",
        foreground: "#f7efe3",
        muted: "#211d19",
        "muted-foreground": "#b8aa9a",
        border: "#332b24",
        card: "#181512",
        accent: {
          DEFAULT: "#c58a55",
          foreground: "#17110c",
          soft: "#2d2118",
          dark: "#e0ad78",
        },
      },
      boxShadow: {
        soft: "0 22px 70px rgba(0, 0, 0, 0.34)",
        lift: "0 14px 38px rgba(0, 0, 0, 0.35)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [typography],
};

export default config;
