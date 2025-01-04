import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        neptune: "#789BA9",
        orange: "#D96E66",
        purple: "#8587B0",
        gray: "#8F8F95",
        black: {
          "100": "#37374A",
          "200": "var(--background)", //#20212D
          "300": "#20212D",
        },
        white: {
          "100": "var(--foreground)", //#F1FBFF
          "200": "#D3E5ED",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
