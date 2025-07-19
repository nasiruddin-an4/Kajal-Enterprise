/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#16a34a',
        'brand-blue': '#00196b',
        'brand-black': '#232b2b',
      },
    },
  },
  plugins: [],
}