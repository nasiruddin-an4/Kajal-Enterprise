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
        'brand-blue-dark': '#00196b',
        'brand-blue-light': '#3b82f6',
        'brand-blue-medium': '#3b82f6',
        'brand-green-dark': '#16a34a',
        'brand-green-light': '#4ade80',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}