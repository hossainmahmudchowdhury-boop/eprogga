/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#0290fd',
          700: '#037cff',
          800: '#1d4ed8',
          900: '#1e3a8a',
          dark: '#0a0b14',
          navy: '#15192c',
        }
      },
      fontFamily: {
        sans: ['Hind Siliguri', 'Kalpurush', 'Sen', 'sans-serif'],
        bangla: ['Hind Siliguri', 'Kalpurush', 'sans-serif'],
      },
      boxShadow: {
        'acscamp': '0 6px 0 0 rgba(2, 144, 253, 0.4), 0 12px 18px -8px rgba(0, 0, 0, 0.35)',
        'acscamp-hover': '0 10px 0 0 rgba(2, 144, 253, 0.6), 0 22px 26px -10px rgba(0, 0, 0, 0.45)',
      }
    },
  },
  plugins: [],
}
