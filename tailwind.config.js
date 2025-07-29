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
      keyframes: {
        slideUp: {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        slideUp: 'slideUp 0.8s forwards',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards'
      }
    }
  },
  variants: {
    extend: {
      ringWidth: ['focus-visible'],
      outline: ['focus-visible'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}