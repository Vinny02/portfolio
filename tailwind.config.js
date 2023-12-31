/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {

    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
      'darkblue': '#00008B',
      'gray':  '#a2a2a2',
      'highlight': '#7D7463',
    },
    fontFamily: {
      'opensans': ['Open Sans', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

