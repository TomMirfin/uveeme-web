import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        vs: { max: "479px" },
        sm: { min: "480px" },
        md: { min: "768px" },
        lg: { max: "1280px" },
        xl: { min: "1440px" },
      },
    },
  },
  plugins: [],
};
export default config;
