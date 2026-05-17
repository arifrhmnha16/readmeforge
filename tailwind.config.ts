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
        background: "#0b0f14",
        foreground: "#f4f7fb",
        muted: "#151c24",
        "muted-foreground": "#9aa7b5",
        border: "#27313c",
        card: "#10161d",
        accent: {
          DEFAULT: "#8fb3ff",
          foreground: "#07111f",
          soft: "#17243a",
          dark: "#b9cdfd",
        },
      },
      boxShadow: {
        soft: "0 22px 70px rgba(0, 0, 0, 0.28)",
        lift: "0 12px 34px rgba(18, 32, 51, 0.32)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [typography],
};

export default config;
