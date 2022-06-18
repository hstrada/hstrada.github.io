/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      neutral: {
        900: '#161616',
      },
      yellow: {
        500: '#FFCC00',
      },
    },
    fontFamily: {
      display: ['Epilogue'],
    },
    extend: {
      fontFamily: {
        sans: ['Sora', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
