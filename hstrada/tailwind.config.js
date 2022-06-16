/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      display: ['Epilogue']
    },
    extend: {
      fontFamily: {
        sans: ['Sora', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
