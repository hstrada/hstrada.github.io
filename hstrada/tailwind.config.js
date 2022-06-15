/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx}"],
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
        500: '#000000'
      }
    },
    extend: {}
  },
  plugins: []
};
