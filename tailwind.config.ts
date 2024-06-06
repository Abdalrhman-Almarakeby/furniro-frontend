import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        "2xl": "1.375rem",
        "3xl": "1.5rem",
      },
      colors: {
        "neutral-1": "#fefefe",
        "neutral-2": "#f3f5f7",
        "neutral-3": "#e8ecef",
        "neutral-4": "#6c7275",
        "neutral-5": "#343839",
        "neutral-6": "#232627",
        "neutral-7": "#141718",
        "accent-blue": "#377dff",
        "accent-green": "#38cb89",
        "accent-orange": "#ffab00",
        "accent-red": "#ff5630",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
