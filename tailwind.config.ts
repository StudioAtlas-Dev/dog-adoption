import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: "#dc143c",
        secondary: "#dc143c",
        sectionBackground: "#F0F5F2",
        mainText: "#333333",
        footer: "#4A4A4A",
      },
    },
  },
  plugins: [],
} satisfies Config;
