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
        BG2: 'var(--background-2)',
        BG3: 'var(--background-3)',
        primaryAccent: 'var(--accent-primary)',
        secondaryAccent: 'var(--accent-secondary)',
      },
      backgroundImage: {
        'custom-img': "var(--background-image)",
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
} satisfies Config;
