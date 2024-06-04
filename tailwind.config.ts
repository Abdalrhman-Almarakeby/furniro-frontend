import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "neutral-1": "#fefefe",
        "neutral-2": "#f3f5f7",
        "neutral-3": "#e8ecef",
        "neutral-4": "#6c7275",
        "neutral-5": "#343839",
        "neutral-6": "#232627",
        "neutral-7": "#141718",
      },
    },
  },
  plugins: [],
};
export default config;
