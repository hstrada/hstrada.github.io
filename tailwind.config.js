/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        neutral: {
          900: '#161616'
        },
        gray: {
          100: '#FAFAFA',
          300: '#F5F5F5',
          500: '#B8B8B8',
          700: '#707070'
        },
        yellow: {
          500: '#FFCC00',
          600: '#F0B724'
        }
      },
      fontFamily: {
        sans: ['var(--font-sora)'],
        display: ['var(--font-poppins)']
      },
      backgroundImage: {
        hero: "url('/images/bg-hero.png')"
      }
    }
  },
  plugins: []
};
