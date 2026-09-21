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
        plum: {
          DEFAULT: "#173F44",
          dark: "#0D3035",
        },
        cream: "#FFF3F2",
        paper: "#FFFDF9",
        ink: "#102F34",
        muted: "#657579",
        terra: "#EF4A57",
        rose: "#FFD9DD",
        sage: "#DDF1EA",
        line: "#DEE8E6",
        nav: "#FBF7EC",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        sticky: "0px -4px 16px 0px rgba(53, 19, 47, 0.12)",
        card: "0 2px 12px 0 rgba(16, 47, 52, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
