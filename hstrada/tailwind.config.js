/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{tsx,jsx}'],
  theme: {
    colors: {
      blue: '#1fb6ff',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#FFCC00',
      gray: {
        300: '#cccccc',
        400: '#aaaaaa',
        700: '#707070',
        900: '#262626'
      }
    },
    extend: {
      fontFamily: {
        sora: ['Sora', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
