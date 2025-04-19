// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-hover': '#E0D1F9',
        'dark-hover': '#2a004a',
        'dark-theme': '#11001F',
      },
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
        Ovo: ['Ovo', 'serif'],
      },
    },
  },
  plugins: [],
}