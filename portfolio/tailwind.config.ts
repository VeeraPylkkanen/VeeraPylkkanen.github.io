import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBG: 'var(--background-primary)',
        primaryAccent: 'var(--accent-primary)'
      },
      backgroundImage: {
        'custom-img': "var(--background-image)",
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
} satisfies Config;
